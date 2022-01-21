var ww = $(window).width();
//导航下拉菜单
$("header .menu ul li").mouseenter(function() {
	$(this).find(".nav_bg").show()
	$(this).find(".down_list").fadeIn(300)

	var width = $(this).find(".down_list").outerWidth()
	var margin_fl = width / 2 - 60;
	// console.log(width)
	$(this).find(".down_list").css({
		"left": -margin_fl
	})
})
// $(".menu ul li").mouseenter(function() {
// 	$(this).find(".nav1").fadeOut()
// 	$(this).find(".nav2").fadeIn()
// })
$("header .menu ul li").mouseleave(function() {
	$(this).find(".down_list").hide()
	$(this).find(".nav_bg").hide()
})
$("#dl-menu-button").click(function() {
	$(this).hide()
	$(".dl-menuwrapper").fadeIn()
	// alert("111")
	$("#dl-menu-button2").fadeIn()
	// $(".opp").addClass("open")
	$("#dl-menu-button").removeClass("opp")
	$('header').css({
		"background": "#fff"
	});
	$('.menu').addClass('menu_2');
	// $('header').css({
	// 	"background": "#fff"
	// })
	$('.logo').css("display", "none")
	$('.logo2').css("display", "block")
})
$("#dl-menu-button2").click(function() {
	$(this).hide()
	$(".dl-menuwrapper").fadeOut()
	$("#dl-menu-button").fadeIn()
	var sTop = $(window).scrollTop();
	if (sTop > 10) {
		$("#dl-menu-button").addClass("open")
		$("#dl-menu-button").removeClass("opp")
		// console.log("585")
		$('.logo').css("display", "none")
		$('.logo2').css("display", "block")
	} else {
		$("#dl-menu-button").addClass("opp")
		$('header').css({
			"background": "none"
		})
		$('.logo').css("display", "block")
		$('.logo2').css("display", "none")
		// $('header').removeClass('header_fixed');
	}
	$("#dl-menu-button").addClass("open")
})
// if (ww > 1024) {
// 	$(document).ready(function() {
// 		// $(window).scroll(function() {
// 		//判断置顶
// 		var sTop = $(window).scrollTop();
// 		if (sTop > 10) {
// 			$("#dl-menu").addClass("dl-menuwrapper2")
// 			$('header').addClass('header_fixed');
// 			$('.menu').addClass('menu_2');
// 			$('.logo').css({
// 				"display": "none"
// 			})
// 			$('.logo2').css({
// 				"display": "block"
// 			})
// 			$("#dl-menu-button").addClass("open")
// 			$("#dl-menu-button").removeClass("opp")
// 			// $('.language').addClass('language_2');
// 		} else {

// 			$("#dl-menu").removeClass("dl-menuwrapper2")
// 			$('header').removeClass('header_fixed');
// 			$('.menu').removeClass('menu_2');
// 			$("#dl-menu-button").removeClass("open")
// 			$("#dl-menu-button").addClass("opp")

// 		}
// 	});
// } else {
// 	$(document).ready(function() {
// 		// $(window).scroll(function() {
// 		//判断置顶
// 		var sTop = $(window).scrollTop();
// 		if (sTop > 10) {
// 			$("#dl-menu").addClass("dl-menuwrapper2")
// 			$('header').addClass('header_fixed');
// 			$('.menu').addClass('menu_2');
// 			$('.logo').css({
// 				"display": "none"
// 			})
// 			$('.logo2').css({
// 				"display": "block"
// 			})
// 			$("#dl-menu-button").addClass("open")
// 			$("#dl-menu-button").removeClass("opp")
// 			// $('.language').addClass('language_2');
// 		} else {

// 			$('header').css({
// 				"background": "none"
// 			})
// 			$('.logo').css({
// 				"display": "block"
// 			})
// 			$('.logo2').css({
// 				"display": "none"
// 			})

