function solution(n, arr1, arr2) {
    var answer = [];
    var orcode = arr1.map((arr1, index)=>{
        return arr1 | arr2[index];
    });
    answer = orcode.map((orcode, index)=>{
        return tentotwo(orcode,n);
    });
    answer = answer.map(element =>{
        return element.toString().replace(/1/g,'#').replace(/0/g,' ')
    });
    return answer;
}

function tentotwo(input,width) {
    input = input.toString(2);
    if (input.length === width) return input;
    else{
        while(input.length !== width){
            input = '0' + input;
            if(input.length == width) return input
        }
    }
}

solution(5,	[9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);