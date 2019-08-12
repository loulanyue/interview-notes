	public class Empty{
	    public static void main(String[] args) {
	        //分配内存空间，值为空
	        String a = new String();
	        //分配内存空间，值为空字符串
	        String b = "";
	        //未分配内存空间
	        String c = null;
	
	        if (a != null) {
	            System.out.println("a值存在");
	        }
	        if (b != null) {
	            System.out.println("b值存在");
	        }
	        if (c == null) {
	            System.out.println("c值不存在");
	        }
	        if (a == "") {
	            System.out.println("a值存在，为空字符串");
	        }
	        if (b == "") {
	            System.out.println("b值存在，为空字符串");
	        }
	        //dead code
	        if (c == "") {
	            System.out.println("c值存在，为空字符串");
	        }
	        if (a.isEmpty()) {
	            System.out.println("a值存在，为空字符串或者为空");
	        }
	        if (b.isEmpty()) {
	            System.out.println("b值存在，为空字符串或者为空");
	        }
	        // Null pointer access: The variable c can only be null at this location
	        if (c.isEmpty()) {
	           System.out.println("String c=null");
	        }
	    }
	
	}
	
运行结果：

	a值存在
	b值存在
	c值不存在
	b值存在，为空字符串
	a值存在，为空字符串或者为空
	b值存在，为空字符串或者为空

因此：
isEmpty()
	
	1.如果不分配内存空间，不能用isEmpty(),否则报空指针异常
	
	2.isEmpty()不能分辨出值是空还是空字符串

null

	null只能分辨出值是否不分配内存空间

""

	不管值是否分配内存空间都不会报错
