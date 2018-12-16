window.onload = setTimeout(function() {
	if (confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please')) {
		var url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // i know where to redirect the user
		//window.location.href = url; // if i want the user to leave my wonderful page
		window.open(url,'_blank'); // if i want my website stay but open the xxx link aside
	}
}, 
10000 /* wait 10 seconds before asking user. maybe he'll have time to read this amazing page */);

function togglePsychedelic() {
	var css = 'psychedelic'; // set the css class i'll use to set or unset the psychedelic mode
	document.body.className = document.body.className == css ? '' : css; // test if body has the class or not, to set or unset.
}