// 			$("#dl-menu").removeClass("dl-menuwrapper2")
// 			$('header').removeClass('header_fixed');
// 			$('.menu').removeClass('menu_2');
// 			$("#dl-menu-button").removeClass("open")
// 			$("#dl-menu-button").addClass("opp")

// 		}
// 	});
// }
// $(document).scroll(function() {
// 	//判断置顶
// 	var sTop = $(window).scrollTop();
// 	if (sTop > 10) {
// 		$("#dl-menu").addClass("dl-menuwrapper2")
// 		// $('header').addClass('header_fixed');
// 		$('.menu').addClass('menu_2');
// 		// $('.logo').css({"display":"none"})
// 		// // $('header').css({"background":"#fff"})
// 		// $('.logo2').css({"display":"block"})
// 		$("#dl-menu-button").addClass("open")
// 		$("#dl-menu-button").removeClass("opp")
// 		$('.logo').addClass("none")
// 		$('.logo2').addClass("block")
// 		// $('.language').addClass('language_2');
// 		// if (ww < 1024) {
// 		// 	$('header').css({
// 		// 		"background": "#fff"
// 		// 	})

// 		// }
// 	} else {
// 		console.log("111")
// 		// $('header').css({"background":"none"})
// 		// $('header').removeClass('header_fixed');
// 		$('.menu').removeClass('menu_2');
// 		// $('.logo').css({"display":"block"})
// 		// $('.logo2').css({"display":"none"})
// 		$("#dl-menu").removeClass("dl-menuwrapper2")
// 		$("#dl-menu-button").removeClass("open")
// 		$("#dl-menu-button").addClass("opp")
// 		$('.logo').addClass("none")
// 		$('.logo2').addClass("block")
// 		if (ww < 1024) {
// 			$('header').css({
// 				"background": "none"
// 			})
// 			// $('.logo').css({"display":"block"})
// 			// $('.logo2').css({"display":"none"})
// 		} else {

// 		}
// 		// $('.language').removeClass('language');
// 	}

// });
$(window).scroll(function() {
	if (ww < 1024) {
		//判断置顶
		var sTop = $(window).scrollTop();
		if (sTop > 10) {
			$("#dl-menu").addClass("dl-menuwrapper2")
			// $('header').addClass('header_fixed');
			$('.menu').addClass('menu_2');
			$('.logo').css({
				"display": "none"
			})
			$('header').css({
				"background": "#fff"
			})
			$('.logo2').css({
				"display": "block"
			})
			$("#dl-menu-button").addClass("open")
			$("#dl-menu-button").removeClass("opp")
			$('.logo').addClass("none")
			$('.logo2').addClass("block")
			// $('.language').addClass('language_2');
			// if (ww < 1024) {
			// 	$('header').css({
			// 		"background": "#fff"
			// 	})

			// }
		} else {
			// console.log("111")
			$('header').css({
				"background": "none"
			})
			$('header').removeClass('header_fixed');
			$('.menu').removeClass('menu_2');
			$('.logo').css({
				"display": "block"
			})
			$('.logo2').css({
				"display": "none"
			})
			$("#dl-menu").removeClass("dl-menuwrapper2")
			$("#dl-menu-button").removeClass("open")
			$("#dl-menu-button").addClass("opp")
			$('.logo2').addClass("none")
			$('.logo').addClass("block")
			// console.log("9898")
			$('header').mouseover(function() {
				// alert('鼠标在div上');
				$('.logo').addClass("none")
				$('.logo2').addClass("block")
			});
			$('header').mouseleave(function() {
				// alert('鼠标不在div上');
				if ($('.logo2').css("display") == "block") {
					if ($('header').css("background") == "none") {
						$('.logo2').addClass("none")
						$('.logo').addClass("block")
					} else {
						$('.logo').addClass("none")
						$('.logo2').addClass("block")
					}
					// alert("111")

				} else {
					$('.logo2').addClass("none")
					$('.logo').addClass("block")
				}


			});

		}
	}


});

// $("#open-button").click(function(){
// 	$(".dl-menuwrapper").fadeIn()
// 	$(".dl-menuwrapper .dl-menu").css({"opacity":"1"})
// })


