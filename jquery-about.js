// membuat efek collapse dengan jquery ketika diklik pada id="tommy"
$(document.body).ready(function () {
    $('#tommy').on('click', function () {
        $('#profile, #educations, #about-desc, #educations-desc1, #educations-desc2').toggle('slow');
    });

    // membuat efek collapse dengan jquery ketika diklik pada id="profile"
    $('#profile').on('click', function () {
        $('#about-desc').toggle('slow');
    });

    // membuat efek collapse dengan jquery ketika diklik pada id="educations"
    $('#educations').on('click', function () {
        $('#educations-desc1').toggle('slow');
        $('#educations-desc2').toggle('slow');
    });
});