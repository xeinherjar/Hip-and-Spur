var menuItems, data

a = $.getJSON('http://private-anon-e6abf6810-restaurantapi.apiary-mock.com/menu')
	.done(function(data){
		console.log('Sucess')
	}) .fail( function (){
		console.log('Fail')
	});

menuItems = a.responseJSON
