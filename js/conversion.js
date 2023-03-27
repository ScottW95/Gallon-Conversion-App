/*
   Scott Walker
   March 26, 2023
*/

//Function to display amount of gallons entered and convert them to pints
function display()
{
    var gal = document.getElementById("gallons").value;

    document.getElementById("gallonDisplay").innerHTML = gal;

    document.getElementById("pints").innerHTML = gal * 8;
 }

