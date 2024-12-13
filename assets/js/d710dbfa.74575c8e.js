"use strict";(self.webpackChunkoperating_systems=self.webpackChunkoperating_systems||[]).push([[8670],{4123:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(4848),t=r(8453);const i={sidebar_position:3},o="IPC - Exercise 3",a={id:"week-5/problems/ex3",title:"IPC - Exercise 3",description:"The parent process writes an array of integers to shared memory. The child process reads the array, processes each integer (e.g., doubles it), and writes the modified array back.",source:"@site/docs/week-5/problems/ex3.md",sourceDirName:"week-5/problems",slug:"/week-5/problems/ex3",permalink:"/operating-systems/week-5/problems/ex3",draft:!1,unlisted:!1,editUrl:"https://github.com/sirbuig/operating-systems/tree/main/docs/week-5/problems/ex3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"IPC - Exercise 2",permalink:"/operating-systems/week-5/problems/ex2"},next:{title:"Threads - Exercise 4",permalink:"/operating-systems/week-5/problems/ex4"}},m={},c=[];function h(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ipc---exercise-3",children:"IPC - Exercise 3"})}),"\n",(0,s.jsx)(n.p,{children:"The parent process writes an array of integers to shared memory. The child process reads the array, processes each integer (e.g., doubles it), and writes the modified array back."}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\ud83d\udca1Solution"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",metastring:'title="shm_array.c"',children:'#include <stdio.h>\n#include <stdlib.h>\n#include <fcntl.h>\n#include <sys/mman.h>\n#include <sys/stat.h>\n#include <sys/wait.h>\n#include <unistd.h>\n#include <errno.h>\n#include <string.h>\n\ntypedef struct\n{\n    int array[10];\n    int ok;\n} Data;\n\nint main()\n{\n    char shm_name[] = "/ARRAY";\n    int shm_fd;\n\n    shm_fd = shm_open(shm_name, O_CREAT | O_RDWR, S_IRUSR | S_IWUSR);\n    if(shm_fd < 0)\n    {\n        perror(NULL);\n        return errno;\n    }\n\n    size_t shm_size = sizeof(Data);\n    if(ftruncate(shm_fd, shm_size) == -1)\n    {\n        perror(NULL);\n        shm_unlink(shm_name);\n        return errno;\n    }\n\n    Data *shm_ptr = mmap(0, shm_size, PROT_READ | PROT_WRITE, MAP_SHARED, shm_fd, 0);\n    if(shm_ptr == MAP_FAILED)\n    {\n        perror(NULL);\n        shm_unlink(shm_name);\n        return errno;\n    }\n\n    shm_ptr->ok = 0;\n\n    pid_t pid = fork();\n\n    if(pid == -1)\n    {\n        perror(NULL);\n        return errno;\n    }\n    else if(pid > 0)\n    {\n        for(int i = 0; i < 10; i++)\n        {\n            shm_ptr->array[i] = i + 1;\n        }\n\n        while(shm_ptr->ok == 0)\n            sleep(1);\n\n        printf("Let\'s see if the array has changed!\\n");\n        for(int i = 0; i < 10; i++)\n        {\n            printf("%d ", shm_ptr->array[i]);\n        }\n        printf("\\n");\n\n        munmap(shm_ptr, shm_size);\n        shm_unlink(shm_name);\n    }\n    else\n    {\n        sleep(1);\n\n        printf("The child is changing the array...\\n");\n        for(int i = 0; i < 10; i++)\n        {\n            shm_ptr->array[i] *= 2;\n        }\n\n        shm_ptr->ok = 1;\n\n        munmap(shm_ptr, shm_size);\n    }\n\n    return 0;\n}\n\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(6540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);