function canPlay() {
  let personName;
  if (true) {
    personName = 'Paul';
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();

/* fix-notes: personName was initialized inside an if block, so it could not work inside canPlay().
In order to fix it, I initialized personName outside the if block */