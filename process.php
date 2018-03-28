<?php 
  $db = mysqli_connect('localhost', 'root', '', 'golf');
  if (isset($_POST['bookingRef_check'])) {
  	$refNumber = $_POST['refNumber'];
  	$sql = "SELECT * FROM bookings WHERE bookingRef='$refNumber'";
  	$results = mysqli_query($db, $sql);
  	if (mysqli_num_rows($results) > 0) {
  	  echo "exists";	
  	}else{
  	  echo 'no_exist';
  	}
  	exit();
  }
  if (isset($_POST['date_check'])) {
  	$bookingDate = $_POST['date'];
    $refNumber = $_POST['refNumber'];
  	$sql = "SELECT * FROM bookings WHERE bookingRef='$refNumber' AND bookingDate='$bookingDate'";
  	$results = mysqli_query($db, $sql);
  	if (mysqli_num_rows($results) > 0) {
  	  echo "taken";	
  	}else{
  	  echo 'not_taken';
  	}
  	exit();
  }
    if (isset($_POST['bookingTime_check'])) {
    $bookingTime = $_POST['time'];
    $bookingDate = $_POST['date'];
    $refNumber = $_POST['refNumber'];
    $sql = "SELECT * FROM bookings WHERE bookingRef='$refNumber' AND bookingDate='$bookingDate' AND bookingTime='$bookingTime'";
    $results = mysqli_query($db, $sql);
    if (mysqli_num_rows($results) > 0) {
      echo "exists";  
    }else{
      echo 'no_exist';
    }
    exit();
  }

if (isset($_POST['bookingName_check'])) {
    $bookingTime = $_POST['time'];
    $bookingDate = $_POST['date'];
    $refNumber = $_POST['refNumber'];
    $bookingName = $_POST['name'];
    $sql = "SELECT * FROM bookings WHERE bookingRef='$refNumber' AND bookingDate='$bookingDate' AND bookingTime='$bookingTime' AND bookingName='$bookingName'";
    $results = mysqli_query($db, $sql);
    if (mysqli_num_rows($results) > 0) {
      echo "exists";  
    }else{
      echo 'no_exist';
    }
    exit();
  }

  if (isset($_POST['cancel'])) {
  	$refNumber = $_POST['refNumber'];
  	$email = $_POST['date'];
  	$bookingTime = $_POST['time'];
  	  $query = "DELETE FROM bookings WHERE bookingRef= '$refNumber'";
  	  $results = mysqli_query($db, $query);
  	  echo 'Saved!';
  	  exit();
  	
  }

?>