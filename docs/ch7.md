# Chap7. SRP: THE SINGLE RESPONSIBILITY PRINCIPLE SRP：单一职责原则

![](./un/CH-UN07.jpg)

Of all the SOLID principles, the Single Responsibility Principle (SRP) might be the least well understood. That’s likely because it has a particularly inappropriate name. It is too easy for programmers to hear the name and then assume that it means that every module should do just one thing.

> SRP 是 SOLID 五大设计原则中最容易被误解的一个。也许是名字的原因，很多程序员根据 SRP 这个名字想当然地认为这个原则就是指：每个模块都应该只做一件事。

Make no mistake, there is a principle like that. A function should do one, and only one, thing. We use that principle when we are refactoring large functions into smaller functions; we use it at the lowest levels. But it is not one of the SOLID principles—it is not the SRP.

> 没错，后者的确也是一个设计原则，即确保一个函数只完成一个功能。我们在将大型函数重构成小函数时经常会用到这个原则，但这只是一个面向底层实现细节的设计原则，并不是 SRP 的全部。

Historically, the SRP has been described this way:

> 在历史上，我们曾经这样描述 SRP 这一设计原则：

A module should have one, and only one, reason to change.

> 任何一个软件模块都应该有且仅有一个被修改的原因。

Software systems are changed to satisfy users and stakeholders; those users and stakeholders are the “reason to change” that the principle is talking about. Indeed, we can rephrase the principle to say this:

> 在现实环境中，软件系统为了满足用户和所有者的要求，必然要经常做出这样那样的修改。而该系统的用户或者所有者就是该设计原则中所指的“被修改的原因”。所以，我们也可以这样描述 SRP：

A module should be responsible to one, and only one, user or stakeholder.

> 任何一个软件模块都应该只对一个用户（User）或系统利益相关者（Stakeholder）负责。

Unfortunately, the words “user” and “stakeholder” aren’t really the right words to use here. There will likely be more than one user or stakeholder who wants the system changed in the same way. Instead, we’re really referring to a group—one or more people who require that change. We’ll refer to that group as an actor.

> 不过，这里的“用户”和 “系统利益相关者”在用词上也并不完全准确，它们很有可能指的是一个或多个用户和利益相关者，只要这些人希望对系统进行的变更是相似的，就可以归为一类——一个或多个有共同需求的人。在这里，我们将其称为行为者（actor）。

Thus the final version of the SRP is:

> 所以，对于 SRP 的最终描述就变成了：

A module should be responsible to one, and only one, actor.

> 任何一个软件模块都应该只对某一类行为者负责。

Now, what do we mean by the word “module”? The simplest definition is just a source file. Most of the time that definition works fine. Some languages and development environments, though, don’t use source files to contain their code. In those cases a module is just a cohesive set of functions and data structures.

> 那么，上文中提到的“软件模块”究竟又是在指什么呢？大部分情况下，其最简单的定义就是指一个源代码文件。然而，有些编程语言和编程环境并不是用源代码文件来存储程序的。在这些情况下，“软件模块”指的就是一组紧密相关的函数和数据结构。

That word “cohesive” implies the SRP. Cohesion is the force that binds together the code responsible to a single actor.

> 在这里，“相关”这个词实际上就隐含了 SRP 这一原则。代码与数据就是靠着与某一类行为者的相关性被组合在一起的。

Perhaps the best way to understand this principle is by looking at the symptoms of violating it.

> 或许，理解这个设计原则最好的办法就是计大家来看一些反面案例。

## SYMPTOM 1: ACCIDENTAL DUPLICATION 反面案例 1：重复的假象

My favorite example is the Employee class from a payroll application. It has three methods: calculatePay(), reportHours(), and save() (Figure 7.1).

> 这是我最喜欢举的一个例子：某个工资管理程序中的 Employee 类有三个函数 calculatePay()、reportHours() 和 save()（见图 7.1）。

<Figures figure="7-1">The Employee class</Figures>

This class violates the SRP because those three methods are responsible to three very different actors.

> 如你所见，这个类的三个函数分别对应的是三类非常不同的行为者，违反了 SRP 设计原则。

