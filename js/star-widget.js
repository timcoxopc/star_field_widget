/**
 * @file
 * Javascript for Star Widget.
 */

/**
 * Provides a Star widget.
 */
(function ($) {

  Drupal.behaviors.star_field_widget = {
      attach: function (context, settings) {

        var starsHTML ='<span class="star-toggler star1" rating="1"><img src="http://diyi.dev-box.com.au/themes/diyi/images/star.png" width="25px" height="25px" /></span><span class="star-toggler star2" rating="2"><img src="http://diyi.dev-box.com.au/themes/diyi/images/star.png" width="25px" height="25px" /></span><span class="star-toggler star3" rating="3"><img src="http://diyi.dev-box.com.au/themes/diyi/images/star.png" width="25px" height="25px" /></span><span class="star-toggler star4" rating="4"><img src="http://diyi.dev-box.com.au/themes/diyi/images/star.png" width="25px" height="25px" /></span><span class="star-toggler star5" rating="5"><img src="http://diyi.dev-box.com.au/themes/diyi/images/star.png" width="25px" height="25px" /></span>';
        $('.field-stars', context).html(starsHTML);

        setStars($('.edit-field-stars')[0].value);

        $('.star-toggler').click(function() {
            console.log('Rating: ', $(this).attr('rating'));
            var rating = Number($(this).attr('rating'));
            setStars(rating);
        });
        
        function setStars(stars)
        {
            for(i = 1; i <= 5; i++){
                if(i <= stars) {
                    $('.star' + i).html('<img src="http://diyi.dev-box.com.au/themes/diyi/images/star.png" width="25px" height="25px" />');
                }
                else {
                    $('.star' + i).html('<img src="http://diyi.dev-box.com.au/themes/diyi/images/star-invalid.png" width="25px" height="25px" />');
                }
            }
            
            $('.edit-field-stars')[0].value = stars;
            //$(this).parent().children('.edit-field-stars')[0].value = i;
        }
    }
  };
})(jQuery);
