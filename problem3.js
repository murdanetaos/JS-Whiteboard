function vowelsCount(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;  
    let characterCount = 0;
    for(let char of str.toLowerCase()){
      if(vowels.includes(char)){
          count++;
      }
      characterCount++;
    }
   return{ vowels: count , characters: characterCount };
  }
  console.log(vowelsCount("The Car running"));
  console.log(vowelsCount("Hqqqqqqq"));