//导航
$(document).on("mousewheel DOMMouseScroll", function(e) {
	if (ww > 768) {
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
			(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox

		var sTop = $(window).scrollTop();
		if (delta > 0) {
			// 向上滚
			$("header").addClass("header_fixed")
			$("header").css({
				"top": "0"
			})
			$(".logo2").addClass("block")
			$(".logo").addClass("none")
			$(".menu").addClass("menu_2")
			//console.log("wheelup");

		} else if (delta < 0) {
			// 向下滚
			//console.log("wheeldown");
			$(".logo2").removeClass("block")
			$(".logo").removeClass("none")

			$("header").css({
				"top": "-80px"
			})
			$("header").removeClass("header_fixed")
		}
		if (sTop > 0) {

		} else {
			$("header").removeClass("header_fixed")
			$(".menu").removeClass("menu_2")
		}
	}

});
if (ww > 1024) {
	window.addEventListener("scroll", () => {
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		let offsetTop = document.querySelector('.nav_nei').offsetTop;
		if (scrollTop > offsetTop) {
			document.querySelector('.nav_nei').style.position = "fixed";
			document.querySelector('.nav_nei').style.top = "0";
			document.querySelector('.nav_nei').style.background = "#fafafa";
			document.querySelector('.nav_nei').style.width = "100%";
		} else {
			document.querySelector('.nav_nei').style.position = "relative";
			document.querySelector('.nav_nei').style.top = "0";
		}
	})
}

//轮播图
var swiper1 = new Swiper('.banner .swiper-container', {
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},
	loop: true,
	speed: 1500,
	pagination: {
		el: '.banner .swiper-pagination',
		clickable: true,
	},
});
//研发服务切换
var thumbsSwiper = new Swiper('.indexDiv1 #thumbs', {
	spaceBetween: 0,
	slidesPerView: 5,
	speed: 1000,
	watchSlidesVisibility: true, //防止不可点击
	breakpoints: {
		//当宽度大于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度大于等于480
		480: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度大于等于640
		768: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	},
})
var gallerySwiper = new Swiper('.indexDiv1 #gallery', {
	spaceBetween: 0,
	loop: true,
	runCallbacks: false,
	speed: 1000,
	effect: "fade",
	thumbs: {
		swiper: thumbsSwiper,
	},
	pagination: {
		el: '.indexDiv1 .swiper-pagination',
		clickable: true,
	},
})
$(".indexDiv1 #thumbs .swiper-slide").hover(function(e) {
		// 取到绑定在indexP-swiper-items上的data-index
		// console.log(e.currentTarget.dataset.index);
		let indexTo = e.currentTarget.dataset.index;
		// 然后调用swiper的mySwiper.slideTo(index, speed, runCallbacks)
		gallerySwiper.slideTo(indexTo, 1000, true); //切换到第一个slide，速度为1秒
		// $(".now").hide();
		// $(".now").css({"opacity":"0"});
		// return false;
		// $(".indexDiv1 #thumbs .textDiv2").mouseenter(function() {
		// 	$(this).find(".arrow-top").addClass('arrow-top111');
		// 	$(".now").show();
		// 	// $(this).find(".arrow-top").css({
		// 	// 	"opacity": "1"
		// 	// });
		// 	$(this).find(".now").show()
		// 	$(this).find(".arrow-top.now").css({
		// 		"opacity": "1",
		// 		"display": "block",
		// 	});
		// })
	},
	function() {
		// 鼠标移出回复自动轮播
		// $(".now").css({"opacity":"1"});
		// gallerySwiper.slideTo(1, 1000, true);
		// $(this).find(".arrow-top").css({"opacity":"0"})
		// $(".now").show();
		// gallerySwiper.autoplay.start();
	});

