# AFTERWORD

My professional career as a software developer began in the 1990s, at a time when the dinosaurs of Big Architecture ruled the world. To get ahead, you had to learn about objects and components, about design patterns, and about the Unified Modeling Language (and its precursors).

Projects—and boy, should we rue the day when we decided to call them that?—started with long design phases, where detailed blueprints for our systems were laid out by “senior” programmers for more “junior” programmers to follow. Which, of course, they didn’t. Ever.

And so it was that, after rising to the lofty ranks of “software architect”—and then “lead architect,” “chief architect,” “Lord Architect of the Privy Council,” and all the other highfalutin titles we gave ourselves back in the day—I seemed doomed to spend my days connecting boxes with arrows and coding with PowerPoint, and having barely any impact on the real code itself.

It struck me then that this was nonsense; every line of code contains at least one design decision, and therefore anyone who writes code has a much greater impact on the quality of the software than a PowerPoint jockey like me ever could.

And then, thankfully, the Agile Software Development revolution arrived and put architects like me out of our misery. I’m a programmer. I like programming. And the best way I’ve found to have a positive impact on code is to write it.

The dinosaurs of Big Architecture—typically to be found wandering the primeval plains of Big Process—were wiped out by the asteroid of Extreme Programming. And it came as a blessed relief.

Development teams were set free to focus on what matters and to concentrate their efforts on things that add value. Instead of waiting weeks or months for a Big Architecture document so they could dutifully ignore it and write the code they were going to write anyway, teams could just agree to a test with their customer, have a quick design session to get their bearings, and then write the code they were going to write anyway.

The Big Architecture dinosaurs were gone, and small, nimble Just-Enough-Design-Up-Front-with-Plenty-of-Refactoring mammals replaced us. Software architecture became responsive.

Well, that was the theory, anyway.

The problem with leaving architecture to programmers is that programmers have to be able to think like architects. It turns out that not all of the stuff we learned during the Big Architecture era was of no value. The way that software is structured can have a profound impact on our ability to keep adapting and evolving it, even in the short term.

Every design decision needs to leave the door open for future changes. Like playing pool, each shot isn’t just about sinking that ball; it’s also about lining up the next shot. Writing working code that doesn’t block future code is a non-trivial skillset. It takes years to master.

And so, the era of Big Architecture gave way to a new era of Fragile Architecture: designs that grew quickly to deliver value sooner, but that made sustaining that pace of innovation very difficult.

It’s all very well talking about “embracing change,” but if it costs $500 to change a line of code, change ain’t happening.

Bob Martin’s original papers on OO design principles had a big impact on me as a young software developer. I looked at my code with a fresh perspective, and noticed problems that—until then—never seemed like problems to me.

Now you’ve seen how it’s possible to write code that delivers value today without blocking future value tomorrow; the onus is on you to put in the practice so you can apply these principles to your own code.

Like riding a bicycle, you can’t master software design just by reading about it. To get the best from a book like this, you need to get practical. Analyze your code and look for the kinds of problems Bob highlights, then practice refactoring the code to fix these problems. If you’re new to the refactoring discipline, then this will be a doubly valuable experience.

Learn how you can incorporate design principles and Clean Architecture into your development processes, so that new code is less likely to cause pain. For example, if you’re doing TDD, make a point of having a little design review after passing each test, and clean up as you go. (It’s way cheaper than fixing bad designs later.) Perhaps, before you commit code, ask a colleague to review it with you. And look into the possibility of adding a code “quality gate” to your build pipeline as a last line of defense against unclean architecture. (And if you don’t have a build pipeline, maybe it’s time to create one?)

Most important of all is to talk about Clean Architecture. Talk about it with your team. Talk about it with the wider developer community. Quality is everybody’s business, and it’s important to reach a consensus about the difference between good and bad architecture.

Be mindful that most software developers are not very architecture-aware, just as I wasn’t 25 years ago. More experienced developers clued me into it. Once you’ve wrapped your head around Clean Architecture, take the time to wrap someone else’s head around it. Pay it forward.

While the technology landscape for developers evolves continuously, foundational principles like the ones described here rarely change. I have little doubt that this is a book that’s going to stay on your shelf for many years after your copy of Lean JSON Cloud NoSQL for Dummies has ended up in a yard sale. I hope it does for your Design Fu what Bob’s original papers did for mine.

The real journey starts here.

—Jason Gorman
January 26, 2017