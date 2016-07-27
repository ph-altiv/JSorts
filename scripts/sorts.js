var arr;
var sortNames = ['bubble'];
var dirAlgorithm = "scripts/algorithms/";

function getMsec() {
	var d = new Date();
	return d.getTime();
}

function genRanArr(len)
{
	var a = [];
	arr = [];
	for(var i = 0; i < len; i++)
		a.push(i);
	for( ; len > 0; len--)
	{
		rind = Math.floor(Math.random() * len);
		arr.push(a[rind]);
		a.splice(rind, 1);
	}
}

function sorts()
{
	$.getScript(dirAlgorithm + sortNames[0] + ".js", function(){
		sortBubble(arr);
	});
	
}