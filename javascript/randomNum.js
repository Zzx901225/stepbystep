



window.onload = function(){
    var objRedball = document.getElementById("redball");
    var objBlueball = document.getElementById("blueball");
    var objBtn = document.getElementById("btn");
    var arrRedball = [];
    
    var arrBlueball = [];
    for (var j=0;j<16;j++) {
        arrBlueball.push(j+1);
    }

    objBtn.onclick = function(){
        var randomNum = Math.floor(Math.random()*36 + 1);
        console.log("randomNum",randomNum);
        // for( var i=0;i<arrRedball.length;i++){
        //     if(randomNum == arrRedball[i]){
        //         console.log("chongle")
        //         randomNum = Math.floor(Math.random()*36 + 1);
        //         console.log("newrandomNum",randomNum)
        //     }
        //     else{
        //         console.log("tiaol")
        //         arrRedball.push(randomNum);
        //     }
        //     console.log("arrRedball",arrRedball[i]);
        // }
        
        arrRedball.push(randomNum);
        arrRedball.sort(function (x,y) {
            return x-y;
        });
        objRedball.innerHTML = arrRedball;
        
    }
    objRedball.innerHTML = arrRedball;
    objBlueball.innerHTML = arrBlueball;
}