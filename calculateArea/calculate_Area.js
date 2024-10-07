let length;
let width;


function calculateArea(){
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

let area = length*width;    
}

doucument.getElementById('result').innerText = 'The area of the rectangle is: ${area}';
//Above code includes:
//document.getElementById ('result'): This part of the code retrieves an HTML element by its ID. Specifically, it targets an element with the ID 'result'.

//.innerText = The area of the rectangle is: ${area};: Once the element is accessed, .innerText is used to modify the text content within that HTML element.

//The backticks and ${} notation allow for the inclusion of JavaScript variables within a string (using template literals). In this case, it sets the text content to display a message along with the calculated area stored in the variable area. For example, if area holds a value of 25, the text displayed will be "The area of the rectangle is: 25".