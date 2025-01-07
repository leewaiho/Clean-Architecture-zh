# Chap5. OBJECT-ORIENTED PROGRAMMING 面向对象编程

![](./un/CH-UN05.jpg)

As we will see, the basis of a good architecture is the understanding and application of the principles of object-oriented design (OO). But just what is OO?

> 稍后我们会讲到，设计一个优秀的软件架构要基于对面向对象设计（Object-Oriented Design）的深入理解及应用。但我们首先得弄明白一个问题：究竟什么是面向对象？

One answer to this question is “The combination of data and function.” Although often cited, this is a very unsatisfying answer because it implies that o.f() is somehow different from f(o). This is absurd. Programmers were passing data structures into functions long before 1966, when Dahl and Nygaard moved the function call stack frame to the heap and invented OO.

> 对于这个问题，一种常见的回答是“数据与函数的组合”。这种说法虽然被广为引用，但总显得并不是那么贴切，因为它似乎暗示了 `o.f()` 与 `f(o)` 之间是有区别的，这显然不是事实。面向对象理论是在 1966 年提出的，当时 Dahl 和 Nygaard 主要是将函数调用栈迁移到了堆区域中。数据结构被用作函数的调用参数这件事情远比这发生的时间更早。

Another common answer to this question is “A way to model the real world.” This is an evasive answer at best. What does “modeling the real world” actually mean, and why is it something we would want to do? Perhaps this statement is intended to imply that OO makes software easier to understand because it has a closer relationship to the real world—but even that statement is evasive and too loosely defined. It does not tell us what OO is.

> 另一种常见的回答是“面向对象编程是一种对真实世界进行建模的方式”，这种回答只能算作避重就轻。“对真实世界的建模”到底要如何进行？我们为什么要这么做，有什么好处？也许这句话意味着是“由于采用面向对象方式构建的软件与真实世界的关系更紧密，所以面向对象编程可以使得软件开发更容易”——即使这样说，也仍然逃避了关键问题——面向对象编程究竟是什么?

Some folks fall back on three magic words to explain the nature of OO: encapsulation, inheritance, and polymorphism. The implication is that OO is the proper admixture of these three things, or at least that an OO language must support these three things.

> 还有些人在回答这个问题的时候，往往会搬出一些神秘的词语，譬如封装（encapsulation）、继承（inheritance）、多态（polymorphism）。其隐含意思就是说面向对象编程是这三项的有机组合，或者任何一种支持面向对象的编程语言必须支持这三个特性。

Let’s examine each of these concepts in turn.

> 那么，我们接下来可以逐个来分析一下这三个概念。

## ENCAPSULATION? 封装

The reason encapsulation is cited as part of the definition of OO is that OO languages provide easy and effective encapsulation of data and function. As a result, a line can be drawn around a cohesive set of data and functions. Outside of that line, the data is hidden and only some of the functions are known. We see this concept in action as the private data members and the public member functions of a class.

> 导致封装这个概念经常被引用为面向对象编程定义的一部分。通过釆用封装特性，我们可以把一组相关联的数据和函数圈起来，便圈外血的代码只能看见部分函数，数据则完全不可见。譬如在实际应用中，类（class）中的公共函数和私有成员变量就是这样。

This idea is certainly not unique to OO. Indeed, we had perfect encapsulation in C. Consider this simple C program:

> 然而，这个特性其实并不是面向对象编程所独有的。其实，c 语言也支持完整的封装，下面来看一个简单的 c 程序：

point.h

```c
struct Point;
struct Point* makePoint(double x, double y);
double distance (struct Point *p1, struct Point *p2);
```

point.c

```c
#include "point.h"
#include <stdlib.h>
#include <math.h>

struct Point {
  double x,y;
};

struct Point* makepoint(double x, double y) {
  struct Point* p = malloc(sizeof(struct Point));
  p->x = x;
  p->y = y;
  return p;
}

double distance(struct Point* p1, struct Point* p2) {
  double dx = p1->x - p2->x;
  double dy = p1->y - p2->y;
  return sqrt(dx*dx+dy*dy);
}
```

