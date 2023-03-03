function fractioalOfWordCount(str) {
    str.length;
console.log(`length of string is ${str.length}`);
    var count=0;

    for (let index = 0; index <= str.length; index++) {
    str.chatAt(index);// error show ==>> Uncaught TypeError TypeError: str.chatAt is not a function but why ?
       count=count+1;
    }

}
var str=fractioalOfWordCount(`Revision is mother of succsess`)
console.log(`string==>> Revision is mother of succsess`);
console.log(`count total num. fo charin string is ${count}`);

