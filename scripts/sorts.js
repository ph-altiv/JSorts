var arr;
var sortNames = ['bubble', 'cocktail', 'odd-even'];
var dirAlgorithm = "scripts/algorithms/";
var sorts = {};

/* время в милисекундах с полуночи 1 января 1970 года GMT */
function getMsec() { 
	var d = new Date();
	return d.getTime();
}

/* заполняет массив произвольными значениями длиной len */
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

/* запускает все сортировки и выводит результаты на страницу в блок 'div#dResults' */
function runSorts()
{
	var res = [];
	$('div#dResults').html(''); // очистка от предыдущих результатоы
	sortNames.forEach(function(name){
		$.getScript(dirAlgorithm + name + ".js", function(){ // загрузка скрипта по имени сортировки
			var a = arr.slice();
			var t = getMsec(); // засекаем время выполнения
			sorts[name](a); // выполнение сортировки
			t = getMsec() - t; 
			$('div#dResults').append('<p>' + name + ': ' + t + ' ms' + '</p>'); // вывод имени и времени выполнения
		});
	});
}