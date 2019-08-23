>//定义常量const，将data字符串化后排序
const paramsKeys = Object.keys(data).sort()
//定义常量md5，给任意数据一个“签名”，十六进制的字符串，crypto是Nodejs模块
const md5 = crypto.createHash('md5')
for (const key of paramsKeys) {
  //如果相等，结束本次循环，执行下一次
  if (key === 'checksum') continue
  if (typeof data[key] === 'object') 
  //转JSON字符串
  data[key] = JSON.stringify(data[key])
  //MD5计算签名
  md5.update(data[key] || '')
}
md5.update(creativeCenterKey)  // 即频道所对应的密钥
//返回MD5验签
return md5.digest('hex')
