"use strict";(self.webpackChunkoperating_systems=self.webpackChunkoperating_systems||[]).push([[4805],{6996:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var s=n(4848),r=n(8453);const i={sidebar_position:2},o="IPC - Exercise 2",a={id:"week-5/problems/ex2",title:"IPC - Exercise 2",description:"Enhance the previous program and implement a basic chat-like interaction using shared memory between a parent and a child process.",source:"@site/docs/week-5/problems/ex2.md",sourceDirName:"week-5/problems",slug:"/week-5/problems/ex2",permalink:"/operating-systems/week-5/problems/ex2",draft:!1,unlisted:!1,editUrl:"https://github.com/sirbuig/operating-systems/tree/main/docs/week-5/problems/ex2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"IPC - Exercise 1",permalink:"/operating-systems/week-5/problems/ex1"},next:{title:"IPC - Exercise 3",permalink:"/operating-systems/week-5/problems/ex3"}},m={},p=[];function c(t){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"ipc---exercise-2",children:"IPC - Exercise 2"})}),"\n",(0,s.jsx)(e.p,{children:"Enhance the previous program and implement a basic chat-like interaction using shared memory between a parent and a child process."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"\ud83d\udca1Solution"}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",metastring:'title="chat.c"',children:'#include <stdio.h>\n#include <stdlib.h>\n#include <fcntl.h>\n#include <sys/mman.h>\n#include <sys/stat.h>\n#include <sys/wait.h>\n#include <unistd.h>\n#include <errno.h>\n#include <string.h>\n\ntypedef struct {\n\tchar message[1000];\n\tint turn;\n} Chat;\n\nint main() {\n\tint msg_size = 256;\n\tchar shm_name[] = "/CHAT";\n\tint shm_fd;\n\n\tshm_fd = shm_open(shm_name, O_CREAT | O_RDWR, S_IRUSR | S_IWUSR);\n\tif(shm_fd < 0) {\n\t\tperror(NULL);\n\t\treturn errno;\n\t}\n\n\tsize_t shm_size = sizeof(Chat);\n\tif(ftruncate(shm_fd, shm_size) == -1) {\n\t\tperror(NULL);\n\t\tshm_unlink(shm_name);\n\t\treturn errno;\n\t}\n\n\tChat *shm_ptr = mmap(0, shm_size, PROT_READ | PROT_WRITE, MAP_SHARED, shm_fd, 0);\n\tif(shm_ptr == MAP_FAILED) {\n\t\tperror(NULL);\n\t\tshm_unlink(shm_name);\n\t\treturn errno;\n\t}\n\n\tshm_ptr->turn = 0;\n\n\tpid_t pid = fork();\n\tif(pid == -1) {\n\t\tperror(NULL);\n\t\treturn errno;\n\t} else if(pid > 0) {\n\t\twhile(1) {\n\t\t\tif(shm_ptr->turn == 0) {\n\t\t\t\tif(shm_ptr->message != 0) {\n\t\t\t\t\tprintf("Parent\'s inbox: %s\\n", shm_ptr->message);\n\t\t\t\t}\n\n\t\t\t\tprintf("As a parent, write a message...");\n\t\t\t\tfgets(shm_ptr->message, msg_size, stdin);\n\t\t\t\tshm_ptr->turn = 1;\n\t\t\t} else {\n\t\t\t\tsleep(2);\n\t\t\t}\n\t\t}\n\n\t\twait(NULL);\n\n\t\tmunmap(shm_ptr, shm_size);\n\t\tshm_unlink(shm_name);\n\t} else {\n\t\twhile(1) {\n\t\t\tif(shm_ptr->turn == 1) {\n\t\t\t\tprintf("Child\'s inbox: %s\\n", shm_ptr->message);\n\n\t\t\t\tprintf("As a child, write a message...\\n");\n\t\t\t\tfgets(shm_ptr->message, msg_size, stdin);\n\t\t\t\tshm_ptr->turn = 0;\n\t\t\t} else {\n\t\t\t\tsleep(2);\n\t\t\t}\n\t\t}\n\n\t\tmunmap(shm_ptr, shm_size);\n\t}\n\n\treturn 0;\n}\n'})})]})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);