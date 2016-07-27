function sortBubble(arr) {
	var a = arr.slice();
	for(var i = a.length; i > 1; i--)
	{
		for(var j = 0, j1 = 1; j1 < i; j++, j1++)
			if(a[j] > a[j1])
				a[j1] = [a[j], a[j] = a[j1]][0];
	}
	console.log(a);
}
