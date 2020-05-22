//====================================================
//  Function: Textarea resize
//====================================================
function componentTextareaResize(){
	if ($('textarea[data-autoresize]').length){
		autosize($('textarea[data-autoresize]'));
	}
}
