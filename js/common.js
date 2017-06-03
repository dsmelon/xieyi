$("#navShrink").click(function(){
	$("#htmlTab").toggle();
})
//home页面
$("#hcontent li:even").addClass("even");
$("#hcontent li:odd").addClass("odd");

$("#hcontent li").hover(function(){
	$(this).find(".cLeft img").removeClass("gray");
	$(this).css({
		backgroundColor: "#cfdb00",
	})
	$(this).find(".cRight p:first-child").css({
		color: "#3c3c3c",
	})
	$(this).find(".cRight p:last-child").css({
		color: "#595757",
	})
},function(){
	$(this).find(".cLeft img").addClass("gray");
	$(this).css({
		backgroundColor: "#e1e1e1",
	})
	$(this).find(".cRight p:first-child").css({
		color: "#b4b4b4",
	})
	$(this).find(".cRight p:last-child").css({
		color: "#c2c2c2",
	})
})
// bim页面
$("#breTop").click(function(){
	$("#scrollScreen").css({
		transition: "all 1s",
		transform: "translate3d(0px, 0px, 0px)",
	})
})
//rend页面3d页面
$("#rreTop").click(function(){
	$("html,body").animate({
		scrollTop: 0,
	},500)
})
var _this;
$("#main .rcontent img").hover(function(){
	$(this).addClass("gray");
	_this=$(this);
	$("#imgSearch").height($(this).height()*0.8)
				   .width($(this).width()*0.8)
				   .css({
				   		left: $(this).offset().left+$(this).width()*0.1,
				   		top: $(this)[0].getBoundingClientRect().top+$(this).height()*0.1,
				   })
				   .show()
				   .hover(function(){
				   		_this.addClass("gray");
				   		$(this).show();
				   })
},function(){
	$(this).removeClass("gray");
	$("#imgSearch").hide();
})
$(window).on("scroll",function(){
	$("#imgSearch").hide();
	$("#main .ccontent img").removeClass("gray");
})
//3d页面
$("#main .vid").height($(this).width()/1.91);
$("#main .vid .vStart").css({
	top: ($("#main .vid").height()-$("#main .vid .vStart").height())/2,
	left: ($("#main .vid").width()-$("#main .vid .vStart").width())/2,
})
$(window).on("resize",function(){
	$("#main .vid").height($(this).width()/1.91);
	$("#main .vid .vStart").css({
		top: ($("#main .vid").height()-$("#main .vid .vStart").height())/2,
		left: ($("#main .vid").width()-$("#main .vid .vStart").width())/2,
	})
})
$("#main .vid .vStart").click(function(){
	$("#main embed").trigger("click");
	$(this).hide()
		   .siblings("div")
		   .hide();
})
$(".viceStart").click(function(){
	$(this).hide();
})

$(".dcontent li:even").addClass("even");
$(".dcontent li:odd").addClass("odd");

$("#main .dcontent video").hover(function(){
	$(this).addClass("bright");
},function(){
	$(this).removeClass("bright");
})