function receivesAFunction(spy){
    spy()
}

function returnsANamedFunction(){
    return fn()
}

function fn(){
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return function(){}
}