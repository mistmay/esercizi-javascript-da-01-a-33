function canPlay() {
  let personName = 'Paul';

  personName += ' plays football';

  console.log(personName);
}

canPlay();

/* fix-notes: personName was initialized inside an if block, so it could not work inside canPlay().
In order to fix it, I deleted the if block in order that personName is initialized in the main block of the function canPlay*/