//人才招聘
var Swiper2 = new Swiper('.indexDiv4 .swiper-container', {
	spaceBetween: 0,
	slidesPerView: 4,
	watchSlidesVisibility: true, //防止不可点击
	breakpoints: {
		//当宽度大于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		//当宽度大于等于480
		480: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		//当宽度大于等于640
		768: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 0
		}
	},
	pagination: {
		el: '.indexDiv4 .swiper-pagination',
		clickable: true,
	},
})
//新闻
var swiper3 = new Swiper('.indexDiv2 .cell1  .swiper-container', {
	// autoplay: {
	// 	delay: 800,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: true
	// },
	spaceBetween: 0,
	speed: 800,
	slidesPerView: "auto",
	watchSlidesVisibility: true, //防止不可点击
	breakpoints: {
		//当宽度大于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度大于等于480
		480: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度大于等于640
		768: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 0
		}
	},
	observer: true,
	/*启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。*/
	observeParents: true,
	/*将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。*/
	pagination: {
		el: '.indexDiv2 .cell1 .swiper-pagination',
		clickable: true,
	},
});
var swiper4 = new Swiper('.indexDiv2 .cell2  .swiper-container', {
	// autoplay: {
	// 	delay: 800,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: true
	// },
	spaceBetween: 0,
	speed: 800,
	slidesPerView: "auto",
	watchSlidesVisibility: true, //防止不可点击
	breakpoints: {
		//当宽度大于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		//当宽度大于等于480
		480: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		//当宽度大于等于640
		768: {
			slidesPerView: 1,
			spaceBetween: 30
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 0
		}
	},
	observer: true,
	/*启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。*/
	observeParents: true,
	/*将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。*/
	pagination: {
		el: '.indexDiv2 .cell2 .swiper-pagination',
		clickable: true,
	},
});
//banner鼠标悬停
$('.banner .swiper-slide').mouseenter(function() {
	swiper1.autoplay.stop();
})
$('.banner .swiper-slide').mouseleave(function() {
	swiper1.autoplay.start();
})
//首页切换
// $(".indexDiv1 #thumbs .textDiv2").mouseenter(function() {
// 	$(".now").removeClass("now")

// 	var index = $(this).index();

// })
// $(".indexDiv1 #thumbs .textDiv2").mouseleave(function() {
// 	$(".now").removeClass("now")
// 	$(".arrow-top111").addClass("now")
// })
//科学顾问
var thumbsSwiper = new Swiper('.aboutDiv4 #thumbs', {
	spaceBetween: 0,
	slidesPerView: 4,
	loop: true,
	watchSlidesVisibility: true, //防止不可点击
	breakpoints: {
		//当宽度大于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度大于等于480
		480: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度大于等于640
		768: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	},
})
var gallerySwiper1 = new Swiper('.aboutDiv4 #gallery', {
	spaceBetween: 0,
	loop: true,
	runCallbacks: false,
	effect: "fade",
	navigation: {
		nextEl: '.aboutDiv4 .swiper-button-next',
		prevEl: '.aboutDiv4 .swiper-button-prev',
	},
	thumbs: {
		swiper: thumbsSwiper,
	},
	pagination: {
		el: '.aboutDiv4 .swiper-pagination',
		clickable: true,
	},
})
var swiper5 = new Swiper('.aboutDiv5 .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 0,
	centeredSlides: true,
	slideToClickedSlide: true,
	loop: true,
	autoplay: true,
	navigation: {
		nextEl: '.aboutDiv5 .swiper-button-next',
		prevEl: '.aboutDiv5 .swiper-button-prev',
	},
	breakpoints: {
		//当宽度大于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度大于等于480
		480: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度大于等于640
		768: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	},
});
if (ww < 1024) {
	$(".nav_btn").click(function() {
		$(".nav_nei").slideToggle();
		// $(".nav_btn").css({" box-shadow":"none"})
	})
}
var Swiper22 = new Swiper('.aboutDiv3 .swiper-container', {
	spaceBetween: 30,
	slidesPerView: 3,
	loop: true,
	watchSlidesVisibility: true, //防止不可点击
	pagination: {
		el: '.aboutDiv3 .swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		//当宽度大于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度大于等于480
		480: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		//当宽度大于等于640
		768: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	},
})
if (ww < 1024) {
	$(".aboutDiv3 .teamDiv").click(function() {

		var indexTo = $(this).parent().index();

		// console.log(indexTo)
		$(".tanchuang").children().eq(indexTo - 1).fadeIn()
		// alert("111")
		// $("html").css({"height":"100%","overflow":"hidden"})
	})
	$(".about_close").click(function() {
		$(".openDiv").fadeOut()
		// $("html").css({"height":"auto","overflow":"auto"})
	})
} else {
	$(".aboutDiv3 .teamDiv").click(function() {

		var indexTo = $(this).parent().index();

		// console.log(indexTo)
		$(".tanchuang").children().eq(indexTo - 3).fadeIn()
		// alert("111")
		// $("html").css({"height":"100%","overflow":"hidden"})
	})
	$(".about_close").click(function() {
		$(".openDiv").fadeOut()
		// $("html").css({"height":"auto","overflow":"auto"})
	})
}