The users of point.h have no access whatsoever to the members of struct Point. They can call the makePoint() function, and the distance() function, but they have absolutely no knowledge of the implementation of either the Point data structure or the functions.

> 显然，使用 point.h 的程序是没有 Point 结构体成员的访问权限的。它们只能调用 `makePoint()` 函数和 `distance()` 函数，但对它们来说，Point 这个数据结构体的内部细节，以及函数的具体实现方式都是不可见的。

This is perfect encapsulation—in a non-OO language. C programmers used to do this kind of thing all the time. We would forward declare data structures and functions in header files, and then implement them in implementation files. Our users never had access to the elements in those implementation files.

> 这正是完美封装 虽然 C 语言是非面向对象的编程语言。上述 C 程序是很常见的。在头文件中进行数据结构以及函数定义的前置声明（forward declare），然后 在程序文件中具体实现。程序文件中的具体实现细节对使用者来说是不可见的。

But then came OO in the form of C++—and the perfect encapsulation of C was broken.

> 而 C++作为一种面向对象编程语言，反而破坏了 c 的完美封装性。

The C++ compiler, for technical reasons,1 needed the member variables of a class to be declared in the header file of that class. So our Point program changed to look like this:

> 由于一些技术原，C++编译器要求类的成员变量必须在该类的头文件中声明。这样一来，我们的 point.h 程序随之就改成了这样：

point.h

```cpp
class Point {
public:
  Point(double x, double y);
  double distance(const Point& p) const;

private:
  double x;
  double y;
};
```

point.cc

```cpp
#include "point.h"
#include <math.h>

Point::Point(double x, double y)
: x(x), y(y)
{}

double Point::distance(const Point& p) const {
  double dx = x-p.x;
  double dy = y-p.y;
  return sqrt(dx*dx + dy*dy);
}
```

Clients of the header file point.h know about the member variables x and y! The compiler will prevent access to them, but the client still knows they exist. For example, if those member names are changed, the point.cc file must be recompiled! Encapsulation has been broken.

> 好了，point.h 文件的使用者现在知道了成员变量 x 和 y 的存在！虽然编译器会禁止对这两个变量的直接访问，但是使用者仍然知道了它们的存在。而且，如果 x 和 y 变量名称被改变了，point.cc 也必须重新编译才行！这样的封装性显然是不完美的。

Indeed, the way encapsulation is partially repaired is by introducing the public, private, and protected keywords into the language. This, however, was a hack necessitated by the technical need for the compiler to see those variables in the header file.

> 当然，C++通过在编程语言层面引入 public、private、protected 这些关键词，部分维护了封装性。但所有这些都是为了解决编译器自身的技术实现问题而引入的 hack——编译器由于技术实现原因必须在头文件中看到成员变量的定义。

Java and C# simply abolished the header/implementation split altogether, thereby weakening encapsulation even more. In these languages, it is impossible to separate the declaration and definition of a class.

> 而 Java 和 C# 则彻底抛弃了头文件与实现文件分离的编程方式，这其实进一步削弱了封装性。因为在这些语言中，我们是无法区分一个类的声明和定义的。

For these reasons, it is difficult to accept that OO depends on strong encapsulation. Indeed, many OO languages2 have little or no enforced encapsulation.

> 由于上述原因，我们很难说强封装是面向对象编程的必要条件。而事实上，有很多面向对象编程语言|对封装性并没有强制性的要求。

OO certainly does depend on the idea that programmers are well-behaved enough to not circumvent encapsulated data. Even so, the languages that claim to provide OO have only weakened the once perfect encapsulation we enjoyed with C.

> 面向对象编程在应用上确实会要求程序员尽量避免破坏数据的封装性。但实际情况是，那些声称自己提供面向对象编程支持的编程语言，相对于 C 这种完美封装的语言而言，其封装性都被削弱了，而不是加强了。

## INHERITANCE? 继承

If OO languages did not give us better encapsulation, then they certainly gave us inheritance.

> 既然面向对象编程语言并没有提供更好的封装性，那么在继承性方面又如何呢？

