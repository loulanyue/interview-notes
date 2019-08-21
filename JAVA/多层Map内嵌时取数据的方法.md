> 1.拿到常量key
> String tem = ot.getLong("id").toString();
> 2.对象强转map，通过fastjson
        Map m1 = (Map)map.get("result");
        Map m2 = (Map)m1.get(tem);
