function solution(strings, n) {
    var answer = [];
    
    answer = strings.sort(function(a,b){
        return (a[n] === b[n]) ? ((a < b) ? -1 : 1) : ((a[n] < b[n]) ? -1 : 1);
    });
    
    return answer;
}