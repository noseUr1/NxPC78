$(function()
{
    // $('lottie-player').on('ready', function()
    // {
    //     var player = this;
    //     var $player = $(player);

    //     $player.addClass('is-visible');

    //     var started = false;

    //     function startLogoAnim()
    //     {
    //         if (started) {
    //             return;
    //         }
    //         started = true;
    //         player.play();
    //     }

    //     $player.one('transitionend webkitTransitionEnd', function(e)
    //     {
    //         if (e.originalEvent.propertyName !== 'opacity') {
    //             return;
    //         }
    //         startLogoAnim();
    //     });

    //     setTimeout(startLogoAnim, 700);
    // });

    $('lottie-player').on('ready', function() {
        $(this).addClass('fadeIn');
        $('.scrollarea.ready').addClass('fadeIn');
    });

    $('lottie-player').on('complete', function() {
        $('.innerarea').removeClass('d-none');
        $(window).trigger('scroll');
        $('.ready').removeClass('blink');
        $('.ready').addClass('fadeOut');
        $('.ready').addClass('d-none');
        setTimeout(function() {
            $('.scroll').addClass('fadeIn');
        }, 1500);
        return;
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

        $('.video').has('.pc_only').each(function()
        {
            var $this = $(this);

            if(innerarea && !$('.innerarea').hasClass('d-none') && bottom > 0 && top < wh){

                if ($this.hasClass('prev')) {
                    $this.removeClass('fadeIn');
                    $this.addClass('fadeOut');
                    $('.scroll').removeClass('fadeIn');
                    $('.scroll').addClass('fadeOut');
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
                    if (!$('.innerarea').hasClass('d-none')) {
                        $('.scroll').removeClass('fadeOut');
                        $('.scroll').addClass('fadeIn');
                    }
                }
                else if ($this.hasClass('next')) {
                    $this.removeClass('fadeIn');
                    $this.addClass('fadeOut');
                }
            }

        });

    });


});
