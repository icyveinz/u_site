$(function() {
    const nodes = '.right-green-reach-me-field-grid, .right-green-reach-me-field-grid__container, .right-green-reach-me-field-grid__container__header, .right-green-reach-me-field-grid__container__image, .right-green-reach-me-field-grid__container__llc-title';
    $(nodes).on({
        mouseenter : function() {
            $(this).css('cursor', 'pointer')
        },
        mouseleave : function() {
            $(this).css('cursor', 'auto')
        }
    });
    $(nodes).on('click', function() {
        window.open('https://walgreenlogistics.ru/', '_blank');
    })
})
