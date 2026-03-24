## 如果未做同步控制时，代码在多线程下是安全的吗
	不安全，没有synchronized修饰
	
## HashMap的代码，它是线程安全的吗
	不安全
	
## 线程安全的Map-HashTable是如何实现线程安全的呢
	synchronized修饰
	
## 有了HashTable为何还要有个ConcurrentHashMap
	HashTable效率低下，concurrentHashMap做了改进

## ConcurrentHashMap是如何实现线程安全的呢
	分段锁
	JDK1.7及以前	1000个桶，16个段
	JDK1.8和以后	每个桶都有自己独立的锁
