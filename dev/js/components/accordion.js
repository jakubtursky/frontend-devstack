//====================================================
//  Function: Accordion
//====================================================
function componentAccordion() {
  if ($('.js-accordion-group').length) {
    $('.js-accordion-trigger').click(function () {
      var inst = $(this)
      var thisAccordionItem = inst.closest('.js-accordion-item')
      var accordionBlock = inst.closest('.js-accordion-group')

      if (thisAccordionItem.hasClass(classIsActive)) {
        thisAccordionItem.toggleClass(classIsActive)
      } else {
        accordionBlock
          .find('.js-accordion-item.' + classIsActive + '')
          .removeClass(classIsActive)
        inst.closest('.js-accordion-item').addClass(classIsActive)
      }
      return false
    })
  }

  // var accordionBlock = document.querySelector('.js-accordion-group');
  //    var accordionTrigger = document.querySelectorAll('.js-accordion-trigger');

  //    if (accordionBlock){
  //    	for (const trigger of accordionTrigger) {
  //         trigger.addEventListener("click", function(){
  //             var inst = trigger;
  //             var thisAccordionItem = trigger.closest( '.js-accordion-item' );
  //             var thisBlock = trigger.closest( '.js-accordion-group' );
  //             var activeItem;

  //             if (thisAccordionItem.classList.contains('is-active')) {
  //                 thisAccordionItem.classList.toggle("is-active");
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
