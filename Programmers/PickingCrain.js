function solution(board, moves) {
    var answer = 0;
    //console.log(board[2][3])
    var PickedStack = [];
    var size= board[0].length;
    //console.log(board[1][4]);
    for(var i in moves){
        //var tmp;
        for(var j=0; j < size ; j++){
            var now = board[j][moves[i]-1];
            console.log(j,moves[i]-1);
            if(now!==0){
                if(PickedStack.length > 0){
                    if(PickedStack[PickedStack.length-1] === now){
                        PickedStack.pop();
                        answer ++;
                        answer ++;
                        //console.log(answer);
                    }
                    else{
                        PickedStack.push(now);
                        //console.log(PickedStack);
                    }
                }
                else{
                    PickedStack.push(now);
                }
                board[j][moves[i]-1]=0;
                break;
            }
        }
    }
    return answer;
}