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


const seasonsSecond = () => {
  const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  newFruit = fruits.map(el =>' '+ el);
  newFruit.sort(()=>Math.random()-0.5);
  alert(`Запомни слова: ${newFruit}`);

  const userAnswerFirst = ' ' + prompt( `Какое было первое слово?`);
  const userAnswerSecond = ' ' + prompt(`Какое было последнее слово?`);

  if(userAnswerFirst.toLowerCase()===newFruit[0].toLowerCase() && userAnswerSecond.toLowerCase()===newFruit[6].toLowerCase()) {
    alert("Поздравляю,у тебя прекрасная память!!! ")
  }
  else if(userAnswerFirst.toLowerCase()===newFruit[0].toLowerCase() && userAnswerSecond.toLowerCase()===newFruit[6].toLowerCase()) {
    alert("Вы близки к победе!!!")
  }
  else {
  alert("Эх,не верно!Давай попробуем еще раз!!!")
  }
}
seasonsSecond()