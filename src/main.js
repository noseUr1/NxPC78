$(function()
{
    $('#firstView .video').each(function()
    {
        var $layer = $(this);
        var isActive = false;

        if ($layer.hasClass('prev') && !$layer.hasClass('fadeOut')) {
            isActive = true;
        }
        if ($layer.hasClass('next') && $layer.hasClass('fadeIn')) {
            isActive = true;
        }

        $layer.find('video:visible').each(function()
        {
            this.muted = true;

            if (isActive) {
                if (this.preload === 'none') {
                    this.preload = 'auto';
                    this.load();
                }
                this.play();
            }
            else {
                this.pause();
            }
        });
    });

    $('#firstView video').on('canplay', function()
    {
        var $layer = $(this).closest('.video');
        var isActive = false;

        if ($layer.hasClass('prev') && !$layer.hasClass('fadeOut')) {
            isActive = true;
        }
        if ($layer.hasClass('next') && $layer.hasClass('fadeIn')) {
            isActive = true;
        }

        if (isActive) {
            this.muted = true;
            this.play();
        }
    });

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

        $('#firstView .video').each(function()
        {
            var $layer = $(this);
            var isActive = false;

            if ($layer.hasClass('prev') && !$layer.hasClass('fadeOut')) {
                isActive = true;
            }
            if ($layer.hasClass('next') && $layer.hasClass('fadeIn')) {
                isActive = true;
            }

            $layer.find('video:visible').each(function()
            {
                this.muted = true;

                if (isActive) {
                    if (this.preload === 'none') {
                        this.preload = 'auto';
                        this.load();
                    }
                    this.play();
                }
                else {
                    this.pause();
                }
            });
        });

    });
});