Well—sort of. Inheritance is simply the redeclaration of a group of variables and functions within an enclosing scope. This is something C programmers3 were able to do manually long before there was an OO language.

> 嗯，其实也就一般般吧。简而言之，继承的主要作用是让我们可以在某个作用域内对外部定义的某一组变量与函数进行覆盖。这事实上也是 c 程序员早在面向对象编程语言发明之前就一直在做的事了。

Consider this addition to our original point.h C program:

> 下面，看一下刚才的 C 程序 point.h 的扩展版：

namedPoint.h

```c
struct NamedPoint;

struct NamedPoint* makeNamedPoint(double x, double y, char* name);
void setName(struct NamedPoint* np, char* name);
char* getName(struct NamedPoint* np);
```

namedPoint.c

```c
#include "namedPoint.h"
#include <stdlib.h>

struct NamedPoint {
  double x,y;
  char* name;
};

struct NamedPoint* makeNamedPoint(double x, double y, char* name) {
  struct NamedPoint* p = malloc(sizeof(struct NamedPoint));
  p->x = x;
  p->y = y;
  p->name = name;
  return p;
}

void setName(struct NamedPoint* np, char* name) {
  np->name = name;
}

char* getName(struct NamedPoint* np) {
  return np->name;
}
```

main.c

```c
#include "point.h"
#include "namedPoint.h"
#include <stdio.h>

int main(int ac, char** av) {
  struct NamedPoint* origin = makeNamedPoint(0.0, 0.0, "origin");
  struct NamedPoint* upperRight = makeNamedPoint  (1.0, 1.0, "upperRight");
  printf("distance=%f\n",
    distance(
             (struct Point*) origin,
             (struct Point*) upperRight));
}
```

If you look carefully at the main program, you’ll see that the NamedPoint data structure acts as though it is a derivative of the Point data structure. This is because the order of the first two fields in NamedPoint is the same as Point. In short, NamedPoint can masquerade as Point because NamedPoint is a pure superset of Point and maintains the ordering of the members that correspond to Point.

> 请仔细观察 main 函数，这里 NamedPoint 数据结构是被当作 Point 数据结构的一个衍生体來使用的。之所以可以这样做，是因为 NamedPoint 结构体的前两个成员的顺用与 Point 结构休的完全一致。简单来说，NamedPoint 之所以可以被伪装成 Point 来使用，是因为 NamedPoint 是 Point 结构体的一个超集，同两者共同成员的顺序也是一样的。

This kind of trickery was a common practice4 of programmers prior to the advent of OO. In fact, such trickery is how C++ implements single inheritance.

> 面这种编程方式虽然看上去有些投机取巧，但是在面向对象理论被提出之前，这已经很常见了。其实，C++内部就是这样实现单继承的。

Thus we might say that we had a kind of inheritance long before OO languages were invented. That statement wouldn’t quite be true, though. We had a trick, but it’s not nearly as convenient as true inheritance. Moreover, multiple inheritance is a considerably more difficult to achieve by such trickery.

> 因此，我们可以说，早在面向对象编程语言被发明之前，对继承性的支持就已经存在很久了。当然了，这种支持用了一些投机取巧的手段，并不像如今的继昼：样便利易用，而且，多重继承（multiple inheritance）如果还想用这种方法来实现，就更难了。

Note also that in main.c, I was forced to cast the NamedPoint arguments to Point. In a real OO language, such upcasting would be implicit.

> 同时应该注意的是，在 main.c 中，程序员必须强制将 NamedPoint 的参数类型转换为 Point，而在真正的面向对象编程语言中，这种类型的向上转换通常应该是隐性的。

It’s fair to say that while OO languages did not give us something completely brand new, it did make the masquerading of data structures significantly more convenient.

> 综上所述，我们可以认为，虽然面向对象编程在继承性方面并没有开创出新，但是的确在数据结构的伪装性上提供了相当程度的便利性。

To recap: We can award no point to OO for encapsulation, and perhaps a half-point for inheritance. So far, that’s not such a great score.