//新闻页点击查看更多
$(".more5").click(function() {
	// $(".newDiv_hide").css({
	// 	"display": "block"
	// })
	var height_news = $(".newDiv_hide").innerHeight()
	// console.log(height_news)
	if (height_news > 0) {
		$(this).hide()
		$(".newDiv_hide").fadeIn()
		$(".moreDiv2").fadeIn()

	} else {
		alert("没有更多啦~")
	}
})
$(".moreDiv2").click(function() {
	$(".newDiv_hide").fadeOut()
	$(this).hide()
	$(".more5").fadeIn()
})

//书单
var Swiper3 = new Swiper('.shudanDiv1 .swiper-container', {
	spaceBetween: 30,
	slidesPerView: 3,

	loop: true,
	watchSlidesVisibility: true, //防止不可点击
	breakpoints: {
		//当宽度大于等于320
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		//当宽度大于等于480
		480: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		//当宽度大于等于640
		768: {
			slidesPerView: 2,
			spaceBetween: 30
		}
	},
	pagination: {
		el: '.shudanDiv1 .swiper-pagination',
		clickable: true,
	},
})
//书单轮播
var certifySwiper = new Swiper('.shudanDiv2 .swiper-container', {
	watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	autoplay: true,
	slideToClickedSlide: true,
	loopedSlides: 5,
	navigation: {
		nextEl: '.shudanDiv2 .swiper-button-next',
		prevEl: '.shudanDiv2 .swiper-button-prev',
	},
	on: {
		progress: function(progress) {
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 50 + 'px';
				scale = 1 - Math.abs(slideProgress) / 7;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
		},
		setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}

		}
	}

})
//理化分析悬浮导航
$(document).ready(function() {
	if (ww < 1024) {
		$(".lihua_nav").addClass("lihua_nav_fix")
	} 
});
$(window).scroll(function() {
	//判断置顶
	var sTop = $(window).scrollTop();
	if (ww < 1024) {
		$(".lihua_nav").addClass("lihua_nav_fix")
	} else{
		if(ww<1600){
			if (sTop > 600) {
				$(".lihua_nav").addClass("lihua_nav_fix1")
			} else {
				$(".lihua_nav").removeClass("lihua_nav_fix1")
			}
		}else{
			if (sTop > 600) {
				$(".lihua_nav").addClass("lihua_nav_fix")
			} else {
				$(".lihua_nav").removeClass("lihua_nav_fix")
			}
		}
		
	}
	

	//导航定位
	var height_1 = $(".lihuaDiv2").outerHeight()
	var height_2 = $(".lihuaDiv3").outerHeight()
	var height_3 = $(".lihuaDiv4").outerHeight()
	// console.log(height_1)
	// console.log(height_2)
	// console.log(height_3)

	//滚动在第一个板块内
	if (sTop < height_1) {
		$(".lihua_nav ul li").eq(0).find(".lihua_img2").show()
		$(".lihua_nav ul li").eq(0).find(".lihua_img1").hide()
		$(".lihua_nav ul li").eq(0).find("p").css({
			"color": "#0b5aff"
		})
		$(".lihua_nav ul li").eq(2).find(".lihua_img1").show()
		$(".lihua_nav ul li").eq(2).find(".lihua_img2").hide()
		$(".lihua_nav ul li").eq(2).find("p").css({
			"color": "#333"
		})
		$(".lihua_nav ul li").eq(4).find("p").css({
			"color": "#333"
		})
	} else {
		//超出第一个板块，第二个图标变化
		$(".lihua_nav ul li").eq(0).find(".lihua_img1").show()
		$(".lihua_nav ul li").eq(0).find(".lihua_img2").hide()
		if (sTop < height_1 + height_2) {
			$(".lihua_nav ul li").eq(2).find(".lihua_img2").show()
			$(".lihua_nav ul li").eq(2).find(".lihua_img1").hide()
			$(".lihua_nav ul li").eq(4).find(".lihua_img2").hide()
			$(".lihua_nav ul li").eq(4).find(".lihua_img1").show()
			$(".lihua_nav ul li").eq(4).find("p").css({
				"color": "#0b5aff"
			})
			$(".lihua_nav ul li").eq(0).find("p").css({
				"color": "#333"
			})
			$(".lihua_nav ul li").eq(4).find("p").css({
				"color": "#333"
			})
		} else {

			$(".lihua_nav ul li").eq(2).find(".lihua_img1").show()
			$(".lihua_nav ul li").eq(2).find(".lihua_img2").hide()
			$(".lihua_nav ul li").eq(4).find(".lihua_img2").show()
			$(".lihua_nav ul li").eq(4).find(".lihua_img1").hide()
			$(".lihua_nav ul li").eq(4).find("p").css({
				"color": "#0b5aff"
			})
			$(".lihua_nav ul li").eq(0).find("p").css({
				"color": "#333"
			})
			$(".lihua_nav ul li").eq(2).find("p").css({
				"color": "#333"
			})
		}

	}


})
if (ww > 1024) {
	$(".lihuaDiv2 .content .textDiv2").mouseenter(function() {
		var height_top = $(this).innerHeight()
		var height_wz = $(this).find(".wenzi").innerHeight()
		var height_mar = height_top - height_wz
		// console.log(height_mar)
		$(this).find(".wenzi").css({
			"top": height_mar
		})
		$(this).find(".xian").css({
			"display": "block"
		})
	})
	$(".lihuaDiv2 .content .textDiv2").mouseleave(function() {
		if(ww>1600){
			$(this).find(".wenzi").css({
				"top": "300px"
			})
			$(this).find(".xian").css({
				"display": "none"
			})
		}else{
			$(this).find(".wenzi").css({
				"top": "260px"
			})
			$(this).find(".xian").css({
				"display": "none"
			})
		}
		
	})
	$(".lihuaDiv2 .content .textDiv1").mouseenter(function() {
		var height_top = $(this).innerHeight()
		var height_wz = $(this).find(".wenzi").innerHeight()
		var height_mar = height_top - height_wz
		// console.log(height_mar)
		$(this).find(".wenzi").css({
			"top": height_mar
		})
		$(this).find(".xian").css({
			"display": "block"
		})
	})
	$(".lihuaDiv2 .content .textDiv1").mouseleave(function() {

		if(ww>1600){
			$(this).find(".wenzi").css({
				"top": "300px"
			})
			$(this).find(".xian").css({
				"display": "none"
			})
		}else{
			$(this).find(".wenzi").css({
				"top": "260px"
			})
			$(this).find(".xian").css({
				"display": "none"
			})
		}
	})
}

