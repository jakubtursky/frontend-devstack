//====================================================
//  Function: Accordion
//====================================================
function componentAccordion() {
	if ($(".js-accordion-group").length) {
		$(".js-accordion-trigger").click(function() {
			var inst = $(this);
			var thisItem = inst.closest(".js-accordion-item");
			var content = ".js-accordion-content";
			var accordionBlock = inst.closest(".js-accordion-group");

			if (thisItem.hasClass(classActive)) {
				thisItem.toggleClass(classActive);
			} else {
				accordionBlock.find(".js-accordion-item." + classActive + "").removeClass(classActive);
				inst.closest(".js-accordion-item").addClass(classActive);
			}
			return false;
		});
	}

	// var accordionBlock = document.querySelector('.js-accordion-group');
 //    var accordionTrigger = document.querySelectorAll('.js-accordion-trigger');

 //    if (accordionBlock){
 //    	for (const trigger of accordionTrigger) {
	//         trigger.addEventListener("click", function(){
	//             var inst = trigger;
	//             var thisItem = trigger.closest( '.js-accordion-item' );
	//             var thisBlock = trigger.closest( '.js-accordion-group' );
	//             var activeItem;

	//             if (thisItem.classList.contains('is-active')) {
	//                 thisItem.classList.toggle("is-active");
	//             } else {
	//                 activeItem = thisBlock.querySelectorAll( '.js-accordion-item.is-active' );
	// 	            if (activeItem.length > 0){
	// 	                for (const item of activeItem) {
	// 	                    item.classList.remove( 'is-active' );
	// 	                }
	// 	            }
	//                 inst.closest( '.js-accordion-item' ).classList.add( 'is-active' );
	//             }
	//             return false;
	//         });
	//     }
 //    }
}
