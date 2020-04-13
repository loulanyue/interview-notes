JDK 14于2020年3月17日发布了通用版本，新的 Java14 中加入了非常多的语法糖，可以使得我们能更加的快捷编写简洁的代码：

一、增强 switch case 代码块
右箭头 ->替代冒号，支持判断合并

	private static void switchCase() {
	        String day = "1";
	        switch (day) {
	            case "周一", "周二" -> System.out.println("这里是周一和周二");
	            case "周三" -> System.out.println("这里是周三");
	            case "周四" -> System.out.println("这里是周四");
	            default -> System.out.println("这里是周五六日");
	        }
	
	        boolean isWorkday = switch (day) {
	            case "周六", "周日" -> false;
	            default -> {
	                yield isWeekend(day);
	            }
	        };
	
	
	        if (isWorkday) {
	            System.out.println("isWorkday 不是 周六 周日");
	        }else{
	            System.out.println("isworkday is false!");
	        }
	    }
	
	    private static boolean isWeekend(String day) {
	        if(day.equals("1")){
	            return false;
	        }
	        return true;
	    }

二、新增关键字 record（构造函数）
通过关键字record，替代创建类，写get，set，equals，hashcode等方法

	public record Range(String name, int age) {}


三、增强NPE NullPointerException 错误定位
在多层级下，指出具体哪个对象取数据时为null
