const http = require( 'http' );
const url = require( 'url' );
const queryString = require( 'querystring' );

const hostName = '127.0.0.1';
const port = '3000';

const server = http.createServer( ( req, res ) => {
    res.statusCode = '200';
    res.setHeader( 'Content-Type', 'text/html' );
    const page = url.parse(req.url).pathname;
    const params = queryString.parse( url.parse( req.url ).query );

    if( page == '/' ) {
        res.write( '<h1>Welcome To Home Page</h1>' );
    }else if ( page == '/about' ) {
        res.write( '<h1>Welcome To About Page</h1>' );
    }else if ( page == '/user' ) {

        if( 'name' in params && 'email' in params ) {
            res.write( '<h3>User name is '+ params['name'] +' and email '+ params['email'] +'</h3>' );
        }else{
            res.write( '<h3>User name and email missing. </h3>' );
        }

    }else{
        res.write( '<h1>404 Page</h1>' );
    }
    
    res.end();
} );

server.listen( port, hostName,  () => {
    console.log( `Server running at http://${hostName}:${port}/` );

} );