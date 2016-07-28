/* четно-нечетная сортировка - аналог пузырьковой сортировки. последовательно чередуются сортировки четных и нечетных позиций */
sorts['odd-even'] = function(a) {
	var ok2 = 0; // подсчитывает удачные прохождения, без swap
	var bev = false; // четные 0 (false), нечетные 1 (true)
	var bok; // true, если не было swap
	var i, j;
	for( ; ok2 < 2; bev = !bev) {
		bok = true;
		for(i = +bev, j = i + 1; j < a.length; i += 2, j += 2)
			if(a[i] > a[j]) {
				a[i] = [a[j], a[j] = a[i]][0];
				bok = false;
			}
		ok2 = (ok2 + 1) * bok;
	}
}