> 回顾一下到目前为止的分析，面向对象编程在封装性上得 0 分，在继承性上勉强可以得 0.5 分（满分为 1)。

But there’s one more attribute to consider.

> 下面，我们还有最后一个特性要讨论。

## POLYMORPHISM? 多态

Did we have polymorphic behavior before OO languages? Of course we did. Consider this simple C copy program.

> 在面向编程对象语言被发明之前，我们所使用的编程语言能支持多态吗? 答案是肯定的，请注意看下面这段用 C 语言编写的 copy 程序：

```c
#include <stdio.h>

void copy() {
  int c;
  while ((c=getchar()) != EOF)
    putchar(c);
}
```

The function getchar() reads from STDIN. But which device is STDIN? The putchar() function writes to STDOUT. But which device is that? These functions are polymorphic—their behavior depends on the type of STDIN and STDOUT.

> 在上述程序中，函数 `getchar()` 主要负责从 STDTN 中读取数据。但是 STDLLN 究竟指代的是哪个设备呢？同样的道理，`putchar()` 主要负责将数据写入 STDOUT，而 STDOUT 又指代的是哪个设备呢？很显然，这类函数其实就具有多态性，因为它们的行为依赖于 STDIN 和 STDOUT 的具体类型。

It’s as though STDIN and STDOUT are Java-style interfaces that have implementations for each device. Of course, there are no interfaces in the example C program—so how does the call to getchar() actually get delivered to the device driver that reads the character?

> 这里的 STDIN 和 STDOUT 与 Java 中的接口类似，各种设备都有各自的实现。当然，这个 C 程序中是没有接口这个概念的，那么 `getchar()` 这个调用的动作是 如何真正传递到设备驱动程序中，从而读取到具体内容的呢？

The answer to that question is pretty straightforward. The UNIX operating system requires that every IO device driver provide five standard functions:5 open, close, read, write, and seek. The signatures of those functions must be identical for every IO driver.

> 其实很简单，UNIX 操作系统强制要求每个 IO 设备都要提供 open、close、read、write 和 seek 这 5 个标准函数。也就是说，每个 IO 设备驱动程序对这 5 种函数的实现在函数调用上必须保持一致。

The FILE data structure contains five pointers to functions. In our example, it might look like this:

> 首先，FILE 数据结构体中包含了相对应的 5 个函数指针，分别用于指向这些函数：

```c
struct FILE {
  void (*open)(char* name, int mode);
  void (*close)();
  int (*read)();
  void (*write)(char);
  void (*seek)(long index, int mode);
};
```

The IO driver for the console will define those functions and load up a FILE data structure with their addresses—something like this:

> 然后，譬如控制台设备的 IO 驱动程序就会提供这 5 个函数的实际定义，将 FILE 结构体的函数指针指向这些对应的实现函数：

```c
#include "file.h"

void open(char* name, int mode) {/*...*/}
void close() {/*...*/};
int read() {int c;/*...*/ return c;}
void write(char c) {/*...*/}
void seek(long index, int mode) {/*...*/}

struct FILE console = {open, close, read, write, seek};
```

Now if STDIN is defined as a `FILE*`, and if it points to the console data structure, then getchar() might be implemented this way:

> 现在，如果 STDIN 的定义是 `FILE*`，并同时指向了 console 这个数据结构，那么 `getchar()` 的实现方式就是这样的：

```c
extern struct FILE* STDIN;

int getchar() {
  return STDIN->read();
}
```

In other words, getchar() simply calls the function pointed to by the read pointer of the FILE data structure pointed to by STDIN.

> 换句话说，`getchar()` 只是调用了 STDIN 所指向的 FIL E 数据结构体中的 read 函数指针指向的函数。

This simple trick is the basis for all polymorphism in OO. In C++, for example, every virtual function within a class has a pointer in a table called a vtable, and all calls to virtual functions go through that table. Constructors of derivatives simply load their versions of those functions into the vtable of the object being created.

