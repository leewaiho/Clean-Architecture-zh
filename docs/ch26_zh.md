第26章
Main组件架构整洁之道
在所有的系统中，都至少要有一个组件来负责创建、协调、监督其他组件卧 
转。我们将其称为Mmin组件。 戈
最细节化的部分
Main组件是系统中最细节化的部分—— 也就是底层的策略，它是整个系统的中 
始点。在整个系统中，除了操作系统不会再有其他组件依赖于它了。Main组件的任 务是创建所有的工厂类、策略类以及其他的全局设施，并最终将系统的控制权转旷 
给最高抽象层的代码来处理。
Main组件中的依赖关系通常应该由依赖注入框架来注入。在该框架将依赖关系 注入到Main组件之后，Main组件就应该可以在不依赖于该框架的情况下自行分配 
这些依赖关系了。
请记住，Main组件是整个系统中细节信息最多的组件。 下面，我们来看一下最新版Hunt the Wumpus游戏的MaS 组件。请注意这里加 载字符串的方法，这些字符串全都是我们不想让游戏主体代码了解的内容°
p u b l l c c l a s s M a i n implements HtwMessageReceiver 
private static HuntTheWumpus game; private static int hitPoints = 10•
private static private static “brightJ
f l n d l L 1 S t < S t r i n g > caverns = new A r r a y L i s t o () final String[] environments = new String[]{
"humid”, H dryH , M creepyH , "ugly", H foggy11 z “hot", "cold”, ,fdraf ty", n dreadful
204Pr i v a t e static final String[] "round"r
shapes = new String门 {
｝；
square11, H ovaln f H irregularn , "long"f craggy11 z n roughn , H narrown
private static final String[] cavernTypes "cavern11 A H roomn z H chamberH z n catacombH z flcrevassen z "cell", H tunnel11, npassagewayn / "hall", H expanseH
};
private static final String[] adornments = n smelling of sulfurn , "with engravings on the walls11, "with a bumpy floorf,,
IV IV
f
"littered with garbage", H spattered with guano'1 f "with piles of Wumpus droppings*', "with bones scattered around", nwith a corpse on the floor11 / H that seems to vibrate'J "that feels stuffy"> n that fills you with dread11
new String[]
new String[]这里是如何使用HtwFactory来构建这个游
・ I htw. game . HuntTheWumpusFacade 的类亂 
组件还多，变更也更频繁，因此这样做可以避免丁
接下来是main函数。请注意 我们可以看到这里传入了 一个名为 
于这个类中的细节信息比Main ； 个类的变更导致Main组件的重新编译和重新部署。 
public static void main(String[] args) throws lOException { 
g a m e
 = HtwFactory. makeGame (^htw. game . HuntTheWumpusFacade», new Main ())；
createMap();
Buf feredReader br = new Buf feredReader (new InputstrearnRea.der (System.ln)). 
game.makeRestCommand() •execute (); while (true) {
System, out • printin (game . get Player Cavern ()); System ・o ut. print In (nHealth : n + hit Points + n arrows : n + game.getQuiver ()); HuntTheWumpus .Command c = game .makeRestCommand (); System.out.printin(n>n )； String command = br.readLine ();
if (command.equalslgnoreCase(nen )) c = game.makeMoveCommand(EAST)； e l se if (command.equalslgnoreCase ( nwH ))
c = g^rne .makeMoveCommand (WEST)； e l s e if (command.equalsIgnoreCase(nnn )) c = game.makeMoveCommand(NORT且 )； else if (command.equalsIgnoreCase(n sn )) c = game.makeMoveCommand(SOUTH)； 匕丄上：㊀ i f (cornmanci. equals IgnoreCase ( M r n )) c = game.makeRestCommand()； e l s e if (command.equalsIgnoreCase(- s w h)) c = game.makeShootCommand(WEST)； e l s e 匚 丁 (command. equalsIgnoreCase ( "sL )) c 二 game.makeShootCommand(EAST)-els e (command.equalsIgnoreCase(”sn")) L yciinfe .makeShootCommand (NORTH) ■ e l s e 1 ('oinmanci. equalsIgnoreCase ("ss")) c _ 川匕.川& kg'hootCommand(SOUTH). e l s e if (commend, equa 丄slgnowcaseLq”))
206第 26章 Main组件
return;
c ・ execute ()；
}
}
, 你还应该注意到m ain函数中创建了输入数据流，并纳入了游戏的主循环。主 循环将负责处理简单的输入指令，但它会将具体的处理过程交给其他更高层次的组 
件来处理。
最后，Mmin组件还要负责生成整个游戏的地图。
private static void createMap() { int nCaverns = (int) (Math. random () * 30.0 + 10.0); while (nCaverns-- > 0) caverns.add(makeName())；
for (String cavern : caverns) { maybeConnectCavwrn(cavern, NORTH); maybeConnectCavern(cavern, SOUTH); maybeConnectCavern(cavern, EAST); maybeConnectCavern (cavern, WEST);
String playerCavern = anyCavern(); game.setPlayerCavern (playerCavern); game . setWumpusCavern (anyOther (playerCavern)); game . addBatCavern (anyOther (playerCavern))； game . addBatCavern (anyOther (playerCavern))； game . addBatCavern (anyOther (playerCavern))； game . addPitCavern (anyOther (playerCavern)), game . addPitCavern (anyOther (playerCavern))； game. addPitCavern (anyOther (playerCavern))；
game•setQuiver(5);
/ / 此处删除了大量代码架构整洁之道
我们在这里的重点是要说明Main组件是整个系统屮的一个底层模块，它外 整洁架构的最外圈，主要负山为系统加载所有必要的信息，然后再将控制权转;] 
系统的高层组件。
本章小结
Main组件也可以被视为应用程序的一个插件—— 这个插件负责设置起始状态、 配置信息、加载外部资源，最后将控制权转交给应用程序的其他高层组件。另外,' 
由于Main组件能以插件形式存在于系统中，因此我们可以为一个系统设计多个 
Mmin组件，让它们各自对应于不同的配置。
例如，我们既可以设计专门针对开发环境的Main组件，也可以设计专门针对 测试的或者生产环境的Main组件。除此之外，我们还可以针对要部署的国家、地 
区甚至客户设计不同的Mein组件。
当我们将Mmin组件视为一种插件时，用架构边界将它与系统其他部分隔离开 这件事，在系统的配置上是不是就变得更容易了呢？