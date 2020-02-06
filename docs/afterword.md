# AFTERWORD 后序

My professional career as a software developer began in the 1990s, at a time when the dinosaurs of Big Architecture ruled the world. To get ahead, you had to learn about objects and components, about design patterns, and about the Unified Modeling Language (and its precursors).

> 我的软件工程师生涯开始于 20 世纪 90 年代，那是一个恐龙级大型架构统治世界的时代。要想在那样的时代获得一席之地，我们必须学会对象及其组件、设计模式、统一建模语言（包括其前身）的相关知识。

Projects—and boy, should we rue the day when we decided to call them that?—started with long design phases, where detailed blueprints for our systems were laid out by “senior” programmers for more “junior” programmers to follow. Which, of course, they didn’t. Ever.

> 现在想起来，或许真的可以考虑把我们那段日子所做的事情叫作“童子军项目”。每个项目的开头都会有一段长长的设计阶段，以便等那些“高级”程序员为一些跟随他们的、较“低级”的程序员制订好系统的设计蓝图，当然，这些“高级”程序员似乎永远完不成这件事。

And so it was that, after rising to the lofty ranks of “software architect”—and then “lead architect,” “chief architect,” “Lord Architect of the Privy Council,” and all the other highfalutin titles we gave ourselves back in the day—I seemed doomed to spend my days connecting boxes with arrows and coding with PowerPoint, and having barely any impact on the real code itself.

> 于是乎，做这件事的人被升级到了“软件架构师”，接着是“首席架构师”“总架构师”“枢密院首席架构师”以及其他各种高不可言的头衔，最终，我们还是让一切回到了原点。而我似乎注定要把时间花在画那些带箭头的盒子和编写 PowerPoint 的事情上，而这些事对真实代码的影响近乎为零。

It struck me then that this was nonsense; every line of code contains at least one design decision, and therefore anyone who writes code has a much greater impact on the quality of the software than a PowerPoint jockey like me ever could.

> 这让我无比受挫，每一行代码本身都至少包含了一条设计决策，任何一个写代码的家伙对软件质量的影响都远在我这个 PowerPoint 专业户之上。

And then, thankfully, the Agile Software Development revolution arrived and put architects like me out of our misery. I’m a programmer. I like programming. And the best way I’ve found to have a positive impact on code is to write it.

> 幸运的是，接下来发生的敏捷软件开发革命终于让我们这些架构师脱离了苦海。毕竟我是一名程序员，喜欢的是编程。而且我也发现影响软件质量最好的方法还是后序编写代码。

The dinosaurs of Big Architecture—typically to be found wandering the primeval plains of Big Process—were wiped out by the asteroid of Extreme Programming. And it came as a blessed relief.

> 这些大型架构像恐龙一样在大进程式的原始平原上游荡，然后被一颗叫作“敏捷开发”的小行星灭绝了，真是老天开眼啊！

Development teams were set free to focus on what matters and to concentrate their efforts on things that add value. Instead of waiting weeks or months for a Big Architecture document so they could dutifully ignore it and write the code they were going to write anyway, teams could just agree to a test with their customer, have a quick design session to get their bearings, and then write the code they were going to write anyway.

> 现在！开发团队可以自由地专注于真正重要的内容，并思考如何为他们所做的事情添加更多价值了。也就是说，他们现在再也不需要浪费几周或几个月的时间等待那些大型架构的设计文档了，他们可以名正言顺地忽略这些设计，直接按照自己的想法编写代码。然后，开发团队只需要安排客户直接参与测试，并在快速设计会议上得到用户的支持，然后他们就可以继续写代码了。

The Big Architecture dinosaurs were gone, and small, nimble Just-Enough-Design-Up-Front-with-Plenty-of-Refactoring mammals replaced us. Software architecture became responsive.

> 大型架构像恐龙一样消失了，前期设计够用、后期进行大量重构的设计思想如小巧玲珑的哺乳动物一样代替了它们，软件架构迎来了响应式设计的时代。

Well, that was the theory, anyway.

> 好吧，无论如何，以上这些都属于理论。

The problem with leaving architecture to programmers is that programmers have to be able to think like architects. It turns out that not all of the stuff we learned during the Big Architecture era was of no value. The way that software is structured can have a profound impact on our ability to keep adapting and evolving it, even in the short term.

> 把架构设计工作交给程序员的问题就是，程序员必须学会像架构师一样思考问题。事实证明，我们在大型架构时代学到的东西也并非一文不值。其设计软件结构的方法依然在我们保持软件的适应和扩展能力方面有着深远的影响，即使在短期开发中也是如此。

Every design decision needs to leave the door open for future changes. Like playing pool, each shot isn’t just about sinking that ball; it’s also about lining up the next shot. Writing working code that doesn’t block future code is a non-trivial skillset. It takes years to master.

> 我们的每一项设计决策都必须为未来的变化敞开大门。就像打台球一样，我们的每一杆击球都不只是为了要把球打进洞里，它也事关下一杆击球时所在的位置。让我们现在编写的代码不对未来的代码产生阻碍是一项非常重要的技能，通常需要花费多年的时间才能掌握。

