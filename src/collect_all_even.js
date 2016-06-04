// JavaScript Document
function collect_all_even(array)
{
  var i;
  end=new Array();
  for(i=0;i<array.length;i++)
  {
	  if(array[i]%2===0)
	  end.push(array[i]);
  }
  return end;
}
module.exports =collect_all_even;