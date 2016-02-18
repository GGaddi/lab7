'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$("button").click(likeClick);
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}

function likeClick(e) { 
	ga("send", "event", 'like', 'click');
}