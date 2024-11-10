"use strict";(self.webpackChunkoperating_systems=self.webpackChunkoperating_systems||[]).push([[847],{6569:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var i=s(4848),r=s(8453);const t={sidebar_position:2,title:"Understanding Zombie and Orphan Processes",description:"Learn about zombie and orphan processes in operating systems, including their definitions, examples, and how to handle them.",keywords:["zombie process","orphan process","operating systems","process management","fork","wait","C programming"]},o="Zombies and orphans",a={id:"week-4/zombie_orphans",title:"Understanding Zombie and Orphan Processes",description:"Learn about zombie and orphan processes in operating systems, including their definitions, examples, and how to handle them.",source:"@site/docs/week-4/zombie_orphans.md",sourceDirName:"week-4",slug:"/week-4/zombie_orphans",permalink:"/operating-systems/week-4/zombie_orphans",draft:!1,unlisted:!1,editUrl:"https://github.com/sirbuig/operating-systems/tree/main/docs/week-4/zombie_orphans.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Understanding Zombie and Orphan Processes",description:"Learn about zombie and orphan processes in operating systems, including their definitions, examples, and how to handle them.",keywords:["zombie process","orphan process","operating systems","process management","fork","wait","C programming"]},sidebar:"tutorialSidebar",previous:{title:"Understanding Fork in Operating Systems",permalink:"/operating-systems/week-4/understand_fork"},next:{title:"Week 5",permalink:"/operating-systems/category/week-5"}},d={},h=[{value:"Zombie",id:"zombie",level:2},{value:"Orphans",id:"orphans",level:2},{value:"Why do we need to know all of this?",id:"why-do-we-need-to-know-all-of-this",level:2},{value:"Further reading",id:"further-reading",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"zombies-and-orphans",children:"Zombies and orphans"})}),"\n",(0,i.jsx)(n.p,{children:"Normal topics around here."}),"\n",(0,i.jsxs)(n.p,{children:["Understand these concepts in ",(0,i.jsx)(n.strong,{children:"3 minutes"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"zombie",children:"Zombie"}),"\n",(0,i.jsxs)(n.p,{children:["The process is a ",(0,i.jsx)(n.code,{children:"zombie"})," if the child ends its execution and the parent doesn't have time to see the exit status."]}),"\n",(0,i.jsx)(n.p,{children:"Let's see an example of a zombie:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="zombie-code.c"',children:'#include <stdio.h> // for standard IO functions\r\n#include <unistd.h> // for fork and sleep\r\n#include <sys/wait.h> // for wait lol\r\n#include <stdlib.h> //for exit status\r\nint main(){\r\n    pid_t pid;\r\n    int status;\r\n    if ((pid = fork()) < 0) {\r\n        perror("fork");\r\n        exit(1);\r\n    }\r\n\r\n    /* Child */\r\n    if (pid == 0)\r\n        exit(0);\r\n\r\n    sleep(100);\r\n    wait(NULL);\r\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Let's now verify in action the zombie process. To try this on your own device, run on the left side of the screen ",(0,i.jsx)(n.code,{children:"zombie-code.c"}),", and on the right side on other terminal ",(0,i.jsx)(n.code,{children:"top"}),".\r\n",(0,i.jsx)(n.img,{alt:"zombie code",src:s(1693).A+"",width:"2045",height:"136"})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("i",{children:"\ud83c\udf75 Coffee break with a meme"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Zombie_process.png",alt:""})})]}),"\n",(0,i.jsx)(n.h2,{id:"orphans",children:"Orphans"}),"\n",(0,i.jsxs)(n.p,{children:["The process is considered ",(0,i.jsx)(n.code,{children:"orphaned"})," if its parent terminates before it does, without invoking ",(0,i.jsx)(n.code,{children:"wait()"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"How does the OS handle this?"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Cascade termination, after the dad dies, all its kids will die"}),"\n",(0,i.jsxs)(n.li,{children:["The child is reassigned to the ",(0,i.jsx)(n.code,{children:"init"})," process or the kernel (",(0,i.jsx)(n.code,{children:"pid = 1"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Other possible variations"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's see an example of an orphan:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#include <stdio.h>\r\n#include <sys/types.h>\r\n#include <unistd.h>\r\n\r\nint main()\r\n{\r\n    if(!fork())\r\n        sleep(30);\r\n    return 0;\r\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note that finding if a process is orphan is much harder than finding a zombie. Each OS handles in a different way\r\nthis situation."}),"\n",(0,i.jsx)(n.h2,{id:"why-do-we-need-to-know-all-of-this",children:"Why do we need to know all of this?"}),"\n",(0,i.jsxs)(n.p,{children:["Well we should as parents wait for our children as soon as possible in the code. When the ",(0,i.jsx)(n.code,{children:"wait()"})," occurs,\r\nwe free-up the PCB of the child. If the child terminates, and we do something in the meantime, we risk to lose the\r\nchild's BCP."]}),"\n",(0,i.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://unix.stackexchange.com/questions/491549",children:"https://unix.stackexchange.com/questions/491549"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://unix.stackexchange.com/q/491549",children:"https://unix.stackexchange.com/q/491549"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.geeksforgeeks.org/zombie-processes-prevention/",children:"https://www.geeksforgeeks.org/zombie-processes-prevention/"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1693:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/zombie-da349c6a65ae7dd6bb4d692ccac917f1.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(6540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);