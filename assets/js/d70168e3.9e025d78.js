"use strict";(self.webpackChunkoperating_systems=self.webpackChunkoperating_systems||[]).push([[695],{2550:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(4848),i=n(8453);const s={sidebar_position:2,title:"Exercise 2 - Search the word",description:"Search for a specific string in multiple text files",keywords:["Buffer","String Search","File Handling","C Programming","Text Processing","Directory Traversal","Edge Cases","File I/O","fopen","opendir","readdir"]},o="Exercise 2 (hard) - Search the word",a={id:"week-3/problems/ex2",title:"Exercise 2 - Search the word",description:"Search for a specific string in multiple text files",source:"@site/docs/week-3/problems/ex2.md",sourceDirName:"week-3/problems",slug:"/week-3/problems/ex2",permalink:"/operating-systems/week-3/problems/ex2",draft:!1,unlisted:!1,editUrl:"https://github.com/sirbuig/operating-systems/tree/main/docs/week-3/problems/ex2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Exercise 2 - Search the word",description:"Search for a specific string in multiple text files",keywords:["Buffer","String Search","File Handling","C Programming","Text Processing","Directory Traversal","Edge Cases","File I/O","fopen","opendir","readdir"]},sidebar:"tutorialSidebar",previous:{title:"Exercise 1 - Size of Files",permalink:"/operating-systems/week-3/problems/ex1"},next:{title:"Week 4",permalink:"/operating-systems/category/week-4"}},l={},c=[{value:"Description",id:"description",level:3},{value:"Download the test folder",id:"download-the-test-folder",level:4},{value:"Example 1:",id:"example-1",level:3},{value:"Example 2:",id:"example-2",level:3},{value:"Idea",id:"idea",level:3}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"exercise-2-hard---search-the-word",children:"Exercise 2 (hard) - Search the word"})}),"\n",(0,t.jsx)(r.p,{children:"What am I doing at this hour?"}),"\n",(0,t.jsx)(r.p,{children:"Around 60% of the problem is similar with exercise 1, so make sure to do that one first, and then come back here."}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:'Given a folder "tests01" with 3 .txt files and a string (char *), search for its appearance in each file.\r\nIf it is found, write into a file "output.txt" the name of the file in which you found it, and a string of 70 characters which includes the search string.'}),"\n",(0,t.jsx)(r.p,{children:"You should use for this problem a buffer (read x characters at a time), imagine that the .txt might have a size of 20 GB."}),"\n",(0,t.jsxs)(r.p,{children:["I recommend to create a function named : ",(0,t.jsx)(r.code,{children:"void searchCharacters(char* input)"})," which writes in output.txt the result and takes as input the search string. It is faster this way \ud83d\ude0a"]}),"\n",(0,t.jsx)(r.h4,{id:"download-the-test-folder",children:(0,t.jsx)(r.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(4529).A+"",children:"Download the test folder"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"example-1",children:"Example 1:"}),"\n",(0,t.jsx)(r.p,{children:'By running the code for the string : "into", the file "output.txt" will look like this:'}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-txt",children:"file1 copy.txt\r\nl of excitement. As they walked deeper into the forest, the towering trees\r\n\r\nfile1 copy.txt\r\nrees stretched high into the sky, their leaves whispering secrets to the w\r\n\r\nfile1 copy.txt\r\n would be a clue for tomorrow's adventure. into\r\n\r\nfile1.txt\r\nl of excitement. As they walked deeper into the forest, the towering trees\r\n\r\nfile1.txt\r\nrees stretched high into the sky, their leaves whispering secrets to the w\r\n\r\ntest3.txt\r\ninto\n"})}),"\n",(0,t.jsx)(r.h3,{id:"example-2",children:"Example 2:"}),"\n",(0,t.jsx)(r.p,{children:'For the word "distance":'}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-txt",children:"file1 copy.txt\r\ney sat down to eat, Iris noticed something odd. In the distance, nestled betwe\r\n\r\nfile1.txt\r\ney sat down to eat, Iris noticed something odd. In the distance, nestled betwe\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"idea",children:"Idea"}),"\n",(0,t.jsx)(r.p,{children:"There are more things to do, so we will split them in mini-tasks :"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"find a way to open the folder and see the name for the each file"}),"\n",(0,t.jsx)(r.li,{children:"Open the file"}),"\n",(0,t.jsxs)(r.li,{children:["Create a ",(0,t.jsx)(r.code,{children:"buffer"})," that fills up with characters and verify if the search string is in it."]}),"\n",(0,t.jsx)(r.li,{children:'write the findings into another file "output.txt"'}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.em,{children:"QUESTION:"})}),"  Do you find any possible edge cases?"]}),"\n"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("i",{children:"\ud83d\udca1Answer"})}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"What if the word is in the end of the file?"}),"\n",(0,t.jsx)(r.li,{children:"What if the file is empty?"}),"\n",(0,t.jsx)(r.li,{children:"What if when you split in buffers and the search string is not taken integrally at the end?"}),"\n",(0,t.jsx)(r.li,{children:"What if you have the size of the file is not a multiple of the buffer size? (just 5 characters)"}),"\n"]})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.em,{children:"QUESTION:"})}),"  How many buffers do we need for each iteration?"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Having this questions in mind, let's start crafting :))"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("i",{children:"\ud83e\udd16I'll leave the code here"})}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'#include <stdio.h>\r\n#include <stdlib.h>\r\n#include <errno.h> \r\n#include <fcntl.h> \r\n#include <unistd.h> \r\n#include <sys/stat.h>\r\n#include <dirent.h>\r\n#include <string.h>\r\n\r\nvoid searchCharacters(char* input){\r\n    FILE * file = fopen("output.txt", "w");\r\n \r\n    struct dirent *entry; // contains informations about a director file\r\n    DIR *dir = opendir("tests01");\r\n\r\n    if (dir == NULL)\r\n    {\r\n        printf("Error: Unable to open directory.\\n");\r\n        return;\r\n    }\r\n\r\n    while ((entry = readdir(dir)) != NULL) // read each file from direct\r\n    {\r\n        struct stat statbuf;\r\n        if (strstr(entry->d_name, ".txt") != NULL)\r\n        {\r\n            char path[265];\r\n            snprintf(path, sizeof(path), "tests01/%s", entry->d_name);\r\n            //helpful for lab 2\r\n            int file_descriptor = open(path, O_RDONLY);\r\n            \r\n            stat(entry->d_name, &statbuf); //informations about the file are put in statbuf\r\n\r\n            int size = statbuf.st_size;\r\n            int input_size = (int)strlen(input);\r\n\r\n            size_t buff_size = 70;\r\n            ssize_t bytes_read;\r\n            char *buffer = (char *)malloc(buff_size);\r\n            char *previous_buffer = (char *)malloc(input_size);  // Buffer for previous read\r\n            char *combined_buffer = (char *)malloc(buff_size + input_size);  // Buffer for combined read\r\n            ssize_t byte_oprire = 0;\r\n            read(file_descriptor, previous_buffer, input_size);\r\n\r\n            if(size <= input_size && strstr(previous_buffer, input) != NULL){\r\n                fprintf(file, "%s\\n", entry->d_name);\r\n                fprintf(file, "%s\\n\\n", previous_buffer);\r\n            }\r\n\r\n            while((byte_oprire = read(file_descriptor, buffer, buff_size)) > 0){\r\n                \r\n                memcpy(combined_buffer, previous_buffer, input_size);\r\n                memcpy(combined_buffer + input_size, buffer, byte_oprire);\r\n                if (strstr(combined_buffer, input) != NULL) {\r\n                    fprintf(file, "%s\\n", entry->d_name);\r\n                    fprintf(file, "%.*s\\n\\n", (int)(byte_oprire + input_size), combined_buffer);  // Print up to combined_size characters\r\n                }\r\n                int copy_size = (byte_oprire < input_size) ? byte_oprire : input_size;\r\n                memcpy(previous_buffer, buffer + byte_oprire - copy_size, copy_size);\r\n            }\r\n            free(buffer);\r\n            free(previous_buffer);\r\n            free(combined_buffer);\r\n        }\r\n    \r\n    }\r\n    closedir(dir);\r\n    fclose(file);\r\n}\r\nint main()\r\n{\r\n    searchCharacters("into");\r\n\r\n    return 0;\r\n}\n'})})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4529:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/files/tests01-ce34aa851b929efc29ddd00c8d7ee173.zip"},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(6540);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);