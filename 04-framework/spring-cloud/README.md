###### 一、SpringCloud Alibaba的由来
众所周知SpringCloud 版本迭代算是比较快的，因而出现了很多重大ISSUE都来不及Fix就推另一个Release了，随着Spring Cloud Netflix项目进入到**维护模式**(SpringCloud Netflix Projects Entering Maintenance Mode)，意味着SpringCloud团队将不会再向模块添加新功能，只修复block级别的bug以及安全问题，也会考虑并审查社区的小型pull request，以后将以维护和Merge分支Full Request为主；新组件功能将以其他替代的方式实现

[SpringCloud Alibaba官网](https://spring.io/projects/spring-cloud-alibaba#overview)

依赖引入：

	<dependencyManagement>
	    <dependencies>
	        <dependency>
	            <groupId>com.alibaba.cloud</groupId>
	            <artifactId>spring-cloud-alibaba-dependencies</artifactId>
	            <version>2.1.0.RELEASE</version>
	            <type>pom</type>
	            <scope>import</scope>
	        </dependency>
	    </dependencies>
	</dependencyManagement>

###### 二、SpringCloud Alibaba的功能
**2.1 服务限流降级**：默认支持Servlet、Feign、RestTemplate、Dubbo和RocketMQ限流降级功能的接入，可以在运行时通过控制台实时修改限流降级规则，还支持查看限流降级Metrics监控

**2.2 服务注册与发现**：适配SpringCloud服务注册与发现标准，默认集成了Ribbon的支持

**2.3 分布式配置管理**：支持分布式系统中的外部化配置，配置更改时自动刷新

**2.4 消息驱动能力**：基于SpringCloud Stream为微服务应用构建消息驱动能力

**2.5 阿里云对象存储**：阿里云提供的海量、安全、低成本、高可靠的云存储服务。支持在任何应用、任何时间、任何地点存储和访问任意类型的数据

**2.6 分布式任务调度**：提供秒级、精准、高可靠、高可用的定时（基于Cron表达式）任务调度任务。同时提供分布式的任务执行模型，如网格任务。网格任务支持海量子任务均匀分配到所有Worker（schedulerx-client）上执行


###### 三、可搭配使用的中间件

**3.1 Sentinel**
阿里巴巴开源产品，把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性

**3.2 Nacos**
阿里巴巴开源产品，一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台

**3.3 RocketMQ**
Apache RocketMQ 基于Java的高性能、高吞吐量的分布式消息和流计算平台

**3.4 Dubbo**
Apache Dubbo 是一款高性能Java RPC框架

**3.5 Seata**
阿里巴巴开源产品，一个易于使用的高性能微服务分布式事务解决方案

**3.6 Alibaba Cloud OSS**
阿里云对象存储服务(Object storage Service ,简称OSS)，是阿里云提供的海量、安全、低成本、高可靠的云存储服务

**3.7 Alibaba Cloud SchedulerX**
阿里中间件团队开发的一款分布式任务调度产品，支持周期性的任务与固定时间点触发任务
