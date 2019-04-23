//====================================================
//  Function: Gallery
//====================================================
function fn_components_gallery(){
	if ($( '.js-gallery' ).length){
		$( '.js-gallery' ).lightGallery({
			selector: '.js-gallery-item',
			hash: false
		})
	}
}