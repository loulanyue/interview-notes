### lambda作为JDK1.8的新特性，函数式编程不可不知，请看：
## lambda底层实现原理
	1. 编译器会为每一个lambda表达式生成一个方法
			方法名是lambda$0,1,2,3，但方法引用的表达式不会生成方法。
	2. 在lambda地方会产生一个invokeDynamic指令，这个指令会调用
			bootstrap（引导）方法，bootstrap方法会指向自动生成的lambda$0
			方法或者方法引用的方法。
	3. bootstrap方法使用上是调用了LambdaMetafactory.metafactory静态方法
			该方法返回了CallSite(调用站点)，里面包含了MethodHandle（方法句柄）
			也就是最终调用的方法。
	4. 引导方法只会调用一次。
	自动生成的方法：
	5. 输入和输出和lambda一致
	6. 如果没有使用this，那么就是static方法，否则就是成员方法

示例：

	public strictfp class LambdaDemo1 {
		public static void main(String[] args) {
			//引用接口1 实现i*2
			Interface1 i1 = (i) -> i * 2;
			//引用接口1 实现 10-3
			Interface1.sub(10, 3);
			//先加后乘
			System.out.println(i1.add(3, 7));
			System.out.println(i1.doubleNum(20));
			//引用接口2 i*2
			Interface2 i2 = i -> i * 2;
			//乘2后打印
	        System.out.println("i2:"+i2.doubleNum(333333333));
			//引用接口3 i*3
	        Interface3 i5 = i -> i*3;
	        //乘3后打印
	        System.out.println("i5:"+i5.doubleNum(333333333));
			//引用接口1 先打印----- 后i*2
			Interface1 i4 = (int i) -> {
				System.out.println("-----");
				return i * 2;
			};
			//乘2后打印输出
	        System.out.println(i4.doubleNum(100));
		}
		
		@FunctionalInterface
		interface Interface1 {
			int doubleNum(int i);
		
			default int add(int x, int y) {
				return x + y;
			}
		
		static int sub(int x, int y) {
			return x - y;
		}
	}
	
		@FunctionalInterface
		interface Interface2 {
			int doubleNum(int i);
		
			default int add(int x, int y) {
				return x + y;
			}
		}
		
		@FunctionalInterface
		interface Interface3 extends Interface2, Interface1 {
			@Override
			//继承
			default int add(int x, int y) {
				return Interface1.super.add(x, y);
			}
		}
	}
