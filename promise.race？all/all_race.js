//promise.race   得到一个最先 resolve 的结果
const getWeather = city => new Promise((resolve,reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET','http://rap2api.taobao.org/app/mock/244238/getWeather?city='+city,true)
    xhr.onload = () => resolve(JSON.parse(xhr.responseText))
    xhr.send()
  })
  
  let p1 = getWeather('北京')
  let p2 = getWeather('上海')
  let p3 = getWeather('杭州')
  
  Promise.race([p1,p2,p3]).then(data => {
    console.log(data)
  })
  
  
  // promise.all   把全部 resolve 的结果放进一个数组
  const getWeather = city => new Promise((resolve,reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET','http://rap2api.taobao.org/app/mock/244238/getWeather?city='+city,true)
   xhr.onload = () => resolve(JSON.parse(xhr.responseText))
   xhr.send()
})
  
                                         
                                         
   let p1 = getWeather('北京')
   let p2 = getWeather('上海')
   let p3 = getWeather('杭州')
   
   
   Promise.all([p1,p2,p3]).then(data => {
     console.log(data)
   })