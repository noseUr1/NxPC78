$(function()
{
    $('lottie-player').on('complete', function() {
        $('.innerarea').removeClass('d-none');
    });

    $(window).on('scroll', function()
    {
        var offset = $('#main .innerarea').offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        $('.video').each(function()
        {
            var $this = $(this);

            if(scrollPos > offset - wh - 100){

                if ($this.hasClass('prev')) {
                    $this.removeClass('fadeIn');
                    $this.addClass('fadeOut');
                }
                else if ($this.hasClass('next')) {
                    $this.removeClass('fadeOut');
                    $this.addClass('fadeIn');
                }

            }
            else {

                if ($this.hasClass('prev')) {
                    $this.removeClass('fadeOut');
                    $this.addClass('fadeIn');
                }
                else if ($this.hasClass('next')) {
                    $this.removeClass('fadeIn');
                    $this.addClass('fadeOut');
                }
            }

        });

    });
});
