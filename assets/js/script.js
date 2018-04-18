// MENU ANIMATION
toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];
toggle_open_text = '&#8601;';
toggle_close_text = '&#8599;';

toggle.addEventListener('click', function() {
	nav.classList.toggle('open');
	$(".submenu, .spoiler-btn").css("position", "inherit");
	
	if (nav.classList.contains('open')) {
		toggle.innerHTML = toggle_close_text;
	} else {
		toggle.innerHTML = toggle_open_text;
		$(".submenu, .spoiler-btn").css("position", "relative");
	}
}, false);

setTimeout(function(){
	nav.classList.toggle('open');	
}, 150);

// MENU LINKS
$(".l5").click(function(){ window.location.href = "index.html"; });
$(".l4").click(function(){ window.location.href = "bio.html"; });
$(".l3").click(function(){ window.location.href = "photos.html"; });
$(".l2").click(function(){ window.location.href = "goodies.html"; });
$(".l1").click(function(){ window.location.href = "contact.html"; });



// PRESENTATION - TEXT DISPLAY
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



// BIO TEXT SPOILERS
$(".spoiler-btn").click(function(e){
    e.preventDefault()
    var foo=$(this).attr('href')
    $('#'+foo).slideToggle(500);
});



// CONTACT
var form = $('#contact'),
    submit = form.find('[name="submit"]');

form.on('submit', function(e) {
  e.preventDefault();
  
  // avoid spamming buttons
  if (submit.attr('value') !== 'Envoi')
    return;
  
  var valid = true;
  form.find('input, textarea').removeClass('invalid').each(function() {
    if (!this.value) {
      $(this).addClass('invalid');
      valid = false;
    }
  });
  
  if (!valid) {
    form.animate({left: '-3em'},  50)
        .animate({left:  '3em'}, 100)
        .animate({left:    '0'},  50);
  } else {
    submit.attr('value', 'En cours...')
          .css({boxShadow: '0 0 200em 200em rgba(225, 225, 225, 0.6)',
                backgroundColor: '#ccc'});
    // simulate AJAX response
    setTimeout(function() {
      // step 1: slide labels and inputs
      // when AJAX responds with success
      // no animation for AJAX failure yet
      form.find('label')
          .animate({opacity: '0'}, 500);
    }, 1000);
    setTimeout(function() {
      // step 2: show thank you message after step 1
      submit.attr('value', 'Envoyé !')
            .css({boxShadow: 'none'});
    }, 2000);
    setTimeout(function() {
      // step 3: reset
      form.find('input, textarea').val('');
      form.find('label')
          .css({left: '0'})
          .animate({opacity: '1'}, 500);
      submit.attr('value', 'Envoi')
            .css({backgroundColor: ''});
    }, 4000);
  }
});