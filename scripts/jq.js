$(function() {
    $('#hello').click(function() {
        $('p').hide();
    });

    $('#loadresult').load('https://api.chucknorris.io/ a > img');
    $.get('https://api.chucknorris.io/jokes/random', function(data) {
        console.log(data.value);
    }, 'json').done(function() {
        console.log('great succes!');
    });
});