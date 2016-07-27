var arr;

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