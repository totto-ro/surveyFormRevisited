console.log("working");

let socket = io( 'http://localhost:7077' );

$( '.messageForm' ).on ( 'submit', function( event ){
    event.preventDefault();

    let name = $( '#name' ).val();
    let location = $( '#location' ).val();
    let language = $( '#language' ).val();
    let comments = $( '#comments' ).val();
    let number = Math.floor(Math.random()*1000+1);

    let send = {
        name:name,
        location:location,
        language:language,
        comments:comments,
        number:number
    };

    socket.emit( 'sendResult', send );
});

socket.on( 'sendAll', function( data ){
    let newResult = `<p> You emitted the following information to the server:</p>
                    <p> Name: ${data.name}, Location: ${data.location}</p>
                    <p>Language:  ${data.language}, Comments: ${data.comments}</p>
                    <p>Your lucky number emitted by the server is: ${data.number}`;
    $( '.result' ).append( newResult );
});