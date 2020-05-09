function solution(s, n) {
    var answer = '';
    let str2arr = [...s];
    str2arr = str2arr.map(element => element.charCodeAt(0));
    str2arr = str2arr.map(element => CaesarPush(element,n));
    str2arr = str2arr.map(element => String.fromCharCode(element));
    answer = str2arr.join('');
    return answer;
}

function CaesarPush(char,n){
    if(char > 96 && char < 123 && char + n > 122){
        return char + n - 26 ;
    }
    if(char > 64 && (char < 91) && (char + n > 90)){
        return char + n - 26;
    }
    
    if(char === 32){
        return char;
    }
    else {return char + n;}
}

console.log(solution("AB",1));