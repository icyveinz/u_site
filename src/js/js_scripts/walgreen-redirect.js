$(function() {
    $('.right-green-reach-me-field-grid, .right-green-reach-me-field-grid__container, .right-green-reach-me-field-grid__container__header, .right-green-reach-me-field-grid__container__image, .right-green-reach-me-field-grid__container__llc-title').on({
        mouseenter : function() {
            $(this).css('cursor', 'pointer')
        },
        mouseleave : function() {
            $(this).css('cursor', 'auto')
        }
    });
    $('.right-green-reach-me-field-grid, .right-green-reach-me-field-grid__container, .right-green-reach-me-field-grid__container__header, .right-green-reach-me-field-grid__container__image, .right-green-reach-me-field-grid__container__llc-title').on('click')
})