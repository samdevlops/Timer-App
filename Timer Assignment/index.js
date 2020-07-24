var ID = 0;
var sec = 0;
var min = 0;
toggler = 0;
var x = 1;

function max(){
    console.log("Old Maximum : "+x);
    x = document.getElementById("changeMax").value;
    
    alert("Maximum changed to : "+x);
    console.log("New Maximum : "+x);
}

function PrintTime(){
    //x can be modified from index page to any value. 
    //It stores maximum possible value of minutes after which reset is called.
    if(min === x){
        window.clearInterval(ID);
        min =00;
        sec =00;
        document.getElementById("btn").innerHTML = "Reset";
        document.getElementById("minutes").style.color="red";

    }
    else{
        if(sec === 60){
            min++;
            sec=0;
            document.getElementById("minutes").innerHTML = min+":"+sec;
            
        }
        else{
            document.getElementById("minutes").innerHTML = min+":"+sec;
            sec++;
        }
    }
}

function play(){
    document.getElementById("btn").innerHTML = "Pause";
    ID = window.setInterval(PrintTime,1000);
}

function pause(){
    window.clearInterval(ID);
}

function start(){
    if(toggler === 0){
        toggler = 1;
        document.getElementById("minutes").style.color="black";
        play();
    }
    else{
        toggler = 0;
        document.getElementById("btn").innerHTML = "Start";
        pause();
    }
}

