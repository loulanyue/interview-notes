## 说明：

  1.ES5 引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键名
  2.JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串
  3.md5.update(data[key] || '') 支持多次update表示追加字符串后进行md5加密

## 验签流程如下：

  const pkeys= Object.keys(data).sort() //取出对象中的键名 进行排序
  const md5 = crypto.createHash('md5') //定义md5常量
  for (const key of pkeys) { //遍历 对象中的键值对
    if (key === 'checkkey') continue //如果匹配到checkkey则终止
    if (typeof data[key] === 'object') data[key] = JSON.stringify(data[key]) //如果类型为object  则转换为JSON字符串
    md5.update(data[key] || '') //每次遍历后进行md5签名
  }
  md5.update(centerKey)  //再次追加签名
  return md5.digest('hex') //返回验签值
  console.log(result)
