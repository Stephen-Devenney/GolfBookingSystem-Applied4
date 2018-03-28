$('document').ready(function(){
 var bookingRef_state = false;
 var bookingDate_state = false;
 var bookingTime_state = false;
 $('#bookingRef').on('blur', function(){
  var bookingRef = $('#bookingRef').val();
  if (bookingRef == '') {
  	bookingRef_state = false;
  	return;
  }
  $.ajax({
    url: 'test.php',
    type: 'post',
    data: {
    	'bookingRef_check' : 1,
    	'refNumber' : bookingRef,
    },
    success: function(response){
      if (response == 'exists' ) {
      	bookingRef_state = true;
      	$('#bookingRef').parent().removeClass();
      	$('#bookingRef').parent().addClass("form_success");
      	$('#bookingRef').siblings("span").text('');
      }else if (response == 'no_exist') {
      	bookingRef_state = false;
      	$('#bookingRef').parent().removeClass();
      	$('#bookingRef').parent().addClass("form_error");
      	$('#bookingRef').siblings("span").text('Your Booking Ref. does not exist');
      }
    }
  });
 });		
  $('#bookingDate').on('blur', function(){
 	var bookingDate = $('#bookingDate').val();
  console.log(bookingDate);
  date = new Date(bookingDate);
  var day = date.getDate();
  if (day < 10) 
    {day = '0' + day;}
  var month = date.getMonth()+1;
  if (month < 10) month= '0' + month;
  var year = date.getFullYear();
  selectedDate =day+"/"+month+"/"+year;
  console.log(selectedDate);
  var bookingRef = $('#bookingRef').val();
 	if (bookingDate == '') {
 		bookingDate_state = false;
 		return;
 	}
 	$.ajax({
      url: 'test.php',
      type: 'post',
      data: {
      	'date_check' : 1,
      	'date' : selectedDate,
        'refNumber' : bookingRef,
      },
      success: function(response){
      	if (response == 'taken' ) {
          bookingDate_state = true;
          $('#bookingDate').parent().removeClass();
          $('#bookingDate').parent().addClass("form_success");
          $('#bookingDate').siblings("span").text('');
      	}else if (response == 'not_taken') {
      	  bookingDate_state = false;
      	  $('#bookingDate').parent().removeClass();
      	  $('#bookingDate').parent().addClass("form_error");
      	  $('#bookingDate').siblings("span").text('Date does not match Ref Number');
      	}
      }
 	});
 });

$('#bookingTime').on('blur', function(){
  var bookingTime = $('#bookingTime').val();
  var bookingRef = $('#bookingRef').val();
  var bookingDate = $('#bookingDate').val();
  console.log(bookingDate);
  date = new Date(bookingDate);
  var day = date.getDate();
  if (day < 10) 
    {day = '0' + day;}
  var month = date.getMonth()+1;
  if (month < 10) month= '0' + month;
  var year = date.getFullYear();
  selectedDate =day+"/"+month+"/"+year;
  console.log(selectedDate);
  if (bookingRef == '') {
    bookingRef_state = false;
    return;
  }
  $.ajax({
    url: 'test.php',
    type: 'post',
    data: {
      'bookingTime_check' : 1,
      'date' : selectedDate,
      'refNumber' : bookingRef,
      'time' : bookingTime,
    },
    success: function(response){
      if (response == 'exists' ) {
        bookingTime_state = true;
        $('#bookingTime').parent().removeClass();
        $('#bookingTime').parent().addClass("form_success");
        $('#bookingTime').siblings("span").text('');
      }else if (response == 'no_exist') {
        bookingTime_state = false;
        $('#bookingTime').parent().removeClass();
        $('#bookingTime').parent().addClass("form_error");
        $('#bookingTime').siblings("span").text('Your selected time does not match the date & ref no.');
      }
    }
  });
 });    

$('#bookingName').on('blur', function(){
  var bookingTime = $('#bookingTime').val();
  var bookingRef = $('#bookingRef').val();
  var bookingDate = $('#bookingDate').val();
    console.log(bookingDate);
  date = new Date(bookingDate);
  var day = date.getDate();
  if (day < 10) 
    {day = '0' + day;}
  var month = date.getMonth()+1;
  if (month < 10) month= '0' + month;
  var year = date.getFullYear();
  selectedDate =day+"/"+month+"/"+year;
  console.log(selectedDate);
  var bookingName = $('#bookingName').val();
  if (bookingName == '') {
    bookingName_state = false;
    return;
  }
  $.ajax({
    url: 'test.php',
    type: 'post',
    data: {
      'bookingName_check' : 1,
      'date' : selectedDate,
      'refNumber' : bookingRef,
      'time' : bookingTime,
      'name' : bookingName,
    },
    success: function(response){
      if (response == 'exists' ) {
        bookingRef_state = true;
        $('#bookingName').parent().removeClass();
        $('#bookingName').parent().addClass("form_success");
        $('#bookingName').siblings("span").text('');
      }else if (response == 'no_exist') {
        bookingRef_state = false;
        $('#bookingName').parent().removeClass();
        $('#bookingName').parent().addClass("form_error");
        $('#bookingName').siblings("span").text('Booking name does not match date, ref no. & time');
      }
    }
  });
 });    


 $('#cancel_btn').on('click', function(){
  $('#error_msg').text('');
 	var bookingRef = $('#bookingRef').val();
 	var bookingDate = $('#bookingDate').val();
    console.log(bookingDate);
  date = new Date(bookingDate);
  var day = date.getDate();
  if (day < 10) 
    {day = '0' + day;}
  var month = date.getMonth()+1;
  if (month < 10) month= '0' + month;
  var year = date.getFullYear();
  selectedDate =day+"/"+month+"/"+year;
  console.log(selectedDate);
 	var bookingTime = $('#bookingTime').val();
  var bookingName 
 	if (bookingRef_state == false || bookingDate_state == false) {
	  $('#error_msg').text('Fix the errors in the form first');
	}else{
      // proceed with form submission
      $.ajax({
      	url: 'test.php',
      	type: 'post',
      	data: {
      		'cancel' : 1,
      		'date' : selectedDate,
      		'refNumber' : bookingRef,
      		'time' : bookingTime,
      	},
      	success: function(response){
      		alert('Booking Cancelled Successfully');
          window.open ('visitors.php','_self',false)
      		$('#bookingRef').val('');
      		$('#bookingDate').val('');
      		$('#bookingTime').val('');
          $('#bookingName').val('');

      	}
      });
 	}
 });
});