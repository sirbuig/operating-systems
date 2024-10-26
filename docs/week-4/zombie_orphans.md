---
sidebar_position: 2
title: Understanding Zombie and Orphan Processes
description: Learn about zombie and orphan processes in operating systems, including their definitions, examples, and how to handle them.
keywords: [zombie process, orphan process, operating systems, process management, fork, wait, C programming]
---

# Zombies and orphans
Normal topics around here.

Understand these concepts in **3 minutes**.

## Zombie
The process is a `zombie` if the child ends its execution and the parent doesn't have time to see the exit status.  

Let's see an example of a zombie: 

```c title="zombie code"
#include <stdio.h> // for all.
#include <unistd.h> // for fork and sleep
#include <sys/wait.h> // for wait lol
#include <stdlib.h> //for exit status
int main(){
    pid_t pid;
    int status;
    if ((pid = fork()) < 0) {
        perror("fork");
        exit(1);
    }

    /* Child */
    if (pid == 0)
        exit(0);

    sleep(100);
    wait(NULL);
}
```

Let's now verify in action the zombie process. To try this at your own device, run on the left side of the screen `zombie code.c`, and on the right side on other terminal `top`.
![zombie code](/img/zombie.png)

<details>
<summary><i>🍵 Coffee break with a meme</i></summary>

![](https://upload.wikimedia.org/wikipedia/commons/a/ab/Zombie_process.png)
</details>

## Orphans
The process is `orphan` if the parent terminate before the child without invoking wait()

How OS solved this? 
1. Cascade termination, after the dad dies, all its kids will die
2. Goes to child to the grandparent or to kernel (pid = 1)
3. A lot of other variants 

Let's see an example of an orphan: 
```c 
#include<stdio.h> 
#include <sys/types.h> 
#include <unistd.h> 
  
int main() 
{  
    
    if(!fork()) 
        sleep(30); 
    return 0; 
} 
```

Note that finding if a process is orphan is much harder than finding a zombie. Each OS handles in a different way
this situation.

## Why do we need to know all of these?

Well we should as parents wait for our children as soon as possible in the code. When the wait() occurs,
we free-up the PCB of the child. If the child terminates, and we do something in the meantime, we risk to lose the
child's BCP. 

## Further reading
https://unix.stackexchange.com/questions/491549/why-should-parent-process-wait-to-terminate-until-all-of-its-child-process-ter   
https://www.geeksforgeeks.org/zombie-processes-prevention/   
