//dom渲染完事件
$(function(){
    //左导航组件逻辑
    var left_nav = $(".left-fix-full");
    left_nav.css("left","-1.8rem");
    $(".header").find(".nav-btn").click(function(){
        left_nav.animate({left:"0"},400);
    })
    left_nav.find(".close").click(function(){
        left_nav.animate({left:"-1.8rem"},400);
    });
    //点击空白处关闭导航----框架区点击无效
    $('html,body').click(function(e){
        if(e.target.id.indexOf("nav_bar")==-1 && e.target.id.indexOf("nav_btn")==-1){
            left_nav.animate({left:"-1.8rem"},400);
        }
    });
    //导航，框架切换逻辑
    $(".nav-item").click(function(){
        var aLink = $(this).find("a");
        $(this).parent().find("a").removeClass("active");
        aLink.addClass("active");
        $("#myiframe").attr("src",aLink.attr("data-href"));
    })
    
    
})
//框架高度

    
    
　
