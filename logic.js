'use strict';

function wordToAlphabetIndex(word){
  var indexArray = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  for(var letter of word){
    var a = alphabet.indexOf(letter);
    indexArray.push(a);
  }
  return indexArray;
}

function cipherMath(indexArray){
  var cipheredArray = [];
  for(var item of indexArray){
      var shift = 3;
      var new_item = (shift + item) % 26;
      cipheredArray.push(new_item);
  }
  return cipheredArray;
}

function indicesToLetters(indices){
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  var array = [];
  for(var index of indices){
    var a = alphabet[index];
    array.push(a);
  }
  var cool = array.join("");
  return cool;
}

function caesarCipherEncrypt(string){
  var splitString = string.toLowerCase().split(" ");
  var final = [];
  for(var word of splitString){
      var done = indicesToLetters(cipherMath(wordToAlphabetIndex(word)));
      final.push(done);
  }
  var last = final.join(" ");
  return last.toUpperCase();
}

module.exports.caesarCipherEncrypt = caesarCipherEncrypt;
