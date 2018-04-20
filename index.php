<DOCTYPE html>
<head>
<title>Applied Team 4 | Golf Booking System</title>
</head>
<body>
		<div id="floating_div2">
			<h2> Book A Tee Time </h2>
			<form method="post">
				<input id="email" name="email">
				<input id="subject" name="subject">
				<textarea type="textarea" id="message" name="message"></textarea> 
      <button type="submit" name="sendmail" class= "infoBtns" style="float: right;">Return</button>
  </div></form>

      <?php
			mail('L00120078@lyit.ie', 'Test', 'Testing 1 2', 'From: applied4GolfBooking@gmail.com')
		?>
</body>
</html>