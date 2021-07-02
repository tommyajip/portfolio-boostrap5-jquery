// membuat efek hide sebagai default untuk menyembunyikan form isian
// kemudian form isian akan muncul dengan efek slideDown ketika class sebelumnya diisikan tulisan (keyup)
$(document).ready(function () {
    $('#email').hide();
    $('#subject').hide();
    $('#message').hide();
    $('#send').hide();

    $('#name').keyup(function () {
        $('#email').slideDown('slow');
    });

    $('#email').keyup(function () {
        $('#subject').slideDown('slow');
    });

    $('#subject').keyup(function () {
        $('#message').slideDown('slow');
    });

    $('#message').keyup(function () {
        $('#send').slideDown('slow');
    });
});