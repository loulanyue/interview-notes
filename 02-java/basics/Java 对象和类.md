Java作为一种面向对象语言。支持以下基本概念：
多态
继承
封装
抽象
类
对象
实例
方法
重载
本节我们重点研究对象和类的概念。
对象：对象是类的一个实例（对象不是找个女朋友），有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。
类：类是一个模板，它描述一类对象的行为和状态。

Java中的对象
现在让我们深入了解什么是对象。看看周围真实的世界，会发现身边有很多对象，车，狗，人等等。所有这些对象都有自己的状态和行为。
拿一条狗来举例，它的状态有：名字、品种、颜色，行为有：叫、摇尾巴和跑。
对比现实对象和软件对象，它们之间十分相似。
软件对象也有状态和行为。软件对象的状态就是属性，行为通过方法体现。
在软件开发中，方法操作对象内部状态的改变，对象的相互调用也是通过方法来完成。

Java中的类
类可以看成是创建Java对象的模板。
通过下面一个简单的类来理解下Java中类的定义：
public class Dog{
  String breed;
  int age;
  String color;
  void barking(){
  }
 
  void hungry(){
  }
 
  void sleeping(){
  }
}

一个类可以包含以下类型变量：
局部变量：在方法、构造方法或者语句块中定义的变量被称为局部变量。变量声明和初始化都是在方法中，方法结束后，变量就会自动销毁。
成员变量：成员变量是定义在类中，方法体之外的变量。这种变量在创建对象的时候实例化。成员变量可以被类中方法、构造方法和特定类的语句块访问。
类变量：类变量也声明在类中，方法体之外，但必须声明为static类型。
一个类可以拥有多个方法，在上面的例子中：barking()、hungry()和sleeping()都是Dog类的方法。

构造方法
每个类都有构造方法。如果没有显式地为类定义构造方法，Java编译器将会为该类提供一个默认构造方法。
在创建一个对象的时候，至少要调用一个构造方法。构造方法的名称必须与类同名，一个类可以有多个构造方法。
下面是一个构造方法示例：
public class Puppy{
    public Puppy(){
    }
 
    public Puppy(String name){
        // 这个构造器仅有一个参数：name
    }
}
创建对象
对象是根据类创建的。在Java中，使用关键字new来创建一个新的对象。创建对象需要以下三步：
声明：声明一个对象，包括对象名称和对象类型。
实例化：使用关键字new来创建一个对象。
初始化：使用new创建对象时，会调用构造方法初始化对象。
下面是一个创建对象的例子：
public class Puppy{
   public Puppy(String name){
      //这个构造器仅有一个参数：name
      System.out.println("小狗的名字是 : " + name ); 
   }
   public static void main(String []args){
      // 下面的语句将创建一个Puppy对象
      Puppy myPuppy = new Puppy( "tommy" );
   }
}
编译并运行上面的程序，会打印出下面的结果：
小狗的名字是 : tommy
访问实例变量和方法
通过已创建的对象来访问成员变量和成员方法，如下所示：
/* 实例化对象 */
ObjectReference = new Constructor();
/* 访问类中的变量 */
ObjectReference.variableName;
/* 访问类中的方法 */
ObjectReference.methodName();
实例
下面的例子展示如何访问实例变量和调用成员方法：
public class Puppy{
   int puppyAge;
   public Puppy(String name){
      // 这个构造器仅有一个参数：name
      System.out.println("小狗的名字是 : " + name ); 
   }
 
   public void setAge( int age ){
       puppyAge = age;
   }
 
   public int getAge( ){
       System.out.println("小狗的年龄为 : " + puppyAge ); 
       return puppyAge;
   }
 
