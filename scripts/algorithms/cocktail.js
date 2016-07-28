/* шейкерная сортировка - сортировка, похожая на пузырьковую, но пробег осуществляется поочередно влево и вправо */
sorts.cocktail = function(a) {
	var ll = 0, lr = a.length - 1, i, j;
	while(lr - ll > 0)
	{
		for(i = ll, j = ll + 1; j <= lr; i++, j++) // слева направо
			if(a[i] > a[j]) 
				a[i] = [a[j], a[j] = a[i]][0];
		lr--;
		for(i = lr - 1, j = lr; i >= ll; i--, j--) // справа налево
			if(a[i] > a[j])
				a[i] = [a[j], a[j] = a[i]][0];
		ll++;
	}
}