---
sidebar_position: 1
---

# Exercise 1 (easy) - Size of files
The first step for falling into the darkness of c

What it will be shown below isn't just an exercise to illustrate some functions from 
[lab 2](https://cs.unibuc.ro/~pirofti/so/so-lab-2.pdf), but rather showcase some optional syscalls, 
learn how to search about them, and recap some c functions (good to know).   

The following information is also useful for the project part (after lab 8).

## Description
Given a folder "tests01" with 3 .txt files in it, find the size of each file and write in "output.txt" the following : `[ filename ]: [ size in bytes] Bytes`.  

#### [Download the test folder](/downloads/tests01.zip)

---
### Example:
By running the code the file "output.txt" will look like this: 
```txt
file1 copy.txt: 817 Bytes
file1.txt: 812 Bytes
test3.txt: 4 Bytes
```

---
### Idea

Let's take the task and split in more parts. The first thing we need to do is finding a way to open each .txt file from a folder.
So the `first step` is to open the folder and print each file name. 

<details>
  <summary><i>💡Hint 1</i></summary>

  Read about `opendir()`, `readdir()` and `dirent` (a structure);
</details>

<details>
  <summary><i>🤖Code sample for step 1</i></summary>

```c
#include <stdio.h>
#include <dirent.h>
int main() {
    struct dirent *entry;
    DIR *dir = opendir("tests01");
    while((entry = readdir(dir)) != NULL) {
        printf("%s\n", entry->d_name);
    }
    closedir(dir);
}
```
> Did we actually make 'ls' ? 

</details>

Now, how do we get access to the size of a file? That is the `step 2`
<details>
<summary><i>🤖Code sample for step 2</i></summary>

```c
       struct stat st;
       char path[265];
       snprintf(path, sizeof(path), "tests01/%s", entry->d_name);
       stat(path, &st); //stat will need a path and it will start from the location of the .c file.
        
       int size = st.st_size; //tadaa
```
</details>

All right, now is the `final step`, merge them together. For this part you'll need the information from [lab 2](https://cs.unibuc.ro/~pirofti/so/so-lab-2.pdf)
for `open`, `write` in order to open the output.txt and write there.
<details>
<summary><i>🤖The final code</i></summary>

```c

#include <unistd.h>
#include <fcntl.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <errno.h>
#include <stdio.h>
#include <string.h>
#include <dirent.h>
int main() {
    int destination_fd = open("output.txt", O_WRONLY | O_CREAT | O_TRUNC, 0644);
 
    struct dirent *entry; //information about a file from a director
    DIR *dir = opendir("tests01");

    while((entry = readdir(dir)) != NULL) {
        if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) {
            continue;
        }
        
        struct stat st;
        char path[265];
        snprintf(path, sizeof(path), "tests01/%s", entry->d_name);
        stat(path, &st);

        write(destination_fd, entry->d_name, strlen(entry->d_name));
        write(destination_fd, ": ", 2);
        
        char size_str[32];
        snprintf(size_str, sizeof(size_str), "%ld Bytes\n", st.st_size);
        write(destination_fd, size_str, strlen(size_str));
    } 
    closedir(dir);
    close(destination_fd);
    return 0;
}

```
</details>

Hope this problem helped you in some way 😊 and get ready for exercise 2, which will take some of the information presented here
and add something spicy.