And so, the era of Big Architecture gave way to a new era of Fragile Architecture: designs that grew quickly to deliver value sooner, but that made sustaining that pace of innovation very difficult.

> 因此，在大型架构时代让位给易碎型架构（Fragile Architecture）的新时代之后，虽然设计创造的价值得到了快速发展，但这也让我们想要持续创新变得举步维艰。

It’s all very well talking about “embracing change,” but if it costs \$500 to change a line of code, change ain’t happening.

> 这里所有关于“拥抱变革"的讨论都很美好，但如果每修改一行代码的代价是 500 美元的话，这些变革恐怕根本就不会发生。

Bob Martin’s original papers on OO design principles had a big impact on me as a young software developer. I looked at my code with a fresh perspective, and noticed problems that—until then—never seemed like problems to me.

> 当我还是一名年轻的软件开发者的时候，Bob Martin 那篇关于面向对象设计原则的论文对我产生了很大的影响，他让我以一种全新的视觉审视了自己的代码，并发现了其中的问题，在那之前，这些问题对我来说似乎从来都不是问题。

Now you’ve seen how it’s possible to write code that delivers value today without blocking future value tomorrow; the onus is on you to put in the practice so you can apply these principles to your own code.

> 现在，你们也看到了如何才能写出既能提供当前价值，又不会阻碍未来价值的代码，期待你们也能亲自实践这些设计原则，并将其应用到自己的代码中。

Like riding a bicycle, you can’t master software design just by reading about it. To get the best from a book like this, you need to get practical. Analyze your code and look for the kinds of problems Bob highlights, then practice refactoring the code to fix these problems. If you’re new to the refactoring discipline, then this will be a doubly valuable experience.

> 就像学习骑自行车一样，单纯靠阅读是无法掌握软件设计方法的。为了让我们从这本书中的获益最大化，亲自实践是必不对少的。我们需要亲自分析自己的代码，查看其中是否存在 Bob 所强调的各种问题，然后在重构代码的实践中修复它们。如果你在重构方面是个新手，那么你将从本书收获双重的宝贵学习经验。

Learn how you can incorporate design principles and Clean Architecture into your development processes, so that new code is less likely to cause pain. For example, if you’re doing TDD, make a point of having a little design review after passing each test, and clean up as you go. (It’s way cheaper than fixing bad designs later.) Perhaps, before you commit code, ask a colleague to review it with you. And look into the possibility of adding a code “quality gate” to your build pipeline as a last line of defense against unclean architecture. (And if you don’t have a build pipeline, maybe it’s time to create one?)

> 我们得学会将书中的这些设计原则以及整洁架构融入自己的开发过程中，这可以大大减少新代码给我们带来的麻烦。例如，如果我们现在正在进行一次测试驱动的开发（TDD），就可以在每一次测试之后做一些设计审查，并及时整理我们的设计（这比事后再修复这些不良设计要省时省力得多）。或者，在提交代码之前，我们也可以邀请同事一起审查代码。另外，我们也可以研究在构建软件的管道中引入一些代码的“质量把关”机制，以作为防止架构设计不够清晰分明的最后一道防线。（如果你还没有设置构建软件的管道，现在是否可以考虑设置一个了？）

Most important of all is to talk about Clean Architecture. Talk about it with your team. Talk about it with the wider developer community. Quality is everybody’s business, and it’s important to reach a consensus about the difference between good and bad architecture.

> 这一切的重中之重就是要讨论架构的整洁性，我们要在自己的团队中讨论它，在各种开发者社区中讨论它。保证软件质量是我们每个人的责任，在区分架构的好坏标准上达成共识是一件非常重要的事。

Be mindful that most software developers are not very architecture-aware, just as I wasn’t 25 years ago. More experienced developers clued me into it. Once you’ve wrapped your head around Clean Architecture, take the time to wrap someone else’s head around it. Pay it forward.

> 我们必须意识到，大部分的软件开发者是没有太多架构意识的。就像 25 年前的我一样，是更有经验的开发者让我了解了架构。一旦我们一头扎进了整洁架构中，就会花时间围绕着它思考问题，并玩转它。

While the technology landscape for developers evolves continuously, foundational principles like the ones described here rarely change. I have little doubt that this is a book that’s going to stay on your shelf for many years after your copy of Lean JSON Cloud NoSQL for Dummies has ended up in a yard sale. I hope it does for your Design Fu what Bob’s original papers did for mine.

> 虽然开发者所在的技术环境一直在不断地发展，但本书所讨论的这些基本设计原则几乎不会发生变化。我一点都不怀疑在你们把 Lean JSON Cloud NoSQL for Dummies 当废纸卖掉很多年之后，这本书会还留在你们的书架上。我希望这本书会 对你们有很大的帮助，就像 Bob 那篇原创论文对我的帮助一样。

The real journey starts here.

> 愿你们真正的编程设计之旅从这里开始！

—Jason Gorman

January 26, 2017

> ——Jason Gorman
>
> 2017 年 1 月 26 日
