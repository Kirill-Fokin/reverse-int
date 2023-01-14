module.exports = function reverse (n) {
  let word = (String(n));
  result = '';
  
  
    for (let i = word.length - 1 ; i >= 0; i-- ) {
      if (word[i] == "-") continue;
   result  += (String(n))[i];
 }
  return Number(result);
    
}



