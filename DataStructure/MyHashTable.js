const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Input Statement: ",
function(input){
    const words = input.split(' ');
    console.log(words);

    const WordCntObj = words.reduce( (WordsObj,word) =>{
        if(word in WordsObj){
            WordsObj[word]++;
        }
        else{
            WordsObj[word]=1;
        }
        return WordsObj;
    },{});
    console.log(WordCntObj);
    WordCntValues = Object.values(WordCntObj);
    console.log(WordCntValues);
    
    TotalSum =  WordCntValues.reduce( (acc,cur) => {
        acc = acc+cur;
        return acc;
    },0);

    console.log(TotalSum);
    //Const TotalSum = ;
    rl.close();
});
