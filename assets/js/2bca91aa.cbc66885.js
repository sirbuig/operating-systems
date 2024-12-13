"use strict";(self.webpackChunkoperating_systems=self.webpackChunkoperating_systems||[]).push([[8191],{3573:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(4848),t=i(8453);const r={sidebar_position:2},a="Simulation of pagination in C",o={id:"week-10/page_problem",title:"Simulation of pagination in C",description:"Create an app that simulates physical memory, backing store, page fault and LRU",source:"@site/docs/week-10/page_problem.md",sourceDirName:"week-10",slug:"/week-10/page_problem",permalink:"/operating-systems/week-10/page_problem",draft:!1,unlisted:!1,editUrl:"https://github.com/sirbuig/operating-systems/tree/main/docs/week-10/page_problem.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Contiguous Memory Allocation",permalink:"/operating-systems/week-10/main-memory/memory-allocation"}},l={},c=[{value:"Task:",id:"task",level:2},{value:"Optional:",id:"optional",level:2},{value:"Input",id:"input",level:3},{value:"Example",id:"example",level:3},{value:"Skeleton explanation",id:"skeleton-explanation",level:2},{value:"Tips for the functions",id:"tips-for-the-functions",level:2},{value:"Solution",id:"solution",level:2},{value:"What we learned:",id:"what-we-learned",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"simulation-of-pagination-in-c",children:"Simulation of pagination in C"})}),"\n",(0,s.jsx)(n.p,{children:"Create an app that simulates physical memory, backing store, page fault and LRU"}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["Read ",(0,s.jsx)(n.a,{href:"https://os.ecci.ucr.ac.cr/slides/Abraham-Silberschatz-Operating-System-Concepts-10th-2018.pdf#page=455",children:"Chapter 9 Main Memory"})," and ",(0,s.jsx)(n.a,{href:"https://os.ecci.ucr.ac.cr/slides/Abraham-Silberschatz-Operating-System-Concepts-10th-2018.pdf#page=501",children:"Chapter 10 Virtual Memory"})," from the Operating System Concepts before trying to solve this problem.\nThis exercise is for learning about memory, don't use any generative AI tool to solve it."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["DOWNLOAD the provided ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(362).A+"",children:"zip file"})," containing the skeleton code."]})}),"\n",(0,s.jsx)(n.p,{children:"To run a process, we need more than just the code. It is also required a process control block, thread control block, a scheduler,\na dispatcher, system calls to switch to kernel mode, a place in RAM to store data, and many more."}),"\n",(0,s.jsx)(n.p,{children:"For our pagination simulation, we\u2019ll work with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A process (list of integers)"}),"\n",(0,s.jsx)(n.li,{children:"Physical memory"}),"\n",(0,s.jsx)(n.li,{children:"Backing store"}),"\n",(0,s.jsx)(n.li,{children:"Page table"}),"\n",(0,s.jsx)(n.li,{children:"Frame map"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"task",children:"Task:"}),"\n",(0,s.jsxs)(n.p,{children:["Implement a ",(0,s.jsx)(n.code,{children:"get_value(process_id, index)"})," function that returns the integer at the given index for the specified process.\nHowever, the process is split into pages and stored in a backing store. When ",(0,s.jsx)(n.code,{children:"get_value"})," is called, we must check if the page is in memory:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If not, load it into a free frame."}),"\n",(0,s.jsx)(n.li,{children:"If no frame is free, evict the least recently used (LRU) page and load the necessary one."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"All data must be accessed through the physical memory simulated."}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"The exercise is made just for reading the data."})]}),"\n",(0,s.jsxs)(n.p,{children:["Complete the three functions found at the of the ",(0,s.jsx)(n.code,{children:"memory.c"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"handle_page_fault"}),"\n",(0,s.jsx)(n.li,{children:"get_value"}),"\n",(0,s.jsx)(n.li,{children:"update_lru"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"optional",children:"Optional:"}),"\n",(0,s.jsx)(n.p,{children:"Create a function that writes in the memory. Make sure to change handle_page_fault to write data frame into the backing store."}),"\n",(0,s.jsx)(n.h3,{id:"input",children:"Input"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BACKING_STORE_SIZE"})," (max pages in the backing store)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MEMORY_SIZE"})," (number of frames in memory)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PAGE_SIZE"})," (integers per page)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NUM_PROCESSES"})," (number of processes)"]}),"\n",(0,s.jsx)(n.li,{children:"For each process, a filename containing its list of integers."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Given a file ",(0,s.jsx)(n.code,{children:"test1.txt"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"0 1 2 3 4 5 6 7 8 9\n"})}),"\n",(0,s.jsx)(n.p,{children:"Compile and run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gcc -o program main.c process.c backing_store.c memory.c\n./program\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will see an output similar to the provided image after you finish the problem."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img.png",src:i(6633).A+"",width:"554",height:"240"})}),"\n",(0,s.jsx)(n.p,{children:"To run tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gcc -o test memory.c process.c backing_store.c test.c\n./test\n"})}),"\n",(0,s.jsx)(n.h2,{id:"skeleton-explanation",children:"Skeleton explanation"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("i",{children:"How do we store the data?"})}),(0,s.jsx)(n.p,{children:"All the structures from the code:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",metastring:'title="config.h"',children:"// Page Table Entry\ntypedef struct {\n    int frame_number;\n    bool valid; \n    // For LRU, we might store a 'last_used' counter or timestamp here or separately.\n    unsigned long last_used;\n} page_table_entry;\n\n// Process Structure\ntypedef struct {\n    int process_id;\n    int *data;               // Array of integers read from file\n    int data_count;          // How many integers in this process\n    int pages_count;         // How many pages the process has\n    page_table_entry *page_table;\n} Process;\n\n// Backing Store Page\ntypedef struct {\n    int process_id;\n    int page_number;\n    int *page_data;   // array of integers of size page_size\n} BackingStorePage;\n\n// We'll need a reverse mapping: frame -> which process/page is currently held there\ntypedef struct {\n    int process_id;\n    int page_number;\n} FrameMap;\n\n"})}),(0,s.jsx)(n.p,{children:"Global data:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",metastring:'title="config.h"',children:'\n// Global configuration variables\nextern int BACKING_STORE_SIZE; // number of pages total in backing store (input by user)\nextern int MEMORY_SIZE;        // number of frames in physical memory (input by user)\nextern int PAGE_SIZE;          // number of integers per page (input by user)\nextern int NUM_PROCESSES;      // number of processes\n\n// Arrays / Global pointers\nextern Process *processes; \nextern BackingStorePage *backing_store; \nextern int **physical_memory;  // physical_memory[i] is an array of int[PAGE_SIZE] representing a frame\n\n// For LRU, we will have a global counter to track "time" or accesses\nextern unsigned long global_time_counter;\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("i",{children:"How do we create a process?"})}),(0,s.jsxs)(n.p,{children:["The code is in the ",(0,s.jsx)(n.code,{children:"process.c"})]}),(0,s.jsx)(n.p,{children:"Pseudocode is like this:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"create an object process and assign an id to it"}),"\n",(0,s.jsx)(n.li,{children:"open the file"}),"\n",(0,s.jsx)(n.li,{children:"simulate a stl mechanism and add here the numbers. (allocate dynamically a fixed size and if it is full, reallocate double the current size)"}),"\n",(0,s.jsx)(n.li,{children:"calculate data_count, pages_count (make sure to calculate the internal fragmentation)"}),"\n",(0,s.jsxs)(n.li,{children:["allocate memory to page_table and initialize each value as followed:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"frame_number = -1"}),"\n",(0,s.jsx)(n.li,{children:"valid = false"}),"\n",(0,s.jsx)(n.li,{children:"last_used = 0 (useful for LRU, if a page has the smallest number, it is the least used)"}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("i",{children:"How do we create the backing store?"})}),(0,s.jsxs)(n.p,{children:["The code is in the ",(0,s.jsx)(n.code,{children:"backing_store.c"})]}),(0,s.jsx)(n.p,{children:"Pseudocode for create_backing_store() which is created one time after we know the page size and before get_value:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"see how many pages we need to satisfy the size of the processes and exit if we don't have enough space"}),"\n",(0,s.jsx)(n.li,{children:"allocate space for the backing store (using the struct BackingStorePage)"}),"\n",(0,s.jsxs)(n.li,{children:["Get each process and put them into the backing store:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"be careful with (the copy of the *data into the page_data. You can use the base + limit technique from chapter 9)"}),"\n",(0,s.jsx)(n.li,{children:"be careful with the internal fragmentation (allocate as 0)"}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:"Pseudocode for load_page_from_backing_store which is used to load from backing store to the main memory:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"get the page number and process_id (because we have some metadata in the backing store)"}),"\n",(0,s.jsx)(n.li,{children:"find the page with those numbers"}),"\n",(0,s.jsx)(n.li,{children:"copy to the frame"}),"\n",(0,s.jsx)(n.li,{children:"Make sure to check if it is not found a page."}),"\n"]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("i",{children:"How do we create the main memory and how do we get the frame number?"})}),(0,s.jsxs)(n.p,{children:["The code is in the ",(0,s.jsx)(n.code,{children:"memory.c"})]}),(0,s.jsx)(n.p,{children:"Pseudocode for init_physical_memory() appellation after creating the backing store:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"allocate memory (MEMORY_size of pointers)"}),"\n",(0,s.jsx)(n.li,{children:"allocate for each block (PAGE_SIZE of integers)"}),"\n",(0,s.jsx)(n.li,{children:"create the frame map (we need to know what process and page_number are in each frame)"}),"\n"]}),(0,s.jsx)(n.p,{children:"Pseudocode for get_frame_for_page() which returns the frame number where it is located:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"find the process with that id (any search algorithm)"}),"\n",(0,s.jsx)(n.li,{children:"get the page table"}),"\n",(0,s.jsx)(n.li,{children:"Important to update the appearance for LRU detection"}),"\n",(0,s.jsx)(n.li,{children:"return the frame number for which corresponds to the page (if it is valid)"}),"\n",(0,s.jsx)(n.li,{children:"if it is not valid, the data is not in memory, and we return -1, which causes a page fault."}),"\n"]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("i",{children:"How do we select the frame that should be deleted with the LRU algorithm?"})}),(0,s.jsxs)(n.p,{children:["The code is in the ",(0,s.jsx)(n.code,{children:"memory.c"})]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Idea for select_victim_frame():"}),(0,s.jsx)(n.br,{}),"\n","We have a global value: global_time_counter. Each time we add a new frame to the main memory ",(0,s.jsx)(n.code,{children:"OR"}),"\nwe access a frame from the memory we add +1 to this variable,\nthus the frame with the smallest number is the least used one."]})]}),"\n",(0,s.jsx)(n.h2,{id:"tips-for-the-functions",children:"Tips for the functions"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("i",{children:"\ud83d\udca1 handle_page_fault"})}),(0,s.jsx)(n.p,{children:"When a page is not in the main memory, the handle_page_fault should be triggered in the get_value. Remember that\nwe can see if a page is not in a frame with get_frame_for_page() == -1."}),(0,s.jsx)(n.p,{children:"This function should:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["find a free frame","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["if it is not found ",(0,s.jsx)(n.code,{children:"select a victim frame"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"see what process and page is in that frame"}),"\n",(0,s.jsx)(n.li,{children:"change the page_table of that process (the valid number and the frame number)"}),"\n",(0,s.jsx)(n.li,{children:"now you have a free frame"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Now load from the backing store the page itself"}),"\n",(0,s.jsx)(n.li,{children:"Update in the end the page table of the process and the frame map."}),"\n"]}),(0,s.jsxs)(n.p,{children:["As a visual representation, look at the following image:\n",(0,s.jsx)(n.img,{alt:"img_2.png",src:i(2450).A+"",width:"702",height:"620"})]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("i",{children:"\ud83d\udca1 get_value"})}),(0,s.jsx)(n.p,{children:"In the end, the function should return the value requested by the user (the value from an index)"}),(0,s.jsx)(n.p,{children:"The function should:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"calculate the page number and offset."}),"\n",(0,s.jsx)(n.li,{children:"Find the process"}),"\n",(0,s.jsx)(n.li,{children:"Verify if the process exists (use: exit(2);)"}),"\n",(0,s.jsx)(n.li,{children:"Verify if the user wants to access a value out of its range (use: exit(3);)"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"get the frame number from process page table"})," (you have a function for this)"]}),"\n",(0,s.jsx)(n.li,{children:"Make sure to verify if there is a page fault"}),"\n",(0,s.jsx)(n.li,{children:"return directly from the memory value (physical_memory[frame][offset])"}),"\n"]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("i",{children:"\ud83d\udca1 update LRU"})}),(0,s.jsx)(n.p,{children:"Find where the function is needed."}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Idea:"})," add +1 to the global_time_counter to the page from the process given."]})]}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("i",{children:"Check only, don't cheat \ud83d\ude20"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'\nvoid handle_page_fault(int process_id, int page_number) {\n    // Need to find a free frame or evict a victim\n    int frame = find_free_frame();\n    if(frame == -1) {\n        // No free frame, select victim\n        frame = select_victim_frame();\n        // Evict victim\n        int vic_proc = frame_map[frame].process_id;\n        int vic_page = frame_map[frame].page_number;\n        // Mark that page table entry as invalid\n        // Find that process\n        Process *vproc = NULL;\n        for(int i=0; i<NUM_PROCESSES; i++){\n            if(processes[i].process_id == vic_proc) {\n                vproc = &processes[i];\n                break;\n            }\n        }\n        vproc->page_table[vic_page].valid = false;\n        vproc->page_table[vic_page].frame_number = -1;\n    }\n\n    // Load the requested page into this frame\n    load_page_from_backing_store(process_id, page_number, physical_memory[frame]);\n    // Update page table entry\n    Process *p = NULL;\n    for(int i=0; i<NUM_PROCESSES; i++){\n        if(processes[i].process_id == process_id) {\n            p = &processes[i];\n            break;\n        }\n    }\n    p->page_table[page_number].valid = true;\n    p->page_table[page_number].frame_number = frame;\n    p->page_table[page_number].last_used = ++global_time_counter;\n\n    // Update frame map\n    frame_occupied[frame] = true;\n    frame_map[frame].process_id = process_id;\n    frame_map[frame].page_number = page_number;\n}\n\nint get_value(int process_id, int logical_index) {\n    // Determine which page and offset\n    int page_number = logical_index / PAGE_SIZE;\n    int offset = logical_index % PAGE_SIZE;\n\n    // Ensure page_number < process_pages_count\n    Process *p = NULL;\n    for(int i=0; i<NUM_PROCESSES; i++){\n        if(processes[i].process_id == process_id) {\n            p = &processes[i];\n            break;\n        }\n    }\n    if(!p) {\n        fprintf(stderr,"Process %d not found\\n", process_id);\n        exit(2);\n    }\n\n    if(page_number >= p->pages_count) {\n        fprintf(stderr,"Access out of range (process %d, index %d)\\n", process_id, logical_index);\n        exit(3);\n    }\n\n    int frame = get_frame_for_page(process_id, page_number);\n    if(frame == -1) {\n        // Page fault\n        handle_page_fault(process_id, page_number);\n        frame = p->page_table[page_number].frame_number;\n    }\n\n    return physical_memory[frame][offset];\n}\n\nvoid update_lru(int process_id, int page_number) {\n  //  Just update the last_used to current global_time_counter\n    Process *p = NULL;\n    for(int i=0; i<NUM_PROCESSES; i++){\n        if(processes[i].process_id == process_id) {\n            p = &processes[i];\n            break;\n        }\n    }\n    p->page_table[page_number].last_used = ++global_time_counter;\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"what-we-learned",children:"What we learned:"}),"\n",(0,s.jsxs)(n.p,{children:["We learned how the pagination works, and how we can manage a process that has more pages than frames available in RAM.\nMoreover, a concept seen in the code is ",(0,s.jsx)(n.code,{children:"Thrashing"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Look at the get_value function and observe that if we don't have\nthe page in the memory, there is a page_fault. If every value we call with get_value is on a different page, we will do a\npage fault every time, thus handle_page_fault() will be called when we want a value from memory, which is costly."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},362:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/files/page_problem-75433ce3e801bce51e68014408bdfafc.zip"},6633:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img-f527cbcd3ce86e82e2b57c488c2dd455.png"},2450:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img_2-196be67f3285f7470c570220914e4105.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);