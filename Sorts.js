var getMsec = function() {
	var d = new Date();
	return d.getTime();
}

var s = getMsec();
console.log(s);
var a = 10000000000;
for(i = 1; i < 10000; i++)
{
	//document.write("SomeText<br/>");
	var a = a/3;
}
r = getMsec() - s;
document.write(r + ' msec');