   public static void main(String []args){
      /* 创建对象 */
      Puppy myPuppy = new Puppy( "tommy" );
      /* 通过方法来设定age */
      myPuppy.setAge( 2 );
      /* 调用另一个方法获取age */
      myPuppy.getAge( );
      /*你也可以像下面这样访问成员变量 */
      System.out.println("变量值 : " + myPuppy.puppyAge ); 
   }
}
编译并运行上面的程序，产生如下结果：
小狗的名字是 : tommy
小狗的年龄为 : 2
变量值 : 2
源文件声明规则
在本节的最后部分，我们将学习源文件的声明规则。当在一个源文件中定义多个类，并且还有import语句和package语句时，要特别注意这些规则。
一个源文件中只能有一个public类
一个源文件可以有多个非public类
源文件的名称应该和public类的类名保持一致。例如：源文件中public类的类名是Employee，那么源文件应该命名为Employee.java。
如果一个类定义在某个包中，那么package语句应该在源文件的首行。
如果源文件包含import语句，那么应该放在package语句和类定义之间。如果没有package语句，那么import语句应该在源文件中最前面。
import语句和package语句对源文件中定义的所有类都有效。在同一源文件中，不能给不同的类不同的包声明。
类有若干种访问级别，并且类也分不同的类型：抽象类和final类等。这些将在访问控制章节介绍。
除了上面提到的几种类型，Java还有一些特殊的类，如：内部类、匿名类。
Java包
包主要用来对类和接口进行分类。当开发Java程序时，可能编写成百上千的类，因此很有必要对类和接口进行分类。
Import语句
在Java中，如果给出一个完整的限定名，包括包名、类名，那么Java编译器就可以很容易地定位到源代码或者类。Import语句就是用来提供一个合理的路径，使得编译器可以找到某个类。
例如，下面的命令行将会命令编译器载入java_installation/java/io路径下的所有类
import java.io.*;
一个简单的例子
在该例子中，我们创建两个类：Employee 和 EmployeeTest。
首先打开文本编辑器，把下面的代码粘贴进去。注意将文件保存为 Employee.java。
Employee类有四个成员变量：name、age、designation和salary。该类显式声明了一个构造方法，该方法只有一个参数。
Employee.java 文件代码：
import java.io.*;
 
public class Employee{
   String name;
   int age;
   String designation;
   double salary;
   // Employee 类的构造器
   public Employee(String name){
      this.name = name;
   }
   // 设置age的值
   public void empAge(int empAge){
      age =  empAge;
   }
   /* 设置designation的值*/
   public void empDesignation(String empDesig){
      designation = empDesig;
   }
   /* 设置salary的值*/
   public void empSalary(double empSalary){
      salary = empSalary;
   }
   /* 打印信息 */
   public void printEmployee(){
      System.out.println("名字:"+ name );
      System.out.println("年龄:" + age );
      System.out.println("职位:" + designation );
      System.out.println("薪水:" + salary);
   }
}
程序都是从main方法开始执行。为了能运行这个程序，必须包含main方法并且创建一个实例对象。
下面给出EmployeeTest类，该类实例化2个 Employee 类的实例，并调用方法设置变量的值。
将下面的代码保存在 EmployeeTest.java文件中。
EmployeeTest.java 文件代码：
import java.io.*;
public class EmployeeTest{
 
   public static void main(String []args){
      /* 使用构造器创建两个对象 */
      Employee empOne = new Employee("RUNOOB1");
      Employee empTwo = new Employee("RUNOOB2");
 
      // 调用这两个对象的成员方法
      empOne.empAge(26);
      empOne.empDesignation("高级程序员");
      empOne.empSalary(1000);
      empOne.printEmployee();
 
      empTwo.empAge(21);
      empTwo.empDesignation("菜鸟程序员");
      empTwo.empSalary(500);
      empTwo.printEmployee();
   }
}
编译这两个文件并且运行 EmployeeTest 类，可以看到如下结果：
$ javac EmployeeTest.java
$ java EmployeeTest 
名字:RUNOOB1
年龄:26
职位:高级程序员
薪水:1000.0
名字:RUNOOB2
年龄:21
职位:菜鸟程序员
薪水:500.0


java因强制要求类名（唯一的public类）和文件名统一，因此在引用其它类时无需显式声明。在编译时，编译器会根据类名去寻找同名文件。


package 的作用就是 c++ 的 namespace 的作用，防止名字相同的类产生冲突。Java 编译器在编译时，直接根据 package 指定的信息直接将生成的 class 文件生成到对应目录下。如 package aaa.bbb.ccc 编译器就将该 .java 文件下的各个类生成到 ./aaa/bbb/ccc/ 这个目录。
import 是为了简化使用 package 之后的实例化的代码。假设 ./aaa/bbb/ccc/ 下的 A 类，假如没有 import，实例化A类为：new aaa.bbb.ccc.A()，使用 import aaa.bbb.ccc.A 后，就可以直接使用 new A() 了，也就是编译器匹配并扩展了 aaa.bbb.ccc. 这串字符串。


