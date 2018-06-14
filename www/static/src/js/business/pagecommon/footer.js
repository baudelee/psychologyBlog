/**
 * Created by Baude Lee.
 * 使用scroll事件来处理footer
 */
$(window).scroll(function() {
    if($(this).scrollTop() != 0) {
        $('#back-top').fadeIn();
    } else {
        $('#back-top').fadeOut();
    }
});
$("#back-top").on("click",function(){
    // 当点击跳转链接之后，返回页面顶部位置
    $("html,body").animate({scrollTop:"0"})
})