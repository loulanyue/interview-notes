##### 一、什么是Stream流
Stream流是数据渠道，用于操作数据源（集合、数组等）所生成的元素序列
##### 二、Stream流的特点
2.1 Stream 自己不会存储元素

2.2 Stream 不会改变源对象，会返回一个持有结果的新Stream

2.3 Stream 操作是延迟执行的，会等到需要结果的时候才执行
##### 三 、Stream流的应用
3.1 创建一个Stream：一个数据源（数组、集合）
3.2 中间操作：一个中间操作，处理数据源数据
3.3 终止操作：一个终止操作，执行中间操作链，产生结果

示例：

	import lombok.AllArgsConstructor;
	import lombok.Data;
	import lombok.NoArgsConstructor;
	
	import java.util.Arrays;
	import java.util.List;
	import java.util.UUID;
	import java.util.function.*;
	
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	class User
	{
	    private Integer id;
	    private String  userName;
	    private int     age;
	}
	
	/**
	 *
	 * 请按照给出数据，找出同时满足:
	 *      偶数ID且年龄大于24且用户名转为大写且用户名字母倒排序
	 *      最后只输出一个用户名字
	 */
	public class StreamDemo
	{
	    public static void main(String[] args)
	    {
	        User u1 = new User(1,"a",13);
	        User u2 = new User(2,"b",14);
	        User u3 = new User(3,"c",12);
	        User u4 = new User(4,"d",18);
	        User u5 = new User(5,"f",16);
	
	        List<User> list = Arrays.asList(u1,u2,u3,u4,u5);
	
	        list.stream().filter(p -> {
	            return p.getId() % 2 == 0;
	        }).filter(p -> {
	            return p.getAge() > 24;
	        }).map(f -> {
	            return f.getUserName().toUpperCase();
	        }).sorted((o1, o2) -> {
	            return o2.compareTo(o1);
	        }).limit(1).forEach(System.out::println);
	
	
	        //    R apply(T t);
	        Function<String,Integer> function = t -> {return t.length();};
	        System.out.println(function.apply("abc"));
	
	        // boolean test(T t);
	        Predicate<String> predicate = t -> {return t.startsWith("a");};
	        System.out.println(predicate.test("a"));
	
	        //void accept(T t);
	        Consumer<String> consumer = t -> {System.out.println(t);};
	        consumer.accept("java1018");
	
	
	        //    T get();
	        Supplier<String> supplier =  () -> {return UUID.randomUUID().toString();};
	        System.out.println(supplier.get());;
	
	    }
	}

##### 四、Stream流常见的方法
###### 4.1 forEach
Stream 提供了新的方法 'forEach' 来迭代流中的每个数据。以下代码片段使用 forEach 输出了10个随机数：

Random random = new Random();
random.ints().limit(10).forEach(System.out::println);
###### 4.2 map
map 方法用于映射每个元素到对应的结果，以下代码片段使用 map 输出了元素对应的平方数：

List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
// 获取对应的平方数
List<Integer> squaresList = numbers.stream().map( i -> i*i).distinct().collect(Collectors.toList());
###### 4.3 filter
filter 方法用于通过设置的条件过滤出元素。以下代码片段使用 filter 方法过滤出空字符串：

List<String>strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl");
// 获取空字符串的数量
long count = strings.stream().filter(string -> string.isEmpty()).count();
###### 4.4 limit
limit 方法用于获取指定数量的流。 以下代码片段使用 limit 方法打印出 10 条数据：

Random random = new Random();
random.ints().limit(10).forEach(System.out::println);
###### 4.5 sorted
sorted 方法用于对流进行排序。以下代码片段使用 sorted 方法对输出的 10 个随机数进行排序：

Random random = new Random();
random.ints().limit(10).sorted().forEach(System.out::println);
###### 4.6 并行（parallel）程序
parallelStream 是流并行处理程序的代替方法。以下实例我们使用 parallelStream 来输出空字符串的数量：

List<String> strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl");
// 获取空字符串的数量
int count = strings.parallelStream().filter(string -> string.isEmpty()).count();
我们可以很容易的在顺序运行和并行直接切换。

###### 4.7 Collectors
Collectors 类实现了很多归约操作，例如将流转换成集合和聚合元素。Collectors 可用于返回列表或字符串：

List<String>strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl");
List<String> filtered = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.toList());
 
System.out.println("筛选列表: " + filtered);
String mergedString = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.joining(", "));
System.out.println("合并字符串: " + mergedString);
###### 4.8 统计
另外，一些产生统计结果的收集器也非常有用。它们主要用于int、double、long等基本类型上，它们可以用来产生类似如下的统计结果。

List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
 
IntSummaryStatistics stats = numbers.stream().mapToInt((x) -> x).summaryStatistics();
 
System.out.println("列表中最大的数 : " + stats.getMax());
System.out.println("列表中最小的数 : " + stats.getMin());
System.out.println("所有数之和 : " + stats.getSum());
System.out.println("平均数 : " + stats.getAverage());
