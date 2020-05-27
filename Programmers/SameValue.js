function solution(arr){
    var answer = -1;
    let repo;
    let cnt=0;

    while(arr.length !== 1){
        repo = [];
        for(var idx in arr){
            if(repo.length !== 0){
                if(repo[repo.length-1].val === arr[idx]) repo[repo.length-1].cnt++;
                else repo.push({val: arr[idx], cnt: 1});
            }
            else repo.push({val: arr[idx], cnt: 1});
            cnt++;
        }
        repo = repo.map(element => element.cnt);
        arr = repo;
        if(arr === cmp) break;      
    }
    console.log(arr);
    return answer;
}

solution([1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3]	);