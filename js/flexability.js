var userphoto=document.getElementsByClassName('user-photo');
var socialWrap1=document.getElementById('social-wrap-1');
var socialWrap=document.getElementById('social-wrap');
 var obj={//hover efects for user social conacts
 	actions:function  (a) {//show sociall cpntacts
 		this.contacts=a,
 		this.contacts.className="social-wrap";
 	},
 	none:function(a) {//hied social contacts
 		this.contacts=a,
 		this.contacts.className="hide"
 		 		}

 	
 }
 userphoto[0].onmouseover=function  () {//first user contacts 
 	Object.create(obj).actions(socialWrap)
 	setTimeout(function  () {
 	Object.create(obj).none(socialWrap);
 	},2000)
 }
 userphoto[1].onmouseover=function  () {//first user contacts
 	Object.create(obj).actions(socialWrap1)
 	setTimeout(function  () {
 	Object.create(obj).none(socialWrap1);
 	},2000)
 }
//Jqery module
$(document).ready(function  () {
	 var touch=$("#menu-Button");
	 var menu=$(".nav");
	 var sidebarButton=$(".toggle");
	 var sidebar=$("#first");
	 var status=document.getElementsByClassName('status');
	 var secondSidebarButton=$('.toggle-Second');
	 var secondsidebar=$('#second')
	 	 $(touch).on("click",function(e){
e.preventDefault();
menu.slideToggle();
	 });

	 	 $(sidebarButton).on("click",function(e){
	 	 	e.preventDefault();
	 	 	sidebar.slideToggle();
   			 	 });
	 	 $(secondSidebarButton).on("click",function(e){
	 	 	e.preventDefault();
			secondsidebar.slideToggle();
	 	 });
});