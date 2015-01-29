
/*  Ajax  */

$.ajax({
  url: 'http://private-edf3a-hipandspur.apiary-mock.com/notes/id',
  dataType: 'json',
  method: 'post'
});

 /* Get JSON */ 

$.getJSON( 'http://private-edf3a-hipandspur.apiary-mock.com/notes/id' );

/* Done */

$.getJSON( 'http://private-edf3a-hipandspur.apiary-mock.com/notes/id' ) .done( function(){'specials');
  console.log('specials');
});
 
/* Promises*/

$.getJSON( 'http://private-edf3a-hipandspur.apiary-mock.com/notes/id' ) .done(function(){
   console.log('story')
)}

 .get(function(){
   console.log('menu')
 )}

 .get(function(){
   console.log('specials')
)}

 .get( function() {
  console.log('libations')
  )}

/* POST */

$.ajax( URL, {
   type: "POST",
   dataType: 'json'
});

/* Putting It All Together*/ 

$.ajax({
  url: 'http://private-edf3a-hipandspur.apiary-mock.com/notes/idhttps//api.github.com/user/TRPMorrison',
  type: 'get' ,
  dataType: 'json',
});


var url = 'http://private-edf3a-hipandspur.apiary-mock.com/notes/id';

var button ( function () {
	console.log('Request Info');
	button.on('Click');
	)}


button.onClick = function $(‘#requestInfo’);

var requestInfo = function ( ) {
console.log(‘story’);
button.on(‘click’);


