// MENU ANIMATION
toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];
toggle_open_text = '&#8601;';
toggle_close_text = '&#8599;';

toggle.addEventListener('click', function() {
	nav.classList.toggle('open');
	$(".submenu").css("position", "inherit");
	
  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
    $(".submenu").css("position", "relative");
  }
}, false);

setTimeout(function(){
	nav.classList.toggle('open');	
}, 150);


// MENU LINKS
$(".l5").click(function(){
	window.location.href = "index.html";
});

$(".l4").click(function(){
	window.location.href = "bio.html";
});

$(".l3").click(function(){
	window.location.href = "photos.html";
});

$(".l2").click(function(){
	window.location.href = "goodies.html";
});

$(".l1").click(function(){
	window.location.href = "contact.html";
});



// PRESENTATION TEXT DISPLAY
$(".submenu").on("click", "#textcomics-btn", function(){
	$("#textcomics").show(400);
	$("#textfilms, #textgames").hide(300);
});

$(".submenu").on("click", "#textfilms-btn", function(){
	$("#textfilms").show(400);
	$("#textcomics, #textgames").hide(300);
});

$(".submenu").on("click", "#textgames-btn", function(){
	$("#textgames").show(400);
	$("#textcomics, #textfilms").hide(300);
});