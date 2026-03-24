Java是由Sun Microsystems公司于1995年5月推出的Java面向对象程序设计语言和Java平台的总称。由James Gosling和同事们共同研发，并在1995年正式推出。
Java分为三个体系：
JavaSE（J2SE）（Java2 Platform Standard Edition，java平台标准版）
JavaEE(J2EE)(Java 2 Platform,Enterprise Edition，java平台企业版)
JavaME(J2ME)(Java 2 Platform Micro Edition，java平台微型版)。
2005年6月，JavaOne大会召开，SUN公司公开Java SE 6。此时，Java的各种版本已经更名以取消其中的数字"2"：J2EE更名为Java EE, J2SE更名为Java SE，J2ME更名为Java ME。
主要特性
Java语言是简单的：
Java语言的语法与C语言和C++语言很接近，使得大多数程序员很容易学习和使用。另一方面，Java丢弃了C++中很少使用的、很难理解的、令人迷惑的那些特性，如操作符重载、多继承、自动的强制类型转换。特别地，Java语言不使用指针，而是引用。并提供了自动的废料收集，使得程序员不必为内存管理而担忧。
Java语言是面向对象的：
Java语言提供类、接口和继承等面向对象的特性，为了简单起见，只支持类之间的单继承，但支持接口之间的多继承，并支持类与接口之间的实现机制（关键字为implements）。Java语言全面支持动态绑定，而C++语言只对虚函数使用动态绑定。总之，Java语言是一个纯的面向对象程序设计语言。
Java语言是分布式的：
Java语言支持Internet应用的开发，在基本的Java应用编程接口中有一个网络应用编程接口（java net），它提供了用于网络应用编程的类库，包括URL、URLConnection、Socket、ServerSocket等。Java的RMI（远程方法激活）机制也是开发分布式应用的重要手段。
Java语言是健壮的：
Java的强类型机制、异常处理、垃圾的自动收集等是Java程序健壮性的重要保证。对指针的丢弃是Java的明智选择。Java的安全检查机制使得Java更具健壮性。
Java语言是安全的：
Java通常被用在网络环境中，为此，Java提供了一个安全机制以防恶意代码的攻击。除了Java语言具有的许多安全特性以外，Java对通过网络下载的类具有一个安全防范机制（类ClassLoader），如分配不同的名字空间以防替代本地的同名类、字节代码检查，并提供安全管理机制（类SecurityManager）让Java应用设置安全哨兵。
Java语言是体系结构中立的：
Java程序（后缀为java的文件）在Java平台上被编译为体系结构中立的字节码格式（后缀为class的文件），然后可以在实现这个Java平台的任何系统中运行。这种途径适合于异构的网络环境和软件的分发。
Java语言是可移植的：
这种可移植性来源于体系结构中立性，另外，Java还严格规定了各个基本数据类型的长度。Java系统本身也具有很强的可移植性，Java编译器是用Java实现的，Java的运行环境是用ANSI C实现的。
Java语言是解释型的：
如前所述，Java程序在Java平台上被编译为字节码格式，然后可以在实现这个Java平台的任何系统中运行。在运行时，Java平台中的Java解释器对这些字节码进行解释执行，执行过程中需要的类在联接阶段被载入到运行环境中。
Java是高性能的：
与那些解释型的高级脚本语言相比，Java的确是高性能的。事实上，Java的运行速度随着JIT(Just-In-Time）编译器技术的发展越来越接近于C++。
Java语言是多线程的：
在Java语言中，线程是一种特殊的对象，它必须由Thread类或其子（孙）类来创建。通常有两种方法来创建线程：其一，使用型构为Thread(Runnable)的构造子将一个实现了Runnable接口的对象包装成一个线程，其二，从Thread类派生出子类并重写run方法，使用该子类创建的对象即为线程。值得注意的是Thread类已经实现了Runnable接口，因此，任何一个线程均有它的run方法，而run方法中包含了线程所要运行的代码。线程的活动由一组方法来控制。Java语言支持多个线程的同时执行，并提供多线程之间的同步机制（关键字为synchronized）。
Java语言是动态的：
Java语言的设计目标之一是适应于动态变化的环境。Java程序需要的类能够动态地被载入到运行环境，也可以通过网络来载入所需要的类。这也有利于软件的升级。另外，Java中的类有一个运行时刻的表示，能进行运行时刻的类型检查。
发展历史
1995年5月23日，Java语言诞生
1996年1月，第一个JDK-JDK1.0诞生
1996年4月，10个最主要的操作系统供应商申明将在其产品中嵌入JAVA技术
1996年9月，约8.3万个网页应用了JAVA技术来制作
1997年2月18日，JDK1.1发布
1997年4月2日，JavaOne会议召开，参与者逾一万人，创当时全球同类会议规模之纪录
1997年9月，JavaDeveloperConnection社区成员超过十万
1998年2月，JDK1.1被下载超过2,000,000次
1998年12月8日，JAVA2企业平台J2EE发布
1999年6月，SUN公司发布Java的三个版本：标准版（JavaSE,以前是J2SE）、企业版（JavaEE以前是J2EE）和微型版（JavaME，以前是J2ME）
2000年5月8日，JDK1.3发布
2000年5月29日，JDK1.4发布
2001年6月5日，NOKIA宣布，到2003年将出售1亿部支持Java的手机
2001年9月24日，J2EE1.3发布
2002年2月26日，J2SE1.4发布，自此Java的计算能力有了大幅提升
2004年9月30日18:00PM，J2SE1.5发布，成为Java语言发展史上的又一里程碑。为了表示该版本的重要性，J2SE1.5更名为Java SE 5.0
2005年6月，JavaOne大会召开，SUN公司公开Java SE 6。此时，Java的各种版本已经更名，以取消其中的数字"2"：J2EE更名为Java EE，J2SE更名为Java SE，J2ME更名为Java ME
2006年12月，SUN公司发布JRE6.0
2009年04月20日，甲骨文74亿美元收购Sun。取得java的版权。
2010年11月，由于甲骨文对于Java社区的不友善，因此Apache扬言将退出JCP[4]。
2011年7月28日，甲骨文发布java7.0的正式版。
2014年3月18日，Oracle公司发表Java SE 8。
Java开发工具
Java语言尽量保证系统内存在1G以上，其他工具如下所示：
Linux 系统、Mac OS 系统、Windows 95/98/2000/XP，WIN 7/8系统。
Java JDK 7、8……
Notepad 编辑器或者其他编辑器。
IDE：Eclipse
安装好以上的工具后，我们就可以输出Java的第一个程序"Hello World！"
public class HelloWorld {
    public static void main(String []args) {
        System.out.println("Hello World");
    }
}

Java语言其实是有个曾用名的~叫Oak，而且起这个名字的时候也是很随心的，只是因为看到了窗口外的一颗橡树（只是因为面向窗外多看了你一眼~），所以就叫为Oak，但Oak这个名字已经被注册。最后他们以Java这个名字命名了这个语言，据说是Sun公司的程序猿们都很喜欢喝咖啡，而且对爪哇岛的一种咖啡印象很深，所以就有了Java这个经典的名字和咖啡的图标。
"I named Java," said Kim Polese, then the Oak product manager and now CEO of Marimba Inc. "I spent a lot of time and energy on naming Java because I wanted to get precisely the right name. I wanted something that reflected the essence of the technology: dynamic, revolutionary, lively, fun. Because this programming language was so unique, I was determined to avoid nerdy names. I also didn't want anything with 'Net' or 'Web' in it, because I find those names very forgettable. I wanted something that was cool, unique, and easy to spell and fun to say.yin'yong


在正式学习java并安装配置开发环境之前，有必要了解一些有关Java的专业术语：
JDK（Java Development Kit ）：编写Java程序的程序员使用的软件
JRE（Java Runtime Environment）：运行Java程序的用户使用的软件
Server JRE （Java SE Runtime Environment）：服务端使用的 Java 运行环境
SDK（Software Development Kit）：软件开发工具包，在Java中用于描述1998年~2006年之间的JDK
DAO（Data Access Object）：数据访问接口，数据访问，顾名思义就是与数据库打交道
MVC（Model View Controller）：模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范，用于组织代码用一种业务逻辑和数据显示分离的方法
JRE 与 Server JRE 区别, 以下是官网中的说明:
Software Developers: JDK (Java SE Development Kit). For Java Developers. Includes a complete JRE plus tools for developing, debugging, and monitoring Java applications.
Administrators running applications on a server:  Server JRE (Server Java Runtime Environment) For deploying Java applications on servers. Includes tools for JVM monitoring and tools commonly required for server applications, but does not include browser integration (the Java plug-in), auto-update, nor an installer.



补充下面向对象程序设计的 3 个主要特征：封装性、继承性、多态性。
封装性（encapsulation）：封装是一种信息隐蔽技术，它体现于类的说明，是对象的重要特性。封装使数据和加工该数据的方法（函数）封装为一个整体，以实现独立性很强的模块，使得用户只能见到对象的外特性（对象能接受哪些消息，具有哪些处理能力），而对象的内特性（保存内部状态的私有数据和实现加工能力的算法）对用户是隐蔽的。封装的目的在于把对象的设计者和对象的使用者分开，使用者不必知晓其行为实现的细节，只须用设计者提供的消息来访问该对象。
继承性：继承性是子类共享其父类数据和方法的机制。它由类的派生功能体现。一个类直接继承其他类的全部描述，同时可修改和扩充。继承具有传递性。继承分为单继承（一个子类有一父类）和多重继承（一个类有多个父类）。类的对象是各自封闭的，如果没继承性机制，则类的对象中的数据、方法就会出现大量重复。继承不仅支持系统的可重用性，而且还促进系统的可扩充性。
多态性：对象根据所接收的消息而做出动作。同一消息被不同的对象接受时可产生完全不同的行动，这种现象称为多态性。利用多态性用户可发送一个通用的信息，而将所有的实现细节都留给接受消息的对象自行决定，如是，同一消息即可调用不同的方法。例如：同样是 run 方法，飞鸟调用时是飞，野兽调用时是奔跑。多态性的实现受到继承性的支持，利用类继承的层次关系，把具有通用功能的协议存放在类层次中尽可能高的地方，而将实现这一功能的不同方法置于较低层次，这样，在这些低层次上生成的对象就能给通用消息以不同的响应。在 OOPL 中可通过在派生类中重定义基类函数（定义为重载函数或虚函数）来实现多态性。
