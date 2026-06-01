$(function()
{
    $('lottie-player').on('complete', function() {
        $('.innerarea').removeClass('d-none');
        $(window).trigger('scroll');
    });

    $(window).on('scroll', function()
    {
        var innerarea = $('#main .innerarea')[0];
        var top = 0;
        var bottom = 0;
        var wh = $(window).height();

        if (innerarea && !$('.innerarea').hasClass('d-none')) {
            var rect = innerarea.getBoundingClientRect();
            top = rect.top;
            bottom = rect.bottom;
        }

        $('.video').each(function()
        {
            var $this = $(this);

            if(innerarea && !$('.innerarea').hasClass('d-none') && bottom > 0 && top < wh){

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
