function solveEquation() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let solution = document.getElementById('solution');
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      solution.innerHTML = "Please enter valid numbers for a, b, and c.";
      return;
    }
  
    if (a === 0) {
      solution.innerHTML = "Coefficient 'a' cannot be zero for a quadratic equation.";
      return;
    }
  
    let discriminant = b * b - 4 * a * c;
  
    if (discriminant > 0) {
      let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      solution.innerHTML = `The roots are real and different. Root 1: ${root1.toFixed(16)}, Root 2: ${root2.toFixed(15)}`;
    } else if (discriminant === 0) {
      let root = -b / (2 * a);
      solution.innerHTML = `The roots are real and same. Root: ${root.toFixed(16)}`;
    } else {
      let realPart = (-b / (2 * a)).toFixed(4);
      let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(16);
      solution.innerHTML = `The roots are complex and different. Root 1: ${realPart} + ${imaginaryPart}i, Root 2: ${realPart} - ${imaginaryPart}i`;
    }
  }
  