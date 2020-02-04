# Chap2. A TALE OF TWO VALUES 两个价值维度

![](./un/CH-UN02.jpg)

Every software system provides two different values to the stakeholders: behavior and structure. Software developers are responsible for ensuring that both those values remain high. Unfortunately, they often focus on one to the exclusion of the other. Even more unfortunately, they often focus on the lesser of the two values, leaving the software system eventually valueless.

> 对于每个软件系统，我们都对以通过行为和架构两个维度来休现它的实际价值。软件研发人员应该确保自己的系统在这两个维度上的实际价值都能长时间维持在很高的状态。不幸的是，他们往往只关注一个维度，而忽视了另外一个维度。更不幸的是，他们常常关注的还是错误的维度，这导致了系统的价值最终趋降为零。

## BEHAVIOR 行为价值

The first value of software is its behavior. Programmers are hired to make machines behave in a way that makes or saves money for the stakeholders. We do this by helping the stakeholders develop a functional specification, or requirements document. Then we write the code that causes the stakeholder’s machines to satisfy those requirements.

> 软件系统的行为是其最直观的价值维度。程序员的工作就是让机器按照某种指定方式运转，给系统的使用者创造或者提高利润。程序员们为了达到这个目的，往往需要帮助系统使用者编写一个对系统功能的定义，也就是需求文档。然后，程序员们再把需求文档转化为实际的代码。

When the machine violates those requirements, programmers get their debuggers out and fix the problem.

> 当机器出现异常行为时，程序员要负责调试，解决这些问题。

Many programmers believe that is the entirety of their job. They believe their job is to make the machine implement the requirements and to fix any bugs. They are sadly mistaken.

> 大部分程序员认为这就是他们的全部工作。他们的工作是且仅是：按照需求文档编写代码，并且修复任何 Bug。这真是大错特错。

## ARCHITECTURE 架构价值

The second value of software has to do with the word “software”—a compound word composed of “soft” and “ware.” The word “ware” means “product”; the word “soft”… Well, that’s where the second value lies.

> 软件系统的第二个价值维度，就体现在软件这个英文单词上：software。“ware” 的意思是“产品”，而 “soft” 的意思，不言而喻，是指软件的灵活性。

Software was invented to be “soft.” It was intended to be a way to easily change the behavior of machines. If we’d wanted the behavior of machines to be hard to change, we would have called it hardware.

> 软件系统必须保持灵活。软件发明的目的，就是让我们可以以一种灵活的方式来改变机器的工作行为。对机器上那些很难改变的工作行为，我们通常称之为硬件（hardware）。

To fulfill its purpose, software must be soft—that is, it must be easy to change. When the stakeholders change their minds about a feature, that change should be simple and easy to make. The difficulty in making such a change should be proportional only to the scope of the change, and not to the shape of the change.

> 为了达到软件的本来目的，软件系统必须够“软” 也就是说，软件应该容易被修改。当需求方改变需求的时候，随之所需的软件变更必须可以简单而方便地实现。变更实施的难度应该和变更的范畴（scope）成等比关系，而与变更的具体形状（shape）无关。

It is this difference between scope and shape that often drives the growth in software development costs. It is the reason that costs grow out of proportion to the size of the requested changes. It is the reason that the first year of development is much cheaper than the second, and the second year is much cheaper than the third.

> 需求变更的范畴与形状，是决定对应软件变更实施成本高低的关键。这就是为什么有的代码变更的成本与其实现的功能改变不成比例。这也是为什么第二年的研发成本比第一年的高很多，第三年又比第二年更高。

From the stakeholders’ point of view, they are simply providing a stream of changes of roughly similar scope. From the developers’ point of view, the stakeholders are giving them a stream of jigsaw puzzle pieces that they must fit into a puzzle of ever-increasing complexity. Each new request is harder to fit than the last, because the shape of the system does not match the shape of the request.

> 从系统相关方（Stakeholder）的角度来看，他们所提出的一系列的变更需求的范畴都是类似的，因此成本也应该是固定的。但是从研发者角度来看，系统用户持续不断的变更需求就像是要求他们不停地用一堆不同形状的拼图块，拼成一个新的形状。整个拼图的过程越来越困难，因为现有系统的形状永远和需求的形状不一致.

