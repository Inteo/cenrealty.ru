$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip(); 
	$(".switcher__btn").click(function(){
		$(this).closest(".switcher__control").find(".switcher__btn").removeClass("active");
		$(this).addClass("active");
		var holder = $(this).closest(".switcher").find(".switcher__holder");
		holder.removeClass("switcher__holder_active");
		holder.filter('[data-switch-hold='+$(this).data("switch-btn")+']').addClass("switcher__holder_active");
		return false;
	});
	$(".modal-inline").fancybox({
    type: 'inline',
    fixed: true,
 		width       : '100%',
		height      : '100%',
		minWidth: "100%",
		minHeight: "100%",
	});	
	$(".header__search").click(function() {
		$(this).addClass("header__search_active");
	});
	$(document).click(function(e) {
		var target = $(e.target);
		if(target.is(".header__search") || target.parents(".header__search").length) return;
		$(".header__search").removeClass("header__search_active");
	});
	$(".goods__fav").click(function(){
		$(this).toggleClass("goods__fav_active");
		return false;
	});
	$(".input.valid").unbind().blur( function(){
    var id = $(this).attr('id');
    var val = $(this).val();
    switch(id)
    {
      case "email":
        var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        if(val != '' && rv_email.test(val))
        {
          $(this).addClass('input_success');
        }
        else
        {
          $(this).removeClass('input_success').addClass('input_error');
        }
      break;  
      case "name":
      case "company":
        var rv_name = /^[a-zA-Zа-яА-Я]+$/;
        if(val.length > 2 && val != '' && rv_name.test(val))
        {
          $(this).addClass('input_success');
        }
        else
        {
          $(this).removeClass('input_success').addClass('input_error');
        }
      break;   
      case "phone":
        var rv_phone = /^\d+$/;
        if(val.length > 5 && rv_phone.test(val) && val != '')
        {
           $(this).addClass('input_success');
        }
        else
        {
          $(this).removeClass('input_success').addClass('input_error');
        }
      break;      
    } 
  }); 
	$(".goods__row").each(function(){
		var heights = $(this).find(".goods__item").map(function ()
    	{
        return $(this).height();
    	}).get(),
    	maxHeight = Math.max.apply(null, heights);
    	$(this).find(".goods__item").each(function(){
    		var h = maxHeight - $(this).height();
    		var address = $(this).find(".goods__address");
    		address.height(address.height() + h);
    	});
    	$(this).find(".goods-order").outerHeight(maxHeight);
	});
	$(".news").each(function(){
		var heights = $(this).find(".news__text").map(function ()
    	{
        return $(this).height();
    	}).get(),
    	maxHeight = Math.max.apply(null, heights);
    	$(this).find(".news__text").height(maxHeight);
	});
	

});
