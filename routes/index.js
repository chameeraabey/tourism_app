var moviesJSON=require('../movies.json');



exports.home= function(req,res){

	var movies=moviesJSON.movies;

	//res.send('This is the server response on the home page');
	res.render('home',{
		title:'Movies App',
		movies:movies
	});//By default express look this for the views folder so we do not have to specify 'views/home'
};

//Movie single router
exports.movie_single=function(req,res){

	var episode_no=req.params.episode_no;

	var movies=moviesJSON.movies;

	var movie=movies[episode_no-1];

	var title=movie.title;

	var main_characters=movie.main_characters;

	res.render('movie_single',{
		movies:movies,
		title:title,
		movie:movie,
		main_characters:main_characters
	});
};

//not found 
exports.notFound=function(req,res){

	var movies=moviesJSON.movies;

	res.render('notFound',{
		movies:movies,
		title:'Error page'
	});
};