var logic = require('../logic');
var posts = require('../posts.json');


exports.index = function(req, res) {
  var cipher = posts;
  res.render('cipher', {cipher: cipher})
};

exports.add_string = function(req, res) {
  var string = req.body.string;
  var encrypt = logic.caesarCipherEncrypt(string);
  posts["encrypt"] = string;
  posts["decrypted"] = encrypt;
  res.redirect('/');
};
