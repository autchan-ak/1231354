//强制转换为数值型
var n1=Number("5");		//5
var n2 =Number("3a")
 var a = n1-n2
//console.log(a,typeof a);


Number('5') //5.
Number('3a') //NaN.
Number(true) //1.
Number(false) //0.
Number(null) //O.
Number(undefined) //NaN.


//转整型
var z1 = parseInt(null);		//NaN
var z2 = parseInt(undefined);	//NaN
var z3 = parseInt(5.6);			//5————去除小数点
var z4 = parseInt('6.1a');		//6————找整数
var z5 = parseInt('a6.1');		//NaN
//console.log(z4);
//转浮点
var f1 = parseFloat('3.15');	//3.15
var f2 = parseFloat('5.2a');	//5.2
var f3 = parseFloat('a5.3');	//NaN
var f4 = parseFloat('5a');		//5

//console.log(f1,f2,f3,f4,f5,typeof f5);

//数值和布尔型转字符串
var num = 3;
var str = num.toString();
console.log(str,typeof str)


