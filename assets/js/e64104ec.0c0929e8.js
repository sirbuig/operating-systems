"use strict";(self.webpackChunkoperating_systems=self.webpackChunkoperating_systems||[]).push([[915],{1846:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(4848),r=n(8453);const i={sidebar_position:2},t="Kickstart Your Linux Journey",l={id:"Weeks 1-2/linux-basics/tutorial",title:"Kickstart Your Linux Journey",description:"Until now you've probably mainly experienced the GUI world - point, click, drag, and drop. You've clicked buttons and moved windows around like a pro!",source:"@site/docs/Weeks 1-2/linux-basics/tutorial.mdx",sourceDirName:"Weeks 1-2/linux-basics",slug:"/Weeks 1-2/linux-basics/tutorial",permalink:"/operating-systems/Weeks 1-2/linux-basics/tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/sirbuig/operating-systems/tree/main/docs/Weeks 1-2/linux-basics/tutorial.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Meet the penguin \ud83d\udc27",permalink:"/operating-systems/Weeks 1-2/linux-basics/introduction"},next:{title:"Week 03",permalink:"/operating-systems/category/week-03"}},d={},c=[{value:"CLI Spells",id:"cli-spells",level:2},{value:"Goodbye Mouse, Hello Keyboard",id:"goodbye-mouse-hello-keyboard",level:3},{value:"The Prompt",id:"the-prompt",level:3},{value:"Where am I?",id:"where-am-i",level:3},{value:"Preview the contents of a folder",id:"preview-the-contents-of-a-folder",level:3},{value:"Use your creator powers",id:"use-your-creator-powers",level:3},{value:"This <code>man</code> has all the info you need",id:"this-man-has-all-the-info-you-need",level:3},{value:"<code>Root</code> is the most important",id:"root-is-the-most-important",level:2},{value:"Shell operators",id:"shell-operators",level:2},{value:"Redirection operator <code>&gt;</code>",id:"redirection-operator-",level:3},{value:"Pipe <code>|</code>",id:"pipe-",level:3},{value:"Logical AND <code>&amp;&amp;</code>",id:"logical-and-",level:3},{value:"More Terminal Tricks",id:"more-terminal-tricks",level:2},{value:"Further Reading",id:"further-reading",level:2},{value:"References",id:"references",level:2}];function a(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"kickstart-your-linux-journey",children:"Kickstart Your Linux Journey"})}),"\n",(0,s.jsxs)(o.p,{children:["Until now you've probably mainly experienced the GUI world - ",(0,s.jsx)(o.code,{children:"point, click, drag, and drop"}),". You've clicked buttons and moved windows around like a pro!\nBut things are going to change now. You're going to learn how to use the terminal and here's why it's great."]}),"\n",(0,s.jsx)(o.h2,{id:"cli-spells",children:"CLI Spells"}),"\n",(0,s.jsx)(o.h3,{id:"goodbye-mouse-hello-keyboard",children:"Goodbye Mouse, Hello Keyboard"}),"\n",(0,s.jsx)(o.p,{children:"The reasons you would want to shift your focus to your keyboard shortcuts as well are:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["You'll look cool, like in ",(0,s.jsx)(o.a,{href:"https://youtu.be/PGjLhOhMLXc?si=f2wppas_IsXQghgq",children:"Mr. Robot"})]}),"\n",(0,s.jsx)(o.li,{children:"You can automate a whole bunch of processes"}),"\n",(0,s.jsx)(o.li,{children:"The more you practice, the faster and more natural it gets"}),"\n",(0,s.jsx)(o.li,{children:"You won't always have access to GUI, and you need to know how to talk with the system without it"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["The first and most important shortcut you're going to learn is ",(0,s.jsx)(o.code,{children:"Ctrl + Alt + t"}),". As you can see, a misterious dark box is now on your screen."]}),"\n",(0,s.jsxs)(o.p,{children:["This is called a ",(0,s.jsx)(o.strong,{children:"terminal"})," and is there to help us communicate with the operating system via text. The communication is based on ",(0,s.jsx)(o.strong,{children:"commands"}),", hence the terminal's actual name: ",(0,s.jsx)(o.strong,{children:"Command-Line Interface (CLI)"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Some other quick shortcuts you can try on the spot:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Ctrl + d"}),": close the current window"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Ctrl + Shift + c"}),": copy text from the terminal"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Ctrl + Shift + v"}),": paste text to the terminal"]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"the-prompt",children:"The Prompt"}),"\n",(0,s.jsxs)(o.p,{children:["Every terminal has a ",(0,s.jsx)(o.strong,{children:"prompt"})," that lets us know about the directory we're in, who the user and hostname are and if it's ready to execute a command."]}),"\n",(0,s.jsx)(o.p,{children:"This is generally the format of the prompt with very little variation:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"user@hostname:~$ cd Documents/\nuser@hostname:~/Documents$\n"})}),"\n",(0,s.jsx)(o.p,{children:"More generally:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"[USERNAME]@[HOSTNAME]:[PATH][SYMBOL]\n"})}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"User? Hostname? Symbol? What are you talking about?"}),"\n"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"[USERNAME]"})," is the username of the current user. That's usually you, except when you run ",(0,s.jsx)(o.code,{children:"sudo su"})," to access the ",(0,s.jsx)(o.code,{children:"root"})," user."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"[HOSTNAME]"})," is your computer's name, which you set during system installation."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"[PATH]"})," is your current working directory. Every time you open a new terminal, the default directory is your home directory. ",(0,s.jsx)(o.code,{children:"~"})," is shorthand for ",(0,s.jsx)(o.code,{children:"/home/YOURUSERNAME"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"[SYMBOL]"})," is ",(0,s.jsx)(o.code,{children:"$"})," for a normal user and ",(0,s.jsx)(o.code,{children:"#"})," for ",(0,s.jsx)(o.code,{children:"root"}),". This symbol can be customized."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"You can verify all of the above by typing these commands in the terminal:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"whoami"})," to check the username"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"hostname"})," to check the hostname"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"pwd"})," to print the working directory"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~$ whoami\nsirbu\nsirbu@pop-os:~$ sudo su\n[sudo] password for sirbu:\nroot@pop-os:/home/sirbu# whoami\nroot\nroot@pop-os:/home/sirbu# exit\nexit\nsirbu@pop-os:~$ hostname\npop-os\nsirbu@pop-os:~$ pwd\n/home/sirbu\nsirbu@pop-os:~$\n"})}),"\n",(0,s.jsx)(o.h3,{id:"where-am-i",children:"Where am I?"}),"\n",(0,s.jsx)(o.p,{children:"You may feel confused about directories and navigating through files in your system, but don't worry\u2014everything is under control."}),"\n",(0,s.jsxs)(o.p,{children:["We need to know where we are in the ",(0,s.jsx)(o.strong,{children:"file hierarchy"}),", also called the ",(0,s.jsx)(o.strong,{children:"file system"}),". If Windows uses ",(0,s.jsx)(o.code,{children:"\\"})," as a path separator, Linux uses ",(0,s.jsx)(o.code,{children:"/"}),", and ",(0,s.jsx)(o.code,{children:"/"})," also represents the root of the file system."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Linux File System",src:n(3299).A+"",width:"781",height:"1241"})}),"\n",(0,s.jsx)(o.p,{children:"As you can see, everything has its place in the system and is navigable, like a map."}),"\n",(0,s.jsxs)(o.p,{children:["Moving between folders is called ",(0,s.jsx)(o.strong,{children:"changing the directory"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Open a new terminal and try to see where you are. As mentioned earlier, the default path is ",(0,s.jsx)(o.code,{children:"~"})," or ",(0,s.jsx)(o.code,{children:"/home/username"}),". If you want to move somewhere else, use this command:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"$ cd /path/to/new/location\n"})}),"\n",(0,s.jsxs)(o.p,{children:["For example, to move to ",(0,s.jsx)(o.code,{children:"Documents"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~$ cd Documents/\nsirbu@pop-os:~/Documents$\n"})}),"\n",(0,s.jsx)(o.h3,{id:"preview-the-contents-of-a-folder",children:"Preview the contents of a folder"}),"\n",(0,s.jsxs)(o.p,{children:["You can list the contents of the current directory with the ",(0,s.jsx)(o.code,{children:"ls"})," command (short for list):"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~/Documents/FMI-UNIBUC$ ls\nan_2  an_3  README.md\nsirbu@pop-os:~/Documents/FMI-UNIBUC$\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Every command can take many parameters, including ",(0,s.jsx)(o.code,{children:"ls"}),'. If you give a path as a parameter, you can "preview" the files that are there without leaving your current directory!']}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:'sirbu@pop-os:/$ ls #contents of "/" aka root directory\nbin   dev  home  lib32  libx32      media  opt   recovery  run   srv  tmp  var\nboot  etc  lib   lib64  lost+found  mnt    proc  root      sbin  sys  usr\nsirbu@pop-os:/$ ls media/ #contents of media/\nroot  sirbu\n'})}),"\n",(0,s.jsxs)(o.admonition,{title:"TAB is your friend",type:"tip",children:[(0,s.jsxs)(o.p,{children:["Press ",(0,s.jsx)(o.code,{children:"TAB"})," as much as you can."]}),(0,s.jsx)(o.p,{children:"If you give enough context, your command will be autocompleted."}),(0,s.jsxs)(o.p,{children:["For example, while being in ",(0,s.jsx)(o.code,{children:"~"}),", try typing ",(0,s.jsx)(o.code,{children:"cd Doc"}),", press ",(0,s.jsx)(o.code,{children:"TAB"}),", and your command will become ",(0,s.jsx)(o.code,{children:"cd Documents/"})]}),(0,s.jsx)(o.p,{children:"If the context is not clear enough, you will see all the options in the terminal:"}),(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~$ cd D\nDesktop/   Documents/ Downloads/\n"})})]}),"\n",(0,s.jsxs)(o.p,{children:["To return to the previous folder or list its contents, use ",(0,s.jsx)(o.code,{children:".."}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:'sirbu@pop-os:~$ ls ../ # contents of the parent directory\nsirbu\nsirbu@pop-os:~$ ls ../../ # contents of the "root" folder, two levels up\nbin   dev  home  lib32  libx32      media  opt   recovery  run   srv  tmp  var\nboot  etc  lib   lib64  lost+found  mnt    proc  root      sbin  sys  usr\nsirbu@pop-os:~$ cd ../../ # now we\'ll be in the "root" folder!\nsirbu@pop-os:/$ pwd\n/\nsirbu@pop-os:/$\n'})}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["The more you chain ",(0,s.jsx)(o.code,{children:"../.."}),", the higher you traverse the file structure."]})}),"\n",(0,s.jsx)(o.h3,{id:"use-your-creator-powers",children:"Use your creator powers"}),"\n",(0,s.jsxs)(o.p,{children:["You can create a directory with ",(0,s.jsx)(o.code,{children:"mkdir"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~/demo$ mkdir dummy-folder\nsirbu@pop-os:~/demo$ ls\ndummy-folder\nsirbu@pop-os:~/demo$ cd dummy-folder/\nsirbu@pop-os:~/demo/dummy-folder$\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Let's ",(0,s.jsx)(o.strong,{children:"create"})," files inside our newly made folder with ",(0,s.jsx)(o.code,{children:"touch"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~/demo/dummy-folder$ touch demo-file1\nsirbu@pop-os:~/demo/dummy-folder$ touch demo-file2\nsirbu@pop-os:~/demo/dummy-folder$ ls\ndemo-file1  demo-file2\n"})}),"\n",(0,s.jsx)(o.p,{children:"Our files are kinda empty, so let's add some text:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~/demo/dummy-folder$ cat demo-file1 # output the contents of the file\nsirbu@pop-os:~/demo/dummy-folder$ nano demo-file1 # a simple command-line text editor\nsirbu@pop-os:~/demo/dummy-folder$ cat demo-file1\nWrite anything you want, it doesn't really matter.\nsirbu@pop-os:~/demo/dummy-folder$\n"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Move"})," stuff around with ",(0,s.jsx)(o.code,{children:"mv"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~/demo/dummy-folder$ ls\ndemo-file1  demo-file2  folder2\nsirbu@pop-os:~/demo/dummy-folder$ mv demo-file1 folder2/\nsirbu@pop-os:~/demo/dummy-folder$ ls\ndemo-file2  folder2\nsirbu@pop-os:~/demo/dummy-folder$ ls folder2/\ndemo-file1\nsirbu@pop-os:~/demo/dummy-folder$\n"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Copy"})," files with ",(0,s.jsx)(o.code,{children:"cp"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~/demo/dummy-folder$ cp demo-file2 folder2/\nsirbu@pop-os:~/demo/dummy-folder$ ls folder2/\ndemo-file1  demo-file2\nsirbu@pop-os:~/demo/dummy-folder$ ls\ndemo-file2  folder2\n"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Remove"})," with ",(0,s.jsx)(o.code,{children:"rm"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~/demo/dummy-folder$ rm demo-file2\nsirbu@pop-os:~/demo/dummy-folder$ ls\nfolder2\nsirbu@pop-os:~/demo/dummy-folder$ rmdir folder2/\nrm: cannot remove 'folder2/': Is a directory\n"})}),"\n",(0,s.jsxs)(o.p,{children:["If ",(0,s.jsx)(o.code,{children:"folder2"})," were empty, the command would have worked fine. Since it's not, we must pass ",(0,s.jsx)(o.code,{children:"-r"})," (for ",(0,s.jsx)(o.code,{children:"--recursive"}),") for it to work."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"$ rm -r folder2/ # in this case, rm works as well\n"})}),"\n",(0,s.jsxs)(o.h3,{id:"this-man-has-all-the-info-you-need",children:["This ",(0,s.jsx)(o.code,{children:"man"})," has all the info you need"]}),"\n",(0,s.jsxs)(o.p,{children:["Extensive documentation is available for almost every Linux command and can be accessed with ",(0,s.jsx)(o.code,{children:"man command"}),". Knowing how to read the ",(0,s.jsx)(o.code,{children:"manual"})," is essential."]}),"\n",(0,s.jsxs)(o.p,{children:["Let's try reading the page for ",(0,s.jsx)(o.code,{children:"cat"}),"."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"$ man cat\n"})}),"\n",(0,s.jsx)(o.p,{children:"Use:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"\u2191"})," and ",(0,s.jsx)(o.code,{children:"\u2193"})," to scroll"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Space"})," to scroll one page down"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"/<string>"})," for quick search"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"q"})," to quit."]}),"\n"]}),"\n",(0,s.jsxs)(o.h2,{id:"root-is-the-most-important",children:[(0,s.jsx)(o.code,{children:"Root"})," is the most important"]}),"\n",(0,s.jsx)(o.p,{children:"Linux systems have multiple levels of privilege, and your actions are limited by your privilege level."}),"\n",(0,s.jsxs)(o.p,{children:["Similar to the ",(0,s.jsx)(o.code,{children:"Administrator"})," role in Windows, ",(0,s.jsx)(o.code,{children:"root"})," is the boss and is required whenever you need to make decisions that could affect the system."]}),"\n",(0,s.jsx)(o.admonition,{type:"danger",children:(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"root"})," role must be used with caution! You can damage your system irreversibly if you don't know what you're doing."]})}),"\n",(0,s.jsx)(o.h2,{id:"shell-operators",children:"Shell operators"}),"\n",(0,s.jsxs)(o.h3,{id:"redirection-operator-",children:["Redirection operator ",(0,s.jsx)(o.code,{children:">"})]}),"\n",(0,s.jsx)(o.p,{children:"This is used to redirect the output of a command to a file. If the file exists, it will be overwritten."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:'sirbu@pop-os:~/demo$ cat demo-file\nThis is the original text!\nsirbu@pop-os:~/demo$ echo "Some text" # write text to the terminal window\nSome text\nsirbu@pop-os:~/demo$ echo "Some text" > demo-file\nsirbu@pop-os:~/demo$ cat demo-file\nSome text\nsirbu@pop-os:~/demo$\n'})}),"\n",(0,s.jsxs)(o.h3,{id:"pipe-",children:["Pipe ",(0,s.jsx)(o.code,{children:"|"})]}),"\n",(0,s.jsx)(o.p,{children:"This operator takes the output of one command and passes it as input to another command. It's used for chaining commands together."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:'sirbu@pop-os:~/demo$ ls | grep "folder"\ndummy-folder\nsirbu@pop-os:~/demo$ ls\ndemo-file  dummy-folder\nsirbu@pop-os:~/demo$\n'})}),"\n",(0,s.jsxs)(o.h3,{id:"logical-and-",children:["Logical AND ",(0,s.jsx)(o.code,{children:"&&"})]}),"\n",(0,s.jsx)(o.p,{children:"This operator is used to execute the second command only if the first command succeeds (returns exit code 0)."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-console",children:"sirbu@pop-os:~/demo$ mkdir test-and && cd test-and\nsirbu@pop-os:~/demo/test-and$\n"})}),"\n",(0,s.jsx)(o.h2,{id:"more-terminal-tricks",children:"More Terminal Tricks"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["use ",(0,s.jsx)(o.code,{children:"up arrow"})," and ",(0,s.jsx)(o.code,{children:"down arrow"})," to navigate between your commands"]}),"\n",(0,s.jsxs)(o.li,{children:["use ",(0,s.jsx)(o.code,{children:"sudo !!"})," to execute the last command with ",(0,s.jsx)(o.code,{children:"admin"})," rights"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(2860).A+"",width:"801",height:"436"})}),"\n",(0,s.jsx)(o.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://www.redhat.com/en/blog/linux-path-absolute-relative",children:"Absolute and relative paths"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://averagelinuxuser.com/linux-root-folders-explained/",children:"Root Folders explained"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://www.networkworld.com/article/2516127/linux-operators-using-and-many-more.html",children:"Linux operators"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://www.freecodecamp.org/news/linux-terminal-piping-and-redirection-guide/",children:"Piping and Redirection"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsxs)(o.a,{href:"https://youtu.be/vzFYVogxHZI?si=aNRNHL6Dftwy_VEY",children:["2-Minute Linux: ",(0,s.jsx)(o.code,{children:"&&"})," operator"]})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsxs)(o.a,{href:"https://hostman.com/tutorials/linux-cat-command/",children:[(0,s.jsx)(o.code,{children:"cat"})," command with operators in action"]})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://www.digitalocean.com/community/tutorials/linux-commands",children:"Top Linux commands you must know"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://www.redhat.com/en/blog/command-prompt-tell-me",children:"Command Prompt"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://security-summer-school.github.io/essentials-security/Scratch%20Linux/System%20Exploration/Reading/exploration-tools",children:"SSS Scratch Linux - Exploration tools"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://github.com/piuccio/cowsay",children:"cowsay"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://github.com/busyloop/lolcat",children:"lolcat"})}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://cs.unibuc.ro/~pirofti/so/so-lab-1.pdf",children:"OS-Lab1"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://security-summer-school.github.io/essentials-security/Scratch%20Linux/Welcome%20to%20Linux/Reading/working-with-linux",children:"SSS Scratch Linux - Working with Linux"})}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},3299:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/LinuxFileSystem-da8e61255657aedeb121977695135e5a.png"},2860:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/TuxLolcat-71bf110b8334df1e10b0be5dc47ab848.png"},8453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>l});var s=n(6540);const r={},i=s.createContext(r);function t(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);