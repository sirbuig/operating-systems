"use strict";(self.webpackChunkoperating_systems=self.webpackChunkoperating_systems||[]).push([[621],{6713:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(4848),s=t(8453);const i={sidebar_position:4},a="Test the runtime of a program",o={id:"week-7/test-speed-of-a-program",title:"Test the runtime of a program",description:"How can we estimate the time a program takes to run?",source:"@site/docs/week-7/test-speed-of-a-program.md",sourceDirName:"week-7",slug:"/week-7/test-speed-of-a-program",permalink:"/operating-systems/week-7/test-speed-of-a-program",draft:!1,unlisted:!1,editUrl:"https://github.com/sirbuig/operating-systems/tree/main/docs/week-7/test-speed-of-a-program.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Scheduling exercises",permalink:"/operating-systems/week-7/scheduler-exercises"},next:{title:"Week 8",permalink:"/operating-systems/category/week-8"}},c={},l=[{value:"Results:",id:"results",level:2},{value:"References",id:"references",level:2}];function d(e){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"test-the-runtime-of-a-program",children:"Test the runtime of a program"})}),"\n",(0,n.jsx)(r.p,{children:"How can we estimate the time a program takes to run?"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Measure the actual runtime (or potentially capture CPU cycles)."}),"\n",(0,n.jsx)(r.li,{children:"Obtain an average elapsed time, as a single run may not provide an accurate prediction."}),"\n",(0,n.jsx)(r.li,{children:"Set up a fresh environment for each program execution (clearing cache, resetting registers, stack, etc.)."}),"\n",(0,n.jsx)(r.li,{children:"Bypass the time-sharing scheduler and change it with something faster."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"How can we get the time?"}),(0,n.jsx)(r.br,{}),"\n","We will use clock_gettime() that will take the time of the process to run without interrupts, wait time or context switches.\r\nLike getting the burst time. More to be found here : ",(0,n.jsx)(r.a,{href:"https://linux.die.net/man/3/clock_gettime",children:"linux manual"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Find the average time elapsed + new environment"}),(0,n.jsx)(r.br,{}),"\n","We can create a new child for each process we want to run, for n times.\r\nThe branch prediction will be reset for every process, the cache as well. Moreover, we will have a different PCB with other\r\nstack, heap, .data, etc."]}),"\n",(0,n.jsx)(r.p,{children:"So in the end, we isolate each run to simulate the real life scenario."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"A way to bypass the current scheduler"}),(0,n.jsx)(r.br,{}),"\n","From commands, we are able to change: ",(0,n.jsx)(r.em,{children:"where is running our program"}),", ",(0,n.jsx)(r.em,{children:"what scheduler algorithm to use"}),", ",(0,n.jsx)(r.em,{children:"priority of the\r\nprocess"}),", ",(0,n.jsx)(r.em,{children:"change to real-time scheduler"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"What means the last thing mentioned? Well, there are some processes that need special attention, for example, at cars with\r\nthe emergency break, thus less context switches are made, and we have a smaller waiting time."}),"\n",(0,n.jsxs)(r.p,{children:["This can be done via this command ",(0,n.jsx)(r.code,{children:"sudo taskset -c 1 chrt -r 99 ./test"}),".",(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.code,{children:"taskset -c 1"})," : our program will run only on this cpu (no cpu switch)",(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.code,{children:"chrt -r 99"}),": use real-time scheduler with Round Robin algorithm and have priority 99, see how are the priorities with the command : ",(0,n.jsx)(r.code,{children:"chrt -m"}),".",(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.code,{children:"./test"}),": your executable"]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("i",{children:"\ud83e\udd16 Code"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:'#define _POSIX_C_SOURCE 199309L // Enable clock_gettime() and related functions\r\n\r\n#include <stdio.h>\r\n#include <stdint.h>\r\n#include <stdlib.h>\r\n#include <sys/wait.h>\r\n#include <sys/mman.h>\r\n#include <unistd.h>\r\n#include <time.h>\r\n\r\nint main() {\r\n    int num_iterations = 100;  // Number of times to measure time\r\n    struct timespec start, end;\r\n    double total_time = 0.0;\r\n\r\n    // Create shared memory for passing elapsed time from child to parent\r\n    double *shared_time = mmap(NULL, sizeof(double),\r\n                               PROT_READ | PROT_WRITE,\r\n                               MAP_SHARED | MAP_ANONYMOUS, -1, 0);\r\n    if (shared_time == MAP_FAILED) {\r\n        perror("mmap failed");\r\n        return 1;\r\n    }\r\n\r\n    for (int i = 0; i < num_iterations; i++) {\r\n        pid_t pid = fork();\r\n\r\n        if (pid == 0) { // Child process\r\n            // Start time measurement\r\n            clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &start);\r\n\r\n            // Code to measure\r\n            printf("Helloworld\\n");\r\n\r\n            // End time measurement\r\n            clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &end);\r\n\r\n            // Calculate elapsed time in seconds\r\n            double elapsed_time = (end.tv_sec - start.tv_sec) +\r\n                                  (end.tv_nsec - start.tv_nsec) / 1e9;\r\n\r\n            *shared_time = elapsed_time; // Write to shared memory\r\n\r\n            exit(0); // Exit child\r\n        } else if (pid > 0) { // Parent process\r\n            int status;\r\n            waitpid(pid, &status, 0); // Wait for the child to finish\r\n\r\n            if (WIFEXITED(status)) {\r\n                // Read the elapsed time from shared memory\r\n                total_time += *shared_time;\r\n            }\r\n        } else {\r\n            perror("fork failed");\r\n            munmap(shared_time, sizeof(double)); // Unmap if fork fails\r\n            return 1;\r\n        }\r\n    }\r\n\r\n    // Calculate average time\r\n    double average_time = total_time / num_iterations;\r\n    printf("Average elapsed time: %.9f seconds\\n", average_time);\r\n\r\n    // Unmap the shared memory after the loop\r\n    munmap(shared_time, sizeof(double));\r\n\r\n    return 0;\r\n}\n'})})]}),"\n",(0,n.jsx)(r.h2,{id:"results",children:"Results:"}),"\n",(0,n.jsxs)(r.p,{children:["By running with command : ",(0,n.jsx)(r.code,{children:"sudo taskset -c 1 chrt -r 99 ./test"})," and 100 iterations I get:"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Average elapsed time: 0.000045828 seconds"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["By running with : ",(0,n.jsx)(r.code,{children:"./test"})," I get:"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Average elapsed time: 0.000070986 seconds"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Question"})," : What if we do not assign a particular cpu for the program? Is there a difference?"]}),"\n",(0,n.jsx)(r.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.geeksforgeeks.org/chrt-command-in-linux-with-examples/",children:"geeksforgeeks"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://stackoverflow.com/questions/9887839/how-to-count-clock-cycles-with-rdtsc-in-gcc-x86",children:"stackoverflow: count clock cycles"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>o});var n=t(6540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);