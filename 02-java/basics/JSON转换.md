## 1.引入依赖
   
           <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.58</version>
      	  </dependency>
   
## 2.JSONObject中提取数组
        JSONObject json = new JSONObject(map);
        JSONArray jsonArray = json.getJSONArray("ex");
                for (int i = 0; i < jsonArray.size(); i++) {
                	 ...
        			 jsonArray.remove(i);
        			 ...
				}
## 3.map拼接JSON
		List list = new ArrayList<>();
        Map<String,Object> map1 = new HashMap<>();
        map1.put("id",1);
        map1.put("name","天1");
        map1.put("value","");
        Map<String,Object> map2 = new HashMap<>();
        map2.put("id",2);
        map2.put("name","天2");
        map2.put("value","");
        list.add(map1);
        list.add(map2);
        Map<String,Object> map = new HashMap<>();
        map.put("code", 24);
        map.put("ex", list);
        System.out.println(json);
        System.out.println(map.get("code"));

>拼接结果：
{
	"code": 24,
	"ext": [{
		"name": "天1",
		"id": 1,
		"value": ""
	}, {
		"name": "天2",
		"id": 2,
		"value": ""
	}]
}
