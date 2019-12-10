

// document.querySelector("#BtnMy").addEventListener("click",function(){
// 	if (document.querySelector('.show')) {
// 		document.querySelector('.MyDiv').classList.remove('show');
// 	}

// 	else{
// 		document.querySelector('.MyDiv').classList.add('show');
// 	}
// });

// document.querySelector('#BtnMy').addEventListener('click',function(){
// 	document.querySelector('.MyDiv').classList.toggle('show');
// });


// Taka

// ResultUsd


document.querySelector("#Taka").addEventListener("keyup", function(){
	var tk = this.value;

	var usDollar = (tk / 84.92);

	document.querySelector("#ResultUsd").innerHTML = usDollar;
});

document.querySelector("#UsD").addEventListener("keyup",function(){
	var DollaR = this.value;

	var BdTaka = (DollaR * 84.92);

	document.querySelector("#ResultBdt").innerHTML = BdTaka;
});