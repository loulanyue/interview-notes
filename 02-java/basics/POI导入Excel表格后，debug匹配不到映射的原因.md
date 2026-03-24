### 问题：最近在实现用POI实现批量修改信息的功能，后端配置好controller了，点击上传excel按钮后，提示接口异常，但debug还未抵达后端映射
>### 原因：排查后发现后端Spring接口方法名与前端LayUi的函数方法名不一致，调整后正常
#### 前端：

	batchStoreInfo:function () {
	        layui.use('upload', function(){
	            var upload = layui.upload;
	
	            //执行实例
	            var uploadInst = upload.render({
	                elem: '#import-store-btn' //绑定元素
	                ,accept: 'file'  //指定上传文件类型为所有
	                ,exts: 'xlsx|xls'
	                ,size: 1024
	                ,url: '/api/xxx/batchStoreInfo' //上传接口
	                ,before: function (obj) {
	                    layer.load(); //上传loading
	                }
#### 后端：

	@RequestMapping(value = "/batchStoreInfo", method = RequestMethod.POST)
	    private JsonXXXResult batchStoreInfo(MultipartFile file)...
