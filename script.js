const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const matrix = document.querySelector("#matrix");
  // const persondate = new Date(document.querySelector("#persondate").value);
  const calculationPersonDate = document.getElementById("persondate").value;

  const splitCalculationPersonDate = calculationPersonDate.split("-");
  console.log(splitCalculationPersonDate); //[год, месяц, день] 2023 09 01

  const firstruneRaw = parseInt(splitCalculationPersonDate[2]); // 01
  const firstrune = sumDigitsYear(firstruneRaw); // 1
  const secondruneRaw = parseInt(splitCalculationPersonDate[1]); // 09
  const secondrune = sumDigitsYear(secondruneRaw); // 9
  const thirdruneRaw = parseInt(splitCalculationPersonDate[0]); // 2023
  const thirdrune = sumDigitsYear(thirdruneRaw); // 7
  const fourthruneRaw = firstrune + secondrune + thirdrune; // 17
  const fourthrune = sumDigitsYear(fourthruneRaw); // 17
  const fifthruneRaw = fourthrune + fourthrune; //1 + 9 + 7 + 17 = 34 = 3 + 4 = 7
  const fifthrune = sumDigitsYear(fifthruneRaw); // 7
  const sixruneRaw = firstrune + fourthrune; // 1 + 17 = 18
  const sixrune = sumDigitsYear(sixruneRaw); // 18
  const seventhruneRaw = secondrune + thirdrune; // 9 + 7
  const seventhrune = sumDigitsYear(seventhruneRaw); // 16
  const eighthruneRaw = fifthrune + thirdrune; // 7 + 7
  const eighthrune = sumDigitsYear(eighthruneRaw); // 14
  const ninethruneRaw = eighthrune + thirdrune; // 14 + 7 = 21
  const ninethrune = sumDigitsYear(ninethruneRaw); //21
  const tenruneRaw = fifthrune + fourthrune; // 7 + 17 = 24
  const tenrune = sumDigitsYear(tenruneRaw); // 24
  const elevenruneRaw = tenrune + fourthrune; // 24 + 17 = 41 = 5
  const elevenrune = sumDigitsYear(elevenruneRaw); // 5
  const twelveruneRaw = eighthrune + tenrune; // 14 + 24 = 38 = 11
  const twelverune = sumDigitsYear(twelveruneRaw); // 11
  const thirteenthRuneRaw = twelverune + eighthrune; // 11 + 14 = 25
  const thirteenthRune = sumDigitsYear(thirteenthRuneRaw); //25
  const fourteenthRuneRaw = twelverune + tenrune; // 11 + 24 = 35 = 8
  const fourteenthRune = sumDigitsYear(fourteenthRuneRaw); // 8
  const fifteenthRuneRaw = firstrune + secondrune; // 1 + 9 = 10
  const fifteenthRune = sumDigitsYear(fifteenthRuneRaw); // 10
  const sixteenthRuneRaw = secondrune + thirdrune; // 9 + 7 = 16
  const sixteenthRune = sumDigitsYear(sixteenthRuneRaw); // 16
  const seventeenthRuneRaw = thirdrune + fourthrune; // 7 + 17 = 24
  const seventeenthRune = sumDigitsYear(seventeenthRuneRaw); // 24
  const eighteenthRuneRaw = firstrune + fourthrune; // 1 + 17 = 18
  const eighteenthRune = sumDigitsYear(eighteenthRuneRaw); // 18
  const nineteenthRuneRaw = fifteenthRune + sixteenthRune; // 10 + 16 = 26 = 8
  const nineteenthRune = sumDigitsYear(nineteenthRuneRaw); // 8
  const twentiethRuneRaw = secondrune + nineteenthRune; // 9 + 8 = 17
  const twentiethRune = sumDigitsYear(twentiethRuneRaw); // 17
  const twentyFirstRuneRaw = firstrune + fifthrune; // 1 + 7 = 8
  const twentyFirstRune = sumDigitsYear(twentyFirstRuneRaw); // 8
  const twentySecondRuneRaw = firstrune + twentyFirstRune; // 1 + 8 = 9
  const twentySecondRune = sumDigitsYear(twentySecondRuneRaw); // 9
  const twentyThirdRuneRaw = secondrune + fourthrune; // 9 + 17 = 26
  const twentyThirdRune = sumDigitsYear(twentyThirdRuneRaw); // 8
  const twentyFourthRuneRaw = firstrune + thirdrune; // 1 + 7
  const twentyFourthRune = sumDigitsYear(twentyFourthRuneRaw); // 8
  const twentyFifthRuneRaw = twentyThirdRune + twentyFourthRune; // 8 + 8 = 16
  const twentyFifthRune = sumDigitsYear(twentyFifthRuneRaw); // 16
  // const purposePersonRaw = (firstrune + thirdrune) + (secondrune + fourteenthRune); // (1 + 7) + (9 + 8)
  const purposePersonRawFirstStep = firstrune + thirdrune; // 1 + 7 = 8
  const purposePersonFirstStep = sumDigitsYear(purposePersonRawFirstStep);
  const purposePersonRawSecondStep = secondrune + fourteenthRune; // 9 + 8 = 17
  const purposePersonSecondStep = sumDigitsYear(purposePersonRawSecondStep); // 9 + 8 = 17
  const purposePersonRawThirdStep =
    purposePersonFirstStep + purposePersonSecondStep; // 8 + 17 = 25
  const purposePerson = sumDigitsYear(purposePersonRawThirdStep); // 25
  // const purposeSocialRaw =
  //   (fifteenthRune + seventeenthRune) + (sixteenthRune + eighteenthRune); // (10 + 24) + (16 + 18)
  const purposeSocialRawFirstStep = fifteenthRune + seventeenthRune; // 10 + 24 = 34 = 7
  const purposeSocialFirstStep = sumDigitsYear(purposeSocialRawFirstStep); // 34 = 7
  const purposeSocialRawSecondStep = sixteenthRune + eighteenthRune; // 16 + 18 = 34 = 7
  const purposeSocialSecondStep = sumDigitsYear(purposeSocialRawSecondStep); // 34 = 7
  const purposeSocialRawThirdStep =
    purposeSocialFirstStep + purposeSocialSecondStep; // 7 + 7 = 14
  const purposeSocial = sumDigitsYear(purposeSocialRawThirdStep); // 14
  const purposeSpiritRaw = purposePerson + purposeSocial; // 25 + 14 = 39 = 12
  const purposeSpirit = sumDigitsYear(purposeSpiritRaw); // 12
  const purposePlanetRaw = purposeSocial + purposeSpirit; // 14 + 12 = 26 = 8
  const purposePlanet = sumDigitsYear(purposePlanetRaw); // 8

  console.log(ninethrune);

  function sumDigitsYear(n) {
    if (n <= 25) {
      return n;
    }
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
  const powerpnt = document.querySelector("#powerpnt");
  const helppnt = document.querySelector("#helppnt");
  const intuitionpnt = document.querySelector("#intuitionpnt");
  const entryintomoneypnt = document.querySelector("#entryintomoneypnt");
  const ninepnt = document.querySelector("#ninepnt");
  const tenpnt = document.querySelector("#tenpnt");
  const elevenpnt = document.querySelector("#elevenpnt");
  const twelvenpnt = document.querySelector("#twelvenpnt");
  const thirteenthPnt = document.querySelector("#thirteenthPnt");
  const fourteenthPnt = document.querySelector("#fourteenthPnt");
  const fifteenthPnt = document.querySelector("#fifteenthPnt");
  const sixteenthPnt = document.querySelector("#sixteenthPnt");
  const seventeenthPnt = document.querySelector("#seventeenthPnt");
  const eighteenthPnt = document.querySelector("#eighteenthPnt");
  const nineteenthPnt = document.querySelector("#nineteenthPnt");
  const twentiethPnt = document.querySelector("#twentiethPnt");
  const twentyFirstPnt = document.querySelector("#twentyFirstPnt");
  const twentySecondPnt = document.querySelector("#twentySecondPnt");
  const twentyThirdPnt = document.querySelector("#twentyThirdPnt");
  const twentyFourthPnt = document.querySelector("#twentyFourthPnt");
  const twentyFifthPnt = document.querySelector("#twentyFifthPnt");
  const purposePersonText = document.querySelector("#purposePerson");
  const purposeSocialText = document.querySelector("#purposeSocial");
  const purposeSpiritText = document.querySelector("#purposeSpirit");
  const purposePlanetText = document.querySelector("#purposePlanet");
  personpnt.textContent = firstrune;
  creativitypnt.textContent = secondrune;
  lessonspnt.textContent = thirdrune;
  goalpnt.textContent = fourthrune;
  powerpnt.textContent = fifthrune;
  helppnt.textContent = sixrune;
  intuitionpnt.textContent = seventhrune;
  entryintomoneypnt.textContent = eighthrune;
  ninepnt.textContent = ninethrune;
  tenpnt.textContent = tenrune;
  elevenpnt.textContent = elevenrune;
  twelvenpnt.textContent = twelverune;
  thirteenthPnt.textContent = thirteenthRune;
  fourteenthPnt.textContent = fourteenthRune;
  fifteenthPnt.textContent = fifteenthRune;
  sixteenthPnt.textContent = sixteenthRune;
  seventeenthPnt.textContent = seventeenthRune;
  eighteenthPnt.textContent = eighteenthRune;
  nineteenthPnt.textContent = nineteenthRune;
  twentiethPnt.textContent = twentiethRune;
  twentyFirstPnt.textContent = twentyFirstRune;
  twentySecondPnt.textContent = twentySecondRune;
  twentyThirdPnt.textContent = twentyThirdRune;
  twentyFourthPnt.textContent = twentyFourthRune;
  twentyFifthPnt.textContent = twentyFifthRune;
  purposePersonText.textContent = purposePerson;
  purposeSocialText.textContent = purposeSocial;
  purposeSpiritText.textContent = purposeSpirit;
  purposePlanetText.textContent = purposePlanet;
});

const calculatePoints = () => {};
