function solution(N, stages) {
    var StageInfo = [];
    for(var i=1 ; i<N+1 ; i++){
        //다른 style reduce로 도달자와 실패자 계산
        let challenger = stages.reduce((acc,currStage) => acc + ((currStage >= i) ? 1 : 0), 0);
        let fail = stages.reduce(function(acc, currStage){
            return acc + ((currStage===i) ? 1 : 0)
        },0);
        // 0으로 나눠지는 경우를 제외하여 실패율과 stage값 push
        StageInfo.push({stage: i, FailPer : ((challenger === 0) ? 0 : fail/challenger)});
    }
    //실패율이 같으면 stage 순으로 오름차순 & 그 외에는 실패율로 내림차순
    return StageInfo.sort(function(a,b){
        return (a.FailPer === b.FailPer) ? a.stage - b.stage : b.FailPer - a.FailPer
    }).map(element => element.stage);
}