I’m using the word “shape” here in a unconventional way, but I think the metaphor is apt. Software developers often feel as if they are forced to jam square pegs into round holes.

> 我们在这里使用了“形状”这个词，这可能不是该词的标准用法，但是其寓意应该很明确。毕竟，软件工程师们经常会觉得自己的工作就是把方螺丝拧到圆螺丝孔里面。

The problem, of course, is the architecture of the system. The more this architecture prefers one shape over another, the more likely new features will be harder and harder to fit into that structure. Therefore architectures should be as shape agnostic are practical.

> 问题的实际根源当然就是系统的架构设计。如果系统的架构设计偏向某种特定的“形状”，那么新的变更就会越来越难以实施。所以，好的系统架构设计应该尽可能做到与“形状”无关。

## THE GREATER VALUE 哪个价值维度更重要

Function or architecture? Which of these two provides the greater value? Is it more important for the software system to work, or is it more important for the software system to be easy to change?

> 那么，究竟是系统行为更重要，还是系统架构的灵活性更重要？哪个价值更大?系统正常工作更重要，还是系统易于修改更重要？

If you ask the business managers, they’ll often say that it’s more important for the software system to work. Developers, in turn, often go along with this attitude. But it’s the wrong attitude. I can prove that it is wrong with the simple logical tool of examining the extremes.

> 如果这个问题由业务部门来回答，他们通常认为系统正常工作很重要。系统开发人员常常也就跟随采取了这种态度。但是这种态度是错误的。下面我就用简单的逻辑推导来证明这个态度的错误性。

- If you give me a program that works perfectly but is impossible to change, then it won’t work when the requirements change, and I won’t be able to make it work. Therefore the program will become useless.
- If you give me a program that does not work but is easy to change, then I can make it work, and keep it working as requirements change. Therefore the program will remain continually useful.

---

> - 如果某程序可以正常工作，但是无法修改，那么当需求变更的时候它就不再能够正常工作了，我们也无法通过修改让它能继续正常工作。因此，这个程序的价值将成为 0。
> - 如果某程序目前无法正常工作，但是我们可以很容易地修改它，那么将它改好，并且随着需求变化不停地修改它，都应该是很容易的事。因此，这个程序会持续产生价值。

You may not find this argument convincing. After all, there’s no such thing as a program that is impossible to change. However, there are systems that are practically impossible to change, because the cost of change exceeds the benefit of change. Many systems reach that point in some of their features or configurations.

> 当然，上面的逻辑论断可能不足以说服大家，修改的。但是，现实中有一些系统确实无法更改，因为其变更实施的成本会远远超过变更带来的价值。你在实际工作中一定遇到过很多这样的例了。

If you ask the business managers if they want to be able to make changes, they’ll say that of course they do, but may then qualify their answer by noting that the current functionality is more important than any later flexibility. In contrast, if the business managers ask you for a change, and your estimated costs for that change are unaffordably high, the business managers will likely be furious that you allowed the system to get to the point where the change was impractical.

> 如果你问业务部门，是否想要能够变更需求，他们的回答一般是肯定的，而且他们会增加一句：完成现在的功能比实现未来的灵活度更重要。但讽刺的是，如果事后业务部门提出了一项需求，而你的预估工作量大大超出他们的预期，这帮家伙通常会对你放任系统混乱到无法变更的状态而勃然大怒。

## EISENHOWER’S MATRIX 艾森豪威尔矩阵

Consider President Dwight D. Eisenhower’s matrix of importance versus urgency (Figure 2.1). Of this matrix, Eisenhower said:

> 我们来看美国前总统艾森豪威尔的紧急/重要矩阵（参见图 2.1），面对这个矩阵，艾森豪威尔曾说道：

I have two kinds of problems, the urgent and the important. The urgent are not important, and the important are never urgent.1

> 我有两种难题：紧急的和重要的，而紧急的难题永远是不重要的，重要的难题永远是不紧急的。

<Figures figure="2-1">Eisenhower matrix</Figures>

There is a great deal of truth to this old adage. Those things that are urgent are rarely of great importance, and those things that are important are seldom of great urgency.

> 虽然老调重弹，但其中的道理依然成立。确实，紧急的事情常常没那么重要，而重要的事情则似乎永远也排不上优先级。

The first value of software—behavior—is urgent but not always particularly important.

