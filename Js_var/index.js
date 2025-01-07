var a = 0;
function demo(){
    var a = b = 1;
    var c = d = 100;
    var e = f = 20;

    console.log("Demo function: "+a,b);
    console.log("c: "+c);
    console.log("d: "+d);
}

demo();
console.log(a,b);