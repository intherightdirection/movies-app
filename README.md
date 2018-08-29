# movies-app
This is a small project to help learn to work with NodeJS and Express or
MEAN/MEVN stack (AngularJS & Vue respectively).

The project is to create a light weight local server 
using NodeJS and Express. The local server will have a View displaying 
movie files with a Netflix style interface that will allow user to click
for info on the movie which gets information on the cast and synopsis of 
movie using information obtained from theMovieDB.org

Do to limitations on number of requests through theMovieDB.org api, 
minimal information will be stored locally in json file along with movie 
poster image files.

Eventually feature will be added to add a movie at which point a new 
request to GET movie info will be made to theMovieDB.org which will be 
written to local files.

The reason for this project, other than to augment my own learning is to 
meet the need of making movie mp4 collection accessible through media 
centre computer with additional features of allowing user to find out 
info about movie to know which movie it is, and to display information 
in a large readable font-size that can be clearly seen from across room.