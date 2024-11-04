---
sidebar_position: 2
---

# Exercise 2

### Description

Enhance the previous program and implement a basic chat-like interaction using shared memory between a parent and a child process.

<details>

<summary>💡Solution</summary>

```c title="chat.c"
#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <sys/wait.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>

typedef struct {
	char message[1000];
	int turn;
} Chat;

int main() {
	int msg_size = 256;
	char shm_name[] = "/CHAT";
	int shm_fd;

	shm_fd = shm_open(shm_name, O_CREAT | O_RDWR, S_IRUSR | S_IWUSR);
	if(shm_fd < 0) {
		perror(NULL);
		return errno;
	}

	size_t shm_size = sizeof(Chat);
	if(ftruncate(shm_fd, shm_size) == -1) {
		perror(NULL);
		shm_unlink(shm_name);
		return errno;
	}

	Chat *shm_ptr = mmap(0, shm_size, PROT_READ | PROT_WRITE, MAP_SHARED, shm_fd, 0);
	if(shm_ptr == MAP_FAILED) {
		perror(NULL);
		shm_unlink(shm_name);
		return errno;
	}

	shm_ptr->turn = 0;

	pid_t pid = fork();
	if(pid == -1) {
		perror(NULL);
		return errno;
	} else if(pid > 0) {
		while(1) {
			if(shm_ptr->turn == 0) {
				if(shm_ptr->message != 0) {
					printf("Parent's inbox: %s\n", shm_ptr->message);
				}

				printf("As a parent, write a message...");
				fgets(shm_ptr->message, msg_size, stdin);
				shm_ptr->turn = 1;
			} else {
				sleep(2);
			}
		}

		wait(NULL);

		munmap(shm_ptr, shm_size);
		shm_unlink(shm_name);
	} else {
		while(1) {
			if(shm_ptr->turn == 1) {
				printf("Child's inbox: %s\n", shm_ptr->message);

				printf("As a child, write a message...\n");
				fgets(shm_ptr->message, msg_size, stdin);
				shm_ptr->turn = 0;
			} else {
				sleep(2);
			}
		}

		munmap(shm_ptr, shm_size);
	}

	return 0;
}
```

</details>
