var main = function() {
	$('div').on('click', function() {
        $(this).toggleClass('show-description');
    });
};

$(document).ready(main);