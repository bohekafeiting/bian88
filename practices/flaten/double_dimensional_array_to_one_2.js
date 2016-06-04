// JavaScript Document
function double_to_one(array)
{
  var i=0,j;
  arr=new Array();
  do{
      if(array[i].length)
	   { 
	     for(j=0;j<array[i].length;j++)
		  if(arr.indexOf(array[i][j])==-1)
		    arr.push(array[i][j]); 
		}
	  else
	    arr.push(array[i]);
	  i++;
	  }while(i<array.length);
 return arr;	  	  		
 }
module.exports = double_to_one;