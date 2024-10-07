let GT1;
let GT2;
let GT3;
let GT4;
let GT5;
function GroceryTracker(){
    GT1 = parseFloat(document.getElementById("GT1").value);
    GT2 = parseFloat(document.getElementById("GT2").value);
    GT3 = parseFloat(document.getElementById("GT3").value);
    GT4 = parseFloat(document.getElementById("GT4").value);
    GT5 = parseFloat(document.getElementById("GT5").value);
    let sum = GT1+GT2+GT3+GT4+GT5;
    document.getElementById("result").innerText = `The total amount is: ${sum}`



}
