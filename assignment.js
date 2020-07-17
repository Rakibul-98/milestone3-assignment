// feetToMile Converter
function feetToMile(feet){
    if(feet>0){
        var mile= feet/5280;
        return mile;
    }
    else{
    var mile=("warning!! Miles can not be negative.");
    return mile;
    }
}
var result=feetToMile(12865);
console.log(result,"miles");




// woodCalculator
function woodCalculator(chair,table,bed){
    if(chair>0 && table>0 && bed>0){
        var wood=chair*1+table*3+bed*5;
        return wood;
     }
     else{
        var wood=("warning!! Wood amount can not be negative.");
        return wood;
     }
}
var result=woodCalculator(4,2,1);
console.log("The wood amount is : ",result);




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
console.log("The bricks amount is : ",result, "pieces");




// tinyFriend
function tinyFriend(friends){
    var tiny=friends[0];
    var minSize=tiny.length;
    for(i=0; i < friends.length; i++){
        var element=friends[i];
        if(element.length==""){
              tiny="Sorry! You can't make me fool. You are a white space.";
        }
        else{
            if(element.length<minSize){
                tiny=element;  
            }
        }   
    }
    return tiny;
}
var result=tinyFriend(["tanvir", "sony","mim"]);
console.log("My tiny friend is : ",result);
