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
