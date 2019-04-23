/* ==========================================================================
 *  Function: Calendar
 * ======================================================================= */
function fn_components_calendar(){
	if ($('.js-flatpickr-calendar').length){
		calendarDate = flatpickr(".js-flatpickr-calendar", {
			animate: false,
			dateFormat: "d/m/Y",
			disableMobile: "true",
			locale: "sk"
		});
	}
}
