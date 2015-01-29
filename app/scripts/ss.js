var menuItems, news, specials


//Menu

$.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/menu')
	.done(function(data){
		menu = data;
		entrees = menu.entrees;
		sides = menu.sides;
		app = menu.appetizers;
	}) .fail( function (){
		console.log('Fail')
	});

//News

$.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/news/latest')
	.done(function(data){
		news = data;
	}) .fail( function (){
		console.log('Fail')
	});



//Daily Specials

$.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/menu/special')
	.done(function(data){
		specials = data;
	}) .fail( function (){
		console.log('Fail')
	});