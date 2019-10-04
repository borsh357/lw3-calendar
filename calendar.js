var calendarThemeSelector = document.getElementById("calendar-theme-selector");
calendarThemeSelector.onchange = function() {
  var themeSelectorValue = calendarThemeSelector.value;
  if (themeSelectorValue == "Dark") {
    document.getElementsByClassName('calendar')[0].classList.add('calendar-dark');
  } else {
    document.getElementsByClassName('calendar')[0].classList.remove('calendar-dark');
  }
}