//如果导航被点击则值为  true
var tag_checked = false;
var $top_dh = $(".nav_nei li");
$top_dh.find("a").on("click", function() {
	//导航被点击
	tag_checked = true;
	$(".now").removeClass("now");
	$(this).addClass("now");
	var index = $(this).parent("li").index();
	//				if(index == 6) {
	//					$(".leftMenuDiv ul li").eq(5).find("a").addClass("top_dh_in").siblings("li").find("a").removeClass("top_dh_in");
	//				} else {
	//					$(".leftMenuDiv ul li").eq(index).find("a").addClass("top_dh_in").siblings("li").find("a").removeClass("top_dh_in");
	//				}

	var scroll_top_demo = $(".top_dh_in").attr("data-href");
	var scroll_top_num = $(scroll_top_demo).offset().top;
	$("html,body").animate({
		scrollTop: scroll_top_num - 40
	}, "slow");
	//导航被点击  结束 改变状态
	setTimeout(function() {
		tag_checked = false;
	}, 1000)
});
//培训资料弹窗
//数字

// console.log(num)

// var top = $(".ziliao_down img").position().top
// console.log("这是"+top)
// $(".ziliao_down img").each(function() {
// 			var text;
// 			// text="left:"+$(this).position().left;
// 			text = "top:" + $(this).position().top;
// 			// $(this).text(text);
// 			console.log("这是" + text)
// 		})




