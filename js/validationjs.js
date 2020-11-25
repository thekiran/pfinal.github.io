function isNumberKey(evt){evt=(evt)?evt:window.event;var charCode=(evt.which)?evt.which:evt.keyCode;if(charCode>31&&(charCode<48||charCode>57)){return false;}
return true;}
function isNumberKey1(evt){evt=(evt)?evt:window.event;var charCode=(evt.which)?evt.which:evt.keyCode;if(charCode>31&&(charCode<48||charCode>57)){return false;}
return true;}
function validateEmail(email){var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase());}
function chk_validation()
{var returnval=true;var depart_name=$("#depart_name").val();var your_name=$("#your-name").val();var email_add=$("#email_add").val();var tele_no=$("#tele_no").val();var response=grecaptcha.getResponse();if(depart_name=="")
{$("#depart_name").css("border","1px solid red");$("#depart_name").focus();return false;}
else
{$("#depart_name").css("border","1px solid #d1d1d1");}
if(your_name=="")
{$("#your-name").css("border","1px solid red");$("#your-name").focus();return false;}
else
{$("#your-name").css("border","1px solid #d1d1d1");}
if(email_add=="")
{$("#email_add").css("border","1px solid red");$("#email_add").focus();return false;}
else
{if(validateEmail(email_add))
{$("#email_add").css("border","1px solid #d1d1d1");}
else
{alert("Pls Entrez l'adresse e-mail droite.");$("#email_add").focus();return false;}}
if(tele_no=="")
{$("#tele_no").css("border","1px solid red");$("#tele_no").focus();return false;}
else
{$("#tele_no").css("border","1px solid #d1d1d1");}
re=/^\d{1,2}\/\d{1,2}\/\d{4}$/;var datepi=$(".calendar").val();if(datepi=="")
{alert("Veuillez saisir la date");return false;}
else
{if(datepi!=''&&!datepi.match(re)){alert("Format de date non valide");return false;}}
if(response.length==0)
{alert("please verify you are humann!");return false;}}