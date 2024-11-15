---
sidebar_position: 1
---

# Count - Exercise 1

Starting with a variable `count = 0`, create `N` threads that increment the variable with one unit.

For example, if there are `1000 threads`, the answer should be `count = 1000`.

## Solution

Try writing an **unsynchronized** version first. Try to run it multiple times. What do you observe?

<details>

<summary>🔀Unsynchronized version</summary>

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <errno.h>

#define NO_THREADS 1000

int count = 0;

void *routine(void *args)
{
    count++;

    return NULL;
}

int main()
{
    pthread_t threads[NO_THREADS];

    for(int i = 0; i < NO_THREADS; i++)
    {
        if(pthread_create(&threads[i], NULL, routine, NULL))
        {
            perror(NULL);
            return errno;
        }
    }

    for(int i = 0; i < NO_THREADS; i++)
    {
        if(pthread_join(threads[i], NULL))
        {
            perror(NULL);
            return errno;
        }
    }

    printf("Unsynchronized count is: %d\n", count);

    return 0;
}
```

After running it for multiple times, we can observe inconsistency in our outputs (race condition). Basically, we can get any answer between 1 and 1000!

Type `for x in {1..10000}; do ./count; done > output.txt` in your terminal to easily check the outputs.

</details>

<details>

<summary>🔁Synchronized version</summary>

```c title="count.c"
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <errno.h>

#define NO_THREADS 1000

int count = 0;

// MUTEX
pthread_mutex_t mtx;

void *routine(void *args)
{

    pthread_mutex_lock(&mtx);

    // critical section
    count++;

    pthread_mutex_unlock(&mtx);

    return NULL;
}

int main()
{
    pthread_t threads[NO_THREADS];

    if(pthread_mutex_init(&mtx, NULL))
    {
        perror(NULL);
        return errno;
    }

    for(int i = 0; i < NO_THREADS; i++)
    {
        if(pthread_create(&threads[i], NULL, routine, NULL))
        {
            perror(NULL);
            return errno;
        }
    }

    for(int i = 0; i < NO_THREADS; i++)
    {
        if(pthread_join(threads[i], NULL))
        {
            perror(NULL);
            return errno;
        }
    }

    printf("Synchronized count is: %d\n", count);

    pthread_mutex_destroy(&mtx);

    return 0;
}
```

</details>
