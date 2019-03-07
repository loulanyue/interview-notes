消息队列RabbitMQ

      1.RabbitMQ是流行的开源消息队列系统
      2.用erlang语言开发 
      3.RabbitMQ是AMQP（高级消息队列协议）的标准实现。
      4.RabbitMQ支持消息的持久化
      5.遵循Mozilla Public License开源协议
      6.支持各种操作系统Linux、Windows
      7.支持各种编程语言：Java Ruby Python .NET PHP C /C++ Node.js Go Erlang等
      8.http://www.rabbitmq.com/
      9.可以用作电商网上高并发消息中间件服务器
      10.消除突发性高并发峰值压力，例如秒杀，淘宝双十一
    
Spring AMQP2.0新特性

        1.支持AMQP协议的框架，简化API
        2.Advanced Message Queuing Protocol
        3.template风格的消息处理API抽象
        4.Message-driven POJOs with a "listener container"
        5.便于依赖注入 and declarative configuration
        6.支持功能与Spring JMS统一
        7.The project consists of two parts;
        8.spring-amqp is the base abstraction
        9.spring-rabbit is the RabbitMQ implementation
        10.spring-boot-sarter-amqp快速依赖包

统一模型

1.Listener container for asynchronous processing of inbound messages

2.RabbitTemplate for sending and receiving messages

3.RabbitAdmin for automatically declaring queues,exchanges and bindings


开源MQ中间件

1.Apache Kafka

2.阿里巴巴RocketMQ

3.ActiveMQ

4.ZeroMQ

5.RabbitMQ


RabbitMQ 4种交换机

Direct Exchange

Topic Exchange

Fanout Exchange

Header Exchange


RabbitMQ消息队列架构


Linux安装RabbitMQ


Java Spring AMQP架构

核心API

1.RabbitTemplate

2.SimpleMessageConverter

3.GenericMessageConverter

4.Jackson2jsonMessageConverter

5.ConnectionFactory

6.@RabbitListener


Spring Boot配置

  spring.rabbitmq.host=localhost
  
  spring.rabbitmq.port=5672
  
  spring.rabbitmq.username=youfanyu
  
  spring.rabbitmq.password=admin

