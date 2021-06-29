//slide-btns
$(document).on('click', '.first-btn,.second-btn', function() {
    $(this).addClass('active-btn').siblings().removeClass('active-btn')
});
//text-slide
$(document).on('click', '.first-btn', function() {
    $('.text-container1').addClass('active-text-slide').siblings('.text-container2').removeClass('active-text-slide')
});
$(document).on('click', '.second-btn', function() {
    $('.text-container2').addClass('active-text-slide').siblings('.text-container1').removeClass('active-text-slide')
});

//for img slide
$(document).on('click', '.first-btn', function() {
    $('.img-container1').addClass('active-img-slide').siblings('.img-container2').removeClass('active-img-slide')
});
$(document).on('click', '.second-btn', function() {
    $('.img-container2').addClass('active-img-slide').siblings('.img-container1').removeClass('active-img-slide')
});