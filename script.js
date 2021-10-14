const huiswerkMaken = function (vak, callback) {
  console.log('Ok, ok ik ga nu mijn [${vak}] huiswerk maken')
  callback();
  
}

const klaarMetHuiswerk = function() {
  console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
}

huiswerkMaken('wiskunde', klaarMetHuiswerk);

