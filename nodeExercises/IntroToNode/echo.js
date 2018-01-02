//Instructions: create a function named echo that accepts two parameters, a string a number. The function should print the string parameter the number of times speificed by the number parameter

function echo(str, num){
    for(var i = 1; i <= num; i++){
        console.log([i] + "." + " " + str);
    }
}

echo("Echo!!!", 10) //should print "Echo!!!" 10 times
echo("Tater Tots", 3) //should print "Tater Tots" 3 times