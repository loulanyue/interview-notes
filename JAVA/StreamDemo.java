
import java.util.Arrays;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

/**
 * @author youfyu
 * @Description: Stream方法验证
 * @date 2020/4/9
 */

public class StreamDemo {

    public static void main(String[] args) {
        //遍历
        methodForeach();
        
        //循环
        methodMap();
        
        //条件过滤
        methodFilter();
        
        //限制
        methodLimit();
        
        //排序
        methodSorted();
        
        //并行 parallel
        methodParallel();
        
        //筛选
        methodCollectors();
        
        //统计
        methodSummaryStatistics();

    }

    private static void methodSummaryStatistics() {
        List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5, -1, -133);
        List<Integer> list = numbers.subList(0, 3);
        IntSummaryStatistics stats = list.stream().mapToInt((x) -> x).summaryStatistics();
        System.out.println("前3之和 : " + stats.getSum());
        System.out.println("列表中最大的数 : " + stats.getMax());
        System.out.println("列表中最小的数 : " + stats.getMin());
        System.out.println("平均数 : " + stats.getAverage());
    }

    private static void methodCollectors() {
        List<String>strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl","bc");
        List<String> filtered = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.toList());

        System.out.println("筛选列表: " + filtered);
        String mergedString = strings.stream().filter(string -> !string.isEmpty()).collect(Collectors.joining(", "));
        System.out.println("合并字符串: " + mergedString);
    }

    private static void methodParallel() {
        List<String> strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl");
        // 获取空字符串的数量
        long count = strings.parallelStream().filter(string -> string.isEmpty()).count();
        System.out.println("空字符串的数量"+count);
    }

    private static void methodSorted() {
        Random random = new Random();
        random.ints().limit(10).sorted().forEach(System.out::println);
    }

    private static void methodLimit() {
        Random random = new Random();
        random.ints().limit(2).forEach(System.out::println);
    }

    private static void methodFilter() {
        List<String> strings = Arrays.asList("abc","a","c","", "", "bc", "efg", "abcd","", "jkl");
        // 获取空字符串的数量
        long count = strings.stream().filter(string -> !string.isEmpty()).count();
        System.out.println("非空字符串的数量="+count);
    }

    private static void methodMap() {
        List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
        // 获取对应的平方数
        List<Integer> squaresList = numbers.stream().map( i -> i*i).distinct().collect(Collectors.toList());
        squaresList.forEach(System.out::println);
    }

    private static void methodForeach() {
        List<String> strList = Arrays.asList("YangHang", "AnXiaoHei", "LiuPengFei");
        strList.forEach(new PrintUtil()::addString);
    }

    private static void doRandom() {
        Random random = new Random();
        random.ints().limit(2).forEach(System.out::println);
    }
}
