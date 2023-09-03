const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const matrix = document.querySelector("#matrix");
  // const persondate = new Date(document.querySelector("#persondate").value);
  const calculationPersonDate = document.getElementById("persondate").value;

  const splitCalculationPersonDate = calculationPersonDate.split("-");
  console.log(splitCalculationPersonDate); //[год, месяц, день] 2023 09 01
  let firstrune = splitCalculationPersonDate[2]; // 01
  let secondrune = splitCalculationPersonDate[1]; // 09
  let thirdrune = splitCalculationPersonDate[0]; // 2023
  let fourthrune = firstrune + secondrune + thirdrune; // 17
  let fifthrune = firstrune + secondrune + thirdrune + fourthrune; //1 + 9 + 7 + 17 = 34 = 3 + 4 = 7
  firstrune = sumDigits(firstrune);
  secondrune = sumDigits(secondrune);
  thirdrune = sumDigitsYear(thirdrune);
  fourthrune = sumDigits(fourthrune);
  fifthrune = sumDigitsYear(fifthrune);
  console.log(fifthrune);
  function sumDigits(n) {
    if (n > 25) {
      let str = n.toString();
      let firstDigit = parseInt(str[0]);
      let secondDigit = parseInt(str[str.length - 1]);
      return firstDigit + secondDigit;
    } else {
      return n;
    }
  }
  function sumDigitsYear(n) {
    let sum;
    while (n > 25) {
      sum = 0;
      const digits = Array.from(String(n), Number);
      for (let digit of digits) {
        sum += digit;
      }
      n = sum;
    }
    return sum;
  }
  matrix.style.display = "block";
  const personpnt = document.querySelector("#personpnt");
  const creativitypnt = document.querySelector("#creativitypnt");
  const lessonspnt = document.querySelector("#lessonspnt");
  const goalpnt = document.querySelector("#goalpnt");
  personpnt.textContent = firstrune;
  creativitypnt.textContent = secondrune;
  lessonspnt.textContent = thirdrune;
  goalpnt.textContent = fourthrune;
});

const calculatePoints = () => {};
