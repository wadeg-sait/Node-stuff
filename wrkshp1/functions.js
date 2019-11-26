/* Functions for Wade's website
    <meta name="author" content="Wade Grimm">
    <meta name="course" content="CPRG210">
    <meta name="date" content="November 23, 2019">

*/

// Create RegEx for Postal Code
var myReg = /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z][ ]?[0-9][ABCEGHJ-NPRSTV-Z][0-9]$/i;

// Check all fields have data, if not change background color and setfocus for first empty field
function fnFormValidate() {
    var myform = document.forms.namedItem("regForm");
    // var for determining first empty element
    var focusSet = false;
    // loop through elements in the form
    for (i = 0; i < myform.elements.length; i++) {
        // only process text elements
        if (myform.elements[i].type == "text") {
            // only Do something if it's empty
            if (myform.elements[i].value == "") {
                // set focus on first empty element
                if (focusSet == false) {
                    myform.elements[i].focus();
                    focusSet = true;
                }
                // set background color to REDish
                myform.elements[i].style.backgroundColor = "#f0cccc";
            }
        }
    }
    // If we have an element with the focus set (empty), then cancel the submit
    if (focusSet) {
        // reset the var for the next submit
        focusSet = false;
        return false;
    }
    else {
        // all is good, contine submitting data?
        return confirm("Continue submitting?");
    }
}

// Valid date the Postal code passed into fuction, return a true or false based on result
function fnValidatePostal(postal) {
    if (myReg.test(postal)) {
        // we have a good Postal
        return true;
    }
    else {
        //Problem with postal, return false
        return false;
    }
}

// open a popup when image is clicked based on URL passed into function
function openWindow(myURL) {
    myWindow = window.open(myURL, "", "height=600,width=800,location=no,scrollbars=no,menubar=no,resizable=no,status=no");
    // set a timer to close the window after 10 secs
    setTimeout(function () { myWindow.close(); }, 10000);
}

// Reset the form data
function fnClearForm() {
    // set a var to the form object
    var myform = document.forms.namedItem("regForm");
    // only continue if user clicks OK
    if (confirm('Continue the Reset?')) {
        //loop through the form elements, set background color to default and clear any data in field
        for (i = 0; i < myform.elements.length; i++) {
            myform.elements[i].style.backgroundColor = "";
            myform.elements[i].value = "";
        }
    }
}