$(".ziliao").find(".close_btn").click(function() {
	$(this).parent().parent().parent().fadeOut()
})
// $(document).ready(function () {
//             $(".ziliao_down").scroll(function () {
//                 var a = $(this).find("img").offset().top;
//                 if (a >= $(".ziliao_down").scrollTop() && a < ($(".ziliao_down").scrollTop() + $(".ziliao_down").height())) {
//                     alert("div在可视范围");
//                 }
//             });
//         });
$(".jishuDiv3").find("a#popDiv").each(function() {
	$(this).click(function() {
		var num = $(this).next().find(".ziliao_down").children().length
		$("#zong").html(num)
		$(this).next().fadeIn()
		var that = $(this).next().find('.ziliao_down')
		//元素滚动高度
		// var top2=$(that).scrollTop()
		var a = that.offset().top;
		console.log(a)
		that.on('scroll',
			function() {

				// $(this).find("img").each(function() {
				// 	var text;
				// 	// text="left:"+$(this).position().left;
				// 	text =  parseInt($(this).position().top)
				// 	// $(this).text(text);
				// 	console.log("这是距离高度" + text)
				// 	if(text==0){
				// 		var num_2=$(this).eq()+1
				// 		console.log("第几个"+num_2)
				// 		$("#fen").html(num_2)
				// 	}
				// })
				// console.log(that.attr("class"))
			});
		event.stopPropagation()
	})
})
// if($(".ziliao").css("display")=="block"){
// 	alert("111")
// }

$(function() {
	$(".mobel_pop").height($(window).height()).width($(window).width()); //使遮罩的背景覆盖整个页面
	if (ww < 1024) {
		$(".lihuaDiv2 .content ul li .textDiv").click(function() {
			$(this).find(".mobel_pop").fadeIn();
			$(this).find(".mobel_pop_content").fadeIn();
			// showDiv();
		})
	}


})
$(".lihuaDiv2 .content ul li .textDiv").find("#close_pop").each(function() {
	$(this).click(function() {
		$(this).parent().parent().fadeOut();
		$(this).parent().parent().prev().fadeOut();
		// alert("111")

		event.stopPropagation()
		// alert("111")
	})
})


// function showDiv() {
// 	var width1 = ww / 100 * 75
// 	var testContTop = ($(window).height() - $(".mobel_pop_content").height()) / 2; //计算弹出的框距离页面顶部的距离
// 	var testContWidth = ($(window).width() - $(".mobel_pop_content").width()) / 2; //计算弹出的框距离页面左边的距离
// 	$(".mobel_pop_content").css({
// 		"top": testContTop,
// 		// "left": testContWidth,
// 		// "width": width1
// 	});
// 	// console.log($(".mobel_pop_content").width())
// 	// console.log($(".mobel_pop_content").width())

// }
$('.newsTab .tab').find('li').click(function() {
	var index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('#tabCon').find('.tab_cell').eq(index).show().siblings().hide();
})