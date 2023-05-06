$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
  $(".btn-show").click(function () {
    $(".heading").show(1000);
  });
  $(".btn-hide").click(function () {
    $(".heading").hide(1000);
  });
  $(".toggle").click(function () {
    $(".heading").toggle(1000);
  });
  $(".dbl-click").dblclick(function () {
    $(".heading").toggle();
  });
  $(".name").change(function () {
    $(".alert").show();
  });
  $(".clickToBig").click(function () {
    $(".red-box").animate(
      {
        width: "300px",
        height: "300px",
      },
      1000
    );
  });
  $(".clickToSmall").click(function () {
    $(".red-box").animate(
      {
        width: "100px",
        height: "100px",
        marginLeft: "0px",
      },
      1000
    );
  });

  // PRODUCT TABS
  $('.product-image-item').hide()
  $('.product-image-item:first').show()

  $('#options li a:not(:first)').addClass('inactive')
  $('#options li a').click(function(){
    const n = $(this).attr('id')
    if($(this).hasClass('inactive')){
      $('#options li a').addClass('inactive')
      $(this).removeClass('inactive')

      $('.product-image-item').hide()
      $('#' + n + 'image').fadeIn(1000)
    }
  })

});
