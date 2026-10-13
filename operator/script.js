function myAnd(a, b){
    if (a){
        return b ;
    }
    {
        return false;
    }
}

console.log(myAnd(true,true));
console.log(myAnd(true,false));
console.log(myAnd(false, true));
console.log(myAnd(false,false));

function myOr(a,b){
    if (a){
        return true
    }
    {
        return b
    }
}
console.log(myOr(true,true));
console.log(myOr(true,false));
console.log(myOr(false, true));
console.log(myOr(false,false));

function myNot(a){
    return !a;
}

console.log(myNot(true))
console.log(myNot(false))