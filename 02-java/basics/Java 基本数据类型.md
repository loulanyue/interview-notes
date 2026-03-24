变量就是申请内存来存储值。也就是说，当创建变量的时候，需要在内存中申请空间。
内存管理系统根据变量的类型为变量分配存储空间，分配的空间只能用来储存该类型数据。

因此，通过定义不同类型的变量，可以在内存中储存整数、小数或者字符。
Java 的两大数据类型:
内置数据类型
引用数据类型

内置数据类型
Java语言提供了八种基本类型。六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型。
byte：
byte 数据类型是8位、有符号的，以二进制补码表示的整数；
最小值是 -128（-2^7）；
最大值是 127（2^7-1）；
默认值是 0；
byte 类型用在大型数组中节约空间，主要代替整数，因为 byte 变量占用的空间只有 int 类型的四分之一；
例子：byte a = 100，byte b = -50。
short：
short 数据类型是 16 位、有符号的以二进制补码表示的整数
最小值是 -32768（-2^15）；
最大值是 32767（2^15 - 1）；
Short 数据类型也可以像 byte 那样节省空间。一个short变量是int型变量所占空间的二分之一；
默认值是 0；
例子：short s = 1000，short r = -20000。
int：
int 数据类型是32位、有符号的以二进制补码表示的整数；
最小值是 -2,147,483,648（-2^31）；
最大值是 2,147,483,647（2^31 - 1）；
一般地整型变量默认为 int 类型；
默认值是 0 ；
例子：int a = 100000, int b = -200000。
long：
long 数据类型是 64 位、有符号的以二进制补码表示的整数；
最小值是 -9,223,372,036,854,775,808（-2^63）；
最大值是 9,223,372,036,854,775,807（2^63 -1）；
这种类型主要使用在需要比较大整数的系统上；
默认值是 0L；
例子： long a = 100000L，Long b = -200000L。
"L"理论上不分大小写，但是若写成"l"容易与数字"1"混淆，不容易分辩。所以最好大写。
float：
float 数据类型是单精度、32位、符合IEEE 754标准的浮点数；
float 在储存大型浮点数组的时候可节省内存空间；
默认值是 0.0f；
浮点数不能用来表示精确的值，如货币；
例子：float f1 = 234.5f。
double：
double 数据类型是双精度、64 位、符合IEEE 754标准的浮点数；
浮点数的默认类型为double类型；
double类型同样不能表示精确的值，如货币；
默认值是 0.0d；
例子：double d1 = 123.4。
boolean：
boolean数据类型表示一位的信息；
只有两个取值：true 和 false；
这种类型只作为一种标志来记录 true/false 情况；
默认值是 false；
例子：boolean one = true。
char：
char类型是一个单一的 16 位 Unicode 字符；
最小值是 \u0000（即为0）；
最大值是 \uffff（即为65,535）；
char 数据类型可以储存任何字符；
例子：char letter = 'A';。