为什么JAVA文件中只能含有一个Public类?
java 程序是从一个 public 类的 main 函数开始执行的，(其实是main线程)，就像 C 程序 是从 main() 函数开始执行一样。 只能有一个 public 类是为了给类装载器提供方便。 一个 public 类只能定义在以它的类名为文件名的文件中。
每个编译单元(文件)都只有一个 public 类。因为每个编译单元都只能有一个公共接口，用 public 类来表现。该接口可以按照要求包含众多的支持包访问权限的类。如果有一个以上的 public 类，编译器就会报错。 并且 public类的名称必须与文件名相同(严格区分大小写)。 当然一个编译单元内也可以没有 public 类。


成员变量和类变量的区别
由static修饰的变量称为静态变量，其实质上就是一个全局变量。如果某个内容是被所有对象所共享，那么该内容就应该用静态修饰；没有被静态修饰的内容，其实是属于对象的特殊描述。
不同的对象的实例变量将被分配不同的内存空间， 如果类中的成员变量有类变量，那么所有对象的这个类变量都分配给相同的一处内存，改变其中一个对象的这个类变量会影响其他对象的这个类变量，也就是说对象共享类变量。
成员变量和类变量的区别：
   1、两个变量的生命周期不同
      成员变量随着对象的创建而存在，随着对象的回收而释放。
      静态变量随着类的加载而存在，随着类的消失而消失。
   2、调用方式不同
      成员变量只能被对象调用。
      静态变量可以被对象调用，还可以被类名调用。
   3、别名不同
      成员变量也称为实例变量。
      静态变量也称为类变量。
   4、数据存储位置不同
      成员变量存储在堆内存的对象中，所以也叫对象的特有数据。
      静态变量数据存储在方法区（共享数据区）的静态区，所以也叫对象的共享数据。
static 关键字，是一个修饰符，用于修饰成员(成员变量和成员函数)。
   特点：
   1、想要实现对象中的共性数据的对象共享。可以将这个数据进行静态修饰。
   2、被静态修饰的成员，可以直接被类名所调用。也就是说，静态的成员多了一种调用方式。类名.静态方式。
    3、静态随着类的加载而加载。而且优先于对象存在。
 
弊端：
   1、有些数据是对象特有的数据，是不可以被静态修饰的。因为那样的话，特有数据会变成对象的共享数据。这样对事物的描述就出了问题。所以，在定义静态时，必须要明确，这个数据是否是被对象所共享的。
   2、静态方法只能访问静态成员，不可以访问非静态成员。
      因为静态方法加载时，优先于对象存在，所以没有办法访问对象中的成员。
   3、静态方法中不能使用this，super关键字。
      因为this代表对象，而静态在时，有可能没有对象，所以this无法使用。
 
什么时候定义静态成员呢？或者说：定义成员时，到底需不需要被静态修饰呢？
成员分两种：
   1、成员变量。（数据共享时静态化）
      该成员变量的数据是否是所有对象都一样：
      如果是，那么该变量需要被静态修饰，因为是共享的数据。 
      如果不是，那么就说这是对象的特有数据，要存储到对象中。 
   2、成员函数。（方法中没有调用特有数据时就定义成静态）
      如果判断成员函数是否需要被静态修饰呢？
      只要参考，该函数内是否访问了对象中的特有数据：
      如果有访问特有数据，那方法不能被静态修饰。
      如果没有访问过特有数据，那么这个方法需要被静态修饰。
成员变量和静态变量的区别：
   1、成员变量所属于对象。所以也称为实例变量。
      静态变量所属于类。所以也称为类变量。
   2、成员变量存在于堆内存中。
      静态变量存在于方法区中。
   3、成员变量随着对象创建而存在。随着对象被回收而消失。
      静态变量随着类的加载而存在。随着类的消失而消失。
   4、成员变量只能被对象所调用 。
      静态变量可以被对象调用，也可以被类名调用。
   所以，成员变量可以称为对象的特有数据，静态变量称为对象的共享数据。
   
   
   1.局部变量：在方法、构造方法、语句块中定义的变量。其声明和初始化在方法中实现，在方法结束后自动销毁
