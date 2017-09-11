document.write('<table border=1 cellspacing=0>');
for(var a=1; a<=8; a++){
	document.write('<tr>')
     for(var b=1; b<=8; b++){
     	document.write('<td>'+a+'-'+b+'</td>')
     }
    document.write('</tr>')
}
document.write('</table>');
document.write('<br>');



document.write('<table border=1 cellspacing=0>');
for(var j=1; j<=9; j++){
    if(j%2==0){
    	document.write('<tr>')
		     for(var i=1; i<=j; i++){
			     	if(i%2==0){
			     		document.write('<td bgcolor=skyblue>'+i+'*'+j+'</td>')
			     	}else{
			     		document.write('<td bgcolor=pink>'+i+'*'+j+'</td>')
			     	}
		    }
    }
	else{
    	document.write('<tr>')
		    for(var i=1; i<=j; i++){
			     	if(i%2!=0){
			     		document.write('<td bgcolor=yellowgreen>'+i+'*'+j+'</td>')
			     	}else{
			     		document.write('<td bgcolor=peachpuff>'+i+'*'+j+'</td>')
			     	}
	        }	
    }
    document.write('</tr>')
}
document.write('</table>');
document.write('<br>');



document.write('<table border=1 cellspacing=0>');
for(var j=1; j<=9; j++){
	if(j%2==0){
	  document.write('<tr bgcolor=red>')
	}else{
	  document.write('<tr bgcolor=blue>')	
	}
    for(var i=1; i<=j; i++){
     
     		document.write('<td>'+i+'*'+j+'</td>')
  	}
    document.write('</tr>')
}
document.write('</table>');

document.write('<br>');

document.write('<table border=1 cellspacing=0>');
for(var j=1; j<=9; j++){
    document.write('<tr>')
     for(var i=1; i<=j; i++){
	     	if(i%2==0){
	     		document.write('<td bgcolor=pink>'+i+'*'+j+'</td>')
	     	}else{
	     		document.write('<td bgcolor=yellowgreen>'+i+'*'+j+'</td>')
	     	}
    }
    document.write('</tr>')
}
document.write('</table>');
document.write('<br>');


// 自行输入行数
// var z=prompt('请输入行数',1);
document.write('<table>');
for(var c=1;c<=9;c++){
   document.write('<tr style=background:skyblue>');
   for(d=1;d<=c;d++){
   	document.write('<td>'+d+'*'+c+'='+d*c+'</td>')
   }
   document.write('</tr>');
}
document.write('</table>');
document.write('<br>');


// 加一个变量color进行换色
document.write('<table>');
for(var c=1;c<=9;c++){
	if(c%2==0){
    var	color='skyblue';
	}else{
	var	color='pink';
	}
   document.write('<tr bgcolor='+color+'>');
   for(var d=1;d<=c;d++){
   	document.write('<td>'+d+'*'+c+'='+d*c+'</td>')
   }
   document.write('</tr>');
}
document.write('</table>');
document.write('<br>');



var table="<table>";
for(var n=1; n<=5;n++){
	table=table+'<tr>';
	for(var m=1;m<=5;m++){
		document.write('<td>'+m+'*'+n+'</td>'+'&nbsp'+'&nbsp')
	}
	table=table+'</tr>';
	document.write('<br>');
}
document.write(table);



document.write('<br>');
// 金字塔          row：5   &nbsp    star 
//    *             1         4        1
//   ***            2         3        3
//  *****           3         2        5
// *******          4         1        7
//*********         5         0        9
//                  i       j=row-i    j=2*i-1
var row=5;
for(var i=1;i<=row; i++){
	for(var j=1; j<=row-i;j++){
		document.write('-');
	}
	for(var j=1;j<=2*i-1;j++){
		document.write('*');
	}
	document.write('<br>')
}



// 1   1   2   3   5   8   13   21 斐波那契数列
// i   j   k
//         k=i+j
//    i=j  j=k   k=i+j
//把j的值赋值给i，把k的值赋值给j
var i=1, j=1;

for(var k=0;k<=100;){
   k=i+j;
   document.write(k+'&nbsp');
   i=j;
   j=k;
}



document.write('<br>')
// 数组查找最大值
var arr=[9,19,6,35,11,78,93,14,55];
var max=arr[0];
for(var i=0;i<arr.length;i++){
	if(max<arr[i]){
		max=arr[i];
    }
}
document.write(max);
document.write('<br>')
// 数组查找最小值
var arr=[9,19,6,35,11,78,93,14,55];
var min=arr[0];
for(var i=0;i<arr.length;i++){
	if(min>arr[i]){
		min=arr[i];
    }
}
document.write(min);



// 数组中的数值从小到大排列
var arr=[9,18,71,6,25,8,48,17,53];
for(var i=0; i<arr.length;i++){
	for(j=i+1;j<arr.length;j++){
	
	if(arr[i]>arr[j]){
		var temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
	}
	}
}
console.log(arr)
// 数组中的数值从大到小排列
var arr=[9,18,71,6,25,8,48,17,53];
for(var i=0; i<arr.length;i++){
	for(j=i+1;j<arr.length;j++){
	
	if(arr[i]<arr[j]){
		var temp=arr[j];
		arr[j]=arr[i];
		arr[i]=temp;
	}
	}
}
console.log(arr)



// while循环
// var i=1;
// while(i<=10){
// 	console.log(i);
// 	i++;
// }

// do while循环



// 数组中去空
var arr=[1,2,3,,4,5,6,7,,8];
var newarr =[];
for(var i=0;i<arr.length;i++){
   if(arr[i]!=undefined){
   	newarr[newarr.length]=arr[i];
   }
 }
console.log(newarr);
// 根据比较数据类型去空
var arr=[1,2,3,,4,5,6,7,,8];
console.log(arr);
var newarr =[];
for(var i=0;i<arr.length;i++){
   if((typeof arr[i])!='undefined'){
   	newarr[newarr.length]=arr[i];
   }
 }
console.log(newarr);


// 二维数组的遍历
var arr=[
[70,60,85],
[95,70,85],
[69,87,90]
]
var max=arr[0][0];
for(var i=0;i<arr.length;i++){
	for(var j=0;j<arr[i].length;j++){
      if(max<arr[i][j]){
      	max=arr[i][j];
      }
	}
}
console.log(max);