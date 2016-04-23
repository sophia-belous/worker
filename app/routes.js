module.exports = function(app) {    
    
    app.post('/api/validation/word', function(req, res) {
        console.log(req.body);
        var word = req.body.word;
        
        magic(word, function (result) {
            var status = result ? 1 : 0;   
            
            res.status(200, {
                          "Access-Control-Allow-Origin": "*"
                      }).json({word : word, status : status});
        });
	});
    
    function magic(word,callback){
        setTimeout(function() {
            callback(Math.random() < 0.2 ? true : false);
        },
        1000 + Math.random() * 1000);
    }
};