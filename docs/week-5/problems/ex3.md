---
sidebar_position: 3
---

# Exercise 3

### Description

The parent process writes an array of integers to shared memory. The child process reads the array, processes each integer (e.g., doubles it), and writes the modified array back.

<details>

<summary>💡Solution</summary>

```c title="shm_array.c"
#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <sys/wait.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>

typedef struct
{
    int array[10];
    int ok;
} Data;

int main()
{
    char shm_name[] = "/ARRAY";
    int shm_fd;

    shm_fd = shm_open(shm_name, O_CREAT | O_RDWR, S_IRUSR | S_IWUSR);
    if(shm_fd < 0)
    {
        perror(NULL);
        return errno;
    }

    size_t shm_size = sizeof(Data);
    if(ftruncate(shm_fd, shm_size) == -1)
    {
        perror(NULL);
        shm_unlink(shm_name);
        return errno;
    }

    Data *shm_ptr = mmap(0, shm_size, PROT_READ | PROT_WRITE, MAP_SHARED, shm_fd, 0);
    if(shm_ptr == MAP_FAILED)
    {
        perror(NULL);
        shm_unlink(shm_name);
        return errno;
    }

    shm_ptr->ok = 0;

    pid_t pid = fork();

    if(pid == -1)
    {
        perror(NULL);
        return errno;
    }
    else if(pid > 0)
    {
        for(int i = 0; i < 10; i++)
        {
            shm_ptr->array[i] = i + 1;
        }

        while(shm_ptr->ok == 0)
            sleep(1);

        printf("Let's see if the array has changed!\n");
        for(int i = 0; i < 10; i++)
        {
            printf("%d ", shm_ptr->array[i]);
        }
        printf("\n");

        munmap(shm_ptr, shm_size);
        shm_unlink(shm_name);
    }
    else
    {
        sleep(1);

        printf("The child is changing the array...\n");
        for(int i = 0; i < 10; i++)
        {
            shm_ptr->array[i] *= 2;
        }

        shm_ptr->ok = 1;

        munmap(shm_ptr, shm_size);
    }

    return 0;
}

```

</details>
