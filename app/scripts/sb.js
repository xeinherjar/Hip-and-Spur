var latest = 'http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest';



$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (a) {
			// console.log(a);
		});
		
$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestTitle) {
			// console.log(latestTitle.title);
			
		});



$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestPost) {
			// console.log(latestPost.post);
		});


$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (newsText) {
		$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestTitle) {
			// console.log(latestTitle.title);
			})
		
		$.getJSON('http://private-anon-06e306242-restaurantapi.apiary-mock.com/news/latest').done(function (latestPost) {
			// console.log(latestPost.post);
			})
	
	// console.log (newsText);
		});


var latestNews = $('#news-template').html();

var latestRendered = _.template(latestNews);


 $.getJSON(latest).done (function (i){
 $('.news').append(latestRendered(i));
 });


//ADD CLICK ON SOCIAL MEDIA BUTTONS

// var fa-facebook-official = 'http://www.facebook.com';

// <button id="FB-button"></button>

// $('#FB-button').on('click', function() {
//  $('.fa-facebook-official') = 'http://www.facebook.com';
// });

// console.log (fa-facebook-official);

//HTML
//   <title>jQuery Intro</title>
//   <link rel="stylesheet" type="text/css" href="normalize.css">
//   <link rel="stylesheet" type="text/css" href="main.css">
//   <link href='http://fonts.googleapis.com/css?family=Raleway:300' rel='stylesheet' type='text/css'>
// </head>
// <body>

// <div class="container1">
//   <h1>Section One </h1>
//   	<div class="content1">
//   	 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias quod neque velit molestias, aliquam quo. Error cumque nesciunt veritatis natus, at vitae aliquam, blanditiis, recusandae rerum ullam voluptatum cum!</p>
//   	 </div>
// </div>
// <div class="container2">
// <h1>Section Two </h1>
// 	<div class="content2"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias quod neque velit molestias, aliquam quo. Error cumque nesciunt veritatis natus, at vitae aliquam, blanditiis, recusandae rerum ullam voluptatum cum!</p>
// 	</div>
// </div> 
// <div class="container3">
// <h1>Section Three </h1>
// 	<div class="content3"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias quod neque velit molestias, aliquam quo. Error cumque nesciunt veritatis natus, at vitae aliquam, blanditiis, recusandae rerum ullam voluptatum cum!</p>
// 	</div>
// </div> 

//   <script src="jquery-2.1.3.min.js"></script>
//   <script src="accordian.js"></script>

// </body>
// </html>

// //JS
// $('.container1').on('click', function () {
// 	$('.content1').addClass('open1');

// });

// $('.container2').on('click', function () {
// 	$('.content1').removeClass('open1');
// 	$('.content2').addClass('open2');
// });

// $('.container3').on('click', function () {
// 	$('.content2').removeClass('open2');
// 	$('.content3').addClass('open3');
	
// });




