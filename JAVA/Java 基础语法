一个Java程序可以认为是一系列对象的集合，而这些对象通过调用彼此的方法来协同工作。下面简要介绍下类、对象、方法和实例变量的概念。
对象：对象是类的一个实例，有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。
类：类是一个模板，它描述一类对象的行为和状态。
方法：方法就是行为，一个类可以有很多方法。逻辑运算、数据修改以及所有动作都是在方法中完成的。
实例变量：每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定。

基本语法
编写Java程序时，应注意以下几点：
大小写敏感：Java是大小写敏感的，这就意味着标识符Hello与hello是不同的。
类名：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 MyFirstJavaClass 。
方法名：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。
源文件名：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记Java是大小写敏感的），文件名的后缀为.java。（如果文件名和类名不相同则会导致编译错误）。
主方法入口：所有的Java 程序由public static void main(String []args)方法开始执行。

Java标识符
Java所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。
关于Java标识符，有以下几点需要注意：
所有的标识符都应该以字母（A-Z或者a-z）,美元符（$）、或者下划线（_）开始
首字符之后可以是字母（A-Z或者a-z）,美元符（$）、下划线（_）或数字的任何字符组合
关键字不能用作标识符
标识符是大小写敏感的
合法标识符举例：age、$salary、_value、__1_value
非法标识符举例：123abc、-salary

Java修饰符
像其他语言一样，Java可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：
访问控制修饰符 : default, public , protected, private
非访问控制修饰符 : final, abstract, static, synchronized
在后面的章节中我们会深入讨论Java修饰符。

Java变量
Java中主要有如下几种类型的变量
局部变量
类变量（静态变量）
成员变量（非静态变量）

Java数组
数组是储存在堆上的对象，可以保存多个同类型变量。在后面的章节中，我们将会学到如何声明、构造以及初始化一个数组。

Java枚举
Java 5.0引入了枚举，枚举限制变量只能是预先设定好的值。使用枚举可以减少代码中的bug。
例如，我们为果汁店设计一个程序，它将限制果汁为小杯、中杯、大杯。这就意味着它不允许顾客点除了这三种尺寸外的果汁。

实例
class FreshJuice {
   enum FreshJuiceSize{ SMALL, MEDIUM , LARGE }
   FreshJuiceSize size;
}
 
public class FreshJuiceTest {
   public static void main(String []args){
      FreshJuice juice = new FreshJuice();
      juice.size = FreshJuice.FreshJuiceSize.MEDIUM  ;
   }
}
注意：枚举可以单独声明或者声明在类里面。方法、变量、构造函数也可以在枚举中定义。


Java 关键字
下面列出了Java 关键字。这些保留字不能用于常量、变量、和任何标识符的名称。
类别	
关键字	说明
访问控制	
private	私有的
protected	受保护的
public	公共的

类、方法和变量修饰符
abstract	声明抽象
class	类
extends	扩充,继承
final	最终值,不可改变的
implements	实现（接口）
interface	接口
native	本地，原生方法（非Java实现）
new	新,创建
static	静态
strictfp	严格,精准
synchronized	线程,同步
transient	短暂
volatile	易失

程序控制语句
break	跳出循环
case	定义一个值以供switch选择
continue	继续
default	默认
do	运行
else	否则
for	循环
if	如果
instanceof	实例
return	返回
switch	根据值选择执行
while	循环

错误处理
assert	断言表达式是否为真
catch	捕捉异常
finally	有没有异常都执行
throw	抛出一个异常对象
throws	声明一个异常可能被抛出
try	捕获异常

包相关
import	引入
package	包

基本类型
boolean	布尔型
byte	字节型
char	字符型
double	双精度浮点
float	单精度浮点
int	整型
long	长整型
short	短整型

变量引用
super	父类,超类
this	本类
void	无返回值

保留关键字
goto	是关键字，但不能使用
const	是关键字，但不能使用
null	空

Java注释
类似于C/C++，Java也支持单行以及多行注释。注释中的字符将被Java编译器忽略。
public class HelloWorld {
   /* 这是第一个Java程序
    *它将打印Hello World
    * 这是一个多行注释的示例
    */
    public static void main(String []args){
       // 这是单行注释的示例
       /* 这个也是单行注释的示例 */
       System.out.println("Hello World"); 
    }
}

Java 空行
空白行，或者有注释的行，Java编译器都会忽略掉。

继承
在Java中，一个类可以由其他类派生。如果你要创建一个类，而且已经存在一个类具有你所需要的属性或方法，那么你可以将新创建的类继承该类。
利用继承的方法，可以重用已存在类的方法和属性，而不用重写这些代码。被继承的类称为超类（super class），派生类称为子类（subclass）。

接口
在Java中，接口可理解为对象间相互通信的协议。接口在继承中扮演着很重要的角色。
接口只定义派生要用到的方法，但是方法的具体实现完全取决于派生类。


标识符可以用来标识变量名、类名、类中的方法名和文件名等。
命名规则：
 (1) 由字母、数字、下划线、$组成，不能以数字开头。
 (2) 大小写敏感。
 (3) 不得使用java中的关键字和保留字。
