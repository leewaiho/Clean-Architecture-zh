# Part3. DESIGN PRINCIPLES 设计原则

![](./un/PA-UN03.jpg)

Good software systems begin with clean code. On the one hand, if the bricks aren’t well made, the architecture of the building doesn’t matter much. On the other hand, you can make a substantial mess with well-made bricks. This is where the SOLID principles come in.

> 通常来说，要想构建一个好的软件系统，应该从写整洁的代码开始做起。毕竟，如果建筑所使用的砖头质量不佳，那么架构所能起到的作用也会很有限。反之亦然，如果建筑的架构设计不佳，那么其所用的砖头质量再好也没有用。这就是 SOLID 设计原则所要解决的问题。

The SOLID principles tell us how to arrange our functions and data structures into classes, and how those classes should be interconnected. The use of the word “class” does not imply that these principles are applicable only to object-oriented software. A class is simply a coupled grouping of functions and data. Every software system has such groupings, whether they are called classes or not. The SOLID principles apply to those groupings.

> SOLID 原则的主要作用就是告诉我们如何将数据和函数组织成为类，以及如将这些类链接起来成为程序。请注意，这里虽然用到了 “类”这个词，但是并不意味着我们将要讨论的这些设计原则仅仅适用于面向对象编程。这里的类仅仅代表一种数据和函数的分组，每个软件系统都会有自己的分类系统，不管它们各自是不是将其称为“类”，事实上都是 SOLID 原则的适用领域。

The goal of the principles is the creation of mid-level software structures that:

> 一般情况下，我们为软件构建中层结构的主要目标如下：

- Tolerate change,
- Are easy to understand, and
- Are the basis of components that can be used in many software systems.

---

> - 使软件可容忍被改动。
> - 使软件更容易被理解。
> - 构建可在多个软件系统中复用的组件。

The term “mid-level” refers to the fact that these principles are applied by programmers working at the module level. They are applied just above the level of the code and help to define the kinds of software structures used within modules and components.

> 我们在这里之所以会使用“中层”这个词，是因为这些设计原则主要适用于那些进行模块级编程的程序员。SOLID 原则应该直接紧贴于具体的代码逻辑之上，这些原则是用来帮助我们定义软件架构中的组件和模块的。

Just as it is possible to create a substantial mess with well-made bricks, so it is also possible to create a system-wide mess with well-designed mid-level components. For this reason, once we have covered the SOLID principles, we will move on to their counterparts in the component world, and then to the principles of high-level architecture.

> 当然了，正如用好砖也会盖歪楼一样，采用设计良好的中层组件并不能保证系统的整体架构运作良好。正因为如此，我们在讲完 SOLID 原则之后，还会再继续针对组件的设计原则进行更进一步的讨论，将其推进到高级软件架构部分。

The history of the SOLID principles is long. I began to assemble them in the late 1980s while debating software design principles with others on USENET (an early kind of Facebook). Over the years, the principles have shifted and changed. Some were deleted. Others were merged. Still others were added. The final grouping stabilized in the early 2000s, although I presented them in a different order.

> SOLID 原则的历史已经很悠久了，早在 20 世纪 80 年代末期，我在 USENET 新闻组 （该新闻组在当时就相当于今天的 Facebook）上和其他人辩论软件设计理念的时候，该设计原则就已经开始逐渐成型了。随着时间的推移，其中有一些原则得到了修改，有一些则被抛弃了，还有一些被合并了，另外也增加了一些。它们的最终形态是在 2000 年左右形成的，只不过当时采用的是另外一个展现顺序。

In 2004 or thereabouts, Michael Feathers sent me an email saying that if I rearranged the principles, their first words would spell the word SOLID—and thus the SOLID principles were born.

> 2004 年前后，Michael Feathers 的一封电子邮件提醒我：如果重新排列这些设计原则，那么它们的首字母可以排列成 SOLID——这就是 SOLID 原则诞生的故事。

The chapters that follow describe each principle more thoroughly. Here is the executive summary:

> 在这一部分中，我们会逐章地详细讨论每个设计原则，下面先来做一个简单摘要。

- SRP: The Single Responsibility Principle
  An active corollary to Conway’s law: The best structure for a software system is heavily influenced by the social structure of the organization that uses it so that each software module has one, and only one, reason to change.
- OCP: The Open-Closed Principle
  Bertrand Meyer made this principle famous in the 1980s. The gist is that for software systems to be easy to change, they must be designed to allow the behavior of those systems to be changed by adding new code, rather than changing existing code.
- LSP: The Liskov Substitution Principle
  Barbara Liskov’s famous definition of subtypes, from 1988. In short, this principle says that to build software systems from interchangeable parts, those parts must adhere to a contract that allows those parts to be substituted one for another.
- ISP: The Interface Segregation Principle
  This principle advises software designers to avoid depending on things that they don’t use.
- DIP: The Dependency Inversion Principle
  The code that implements high-level policy should not depend on the code that implements low-level details. Rather, details should depend on policies.

---

> - SRP：单一职责原则。
>   该设计原则是某于康威圧律（Conway's Law）的一个推论——一个软件系统的最佳结构高度依赖于开发这个系统的组织的内部结构。这样，每个软件模块都有且只有一个需要被改变的理由。
> - OCP：开闭原则。
>   该设计原则是由 Bertrand Meyer 在 20 世纪 80 年代大力推广的，其核心要素是：如果软件系统想要更容易被改变，那么其设计就必须允许新增代码来修改系统行为，而非只能靠修改原来的代码。
> - LSP：里氏替换原则。
>   该设计原则是 Barbara Liskov 在 1988 年提出的一个著名的子类型定义。简单来说，这项原则的意思是如果想用可替换的组件来构建软件系统，那么这些组件就必须遵守同一个约定，以便让这些组件可以相互替换。
> - ISP：接口隔离原则。
>   这项设计原则主要告诫软件设计师应该在设计中避免不必要的依赖。
> - DIP：依赖反转原则。
>   该设计原则指出高层策略性的代码不应该依赖实现底层细节的代码，恰恰相反，那些实现底层细节的代码应该依赖高层策略性的代码。

These principles have been described in detail in many different publications1 over the years. The chapters that follow will focus on the architectural implications of these principles instead of repeating those detailed discussions. If you are not already familiar with these principles, what follows is insufficient to understand them in detail and you would be well advised to study them in the footnoted documents.

> 这些年来，这些设计原则在很多不同的出版物中都有过详细描述。在接下来的章节中，我们将会主要关注这些原则在软件架构上的意义，而不再重复其细节信息。如果你对这些原则并不是特别了解，那么我建议你先通过脚注中的文档熟悉一下它们，否则接下来的章节可能有点难以理解。
