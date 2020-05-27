function solution(dartResult) {
    var answer = 0;
    var ScoreStack = [];
    for(var index in dartResult){
        //console.log(dartResult[index]);
        if(dartResult[index]>=0 && dartResult[index]<11){
            //console.log(dartResul[index]);
            if(dartResult[index-1]==='1' && dartResult[index]==='0'){
                ScoreStack.pop();
                ScoreStack.push(10);
            }
            else ScoreStack.push(Number(dartResult[index]));
        }
        else if(dartResult[index]==='D'){
            var tmp=ScoreStack.pop();
            ScoreStack.push(tmp*tmp);
        }
        else if(dartResult[index]==='T'){
            var tmp=ScoreStack.pop();
            ScoreStack.push(tmp*tmp*tmp);
        }
        else if(dartResult[index]==='*'){
            var tmp=ScoreStack.pop();
            var tmp2;
            if(ScoreStack.length>0){
                tmp2=ScoreStack.pop();
                ScoreStack.unshift(tmp2*2);
            }
            ScoreStack.push(tmp*2);
            //console.log(ScoreStack);
        }
        else if(dartResult[index]==='#'){
            var tmp=ScoreStack.pop();
            ScoreStack.push(tmp*-1);
        }
    }
    console.log(ScoreStack);
    answer = ScoreStack.reduce((acc,CurrentValue) => {
        return acc += CurrentValue;
    },0);
    return answer;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));