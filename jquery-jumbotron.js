// membuat efek fadeOut dan fadeIn secara bergantian dengan jquery ketika diklik pada class="jumbotron"
// dan membuat efek fadeOut dan fadeIn secara bergantian pada saat membuka/merefresh web My Portfolio.
$(document).ready(function () {
    $('.jumbotron').on('click', function () {
        $('#h1-1, #h1-2').fadeOut('slow');
        $('#h1-1, #h1-2').fadeIn('slow');
    });
    $('#h1-1, #h1-2').fadeOut('slow');
    $('#h1-1, #h1-2').fadeIn('slow');
});