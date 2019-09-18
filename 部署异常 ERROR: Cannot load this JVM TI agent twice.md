### 部署机器报错：
	ERROR: Cannot load this JVM TI agent twice, check your java command line for duplicate jdwp options.

### 原因：
	CATALINA_OPTS="${CATALINA_OPTS} -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8000"

### 解法：
	ERROR: Cannot load this JVM TI agent twice, check your java command line for duplicate jdwp options.
	在.xml将-Xrunjdwp:transport=dt_socket,address=8000,server=y,suspend=n 去掉
