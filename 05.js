/*
console.log(3=='3');//true
console.log(3==='3');//false
console. log(1==true);//true
console. log(1===true);//false


console.log(2!='3'); // 只是比较值
console.log(2!=='3');//先比较类型,再比较值
*/
/*
console.log(3>'3')//false
//比较的Unicode码
console.log('3'>'10');//true
console.1og('3'.charCodeAt()，'1' . charCodeAt());
*/

//	3	NaN
console.log(3>'10a');		//false
console.log(3<'10a');		//false
console.log(3=='10a');		//false
console.log(NaN==NaN);		//false