- The calculatePay() method is specified by the accounting department, which reports to the CFO.
- The reportHours() method is specified and used by the human resources department, which reports to the COO.
- The save() method is specified by the database administrators (DBAs), who report to the CTO.

---

> - calculatePay() 函数是由财务部门制定的，他们负责向 CFO 汇报。
> - reportHours() 函数是由人力资源部门制定并使用的，他们负责向 COO 汇报。
> - save() 函数是由 DBA 制定的，他们负责向 CTO 汇报。

By putting the source code for these three methods into a single Employee class, the developers have coupled each of these actors to the others. This coupling can cause the actions of the CFO’s team to affect something that the COO’s team depends on.

> 这三个函数被放在同一个源代码文件，即同一个 Employee 类中，程序员这样 做实际上就等于使三类行为者的行为耦合在了一起，这有可能会导致 CFO 团队的命令影响到 C 00 团队所依赖的功能。

For example, suppose that the calculatePay() function and the reportHours() function share a common algorithm for calculating non-overtime hours. Suppose also that the developers, who are careful not to duplicate code, put that algorithm into a function named regularHours() (Figure 7.2).

> 例如，calculatePay() 函数和 reportHours() 函数使用同样的逻辑来计算正常工作时数。程序员为了避免重复编码，通常会将该算法单独实现为一个名为 regularHours() 的函数（见图 7.2）。

<Figures figure="7-2">Shared algorithm</Figures>

Now suppose that the CFO’s team decides that the way non-overtime hours are calculated needs to be tweaked. In contrast, the COO’s team in HR does not want that particular tweak because they use non-overtime hours for a different purpose.

> 接下来，假设 CFO 团队需要修改正常工作时数的计算方法，而 COO 带领的 HR 团队不需要这个修改，因为他们对数据的用法是不同的。

A developer is tasked to make the change, and sees the convenient regularHours() function called by the calculatePay() method. Unfortunately, that developer does not notice that the function is also called by the reportHours() function.

> 这时候，负责这项修改的程序员会注意到 calculatePay() 函数调用了 regularHours() 函数，但可能不会注意到该函数会同时被 reportHours() 调用。

The developer makes the required change and carefully tests it. The CFO’s team validates that the new function works as desired, and the system is deployed.

> 于是，该程序员就这样按照要求进行了修改，同时 CFO 团队的成员验证了新算法工作正常。这项修改最终被成功部署上线了。

Of course, the COO’s team doesn’t know that this is happening. The HR personnel continue to use the reports generated by the reportHours() function—but now they contain incorrect numbers. Eventually the problem is discovered, and the COO is livid because the bad data has cost his budget millions of dollars.

> 但是，COO 团队显然完全不知道这些事情的发生，HR 仍然在使用 reportHours() 产生的报表，随后就会发现他们的数据出错了！最终这个问题让 COO 十分愤怒，因为这些错误的数据给公司造成了几百万美元的损失。

We’ve all seen things like this happen. These problems occur because we put code that different actors depend on into close proximity. The SRP says to separate the code that different actors depend on.

> 与此类似的事情我们肯定多多少少都经历过。这类问题发生的根源就是因为我们将不同行为者所依赖的代码强凑到了一起。对此，SRP 强调这类代码一定要被分开。

## SYMPTOM 2: MERGES 反面案例 2：代码合井

It’s not hard to imagine that merges will be common in source files that contain many different methods. This situation is especially likely if those methods are responsible to different actors.

> 一个拥有很多函数的源代码文件必然会经历很多次代码合并，该文件中的这些函数分别服务不同行为者的情况就更常见了。

For example, suppose that the CTO’s team of DBAs decides that there should be a simple schema change to the Employee table of the database. Suppose also that the COO’s team of HR clerks decides that they need a change in the format of the hours report.

> 例如，CTO 团队的 DBA 决定要对 Employee 数据库表结构进行简单修改。与此同时，COO 团队的 HR 需要修改工作时数报表的格式。

Two different developers, possibly from two different teams, check out the Employee class and begin to make changes. Unfortunately their changes collide. The result is a merge.

> 这样一来，就很可能出现两个来自不同团队的程序员分别对 Employee 类进行 修改的情况。不出意外的话，他们各自的修改一定会互相冲突，这就必须要进行代码合并。

