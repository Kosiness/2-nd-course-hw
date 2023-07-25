function seasons() {
    let answerUser = Number(prompt("Введите номер месяца (от 1 до 12) и вы узнаете, к какому времени года он относится:"));

    if(isNaN(answerUser) || answerUser===""|| answerUser<1 || answerUser>12) {
        alert("Что-то пошло не так!Введите корректное значение.");

    }switch(answerUser) {
        case 1:
      case 2:
      case 12:
        alert(`Зима`);
        break;
      case 3:
      case 4:
      case 5:
        alert(`Весна`);
        break;
      case 6:
      case 7:
      case 8:
        alert(`Лето`);
        break;
      case 9:
      case 10:
      case 11:
        alert(`Осень`);
        break;
      default:
        break;
    }
    
}