public class  ClassName{
    public void printNumber（）{
        int a;
    }
    // 其他代码
}
2.成员变量：定义在类中，方法体之外。变量在创建对象时实例化。成员变量可被类中的方法、构造方法以及特定类的语句块访问。
public class  ClassName{
    int a;
    public void printNumber（）{
        // 其他代码
    }
}
3.类变量：定义在类中，方法体之外，但必须要有 static 来声明变量类型。静态成员属于整个类，可通过对象名或类名来调用。
public class  ClassName{
    static int a;
    public void printNumber（）{
        // 其他代码
    }
}


类的构造方法
1、构造方法的名字和类名相同，并且没有返回值。
2、构造方法主要用于为类的对象定义初始化状态。
3、我们不能直接调用构造方法，必须通过new关键字来自动调用，从而创建类的实例。
4、Java的类都要求有构造方法，如果没有定义构造方法，Java编译器会为我们提供一个缺省的构造方法，也就是不带参数的构造方法。
new关键字的作用
1、为对象分配内存空间。
2、引起对象构造方法的调用。
3、为对象返回一个引用。


Sometimes, you want to have variables that are common to all objects. This is accomplished with the static modifier. Fields that have the static modifier in their declaration are called static fields or class variables. They are associated with the class, rather than with any object.
以上是 Oracle 对于静态的定义。大意为，有时候，你想拥有所有对象通用的变量。 这是通过静态修改器完成的。 在其声明中具有静态修饰符的字段称为静态字段或类变量。 他们与类相关，而不是与任何对象相关联。


使用java类实例化一个对象的时候，如果在类中不显式的声明其构造函数，则会使用一个默认的构造函数来初始化对象。
实例：
//一个没有显式声明构造函数的类
Public class People{
    int age = 23;
    Public void getAge(){
        System.out.print("the age is "+age);
    }
}

//用这个类来实例化一个对象
People xiaoMing = new People(); // People() 是People类的默认构造函数，它什么也不干
xiaoMing.getAge();//打印年龄
也可以在声明类的时候显式的声明一个构造函数：
//一个带显式构造函数的类
Public class People{
    int age = 23;
        Public void getAge(){
        System.out.print("the age is "+ age);
    }
    // 显式声明一个带参数的构造函数，用于初始化年龄
    Public People(int a){
        this.age = a; 
    }
}

//用这个类来实例化一个对象
People xiaoMing = new People(20); // 使用带参数的构造函数来实例化对象
xiaoMing.getAge(); // 打印出来的年龄变为20


成员变量和局部变量区别
1.声明位置不同
成员变量也就是属性，在类中声明的。
局部变量，在方法中声明或代码块中声明。
2.初始值不同
成员变量如果没有赋值则是有默认值的，数据类型不同则默认值不同。
局部变量是没有默认值，也就是说必须先声明，再赋值，最后才使用。
3.在一个类中，局部变量可以与成员变量同名，但是局部变量优先,如果非要访问成员变量的属性，则必须使用 this.color
this 代表当前这个对象，也就是当前谁调用这个方法则这个对象就是谁。
对象与引用区别
对象是具体的一个实例，如：new Student(); new 表示创建一个对象，并在堆内存中开辟一块空间。
引用名称是存放的对象的地址。

内部类：将一个类的定义放在另一个类的定义内部，这就是内部类。
如同一个人是由大脑、肢体、器官等身体结果组成，而内部类相当于其中的某个器官之一，例如心脏：它也有自己的属性和行为（血液、跳动）
显然，此处不能单方面用属性或者方法表示一个心脏，而需要一个类，而心脏又在人体当中，正如同是内部类在外部类当中。
1）不用内部类：
public class Person {
    private int blood;
    private Heart heart;
}

public class Heart {
    private int blood;
    public void test() {
        System.out.println(blood);
    }
}
2）使用内部类：
public class Person {
    private int blood;
    public class Heart {
        public void test() {
            System.out.println(blood);
        }
    }

