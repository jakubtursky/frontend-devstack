//====================================================
//  Function: Load more content
//====================================================
function componentAjaxLoad(){
	if ($( '.js-load-more-content' ).length){
		$( '.js-load-more-content' ).bind('click', function(){
			var loadMoreBlock = $(this).closest( '.js-load-more-block' );
			var loadContent = $(this).data('content');
			$.ajax({
				url: 'js/data/' + loadContent + '.html',
				data: 'html',
				beforeSend:function(){
					loadMoreBlock.find( '.js-load-more' ).addClass( class_disabled );
					loadMoreBlock.find( '.js-load-more .loading-post' ).addClass( classActive );
				},
				success:function(data){
					setTimeout(function(){ 
						loadMoreBlock.find( '.js-load-more-grid' ).append(data);
						loadMoreBlock.find( '.js-load-more' ).removeClass( class_disabled )
						loadMoreBlock.find( '.js-load-more .loading-post' ).removeClass( classActive );
						
						partDots();
						if ($( '.js-gallery' ).length){
							// gallery.destroy(true);
							componentGallery();
						}
						
						loadMoreBlock.addClass( class_last );
					}, 2000);
				},
				error:function(){
					console.log( 'error' );
				}
			});
		});
	}
}

// .load-more-block.js-load-more-block
// 		.js-load-more-grid
// 		.js-load-more.load-more
//			.load-more-content.js-load-more-content(data-content="portfolio") Další reference
//			.loading-post.loading-spinner