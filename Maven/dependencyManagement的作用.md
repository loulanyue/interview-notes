##### 一、dependencyManagement的介绍
Maven使用dependencyManagement元素来提供一种**管理依赖版本号**方式，通常会在一个组织或者项目的最顶层的父POM中看到dependencyManagement元素
##### 二、使用dependencyManagement的好处
使用pom.xml中的dependencyManagement元素能让所有在子项目中引用一个依赖而不用显式的列出版本号；maven会沿着父子层次向上走，直到找到一个拥有dependencyManagement元素的项目，然后它就会使用这个dependencyManagement元素中指定的版本号

	  <!--子模块继承后,提供作用:锁定版本+子module不用groupId和version-->
	  <dependencyManagement>
	    <dependencies>
	      <dependency>
	        <groupId>mysql</groupId>
	        <artifactId>mysql-connector-java</artifactId>
	        <version>${mysql.version}</version>
	      </dependency>
	      
然后在子项目里就可以添加mysql-connector时可以不指定版本号

	        <!--mysql-connector-java-->
	        <dependency>
	            <groupId>mysql</groupId>
	            <artifactId>mysql-connector-java</artifactId>
	        </dependency>
        
这样做的好处就是: 如果有多个子项目都引用同一样的依赖,则可以避免在每个使用的子项目里都声明一个版本号,这样想升级或切换到另一个版本时,只需在顶层父容器里更新,而不需要一个一个子项目的修改;另外如果某个子项目需要另外的一个版本,只需声明version版本 


dependencyManagement里只是声明依赖，并不实现引入，因此子项目需要显示的声明需要用的依赖

