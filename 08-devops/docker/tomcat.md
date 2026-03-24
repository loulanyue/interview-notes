>## 一.Tomcat 总体结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190710192726439.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdWxhbnl1ZV8=,size_16,color_FFFFFF,t_70)
1.Server(服务器)是Tomcat构成的顶级构成元素，所有一切均包含在Server中，Server的实现类StandardServer可以包含一个到多个Services。

2.次顶级元素Service的实现类为StandardService调用了容器(Container)接口，其实是调用了Servlet Engine(引擎)，而且StandardService类中也指明了该Service归属的Server。

3.连接器(Connector)将Service和Container连接起来，首先它需要注册到一个Service，它的作用就是把来自客户端的请求转发到Container(容器)，这就是它为什么称作连接器的原因。多个Connector可以对应一个Container。

4.接下来次级的构成元素就是容器(Container)，主机(Host)、上下文(Context)和引擎(Engine)均继承自Container接口，所以它们都是容器。但是，它们是有父子关系的，在主机(Host)、上下文(Context)和引擎(Engine)这三类容器中，引擎是顶级容器，直接包含是主机容器，而主机容器又包含上下文容器，所以引擎、主机和上下文从大小上来说又构成父子关系，虽然它们都继承自Container接口。

我们从功能的角度将Tomcat源代码分成5个子模块，它们分别是：

##### Jsper子模块：这个子模块负责jsp页面的解析、jsp属性的验证，同时也负责将jsp页面动态转换为java代码并编译成class文件。在Tomcat源代码中，凡是属于org.apache.jasper包及其子包中的源代码都属于这个子模块；
##### Servlet和Jsp规范的实现模块：这个子模块的源代码属于javax.servlet包及其子包，如我们非常熟悉的javax.servlet.Servlet接口、javax.servet.http.HttpServlet类及javax.servlet.jsp.HttpJspPage就位于这个子模块中；
##### Catalina子模块：这个子模块包含了所有以org.apache.catalina开头的java源代码。该子模块的任务是规范了Tomcat的总体架构，定义了Server、Service、Host、Connector、Context、Session及Cluster等关键组件及这些组件的实现，这个子模块大量运用了Composite设计模式。同时也规范了Catalina的启动及停止等事件的执行流程。从代码阅读的角度看，这个子模块应该是我们阅读和学习的重点。
##### Connectors子模块：如果说上面三个子模块实现了Tomcat应用服务器的话，那么这个子模块就是Web服务器的实现。所谓连接器(Connector)就是一个连接客户和应用服务器的桥梁，它接收用户的请求，并把用户请求包装成标准的Http请求(包含协议名称，请求头Head，请求方法是Get还是Post等等)。同时，这个子模块还按照标准的Http协议，负责给客户端发送响应页面，比如在请求页面未发现时，connector就会给客户端浏览器发送标准的Http 404错误响应页面。
##### Resource子模块：这个子模块包含一些资源文件，如Server.xml及Web.xml配置文件。严格说来，这个子模块不包含java源代码，但是它还是Tomcat编译运行所必需的。

>## Tomcat运行流程
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190710203033160.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdWxhbnl1ZV8=,size_16,color_FFFFFF,t_70)
假设来自客户的请求为：http://localhost:8080/test/index.jsp

请求被发送到本机端口8080，被在那里侦听的Coyote HTTP/1.1 Connector获得
Connector把该请求交给它所在的Service的Engine来处理，并等待Engine的回应
Engine获得请求localhost:8080/test/index.jsp，匹配它所有虚拟主机Host
Engine匹配到名为localhost的Host（即使匹配不到也把请求交给该Host处理，因为该Host被定义为该Engine的默认主机）
localhost Host获得请求/test/index.jsp，匹配它所拥有的所有Context
Host匹配到路径为/test的Context（如果匹配不到就把该请求交给路径名为""的Context去处理）
path="/test"的Context获得请求/index.jsp，在它的mapping table中寻找对应的servlet
Context匹配到URL PATTERN为*.jsp的servlet，对应于JspServlet类
构造HttpServletRequest对象和HttpServletResponse对象，作为参数调用JspServlet的doGet或doPost方法
Context把执行完了之后的HttpServletResponse对象返回给Host
Host把HttpServletResponse对象返回给Engine
Engine把HttpServletResponse对象返回给Connector
Connector把HttpServletResponse对象返回给客户browser
 

>## 二.Container 结构

Container 就是Servlet 容器。

Container是容器的父接口，所有子容器都必须实现这个接口，Container容器的设计用的是典型的责任链的设计模式，它有四个子 容器组件构成，分别是：Engine、Host、Context、Wrapper，这四个组件不是平行的，而是父子关系，Engine包含 Host,Host 包含 Context，Context 包含 Wrapper。通常一个 Servlet class 对应一个 Wrapper，如果有多个 Servlet 就可以定义多个 Wrapper，如果有多 个 Wrapper 就要定义一个更高的Container 了，如 Context， Context 通常就是对应下面这个配置：

 在server.xml 配置：


	<Context
	 
	path="/library"
	docBase="D:\projects\library\deploy\target\library.war"
	reloadable="true"
	/>

>## 三.Connector 

对Connector的配置位于conf/server.xml文件中。

### 1.一个典型的配置如下：（BIO HTTP/1.1 Connector配置）

<Connector port=”8080” protocol=”HTTP/1.1” maxThreads=”150” 
connectionTimeout=”20000” redirectPort=”8443” >
其它一些重要属性如下：

acceptCount : 接受连接request的最大连接数目，默认值是10
address : 绑定IP地址，如果不绑定，默认将绑定任何IP地址
allowTrace : 如果是true,将允许TRACE HTTP方法
compressibleMimeTypes : 各个mimeType, 以逗号分隔，如text/html,text/xml
compression : 如果带宽有限的话，可以用GZIP压缩
connectionTimeout : 超时时间，默认为60000ms (60s)
maxKeepAliveRequest : 默认值是100
maxThreads : 处理请求的Connector的线程数目，默认值为200
如果是SSL配置，如下：

	<Connector port="8181" protocol="HTTP/1.1" SSLEnabled="true" 
	    maxThreads="150" scheme="https" secure="true" 
	    clientAuth="false" sslProtocol = "TLS" 
	    address="0.0.0.0" 
	    keystoreFile="E:/java/jonas-full-5.1.0-RC3/conf/keystore.jks" 
	    keystorePass="changeit" /> 
其中，keystoreFile为证书位置，keystorePass为证书密码。

### 2.NIO HTTP/1.1 Connector配置
<Connector port=”8080” protocol=”org.apache.coyote.http11.Http11NioProtocol” 
    maxThreads=”150” connectionTimeout=”20000” redirectPort=”8443” >
 
类图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190710204001229.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdWxhbnl1ZV8=,size_16,color_FFFFFF,t_70)
Connector工作流程顺序图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190710204008870.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdWxhbnl1ZV8=,size_16,color_FFFFFF,t_70)
