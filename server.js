const express = require('express');
const app = express();
const path = require('path');
import cors from "cors"
const forceSSL = function(){
    return function(req, res, next){
        if(req.headers['x-forwarded-proto'] !== 'https'){
            return res.redirect(
                ['https://', req.get('Host', re.url)].join('')
            );
        }
        next();
    }
}
app.use(express.static(__dirname + '/dist/voting-system-UI'));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", 'https://weather-app-pwc.herokuapp.com');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// });
app.use(cors({ origin: "https://weather-app-pwc.herokuapp.com/", credentials: true }));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/voting-system-UI/index.html'));
});
app.listen(process.env.PORT || 8080);
