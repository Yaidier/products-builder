jQuery(document).ready(function($){

    $('.wn_pb_selector_button').on('click', function(){

        var current_section = $(this).closest('.wn_pb_section');
        var next_section = $(this).closest('.wn_pb_section').next();

        // console.log(current_section);
       

        $('.wn_pb_selector_button').removeClass('wn_pb_selector_button__active');
        $(this).addClass('wn_pb_selector_button__active');

        move_to_next_section(current_section, next_section);

    });

    function move_to_next_section(current_section, next_section) {

        //Removing scroll-snap-align property to get a smooth transition
        $('.wn_pb_container > section').css('scroll-snap-align', 'unset');

        console.log('current_section ', $(current_section).offset().top);
        console.log('next_section ', $(next_section).offset().top);

        // var current_section_scroll_pos = $(current_section).offset().top;
        
        var offset = $(next_section).offset().top + $(current_section).offset().top;

        console.log(offset);

        $(".wn_pb_container").animate(
            {

              scrollTop: offset

            },

            800, //speed

            function() {

                //Restoring scroll-snap-align property
                $('.wn_pb_container > section').css('scroll-snap-align', 'start');

            } 
            
        );
    }
    

});