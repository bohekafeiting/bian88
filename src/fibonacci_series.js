// JavaScript Document
function fibonacci_series(n)
{ array=new Array();
  var first=0,secend=1,sum=0;
  array[0]=0;
  array[1]=1;
  if(n>1)
    for(var i=2;i<=n;i++)
	{
	  sum=first+secend;
	  first=secend;
	  array.push(sum);
	  secend=array[i];
	}
 return array;
}
module.exports = collect_same_elements;