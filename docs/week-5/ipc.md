---
sidebar_position: 1
---

# Inter-Process Communication

Processes executing concurrently can be either **independent** or **cooperating**.

An **independent process** does not share any data with the other executing processes.

A **cooperating process** affects or is affected by the other processes executing in the system.

:::note

Any process that shares data with other processes is a cooperating process.

:::

### What is IPC?

Because cooperating processes affect one another, they must "communicate" (in their own technical way), and this is called **IPC**, or **inter-process communication**.

There are 2 ways to do this: either by having a **shared memory**, which means that a region of memory is established by the cooperating process and then used as a "medium" for information exchange, or by **message passing**.

![ipc_models](media/ipc_models.png)

## Shared memory model

IPC using shared memory requires a region of _shared memory_.

The region resides in the address space of the process creating the shared-memory segment and every other process that wishes to communicate must attach it to their address space.

However, operating systems do not allow one process from accessing the memory of another one, so this model can only be done if 2 or more processes agree to remove this restriction.

The form of the data and the location **are NOT** under the operating system's control and the processes must make sure they are not writing in the same location at the same time (this will lead in the next chapters to the concept of synchronization).

### IPC using POSIX API in Linux

POSIX provides a robust API for IPC, which is essential for building complex, multi-process applications in Unix-like systems such as Linux.

Here are the main functions needed in any program that implements the shared memory method:

- `shm_open()`: Creates or opens a shared memory object.
- `mmap()`: Maps shared memory into the process's address space.
- `shm_unlink()`: Removes the shared memory object.

### `shm_open()` and `shm_unlink()`

```
int shm_open(const char *name, int oflag, mode_t mode);
```

According to the **Linux Programmer's Manual**, `shm_open()` creates and opens a new, or opens an existing, POSIX shared memory object. A POSIX shared memory object is in effect a handle which can be used by unrelated processes to mmap(2) the same region of shared memory. The operation of `shm_open()` is analogous to that of `open(2)`.

Let's see what each argument of the anthet means:

- `name`: this is like an identifier for the shared memory object of the form `/somename`, with up to 255 characters
- `oflag`: specifies how the object should be opened and is a bit mask created by ORing either `O_RDONLY`/`O_RDWR` and any other flag from `O_CREAT`, `O_EXCL`, `O_TRUNC`.
- `mode`: the file permission mode (affects the file after creation), like `S_IRUSR`, `S_IWUSR` etc

```
int shm_unlink(const char *name);
```

The `shm_unlink()` function performs the converse operation, removing an object previously created by `shm_open()`.
The operation of `shm_unlink()` is analogous to `unlink(2)`: it removes a shared memory object name, and, once all processes have unmapped the object, deallocates and destroys the contents of the associated memory region. After a successful `shm_unlink()`, attempts to `shm_open()` an object with the same name fail (unless `O_CREAT` was specified, in which case a new, distinct object is created).

### `ftruncate()`

```
int ftruncate(int fd, off_t length);
```

This function causes the regular file referenced by `fd` to be truncated to a size of precisely `length` bytes.
If the file previously was larger than this size, the extra data is lost. If the file previously was shorter, it is extended, and the extended part reads as null bytes ('\0').

### `mmap()` and `munmap()`

```
void *mmap(void *addr, size_t length, int prot, int flags, int fd, off_t offset);
```

`mmap()` creates a new mapping in the virtual address space of the calling process. The starting address for the new mapping is specified in `addr`. The `length` argument specifies the length of the mapping (which must be greater than 0).

If `addr` is NULL, then the kernel will choose the address and this is the most portable method of creating a new mapping.

`prot` describes the memory protection of the mapping and is either `PROT_NONE` or the **bitwise OR** between: `PROT_EXEC`, `PROT_READ`, `PROT_WRITE`, `PROT_NONE`.

`flags` sets the visibility of the updates to the other processes mapping the same region. Usually, `MAP_SHARED` is used to share the mapping and the updates.

The `offset` parameter specifies where in the file or shared memory object the mapping should begin. This is important because `mmap` doesn’t necessarily map an entire file or memory object into memory; it can map a specific part of it.

```
int munmap(void *addr, size_t length)
```

The `munmap()` system call deletes the mappings for the specified address range, and causes further references to addresses within the range to generate invalid memory references. The region is also automatically unmapped when the process is terminated. On the other hand, closing the file descriptor does not unmap the region.

## Further Reading

- [POSIX File Permissions](https://learn.leighcotnoir.com/wp-content/uploads/2016/08/POSIX-file-permissions.pdf)
- [What is Inter Process Communication : Working & Its Applications](https://www.elprocus.com/inter-process-communication/)

## References

- Operating Systems Concepts, 10th edition, Chapter 3 - Processes
- [Linux man pages](https://man7.org/linux/man-pages/index.html)
- [Laboratory 5](https://cs.unibuc.ro/~pirofti/so/so-lab-5.pdf)
