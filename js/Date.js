var date={
	mounth:document.getElementsByClassName('month'),
	day:document.getElementsByClassName('day'),
	monthArr:["Dec","Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov"],
	outputDate:function(a,b){
		this.today=a,
		this.month=b;
		for (var i = 0; i < this.mounth.length; i++) {//month
			this.mounth[i].innerHTML=this.monthArr[this.month];
		};
		for (var i = 0; i < this.day.length; i++) {//day
			this.day[i].innerHTML=this.today+"th";
		};
	}
};
function gettingDate () {//get tooday date
var dateConstructor=new Date();
var currentDay=dateConstructor.getDay();// get day
var mounth=dateConstructor.getMonth(); //get month
date.outputDate(currentDay,mounth)//call date object
};
//грудень\december
//сычень\jan
//лютий\february
//березень\march
//квытень\april
//травень\may
//червень\june
//липень\july
//серпень\august
//вересень\september
//жовтень\october
//листопад\november
document.onReady=gettingDate();//launch function gettingDate
