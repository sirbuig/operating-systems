---
sidebar_position: 2
title: Exercise 2 - Search the word

description: Search for a specific string in multiple text files
keywords: [Buffer, String Search, File Handling, C Programming, Text Processing, Directory Traversal, Edge Cases, File I/O, fopen, opendir, readdir]
---

# Exercise 2 (hard) - Search word
What am I doing at this hour?

Around 60% of the problem is similar with exercise 1, so make sure to do that one first, and then come back here.

### Description
Given a folder "tests01" with 3 .txt files and a string (char *), search for its appearance in each file.
If it is found, write into a file "output.txt" the name of the file in which you found it, and a string of 70 characters which includes the search string.

You should use for this problem a buffer (read x characters at a time), imagine that the .txt might have a size of 20 GB.

I recommend to create a function named : `void searchCharacters(char* input)` which writes in output.txt the result and takes as input the search string. It is faster this way 😊
#### [Download the test folder](/downloads/tests01.zip)

---
### Example 1:
By running the code for the string : "into", the file "output.txt" will look like this:
```txt
file1 copy.txt
l of excitement. As they walked deeper into the forest, the towering trees

file1 copy.txt
rees stretched high into the sky, their leaves whispering secrets to the w

file1 copy.txt
 would be a clue for tomorrow's adventure. into

file1.txt
l of excitement. As they walked deeper into the forest, the towering trees

file1.txt
rees stretched high into the sky, their leaves whispering secrets to the w

test3.txt
into
```

### Example 2:
For the word "distance":
```txt
file1 copy.txt
ey sat down to eat, Iris noticed something odd. In the distance, nestled betwe

file1.txt
ey sat down to eat, Iris noticed something odd. In the distance, nestled betwe
```

---

### Idea

There are more things to do, so we will split them in mini-tasks : 
- find a way to open the folder and see the name for the each file
- Open the file
- Create a `buffer` that fills up with characters and verify if the search string is in it.
- write the findings into another file "output.txt"

> **_QUESTION:_**  Do you find any possible edge cases?
<details>
<summary><i>💡Answer</i></summary>

- What if the word is in the end of the file?
- What if the file is empty?
- What if when you split in buffers and the search string is not taken integrally at the end?
- What if you have the size of the file is not a multiple of the buffer size? (just 5 characters)
</details>

> **_QUESTION:_**  How many buffers do we need for each iteration?

Having this questions in mind, let's start crafting :))

<details>
<summary><i>🤖I'll leave the code here</i></summary>

```c 
#include <stdio.h>
#include <stdlib.h>
#include <errno.h> 
#include <fcntl.h> 
#include <unistd.h> 
#include <sys/stat.h>
#include <dirent.h>
#include <string.h>

void searchCharacters(char* input){
    FILE * file = fopen("output.txt", "w");
 
    struct dirent *entry; // contains informations about a director file
    DIR *dir = opendir("tests01");

    if (dir == NULL)
    {
        printf("Error: Unable to open directory.\n");
        return;
    }

    while ((entry = readdir(dir)) != NULL) // read each file from direct
    {
        struct stat statbuf;
        if (strstr(entry->d_name, ".txt") != NULL)
        {
            char path[265];
            snprintf(path, sizeof(path), "tests01/%s", entry->d_name);
            //helpful for lab 2
            int file_descriptor = open(path, O_RDONLY);
            
            stat(entry->d_name, &statbuf); //informations about the file are put in statbuf

            int size = statbuf.st_size;
            int input_size = (int)strlen(input);

            size_t buff_size = 70;
            ssize_t bytes_read;
            char *buffer = (char *)malloc(buff_size);
            char *previous_buffer = (char *)malloc(input_size);  // Buffer for previous read
            char *combined_buffer = (char *)malloc(buff_size + input_size);  // Buffer for combined read
            ssize_t byte_oprire = 0;
            read(file_descriptor, previous_buffer, input_size);

            if(size <= input_size && strstr(previous_buffer, input) != NULL){
                fprintf(file, "%s\n", entry->d_name);
                fprintf(file, "%s\n\n", previous_buffer);
            }

            while((byte_oprire = read(file_descriptor, buffer, buff_size)) > 0){
                
                memcpy(combined_buffer, previous_buffer, input_size);
                memcpy(combined_buffer + input_size, buffer, byte_oprire);
                if (strstr(combined_buffer, input) != NULL) {
                    fprintf(file, "%s\n", entry->d_name);
                    fprintf(file, "%.*s\n\n", (int)(byte_oprire + input_size), combined_buffer);  // Print up to combined_size characters
                }
                int copy_size = (byte_oprire < input_size) ? byte_oprire : input_size;
                memcpy(previous_buffer, buffer + byte_oprire - copy_size, copy_size);
            }
            free(buffer);
            free(previous_buffer);
            free(combined_buffer);
        }
    
    }
    closedir(dir);
    fclose(file);
}
int main()
{
    searchCharacters("into");

    return 0;
}
```
</details>