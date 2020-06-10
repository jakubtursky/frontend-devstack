//====================================================
//  Function: Calendar
//====================================================
function componentCalendar() {
  if ($('.js-flatpickr-calendar-date').length) {
    var calendarDate = flatpickr('.js-flatpickr-calendar-date', {
      animate: false,
      dateFormat: 'd/m/Y',
      disableMobile: 'true',
      locale: 'sk',
    })
  }

  if ($('.js-flatpickr-calendar-time').length) {
    var calendarTime = flatpickr('.js-flatpickr-calendar-time', {
      animate: false,
      disableMobile: 'true',
      locale: 'sk',
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
    })
  }
}
