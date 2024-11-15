---
sidebar_position: 4
---

# Semaphores

Mutex locks, as mentioned earlier, are generally considered the simplest of synchronization tools. But sometimes we need a more robust tool that can also provide more sophisticated ways for processes to synchronize their activities.

A **semaphore** S is an integer variable that, apart from initialization, is accessed only through two standard atomic operations: `wait()` and `signal()`.

:::tip

A mutex is particular case of semaphor with `S = 1`.

:::

## POSIX API

### `sem_init()`

```
int sem_init(sem_t *sem, int pshared, unisigned int value);
```

This sets the semaphore `sem` with `S = value`. Use 0 for `pshared`.

### `sem_wait()` and `sem_post()`

`sem_wait()` decrements `S` with one unit, but if `S=0` then the function waits for the value to rise before further decrementing, thus blocking the thread!

`sem_post()` increments `S` with one unit and if there are blocked threads, then it frees the one who waited the most in the queue.

To destroy a semaphore, use `sem_destroy(sem_t *sem)`.
