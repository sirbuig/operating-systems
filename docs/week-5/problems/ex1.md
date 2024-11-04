---
sidebar_position: 1
---

# Exercise 1

Set up a shared memory for communication between a parent and a child process.

The parent process writes a message to shared memory. The child process reads the message from shared memory and prints it.

<details>

<summary>💡Solution</summary>

```c title="shared_memory.c"

#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <sys/wait.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>

int main() {
	char shm_name[] = "/TUTORING";
	int shm_fd;

	shm_fd = shm_open(shm_name, O_CREAT | O_RDWR, S_IRUSR | S_IWUSR);
	if(shm_fd < 0) {
		perror(NULL);
		return errno;
	}


	size_t shm_size = 1000;

	if(ftruncate(shm_fd, shm_size) == -1) {
		perror(NULL);
		shm_unlink(shm_name);
		return errno;
	}

	void *shm_ptr = mmap(0, shm_size, PROT_READ | PROT_WRITE, MAP_SHARED, shm_fd, 0);
	if(shm_ptr == MAP_FAILED) {
		perror(NULL);
		shm_unlink(shm_name);
		return errno;
	}

	pid_t pid = fork();
	if (pid == -1) {
		perror(NULL);
		return errno;
	} else if(pid > 0) {
		const char *msj = "Hello, child!";
		printf("The parent is writing in the memory space...\n");
		snprintf((char *)shm_ptr, shm_size, "%s", msj);

		wait(NULL);

		munmap(shm_ptr, shm_size);
		shm_unlink(shm_name);
	} else {
		sleep(3);
		printf("The child is reading the message...");
		printf("%s\n", (char *)shm_ptr);

		munmap(shm_ptr, shm_size);
	}

	return 0;
}

```

</details>
