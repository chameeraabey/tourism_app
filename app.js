var express=require('express');

var app=express();

//Set view engine
app.set('view engine','ejs');


var routes=require('./routes');

var path=require('path');
app.use(express.static(path.join(__dirname,'public')));


//Routes

//Home route
app.get('/', routes.home);

//Movie single router
app.get('/movie_episode/:episode_no?', routes.movie_single);

//not found 
app.get('*', routes.notFound);
//Before send this message to the browser we should tell app to listen our specific port
//app.listen(3001,function(){
//	console.log('The application is running on localhost:3001');
//});

app.listen(process.env.PORT || 3001);