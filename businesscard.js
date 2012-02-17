function emailForm(){

  var daReferrer = document.referrer;
  var is_me = <first part of email>;
  is_me = is_me + <second part of email>;
  var subject = "Business Card";
  var body_message = "Hi <your name>,%0D%0DI just scanned a business card you gave me, or clicked the image code on your website. You can reach me at this email address.%0D%0DThanks!";

  var mailto_link = 'mailto:'+is_me+'?subject='+subject+'&body='+body_message;
  window.location = mailto_link;
}
