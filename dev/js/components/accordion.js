//====================================================
//  Function: Accordion
//====================================================
function fn_components_accordion() {
	if ($(".js-accordion-group").length) {
		$(".js-accordion-trigger").click(function() {
			var inst = $(this);
			var thisItem = inst.closest(".js-accordion-item");
			var content = ".js-accordion-content";
			var accordionBlock = inst.closest(".js-accordion-group");

			if (thisItem.hasClass(class_active)) {
				thisItem.toggleClass(class_active);
			} else {
				accordionBlock
					.find(".js-accordion-item." + class_active + "")
					.removeClass(class_active);
				inst.closest(".js-accordion-item").addClass(class_active);
			}
			return false;
		});
	}
}
