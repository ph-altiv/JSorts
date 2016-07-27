var arr;
var sortNames = ['bubble'];
var dirAlgorithm = "scripts/algorithms/";
var sorts = {};

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

function runSorts()
{
	var res = [];
	$('div#dResults').html('');
	sortNames.forEach(function(name){
		$.getScript(dirAlgorithm + name + ".js", function(){
			var Name = name.charAt(0).toUpperCase() + name.substr(1);
			var t = getMsec();
			sorts['sort' + Name](arr);
			t = getMsec() - t;
			$('div#dResults').append('<p>' + Name + ': ' + t + ' ms' + '</p>');
		});
	});
}