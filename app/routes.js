module.exports = function(app) {    
    
    app.post('/api/validation/word', function(req, res) {
        // console.log(req.body);
        var words = req.body.words;
        
        var resultWords = [];
        
        for (var i = 0; i < words.length; i++) {
            (function(i) {
                var word = words[i];

                magic(word, function (result) {
                    var status = result ? 1 : 0;   
                    resultWords.push({
                        word: word,
                        status: status
                    });
                    if (resultWords.length === words.length) {
                        res.status(200, { "Access-Control-Allow-Origin": "*" })
                        .json({words: resultWords});
                    }
                });              
            })(i);
        }
	});
    
    function magic(word,callback){
        setTimeout(function() {
            callback(Math.random() < 0.2 ? true : false);
        },
        1000 + Math.random() * 1000);
    }
};