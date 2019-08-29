## iframe页：
      <iframe id="my-iframe" src="url"frameborder="no" width="100%" height="100%"></iframe>
      	<script type="text/javascript">
         window.addEventListener('message',function(e){
			 const da = e.data;
			 console.log(da);
			myFunction(da);
		 });
		 function myFunction(p1){
			var result1 = p1;
			console.table(result1);	
			document.getElementById("demo").innerHTML = JSON.stringify(result1);
		 }
		</script>
## 注：如果打印结果为：[object Object]，需使用JSON.stringify() 字符串化
