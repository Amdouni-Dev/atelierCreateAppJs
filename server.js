var http=require('http'); // http deja existe 
var url=require('url')
var querystring=require("querystring")
var server=http.createServer(function(req,res){

    const appPath=url.parse(req.url);


    if(appPath.pathname==='/users'){



        const query=querystring.parse(appPath.query);
        if(query["id"]&& query["login"]){
            res.end('interface user ')
        }
        else{
            res.end("you are note authorized")
        }
        
      //  console.log(query)
       // res.end('<h1 style="color:yellow" >path <b>/Users</b> </h1>')
    }
    else if(appPath.pathname==='/contrat'){
        res.end('<h1 style="color:red" >path <b>/Contat</b> </h1>')
    }
    else{
        res.end('<h1 style="color:green" >not found ya mouna</h1>')
    }
    console.log(req)
    console.log(url.parse(req.url));
    // partie stateless 
res.writeHead(200); //
//res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Ma page node.js</title></head><body><p> Hi Mannou  <strong>HTML</strong></p></body></html>')


// res.end('<h1 style="color:red" >salut Mouna</h1>')    ;// traitement req
});
server.listen(5000,()=>{
    console.log("houni njarreb est ce que application cv w lee ")
});

// require        ==> importation
// module.exports ==> exportation
