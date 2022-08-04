const getSleepHours = day => {
    switch (day) {
      case "segunda":
        return 10
        break;
      case "terça":
        return 10
        break;
      case "quarta":
        return 10
        break;
      case "quinta":
        return 10
        break;
      case "sexta":
        return 10
        break;
      case "sabado":
        return 10
        break;
      case "domingo":
        return 10
        break;
  
      default:
        return "Error";
    }
  };
  
  const getActualSleepHours = () => 
      getSleepHours("segunda") +
      getSleepHours("terça") +
      getSleepHours("quarta") +
      getSleepHours("quinta") +
      getSleepHours("sexta") +
      getSleepHours("sabado") +
      getSleepHours("domingo");
     
    console.log(getSleepHours("sabado"));
    console.log(getActualSleepHours());
  
  
  const getIdealSleepHours = () => {
      const idealHours = 8
      return idealHours * 7;
    };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const calc = actualSleepHours - idealSleepHours
  
  
    if (actualSleepHours === idealSleepHours) {
      return console.log(`Seu horario de sono é ${calc}. Parabéns, a quantidade do seu sono está ótima!`
      );
    } else if (actualSleepHours > idealSleepHours) {
      return console.log(
        `Seu horario de sono é ${calc}. Você está excedendo o necessário de sono ideal`
      );
    } else if (actualSleepHours < idealSleepHours) {
      return console.log(
        `Seu horario de sono é ${calc}. Você deve descansar mais`
      );
    } else {
      console.log("error");
    }
  };
  
  calculateSleepDebt();
  
  