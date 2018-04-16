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



// PRESENTATION TEXT DISPLAY
$(".submenu").on("click", "#textcomics-btn", function(){
	$("#textcomics").show(400);
	$("#textfilms").hide(300);
	$("#textgames").hide(300);
});

$(".submenu").on("click", "#textfilms-btn", function(){
	$("#textcomics").hide(300);
	$("#textfilms").show(400);
	$("#textgames").hide(300);
});

$(".submenu").on("click", "#textgames-btn", function(){
	$("#textcomics").hide(300);
	$("#textfilms").hide(300);
	$("#textgames").show(400);
});