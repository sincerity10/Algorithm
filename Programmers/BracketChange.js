function solution(p) {
    //var answer = '';
    if(p==="" || IsPerfect(p)){return p;}
    var u = p.slice(0,balancer(p)+1);
    var v = p.slice(balancer(p)+1);
    if (IsPerfect(u)){
        //console.log(u);
        return u + solution(v);
    }
    else{
        console.log(u);
        console.log(v);
        u = u.slice(0,u.length-1);
        u = u.slice(1);
        //console.log(u);
        u = u.replace(/\(/g,'a').replace(/\)/g,'(').replace(/a/g,')');
        //console.log(u);
        t = '(' + solution(v) +')' + u;
        //console.log(u);
        //console.log(u);
        //answer = u;
        return t;
    }
    console.log(answer);
}

function IsPerfect(oper){
    var Stack = [];
    for(var i in oper){
        if(oper[i]==='('){
            Stack.push('i');
        }
        else{Stack.pop();}
    }
    if(Stack.length===0){
        return true;
    }
    else{return false;}
}

function balancer(oper){
    var Stack = 0;
    var i
    for(i=0; i<oper.length-1; i++){
        if(oper[i]==='('){
            Stack++;
        }
        else{Stack--;}
        if(Stack===0){
            return i;
            break;
        }
    }
}

//var answer = solution("()))((()");
//console.log(answer);
var answer = solution(")(");
console.log(answer);
