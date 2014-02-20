
$('document').ready(function() {
    $('button#clean').live('click', function() {
        localStorage['history'] = "";
        RefreshHistory();
    });
    $('button#valid').live('click', function() {
        $.post("http://raspberrypi/newspaper/index.php",
                {command: "message", argument: $('#value').val()},
        function(data) {
            if (localStorage['history'].indexOf($('#value').val()) == -1) {
                localStorage['history'] += (localStorage['history'].length > 0 ? ',' : '') + $('#value').val();
            }
            $('#value').val("");
            RefreshHistory();
        });
    }
    );
    RefreshHistory();
    $('select').live('change', function() {
        $('#value').val($(this).val());
    });
});
function RefreshHistory() {
    $('select').empty();
    $.each(localStorage['history'].split(','), function(pos, value) {
        $('select').append('<option value="' + value + '">' + value + '</option>');
    });
}