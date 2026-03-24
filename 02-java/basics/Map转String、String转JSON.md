## 1.Map转字符串
            String str = "{\"key1\":\"value1\",\"key2\":\"value2\",\"key2\":\"value3\"}";
            Map maps = (Map) JSON.parse(str);
            System.out.println("JSON map转字符串：");
            for (Object map : maps.entrySet()){
                if(map==maps.entrySet()){
                    System.out.print(((Map.Entry)map).getKey()+":" + ((Map.Entry)map).getValue());
                }
                System.out.print(((Map.Entry)map).getKey()+":" + ((Map.Entry)map).getValue()+";");
            }
 运行结果：
 
	JSON map转字符串：
	key1:value1;key2:value2;key3:value3;
## 2.String字符串处理
			String arr = array.substring(0, array.length() - 1).substring(1).replace(" ", "").trim();
			
			String str = "{name=天2, id=12, value=},{name=天23, id=23, value=}";
			str.substring(0, array.length() - 1); //去除最后一个字符
			str.substring(1);//去除第一个字符
			str.replace(" ", "");//去除字符串内所有空格
			str.trim();//去除前后空格
			String[] arrays = arr.split("\\},\\{");//以},{切分
## 3.从JSONObject提取数组，查数组内各元素值
            JSONObject jsonObject = JSONObject.parseObject(j);
            JSONArray jsonArray = jsonObject.getJSONArray("ext");//从JSONObject提取数组
            JSONObject jsonObject1 = jsonArray.getJSONObject(i);//查数组内各元素值
