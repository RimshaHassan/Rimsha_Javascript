function one() {
    console.log("oneee")
    two()
    
}

function two() {
    console.log("twooo")
    three()
}


function three() {
    console.log("threee")
    
}
one()
two()
three()