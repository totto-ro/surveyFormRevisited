const express = require( 'express' );
const app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use( express.static(__dirname + '/static') );

//render index form
app.get("/", function( request, response ){
    response.render( 'index' );
});

const server = app.listen( 7077 );

const io =require( 'socket.io' ) ( server );

io.on( 'connection', function( socket ){
    console.log( "You are in the server" );


    socket.on( 'sendResult', function( data ){
        console.log( data );
        io.sockets.emit( 'sendAll', data )
    })

});
