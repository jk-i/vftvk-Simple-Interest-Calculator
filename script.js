function compute()
{
    // Exercise 4: 2. Create a variable called 'principal' and assign to it the value of the input element "principal"
    var principal = document.getElementById("principal").value;

    // Exercise 4: 3. Create a variable called rate and assign to it the value of the input element "rate"
    var rate = document.getElementById("rate").value;

    // Exercise 4: 4. Create a variable called years and assign to it the value of the input element "years"
    var years = document.getElementById("years").value;

    // Exercise 4: 5. Create a variable called interest and assign to it the value of principal * years * rate / 100
    var interest = principal * years * rate / 100;

    // Exercise 4: 6. Write the logic to convert the 'No of Years' into the actual year in the future.
    var year = new Date().getFullYear() + parseInt(years);

    // Exercise 4: 14. Add validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"
    if (!(principal >= 1)) {
        alert("Enter a positive number.");
        // Exercise 4: 15. Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box.
        document.getElementById("principal").focus();
    } else {
        // Exercise 4: 10. Get the reference to the element named 'result'
        var result = document.getElementById("result");
        console.log(year);
        // Exercise 4: 11. When "Compute Interest" is clicked... // Exercise 4: 13. Make sure the numbers in the result are highlighted.
        result.innerHTML="If you deposit <mark>" + principal + "</mark>, <br> at an interest rate of <mark>" + rate + "%</mark>. <br>You will receive an amount of <mark>" + interest + "</mark>,<br> in the year <mark>" + year + "</mark>";
    }
}

// Exercise 4: 7. Write a function that reads the value of the range slider and displays it the <span> adjacent to the slider.
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        