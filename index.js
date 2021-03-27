class Formatter {
  //add static methods here

  static capitalize(string) {
    let newString = string.charAt(0).toUpperCase() + string.substring(1);
    return newString;
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(sentence) {
    let exceptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];

    let words = sentence.split(' ');

    for(let i = 0; i < words.length; i++) {
      if(i == 0) {
        result.push(this.capitalize(words[i]));
      } else {
        if (exceptWords.includes(words[i])) {
          result.push(words[i]);
        } else {
          result.push(this.capitalize(words[i]));
        }
      }
    }
    return result.join(' ');
  }
}