const btn = document.querySelector("#btn");
const btnCompatibility = document.querySelector("#btnCompatibility");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const matrix = document.querySelector("#matrix");
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
  const fifthruneRaw = firstrune + secondrune + thirdrune + fourthrune; //1 + 9 + 7 + 17 = 34 = 3 + 4 = 7
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
  // const purposePersonFirstStep = sumDigitsYear(purposePersonRawFirstStep); // 8
  const purposePersonRawSecondStep = secondrune + fourthrune; // 9 + 8 = 17
  console.log("secondrune: " + secondrune);
  console.log("fourteenthRune: " + fourthrune);
  // const purposePersonSecondStep = sumDigitsYear(purposePersonRawSecondStep); // 9 + 8 = 17
  const purposePersonRawThirdStep =
    purposePersonRawFirstStep + purposePersonRawSecondStep; // 8 + 17 = 25
  console.log("purposePersonRawFirstStep: " + purposePersonRawFirstStep);
  console.log("purposePersonRawSecondStep: " + purposePersonRawSecondStep);
  const purposePerson = sumDigitsYear(purposePersonRawThirdStep); // 25
  // const purposeSocialRaw =
  //   (fifteenthRune + seventeenthRune) + (sixteenthRune + eighteenthRune); // (10 + 24) + (16 + 18)
  const purposeSocialRawFirstStep = fifteenthRune + seventeenthRune; // 10 + 24 = 34 = 7
  // const purposeSocialFirstStep = sumDigitsYear(purposeSocialRawFirstStep); // 34 = 7
  const purposeSocialRawSecondStep = sixteenthRune + eighteenthRune; // 16 + 18 = 34 = 7
  // const purposeSocialSecondStep = sumDigitsYear(purposeSocialRawSecondStep); // 34 = 7
  const purposeSocialRawThirdStep =
    purposeSocialRawFirstStep + purposeSocialRawSecondStep; // 7 + 7 = 14
  const purposeSocial = sumDigitsYear(purposeSocialRawThirdStep); // 14
  const purposeSpiritRaw = purposePerson + purposeSocial; // 25 + 14 = 39 = 12
  const purposeSpirit = sumDigitsYear(purposeSpiritRaw); // 12
  const purposePlanetRaw = purposeSocial + purposeSpirit; // 14 + 12 = 26 = 8
  const purposePlanet = sumDigitsYear(purposePlanetRaw); // 8

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
  const nameText = document.querySelector(".nameText");
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
  nameText.textContent = "Персональная матрица";
});