实例
对于数值类型的基本类型的取值范围，我们无需强制去记忆，因为它们的值都已经以常量的形式定义在对应的包装类中了。请看下面的例子：
实例
public class PrimitiveTypeTest {  
    public static void main(String[] args) {  
        // byte  
        System.out.println("基本类型：byte 二进制位数：" + Byte.SIZE);  
        System.out.println("包装类：java.lang.Byte");  
        System.out.println("最小值：Byte.MIN_VALUE=" + Byte.MIN_VALUE);  
        System.out.println("最大值：Byte.MAX_VALUE=" + Byte.MAX_VALUE);  
        System.out.println();  
  
        // short  
        System.out.println("基本类型：short 二进制位数：" + Short.SIZE);  
        System.out.println("包装类：java.lang.Short");  
        System.out.println("最小值：Short.MIN_VALUE=" + Short.MIN_VALUE);  
        System.out.println("最大值：Short.MAX_VALUE=" + Short.MAX_VALUE);  
        System.out.println();  
  
        // int  
        System.out.println("基本类型：int 二进制位数：" + Integer.SIZE);  
        System.out.println("包装类：java.lang.Integer");  
        System.out.println("最小值：Integer.MIN_VALUE=" + Integer.MIN_VALUE);  
        System.out.println("最大值：Integer.MAX_VALUE=" + Integer.MAX_VALUE);  
        System.out.println();  
  
        // long  
        System.out.println("基本类型：long 二进制位数：" + Long.SIZE);  
        System.out.println("包装类：java.lang.Long");  
        System.out.println("最小值：Long.MIN_VALUE=" + Long.MIN_VALUE);  
        System.out.println("最大值：Long.MAX_VALUE=" + Long.MAX_VALUE);  
        System.out.println();  
  
        // float  
        System.out.println("基本类型：float 二进制位数：" + Float.SIZE);  
        System.out.println("包装类：java.lang.Float");  
        System.out.println("最小值：Float.MIN_VALUE=" + Float.MIN_VALUE);  
        System.out.println("最大值：Float.MAX_VALUE=" + Float.MAX_VALUE);  
        System.out.println();  
  
        // double  
        System.out.println("基本类型：double 二进制位数：" + Double.SIZE);  
        System.out.println("包装类：java.lang.Double");  
        System.out.println("最小值：Double.MIN_VALUE=" + Double.MIN_VALUE);  
        System.out.println("最大值：Double.MAX_VALUE=" + Double.MAX_VALUE);  
        System.out.println();  
  
        // char  
        System.out.println("基本类型：char 二进制位数：" + Character.SIZE);  
        System.out.println("包装类：java.lang.Character");  
        // 以数值形式而不是字符形式将Character.MIN_VALUE输出到控制台  
        System.out.println("最小值：Character.MIN_VALUE="  
                + (int) Character.MIN_VALUE);  
        // 以数值形式而不是字符形式将Character.MAX_VALUE输出到控制台  
        System.out.println("最大值：Character.MAX_VALUE="  
                + (int) Character.MAX_VALUE);  
    }  
}

运行实例 »
编译以上代码输出结果如下所示：
基本类型：byte 二进制位数：8
包装类：java.lang.Byte
最小值：Byte.MIN_VALUE=-128
最大值：Byte.MAX_VALUE=127

基本类型：short 二进制位数：16
包装类：java.lang.Short
最小值：Short.MIN_VALUE=-32768
最大值：Short.MAX_VALUE=32767

基本类型：int 二进制位数：32
包装类：java.lang.Integer
最小值：Integer.MIN_VALUE=-2147483648
最大值：Integer.MAX_VALUE=2147483647

基本类型：long 二进制位数：64
包装类：java.lang.Long
最小值：Long.MIN_VALUE=-9223372036854775808
最大值：Long.MAX_VALUE=9223372036854775807

基本类型：float 二进制位数：32
包装类：java.lang.Float
最小值：Float.MIN_VALUE=1.4E-45
最大值：Float.MAX_VALUE=3.4028235E38

基本类型：double 二进制位数：64
包装类：java.lang.Double
最小值：Double.MIN_VALUE=4.9E-324
最大值：Double.MAX_VALUE=1.7976931348623157E308

基本类型：char 二进制位数：16
包装类：java.lang.Character
最小值：Character.MIN_VALUE=0
最大值：Character.MAX_VALUE=65535
Float和Double的最小值和最大值都是以科学记数法的形式输出的，结尾的"E+数字"表示E之前的数字要乘以10的多少次方。比如3.14E3就是3.14 × 103 =3140，3.14E-3 就是 3.14 x 10-3 =0.00314。
实际上，JAVA中还存在另外一种基本类型void，它也有对应的包装类 java.lang.Void，不过我们无法直接对它们进行操作。

