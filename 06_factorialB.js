
function factorialOfWordsCount(str)
 {

if (str == null || str == undefined || (isNaN(str) && typeof str == "number"))
 {
  console.log(`Given value ==>> ${str} is invalid , re-enter correct value`);
}
else
{
  console.log(`Given value ==>> ${str} is valid`);
  let words =str.split(" ");
  const totalWord = words;
  // console.log(`words in ${str} is==>> ${totalWord}`);
  const totalWords = words.length;
  // console.log(`Total words in ${str} is ${totalWords}`);
  let factorial=1;
  for (let index = totalWords; index >= 1; index--)                   // index= str is Wrong ------ index= totalWords
   {
    factorial=index* factorial;
   }
   console.log(`factorial of ${str} is ${factorial}`);
  }
}
factorialOfWordsCount("revision is the mother of success");
factorialOfWordsCount("We never fail we always learn");
factorialOfWordsCount(null);
factorialOfWordsCount("");
factorialOfWordsCount("Omkar Annasaheb Bhosale");





