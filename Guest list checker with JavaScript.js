// Guest list checker with JavaScript. Programmed by Pcykho Duke.
// Special thanks to Angela Yu @ AppBrewary.

/* Add the names from your guest list inside the square brackets as strings. */

var guestList = ["John" , "Jake" , "Jennifer" , "Jenkinson" , "Jean" , 'Justus'];
var name = prompt ("What is your name?");

if (guestList.includes(name)) {
    alert ("Hello " + name + ", welcome abroad !");
} else {
    alert ("Sorry you're not invited. Maybe next time.");
}