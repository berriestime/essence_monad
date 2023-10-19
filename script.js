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

  const setElemTextContent = (selector, value) => {
    const elem = document.querySelector(selector);
    elem.textContent = value;
  };

  setElemTextContent("#personpnt", firstrune);

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
  const firstruneFirst = sumDigitsYear(
    parseInt(splitCalculationPersonDateFirst[2])
  );
  const firstruneSecond = sumDigitsYear(
    parseInt(splitCalculationPersonDateSecond[2])
  );
  const firstrune = sumDigitsYear(firstruneFirst + firstruneSecond);
  const secondruneFirst = sumDigitsYear(
    parseInt(splitCalculationPersonDateFirst[1])
  );
  const secondruneSecond = sumDigitsYear(
    parseInt(splitCalculationPersonDateSecond[1])
  );
  const secondrune = sumDigitsYear(secondruneFirst + secondruneSecond);
  const thirdruneFirst = sumDigitsYear(
    parseInt(splitCalculationPersonDateFirst[0])
  );
  const thirdruneSecond = sumDigitsYear(
    parseInt(splitCalculationPersonDateSecond[0])
  );
  const thirdrune = sumDigitsYear(thirdruneFirst + thirdruneSecond);
  const fourthruneFirst = sumDigitsYear(
    firstruneFirst + secondruneFirst + thirdruneFirst
  );
  const fourthruneSecond = sumDigitsYear(
    firstruneSecond + secondruneSecond + thirdruneSecond
  );
  const fourthrune = sumDigitsYear(fourthruneFirst + fourthruneSecond);
  const fifthruneFirst = sumDigitsYear(
    firstruneFirst + secondruneFirst + thirdruneFirst + fourthruneFirst
  );
  const fifthruneSecond = sumDigitsYear(
    firstruneSecond + secondruneSecond + thirdruneSecond + fourthruneSecond
  );
  const fifthrune = sumDigitsYear(fifthruneFirst + fifthruneSecond);
  const sixrune = sumDigitsYear(firstrune + fourthrune);
  const seventhrune = sumDigitsYear(secondrune + thirdrune);
  const eighthrune = sumDigitsYear(fifthrune + thirdrune);
  const ninethrune = sumDigitsYear(eighthrune + thirdrune);
  const tenrune = sumDigitsYear(fifthrune + fourthrune);
  const elevenrune = sumDigitsYear(fourthrune + tenrune);
  const twelverune = sumDigitsYear(eighthrune + tenrune);
  const thirteenthRune = sumDigitsYear(twelverune + eighthrune);
  const fourteenthRune = sumDigitsYear(twelverune + tenrune);
  const fifteenthRuneFirst = sumDigitsYear(firstruneFirst + secondruneFirst);
  const fifteenthRuneSecond = sumDigitsYear(firstruneSecond + secondruneSecond);
  const fifteenthRune = sumDigitsYear(fifteenthRuneFirst + fifteenthRuneSecond);
  const sixteenthRuneFirst = sumDigitsYear(secondruneFirst + thirdruneFirst);
  const sixteenthRuneSecond = sumDigitsYear(secondruneSecond + thirdruneSecond);
  const sixteenthRune = sumDigitsYear(sixteenthRuneFirst + sixteenthRuneSecond);
  const seventeenthRuneFirst = sumDigitsYear(thirdruneFirst + fourthruneFirst);
  const seventeenthRuneSecond = sumDigitsYear(
    thirdruneSecond + fourthruneSecond
  );
  const seventeenthRune = sumDigitsYear(
    seventeenthRuneFirst + seventeenthRuneSecond
  );
  const eighteenthRuneFirst = sumDigitsYear(firstruneFirst + fourthruneFirst);
  const eighteenthRuneSecond = sumDigitsYear(
    firstruneSecond + fourthruneSecond
  );
  const eighteenthRune = sumDigitsYear(
    eighteenthRuneFirst + eighteenthRuneSecond
  );
  const nineteenthRune = sumDigitsYear(fifteenthRune + sixteenthRune);
  const twentiethRune = sumDigitsYear(secondrune + nineteenthRune);
  const twentyFirstRune = sumDigitsYear(firstrune + fifthrune);
  const twentySecondRune = sumDigitsYear(firstrune + twentyFirstRune);
  const twentyThirdRune = sumDigitsYear(secondrune + fourthrune);
  const twentyFourthRune = sumDigitsYear(firstrune + thirdrune);
  const twentyFifthRune = sumDigitsYear(twentyThirdRune + twentyFourthRune);
  const purposePersonRawFirstStepFirst = firstrune + thirdrune;
  const purposePersonRawSecondStepFirst = secondrune + fourthrune;
  const purposePerson = sumDigitsYear(
    purposePersonRawFirstStepFirst + purposePersonRawSecondStepFirst
  );
  const purposeSocialRawFirstStepFirst = fifteenthRune + seventeenthRune;
  const purposeSocialRawSecondStepFirst = sixteenthRune + eighteenthRune;
  const purposeSocial = sumDigitsYear(
    purposeSocialRawFirstStepFirst + purposeSocialRawSecondStepFirst
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
