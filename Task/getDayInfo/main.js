function getDayInfo(date) {
    var month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    var weekDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    var weekNumber;

    date = date.split('.').reverse(); 
    var dateNew = new Date(date);
    
    var day = dateNew.getDate();
    var monthInd = dateNew.getMonth();
    var i = dateNew.getDay();
    
    function week() {
        if (day <= 7) {
          weekNumber = 1;
        } else if (day <= 14) {
          weekNumber = 2;
        } else if (day <= 21) {
          weekNumber = 3;
        } else {
          weekNumber = 4;
        }
    }
    week(day)

    console.log(weekDay[i-1] + ', ' + weekNumber + ' неделя' + ' ' + month[monthInd] + ' ' + date[0] + ' года')
    
  }

  
  getDayInfo('02.03.2022')