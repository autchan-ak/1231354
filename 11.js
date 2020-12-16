//声明变量保存任意一个年份, 如果是闰年,打印出'闰年’(使用短路逻辑)。
//闰年判断:能被4整除，并且不能被100整除，或者能被400整除
var year = '2020';
/*
console.log(year%4,year%100,year%400);
year%4===0 && year%100!==0||year%400===0 || console.log(year+"是闰年！");
year%4===0 && year%100!==0 && console.log(year+"是闰年！")|| year % 400===0 && console.log(year+"是闰年！");

*/

console.log(year % 4 ===0 && year % 100 !==0 ||year % 400 ===0);

(year%4===0 && year%100!==0 || year%400===0) && console.log(year+'是闰年');


