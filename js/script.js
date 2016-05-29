var scrollToSection = function(section_id) {
    $("html, body").animate({
        scrollTop: $(section_id).offset().top
    });
};
