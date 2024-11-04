---
sidebar_position: 4
---

# Threads - Exercise 4

Write a multithreaded program that calculates various statistical values for a list of numbers. This program will be passed a series of numbers on the command line and will then create three separate worker threads.

One thread will determine the average of the numbers, the second will determine the maximumum value, and the third will determine the minimumum value. For example, suppose your program is passed the integers `90 81 78 95 79 72 85`.

The program will report:

```
The average value is 82
The minimumum value is 72
The maximumum value is 95
```

The variables representing the average, minimumum, and maximumum values will be stored globally.

The worker threads will set these values, and the parent thread will output the values once the workers have exited.

<details>

<summary>💡Solution</summary>

```c title="threads_1.c"

#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <limits.h>

double avg = 0.0;
int min = INT_MAX;
int max = INT_MIN;

int *numbers;
int n;

void *average(void *arg)
{
    double sum = 0;
    for(int i = 0; i < n; i++)
    {
        sum += numbers[i];
    }
    avg = sum / n;
    pthread_exit(NULL);
}

void *minimum(void *arg)
{
    for(int i = 0; i < n; i++)
    {
        if (numbers[i] < min)
            min = numbers[i];
    }
    pthread_exit(NULL);
}

void *maximum(void *arg)
{
    for(int i = 0; i < n; i++)
    {
        if(numbers[i] > max)
            max = numbers[i];
    }
    pthread_exit(NULL);
}

int main(int argc, char *argv[])
{
    n = argc - 1;

    numbers = (int *)malloc(n * sizeof(int));

    for(int i = 0; i < n; i++)
    {
        numbers[i] = atoi(argv[i + 1]);
    }

    pthread_t tid_avg, tid_min, tid_max;

    pthread_create(&tid_avg, NULL, average, NULL);
    pthread_create(&tid_min, NULL, minimum, NULL);
    pthread_create(&tid_max, NULL, maximum, NULL);

    pthread_join(tid_avg, NULL);
    pthread_join(tid_min, NULL);
    pthread_join(tid_max, NULL);

    printf("The average value is %.0f\n", avg);
    printf("The minimum value is %d\n", min);
    printf("The maximum value is %d\n", max);

    free(numbers);

    return 0;
}

```

</details>
