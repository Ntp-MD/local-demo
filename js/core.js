$(document).ready(function () {
    $(document).on('click', function (e) {
        if ($(e.target).closest('#nav-toggle').length) {
            $('#nav-toggle').toggleClass('open');
        } else {
            $('#nav-toggle').removeClass('open');
        }
    });
});