<?php
//$year=$_GET['year'];
//$date = "17/03/2018";
$date=$_GET['date'];

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"golf");


// for team details
$result = mysqli_query($connection,"SELECT * FROM bookingTimes");
$rs = array();
$i=0;
while($rs[] = mysqli_fetch_assoc($result)) {
// do nothing ;-)
}

$result2 = mysqli_query($connection,"SELECT * FROM bookings WHERE bookingDate = '$date' ORDER BY bookingTime");
$rs2 = array();
$i=0;
while($rs2[] = mysqli_fetch_assoc($result2)) {
// do nothing ;-)
}



mysqli_close($connection);

unset($rs[count($rs)-1]);

unset($rs2[count($rs2)-1]); //removes a null value
// print("{ \"results\":" . json_encode($rs) . "}");
print("{ \"bookingTimes\":" . json_encode($rs) . " , \"bookings\":" . json_encode($rs2) . "}");
?>