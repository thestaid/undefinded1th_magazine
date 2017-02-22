  4// // smoothScroll START
// var js_smoothHeight=$(".js-smooth").innerHeight();
//
// $(".js-smooth a").smoothScroll({
// 	offset : -js_smoothHeight,
// 	speed : 1000,
// 	afterScroll: function(){
// 		$(this).parent().addClass("active").siblings().removeClass("active");
// 			}
// 	});
// // smoothScroll END

// 기본형 styleLowRank START
$("#styleBtn").click(function(){
	$("#styleLowRank").addClass("styleLowRankActive");
	smoothFunction(this);
});
$("#eventBtn").click(function(){
	$("#styleLowRank").removeClass("styleLowRankActive");
	smoothFunction(this);
});
$("#contactBtn").click(function(){
	$("#styleLowRank").removeClass("styleLowRankActive");
	smoothFunction(this);
});
// 반응형인 경우
$("#menuLowRank_StyleBtn").click(function(){
	// $("#styleLowRank").addClass("styleLowRankActive");
	smoothFunction(this);
});
$("#menuLowRank_EventBtn").click(function(){
	// $("#styleLowRank").removeClass("styleLowRankActive");
	smoothFunction(this);
});
$("#menuLowRank_ContactBtn").click(function(){
	// $("#styleLowRank").removeClass("styleLowRankActive");
	smoothFunction(this);
});
// styleLowRank END

function smoothFunction(thisObj){
	// Make sure this.hash has a value before overriding default behavior
	if (thisObj.hash !== "") {

		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = thisObj.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		//   window.location.hash = hash;
		});

	} // End if

}
//수정
// MENUBTN START
$("#top-menu-icon").click(function(){
	$("#menuLowRank").toggleClass("menuLowRankActive");
	$("#styleLowRank").removeClass("styleLowRankActive");
	$("#styleMenuLowRank").removeClass("styleMenuLowRankActive");
});
// MENUBTN START

// styleLowRank START

$("#menuLowRank_StyleBtn").click(function(){
	$("#styleMenuLowRank").addClass("styleMenuLowRankActive");
});
$("#menuLowRank_EventBtn").click(function(){
	$("#styleMenuLowRank").removeClass("styleMenuLowRankActive");
});
$("#menuLowRank_ContactBtn").click(function(){
	$("#styleMenuLowRank").removeClass("styleMenuLowRankActive");
});
// styleLowRank END

// 로그인 에러
$(document).ready(function() {
	$("#emailError").hide();
	$("#pwdError").hide();
});
$("#popup-login-btn").click(function() {

	if($("#email").val() === "") {
		$("#emailError").show();
	}else if ($("#email").val() !== ""){
		$("#emailError").hide();
	}

	if($("#pwd").val() === ""){
		$("#pwdError").show();
		// $(this).attr("data-dismiss", "");
	}else if($("#pwd").val() !== "") {
		$("#pwdError").hide();
	}

	if($("#email").val() !== "" && $("#pwd").val() !== ""){
		$(this).attr("data-dismiss", "modal");
		$("#email").val("");
		$("#pwd").val("");
	}
});