引用类型
在Java中，引用类型的变量非常类似于C/C++的指针。引用类型指向一个对象，指向对象的变量是引用变量。这些变量在声明时被指定为一个特定的类型，比如 Employee、Puppy 等。变量一旦声明后，类型就不能被改变了。
对象、数组都是引用数据类型。
所有引用类型的默认值都是null。
一个引用变量可以用来引用任何与之兼容的类型。
例子：Site site = new Site("Runoob")。
Java 常量
常量在程序运行时是不能被修改的。
在 Java 中使用 final 关键字来修饰常量，声明方式和变量类似：
final double PI = 3.1415927;
虽然常量名也可以用小写，但为了便于识别，通常使用大写字母表示常量。
字面量可以赋给任何内置类型的变量。例如：
byte a = 68;
char a = 'A'
byte、int、long、和short都可以用十进制、16进制以及8进制的方式来表示。
当使用常量的时候，前缀 0 表示 8 进制，而前缀 0x 代表 16 进制, 例如：
int decimal = 100;
int octal = 0144;
int hexa =  0x64;
和其他语言一样，Java的字符串常量也是包含在两个引号之间的字符序列。下面是字符串型字面量的例子：
"Hello World"
"two\nlines"
"\"This is in quotes\""
字符串常量和字符常量都可以包含任何Unicode字符。例如：
char a = '\u0001';
String a = "\u0001";
Java语言支持一些特殊的转义字符序列。
符号	字符含义
\n	换行 (0x0a)
\r	回车 (0x0d)
\f	换页符(0x0c)
\b	退格 (0x08)
\0	空字符 (0x20)
\s	字符串
\t	制表符
\"	双引号
\'	单引号
\\	反斜杠
\ddd	八进制字符 (ddd)
\uxxxx	16进制Unicode字符 (xxxx)
自动类型转换
整型、实型（常量）、字符型数据可以混合运算。运算中，不同类型的数据先转化为同一类型，然后进行运算。
转换从低级到高级。
低  ------------------------------------>  高

byte,short,char—> int —> long—> float —> double 
数据类型转换必须满足如下规则：
1. 不能对boolean类型进行类型转换。
2. 不能把对象类型转换成不相关类的对象。
3. 在把容量大的类型转换为容量小的类型时必须使用强制类型转换。
4. 转换过程中可能导致溢出或损失精度，例如：
int i =128;   
byte b = (byte)i;
因为 byte 类型是 8 位，最大值为127，所以当 int 强制转换为 byte 类型时，值 128 时候就会导致溢出。
5. 浮点数到整数的转换是通过舍弃小数得到，而不是四舍五入，例如：
(int)23.7 == 23;        
(int)-45.89f == -45
自动类型转换
必须满足转换前的数据类型的位数要低于转换后的数据类型，例如: short数据类型的位数为16位，就可以自动转换位数为32的int类型，同样float数据类型的位数为32，可以自动转换为64位的double类型。
实例
public class ZiDongLeiZhuan{
        public static void main(String[] args){
            char c1='a';//定义一个char类型
            int i1 = c1;//char自动类型转换为int
            System.out.println("char自动类型转换为int后的值等于"+i1);
            char c2 = 'A';//定义一个char类型
            int i2 = c2+1;//char 类型和 int 类型计算
            System.out.println("char类型和int计算后的值等于"+i2);
        }
}
运行结果为:
char自动类型转换为int后的值等于97
char类型和int计算后的值等于66
解析：c1 的值为字符 a ,查 ASCII 码表可知对应的 int 类型值为 97， A 对应值为 65，所以 i2=65+1=66。
强制类型转换
1. 条件是转换的数据类型必须是兼容的。
2. 格式：(type)value type是要强制类型转换后的数据类型 实例：
实例
public class QiangZhiZhuanHuan{
    public static void main(String[] args){
        int i1 = 123;
        byte b = (byte)i1;//强制类型转换为byte
        System.out.println("int强制类型转换为byte后的值等于"+b);
    }
}
运行结果：
int强制类型转换为byte后的值等于123
隐含强制类型转换
1. 整数的默认类型是 int。
2. 浮点型不存在这种情况，因为在定义 float 类型时必须在数字后面跟上 F 或者 f。
这一节讲解了 Java 的基本数据类型。下一节将探讨不同的变量类型以及它们的用法。


