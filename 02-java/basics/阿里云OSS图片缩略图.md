OSS图片支持拼接url实现图片缩略图，配置如下：
## 按百分比缩放：
?x-oss-process=image/resize,p_12
## 将原图指定按短边缩略 100x100
?x-oss-process=image/resize,m_lfit,h_200,w_200

http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_lfit,h_200,w_200

---

<!-- note-nav:start -->
## 导航
- [返回仓库首页](../../README.md)
- [返回当前专题导航](./README.md)
- [返回上一级主题](../README.md)
<!-- note-nav:end -->
