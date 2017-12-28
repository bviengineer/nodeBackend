//Node Exercise 2
//Average Grade
//Define a funciton named average
//Should take a single parameter: an array of test scores (all numbers)
//It should reeturn the average score in the array, rounded to the nearest whole number

var scores = [90, 98, 89, 100, 100, 86, 94]; 

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(arr){
    var totalScore = 0;
    for(var i = 0; i < arr.length; i++){
        totalScore += arr[i];
    }
    var averageScore = totalScore / arr.length;
    return Math.round(averageScore);
}

average(scores); // should return 94
average(scores2); // should return 68