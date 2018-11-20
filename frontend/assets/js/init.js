// initialize material objects
$(document).ready(function(){
    $('.dropdown-trigger').dropdown();
});

// define credential toast
$('#credentials').click(e => {
    e.preventDefault();
    M.toast({
        html: '<b>Created by:<br />Frie Preu<br />Jan Dix</b>'
    });
});

// define logout toast
$('#logout').click(e => {
    e.preventDefault();
    M.toast({
        html: '<b>Your computer will shut down in <span id="timer">5</span>s.</b>'
    });
    var i = 4;
    setInterval(() => {
        $('#timer').text(i);
        i--;
    }, 1000)
});

