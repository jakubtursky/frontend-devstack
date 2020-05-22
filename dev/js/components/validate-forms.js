//====================================================
//  Function: Validate forms
//====================================================

function componentValidateForms(){
	
	// Newsletter submit
	if ($( '#form-validation' ).length){
		var formValidate = $( '#form-validation' );

		formValidate.parsley().on( 'form:submit' , function(){
			formatFormResult(formValidate);

			return false;
		});
	}

	window.Parsley.on('field:error', function() {
		$(this.$element).closest('.js-field-validation').addClass('has-field-error');
		$(this.$element).closest('.js-field-validation').removeClass('has-field-success');
	});

	window.Parsley.on('field:success', function() {
		$(this.$element).closest('.js-field-validation').removeClass('has-field-error');
		$(this.$element).closest('.js-field-validation').addClass('has-field-success');
	});
	

	function formatFormResult(form){

		var unindexed_array = form.serializeArray();
		var indexed_array = {};

		$.map(unindexed_array, function(n, i){
			indexed_array[n['name']] = n['value'];
		});
		console.log("Format 1: ");
		console.log(form.serialize());
		console.log('\n');
		
		console.log("Format 2: ");
		console.log(form.serializeArray());
		console.log('\n');

		console.log("Format 3: ");
		console.log(indexed_array);
		console.log('\n');

		alert("Check console");
	}
}
