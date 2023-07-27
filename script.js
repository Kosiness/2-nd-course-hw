function seasons() {
    let answerUser = Number(prompt("Введите номер месяца (от 1 до 12) и вы узнаете, к какому времени года он относится:"));

    if(answerUser == 12 || answerUser >= 1 && answerUser <=2) {
      alert("Зима");
    }
    else if (answerUser >=3 && answerUser <=5) {
      alert("Весна");
    }
    else if (answerUser >=6 && answerUser <=8) {
      alert("Лето");
    }
    else if (answerUser >= 9 && answerUser <= 11) {
      alert("Осень")
    }
    else {
      alert("Что то пошло не так!Введите подходящие значение и попробуйте снова!")
    }
}
seasons()
