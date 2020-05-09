function solution(heights) {
    var answer = [];
    for(var idx = heights.length-1 ; idx > 0; idx--){
        var now = heights[idx];
        var j
        let f = 0;
        for(j=idx-1 ; j > -1; j--){
            if(heights[idx] < heights[j]){
                f = 1;
                break;
            }
        }
        //console.log(idx, j);
        if(f===1) answer.unshift(j+1);
        else answer.unshift(0);
    }
    answer.unshift(0);
    return answer;
}