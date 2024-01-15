function displayInput() {
    let num1 = parseFloat(document.getElementById("firstnumber").value);
    let num2 = parseFloat(document.getElementById("secondnumber").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers");
      return;
    }
  
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
  
    document.getElementById("output").innerHTML =
      "<strong>Results:</strong>" + "<br>" +
      "<br>Sum: " + sum + "<br>" +
      "<br>Difference: " + difference + "<br>" +
      "<br>Product: " + product + "<br>" +
      "<br>Quotient: " + quotient;
  }
  