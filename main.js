array=[];
function submit() {
var n1=document.getElementById("name1").value;
var n2=document.getElementById("name2").value;
var n3=document.getElementById("name3").value;
var n4=document.getElementById("name4").value;
array.push(n1);
array.push(n2);
array.push(n3);
array.push(n4);
console.log(array);
document.getElementById("display").innerHTML=array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";

}
function sort() {
array.sort();
console.log(array);
document.getElementById("display").innerHTML=array;








}








