module.exports = function(app) {    
    
    app.post('/api/validation/word', function(req, res) {
        var words = req.body.words;
        
        var resultWords = [],
            invalidWords = 0,
            validWords = 0;
        
        
        for (var i = 0; i < words.length; i++) {
            (function(i) {
                var word = words[i];

                magic(word, function (result) {
                    var status;
                    if(result) {
                        status = 1;
                        validWords++;
                    } else {
                        status = 0;
                        invalidWords++;
                    }
                    resultWords.push({
                        word: word,
                        status: status
                    });
                    if (resultWords.length === words.length) {
                        res.status(200, { "Access-Control-Allow-Origin": "*" })
                        .json({words: resultWords, validWords: validWords, invalidWords: invalidWords});
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