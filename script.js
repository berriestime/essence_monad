const btn = document.querySelector("#btn");
const btnCompatibility = document.querySelector("#btnCompatibility");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const matrix = document.querySelector("#matrix");
  const calculationPersonDate = document.getElementById("persondate").value;
  const splitCalculationPersonDate = calculationPersonDate.split("-");
  const firstrune = sumDigitsYear(parseInt(splitCalculationPersonDate[2]));
  const secondrune = sumDigitsYear(parseInt(splitCalculationPersonDate[1]));
  const thirdrune = sumDigitsYear(parseInt(splitCalculationPersonDate[0]));
  const fourthrune = sumDigitsYear(firstrune + secondrune + thirdrune);
  const fifthrune = sumDigitsYear(
    firstrune + secondrune + thirdrune + fourthrune
  );
  const sixrune = sumDigitsYear(firstrune + fourthrune);
  const seventhrune = sumDigitsYear(secondrune + thirdrune);
  const eighthrune = sumDigitsYear(fifthrune + thirdrune);
  const ninethrune = sumDigitsYear(eighthrune + thirdrune);
  const tenrune = sumDigitsYear(fifthrune + fourthrune);
  const elevenrune = sumDigitsYear(tenrune + fourthrune);
  const twelverune = sumDigitsYear(eighthrune + tenrune);
  const thirteenthRune = sumDigitsYear(twelverune + eighthrune);
  const fourteenthRune = sumDigitsYear(twelverune + tenrune);
  const fifteenthRune = sumDigitsYear(firstrune + secondrune);
  const sixteenthRune = sumDigitsYear(secondrune + thirdrune);
  const seventeenthRune = sumDigitsYear(thirdrune + fourthrune);
  const eighteenthRune = sumDigitsYear(firstrune + fourthrune);
  const nineteenthRune = sumDigitsYear(fifteenthRune + sixteenthRune);
  const twentiethRune = sumDigitsYear(secondrune + nineteenthRune);
  const twentyFirstRune = sumDigitsYear(firstrune + fifthrune);
  const twentySecondRune = sumDigitsYear(firstrune + twentyFirstRune);
  const twentyThirdRune = sumDigitsYear(secondrune + fourthrune);
  const twentyFourthRune = sumDigitsYear(firstrune + thirdrune);
  const twentyFifthRune = sumDigitsYear(twentyThirdRune + twentyFourthRune);
  const purposePerson = sumDigitsYear(
    firstrune + thirdrune + (secondrune + fourthrune)
  );
  const purposeSocial = sumDigitsYear(
    fifteenthRune + seventeenthRune + (sixteenthRune + eighteenthRune)
  );
  const purposeSpirit = sumDigitsYear(purposePerson + purposeSocial);
  const purposePlanet = sumDigitsYear(purposeSocial + purposeSpirit);

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
  const purposeTable = document.querySelector("#purpose-table");

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
  purposeTable.style.display = "block";
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
  // 1
  const firstruneRawFirst = parseInt(splitCalculationPersonDateFirst[2]); // 01
  const firstruneFirst = sumDigitsYear(firstruneRawFirst); // 1
  const firstruneRawSecond = parseInt(splitCalculationPersonDateSecond[2]); // 01
  const firstruneSecond = sumDigitsYear(firstruneRawSecond); // 1
  const firstrune = sumDigitsYear(firstruneFirst + firstruneSecond); // 1 + 1 = 2

  // 1
  const secondruneRawFirst = parseInt(splitCalculationPersonDateFirst[1]); // 09
  const secondruneFirst = sumDigitsYear(secondruneRawFirst); // 9
  const secondruneRawSecond = parseInt(splitCalculationPersonDateSecond[1]); // 09
  const secondruneSecond = sumDigitsYear(secondruneRawSecond); // 9
  const secondrune = sumDigitsYear(secondruneFirst + secondruneSecond); // 9 + 9 = 18

  // 1
  const thirdruneRawFirst = parseInt(splitCalculationPersonDateFirst[0]); // 2023
  const thirdruneFirst = sumDigitsYear(thirdruneRawFirst); // 7
  const thirdruneRawSecond = parseInt(splitCalculationPersonDateSecond[0]); // 2023
  const thirdruneSecond = sumDigitsYear(thirdruneRawSecond); // 7
  const thirdrune = sumDigitsYear(thirdruneFirst + thirdruneSecond); // 7 + 7 = 14

  // 1
  const fourthruneRawFirst = firstrune + secondrune + thirdrune; // 2 + 18 + 14 = 34
  const fourthruneFirst = sumDigitsYear(fourthruneRawFirst); // 34 = 7
  const fourthruneRawSecond = firstrune + secondrune + thirdrune; // 2 + 18 + 14 = 34
  const fourthruneSecond = sumDigitsYear(fourthruneRawSecond); // 34 = 7
  const fourthrune = sumDigitsYear(fourthruneFirst + fourthruneSecond); // 7 + 7 = 14

  // 1
  const fifthruneRawFirst = firstrune + secondrune + thirdrune + fourthrune; // 14 + 14 = 28
  const fifthruneFirst = sumDigitsYear(fifthruneRawFirst); // 28 = 10
  const fifthruneRawSecond = firstrune + secondrune + thirdrune + fourthrune; // 14 + 14 = 28
  const fifthruneSecond = sumDigitsYear(fifthruneRawSecond); // 28 = 10
  const fifthrune = sumDigitsYear(fifthruneFirst + fifthruneSecond); // 10 + 10 = 20

  // const sixruneRawFirst = firstrune + fourthrune; // 2 + 14 = 16
  // const sixruneFirst = sumDigitsYear(sixruneRawFirst); // 16
  // const sixruneRawSecond = firstrune + fourthrune; // 2 + 14 = 16
  // const sixruneSecond = sumDigitsYear(sixruneRawSecond); // 16
  // const sixrune = sumDigitsYear(sixruneFirst + sixruneSecond); // 16 + 16 = 32 = 3+2=5

  // 2
  const sixrune = sumDigitsYear(firstrune + fourthrune); //

  // const seventhruneRawFirst = secondrune + thirdrune; // 18 + 14 = 32
  // const seventhruneFirst = sumDigitsYear(seventhruneRawFirst); // 32 = 5
  // const seventhruneRawSecond = secondrune + thirdrune; // 18 + 14 = 32
  // const seventhruneSecond = sumDigitsYear(seventhruneRawSecond); // 32 = 5
  // const seventhrune = sumDigitsYear(seventhruneFirst + seventhruneSecond); // 5 + 5 = 10

  // 2
  const seventhrune = sumDigitsYear(secondrune + thirdrune); //

  // const eighthruneRawFirst = fifthrune + thirdrune; // 20 + 14 = 34
  // const eighthruneFirst = sumDigitsYear(eighthruneRawFirst); // 34 = 7
  // const eighthruneRawSecond = fifthrune + thirdrune; // 20 + 14 = 34
  // const eighthruneSecond = sumDigitsYear(eighthruneRawSecond); // 34 = 7
  // const eighthrune = sumDigitsYear(eighthruneFirst + eighthruneSecond); // 7 + 7 = 14

  //2
  const eighthrune = sumDigitsYear(eighthruneFirst + eighthruneSecond); //

  // const ninethruneRawFirst = eighthrune + thirdrune; // 14 + 14 = 28
  // const ninethruneFirst = sumDigitsYear(ninethruneRawFirst); // 28 = 10
  // const ninethruneRawSecond = eighthrune + thirdrune; // 14 + 14 = 28
  // const ninethruneSecond = sumDigitsYear(ninethruneRawSecond); // 28 = 10
  // const ninethrune = sumDigitsYear(ninethruneFirst + ninethruneSecond); // 10 + 10 = 20

  //2
  const ninethrune = sumDigitsYear(eighthrune + thirdrune); //

  // const tenruneRawFirst = fifthrune + fourthrune; // 20 + 14 = 34
  // const tenruneFirst = sumDigitsYear(tenruneRawFirst); // 34=7
  // const tenruneRawSecond = fifthrune + fourthrune; // 20 + 14
  // const tenruneSecond = sumDigitsYear(tenruneRawSecond); //34=7
  // const tenrune = sumDigitsYear(tenruneFirst + tenruneSecond); // 7 + 7 = 14

  //2
  const tenrune = sumDigitsYear(fifthrune + fourthrune); //

  // const elevenruneRawFirst = tenrune + fourthrune; // 14 + 14 = 28
  // const elevenruneFirst = sumDigitsYear(elevenruneRawFirst); // 28 =10
  // const elevenruneRawSecond = tenrune + fourthrune; // 14 + 14 = 28
  // const elevenruneSecond = sumDigitsYear(elevenruneRawSecond); //28 =10
  // const elevenrune = sumDigitsYear(elevenruneFirst + elevenruneSecond); // 10+10=20

  //2
  const elevenrune = sumDigitsYear(fourthrune + tenrune); //

  // const twelveruneRawFirst = eighthrune + tenrune; //14+14=28
  // const twelveruneFirst = sumDigitsYear(twelveruneRawFirst); //28=10
  // const twelveruneRawSecond = eighthrune + tenrune; //14+14=28
  // const twelveruneSecond = sumDigitsYear(twelveruneRawSecond); //28=10
  // const twelverune = sumDigitsYear(twelveruneFirst + twelveruneSecond); //10+10=20

  //2
  const twelverune = sumDigitsYear(eighthrune + tenrune); //

  // const thirteenthRuneRawFirst = twelverune + eighthrune; // 20+14=34
  // const thirteenthRuneFirst = sumDigitsYear(thirteenthRuneRawFirst); // 34=7
  // const thirteenthRuneRawSecond = twelverune + eighthrune; // 20+14=34
  // const thirteenthRuneSecond = sumDigitsYear(thirteenthRuneRawSecond); // 34=7
  // const thirteenthRune = sumDigitsYear(
  //   thirteenthRuneFirst + thirteenthRuneSecond
  // ); // 7 + 7 = 14

  //2
  const thirteenthRune = sumDigitsYear(twelverune + eighthrune); //

  // const fourteenthRuneRawFirst = twelverune + tenrune; // 20+14=34
  // const fourteenthRuneFirst = sumDigitsYear(fourteenthRuneRawFirst); //34=7
  // const fourteenthRuneRawSecond = twelverune + tenrune; // 20+14=34
  // const fourteenthRuneSecond = sumDigitsYear(fourteenthRuneRawSecond); //34=7
  // const fourteenthRune = sumDigitsYear(
  //   fourteenthRuneFirst + fourteenthRuneSecond
  // ); // 7 + 7 = 14

  //2
  const fourteenthRune = sumDigitsYear(twelverune + tenrune); //

  // 1
  const fifteenthRuneRawFirst = firstrune + secondrune; // 2 + 18 = 20
  const fifteenthRuneFirst = sumDigitsYear(fifteenthRuneRawFirst); //20
  const fifteenthRuneRawSecond = firstrune + secondrune; // 2 + 18 = 20
  const fifteenthRuneSecond = sumDigitsYear(fifteenthRuneRawSecond); //20
  const fifteenthRune = sumDigitsYear(fifteenthRuneFirst + fifteenthRuneSecond); // 20+20=40=4

  // 1
  const sixteenthRuneRawFirst = secondrune + thirdrune; // 18+14=32
  const sixteenthRuneFirst = sumDigitsYear(sixteenthRuneRawFirst); //32=5
  const sixteenthRuneRawSecond = secondrune + thirdrune; // 18+14=32
  const sixteenthRuneSecond = sumDigitsYear(sixteenthRuneRawSecond); //32=5
  const sixteenthRune = sumDigitsYear(sixteenthRuneFirst + sixteenthRuneSecond); // 5+5=10

  // 1
  const seventeenthRuneRawFirst = thirdrune + fourthrune; //14+14=28
  const seventeenthRuneFirst = sumDigitsYear(seventeenthRuneRawFirst); //28=10
  const seventeenthRuneRawSecond = thirdrune + fourthrune; //14+14=28
  const seventeenthRuneSecond = sumDigitsYear(seventeenthRuneRawSecond); //28=10
  const seventeenthRune = sumDigitsYear(
    seventeenthRuneFirst + seventeenthRuneSecond
  ); //10+10=20

  // 1
  const eighteenthRuneRawFirst = firstrune + fourthrune; // 2+14=16
  const eighteenthRuneFirst = sumDigitsYear(eighteenthRuneRawFirst); // 16
  const eighteenthRuneRawSecond = firstrune + fourthrune; // 2+14=16
  const eighteenthRuneSecond = sumDigitsYear(eighteenthRuneRawSecond); // 16
  const eighteenthRune = sumDigitsYear(
    eighteenthRuneFirst + eighteenthRuneSecond
  ); // 16+16=32=5

  // const nineteenthRuneRawFirst = fifteenthRune + sixteenthRune; //4+10=14
  // const nineteenthRuneFirst = sumDigitsYear(nineteenthRuneRawFirst); // 14
  // const nineteenthRuneRawSecond = fifteenthRune + sixteenthRune; //4+10=14
  // const nineteenthRuneSecond = sumDigitsYear(nineteenthRuneRawSecond); // 14
  // const nineteenthRune = sumDigitsYear(
  //   nineteenthRuneFirst + nineteenthRuneSecond
  // ); //14+14=28=10

  // 2
  const nineteenthRune = sumDigitsYear(fifteenthRune + sixteenthRune); //

  // const twentiethRuneRawFirst = secondrune + nineteenthRune; // 18+10=28
  // const twentiethRuneFirst = sumDigitsYear(twentiethRuneRawFirst); // 28=10
  // const twentiethRuneRawSecond = secondrune + nineteenthRune; // 18+10=28
  // const twentiethRuneSecond = sumDigitsYear(twentiethRuneRawSecond); // 28=10
  // const twentiethRune = sumDigitsYear(twentiethRuneFirst + twentiethRuneSecond); //10+10=20

  // 2
  const twentiethRune = sumDigitsYear(secondrune + nineteenthRune); //

  // const twentyFirstRuneRawFirst = firstrune + fifthrune; // 2+20=22
  // const twentyFirstRuneFirst = sumDigitsYear(twentyFirstRuneRawFirst); // 22
  // const twentyFirstRuneRawSecond = firstrune + fifthrune; // 2+20=22
  // const twentyFirstRuneSecond = sumDigitsYear(twentyFirstRuneRawSecond); // 22
  // const twentyFirstRune = sumDigitsYear(
  //   twentyFirstRuneFirst + twentyFirstRuneSecond
  // ); //22+22=44=8

  //2
  const twentyFirstRune = sumDigitsYear(firstrune + fifteenthRune); //

  // const twentySecondRuneRawFirst = firstrune + twentyFirstRune; //2+8=10
  // const twentySecondRuneFirst = sumDigitsYear(twentySecondRuneRawFirst); //10
  // const twentySecondRuneRawSecond = firstrune + twentyFirstRune; //2+8=10
  // const twentySecondRuneSecond = sumDigitsYear(twentySecondRuneRawSecond); //10
  // const twentySecondRune = sumDigitsYear(
  //   twentySecondRuneFirst + twentySecondRuneSecond
  // ); //10+10=20

  // 2
  const twentySecondRune = sumDigitsYear(firstrune + twentyFirstRune); //

  // const twentyThirdRuneRawFirst = secondrune + fourthrune; // 18+14=32
  // const twentyThirdRuneFirst = sumDigitsYear(twentyThirdRuneRawFirst); //32=5
  // const twentyThirdRuneRawSecond = secondrune + fourthrune; // 18+14=32
  // const twentyThirdRuneSecond = sumDigitsYear(twentyThirdRuneRawSecond); //32=5
  // const twentyThirdRune = sumDigitsYear(
  //   twentyThirdRuneFirst + twentyThirdRuneSecond
  // ); //5+5=10

  // 2
  const twentyThirdRune = sumDigitsYear(secondrune + fourthrune); //

  // const twentyFourthRuneRawFirst = firstrune + thirdrune; // 2+14=16
  // const twentyFourthRuneFirst = sumDigitsYear(twentyFourthRuneRawFirst); // 16
  // const twentyFourthRuneRawSecond = firstrune + thirdrune; // 2+14=16
  // const twentyFourthRuneSecond = sumDigitsYear(twentyFourthRuneRawSecond); // 16
  // const twentyFourthRune = sumDigitsYear(
  //   twentyFourthRuneFirst + twentyFourthRuneSecond
  // ); // 16+16=32=5

  // 2
  const twentyFourthRune = sumDigitsYear(firstrune + thirdrune); //

  // const twentyFifthRuneRawFirst = twentyThirdRune + twentyFourthRune; // 10+5=15
  // const twentyFifthRuneFirst = sumDigitsYear(twentyFifthRuneRawFirst); //15
  // const twentyFifthRuneRawSecond = twentyThirdRune + twentyFourthRune; // 10+5=15
  // const twentyFifthRuneSecond = sumDigitsYear(twentyFifthRuneRawSecond); //15
  // const twentyFifthRune = sumDigitsYear(
  //   twentyFifthRuneFirst + twentyFifthRuneSecond
  // ); //15+15=30=3

  // 2
  const twentyFifthRune = sumDigitsYear(twentyThirdRune + twentyFourthRune); //

  // const purposePersonRawFirst = (firstrune + thirdrune) + (secondrune + fourteenthRune); //
  const purposePersonRawFirstStepFirst = firstrune + thirdrune; //
  // const purposePersonFirstStepFirst = sumDigitsYear(
  //   purposePersonRawFirstStepFirst
  // ); //
  const purposePersonRawSecondStepFirst = secondrune + fourthrune; //
  // const purposePersonSecondStepFirst = sumDigitsYear(
  //   purposePersonRawSecondStepFirst
  // ); //
  // const purposePersonRawThirdStepFirst =
  // purposePersonRawFirstStepFirst + purposePersonRawSecondStepFirst; //
  // // const purposePersonFirst = sumDigitsYear(purposePersonRawThirdStepFirst); //

  const purposePerson = sumDigitsYear(
    purposePersonRawFirstStepFirst + purposePersonRawSecondStepFirst
  ); //

  // const purposeSocialRaw =
  //   (fifteenthRune + seventeenthRune) + (sixteenthRune + eighteenthRune); // (4+20) + (10+5)
  const purposeSocialRawFirstStepFirst = fifteenthRune + seventeenthRune; //
  // const purposeSocialFirstStepFirst = sumDigitsYear(
  //   purposeSocialRawFirstStepFirst
  // ); //24
  const purposeSocialRawSecondStepFirst = sixteenthRune + eighteenthRune; //
  // const purposeSocialSecondStepFirst = sumDigitsYear(
  //   purposeSocialRawSecondStepFirst
  // ); //15
  // const purposeSocialRawThirdStepFirst =
  //   purposeSocialFirstStepFirst + purposeSocialSecondStepFirst; // 24+15=39
  // const purposeSocialFirst = sumDigitsYear(purposeSocialRawThirdStepFirst); //39=12

  const purposeSocial = sumDigitsYear(
    purposeSocialRawFirstStepFirst + purposeSocialRawSecondStepFirst
  ); //

  // const purposeSpiritRawFirst = purposePerson + purposeSocial; // 6 + 24 = 30
  // const purposeSpiritFirst = sumDigitsYear(purposeSpiritRawFirst); //30=3
  // const purposeSpiritRawSecond = purposePerson + purposeSocial; // 6 + 24 = 30
  // const purposeSpiritSecond = sumDigitsYear(purposeSpiritRawSecond); //30=3
  const purposeSpirit = sumDigitsYear(purposePerson + purposeSocial); //

  // const purposePlanetRawFirst = purposeSocial + purposeSpirit; // 24+6=30
  // const purposePlanetFirst = sumDigitsYear(purposePlanetRawFirst); //30=3
  // const purposePlanetRawSecond = purposeSocial + purposeSpirit; // 24+6=30
  // const purposePlanetSecond = sumDigitsYear(purposePlanetRawSecond); //30=3
  const purposePlanet = sumDigitsYear(purposeSocial + purposeSpirit); // 3+3=6

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
  const purposeTable = document.querySelector("#purpose-table");
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
  purposeTable.style.display = "block";
});
