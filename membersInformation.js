window.onload=function() {

	$(document).on("click", ".edit", function(){
  	    timeSelected = this.id;
        dateSelected = this.name;
  	    $.getJSON("getBookingsData.php", function(data){
          for(var i = 0; i<data.length;i++)
          {
            if(data[i].bookingDate == dateSelected && data[i].bookingTime == timeSelected)
            {
              var player1=data[i].player1;
              var player2=data[i].player2;
              var player3=data[i].player3;
              var player4=data[i].player4;
              var email = data[i].email;
              var bookingName = data[i].bookingName;
              $(".popup-overlay, .popup-content").addClass("active");
              $("#player1").val(player1);
              $("#player2").val(player2);
              $("#player3").val(player3);
              $("#player4").val(player4);
            }
          }
        });
  	    
      
	    //alert(timeSelected);
	    

	   });
	$(document).on("click", ".close", function(){
  $(".popup-overlay, .popup-content").removeClass("active");
});

  $(document).on("click", ".deleteBooking", function(){
  


              $.ajax({
              type: 'POST',
              data: {bookingDate: dateSelected, bookingTime: timeSelected},
              url: "deleteBooking.php",
              success: function(result){
                  alert("Booking Deleted");
                  window.location.replace("membersInformation.php");
                    
            }
        });
});

  $(document).on("click", ".editBooking", function(){
  
      $.getJSON("getBookingsData.php", function(data){
          for(var i = 0; i<data.length;i++)
          {
            if(data[i].bookingDate == dateSelected && data[i].bookingTime == timeSelected)
            {
               var player1=$("#player1").val();
              var player2=$("#player2").val();
              var player3=$("#player3").val();
              var player4=$("#player4").val();;
              var bookingEmail = data[i].email;
              var bookingName = data[i].bookingName;
              alert(bookingName);        
              alert(bookingEmail); 
              alert(player1);
              alert(player2);
              alert(player3);
              alert(player4);
              alert(timeSelected);        
              alert(dateSelected);
             
              $.ajax({
              type: 'POST',
              data: {bookingDate: dateSelected, bookingTime: timeSelected, bookingEmail: bookingEmail,
               bookingName: bookingName, player1: player1,  player2: player2,  player3: player3,  player4: player4},
              url: "updateBooking.php",
              success: function(result){
                  alert("Booking Updated");
                  window.location.replace("membersInformation.php");
                    
              }
            });
            }
          }
        });
        

});
}