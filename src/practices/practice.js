function collect_same_elements(collection_a, collection_b) {
  var coll_a_len=collection_a.length;
  var coll_b_len=collection_b.length;
  var collection_c=new Array();
	for(var i=0;i<coll_a_len;i++)
	{
	  if(collection_b.indexOf(collection_a[i])!=-1)
		 collection_c.push(collection_a[i]);
	}
		
	return collection_c;
}

module.exports = collect_same_elements;
