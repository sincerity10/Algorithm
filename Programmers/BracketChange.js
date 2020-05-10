function solution(p) {
    //과정 1수행
    if(p==="" || IsPerfect(p)){return p;}
    let cutter = balancer(p)+1 ;
    // 과정 2수행 실제 구분자는 balancer에서 수행
    var u = p.slice(0,cutter);
    var v = p.slice(cutter);
    
    //과정 3의 수행
    if (IsPerfect(u)){
        return u + solution(v);
    }
    else{
        // 4-1 부터 4-3 수행
        let result = '(' + solution(v) +')';
        // 4-4 수행: u의 마지막 값 and 첫 값 제외 + 뒤집기
        u = u.slice(0,u.length-1);
        u = u.slice(1);
        u = u.replace(/\(/g,'a').replace(/\)/g,'(').replace(/a/g,')');
        // 4-4의 뒤에 붙이기
        result += u;      
        return result;
    }
}

function IsPerfect(oper){
    var Stack = [];
    for(var i in oper){
        if(oper[i]==='(') Stack.push('i');
        if(oper[i]===')') Stack.pop();
    }
    if(Stack.length === 0) return true;
    else return false;
}

function balancer(oper){
    var Stack = 0;
    var i

    for(i=0; i<oper.length; i++){
        if(oper[i]==='(') Stack++;
        if(oper[i]===')') Stack--;
        if(Stack===0) return i;
    }
}
