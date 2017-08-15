
window.onscroll = function MoveScroll()
{  
    if(document.getElementById("box") != null)
    {
        document.getElementById("box").style.top = eval(document.documentElement.scrollTop + document.body.scrollTop + 180) + "px"; 
    }
} 

//When page loading
function ShowLoading(obj)
{
    obj.style.display = "none";
    var loadArea = document.createElement("div");
    loadArea.className = "loading-bg";
    var html = "<div class=\"loading\"></div>"
    loadArea.innerHTML = html;
    document.body.appendChild(loadArea);
}

$(document).ready(function() {
      
	// Setup the nav drop-downs
	$('#nav').nmcDropDown({
    show: {height: 'show', opacity: 'show'}
	});
});
(function(a){a.fn.nmcDropDown=function(b){var c=a.extend({},a.fn.nmcDropDown.defaults,b);return this.each(function(){menu=a(this);submenus=menu.children("li:has("+c.submenu_selector+")");if(c.fix_IE){menu.css("z-index",51).parents().each(function(d){if(a(this).css("position")=="relative"){a(this).css("z-index",(d+52))}});submenus.children(c.submenu_selector).css("z-index",50)}over=function(){a(this).addClass(c.active_class).children(c.submenu_selector).animate(c.show,c.show_speed);return false};out=function(){a(this).removeClass(c.active_class).children(c.submenu_selector).animate(c.hide,c.hide_speed);return false};if(c.trigger=="click"){submenus.toggle(over,out).children(c.submenu_selector).hide()}else{if(a().hoverIntent){submenus.hoverIntent({interval:c.show_delay,over:over,timeout:c.hide_delay,out:out}).children(c.submenu_selector).hide()}else{submenus.hover(over,out).children(c.submenu_selector).hide()}}})};a.fn.nmcDropDown.defaults={trigger:"hover",active_class:"open",submenu_selector:"ul",show:{opacity:"show"},show_speed:300,show_delay:50,hide:{opacity:"hide"},hide_speed:200,hide_delay:100,fix_IE:true}})(jQuery);

