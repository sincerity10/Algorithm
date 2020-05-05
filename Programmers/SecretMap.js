function solution(n, arr1, arr2) {
    var answer = [];
    //var orcode = [];
    var orcode = arr1.map((arr1, index)=>{
        return arr1 | arr2[index];
    });
    answer = orcode.map((orcode, index)=>{
        return pad(orcode.toString(2),n)
    });
    //console.log(orcode);
    answer = answer.map((answer,index)=>{
        return answer.toString().replace(/1/gi,'#');
    });
    answer = answer.map((answer,index)=>{
        return answer.toString().replace(/0/gi,' ');
    });
    console.log(answer);
    return answer;
}

function pad(n, width) {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}