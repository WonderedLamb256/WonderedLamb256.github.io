var detectTimeParagraph;
var month;
var programMonth = new Date().getMonth(); // runs Date().getMonth(); and puts it in programMonth
var day = new Date().getDate(); // Ditto.
var year = new Date().getFullYear(); // Ditto.

switch(programMonth) { // Programmatically takes variable of programMonth and figures out month via its variable
      case 0:
            month = "January";
            break;
      case 1:
            month = "February";
            break;
      case 2:
            month = "March";
            break;
      case 3:
            month = "April";
            break;
      case 4:
            month = "May";
            break;
      case 5:
            month = "June";
            break;
      case 6:
            month = "July";
            break;
      case 7:
            month = "August";
            break;
      case 8:
            month = "September";
            break;
      case 9:
            month = "October";
            break;
      case 10:
            month = "November";
            break;
      case 11:
            month = "December";
            break;
      default:
            month = "(Trouble getting month)";
            break;     
}

detectTimeParagraph = document.getElementsByClassName("time"); // Locate the <p> tag with the time class

detectTimeParagraph.innerHTML = `Today is ${month} ${day}, ${year}` // Tell full month