> 软件系统的第一个价值维度：系统行为，是紧急的，但是并不总是特别重要。

The second value of software—architecture—is important but never particularly urgent.

> 软件系统的第二个价值维度：系统架构，是重要的，但是并不总是特别紧急。

Of course, some things are both urgent and important. Other things are not urgent and not important. Ultimately, we can arrange these four couplets into priorities:

> 当然，我们会有些重要且紧急的事情，也会有一些事情不重要也不紧急。最终我们应将这四类事情进行如下排序：

1. Urgent and important
2. Not urgent and important
3. Urgent and not important
4. Not urgent and not important

---

> 1. 重要且紧急
> 2. 重要不紧急
> 3. 不重要但紧急
> 4. 不重要且不紧急

Note that the architecture of the code—the important stuff—is in the top two positions of this list, whereas the behavior of the code occupies the first and third positions.

> 在这里你可以看到，软件的系统架构——那些重要的事情——占据了该列表的前两位，而系统行为——那些紧急的事情——只占据了第一和第三位。

The mistake that business managers and developers often make is to elevate items in position 3 to position 1. In other words, they fail to separate those features that are urgent but not important from those features that truly are urgent and important. This failure then leads to ignoring the important architecture of the system in favor of the unimportant features of the system.

> 业务部门与研发人员经常犯的共同错误就是将第三优先级的事情提到第一优先级去做。换句话说，他们没有把真正紧急并且重要的功能和紧急但是不重要的功能分开。这个错误导致了重要的事被忽略了，重要的系统架构问题让位给了不重要的系统行为功能。

The dilemma for software developers is that business managers are not equipped to evaluate the importance of architecture. That’s what software developers were hired to do. Therefore it is the responsibility of the software development team to assert the importance of architecture over the urgency of features.

> 但研发人员还忘了一点，那就是业务部门原本就是没有能力评估系统架构的重要程度的，这本来就应该是研发人员自己的工作职责！所以，平衡系统架构的重要性与功能的紧急程度这件事，是软件研发人员自己的职责。

## FIGHT FOR THE ARCHITECTURE 为好的软件架构而持续斗争

Fulfilling this responsibility means wading into a fight—or perhaps a better word is “struggle.” Frankly, that’s always the way these things are done. The development team has to struggle for what they believe to be best for the company, and so do the management team, and the marketing team, and the sales team, and the operations team. It’s always a struggle.

> 为了做好上述职责，软件团队必须做好斗争的准备——或者说“长期抗争”的准备。现状就是这样。研发团队必须从公司长远利益出发与其他部门抗争，这和管理团队的工作一样，甚至市场团队、销售团队、运营团队都是这样。公司内部的抗争本来就是无止境的。

Effective software development teams tackle that struggle head on. They unabashedly squabble with all the other stakeholders as equals. Remember, as a software developer, you are a stakeholder. You have a stake in the software that you need to safeguard. That’s part of your role, and part of your duty. And it’s a big part of why you were hired.

> 有成效的软件研发团队会迎难而上，毫不掩饰地与所有其他的系统相关方进行平等的争吵。请记住，作为—名软件开发人员，你也是相关者之一。软件系统的可维护性需要由你来保护，这是你角色的一部分，也是你职责中不可缺少的一部分。公司雇你的很大一部分原因就是需要有人来做这件事。

This challenge is doubly important if you are a software architect. Software architects are, by virtue of their job description, more focused on the structure of the system than on its features and functions. Architects create an architecture that allows those features and functions to be easily developed, easily modified, and easily extended.

> 如果你是软件架构师，那么这项工作就加倍重要了。软件架构师这一职责本身就应更关注系统的整体结构，而不是具体的功能和系统行为的实现，软件架构师必须创建出一个可以让功能实现起来更容易、修改起来更简单、扩展起来更轻松的软件架构。

Just remember: If architecture comes last, then the system will become ever more costly to develop, and eventually change will become practically impossible for part or all of the system. If that is allowed to happen, it means the software development team did not fight hard enough for what they knew was necessary.

> 请记住：如果忽视软件架构的价值，系统将会变得越来越难以维护，终会有一天，系统将会变得再也无法修改。如果系统变成了这个样子，那么说明软件开发团队没有和需求方做足够的抗争，没有完成自己应尽的职责。
