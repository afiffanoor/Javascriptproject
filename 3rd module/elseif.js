// 90 - 100 -->A
// 70-89 -->B
// 50 - 69 -->C
// lower then 50 -> F

var studentScore = 30;

if( studentScore > 90){
    console.log('A');
}
else if (studentScore >=70 && studentScore <=89){
    console.log('B');
}
else if(studentScore >=50 && studentScore<=69){
    console.log('C');
}
else{
    console.log('F');
}
