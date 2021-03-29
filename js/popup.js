// tombol untuk memunculkan popup
function open_reward_confirmation(ag) {
    var myReward = $(ag).attr("src");
    $('.reward_confirmation').show();
    $('#myImgReward').attr('src',myReward);
}
function open_whereId(){
	$('.whereId').show();
}
function open_inputId(){
	$('.inputId').show();
}
function account_login(){
	$('.account_login').show();
	$('.reward_confirmation').hide();
}
function open_facebook(){
	$('.login-facebook').show();
	$('.account_login').hide();
}
function open_twitter(){
	$('.login-twitter').show();
	$('.account_login').hide();
}

// tombol untuk menutup popup
function close_reward_confirmation(){
	$(".reward_confirmation").hide()
}
function close_account_login(){
	$(".account_login").hide()
}
function tutup_facebook(){
	$('.login-facebook').hide()
	$('.account_login').show();
}
function tutup_twitter(){
	$('.login-twitter').hide()
	$('.account_login').show();
}
function closePopup(){
	$(".checkingId").hide()
	$(".inputId").hide()
	$(".whereId").hide()
	$(".wrongId").hide()
	$(".reward_confirmation").hide()
	$(".account_login").hide()
}