> 这个简单的编程技巧正是面向对象编程中多态的基础。例如在 C++中，类中的每个虚函数（virtual function）的地址都被记录在一个名叫 vtable 的数据结构里。我们对虚函数的每次调用都要先查询这个表，其衍生类的构造函数负责将该衍生类的虚函数地址加载到整个对象的 vtable 中。

The bottom line is that polymorphism is an application of pointers to functions. Programmers have been using pointers to functions to achieve polymorphic behavior since Von Neumann architectures were first implemented in the late 1940s. In other words, OO has provided nothing new.

> 归根结底，多态其实不过就是函数指针的一种应用。自从 20 世纪 40 年代末期冯·诺依曼架构诞生那天起，程序员们就一直在使用函数指针模拟多态了。也就是说，面向对象编程在多态方面没有提出任何新概念。

Ah, but that’s not quite correct. OO languages may not have given us polymorphism, but they have made it much safer and much more convenient.

> 当然了，面向对象编程语言虽然在多态上并没有理论创新，但它们也确实让多态变得更安全、更便于使用了。

The problem with explicitly using pointers to functions to create polymorphic behavior is that pointers to functions are dangerous. Such use is driven by a set of manual conventions. You have to remember to follow the convention to initialize those pointers. You have to remember to follow the convention to call all your functions through those pointers. If any programmer fails to remember these conventions, the resulting bug can be devilishly hard to track down and eliminate.

> 用函数指针显式实现多态的问题就在于函数指针的危险性。毕竟，函数指针的调用依赖于一系列需要人为遵守的约定。程序员必须严格按照约定来初始化函数指针，并同样严格地按照约定来调用这些指针。只要有一个程序员没有遵守这些约定，整个程序就会产生极其难以跟踪和消除的 Bug。

OO languages eliminate these conventions and, therefore, these dangers. Using an OO language makes polymorphism trivial. That fact provides an enormous power that old C programmers could only dream of. On this basis, we can conclude that OO imposes discipline on indirect transfer of control.

> 面向对象编程语言为我们消除人工遵守这些约定的必要，也就等于消除了这方面的危险性。采用面向对象编程语言让多态实现变得非常简单，让一个传统 C 程序员可以去做以前不敢想的事情。综上所述，我们认为面向对象编程其实是对程序间接控制权的转移进行了约束。

### THE POWER OF POLYMORPHISM 多态的强大性

What’s so great about polymorphism? To better appreciate its charms, let’s reconsider the example copy program. What happens to that program if a new IO device is created? Suppose we want to use the copy program to copy data from a handwriting recognition device to a speech synthesizer device: How do we need to change the copy program to get it to work with those new devices?

> 那么多态的优势在哪里呢？为了让读者更好地理解多态的好处，我们需要再来看一下刚才的 copy 程序。如果要支持新的 IO 设备，该程序需要做什么改动呢？譬如，假设我们想要用该 copy 程序从一个手写识别设备将数据复制到另一个语音合成设备中，我们需要针对 copy 程序做什么改动，才能实现这个目标呢？

We don’t need any changes at all! Indeed, we don’t even need to recompile the copy program. Why? Because the source code of the copy program does not depend on the source code of the IO drivers. As long as those IO drivers implement the five standard functions defined by FILE, the copy program will be happy to use them.

> 答案是完全不需要做任何改动！确实，我们甚至不需要重新编译该 copy 程序。为什么？因为 copy 程序的源代码并不依赖于 IO 设备驱动程序的代码。只要 IO 设备驱动程序实现了 FILE 结构体中定义的 5 个标准函数，该 copy 程序就可以正常使用它们。

In short, the IO devices have become plugins to the copy program.

> 简单来说，IO 设备变成了 copy 程序的插件。

Why did the UNIX operating system make IO devices plugins? Because we learned, in the late 1950s, that our programs should be device independent. Why? Because we wrote lots of programs that were device dependent, only to discover that we really wanted those programs to do the same job but use a different device.

> 为什么 UNIX 操作系统会将 IO 设备设计成插件形式呢？因为自 20 世纪 50 年代末期以来，我们学到了一个重要经验：程序应该与设备无关。这个经验从何而来呢？因为一度所有程序都是设备相关的，但是后来我们发现自己其实真正需要的是在不同的设备上实现同样的功能。

