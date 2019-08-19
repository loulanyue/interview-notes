## Http协议的组成
>http协议的整个过程为客户端发起httpRequest，服务端接受到httpRequest，处理并返回httpResponse，客户端接受到httpResponse。

## HttpRequest
##### httpRequest由调用方式、调用地址、requestHeader、requestBody（可选）组成
##### 调用方式： 我们通常用的调用方式为Get和Post，不过基于RestFUL的思想，我们常用的方式可以有5种，分别是 Get 、 Post 、 Put 、 Delete 、 Patch 
>• Get：一般用于查询某个资源，幂等。类似于select操作
• Post：一般用于新增某个资源，非幂等。类似于insert操作
• Put：一般用于新增或修改某个资源，幂等。类似于upsert操作
• Delete：一般用于删除某个资源，幂等。类似于delete操作，不过真实数据库物理删除比较危险，一般改为逻辑删除
• Patch：一般用于修改某个资源，非幂等。类似于update操作
##### 调用地址： 调用地址就是我们常说的URL，URL常用的也分为协议头、主机地址、端口号、方法名、query参数，一般最后的 # 定位我们不用关心，这里不提了。
>• 协议头：最常用的就是http和https了，因为https实际上是在http协议的基础上增加了一层TLS加密，我们只需要知道https加密的是整个http消息内容，包括httpHeader和httpBody（不包括请求方式和请求地址），所以https的消息若没有秘钥，是没有办法知道具体内容的
• 主机地址：就是域名，也可以是ip地址，域名本身也是通过本机host文件或者DNS服务器解析得到ip的
• 端口号：开放访问服务的端口号，如果没有就是默认的端口号，http默认80端口，https默认443端口
• 方法名：方法名一般就是后端代码中的接口访问地址，但也不绝对。一般反向代理服务器（通常是Tengine或Nginx）可以做转发，即/projectA/v1/xxx可以被转发到projectA项目所属的集群的v1版本的机器上，最终代码中的接口访问路径可能就只是/xxx，由反向代理服务器来作转发的好处就是可以前端没有跨域问题，所有访问请求都是相同域名下的
• query参数：通常叫做 QueryParam ，即整个调用地址 ? 后面的部分（同时也是 # 前面的部分），key-value形式
requestHeader： 消息头，同query一样，也是key-value形式的，这里可以传自定义参数，通常叫做 HeaderParam 。我们常用的Cookie就是被存储在消息头里面的，是一组key-value，key为 Cookie ，value就是cookie的内容了
## requestBody： 消息体，和上面几个不同的是，消息体是可选的，只有在上述5种调用方式中的 Post 、 Put 、 Patch 才可以包含消息体
>在接口穿参过程中，通过requestBody来传递的参数最常用的就是 FormParam （类似QueryParam，区别为参数所在位置不同，适合传输参数数量较小的情况，可以被加密，但QueryParam不可被加密）和 BeanParam （一般就是Json格式的参数，可以直接在后端代码中转换成一个JavaBean的参数，适合传输参数数量比较多的情况）

## HttpResponse
>httpResponse由http状态码、responseHeader（一般不关心）、responseBody（其实可选，但实际都有）组成
http状态码： 分为5大类，分别为
100系列（一般不关心）
200系列（200-ok、202-accepted、204-no content，202好处是异步场景告诉客户端已经接收到请求，但请求未必被处理，没有body，204好处是请求已经被成功执行，没有body，但是实际情况下，集团普遍使用200代替202和204，同时在body中加入表示状态的字段）
300系列（302-found、303-see other，一般都用302来重定向）
400系列（401-forbidden、404-not found、405-method not allowed，客户端错误，但集团会将400系列统一由反向代理服务tegine重定向到淘宝错误页，所以该系列无法使用）
500系列（服务端错误，但和400系列一致，集团会统一处理，所以也不可用），虽然http状态码种类繁多，在RestFUL中用处很大
## responseBody： 通常返回就是一个json格式的返回值，包含了各级必要的参数
