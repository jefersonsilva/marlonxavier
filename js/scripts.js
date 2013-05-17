include('js/jquery.easing.js');
include('js/superfish.js');
include('js/switcher.js');
include('js/forms.js');
include('js/googleMap.js');
include('js/jquery.mousewheel.js');
include('js/uScroll.js');
include('js/jquery.color.js');
include('js/jquery.cycle.all.min.js');
include("js/preloadIMG.js");
include('js/MathUtils.js');
include('js/jquery.fancybox-1.3.4.pack.js');
//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript"></script>'); 
}
//--------global-------------
var isSplash = true;
var isFirst = true;

var spinner;
var mapSpinner;
var bgSpinner;

var home_act;

var MSIE = ($.browser.msie) && ($.browser.version <= 8)
//------DocReady-------------
$(document).ready(function(){
 
    /*if(location.hash.length == 0){
        location.hash="!/"+$('#content > ul > li:first-child').attr('id');
    }*/
///////////////////////////////////////////////////////////////////

$("body").css({'min-height':'800px'});

//////////////////////////////////////////////////////////////////

     $('ul#menu').superfish({
          delay:       800,
          animation:   {height:'show'},
          speed:       600,
          autoArrows:  false,
         dropShadows: false,
         	onInit: function(){
  				$("#menu > li > a").each(function(index){
  					var conText = $(this).find('.mText').text();
					var conText2 = $(this).find('.mText2').text();
                       $(this).append("<div class='_area'></div><div class='_overPl'></div><div class='_overLine'></div><div class='mTextOver'>"+conText+"</div><div class='mTextOver2'>"+conText2+"</div>"); 
                       
  				})

  	 		}
        });
});
  
 //------WinLoad-------------  
$(window).load(function(){  
   
  	//********** list_01 ***********//
	$('.list_01>li>a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    $('.list_01>li>a').fancybox({
        'transitionIn': 'elastic',
    	'transitionOut': 'elastic',
    	'speedIn': 500,
    	'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });
	
	$('.list_01>li>a')
    .find('strong').css('top','200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},350,'easeInOutExpo');
            } else { 
                $(this).children('.sitem_over').stop().show().end()
                .find('strong').stop().show().css({'top':'0'});
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},1000,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},1000,'easeOutQuad');  
            } else {
                $(this).children('.sitem_over').stop().hide().end()
                .find('strong').stop().hide();
            }            
        }
    );
		
	//********** end list_01 ***********//
   
   //slider works----------------------------------------------
	 if ($(".slider1").length) {
        $('.slider1').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '.next1',
    		prev: '.prev1',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    var ind = 0;
    var len = $('.nav_item').length;
    $('.nav_item').bind('click',function(){
        ind = $(this).index()-0;
        $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
        $(this).addClass('active');
        $('.slider1').cycle(ind);
    });
	
	
	$('#arrows1 .img_act').css({opacity:0})
   	$('.next1').hover(function(){
		$(this).find('.img_act').stop(true).animate({opacity:1}, 350, 'easeOutSine');				 
	}, function(){
		$(this).find('.img_act').stop(true).animate({opacity:0}, 350, 'easeOutSine')					 
	})
	
	$('.prev1').hover(function(){
		$(this).find('.img_act').stop(true).animate({opacity:1}, 350, 'easeOutSine');				 
	}, function(){
		$(this).find('.img_act').stop(true).animate({opacity:0}, 350, 'easeOutSine')					 
	})
	
	
	//********** list-1 ***********//
	$('.list-1>li>a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    $('.list-1>li>a').fancybox({
        'transitionIn': 'elastic',
    	'transitionOut': 'elastic',
    	'speedIn': 500,
    	'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });
	
	$('.list-1>li>a')
    .find('strong').css('top','200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},350,'easeInOutExpo');
            } else { 
                $(this).children('.sitem_over').stop().show().end()
                .find('strong').stop().show().css({'top':'0'});
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},1000,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},1000,'easeOutQuad');  
            } else {
                $(this).children('.sitem_over').stop().hide().end()
                .find('strong').stop().hide();
            }            
        }
    );
		
	//********** end list-1 ***********//
	//end slider works----------------------------------------------	
   
   
	var menuItems = $('#menu >li'); 
	var currentIm = 0;
	var lastIm = 0;