For example, we often wrote programs that read input data from decks of cards,6 and then punched new decks of cards as output. Later, our customers stopped giving us decks of cards and started giving us reels of magnetic tape. This was very inconvenient, because it meant rewriting large portions of the original program. It would be very convenient if the same program worked interchangeably with cards or tape.

> 例如，我们曾经写过一些程序，需要从卡片盒中的打孔卡片读取数据，同时要通过在新的卡片上打孔来输出数据。后来，客户不再使用打孔卡片，而开始使用磁带卷了。这就给我们带来了很多麻烦，很多程序都需要重写。于是我们就会想，如果这段程序可以同时操作打孔卡片和磁带那该多好。

The plugin architecture was invented to support this kind of IO device independence, and has been implemented in almost every operating system since its introduction. Even so, most programmers did not extend the idea to their own programs, because using pointers to functions was dangerous.

> 插件式架构就是为了支持这种 IO 不相关性而发明的，它几乎在随后的所有系统中都有应用。但即使多态有如此多优点，大部分程序员还是没有将插件特性引入他们自己的程序中，因为函数指针实在是太危险了。

OO allows the plugin architecture to be used anywhere, for anything.

> 而面向对象编程的出现使得这种插件式架构可以在任何地方被安全地使用。

### DEPENDENCY INVERSION 依赖反转

Imagine what software was like before a safe and convenient mechanism for polymorphism was available. In the typical calling tree, main functions called high-level functions, which called mid-level functions, which called low-level functions. In that calling tree, however, source code dependencies inexorably followed the flow of control (Figure 5.1).

> 我们可以想象一下在安全和便利的多态支持出现之前，软件是什么样子的。下面有一个典型的调用树的例子，main 函数调用了一些高层函数，这些高层函数又调用了一些中层函数，这些中层函数又继续调用了一些底层函数。在这里，源代码面的依赖不可避免地要跟随程序的控制流（详见图 5.1）。

<Figures figure="5-1">Source code dependencies versus flow of control</Figures>

For main functions to call one of the high-level functions, it had to mention the name of the module that contained that function In C, this was a #include. In Java, it was an import statement. In C#, it was a using statement. Indeed, every caller was forced to mention the name of the module that contained the callee.

> 如你所见，main 函数为了调用高层函数，它就必须能够看到这个函数所在模块。在 C 中，我们会通过 #include 来实现，在 Java 中则通过 import 来实现，而在 C# 中则用的是 using 语句。总之，每个函数的调用方都必须要引用被调用方所在的模块。

This requirement presented the software architect with few, if any, options. The flow of control was dictated by the behavior of the system, and the source code dependencies were dictated by that flow of control.

> 显然，这样做就导致了我们在软件架构上别无选择。在这里，系统行为决定了控制流，而控制流则决定了源代码依赖关系。

When polymorphism is brought into play, however, something very different can happen (Figure 5.2).

> 但一旦我们使用了多态，情况就不一样了（详见图 5.2）。

<Figures figure="5-2">Dependency inversion</Figures>

In Figure 5.2, module HL1 calls the F() function in module ML1. The fact that it calls this function through an interface is a source code contrivance. At runtime, the interface doesn’t exist. HL1 simply calls F() within ML1.7

> 在图 5.2 中，模块 HL1 调用了 ML1 模块中的 F() 函数，这里的调用是通过源代码级别的接口来实现的。当然在程序实际运行时，接口这个概念是不存在的，HL1 会调用 ML1 中的 F() 函数。

Note, however, that the source code dependency (the inheritance relationship) between ML1 and the interface I points in the opposite direction compared to the flow of control. This is called dependency inversion, and its implications for the software architect are profound.

> 请注意模块 ML1 和接口 I 在源代码上的依赖关系（或者叫继承关系），该关系的方向和控制流正好是相反的，我们称之为依赖反转。这种反转对软件架构设计的影响是非常大的。

The fact that OO languages provide safe and convenient polymorphism means that any source code dependency, no matter where it is, can be inverted.

