---
sidebar_position: 2
---

# Classic Problems of Synchronization

The problems presented here are used for testing newly proposed synchronization schemes.

Semaphores are used in these solutions, although mutex locks could also be used.

## The Bounded-Buffer Problem

For the bounded-buffer problem, we must revisit the [Producer-Consumer paradigm](https://sirbuig.github.io/operating-systems/week-6/background) and its [implementation](https://sirbuig.github.io/operating-systems/week-6/problems/producer-consumer).

The producer and consumer processes share the following data structures:

```c
// the pool consists of n buffers
int n;

// remember, a mutex is in fact a binary semaphore!
// provides mutual exclusion to the buffer pool
sem mutex = 1;

// the buffer initially has n empty positions
sem empty = n;

// the buffer initially has 0 full positions
sem full = 0;
```

```c title="producer process"
while(true) {
    // ...
    // produce an item in next_produced
    // ...

    // I want to produce an item,
    // so I "take" one empty spot
    wait(empty);

    // I want to enter the critical section
    wait(mutex);

    // ...
    // add next_produced to the buffer
    // ...

    // I leave the critical section
    signal(mutex);

    // I "added" an item
    signal(full);
}
```

```c title="consumer process"
while(true) {
    // If possible (semaphore > 0), I "consume" a position
    wait(full);

    // I want to enter the critical section
    wait(mutex);

    // ...
    // remove an item from buffer to next_consumed
    // ...

    // I leave the critical section
    signal(mutex);

    // One empty position is added to the semaphore
    signal(empty);

    // ...
    // consume the item in next_consumed
    // ...
}
```

:::note

Basically, the producer is producing full buffers for the consumer and the consumer is producing empty buffers for the producer.

:::

## The Readers-Writers Problem

Suppose several concurrent processes are doing operations on a database. Some processes may want only to read the database, while others may want to update (read and write) the database.

In the following problem, we'll refer to the former as **readers** and to the latter as **writers**.

There is no harm if two readers access the shared data in the same time. The problem arises if at least one writer is involved, as chaos may ensure.

To make sure we have no difficulties, we demand that the writers have **exclusive access** to the shared database while writing to it.

This synchronization problem is known as **the readers-writers problem**.

There are multiple variations to this problem, and all of them are based on priorities:

1. **First** readers-writers problem, requires that **no reader be kept waiting** unless a writer has already obtained permission to use the shared object.
2. **Second** readers-writers problem requires that, **once a writer is ready**, that writer performs its write as soon as possible.

:::note

A solution to either problem may result in **starvation**.

In the first case, writers may starve.

In the second case, readers may starve.

:::

### Starvation-free solution to the first variation

<details>

<summary>Solution</summary>

```c title="readers-writers.c"
#include <stdlib.h>
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

#define NUM_READERS 5
#define NUM_WRITERS 2

// shared "database"
int shared_data = 0;

// binary semaphores
sem_t rw_mutex, mutex;

// counting semaphore
// keeps count on how many processes are
// currently reading the object
int read_count = 0;

void *reader(void *args)
{
	int id = *(int *)args;

	while (1)
	{
		// I want to update the number of readers
		sem_wait(&mutex);

		read_count++;

		// If this is the first reader
		if (read_count == 1)
			// it means there were no active readers before
			// this blocks writers from writing
			// when readers are active
			sem_wait(&rw_mutex);

		// Release the mutex
		sem_post(&mutex);

		// shared_data is not protected because
		// multiple readers can access it concurrently
		printf("Reader %d is reading the data: %d\n", id, shared_data);

		// I want to decrement the number of readers
		sem_wait(&mutex);

		read_count--;

		// If this is the last reader
		if (read_count == 0)
			// rw_mutex is released
			// now writers can proceed
			sem_post(&rw_mutex);
		// Release the mutex
		sem_post(&mutex);

		sleep(rand() % 3 + 1);
	}

	return NULL;
}

void *writer(void *args)
{
	int id = *(int *)args;

	while (1)
	{
		// Only one writer at a time has exclusive access
		sem_wait(&rw_mutex);

		printf("Writer %d is writing...\n", id);
		shared_data++;

		// Now someone else can access the shared data
		sem_post(&rw_mutex);

		sleep(rand() % 3 + 1);
	}

	return NULL;
}

int main()
{
	pthread_t readers[NUM_READERS], writers[NUM_WRITERS];
	int readers_ids[NUM_READERS], writers_ids[NUM_WRITERS];

	// rw_mutex is common to both reader and writer processes
	// mutual exclusion semaphore for the writers
	// used only by the first and last reader that enters/exits cs
	sem_init(&rw_mutex, 0, 1);

	// to ensure mutual exclusion when read_count is updated
	sem_init(&mutex, 0, 1);

	for (int i = 0; i < NUM_READERS; i++)
	{
		readers_ids[i] = i + 1;
		pthread_create(&readers[i], NULL, reader, &readers_ids[i]);
	}

	for (int i = 0; i < NUM_WRITERS; i++)
	{
		writers_ids[i] = i + 1;
		pthread_create(&writers[i], NULL, writer, &writers_ids[i]);
	}

	for (int i = 0; i < NUM_READERS; i++)
	{
		pthread_join(readers[i], NULL);
	}

	for (int i = 0; i < NUM_WRITERS; i++)
	{
		pthread_join(writers[i], NULL);
	}

	sem_destroy(&mutex);
	sem_destroy(&rw_mutex);

	return 0;
}
```

</details>

## The Dining-Philosophers Problem

Consider five philosophers who spend their lives thinking and eating. The philosophers share a circular table surrounded by five chairs, each belonging to one philosopher.

In the center of the table is a bowl of rice, and the table is laid with five single chopsticks (or forks). From time to time, a philosopher gets hungry and tries to pick up the chopsticks closest to him and he may pick up only one chopstick at a time.

Obviously, no one can pick up a chopstick that is already in the hand of a neighbor. When a hungry philosopher has both his chopsticks at the same time, he eats without releasing the chopsticks. When he finished eating, he puts down both chopsticks and starts thinking again.

![dining_philosophers](media/dining_philosophers.png)

This problem is important because it's an example of a large class of concurrency-control problems. It raises the question: **How can we allocate several resources among several processes in a deadlock-free and starvation-free manner?**

### Semaphore Solution

We can represent each chopstick with a semaphore.

A philosopher tries to grab a chopstick by executing a `wait()` operation on that semaphore. He releases his chopstick by executing the `signal()` operation on the appropiate semaphores.

The shared data become:

```
semaphore chopsticks[5];
```

with all the elements initialized to 1.

```c title="philosoper i"
while(true) {
    wait(chopstick[i]);
    wait(chopstick[(i+1)%5]);

    // eat

    signal(chopstick[i]);
    signal(chopstick[(i+1)%5]);

    // think
}
```

:::note

This solution guarantees that no two neighbors are eating simultaneously, but it must be rejected because it could create a **deadlock**.

Suppose that all five philosophers are hungry at the same time and they all grab their left chopstick. All the semaphores are now equal to 0 and they cannot grab their right chopstick, because they're waiting for a signal.

:::
