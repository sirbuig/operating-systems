"use strict";(self.webpackChunkoperating_systems=self.webpackChunkoperating_systems||[]).push([[4610],{1029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(4848),r=n(8453);const i={sidebar_position:2},o="Classic Problems of Synchronization",a={id:"week-8/synchronization-examples/classic-problems",title:"Classic Problems of Synchronization",description:"The problems presented here are used for testing newly proposed synchronization schemes.",source:"@site/docs/week-8/synchronization-examples/classic-problems.md",sourceDirName:"week-8/synchronization-examples",slug:"/week-8/synchronization-examples/classic-problems",permalink:"/operating-systems/week-8/synchronization-examples/classic-problems",draft:!1,unlisted:!1,editUrl:"https://github.com/sirbuig/operating-systems/tree/main/docs/week-8/synchronization-examples/classic-problems.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Deadlock",permalink:"/operating-systems/week-8/synchronization-examples/deadlock"},next:{title:"Extra",permalink:"/operating-systems/week-8/synchronization-examples/extra"}},h={},l=[{value:"The Bounded-Buffer Problem",id:"the-bounded-buffer-problem",level:2},{value:"The Readers-Writers Problem",id:"the-readers-writers-problem",level:2},{value:"Starvation-free solution to the first variation",id:"starvation-free-solution-to-the-first-variation",level:3},{value:"The Dining-Philosophers Problem",id:"the-dining-philosophers-problem",level:2},{value:"Semaphore Solution",id:"semaphore-solution",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"classic-problems-of-synchronization",children:"Classic Problems of Synchronization"})}),"\n",(0,s.jsx)(t.p,{children:"The problems presented here are used for testing newly proposed synchronization schemes."}),"\n",(0,s.jsx)(t.p,{children:"Semaphores are used in these solutions, although mutex locks could also be used."}),"\n",(0,s.jsx)(t.h2,{id:"the-bounded-buffer-problem",children:"The Bounded-Buffer Problem"}),"\n",(0,s.jsxs)(t.p,{children:["For the bounded-buffer problem, we must revisit the ",(0,s.jsx)(t.a,{href:"https://sirbuig.github.io/operating-systems/week-6/background",children:"Producer-Consumer paradigm"})," and its ",(0,s.jsx)(t.a,{href:"https://sirbuig.github.io/operating-systems/week-6/problems/producer-consumer",children:"implementation"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The producer and consumer processes share the following data structures:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"// the pool consists of n buffers\nint n;\n\n// remember, a mutex is in fact a binary semaphore!\n// provides mutual exclusion to the buffer pool\nsem mutex = 1;\n\n// the buffer initially has n empty positions\nsem empty = n;\n\n// the buffer initially has 0 full positions\nsem full = 0;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",metastring:'title="producer process"',children:'while(true) {\n    // ...\n    // produce an item in next_produced\n    // ...\n\n    // I want to produce an item,\n    // so I "take" one empty spot\n    wait(empty);\n\n    // I want to enter the critical section\n    wait(mutex);\n\n    // ...\n    // add next_produced to the buffer\n    // ...\n\n    // I leave the critical section\n    signal(mutex);\n\n    // I "added" an item\n    signal(full);\n}\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",metastring:'title="consumer process"',children:'while(true) {\n    // If possible (semaphore > 0), I "consume" a position\n    wait(full);\n\n    // I want to enter the critical section\n    wait(mutex);\n\n    // ...\n    // remove an item from buffer to next_consumed\n    // ...\n\n    // I leave the critical section\n    signal(mutex);\n\n    // One empty position is added to the semaphore\n    signal(empty);\n\n    // ...\n    // consume the item in next_consumed\n    // ...\n}\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Basically, the producer is producing full buffers for the consumer and the consumer is producing empty buffers for the producer."})}),"\n",(0,s.jsx)(t.h2,{id:"the-readers-writers-problem",children:"The Readers-Writers Problem"}),"\n",(0,s.jsx)(t.p,{children:"Suppose several concurrent processes are doing operations on a database. Some processes may want only to read the database, while others may want to update (read and write) the database."}),"\n",(0,s.jsxs)(t.p,{children:["In the following problem, we'll refer to the former as ",(0,s.jsx)(t.strong,{children:"readers"})," and to the latter as ",(0,s.jsx)(t.strong,{children:"writers"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"There is no harm if two readers access the shared data in the same time. The problem arises if at least one writer is involved, as chaos may ensure."}),"\n",(0,s.jsxs)(t.p,{children:["To make sure we have no difficulties, we demand that the writers have ",(0,s.jsx)(t.strong,{children:"exclusive access"})," to the shared database while writing to it."]}),"\n",(0,s.jsxs)(t.p,{children:["This synchronization problem is known as ",(0,s.jsx)(t.strong,{children:"the readers-writers problem"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"There are multiple variations to this problem, and all of them are based on priorities:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"First"})," readers-writers problem, requires that ",(0,s.jsx)(t.strong,{children:"no reader be kept waiting"})," unless a writer has already obtained permission to use the shared object."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Second"})," readers-writers problem requires that, ",(0,s.jsx)(t.strong,{children:"once a writer is ready"}),", that writer performs its write as soon as possible."]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["A solution to either problem may result in ",(0,s.jsx)(t.strong,{children:"starvation"}),"."]}),(0,s.jsx)(t.p,{children:"In the first case, writers may starve."}),(0,s.jsx)(t.p,{children:"In the second case, readers may starve."})]}),"\n",(0,s.jsx)(t.h3,{id:"starvation-free-solution-to-the-first-variation",children:"Starvation-free solution to the first variation"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Solution"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",metastring:'title="readers-writers.c"',children:'#include <stdlib.h>\n#include <stdio.h>\n#include <pthread.h>\n#include <semaphore.h>\n#include <unistd.h>\n\n#define NUM_READERS 5\n#define NUM_WRITERS 2\n\n// shared "database"\nint shared_data = 0;\n\n// binary semaphores\nsem_t rw_mutex, mutex;\n\n// counting semaphore\n// keeps count on how many processes are\n// currently reading the object\nint read_count = 0;\n\nvoid *reader(void *args)\n{\n\tint id = *(int *)args;\n\n\twhile (1)\n\t{\n\t\t// I want to update the number of readers\n\t\tsem_wait(&mutex);\n\n\t\tread_count++;\n\n\t\t// If this is the first reader\n\t\tif (read_count == 1)\n\t\t\t// it means there were no active readers before\n\t\t\t// this blocks writers from writing\n\t\t\t// when readers are active\n\t\t\tsem_wait(&rw_mutex);\n\n\t\t// Release the mutex\n\t\tsem_post(&mutex);\n\n\t\t// shared_data is not protected because\n\t\t// multiple readers can access it concurrently\n\t\tprintf("Reader %d is reading the data: %d\\n", id, shared_data);\n\n\t\t// I want to decrement the number of readers\n\t\tsem_wait(&mutex);\n\n\t\tread_count--;\n\n\t\t// If this is the last reader\n\t\tif (read_count == 0)\n\t\t\t// rw_mutex is released\n\t\t\t// now writers can proceed\n\t\t\tsem_post(&rw_mutex);\n\t\t// Release the mutex\n\t\tsem_post(&mutex);\n\n\t\tsleep(rand() % 3 + 1);\n\t}\n\n\treturn NULL;\n}\n\nvoid *writer(void *args)\n{\n\tint id = *(int *)args;\n\n\twhile (1)\n\t{\n\t\t// Only one writer at a time has exclusive access\n\t\tsem_wait(&rw_mutex);\n\n\t\tprintf("Writer %d is writing...\\n", id);\n\t\tshared_data++;\n\n\t\t// Now someone else can access the shared data\n\t\tsem_post(&rw_mutex);\n\n\t\tsleep(rand() % 3 + 1);\n\t}\n\n\treturn NULL;\n}\n\nint main()\n{\n\tpthread_t readers[NUM_READERS], writers[NUM_WRITERS];\n\tint readers_ids[NUM_READERS], writers_ids[NUM_WRITERS];\n\n\t// rw_mutex is common to both reader and writer processes\n\t// mutual exclusion semaphore for the writers\n\t// used only by the first and last reader that enters/exits cs\n\tsem_init(&rw_mutex, 0, 1);\n\n\t// to ensure mutual exclusion when read_count is updated\n\tsem_init(&mutex, 0, 1);\n\n\tfor (int i = 0; i < NUM_READERS; i++)\n\t{\n\t\treaders_ids[i] = i + 1;\n\t\tpthread_create(&readers[i], NULL, reader, &readers_ids[i]);\n\t}\n\n\tfor (int i = 0; i < NUM_WRITERS; i++)\n\t{\n\t\twriters_ids[i] = i + 1;\n\t\tpthread_create(&writers[i], NULL, writer, &writers_ids[i]);\n\t}\n\n\tfor (int i = 0; i < NUM_READERS; i++)\n\t{\n\t\tpthread_join(readers[i], NULL);\n\t}\n\n\tfor (int i = 0; i < NUM_WRITERS; i++)\n\t{\n\t\tpthread_join(writers[i], NULL);\n\t}\n\n\tsem_destroy(&mutex);\n\tsem_destroy(&rw_mutex);\n\n\treturn 0;\n}\n'})})]}),"\n",(0,s.jsx)(t.h2,{id:"the-dining-philosophers-problem",children:"The Dining-Philosophers Problem"}),"\n",(0,s.jsx)(t.p,{children:"Consider five philosophers who spend their lives thinking and eating. The philosophers share a circular table surrounded by five chairs, each belonging to one philosopher."}),"\n",(0,s.jsx)(t.p,{children:"In the center of the table is a bowl of rice, and the table is laid with five single chopsticks (or forks). From time to time, a philosopher gets hungry and tries to pick up the chopsticks closest to him and he may pick up only one chopstick at a time."}),"\n",(0,s.jsx)(t.p,{children:"Obviously, no one can pick up a chopstick that is already in the hand of a neighbor. When a hungry philosopher has both his chopsticks at the same time, he eats without releasing the chopsticks. When he finished eating, he puts down both chopsticks and starts thinking again."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"dining_philosophers",src:n(3698).A+"",width:"1130",height:"1172"})}),"\n",(0,s.jsxs)(t.p,{children:["This problem is important because it's an example of a large class of concurrency-control problems. It raises the question: ",(0,s.jsx)(t.strong,{children:"How can we allocate several resources among several processes in a deadlock-free and starvation-free manner?"})]}),"\n",(0,s.jsx)(t.h3,{id:"semaphore-solution",children:"Semaphore Solution"}),"\n",(0,s.jsx)(t.p,{children:"We can represent each chopstick with a semaphore."}),"\n",(0,s.jsxs)(t.p,{children:["A philosopher tries to grab a chopstick by executing a ",(0,s.jsx)(t.code,{children:"wait()"})," operation on that semaphore. He releases his chopstick by executing the ",(0,s.jsx)(t.code,{children:"signal()"})," operation on the appropiate semaphores."]}),"\n",(0,s.jsx)(t.p,{children:"The shared data become:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"semaphore chopsticks[5];\n"})}),"\n",(0,s.jsx)(t.p,{children:"with all the elements initialized to 1."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",metastring:'title="philosoper i"',children:"while(true) {\n    wait(chopstick[i]);\n    wait(chopstick[(i+1)%5]);\n\n    // eat\n\n    signal(chopstick[i]);\n    signal(chopstick[(i+1)%5]);\n\n    // think\n}\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["This solution guarantees that no two neighbors are eating simultaneously, but it must be rejected because it could create a ",(0,s.jsx)(t.strong,{children:"deadlock"}),"."]}),(0,s.jsx)(t.p,{children:"Suppose that all five philosophers are hungry at the same time and they all grab their left chopstick. All the semaphores are now equal to 0 and they cannot grab their right chopstick, because they're waiting for a signal."})]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3698:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/dining_philosophers-919998c81cae1519939e61b563b35682.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);