> 事实上，通过利用面向编程语言所提供的这种安全便利的多态实现，无论我们面对怎样的源代码级别的依赖关系，都可以将其反转。

Now look back at that calling tree in Figure 5.1, and its many source code dependencies. Any of those source code dependencies can be turned around by inserting an interface between them.

> 现在，我们可以再回头来看图 5.1 中的调用树，就会发现其中的众多源代码依赖关系都可以通过引入接口的方式来进行反转。

With this approach, software architects working in systems written in OO languages have absolute control over the direction of all source code dependencies in the system. They are not constrained to align those dependencies with the flow of control. No matter which module does the calling and which module is called, the software architect can point the source code dependency in either direction.

> 通过这种方法，软件架构师可以完全控制采用了面向对象这种编程方式的系统中所有的源代码依赖关系，而不再受到系统控制流的限制。不管哪个模块调用或者被调用，软件架构师都可以随意更改源代码依赖关系。

That is power! That is the power that OO provides. That’s what OO is really all about—at least from the architect’s point of view.

> 这就是面向对象编程的好处，同时也是面向对象编程这种范式的核心本质至少对一个软件架构师来说是这样的。

What can you do with that power? As an example, you can rearrange the source code dependencies of your system so that the database and the user interface (UI) depend on the business rules (Figure 5.3), rather than the other way around.

> 这种能力有什么用呢？在下面的例子中，我们可以用它来让数据库模块和用户界面模块都依赖于业务逻辑模块（见图 5.3），而非相反。

<Figures figure="5-3">The database and the user interface depend on the business rules</Figures>

This means that the UI and the database can be plugins to the business rules. It means that the source code of the business rules never mentions the UI or the database.

> 这意味着我们让用户界面和数据库都成为业务逻辑的插件。也就是说，业务逻辑模块的源代码不需要引入用户界面和数据库这两个模块。

As a consequence, the business rules, the UI, and the database can be compiled into three separate components or deployment units (e.g., jar files, DLLs, or Gem files) that have the same dependencies as the source code. The component containing the business rules will not depend on the components containing the UI and database.

> 这样一来，业务逻辑、用户界面以及数据库就可以被编译成三个独立的组件或者部署单元（例如 jar 文件、DLL 文件、Gem 文件等）了，这些组件或者部署单元的依赖关系与源代码的依赖关系是一致的，业务逻辑组件也不会依赖于用户界面和数据库这两个组件。

In turn, the business rules can be deployed independently of the UI and the database. Changes to the UI or the database need not have any effect on the business rules. Those components can be deployed separately and independently.

> 于是，业务逻辑组件就可以独立于用户界面和数据库来进行部署了，我们对用户界面或者数据库的修改将不会对业务逻辑产生任何影响，这些组件都可以被分另独立地部署。

In short, when the source code in a component changes, only that component needs to be redeployed. This is independent deployability.

> 简单来说，当某个组件的源代码需要修改时，仅仅需要重新部署该组件，不需要更改其他组件，这就是独立部署能力。

If the modules in your system can be deployed independently, then they can be developed independently by different teams. That’s independent developability.

> 如果系统中的所有组件都可以独立部署，那它们就可以由不同的团队并行开发，这就是所谓的独立开发能力。

## CONCLUSION 本章小结

What is OO? There are many opinions and many answers to this question. To the software architect, however, the answer is clear: OO is the ability, through the use of polymorphism, to gain absolute control over every source code dependency in the system. It allows the architect to create a plugin architecture, in which modules that contain high-level policies are independent of modules that contain low-level details. The low-level details are relegated to plugin modules that can be deployed and developed independently from the modules that contain high-level policies.

> 面向对象编程到底是什么？业界在这个问题上存在着很多不同的说法和意见。然而对一个软件架构师来说，其含义应该是非常明确的：面向对象编程就是以对象为手段来对源代码中的依赖关系进行控制的能力，这种能力让软件架构师可以构建出某种插件式架构，让高层策略性组件与底层实现性组件相分离，底层组件可必编译成插件，实现独立于高层组件的开发和部署。
