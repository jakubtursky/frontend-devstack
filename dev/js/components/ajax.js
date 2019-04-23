/* ==========================================================================
 *  Function: Ajax load
 * ======================================================================= */
function fn_components_ajaxLoad(){
    if ($( '.js-load-more-content' ).length){
        $( '.js-load-more-content' ).bind('click', function(){
            var thisGrid = $(this).closest( '.js-load-more-block' );
            var thisContent = $(this).data('content');
            $.ajax({
                url: 'js/data/' + thisContent + '.html',
                data: 'html',
                beforeSend:function(){
                    thisGrid.find( '.js-load-more' ).addClass( class_disabled );
                    thisGrid.find( '.js-load-more .loading-post' ).addClass( class_active );
                },
                success:function(data){
                    setTimeout(function(){ 
                        thisGrid.find( '.js-load-more-grid' ).append(data);
                        thisGrid.find( '.js-load-more' ).removeClass( class_disabled )
                        thisGrid.find( '.js-load-more .loading-post' ).removeClass( class_active );
                        fn_parts_dots();
                        if ($( '.js-gallery' ).length){
                            $( '.js-gallery' ).lightGallery().destroy(true);
                            fn_components_gallery();
                        }
                        thisGrid.addClass( class_last );
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