Java 里使用 long 类型的数据一定要在数值后面加上 L，否则将作为整型解析：
long g = (long)9223372036854775807;
long h = (long)-9223372036854775808;

或者

long g = 9223372036854775807;
long h = -9223372036854775808;
会出现以下报错信息：
Exception in thread "main" java.lang.Error: Unresolved compilation problems: 
The literal 9223372036854775807 of type int is out of range
The literal 9223372036854775808 of type int is out of range 
溢出了~
解决方法在数值后面加上 L：
long value = 9223372036854775807L;

引用类型是一个对象类型，它的值是指向内存空间的引用，就是地址，所指向的内存中保存着变量所表示的一个值或一组值。
int a;
a = 250; // 声明变量a的同时，系统给a分配了空间。
引用类型就不是了，只给变量分配了引用空间，数据空间没有分配，因为不知道数据是什么。
错误的例子：
MyDate today;
today.day = 4; // 发生错误，因为today对象的数据空间未分配。
引用类型变量在声明后必须通过实例化开辟数据空间，才能对变量所指向的对象进行访问。
MyDate today;          //将变量分配一个保存引用的空间
today = new MyDate();     // 这句话是2步，首先执行new MyDate（），给today变量开辟数据空间，然后再执行赋值操作
引用变量赋值：
MyDate a，b;       // 在内存开辟两个引用空间
a = new MyDate();       // 开辟MyDate对象的数据空间，并把该空间的首地址赋给a
b = a;                   // 将a存储空间中的地址写到b的存储空间中

short a = 1;
short b = 2;
那么 a+b 是什么类型？
答：在java的世界里，如果比int类型小的类型做运算，java在编译的时候就会将它们统一强转成int类型。当是比int类型大的类型做运算，就会自动转换成它们中最大类型那个。

char a = 'S'; char 后面赋值要用单引号，因为是字符型数据类型
String a = "I AM FINE"; String 后面赋值要用双引号，因为是字符串数据类型

数据类型转换的补充
1、包装类过渡类型转换
一般情况下，我们首先声明一个变量，然后生成一个对应的包装类，就可以利用包装类的各种方法进行类型转换了。例如：
当希望把float型转换为double型时：
float f1=100.00f;
Float F1=new Float(f1);
double d1=F1.doubleValue();//F1.doubleValue()为Float类的返回double值型的方法
简单类型的变量转换为相应的包装类，可以利用包装类的构造函数。即：Boolean(boolean value)、Character(char value)、Integer(int value)、Long(long value)、Float(float value)、Double(double value)
而在各个包装类中，总有形为××Value()的方法，来得到其对应的简单类型数据。利用这种方法，也可以实现不同数值型变量间的转换，例如，对于一个双精度实型类，intValue()可以得到其对应的整型变量，而doubleValue()可以得到其对应的双精度实型变量。
2、字符串与其它类型间的转换
其它类型向字符串的转换
 调用类的串转换方法:X.toString();
 自动转换:X+"";
 使用String的方法:String.valueOf(X);
3、字符串作为值,向其它类型的转换
1、先转换成相应的封装器实例,再调用对应的方法转换成其它类型
例如，字符中"32.1"转换double型的值的格式为:new Float("32.1").doubleValue()。也可以用:Double.valueOf("32.1").doubleValue()
2、静态parseXXX方法
String s = "1";
byte b = Byte.parseByte( s );
short t = Short.parseShort( s );
int i = Integer.parseInt( s );
long l = Long.parseLong( s );
Float f = Float.parseFloat( s );
Double d = Double.parseDouble( s );
3、Character的getNumericValue(char ch)方法
4、Date类与其它数据类型的相互转换
整型和Date类之间并不存在直接的对应关系，只是你可以使用int型为分别表示年、月、日、时、分、秒，这样就在两者之间建立了一个对应关系，在作这种转换时，你可以使用Date类构造函数的三种形式：
 Date(int year, int month, int date)：以int型表示年、月、日
 Date(int year, int month, int date, int hrs, int min)：以int型表示年、月、日、时、分
 Date(int year, int month, int date, int hrs, int min, int sec)：以int型表示年、月、日、时、分、秒
