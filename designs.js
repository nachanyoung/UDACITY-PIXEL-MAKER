// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(a,b)
{
$('tr').remove();
	for(let r=0;r<a;r++)
	{
		let x="<tr id=row" + r + "></tr>";
		$("#pixelCanvas").append(x);
		for(let c=0;c<b;c++)  
    	{
        	let y= "<td></td>;" 
        	$('#row' + r).append(y);
		}
    }

    $("td").click (function(){
       if ($(this).attr('style')) $(this).css('background', "");
       else $(this).css('background', $('#colorPicker').val());
        });
}

$('.make').click(function(event)
{
	N = $('#inputHeight').val();
	M = $('#inputWeight').val();
	makeGrid(N,M);
	event.preventDefault();
});

$('.remove').off('click', function(event)
{
	makeGrid();
	event.preventDefault();
 });
