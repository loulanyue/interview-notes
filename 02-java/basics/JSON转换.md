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

## 4.多层 Map 内嵌时取值

如果外层数据是多层嵌套的 `Map`，可以先取动态 key，再逐层强转：

```java
String tem = ot.getLong("id").toString();
Map m1 = (Map) map.get("result");
Map m2 = (Map) m1.get(tem);
```

这种写法常见于 FastJSON 或接口返回值结构不稳定的场景，使用前最好先判空并确认 key 是否存在。
