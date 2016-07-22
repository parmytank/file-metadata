var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

app.post('/profile', upload.single('avatar'), function (req, res) {
    res.end(JSON.stringify({'file size':req.file.size}));
})

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.listen(process.env.PORT, process.env.IP);