关键字：都是小写的，jdk1.2多了strictfp(经准浮点型)，关键字 jdk1.4多了assert(断言)关键字，jdk1.5多了enum(枚举) 关键字。
true、false、null 严格说不应该算关键字，应称其为保留字更合适。
习惯：
 (1) 标识符要符合语义信息。
 (2) 包名所有字母小写。
 (3) 类名每个单词首字母大写，其它小写，如：TarenaStudent。
 (4) 变量和方法：第一个单词小写，从第二个单词开始首字母大写，如：tarenaStudent。
 (5) 常量：所有字母大写，每个单词之间用 _ 连接。
常用的转义字符：
"\b" (退格)
"\f" (换页)
"\n" (换行)
"\r" (回车)
"\t" (水平制表符(到下一个tab位置))
"\' " (单引号)
"\" " (双引号) 
"\\" (反斜杠)

Java的八种基本类型：（按字节来分）
boolean   布尔型   1个字节 8bit（8位）
byte     字节类型   1个字节
char     字符类型   2个字节
short     短整型     2个字节
int          整型        4个字节
float      浮点型（单精度）4个字节
long      长整型      8个字节
double   双精度类型  8个字节
Java中默认的整数类型是int，如果要定义为long ，则要在数值后加上L或者l
默认的浮点型是双精度浮点，如果要定义float，则要在数值后面加上f或者F
一个字节等于8位，1个字节等于256个数。2^8
一个英文字母或者阿拉伯数字占一个字节
一个汉字占2个字节


一、命名规范
1、 项目名全部小写
2、 包名全部小写
3、 类名首字母大写，如果类名由多个单词组成，每个单词的首字母都要大写。如：public class MyFirstClass{}
4、 变量名、方法名首字母小写，如果名称由多个单词组成，每个单词的首字母都要大写。如：
int index=0;
public void toString(){}
5、 常量名全部大写
A
如：
public static final String GAME_COLOR="RED";
6、所有命名规则必须遵循以下规则：
 1)、名称只能由字母、数字、下划线、$符号组成
 2)、不能以数字开头
 3)、名称不能使用JAVA中的关键字。
 4)、坚决不允许出现中文及拼音命名。
二、注释规范
1、类注释
在每个类前面必须加上类注释，注释模板如下：
/**
* Copyright (C), 2006-2010, ChengDu Lovo info. Co., Ltd.
* FileName: Test.java
* 类的详细说明
*
* @author 类创建者姓名
* @Date    创建日期
* @version 1.00
*/
2、属性注释
在每个属性前面必须加上属性注释，注释模板如下：
/** 提示信息 */
private String strMsg = null; 3、方法注释
在每个方法前面必须加上方法注释，注释模板如下：
/**
* 类方法的详细使用说明
*
* @param 参数1 参数1的使用说明
* @return 返回结果的说明
* @throws 异常类型.错误代码 注明从此类方法中抛出异常的说明
*/
4、构造方法注释
在每个构造方法前面必须加上注释，注释模板如下：
/**
* 构造方法的详细使用说明
*
* @param 参数1 参数1的使用说明
* @throws 异常类型.错误代码 注明从此类方法中抛出异常的说明
*/
5、方法内部注释
在方法内部使用单行或者多行注释，该注释根据实际情况添加。
如：
//背景颜色
Color bgColor = Color.RED


Java编程规范
package的命名: package 的名字由全部小写的字母组成，例如：com.runoob。
class和interface的命名: class和interface的名字由大写字母开头而其他字母都小写的单词组成，例如：Person，RuntimeException。
class变量的命名: 变量的名字用一个小写字母开头，后面的单词用大写字母开头,例如：index，currentImage。
class 方法的命名: 方法的名字用一个小写字母开头，后面的单词用大写字母开头,例如：run()，getBalance()。
staticfinal变量的命名: static final变量的名字所有字母都大写，并且能表示完整含义。例如：PI，PASSWORD。
参数的命名: 参数的名字和变量的命名规范一致。
数组的命名: 数组应该总是用这样的方式来命名：byte[] buffer。


一个完整的Java。源程序应该包括下列部分：
 package语句，该部分至多只有一句，必须放在源程序的第一句。
 import语句，该部分可以有若干import语句或者没有，必须放在所有的类定义之前。
 public classDefinition，公共类定义部分，至多只有一个公共类的定义，Java语言规定该Java源程序的文件名必须与该公共类名完全一致。
 classDefinition，类定义部分，可以有0个或者多个类定义。
interfaceDefinition，接口定义部分，可以有0个或者多个接口定义。
例如：
package javawork.helloworld;
/*把编译生成的所有．class文件放到包javawork.helloworld中*/
import java awt.*;
//告诉编译器本程序中用到系统的AWT包
import javawork.newcentury;
/*告诉编译器本程序中用到用户自定义的包javawork.newcentury*/
 public class HelloWorldApp{...｝
/*公共类HelloWorldApp的定义，名字与文件名相同*/ 
class TheFirstClass｛...｝;
//第一个普通类TheFirstClass的定义 
interface TheFirstInterface{......}
/*定义一个接口TheFirstInterface*/
package语句：由于Java编译器为每个类生成一个字节码文件，且文件名与类名相同因此同名的类有可能发生冲突。为了解决这一问题，Java提供包来管理类名空间，包实 提供了一种命名机制和可见性限制机制。
