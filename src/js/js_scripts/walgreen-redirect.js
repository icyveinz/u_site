$(function() {
    const nodes = '.right-green-reach-me-field-grid';
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