btnCompatibility.addEventListener("click", (e) => {
  e.preventDefault();
  const matrix = document.querySelector("#matrix");
  const calculationPersonDateFirst =
    document.getElementById("persondateFirst").value;
  const calculationPersonDateSecond =
    document.getElementById("persondateSecond").value;
  const splitCalculationPersonDateFirst = calculationPersonDateFirst.split("-");
  const splitCalculationPersonDateSecond =
    calculationPersonDateSecond.split("-");
  console.log(splitCalculationPersonDateFirst); //[год, месяц, день] 2023 09 01
  console.log(splitCalculationPersonDateSecond); //[год, месяц, день] 2023 09 01
  const firstruneRawFirst = parseInt(splitCalculationPersonDateFirst[2]); // 01
  const firstruneFirst = sumDigitsYear(firstruneRawFirst); // 1
  const firstruneRawSecond = parseInt(splitCalculationPersonDateSecond[2]); // 01
  const firstruneSecond = sumDigitsYear(firstruneRawSecond); // 1
  const firstrune = sumDigitsYear(firstruneFirst + firstruneSecond); // 1 + 1 = 2

  const secondruneRawFirst = parseInt(splitCalculationPersonDateFirst[1]); // 09
  const secondruneFirst = sumDigitsYear(secondruneRawFirst); // 9
  const secondruneRawSecond = parseInt(splitCalculationPersonDateSecond[1]); // 09
  const secondruneSecond = sumDigitsYear(secondruneRawSecond); // 9
  const secondrune = sumDigitsYear(secondruneFirst + secondruneSecond); // 9 + 9 = 18

  const thirdruneRawFirst = parseInt(splitCalculationPersonDateFirst[0]); // 2023
  const thirdruneFirst = sumDigitsYear(thirdruneRawFirst); // 7
  const thirdruneRawSecond = parseInt(splitCalculationPersonDateSecond[0]); // 2023
  const thirdruneSecond = sumDigitsYear(thirdruneRawSecond); // 7
  const thirdrune = sumDigitsYear(thirdruneFirst + thirdruneSecond); // 7 + 7 = 14

  const fourthruneRawFirst = firstrune + secondrune + thirdrune; // 2 + 18 + 14 = 34
  const fourthruneFirst = sumDigitsYear(fourthruneRawFirst); // 34 = 7
  const fourthruneRawSecond = firstrune + secondrune + thirdrune; // 2 + 18 + 14 = 34
  const fourthruneSecond = sumDigitsYear(fourthruneRawSecond); // 34 = 7
  const fourthrune = sumDigitsYear(fourthruneFirst + fourthruneSecond); // 7 + 7 = 14

  const fifthruneRawFirst = firstrune + secondrune + thirdrune + fourthrune; // 14 + 14 = 28
  const fifthruneFirst = sumDigitsYear(fifthruneRawFirst); // 28 = 10
  const fifthruneRawSecond = firstrune + secondrune + thirdrune + fourthrune; // 14 + 14 = 28
  const fifthruneSecond = sumDigitsYear(fifthruneRawSecond); // 28 = 10
  const fifthrune = sumDigitsYear(fifthruneFirst + fifthruneSecond); // 10 + 10 = 20

  const sixruneRawFirst = firstrune + fourthrune; // 2 + 14 = 16
  const sixruneFirst = sumDigitsYear(sixruneRawFirst); // 16
  const sixruneRawSecond = firstrune + fourthrune; // 2 + 14 = 16
  const sixruneSecond = sumDigitsYear(sixruneRawSecond); // 16
  const sixrune = sumDigitsYear(sixruneFirst + sixruneSecond); // 16 + 16 = 32 = 3+2=5

  const seventhruneRawFirst = secondrune + thirdrune; // 18 + 14 = 32
  const seventhruneFirst = sumDigitsYear(seventhruneRawFirst); // 32 = 5
  const seventhruneRawSecond = secondrune + thirdrune; // 18 + 14 = 32
  const seventhruneSecond = sumDigitsYear(seventhruneRawSecond); // 32 = 5
  const seventhrune = sumDigitsYear(seventhruneFirst + seventhruneSecond); // 5 + 5 = 10

  const eighthruneRawFirst = fifthrune + thirdrune; // 20 + 14 = 34
  const eighthruneFirst = sumDigitsYear(eighthruneRawFirst); // 34 = 7
  const eighthruneRawSecond = fifthrune + thirdrune; // 20 + 14 = 34
  const eighthruneSecond = sumDigitsYear(eighthruneRawSecond); // 34 = 7
  const eighthrune = sumDigitsYear(eighthruneFirst + eighthruneSecond); // 7 + 7 = 14

  const ninethruneRawFirst = eighthrune + thirdrune; // 14 + 14 = 28
  const ninethruneFirst = sumDigitsYear(ninethruneRawFirst); // 28 = 10
  const ninethruneRawSecond = eighthrune + thirdrune; // 14 + 14 = 28
  const ninethruneSecond = sumDigitsYear(ninethruneRawSecond); // 28 = 10
  const ninethrune = sumDigitsYear(ninethruneFirst + ninethruneSecond); // 10 + 10 = 20

  const tenruneRawFirst = fifthrune + fourthrune; // 20 + 14 = 34
  const tenruneFirst = sumDigitsYear(tenruneRawFirst); // 34=7
  const tenruneRawSecond = fifthrune + fourthrune; // 20 + 14
  const tenruneSecond = sumDigitsYear(tenruneRawSecond); //34=7
  const tenrune = sumDigitsYear(tenruneFirst + tenruneSecond); // 7 + 7 = 14

  const elevenruneRawFirst = tenrune + fourthrune; // 14 + 14 = 28
  const elevenruneFirst = sumDigitsYear(elevenruneRawFirst); // 28 =10
  const elevenruneRawSecond = tenrune + fourthrune; // 14 + 14 = 28
  const elevenruneSecond = sumDigitsYear(elevenruneRawSecond); //28 =10
  const elevenrune = sumDigitsYear(elevenruneFirst + elevenruneSecond); // 10+10=20

  const twelveruneRawFirst = eighthrune + tenrune; //14+14=28
  const twelveruneFirst = sumDigitsYear(twelveruneRawFirst); //28=10
  const twelveruneRawSecond = eighthrune + tenrune; //14+14=28
  const twelveruneSecond = sumDigitsYear(twelveruneRawSecond); //28=10
  const twelverune = sumDigitsYear(twelveruneFirst + twelveruneSecond); //10+10=20

  const thirteenthRuneRawFirst = twelverune + eighthrune; // 20+14=34
  const thirteenthRuneFirst = sumDigitsYear(thirteenthRuneRawFirst); // 34=7
  const thirteenthRuneRawSecond = twelverune + eighthrune; // 20+14=34
  const thirteenthRuneSecond = sumDigitsYear(thirteenthRuneRawSecond); // 34=7
  const thirteenthRune = sumDigitsYear(
    thirteenthRuneFirst + thirteenthRuneSecond
  ); // 7 + 7 = 14

  const fourteenthRuneRawFirst = twelverune + tenrune; // 20+14=34
  const fourteenthRuneFirst = sumDigitsYear(fourteenthRuneRawFirst); //34=7
  const fourteenthRuneRawSecond = twelverune + tenrune; // 20+14=34
  const fourteenthRuneSecond = sumDigitsYear(fourteenthRuneRawSecond); //34=7
  const fourteenthRune = sumDigitsYear(
    fourteenthRuneFirst + fourteenthRuneSecond
  ); // 7 + 7 = 14

  const fifteenthRuneRawFirst = firstrune + secondrune; // 2 + 18 = 20
  const fifteenthRuneFirst = sumDigitsYear(fifteenthRuneRawFirst); //20
  const fifteenthRuneRawSecond = firstrune + secondrune; // 2 + 18 = 20
  const fifteenthRuneSecond = sumDigitsYear(fifteenthRuneRawSecond); //20
  const fifteenthRune = sumDigitsYear(fifteenthRuneFirst + fifteenthRuneSecond); // 20+20=40=4

  const sixteenthRuneRawFirst = secondrune + thirdrune; // 18+14=32
  const sixteenthRuneFirst = sumDigitsYear(sixteenthRuneRawFirst); //32=5
  const sixteenthRuneRawSecond = secondrune + thirdrune; // 18+14=32
  const sixteenthRuneSecond = sumDigitsYear(sixteenthRuneRawSecond); //32=5
  const sixteenthRune = sumDigitsYear(sixteenthRuneFirst + sixteenthRuneSecond); // 5+5=10

  const seventeenthRuneRawFirst = thirdrune + fourthrune; //14+14=28
  const seventeenthRuneFirst = sumDigitsYear(seventeenthRuneRawFirst); //28=10
  const seventeenthRuneRawSecond = thirdrune + fourthrune; //14+14=28
  const seventeenthRuneSecond = sumDigitsYear(seventeenthRuneRawSecond); //28=10
  const seventeenthRune = sumDigitsYear(
    seventeenthRuneFirst + seventeenthRuneSecond
  ); //10+10=20

  const eighteenthRuneRawFirst = firstrune + fourthrune; // 2+14=16
  const eighteenthRuneFirst = sumDigitsYear(eighteenthRuneRawFirst); // 16
  const eighteenthRuneRawSecond = firstrune + fourthrune; // 2+14=16
  const eighteenthRuneSecond = sumDigitsYear(eighteenthRuneRawSecond); // 16
  const eighteenthRune = sumDigitsYear(
    eighteenthRuneFirst + eighteenthRuneSecond
  ); // 16+16=32=5

  const nineteenthRuneRawFirst = fifteenthRune + sixteenthRune; //4+10=14
  const nineteenthRuneFirst = sumDigitsYear(nineteenthRuneRawFirst); // 14
  const nineteenthRuneRawSecond = fifteenthRune + sixteenthRune; //4+10=14
  const nineteenthRuneSecond = sumDigitsYear(nineteenthRuneRawSecond); // 14
  const nineteenthRune = sumDigitsYear(
    nineteenthRuneFirst + nineteenthRuneSecond
  ); //14+14=28=10

  const twentiethRuneRawFirst = secondrune + nineteenthRune; // 18+10=28
  const twentiethRuneFirst = sumDigitsYear(twentiethRuneRawFirst); // 28=10
  const twentiethRuneRawSecond = secondrune + nineteenthRune; // 18+10=28
  const twentiethRuneSecond = sumDigitsYear(twentiethRuneRawSecond); // 28=10
  const twentiethRune = sumDigitsYear(twentiethRuneFirst + twentiethRuneSecond); //10+10=20

  const twentyFirstRuneRawFirst = firstrune + fifthrune; // 2+20=22
  const twentyFirstRuneFirst = sumDigitsYear(twentyFirstRuneRawFirst); // 22
  const twentyFirstRuneRawSecond = firstrune + fifthrune; // 2+20=22
  const twentyFirstRuneSecond = sumDigitsYear(twentyFirstRuneRawSecond); // 22
  const twentyFirstRune = sumDigitsYear(
    twentyFirstRuneFirst + twentyFirstRuneSecond
  ); //22+22=44=8

  const twentySecondRuneRawFirst = firstrune + twentyFirstRune; //2+8=10
  const twentySecondRuneFirst = sumDigitsYear(twentySecondRuneRawFirst); //10
  const twentySecondRuneRawSecond = firstrune + twentyFirstRune; //2+8=10
  const twentySecondRuneSecond = sumDigitsYear(twentySecondRuneRawSecond); //10
  const twentySecondRune = sumDigitsYear(
    twentySecondRuneFirst + twentySecondRuneSecond
  ); //10+10=20

  const twentyThirdRuneRawFirst = secondrune + fourthrune; // 18+14=32
  const twentyThirdRuneFirst = sumDigitsYear(twentyThirdRuneRawFirst); //32=5
  const twentyThirdRuneRawSecond = secondrune + fourthrune; // 18+14=32
  const twentyThirdRuneSecond = sumDigitsYear(twentyThirdRuneRawSecond); //32=5
  const twentyThirdRune = sumDigitsYear(
    twentyThirdRuneFirst + twentyThirdRuneSecond
  ); //5+5=10

  const twentyFourthRuneRawFirst = firstrune + thirdrune; // 2+14=16
  const twentyFourthRuneFirst = sumDigitsYear(twentyFourthRuneRawFirst); // 16
  const twentyFourthRuneRawSecond = firstrune + thirdrune; // 2+14=16
  const twentyFourthRuneSecond = sumDigitsYear(twentyFourthRuneRawSecond); // 16
  const twentyFourthRune = sumDigitsYear(
    twentyFourthRuneFirst + twentyFourthRuneSecond
  ); // 16+16=32=5

  const twentyFifthRuneRawFirst = twentyThirdRune + twentyFourthRune; // 10+5=15
  const twentyFifthRuneFirst = sumDigitsYear(twentyFifthRuneRawFirst); //15
  const twentyFifthRuneRawSecond = twentyThirdRune + twentyFourthRune; // 10+5=15
  const twentyFifthRuneSecond = sumDigitsYear(twentyFifthRuneRawSecond); //15
  const twentyFifthRune = sumDigitsYear(
    twentyFifthRuneFirst + twentyFifthRuneSecond
  ); //15+15=30=3

  // const purposePersonRawFirst = (firstrune + thirdrune) + (secondrune + fourteenthRune); // (2 + 14) + (18 + 14)
  const purposePersonRawFirstStepFirst = firstrune + thirdrune; // 2+14=16
  const purposePersonFirstStepFirst = sumDigitsYear(
    purposePersonRawFirstStepFirst
  ); //16
  const purposePersonRawSecondStepFirst = secondrune + fourthrune; // 18+14=32
  const purposePersonSecondStepFirst = sumDigitsYear(
    purposePersonRawSecondStepFirst
  ); //32=5
  const purposePersonRawThirdStepFirst =
    purposePersonFirstStepFirst + purposePersonSecondStepFirst; // 16+5=21
  const purposePersonFirst = sumDigitsYear(purposePersonRawThirdStepFirst); //21

  // const purposePersonRawSecond = (firstrune + thirdrune) + (secondrune + fourteenthRune); // (2 + 14) + (18 + 14)
  const purposePersonRawFirstStepSecond = firstrune + thirdrune; // 2+14=16
  const purposePersonFirstStepSecond = sumDigitsYear(
    purposePersonRawFirstStepSecond
  ); //16
  const purposePersonRawSecondStepSecond = secondrune + fourthrune; // 18+14=32
  const purposePersonSecondStepSecond = sumDigitsYear(
    purposePersonRawSecondStepSecond
  ); //32=5
  const purposePersonRawThirdStepSecond =
    purposePersonFirstStepSecond + purposePersonSecondStepSecond; // 16+5=21
  const purposePersonSecond = sumDigitsYear(purposePersonRawThirdStepSecond); //21

  const purposePerson = sumDigitsYear(purposePersonFirst + purposePersonSecond); //21+21=42=6

  // const purposeSocialRaw =
  //   (fifteenthRune + seventeenthRune) + (sixteenthRune + eighteenthRune); // (4+20) + (10+5)
  const purposeSocialRawFirstStepFirst = fifteenthRune + seventeenthRune; // 4+20=24
  const purposeSocialFirstStepFirst = sumDigitsYear(
    purposeSocialRawFirstStepFirst
  ); //24
  const purposeSocialRawSecondStepFirst = sixteenthRune + eighteenthRune; // 10+5=15
  const purposeSocialSecondStepFirst = sumDigitsYear(
    purposeSocialRawSecondStepFirst
  ); //15
  const purposeSocialRawThirdStepFirst =
    purposeSocialFirstStepFirst + purposeSocialSecondStepFirst; // 24+15=39
  const purposeSocialFirst = sumDigitsYear(purposeSocialRawThirdStepFirst); //39=12

  const purposeSocialRawFirstStepSecond = fifteenthRune + seventeenthRune; // 4+20=24
  const purposeSocialFirstStepSecond = sumDigitsYear(
    purposeSocialRawFirstStepSecond
  ); //24
  const purposeSocialRawSecondStepSecond = sixteenthRune + eighteenthRune; // 10+5=15
  const purposeSocialSecondStepSecond = sumDigitsYear(
    purposeSocialRawSecondStepSecond
  ); //15
  const purposeSocialRawThirdStepSecond =
    purposeSocialFirstStepSecond + purposeSocialSecondStepSecond; // 24+15=39
  const purposeSocialSecond = sumDigitsYear(purposeSocialRawThirdStepSecond); //39=12
  const purposeSocial = sumDigitsYear(purposeSocialFirst + purposeSocialSecond); //12+12=24

  const purposeSpiritRawFirst = purposePerson + purposeSocial; // 6 + 24 = 30
  const purposeSpiritFirst = sumDigitsYear(purposeSpiritRawFirst); //30=3
  const purposeSpiritRawSecond = purposePerson + purposeSocial; // 6 + 24 = 30
  const purposeSpiritSecond = sumDigitsYear(purposeSpiritRawSecond); //30=3
  const purposeSpirit = sumDigitsYear(purposeSpiritFirst + purposeSpiritSecond); // 3+3=6

  const purposePlanetRawFirst = purposeSocial + purposeSpirit; // 24+6=30
  const purposePlanetFirst = sumDigitsYear(purposePlanetRawFirst); //30=3
  const purposePlanetRawSecond = purposeSocial + purposeSpirit; // 24+6=30
  const purposePlanetSecond = sumDigitsYear(purposePlanetRawSecond); //30=3
  const purposePlanet = sumDigitsYear(purposePlanetFirst + purposePlanetSecond); // 3+3=6

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
  const nameText = document.querySelector(".nameText");
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
  const purposeSecond = document.querySelector("#purposeSecond");
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
  nameText.textContent = "Матрица совместимости";
});
