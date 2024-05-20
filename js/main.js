

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 10, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 10, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 90,
            smartBackspace: false,
            loop: true
        });
    }



    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    $(document).ready(function() {
        // Function to toggle text and button text
        function toggleText() {
            $('#shortText, #longText').toggleClass('collapse');
            var buttonText = $('#readMoreBtn').text();
            $('#readMoreBtn').text(buttonText === 'Read more' ? 'Read less' : 'Read more');
        }
    
        // Toggle text and button text on button click
        $('#readMoreBtn').click(function() {
            toggleText();
        });
    });

     // audio controls
    document.addEventListener("DOMContentLoaded", function() {
        var audio = document.getElementById("audioPlayer");
        audio.volume = 0.3; // vol 30%
    });

     // photo controls
      
    
    document.addEventListener('DOMContentLoaded', () => {
        const photo = document.querySelector('.photo');

        photo.addEventListener('mouseover', () => {
            photo.style.animation = 'rotate360 1s forwards';
        });

        photo.addEventListener('mouseout', () => {
            setTimeout(() => {
                photo.style.animation = '';
                photo.style.transform = 'rotate(0deg)';
            }, 1000); 
        });
    });
