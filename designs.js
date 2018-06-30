// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(a,b)
{


 for(let r=0;r<a;r++)
  {
   let x=document.getElementById("pixelCanvas").insertRow(r);
   for(let c=0;c<b;c++)  
    {
     let y=  x.insertCell(c);
$(y).click (function(){
  $(this).css('background', $('#colorPicker').val());
});
//$(y).remove();
	}
  }

}

let q=0;
while(q<1){
 $('.sub').click
 (function(event)
 {
N = document.getElementById('inputHeight').value;
M = document.getElementById('inputWeight').value;
 	
event.preventDefault();
makeGrid(N,M);
 });
 q++;
}
 $('.sub1').off('click', function(event){

 	makeGrid();

event.preventDefault()
});
