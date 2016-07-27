var getMsec = function() {
	var d = new Date();
	return d.getTime();
}

var s = getMsec();
console.log(s);
var a = 10000000000;
for(i = 1; i < 10000; i++)
{
	a = a/3;
}
r = getMsec() - s;
document.write(r + ' msec');