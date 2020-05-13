 $(document).ready(function() {
            $('#mycarousel').carousel({ interval: 2000});
            $('#carouselbutton').click(function() {
                if($('#carouselbutton').children('span').hasClass('fa-pause')) {
                   $('#mycarousel').carousel('pause');
                   $('#carouselbutton').children('span').removeClass('fa-pause');
                   $('#carouselbutton').children('span').addClass('fa-play');  
                }
                else  {
                   $('#mycarousel').carousel('cycle');
                   $('#carouselbutton').children('span').removeClass('fa-play');
                   $('#carouselbutton').children('span').addClass('fa-pause');  
                }

            });
           
        });
  $(document).ready(function() {
            $('#reservebutton').click(function() {
               $('#reserving').modal("show");
            });
         });
    $(document).ready(function() {
            $('#login').click(function() {
               $('#loginmodal').modal('toggle');
            });
         });
        