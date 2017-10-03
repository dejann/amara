// scroll

	$(document).ready(function() {
		$('#nav').onePageNav({
			easing: 'easeInOutCirc',
			scrollSpeed: 1800,
			filter: ':not(.other)',
			begin: function() {
				//Hack so you can click other menu items after the initial click
				$('body').append('<div id="device-dummy" style="height: 1px;"></div>');
			},
			end: function() {
				$('#device-dummy').remove();
			}
		});

		$('#selectnavi1').onePageNav({
			easing: 'easeInOutCirc',
			scrollSpeed: 1800,
			filter: ':not(.other)'
		});		
	});

// navigation

	$(document).ready(function(){
		selectnav('nav', {
			label: 'MENU'
		});
	});

//flexslider

	$(window).load(function() {

		$('#slider').flexslider({
			animation: 'fade',
			directionNav: false
		});

		$('#testimonilas-slider').flexslider({
			animation: 'slide',
			directionNav: false
		});
	});

// contact

	$(document).ready(function(){
		$("#ContactForm").submit(function(){
		$("#submitf").value='Please wait...';
		
		$.post("send.php?send=comments", $("#ContactForm").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$("#message_post").html("<div class='error-message'>ERROR: " + data.msg + "</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$("#message_post").html("<div class='success-message'>Your message has been sent successfully!</div>"); 
				$("#submitf").value='Send >>';
				}
		}, "json");
		
		return false;
		
		});
	});

// sequence

	$(document).ready(function(){
		var options = {
			pauseOnHover: false,
			nextButton: true,
			prevButton: true,
			pagination: true,
			animateStartingFrameIn: false,
			autoPlay: true,
			autoPlayDelay: 6000,
			preloader: false,
			preloadTheseFrames: [1]
		};
		
		var mySequence = $("#home").sequence(options).data("sequence");
	});

// twitter

	$(document).ready(function(){
		$(".tweet").tweet({
			modpath: 'js/twitter/',
			join_text: false,
			username: "dekystudio",
			count: 3,
			auto_join_text_default: " we said, ",
			auto_join_text_ed: " we ",
			auto_join_text_ing: " we were ",
			auto_join_text_reply: "",
			auto_join_text_url: " we were checking out ",
			loading_text: "loading tweets..."
		});
	});
	

// sticky

	$(document).ready(function(){
		$("#header").sticky({topSpacing:0});
	});

// colorbox

	$(document).ready(function(){
		$(".group1").colorbox({maxWidth:"95%", maxHeight:"95%", rel:'group1'});
		$(".video").colorbox({iframe:true, innerWidth:640, innerHeight:480, maxWidth:"95%", maxHeight:"95%"});
		$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});		
	});

	var resizeTimer;
		$(window).resize(function(){
			if (resizeTimer) clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
			if ($('#cboxOverlay').is(':visible')) {
				$.colorbox.load(true);
				}
			}, 300)
		});

// parallax

	$(document).ready(function(){
		if ($(window).width() > 1024) {
			$('#twitter').parallax("50%", 0.4);
			$('#testimonials').parallax("50%", 0.4);
			$('#quotes').parallax("50%", 0.4);
		}
	})