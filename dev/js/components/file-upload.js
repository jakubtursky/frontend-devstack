//====================================================
//  Function: file upload
//====================================================
function componentFileUpload() {
  if ($('.js-file-upload-trigger').length) {
    ;(function ($, window, document, undefined) {
      $('.js-file-upload-trigger').each(function () {
        var $input = $(this),
          $label = $input.next('label'),
          labelVal = $label.html()

        $input.on('change', function (e) {
          var fileName, fileType, fileSize
          if (this.files) {
            fileName = this.files[0].name
            fileType = this.files[0].name.split('.').pop()
            fileSize = this.files[0].size
          }
          if (fileName) {
            $(this)
              .closest('.js-file-upload-block')
              .find('.js-file-upload-output')
              .html(
                '<span class="js-remove-block">' +
                  fileName +
                  '<span class="js-remove-file file-upload-remove"></span></span>',
              )
          } else {
            $(this).html(labelVal)
          }
          callbackUploadedFile($(this))
        })

        // Firefox bug fix
        $input
          .on('focus', function () {
            $input.addClass('has-focus')
          })
          .on('blur', function () {
            $input.removeClass('has-focus')
          })
      })
    })(jQuery, window, document)

    $(document).on('click', '.js-remove-file', function () {
      var fileInput = $(this).closest('.js-file-upload-block').find('input')
      $(this).closest('.js-remove-block').remove()
      fileInput.val('')
      callBackRemoveFile(fileInput)
    })
  }

  function callbackUploadedFile(thisInput) {
    console.log('callBack Upload File')
    console.log(thisInput)
  }

  function callBackRemoveFile(thisInput) {
    console.log('callBack Remove File')
    console.log(thisInput)
  }
}
