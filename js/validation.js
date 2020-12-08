var sendButton=document.getElementById('sendButton');
var newsButton=document.getElementById('news-button');
var emailSubscribe=document.getElementById('subscriber');
var userEmail=document.getElementById('input-Email');
var userName=document.getElementById('userName');
var outPutResult=document.getElementsByClassName('valid');
console.log(outPutResult)
var forEmail=/^[A-z0-9._-]+@[A-z0-9.-]+\.[A-z]{2,4}$/ig;//regular expresion for email
var forUserName=/^[A-z0-9-_+. ,@]{1,}$/ig;//regular expresion for user name
var validation={
	valid:function  (a,b,c) {
		this.inputData=a,//equal data
		this.validationRule=b,
		this.output=c;
		var proces=this.inputData.value.match(this.validationRule);//validation proces
		console.log(proces)
		if (proces===null) {//out result 
		this.output.innerHTML="<sup>*</sup>"+"please enter a valid data";
		}
		else{
		this.output.innerHTML="<sup>*</sup>"+"required";
			};	
		}
};
sendButton.onclick=function  () {//launch validation
	Object.create(validation).valid(userEmail,forEmail,outPutResult[1]);//creating object for validation email;
	Object.create(validation).valid(userName,forUserName,outPutResult[0]);//creating object for validation use name;
};
newsButton.onclick=function  () {//launch validation
	Object.create(validation).valid(emailSubscribe,forEmail,outPutResult[2]);//creating oject for validation subscrib email
};
