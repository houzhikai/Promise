![image](https://github.com/houzhikai/Promise/blob/master/img/image.png)







 /*
     过程
         当调用 getWeather('北京') 的时候会执行 const getWeather 这句话， 之后会new 出Promise2 对象， 在这个过程中会先 构造 constructor 函数，Promise2对象里的resolve 和 reject就是 constructor 前面的 那两个函数。
         在这个过程中会进行ajax 创建 xhr 对象，这里面就是异步的过程，马上就会open 和 onload，结束之后， class Promise2里的resolve 和 reject函数返回出去，这个时候得到了 getWeather('北京')对象，马上就会执行 .then ，将.then 里面的两个参数 succeed,fail 传递出去 设为空（但是这个时间会很短10ms 左右）
         ajax请求最快也得100ms，所以 才执行onload，这个时候参数都准备就绪，直接执行则完成程序
  
  */
