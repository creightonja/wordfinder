var listOfWords =[];
var wordList = [];
var wordCount = [];

function wordSplitter(phrase) {
  //debugger;
  listOfWords =[];
  wordList = [];
  wordCount = [];

  phrase = phrase.toLowerCase();
  phrase = phrase.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");  //removing punctuation
  var phrase_array = phrase.split(' ');  //split the words by ' '
  for (var i = 0; i < phrase_array.length; i++) {
    wordFrequency(phrase_array[i]);
  }
  var wordAndValue = "";

  
   wordCount.name + ": " + wordCount.word;
  return wordAndValue;
};



function wordFrequency(word) {
  if (wordList.indexOf(word, 0) == -1){
    listOfWords.push(word);
  }
  var found = 0;
  for (var key in wordCount) {
    if(wordCount[key] == word) {
      wordCount.word++;
      found++;
    }
  }
  if (found == 0) {
    insert(word);
  }
  return;
};



function insert(word) {
  wordCount = {name: word, word: 1};
};
