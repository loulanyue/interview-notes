##### IDEA警告：Anonymous new Callable<String>() can be replaced with lambda more... (Ctrl+F1)
## 原代码：

            Callable<String> queryAndSyncTag = new Callable<String>() {
                @Override
                public String call() throws Exception {
					//Todo
                    return tag;
                }
            };

## 可调整为：

            Callable<String> queryAndSyncTag = () -> {
            		//Todo
                    return tag;
            };