I probably don’t need to tell you that merges are risky affairs. Our tools are pretty good nowadays, but no tool can deal with every merge case. In the end, there is always risk.

In our example, the merge puts both the CTO and the COO at risk. It’s not inconceivable that the CFO could be affected as well.

> 在这个例子中，这次代码合并不仅有可能让 CTO 和 COO 要求的功能出错，甚至连 CFO 原本正常的功能也可能收到影响。

There are many other symptoms that we could investigate, but they all involve multiple people changing the same source file for different reasons.

> 事实上，这样的案例还有很多，我们就不一一列举了。它们的一个共同点是，多人为了不同的目的修改了同一份源代码，这很容易造成问题的产生。

Once again, the way to avoid this problem is to separate code that supports different actors.

> 而避免这种问题产生的方法就是将服务不同行为者的代码进行切分。

## SOLUTIONS 解决方案

There are many different solutions to this problem. Each moves the functions into different classes.

> 我们有很多不同的方法可以用来解决上面的问题，每一种方法都需要将相关的函数划分成不同的类。

Perhaps the most obvious way to solve the problem is to separate the data from the functions. The three classes share access to EmployeeData, which is a simple data structure with no methods (Figure 7.3). Each class holds only the source code necessary for its particular function. The three classes are not allowed to know about each other. Thus any accidental duplication is avoided.

> 其中，最简单直接的办法是将数据与函数分离，设计三个类共同使用一个不包括函数的、十分简单的 EmployeeData 类（见图 7.3），每个类只包含与之相关的函数代码，互相不可见，这样就不存在互相依赖的情况了。

<Figures figure="7-3">The three classes do not know about each other</Figures>

The downside of this solution is that the developers now have three classes that they have to instantiate and track. A common solution to this dilemma is to use the Facade pattern (Figure 7.4).

> 这种解决方案的坏处在于：程序员现在需要在程序里处理三个类。另一种解决办法是使用 Facade 设计模式（见图 7.4）。

<Figures figure="7-4">The Facade pattern</Figures>

The EmployeeFacade contains very little code. It is responsible for instantiating and delegating to the classes with the functions.

> 这样一来，EmployeeFacade 类所需要的代码量就很少了，它仅仅包含了初始化和调用三个具体实现类的函数。

Some developers prefer to keep the most important business rules closer to the data. This can be done by keeping the most important method in the original Employee class and then using that class as a Facade for the lesser functions (Figure 7.5).

> 当然，也有些程序员更倾向于把最重要的业务逻辑与数据放在一起，那么我们也可以选择将最重要的函数保留在 Employee 类中，同时用这个类来调用其他没那么重要的函数（见图 7.5）。

<Figures figure="7-5">The most important method is kept in the original Employee class and used as a Facade for the lesser functions</Figures>

You might object to these solutions on the basis that every class would contain just one function. This is hardly the case. The number of functions required to calculate pay, generate a report, or save the data is likely to be large in each case. Each of those classes would have many private methods in them.

> 读者也许会反对上面这些解决方案，因为看上去这里的每个类中都只有一个函数。事实上并非如此，因为无论是计算工资、生成报表还是保存数据都是一个很复杂的过程，每个类都可能包含了许多私有函数。

Each of the classes that contain such a family of methods is a scope. Outside of that scope, no one knows that the private members of the family exist.

> 总而言之，上面的每一个类都分别容纳了一组作用于相同作用域的函数，而在该作用域之外，它们各自的私有函数是互相不可见的。

## CONCLUSION 本章小结

The Single Responsibility Principle is about functions and classes—but it reappears in a different form at two more levels. At the level of components, it becomes the Common Closure Principle. At the architectural level, it becomes the Axis of Change responsible for the creation of Architectural Boundaries. We’ll be studying all of these ideas in the chapters to come.

> 单一职责原则主要讨论的是函数和类之间的关系——但是它在两个讨论层面上会以不同的形式出现。在组件层面，我们可以将其称为共同闭包原则（Common Closure Principle)，在软件架构层面，它则是用于奠定架构边界的变更轴心（Axis of Change）。我们在接下来的章节中会深入学习这些原则。
