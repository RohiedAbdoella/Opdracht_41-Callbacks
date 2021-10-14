function huiswerkMaken (vak, callback) {
   setTimeout (() => {
     console.log('Ok, ok ik ga nu mijn ' + vak  + ' huiswerk maken')
    callback();
  }, 3000);
}

const klaarMetHuiswerk = function() {
  console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
}

huiswerkMaken('wiskunde', klaarMetHuiswerk);

