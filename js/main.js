    $(document).ready(function() {
    // 1. Smooth scroll for anchor links
        $('a[href^="#"]').on('click', function(e) {
            var target = $($(this).attr('href'));
            if(target.length) {
            e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 60
                }, 600);
            }
        });

        // 2. Fade in .project cards on scroll
        function revealProjects() {
            $('.project').each(function() {
                var top_of_element = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if (bottom_of_window > top_of_element + 50) {
                    $(this).animate({'opacity':'1'}, 700);
                }
            });
        }
        $('.project').css('opacity', 0);
        $(window).on('scroll', revealProjects);
        revealProjects();

         // Typing effect for #Divine p
    var $typingP = $('#divine-typing');
    var fullText = $typingP.text();
    $typingP.empty().css('opacity', 1);

    var cursor = $('<span class="typing-cursor"></span>');
    $typingP.append(cursor);

    var hasTyped = false;


    function typeText(i) {
        if (i <= fullText.length) {
            $typingP.contents().first().replaceWith(fullText.substring(0, i));
            $typingP.append(cursor);
            setTimeout(function() { typeText(i + 1); }, 18); // speed
        } else {
            cursor.remove();
        }
    }

     $(window).on('scroll', function() {
        if (!hasTyped && isDivineVisible()) {
            hasTyped = true;
            typeText(0);
        }
    });

    // Start typing immediately
    typeText(0);


        // Highlight cards on hover

        $('.project').hover(
            function() { $(this).css('transform', 'scale(1.05)'); },
            function() { $(this).css('transform', 'scale(1)'); }
        );

        $('.skill').hover(
            function() { $(this).css('transform', 'scale(1.05)'); },
            function() { $(this).css('transform', 'scale(1)'); }
        );

        $('.job').hover(
            function() { $(this).css('transform', 'scale(1.05)'); },
            function() { $(this).css('transform', 'scale(1)'); }
        );

         $('.school').hover(
            function() { $(this).css('transform', 'scale(1.05)'); },
            function() { $(this).css('transform', 'scale(1)'); }
        );
        $('.versailles-glass').hover(
            function() { $(this).css('transform', 'scale(1.05)'); },
            function() { $(this).css('transform', 'scale(1)'); }
        );
    });
