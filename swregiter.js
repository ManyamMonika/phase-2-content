if('serviceworker' in navigator){
	navigator.serviceWsorker.register('sw.js',{
		scope:'./'
	})
	.then(req=>{
		console.log("success");
	})
	.catch(error=>{
		console.log("error");
	});
}