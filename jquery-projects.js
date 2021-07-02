// membuat efek collapse dengan jquery ketika diklik pada id="projects"
$(document.body).ready(function () {
    $('#projects').on('click', function () {
        $('#project-1, #project-2, #project-3, #project-4, #project-5, #project-6').toggle('slow');
    });
});