## &&短路与

## equals 自反 对称 传递 一致

## 函数不能根据返回类型来区分重载

## ==和equals 运算符 方法

## String不可变类，StringBuffer可变

## Error和Exception

      ArrayIndexOutOfBoundsException数组脚本越界
      NullPointerException空指针异常
      ClassCastException类转换异常
    
## RuntimeException

      1.NullPointerException
      2.ClassNotFoundException
      3.NumberFormatException
      4.IndexOutOfBoundsException
      5.IllegalArgumentException
      6.ClassCastException
      7.NoClassDefFoundException
      8.SQLException
      9.InstantiationException
      10.NoSuchMethodException
      
## String、StringBuilder和StringBuffer

## Spring 启动排错速记

### 同名且不兼容的 Bean 定义

如果启动时报错：

```text
for bean class [com.xxx.ctsg.service.impl.xxx] conflicts with existing,
non-compatible bean definition of same name and class
```

通常表示存在重名 Bean，且类型并不兼容。最直接的处理方式是修改类名或 Bean 名称，确保定义唯一。
