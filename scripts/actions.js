function bRandom_Click()
{
	var t = +$('input#tArrLen').val();
	$('p#pLengthErr').remove();
	if(!(t > 0))
	{
		$('div#dRandomArray').append('<p id="pLengthErr">Неверная длина массива</p>');
		return;
	}
	genRanArr(t);
	$('div#dResults').html('');
	$('p#pArray').remove();
	if($('input#cbArrView').prop('checked'))
		$('div#dRandomArray').append('<p id="pArray">' + arr.join(', ') + '</p>');
}
