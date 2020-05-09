function solution(strings, n) {
    var answer = [];
    let newsort = [];
    
    newsort = strings.map((element,idx) =>{
        return {index: idx, sort: element[1], real: element};
    });
    
    newsort = newsort.sort(function(a,b){
        return a.sort < b.sort ? -1 : a.sort > b.sort ? 1 : 0;
        //a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    
    
    console.log(newsort);
    return answer.map(element => element.real);
}

solution(["sun", "bed", "car"],1);