    public class Brain {
        public void test() {
            System.out.println(blood);
        }
    }
}
内部类优点和缺点：
 优点：可访问外部类私有属性（心脏可访问身体的血液，而不是外部抽血）。
 缺点：破坏原有类的程序结构（属性、构造方法、普通方法、内部类）。
应用举例
//外部类
class Out {
    private int age = 12;
     
    //内部类
    class In {
        public void print() {
            System.out.println(age);
        }
    }
}
 
public class Demo {
    public static void main(String[] args) {
        Out.In in = new Out().new In();
        in.print();
        //或者采用下种方式访问
        /*
        Out out = new Out();
        Out.In in = out.new In();
        in.print();
        */
    }
}
运行结果：12
从上面的例子不难看出，内部类其实严重破坏了良好的代码结构，但为什么还要使用内部类呢？
因为内部类可以随意使用外部类的成员变量（包括私有）而不用生成外部类的对象，这也是内部类的唯一优点。
如同心脏可以直接访问身体的血液，而不是通过医生来抽血。
程序编译过后会产生两个 .class 文件，分别是 Out.class 和 Out$In.class。
其中 $ 代表了上面程序中 Out.In 中的那个。
Out.In in = new Out().new In() 可以用来生成内部类的对象，这种方法存在两个小知识点需要注意：
 1.开头的 Out 是为了标明需要生成的内部类对象在哪个外部类当中。
 2.必须先有外部类的对象才能生成内部类的对象，因为内部类的作用就是为了访问外部类中的成员变量。
实例2：内部类中的变量访问形式
更多详细内容可参考：
java 中的内部类总结
Java 内部类详解


更多内容参考：Java 中 this 和 super 的用法总结。
 this 指向对象本身的指针，形参与成员名字重名，用 this 来区分。
 super 超（父）类对象的一个指针。
对构造函数对引用：
class Person { 
    public static void prt(String s) { 
       System.out.println(s); 
    } 
   
    Person() { 
       prt("父类·无参数构造方法： "+"A Person."); 
    }//构造方法(1) 
    
    Person(String name) { 
       prt("父类·含一个参数的构造方法： "+"A person's name is " + name); 
    }//构造方法(2) 
} 
    
public class Chinese extends Person { 
    Chinese() { 
       super(); // 调用父类构造方法（1） 
       prt("子类·调用父类”无参数构造方法“： "+"A chinese coder."); 
    } 
    
    Chinese(String name) { 
       super(name);// 调用父类具有相同形参的构造方法（2） 
       prt("子类·调用父类”含一个参数的构造方法“： "+"his name is " + name); 
    } 
    
    Chinese(String name, int age) { 
       this(name);// 调用具有相同形参的构造方法（3） 
       prt("子类：调用子类具有相同形参的构造方法：his age is " + age); 
    } 
    
    public static void main(String[] args) { 
       Chinese cn = new Chinese(); 
       cn = new Chinese("codersai"); 
       cn = new Chinese("codersai", 18); 
    } 
}
运行结果：
父类·无参数构造方法： A Person.
子类·调用父类”无参数构造方法“： A chinese coder.
父类·含一个参数的构造方法： A person's name is codersai
子类·调用父类”含一个参数的构造方法“： his name is codersai
父类·含一个参数的构造方法： A person's name is codersai
子类·调用父类”含一个参数的构造方法“： his name is codersai
子类：调用子类具有相同形参的构造方法：his age is 18


JAVA 和 C++ 一样，若是不定义任何的构造函数，会自动构造；如果定义了任何一个构造函数，就不会再自动构造，需要自己定义全部的构造函数。
//一个带显式构造函数的类
Public class People{
    int age = 23;
        Public void getAge(){
        System.out.print("the age is "+ age);
    }
    // 显式声明一个带参数的构造函数，用于初始化年龄
    Public People(int a){
        this.age = a; 
    }
}

//用这个类来实例化一个对象
People xiaoMing = new People(20); // 使用带参数的构造函数来实例化对象
People xiaoMing2 = new People();  // ERROR：一旦显示定义了一个构造函数，就不会再生成默认的构造函数
xiaoMing.getAge(); // 打印出来的年龄变为20

