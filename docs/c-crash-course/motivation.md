---
sidebar_position: 1
---

# Motivation

This is the first chapter in the **operating systems** odyssey!

Since C is a vital part of OS development, we aim to provide you with a quick way to learn or review it.

> 'But why C? Isn't it, like...ancient? There are many cooler programming languages out there, like Rust 🦀!'

That's a valid point, but the story goes deeper than you think.

C is by far the easiest language (other than assembly) to "get going" on bare-bones hardware.

The UNIX, Windows and OSX kernels are fully written in C. The operating system of your cellphone, smartwatch or handheld all build on top of C. A huge amount of languages such as Java (JVM), Python, Ruby and PHP are first and foremost implemented in C.

One of the main features of C is its simplicity. Compared to C++ (which is arguably a superset of C) or to other higher level languages:

1. C’s syntax footprint is small: no private/protected/class/interface/inheritance/bool/string… No “standard” libraries.
2. C does NOT have exceptions! It works with interrupts and error codes (return 0).
3. C does NOT have garbage collection: you manage the memory yourself.
4. C does NOT have a virtual machine (JVM, CLR) but gets compiled to native machine code.
5. C code usually is full of pointer variables to manipulate memory directly.
6. C allows for combination-integer-types (unsigned short int)
7. C works with headers (.h) and source (.c) files. An executable file requires two steps: compiling and linking. Linking allows for [mixing with assembly](https://www.devdungeon.com/content/how-mix-c-and-assembly) (as seen in the Computer Architecture class).

Leaving the technicalities aside, C's legacy isn’t something you can easily overthrow.

Linus Torvalds, creator of the Linux operating system and maintainer of the Linux kernel, along with other developers, has resisted the introduction of other programming languages into the kernel over the years. 

Although the [arguments given back then](https://lore.kernel.org/all/alpine.LFD.0.999.0709061839510.5626@evo.linux-foundation.org/) may no longer be as relevant (since programming languages have evolved, especially C++), it shows how much bias can impact a project.

However, a huge leap for change have been made with the introduction of [Rust for Linux](https://github.com/Rust-for-Linux/linux), only for it to backfire at a [recent conference](https://youtu.be/WiPp9YEBV0Q?feature=shared&t=365) (showing the ongoing conservatism of the developer community).

If you want to document more on the situation, check out [this](https://youtu.be/0bb3-bjgf88?feature=shared), [this](https://youtu.be/YyRVOGxRKLg?feature=shared) and [this](https://drewdevault.com/2024/08/30/2024-08-30-Rust-in-Linux-revisited.html).

All in all, C is here to stay and is essential if you want to dig deeper in the world of operating systems and everything embedded.

### References
- [Torvalds - "Nothing better than C"](https://x.com/nixcraft/status/1371787200455528450)
- [Why is C used for writing drivers and OS codes?](https://stackoverflow.com/questions/984866/why-is-c-used-for-writing-drivers-and-os-codes)
- [KU Leuven - Introduction to C](https://kuleuven-diepenbeek.github.io/osc-course/ch2-c/)