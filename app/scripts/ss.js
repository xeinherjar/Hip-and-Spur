// Double Curly Setup

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var menuItems, news, specials, menu, templateString, templateFunct, TemplateHTML;


// Fetching Menu Data

$.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/menu')
	.done(function(data){
		menu = data;
		entrees = menu.entrees;
		sides = menu.sides;
		app = menu.appetizers;

// Entree Section

	var menuEntrees = $('.entrees'); // Where to dump
	
	templateString = $('#menuTemp').html();
	templateFunct = _.template(templateString);
	templateHTML = templateFunct;

	_.each(entrees, function(food){
		menuEntrees.append(templateFunct(food))
	});

// Appetizers Section

	var menuAppet = $('.appetizers'); // Where to dump
	
	templateString = $('#menuTemp').html();
	templateFunct = _.template(templateString);
	templateHTML = templateFunct;

	_.each(app, function(food){
		menuAppet.append(templateFunct(food))
	});

// Sides Section

var menuSides = $('.sides'); // Where to dump
	
	templateString = $('#menuTemp').html();
	templateFunct = _.template(templateString);
	templateHTML = templateFunct;

	_.each(sides, function(food){
		menuSides.append(templateFunct(food))
	});


//Buttons

	_.each(entrees, function(prop){

		var butt = $('.buttons');
		var but1 = $("#alg").css({"background-color":"black","color":"orange"});
		var but2 = $("#fav").css({"background-color":"black","color":"yellow"});
		var but3 = $("#spicy").css({"background-color":"black","color":"red"});
		var but4 = $("#veg").css({"background-color":"green","color":"white"});	

		if (prop.allergies === 1)
			butt.toggleClass(but1);
		if (prop.favorite === 1)
			butt.toggleClass(but2);
		if (prop.spicy === 1)
			butt.toggleClass(but3);
		if (prop.vegan === 1)
			butt.toggleClass(but4);

	}); 
	



}) 	.fail( function (){
		console.log('Fail')
});

// //News

// $.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/news/latest')
// 	.done(function(data){
// 		news = data;
// 	}) .fail( function (){
// 		console.log('Fail')
// 	});



// //Daily Specials

// $.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/menu/special')
// 	.done(function(data){
// 		specials = data;
// 	}) .fail( function (){
// 		console.log('Fail')
// 	});



