function solution(progresses, speeds) {
    var answer = [];
    var i=0;
    let days = progresses.map((Progresses_now,idx) => {
        return Math.ceil((100 - Progresses_now)/speeds[idx]);
    });

    //console.log(days);
    while(days.length !== 0){
        let DeployComp = days.shift();
        let cnt=1;
        //console.log(DeployComp);
        while(DeployComp >= days[0]){
            days.shift();
            cnt++;
        }
        answer.push(cnt);
    }
    return answer;
}

console.log(solution([93,30,55],[1,30,5]));