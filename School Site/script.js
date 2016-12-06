$(document).ready(function(){
	$('.map').hide();
	
	$('.showMap').click(function(){
		$('.map').slideToggle(600);
	});
  

    
});

    /*Modal Control*/
   $(window).on('load',function(){
        setTimeout(function(){
            $('.myModal').modal('show');
        }, 1200);
   });
    