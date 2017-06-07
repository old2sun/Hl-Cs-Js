let promiseCount = 0;

function testPromise() {
	let thisPromisCount = ++promiseCount;

	let log = document.getElementById('log');
	log.insertAdjacentHTML('beforeend', thisPromisCount + ') Started (<small>Sync code started</small>)<br/>');

	// 新建一个promise对象
	let p1 = new Promise(function(resolve, reject) {
	
	log.insertAdjacentHTML('beforeend', thisPromisCount + ') Started (<small>Sync code started</small>)<br/>');

		// 模拟异步代码
		window.setTimeout(function(){

			resolve(thisPromisCount);
		},Math.random()*2000 + 1000);
	
	});


	// 调用 then 方法, 定义当 promise 成功解析时执行的代码
	p1.then(function(val) {

		log.insertAdjacentHTML('beforeend', val + ')Promise fulfilled (<small>Async code terminated</small>)<br/>');
		
	})
	// 记录被拒绝的信息
	.catch(function(reason) {

			console.log('Handle rejected promise ('+ reason +') here.');
	});

	log.insertAdjacentHTML('beforeend', thisPromisCount +  ') Promise made (<small>Sync code terminated</small>)<br/>');



	// 判断是否支持 promise 浏览器
	// if ("Promise" in window) {

	// 	var btn = document.getElementById("btn");
	// 	btn.addEventListener("click",testPromise);

	// } else {

	// 	log = document.getElementById('log');
	//  	log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
	// }

}