在长整型和Date类之间有一个很有趣的对应关系，就是将一个时间表示为距离格林尼治标准时间1970年1月1日0时0分0秒的毫秒数。对于这种对应关系，Date类也有其相应的构造函数：Date(long date)。
获取Date类中的年、月、日、时、分、秒以及星期你可以使用Date类的getYear()、getMonth()、getDate()、getHours()、getMinutes()、getSeconds()、getDay()方法，你也可以将其理解为将Date类转换成int。
而Date类的getTime()方法可以得到我们前面所说的一个时间对应的长整型数，与包装类一样，Date类也有一个toString()方法可以将其转换为String类。
有时我们希望得到Date的特定格式，例如20020324，我们可以使用以下方法，首先在文件开始引入：
import java.text.SimpleDateFormat;

java.util.Date date = new java.util.Date();
//如果希望得到YYYYMMDD的格式
SimpleDateFormat sy1=new SimpleDateFormat("yyyyMMdd");
String dateFormat=sy1.format(date);
//如果希望分开得到年，月，日
SimpleDateFormat sy=new SimpleDateFormat("yyyy");
SimpleDateFormat sm=new SimpleDateFormat("MM");
SimpleDateFormat sd=new SimpleDateFormat("dd");
String syear=sy.format(date);
String smon=sm.format(date);
String sday=sd.format(date);
总结：
1、只有 boolean 不参与数据类型的转换
2、自动类型的转换：
 a.常数在表数范围内是能够自动类型转换的
 b.数据范围小的能够自动数据类型大的转换（注意特例）
 float 到 int，float 到 long，double 到 int，double 到 long 等由浮点类型转换成整数类型时，是不会自动转换的，不然将会丢失精度。
 c.引用类型能够自动转换为父类的
 d.基本类型和它们包装类型是能够互相转换的
3、强制类型转换：用圆括号括起来目标类型，置于变量前

在 java 中，任何字符类型与字符串相加，结果都是拼接。
String s = null;
s += "hello";
System.out.println(s);  // 输出 nullhello
原因：先应用 String.valueOf 得出 s 的 value 值，再通过 StringBuilder 拼接 hello，因此将 value 与 hello 进行了拼接。
String s = null;
s = (new StringBuilder(String.valueOf(s))).append("hello").toString(); 
System.out.println(s);


包装类 Integer 的自动封装
Integer a = 1;
int 类型在赋值到 Integer 类时，会自动封装，调用 Integer 的 valueOf(int i) 方法。
Integer a = Integer.valueOf(1);
/**
 * Returns an {@code Integer} instance representing the specified
 * {@code int} value.  If a new {@code Integer} instance is not
 * required, this method should generally be used in preference to
 * the constructor {@link #Integer(int)}, as this method is likely
 * to yield significantly better space and time performance by
 * caching frequently requested values.
 *
 * This method will always cache values in the range -128 to 127,
 * inclusive, and may cache other values outside of this range.
 *
 * @param  i an {@code int} value.
 * @return an {@code Integer} instance representing {@code i}.
 * @since  1.5
 */
public static Integer valueOf(int i) {
    assert IntegerCache.high >= 127;
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
当 i >= -128 && i <= 127 时，Integer.valueOf(i) 会将 i 存储在内部类 IntegerCache的static final Integer cache[]里，这一字节的缓存内存地址是静态的，返回值即:
IntegerCache.cache[i + (-IntegerCache.low)]
因此:
Integer a = 1; 
Integer b = 1;
a 和 b 的引用都指向同一个对象，即 a == b。
