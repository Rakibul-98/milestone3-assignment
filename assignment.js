// feetToMile Converter
function feetToMile(feet){
var mile= feet/5280;
return mile;
}
var total=feetToMile(12865);

var result=Math.round(total);
console.log(result, "Miles");



// woodCalculator
function woodCalculator(chair,table,bed){
var wood=chair*1+table*3+bed*5;
return wood;
}
var result=woodCalculator(4,2,1);
console.log("The wood amount is -",result);




// brickCalculator
function brickCalculator(floor){
    var input2=floor-10;
    var input3=floor-20;
    if(floor<=10){
        total=floor*15*1000;
        return total;
    }
    else if(floor>10 && floor<=20){
        total=150000+input2*12*1000;
        return total;
    }
    else{
        total=270000+input3*10*1000;
        return total;
    }
}
var result=brickCalculator(13);
console.log("The bricks amount is -",result, "pieces");




// tinyFriend
function tinyFriend(friends){
    var tiny=friends[0];
    var minSize=tiny.length;
    for(i=0; i < friends.length; i++){
        var element=friends[i];
        if(element.length<minSize){
            tiny=element;  
        }
    }
    return tiny;
}
var result=tinyFriend(["abuli","rakib","taha", "kashem"]);
console.log("My tiny friend is -",result);