///////////////////////////////////////////////
    var navItems = $('.menu > ul >li');

  
	var content=$('#content'),
		nav=$('.menu');

    	$('#content').tabs({
		
		preFu:function(_){
			_.li.css({top:"1700px",'visibility':'visible'});
		}
		,actFu:function(_){			
			if(_.curr){
				_.curr.css({'visibility':'visible', top:'-1700px'}).stop(true).delay(400).animate({top:"0"},800,'easeOutCubic');
               
				
				//console.log("_.n " + _.n);
				
			if (_.n == 0){
			
                //showSplash();
				home_act = 1;
				$('.home').find('.img_icon_act').stop(true).animate({marginTop:'-52px'}, 550, "easeOutExpo");
				$('.home').find('a').addClass('active');
			   
            }
            if ((_.pren == 0) && (_.n>0)){
			
				if(home_act == 1){
					home_act = 0;
					$('.home').find('.img_icon_act').stop(true).animate({marginTop:'0'}, 550, "easeOutExpo");
				}
               // hideSplash();  
            }
			if (_.pren == undefined){
                //_.pren = -1;
                //hideSplashQ();
            }
					
            }
			if(_.prev){
			     _.prev.stop(true).animate({top:'1700px'},600,'easeInOutCubic',function(){_.prev.css({'visibility':'hidden'});} );
             }
		}
	})
    
    
	$('.submenu_1 a b').css({width:'0px'})
	$('.submenu_2 a span').css({width:'0px'})
    $('.submenu_1 a').hover(function()
    {
        $(this).find('b').css({width:'0px', left:'-23px'}).stop().animate({width:'234px'}, 300,'easeOutCubic');	
		$(this).find('span').css({width:'0px', left:'-23px'}).stop().animate({width:'203px'}, 300,'easeOutCubic');			
    }, function(){
        $(this).find('b').stop().animate({width:'0px', left:'210px'}, 300,'easeOutCubic');
		$(this).find('span').stop().animate({width:'0px', left:'180px'}, 300,'easeOutCubic');
    })
	
	nav.navs({
			useHash:true,
			defHash:'#!/page_home',
             hoverIn:function(li){
                $(".mText", li).stop(true).animate({top:"160px"}, 600, 'easeOutCubic');
                $(".mTextOver", li).stop(true).delay(150).animate({top:"22px"}, 500, 'easeOutCubic');
				$(".mText2", li).stop(true).animate({top:"160px"}, 600, 'easeOutCubic');
				$(".mTextOver2", li).stop(true).delay(50).animate({top:"22px"}, 500, 'easeOutCubic');
                $("._overPl", li).stop(true).animate({bottom:"0px"}, 500, 'easeOutCubic');
				$("._overLine", li).stop(true).animate({opacity:1}, 500, 'easeOutCubic');
				

                   // if(($.browser.msie) && ($.browser.version <= 8)){}else{}
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $(".mText", li).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
                        $(".mTextOver", li).stop(true).delay(20).animate({top:"-100px"}, 400, 'easeOutCubic');
						$(".mText2", li).stop(true).delay(60).animate({top:"0px"}, 600, 'easeOutCubic');
						$(".mTextOver2", li).stop(true).delay(60).animate({top:"-100px"}, 400, 'easeOutCubic');
                        $("._overPl", li).stop(true).animate({bottom:"100px"}, 400, 'easeOutCubic');
						$("._overLine", li).stop(true).animate({opacity:0}, 500, 'easeOutCubic');
						
                    } 
                } 
		})

		.navs(function(n){			
			$('#content').tabs(n);
		})
        
//////////////////////////////////////////

   	var h_cont=800;
	
	
	
	function centrRepos() {
		var h=$(window).height();
		if (h>(h_cont+0)) {
			m_top=~~(h-h_cont)/2;
			h_new=h;
		} else {
			m_top=0;
			h_new=h_cont+0;
		}
           
		          $('.all_site').stop().animate({marginTop:m_top}, 800, 'easeOutExpo');
        
	}
	centrRepos();
	
	
	$('.scroll').uScroll({mousewheel:true,step: 100,lay:'outside'});
	
	$('.scroll-btns > a > img').hover(function(){
    		$(this).stop().animate({marginTop:"-27"}, 350, "easeOutExpo");						 
    	}, function(){
    		$(this).stop().animate({marginTop:"0"}, 350, "easeOutExpo");		 
    	})
	
	
	//follow-icons-------------	 
	$('.icon a').hover(function(){
		$(this).find('.img_icon_act').stop().animate({marginTop:'-52px'}, 550, "easeOutExpo");		 
	}, function(){
		$(this).find('.img_icon_act').stop().animate({marginTop:'0px'}, 550, "easeOutExpo");					 
	})
	//end follow-icons-------------
	
	//home button-------------	 
	$('.home a').hover(function(){
		$(this).find('.img_icon_act').stop().animate({marginTop:'-52px'}, 550, "easeOutExpo");		 
	}, function(){
	//console.log(home_act);
		if(home_act == 0){
		$(this).find('.img_icon_act').stop().animate({marginTop:'0px'}, 550, "easeOutExpo");	
			}else{
			
			}
	})
	//end home button-------------
	

    ///////////Window resize///////
    
    function windowW() {
 return (($(window).width()>=parseInt($('body').css('minWidth')))?$(window).width():parseInt($('body').css('minWidth')));
}
    
	$(window).resize(function(){
        centrRepos();
         
        }
    );

    } //window function
) //window load