---
sidebar_position: 2
---

# Producer-Consumer - Exercise 2

Implement the Producer-Consumer Problem using `mutex` and `semaphores`.

## Solution

Just like in the last exercise, if we don't synchronize, the threads will overwrite each other.

For example,

```idk {9-10}
Consumer id=1, item=0, position=0
Producer id=1, item=0, position=0
Producer id=2, item=0, position=0
Consumer id=2, item=0, position=0
Producer id=1, item=1, position=2
Producer id=2, item=1, position=0
Consumer id=1, item=1, position=2
Consumer id=2, item=1, position=0
Producer id=1, item=2, position=1
Producer id=2, item=2, position=1
Consumer id=1, item=2, position=1
Consumer id=2, item=1, position=2
```

we can see that two different producers wrote in the same buffer position!

<details>

<summary>🔁Synchronized version</summary>

```c title="producer_consumer.c"
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

#define BUFFER_SIZE 3
#define NUM_PRODUCERS 2
#define NUM_CONSUMERS 2
#define NUM_ITEMS 10

int buffer[BUFFER_SIZE];
int in = 0, out = 0;

pthread_mutex_t buffer_mutex;
sem_t empty, full;

void *producer(void *args)
{
    int id = *(int *)args;
    for(int i = 0; i < NUM_ITEMS; i++)
    {
        // wait for an empty slot
        sem_wait(&empty);
        pthread_mutex_lock(&buffer_mutex);

        buffer[in] = i;
        printf("Producator id=%d, item=%d, pozitie=%d\n", id, i, in);
        in = (in + 1) % BUFFER_SIZE;

        pthread_mutex_unlock(&buffer_mutex);
        sem_post(&full);
        usleep(100000);
    }
    return NULL;
}

void *consumer(void *args)
{
    int id = *(int *)args;
    for(int i = 0; i < NUM_ITEMS; i++)
    {
        sem_wait(&full);
        pthread_mutex_lock(&buffer_mutex);

        int item = buffer[out];
        printf("Consumer id=%d, item=%d, pozitie=%d\n", id, item, out);
        out = (out + 1) % BUFFER_SIZE;

        pthread_mutex_unlock(&buffer_mutex);
        sem_post(&empty);
        usleep(150000);
    }
    return NULL;
}

int main()
{
    pthread_t producers[NUM_PRODUCERS], consumers[NUM_CONSUMERS];
    int producer_ids[NUM_PRODUCERS], consumer_ids[NUM_CONSUMERS];

    pthread_mutex_init(&buffer_mutex, NULL);
    sem_init(&empty, 0, BUFFER_SIZE); // BUFFER_SIZE empty slots
    sem_init(&full, 0, 0); // 0 occupied slots

    for(int i = 0; i < NUM_PRODUCERS; i++)
    {
        producer_ids[i] = i + 1;
        pthread_create(&producers[i], NULL, producer, &producer_ids[i]);
    }

    for(int i = 0; i < NUM_CONSUMERS; i++)
    {
        consumer_ids[i] = i + 1;
        pthread_create(&consumers[i], NULL, consumer, &consumer_ids[i]);
    }

    for(int i = 0; i < NUM_PRODUCERS; i++)
        pthread_join(producers[i], NULL);

    for(int i = 0; i < NUM_CONSUMERS; i++)
        pthread_join(consumers[i], NULL);

    pthread_mutex_destroy(&buffer_mutex);
    sem_destroy(&empty);
    sem_destroy(&full);

    return 0;
}
```

</details>
