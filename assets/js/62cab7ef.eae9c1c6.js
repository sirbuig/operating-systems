"use strict";(self.webpackChunkoperating_systems=self.webpackChunkoperating_systems||[]).push([[607],{3224:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var s=i(4848),t=i(8453);const r={sidebar_position:1},o="Meet the penguin \ud83d\udc27",a={id:"Weeks 1-2/linux-basics/introduction",title:"Meet the penguin \ud83d\udc27",description:"In this course, you'll be required to use Linux as your operating system (which you may have already heard of), either by installing it on your computer or on a virtual machine.",source:"@site/docs/Weeks 1-2/linux-basics/introduction.mdx",sourceDirName:"Weeks 1-2/linux-basics",slug:"/Weeks 1-2/linux-basics/introduction",permalink:"/operating-systems/Weeks 1-2/linux-basics/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/sirbuig/operating-systems/tree/main/docs/Weeks 1-2/linux-basics/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Linux Basics",permalink:"/operating-systems/category/linux-basics"},next:{title:"Kickstart Your Linux Journey",permalink:"/operating-systems/Weeks 1-2/linux-basics/tutorial"}},l={},h=[{value:"What is Linux?",id:"what-is-linux",level:2},{value:"Key events in the history of Linux",id:"key-events-in-the-history-of-linux",level:2},{value:"&quot;...just a hobby...&quot;",id:"just-a-hobby",level:2},{value:"Linux kernel",id:"linux-kernel",level:2},{value:"What is a <code>distro</code>?",id:"what-is-a-distro",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"If I catched your interest...",id:"if-i-catched-your-interest",level:2},{value:"Just for LOLs",id:"just-for-lols",level:2},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"meet-the-penguin-",children:"Meet the penguin \ud83d\udc27"})}),"\n",(0,s.jsx)(n.p,{children:"In this course, you'll be required to use Linux as your operating system (which you may have already heard of), either by installing it on your computer or on a virtual machine."}),"\n",(0,s.jsx)(n.h2,{id:"what-is-linux",children:"What is Linux?"}),"\n",(0,s.jsx)(n.p,{children:"Just like Windows or MacOS, Linux is an operating system (technically, it's a family of operating systems, as you'll see shortly)."}),"\n",(0,s.jsxs)(n.p,{children:["In fact, it's one of the most popular platforms on the planet: Android is based on a modified version of the Linux kernel (we'll see what the ",(0,s.jsx)(n.code,{children:"kernel"})," is later) and many other products and companies run on Linux: Google, NASA, ",(0,s.jsx)(n.a,{href:"https://linux.web.cern.ch/",children:"CERN"}),", ",(0,s.jsx)(n.a,{href:"https://www.extremetech.com/extreme/155392-international-space-station-switches-from-windows-to-linux-for-improved-reliability",children:"ISS"})," etc."]}),"\n",(0,s.jsxs)(n.p,{children:["From ",(0,s.jsx)(n.a,{href:"https://www.stackscale.com/blog/most-powerful-supercomputers-linux/",children:"supercomputers"})," to ",(0,s.jsx)(n.a,{href:"https://bioinformatics.ccr.cancer.gov/btep/why-should-biologists-learn-unix-for-bioinformatics/",children:"bioinformatics"})," and ",(0,s.jsx)(n.a,{href:"https://www.logicmonitor.com/blog/9-reasons-linux-is-a-popular-choice-for-servers",children:"web servers"}),", they all rely on Linux."]}),"\n",(0,s.jsx)(n.h2,{id:"key-events-in-the-history-of-linux",children:"Key events in the history of Linux"}),"\n",(0,s.jsx)(n.p,{children:"These are the events that precedeed the development of Linux:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1969"}),": Ken Thompson and Dennis Ritchie develop ",(0,s.jsx)(n.a,{href:"https://www.wikiwand.com/en/articles/Unix",children:(0,s.jsx)(n.strong,{children:"Unix"})})," at ",(0,s.jsx)(n.strong,{children:"AT&T"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1970"}),": Unix is released. Thompson and Ritchie later rewrote it in C for portability, which led to Unix being copied and modified by academic institutions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1977"}),": ",(0,s.jsx)(n.strong,{children:"Berkeley Software Distribution (BSD)"})," is developed based on the 6th edition of Unix. Because it contains Unix code owned by AT&T,",(0,s.jsx)(n.a,{href:"https://www.wikiwand.com/en/articles/UNIX_System_Laboratories,_Inc._v._Berkeley_Software_Design,_Inc.",children:" AT&T files a lawsuit"})," hindering the development and adoption of BSD."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1983"}),": Richard Stallman starts the ",(0,s.jsx)(n.strong,{children:"GNU Project"})," with the goal of creating a free UNIX-like operating system. He also writes the ",(0,s.jsx)(n.a,{href:"https://www.wikiwand.com/en/articles/GNU_General_Public_License",children:(0,s.jsx)(n.strong,{children:"GNU General Public License"})})," or ",(0,s.jsx)(n.strong,{children:"GPL"}),". ",(0,s.jsx)(n.a,{href:"https://www.gnu.org/software/hurd/",children:"Hurd"}),", the GNU kernel, didn't attract enough development effort, leaving GNU incomplete."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1985"}),": Intel releases the ",(0,s.jsx)(n.a,{href:"https://www.wikiwand.com/en/articles/80386",children:(0,s.jsx)(n.strong,{children:"80386"})}),", the first x86 microprocessor with a 32-bit instruction set and a memory management unit with paging."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"1987"}),": Andrew S. Tanenbaum released ",(0,s.jsx)(n.strong,{children:"MINIX"}),", a Unix-like system intended for academic use. The source code for the system was available, but modification and redistribution were restricted. In addition, MINIX used a 16-bit design, which wasn't well adapted for the 32-bit Intel 386 architecture, a cheap and popular choice for personal computers."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TLDR"}),", at that time UNIX was a proprietary operating system and expensive for private use and the free open-source UNIX-like alternatives weren't mainstream enough."]}),"\n",(0,s.jsx)(n.h2,{id:"just-a-hobby",children:'"...just a hobby..."'}),"\n",(0,s.jsxs)(n.p,{children:["In 1991, ",(0,s.jsx)(n.a,{href:"https://www.wikiwand.com/en/articles/Linus_Torvalds",children:"Linus Torvalds"})," was a 21-year-old Computer Science student at the University of Helsinki."]}),"\n",(0,s.jsx)(n.p,{children:"Frustrated with the existing operating systems of the time (Microsoft's MS-DOS and Apple's Mac OS - both closed source) and influenced by Minix (altough limited and just for academic purposes), he wanted something tailored for the Intel 80386 processor."}),"\n",(0,s.jsx)(n.p,{children:"As a result, he began developing his own free Unix-like kernel using the GNU tools and utilities."}),"\n",(0,s.jsxs)(n.p,{children:["In august on the same year, ",(0,s.jsx)(n.a,{href:"https://www.cs.cmu.edu/~awb/linux.history.html",children:"Linus announced his project"})," on the Minix newsgroup:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\"I'm doing a (free) operating system (just a hobby, won't be big and\nprofessional like gnu) for 386(486) AT clones.\""}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"What made Linux unique was the decision to release it under the GNU General Public License (GPL) in 1992. This meant that Linux was free to use, modify, and distribute, similar to the software being developed under the GNU Project. This licensing decision attracted developers and contributors from around the world, as they were able to participate in improving and expanding the kernel without legal restrictions."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'"Making Linux GPLed was definitely the best thing I ever did."'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"linux-kernel",children:"Linux kernel"}),"\n",(0,s.jsx)(n.p,{children:"Torvalds is still the maintainer of the Linux Kernel Repository and retains the highest authority to decide which new code is incorporated."}),"\n",(0,s.jsxs)(n.p,{children:["You can find the Linux kernel source tree on GitHub: ",(0,s.jsx)(n.a,{href:"https://github.com/torvalds/linux",children:"https://github.com/torvalds/linux"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Fun fact:"})," Torvalds is also the creator of ",(0,s.jsx)(n.a,{href:"https://git-scm.com/book/ms/v2/Getting-Started-A-Short-History-of-Git",children:"Git"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"what-is-a-distro",children:["What is a ",(0,s.jsx)(n.code,{children:"distro"}),"?"]}),"\n",(0,s.jsx)(n.p,{children:"As it was mentioned earlier, Linux is in fact a family of open-source Unix-like operating systems based on the Linux kernel."}),"\n",(0,s.jsx)(n.p,{children:'A Linux distribution (often shortened to "distro" and also called "flavor") is a complete, ready-to-use operating system built around the Linux kernel, combined with additional software and libraries. It typically includes:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"The Linux kernel"}),": The core part of the operating system that manages hardware, memory, and processes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GNU tools and libraries"}),": Essential programs like the shell, compilers, and file utilities, often provided by the GNU Project."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Package management system"}),": A system to install, update, and manage software packages (e.g., APT, YUM, or Pacman)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Graphical User Interface (GUI)"}),": Most distros include a desktop environment for a graphical interface (e.g., GNOME, KDE, XFCE)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Applications"}),": Standard applications like web browsers, office suites, text editors, and media players."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The choice of components (kernel version, desktop environment, package management, etc.) varies between different distributions, which is why there are so many different flavors of Linux."}),"\n",(0,s.jsx)(n.p,{children:"Linux distros are classified by the package manager they use, the standard software they ship with, and the distribution from which they have forked."}),"\n",(0,s.jsx)(n.p,{children:"For example one of the most popular distros, Ubuntu, is a Debian-based system because it uses the Debian installation files and it is a branch off of Debian Linux."}),"\n",(0,s.jsx)(n.p,{children:"In order to comprehend the amount of distros developed, this is just a snapshot of the vast and constantly evolving Debian Family Tree:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Debian Family Tree",src:i(7757).A+"",width:"1920",height:"2987"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Over the decades, Linux has become a symbol of the open-source movement, encouraging collaboration, transparency, and free distribution of software."}),"\n",(0,s.jsx)(n.p,{children:"What started as Linus Torvalds' hobby project is now a cornerstone of modern computing and if that isn't inspiring enough, then I don't know what is."}),"\n",(0,s.jsx)(n.p,{children:"Hopefully, this introduction sparked your interest in the open-source spirit and now you're ready to dive in the Linux commands!"}),"\n",(0,s.jsx)(n.h2,{id:"if-i-catched-your-interest",children:"If I catched your interest..."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://distrochooser.de/",children:"Distrochooser"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.wikiwand.com/en/articles/GNU/Linux_naming_controversy",children:"GNU/Linux Naming Controversy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.gnu.org/gnu/linux-and-gnu.html",children:"Richard Stallman's take on the naming controversy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.reddit.com/r/unixporn/",children:"Linux distros are very customizable"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linuxfromscratch.org/lfs/",children:"Build your own Linux"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://youtu.be/o8NPllzkFhE?feature=shared",children:"The mind behind Linux"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://youtu.be/E0Q9KnYSVLc?feature=shared",children:"The Making of Linux: The World's First Open-Source Operating System"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://youtu.be/sQDvkd2wtxU?feature=shared",children:"The Making of GNU: The World's First Open-Source Software"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"just-for-lols",children:"Just for LOLs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://youtu.be/OF_5EKNX0Eg?feature=shared",children:"Legendary NVIDIA moment"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/corollari/linusrants",children:"Linus is known for being savage in his emails"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://hannahmontana.sourceforge.net/index.html",children:"Hannah Montana Linux"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.landley.net/history/mirror/linux/tux.html",children:"Tux the penguin"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://opensource.com/article/19/8/everyday-tech-runs-linux",children:"Ways you use Linux everyday"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linux.com/what-is-linux/",children:"What is Linux"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linux.org/threads/about-the-distros.9112/",children:"About the Distros"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/book/ms/v2/Getting-Started-A-Short-History-of-Git",children:"A short history of Git"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.wikiwand.com/en/articles/History_of_Linux",children:"Wikipedia - History of Linux"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.wikiwand.com/en/articles/Unix",children:"Wikipedia - Unix"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.wikiwand.com/en/articles/Linux",children:"Wikipedia - Linux"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.wikiwand.com/en/articles/Linux_distribution",children:"Wikipedia - Linux distros"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7757:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/DebianFamilyTree-f54b508dbe178a1f9b7e85be2d64c452.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);