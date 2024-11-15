"use strict";(self.webpackChunkoperating_systems=self.webpackChunkoperating_systems||[]).push([[463],{84:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=s(4848),t=s(8453);const r={sidebar_position:1,title:"CPU Scheduling Introduction",description:"Learn the fundamentals of CPU scheduling, including key concepts, scheduling criteria, and real-world applications. Understand preemptive and nonpreemptive scheduling, dispatcher latency, and more."},o="CPU Scheduling introduction",a={id:"week-7/scheduler-introduction",title:"CPU Scheduling Introduction",description:"Learn the fundamentals of CPU scheduling, including key concepts, scheduling criteria, and real-world applications. Understand preemptive and nonpreemptive scheduling, dispatcher latency, and more.",source:"@site/docs/week-7/scheduler-introduction.md",sourceDirName:"week-7",slug:"/week-7/scheduler-introduction",permalink:"/operating-systems/week-7/scheduler-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/sirbuig/operating-systems/tree/main/docs/week-7/scheduler-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"CPU Scheduling Introduction",description:"Learn the fundamentals of CPU scheduling, including key concepts, scheduling criteria, and real-world applications. Understand preemptive and nonpreemptive scheduling, dispatcher latency, and more."},sidebar:"tutorialSidebar",previous:{title:"Week 7",permalink:"/operating-systems/category/week-7"},next:{title:"CPU Scheduling Algorithms",permalink:"/operating-systems/week-7/scheduler_algorithms"}},c={},l=[{value:"Scheduling Criteria",id:"scheduling-criteria",level:2},{value:"Prerequisite knowledge",id:"prerequisite-knowledge",level:2},{value:"Burst duration",id:"burst-duration",level:3},{value:"<strong>Solution 1 - Look at the frequency curve</strong>.",id:"solution-1---look-at-the-frequency-curve",level:4},{value:"<strong>Solution 2 - Predict the next cpu burst</strong>",id:"solution-2---predict-the-next-cpu-burst",level:4},{value:"Preemptive and Nonpreemptive Scheduling",id:"preemptive-and-nonpreemptive-scheduling",level:3},{value:"Dispatcher latency",id:"dispatcher-latency",level:3},{value:"When is a process switched?",id:"when-is-a-process-switched",level:3},{value:"Examples of scheduler usage",id:"examples-of-scheduler-usage",level:2},{value:"Philosophical questions",id:"philosophical-questions",level:2},{value:"Further reading",id:"further-reading",level:2},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cpu-scheduling-introduction",children:"CPU Scheduling introduction"})}),"\n",(0,i.jsx)(n.p,{children:"Concept, what you need to know before, real-world usage, (6 minute reading)"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["CPU scheduling is the basis of multiprogrammed operating systems. By switching the CPU among processes, the operating\r\nsystem can make the computer more productive (page 266 from this ",(0,i.jsx)(n.a,{href:"https://os.ecci.ucr.ac.cr/slides/Abraham-Silberschatz-Operating-System-Concepts-10th-2018.pdf",children:"book"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The idea is similar to average wait time ",(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/average-waiting-time/description/",children:"[Leetcode example]"}),", namely we want\r\nto minimize the waiting time of the process to be executed on our available hardware. There are some criteria we need to consider first before implementing a scheduling algorithm:"]}),"\n",(0,i.jsx)(n.h2,{id:"scheduling-criteria",children:"Scheduling Criteria"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CPU utilization"}),". Keep the CPU as busy as possible. (",(0,i.jsx)(n.code,{children:"maximize"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Throughput"}),". How many processes are completed per time unit. (",(0,i.jsx)(n.code,{children:"maximize"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Turnaround time"}),". How long does it take to run a process. Calculated as the sum of the periods spent waiting in the\r\nready queue + executing on CPU + doing I/O. (",(0,i.jsx)(n.code,{children:"minimize"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Waiting time"}),". Amount of time waiting in ready queue. (",(0,i.jsx)(n.code,{children:"minimize"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Response"}),". Time it takes to start responding. (first time on CPU) (",(0,i.jsx)(n.code,{children:"minimize"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisite-knowledge",children:"Prerequisite knowledge"}),"\n",(0,i.jsx)(n.p,{children:"An early intuition to resolve this problem is to think it as a FIFO (First In First Out), but in order to\r\nminimize the average time we need other algorithms and other ways to keep our data."}),"\n",(0,i.jsx)(n.p,{children:"First, we need to learn what a burst duration is, what is a preemptive, nonpreemptive scheduler and what a dispatcher is."}),"\n",(0,i.jsx)(n.h3,{id:"burst-duration",children:"Burst duration"}),"\n",(0,i.jsx)(n.p,{children:"Process execution consists of a cycle of CPU execution and I/O wait. Processes alternate between those 2 states.\r\nAn example is shown in this figure."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_3.png",src:s(391).A+"",width:"1849",height:"1170"})}),"\n",(0,i.jsx)(n.p,{children:"The burst duration is essential for letting the scheduling algorithm know how much time will take for a specific\r\nprocess to run. But how do we know the duration before running it?"}),"\n",(0,i.jsxs)(n.h4,{id:"solution-1---look-at-the-frequency-curve",children:[(0,i.jsx)(n.strong,{children:"Solution 1 - Look at the frequency curve"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The durations of CPU bursts have been measured extensively, thus we can\r\npredict the average burst time."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:s(5437).A+"",width:"608",height:"368"})}),"\n",(0,i.jsx)(n.h4,{id:"solution-2---predict-the-next-cpu-burst",children:(0,i.jsx)(n.strong,{children:"Solution 2 - Predict the next cpu burst"})}),"\n",(0,i.jsxs)(n.p,{children:["We expect that the next CPU burst will be similar in length to the previous ones.\r\nThe next CPU burst is predicted as an ",(0,i.jsx)(n.code,{children:"exponential average"})," of the measured length of previous CPU bursts."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"tn = actual length of n^th CPU burst."}),"\n",(0,i.jsx)(n.li,{children:"Tn+1 = predicted value for next CPU burst"}),"\n",(0,i.jsx)(n.li,{children:"Tn = last guess"}),"\n",(0,i.jsxs)(n.li,{children:["For alpha, ",(0,i.jsx)(n.code,{children:"0 <= alpha <= 1"})," : ",(0,i.jsx)(n.code,{children:"tn+1 = alpha * tn + (1 - alpha) * Tn"}),(0,i.jsx)(n.br,{}),"\n","Generalized : ",(0,i.jsx)(n.code,{children:"tn+1 = alpha * tn + ... + (1 - alpha)^j * alpha * Tn-j + ... + (1 - alpha)^ (n + 1) * T0"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We can choose alpha = 1/2 : recent history and past history are equally weighted.\r\nExample :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"img_1.png",src:s(3653).A+"",width:"727",height:"543"}),(0,i.jsx)(n.br,{}),"\n","T0 = 10, t1 = 6. alpha = 1/2"]}),"\n",(0,i.jsxs)(n.p,{children:["T1 = 1/2 _ 6 + (1 - 1/2) _ 10 = 8",(0,i.jsx)(n.br,{}),"\n","T2 = 1/2 _ 4 + (1 - 1/2) _ 8 = 6",(0,i.jsx)(n.br,{}),"\n","T3 = 1/2 _ 6 + (1 - 1/2) _ 6 = 6",(0,i.jsx)(n.br,{}),"\n","..."]}),"\n",(0,i.jsx)(n.h3,{id:"preemptive-and-nonpreemptive-scheduling",children:"Preemptive and Nonpreemptive Scheduling"}),"\n",(0,i.jsx)(n.p,{children:"CPU scheduling decisions may take place when a process:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Switches from ",(0,i.jsx)(n.strong,{children:"running to waiting"})," state (e.g. wait() for the child in parent)"]}),"\n",(0,i.jsxs)(n.li,{children:["Switches from ",(0,i.jsx)(n.strong,{children:"running to ready"})," state (e.g. when interrupt occurs)"]}),"\n",(0,i.jsxs)(n.li,{children:["Switches from ",(0,i.jsx)(n.strong,{children:"waiting to ready"})," (e.g. at completion of I/O)"]}),"\n",(0,i.jsx)(n.li,{children:"Terminates"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["1 & 4 => nonpreemptive",(0,i.jsx)(n.br,{}),"\n","All of them => preemptive"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Under nonpreemptive scheduling, once the CPU has been allocated\r\nto a process, the process keeps the CPU until it releases either by terminating\r\nor by switching to the waiting state.\r\n",(0,i.jsx)(n.img,{alt:"img_1.png",src:s(2250).A+"",width:"554",height:"442"})]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Whereas, preemptive scheduling, can change between processes multiple times until they finish.\r\n",(0,i.jsx)(n.img,{alt:"img.png",src:s(3011).A+"",width:"581",height:"445"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Question"})," : We talked about processes, but what about kernel mode? When we do a syscall the processes\r\ninterrupts and waits a response from kernel (read, open file, etc.). ",(0,i.jsx)("u",{children:" Is this task preemptive, or not? "}),(0,i.jsx)(n.br,{}),"\n","(For the answer you can read the pages 202 and 262 from this ",(0,i.jsx)(n.a,{href:"https://os.ecci.ucr.ac.cr/slides/Abraham-Silberschatz-Operating-System-Concepts-10th-2018.pdf",children:"book"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:["Moreover, for a better understanding, on ",(0,i.jsx)(n.a,{href:"https://www.geeksforgeeks.org/preemptive-and-non-preemptive-scheduling/",children:"the website"})," you'll find a useful table comparing preemptive and non-preemptive scheduling"]}),"\n",(0,i.jsx)(n.h3,{id:"dispatcher-latency",children:"Dispatcher latency"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The dispatcher is the module that gives control of the CPU\u2019s core to the process\r\nselected by the CPU scheduler.\r\nThe time it takes for the dispatcher to stop one process and start\r\nanother running is known as the dispatch latency."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"IMPORTANT",type:"warning",children:(0,i.jsxs)(n.p,{children:["For every ",(0,i.jsx)(n.a,{href:"https://os.ecci.ucr.ac.cr/slides/Abraham-Silberschatz-Operating-System-Concepts-10th-2018.pdf#page=152",children:"context switch"}),", the dispatcher is invoked."]})}),"\n",(0,i.jsx)(n.admonition,{title:"fun fact",type:"tip",children:(0,i.jsxs)(n.p,{children:["You can see how many context switches a process had. ",(0,i.jsx)(n.a,{href:"https://unix.stackexchange.com/questions/39342/how-to-see-how-many-context-switches-a-process-makes",children:"See here"}),".",(0,i.jsx)(n.br,{}),"\n","Also, with ",(0,i.jsx)(n.code,{children:"vmstat 1 3"})," you can see the total context switches over a 3-second period. (in system column, below cs)"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img_2.png",src:s(7902).A+"",width:"1134",height:"479"})}),"\n",(0,i.jsx)(n.h3,{id:"when-is-a-process-switched",children:"When is a process switched?"}),"\n",(0,i.jsxs)(n.p,{children:["Below, it will be shown when a process stops running on the CPU:\r\n",(0,i.jsx)(n.img,{alt:"img_4.png",src:s(776).A+"",width:"1139",height:"444"})]}),"\n",(0,i.jsxs)(n.p,{children:["More could be read at ",(0,i.jsx)(n.a,{href:"https://os.ecci.ucr.ac.cr/slides/Abraham-Silberschatz-Operating-System-Concepts-10th-2018.pdf#page=151",children:"page 113"})]}),"\n",(0,i.jsx)(n.h2,{id:"examples-of-scheduler-usage",children:"Examples of scheduler usage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["used in Embedded Systems and Real-Time Systems:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In real-time systems, tasks must meet strict timing constraints (e.g., airbag deployment in cars). CPU scheduling principles are applied in these systems to ensure critical tasks are completed on time."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["High-Performance Computing (HPC) and Parallel Processing","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In HPC, multiple tasks need to be scheduled across many cores or even multiple computers. CPU scheduling concepts help allocate tasks efficiently, balancing loads and minimizing idle times."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Mobile Application Development","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mobile devices have limited resources, so efficient scheduling is critical to avoid battery drain and maintain performance. Mobile OS schedulers prioritize tasks based on CPU, GPU, and memory usage."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.researchgate.net/publication/261318367_Towards_Power-Efficient_Smartphones_by_Energy-Aware_Dynamic_Task_Scheduling",children:"this article"})," that talks about a scheduler for power-efficient smartphones"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Extreme example ",(0,i.jsx)(n.code,{children:"YouTube"}),":",(0,i.jsx)(n.br,{}),"\n","We can think about the YouTube scheduling recommendation algorithm as analogy for CPU scheduling. Now, let's take each criteria and convert it in YouTube mindset."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CPU utilization \u2192 User Engagement"}),(0,i.jsx)(n.br,{}),"\n","In CPU scheduling, maximizing CPU utilization ensures that the processor is busy most of the time, making efficient use of resources.\r\nFor YouTube\u2019s recommendation algorithm, this translates to maximizing user engagement,\r\nwhich involves keeping users watching videos for extended periods."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Throughput \u2192 Recommended Video Volume"}),(0,i.jsx)(n.br,{}),"\n","Throughput in CPU scheduling refers to the number of processes completed in a given time frame.\r\nFor YouTube\u2019s algorithm, this becomes the number of videos recommended and watched within a session or a certain time period."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Turnaround Time \u2192 Viewer Satisfaction Rate"}),(0,i.jsx)(n.br,{}),"\n","In CPU scheduling, turnaround time is the total time taken to complete a process.\r\nFor YouTube, we can relate this to the viewer satisfaction rate, which is how quickly users find content they enjoy.\r\nIf users quickly find engaging videos, it indicates an effective algorithm."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Wait Time \u2192 Recommendation Delay"}),"\r\nWait time in CPU scheduling is the time a process spends waiting to be executed.\r\nOn YouTube, this can be thought of as the delay before an appealing recommendation appears.\r\nIdeally, users should see engaging content immediately or soon after starting a session."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Response Time \u2192 Immediate User Interaction"}),(0,i.jsx)(n.br,{}),"\n","In CPU scheduling, response time is the time it takes for the system to start responding to a process.\r\nOn YouTube, this relates to how quickly users interact with a video (clicking on it, watching, or taking some other action)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"philosophical-questions",children:"Philosophical questions"}),"\n",(0,i.jsx)(n.p,{children:"Can two processes running slightly different programs concurrently halt at the same physical address? If no, why? If yes, give example."}),"\n",(0,i.jsxs)(n.p,{children:["Can we interrupt an I/O operation?",(0,i.jsx)(n.br,{}),"\n","Follow-up : If we can, where do we store the values from the kernel operations at context switch? ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/12911841/kernel-stack-and-user-space-stack",children:"solution"})," + ",(0,i.jsx)(n.a,{href:"https://cs.stackexchange.com/questions/96550/whats-the-difference-between-user-registers-and-kernel-registers",children:"this one"})]}),"\n",(0,i.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://eli.thegreenplace.net/2018/measuring-context-switching-and-memory-overheads-for-linux-threads/",children:"More about context switches"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=KXuZi9aeGTw",children:"Avoid too much indirect switch costs, YouTube video by a Google Engineer"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Operating Systems Concepts, 10th edition"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://codex.cs.yale.edu/avi/os-book/OS8/os8e/slide-dir/PDF-dir/ch5.pdf",children:"Yale course on CPU Scheduler"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.cl.cam.ac.uk/teaching/1617/OpSystems/pdf/05-Scheduling-Algorithms.pdf",children:"Cambridge course on CPU Scheduler"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.scs.stanford.edu/07au-cs140/notes/l5.pdf",children:"Stanford course on CPU Scheduler"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.geeksforgeeks.org/preemptive-and-non-preemptive-scheduling/",children:"Geeksforgeeks - preemptive and nonpreemptive"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.cs.princeton.edu/courses/archive/fall18/cos318/lectures/8.CPUScheduling.pdf",children:"Princeton course on CPU scheduler"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://biglysales.com/how-do-modern-operating-systems-handle-process-scheduling/",children:"How do Modern Operating systems Handle Process Scheduling By Annie Telligent"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5437:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/img-5526160d12ccfbce530d0750499e544f.png"},3653:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/img_1-31ce98dd7e0978672865eb2b43561ca1.png"},7902:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/img_2-4efe716edc634200d513334b31bbde16.png"},391:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/img_3-83db8fbc9aa72fc389b03d1e9e4843ba.png"},776:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/img_4-96ca0175e393d6b0f51d7554fe5f25b5.png"},3011:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/week-7-6-cbac3a83aaf14b8286bd6dfc9d6e9fa6.png"},2250:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/week-7-7-7a89afcfcfe64a1afd6b725943a213d9.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(6540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);