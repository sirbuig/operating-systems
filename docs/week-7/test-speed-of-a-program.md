---
sidebar_position: 4
---

# Test the runtime of a program

How can we estimate the time a program takes to run?
- Measure the actual runtime (or potentially capture CPU cycles).   
- Obtain an average elapsed time, as a single run may not provide an accurate prediction.   
- Set up a fresh environment for each program execution (clearing cache, resetting registers, stack, etc.).   
- Bypass the time-sharing scheduler and change it with something faster.  


**How can we get the time?**   
We will use clock_gettime() that will take the time of the process to run without interrupts, wait time or context switches.
Like getting the burst time. More to be found here : [linux manual](https://linux.die.net/man/3/clock_gettime)

**Find the average time elapsed + new environment**  
We can create a new child for each process we want to run, for n times. 
The branch prediction will be reset for every process, the cache as well. Moreover, we will have a different PCB with other
stack, heap, .data, etc.

So in the end, we isolate each run to simulate the real life scenario.

**A way to bypass the current scheduler**  
From commands, we are able to change: *where is running our program*, *what scheduler algorithm to use*, *priority of the
process*, *change to real-time scheduler*. 

What means the last thing mentioned? Well, there are some processes that need special attention, for example, at cars with
the emergency break, thus less context switches are made, and we have a smaller waiting time. 

This can be done via this command `sudo taskset -c 1 chrt -r 99 ./test`.   
`taskset -c 1` : our program will run only on this cpu (no cpu switch)   
`chrt -r 99`: use real-time scheduler with Round Robin algorithm and have priority 99, see how are the priorities with the command : `chrt -m`.   
`./test`: your executable


<details>
<summary><i>🤖 Code</i></summary>

```cpp 
#define _POSIX_C_SOURCE 199309L // Enable clock_gettime() and related functions

#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <sys/wait.h>
#include <sys/mman.h>
#include <unistd.h>
#include <time.h>

int main() {
    int num_iterations = 100;  // Number of times to measure time
    struct timespec start, end;
    double total_time = 0.0;

    // Create shared memory for passing elapsed time from child to parent
    double *shared_time = mmap(NULL, sizeof(double),
                               PROT_READ | PROT_WRITE,
                               MAP_SHARED | MAP_ANONYMOUS, -1, 0);
    if (shared_time == MAP_FAILED) {
        perror("mmap failed");
        return 1;
    }

    for (int i = 0; i < num_iterations; i++) {
        pid_t pid = fork();

        if (pid == 0) { // Child process
            // Start time measurement
            clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &start);
            
            // Code to measure
            printf("Helloworld\n");
            
            // End time measurement
            clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &end);
            
            // Calculate elapsed time in seconds
            double elapsed_time = (end.tv_sec - start.tv_sec) + 
                                  (end.tv_nsec - start.tv_nsec) / 1e9;

            *shared_time = elapsed_time; // Write to shared memory

            exit(0); // Exit child
        } else if (pid > 0) { // Parent process
            int status;
            waitpid(pid, &status, 0); // Wait for the child to finish

            if (WIFEXITED(status)) {
                // Read the elapsed time from shared memory
                total_time += *shared_time;
            }
        } else {
            perror("fork failed");
            munmap(shared_time, sizeof(double)); // Unmap if fork fails
            return 1;
        }
    }

    // Calculate average time
    double average_time = total_time / num_iterations;
    printf("Average elapsed time: %.9f seconds\n", average_time);

    // Unmap the shared memory after the loop
    munmap(shared_time, sizeof(double));

    return 0;
}
```
</details>

## Results:
By running with command : `sudo taskset -c 1 chrt -r 99 ./test` and 100 iterations I get: 

>Average elapsed time: 0.000045828 seconds

By running with : `./test` I get: 
>Average elapsed time: 0.000070986 seconds

*Question* : What if we do not assign a particular cpu for the program? Is there a difference? 

## References
- [geeksforgeeks](https://www.geeksforgeeks.org/chrt-command-in-linux-with-examples/)
- [stackoverflow: count clock cycles](https://stackoverflow.com/questions/9887839/how-to-count-clock-cycles-with-rdtsc-in-gcc-x86)
