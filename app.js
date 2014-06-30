var express = require("express");
var app = express();

app.use(express.static(__dirname + '/dist')); //that's two underscores there before 'dirname'

var port = Number(process.env.PORT || 3000); // ||3000 allows localhost
app.listen(port, function() {
	console.log('listening on ' + port);
});
