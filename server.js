const express = require('express');
const app = express();
const path = require('path');
import cors from 'cors';
// const forceSSL = function () {
//     return function (req, res, next) {
//         if (req.headers['x-forwarded-proto'] !== 'https') {
//             return res.redirect(
//                 ['https://', req.get('Host', re.url)].join('')
//             );
//         }
//         next();
//     }
// }
app.use(cors());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested, Content-Type, Accept Authorization"
//     )
//     if (req.method === "OPTIONS") {
//         res.header(
//             "Access-Control-Allow-Methods",
//             "POST, PUT, PATCH, GET, DELETE"
//         )
//         return res.status(200).json({})
//     }
//     next()
// });
app.use(express.static(__dirname + '/dist/voting-system-UI'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/voting-system-UI/index.html'));
});
app.listen(process.env.PORT || 8080);
