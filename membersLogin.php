<html>
<head>
<title>TeeTimes | Members Login</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div id="floating_div">
 <div class="login">
  <div class="container">
      <form class="form-signin" method="POST">
        <h2 align="center">Members Login</h2>
        <label for="inputMemberNo">Member No:</label>
        <input type="text" name="memberNumber" class="form-control" placeholder="Please enter member number" required>
        <label for="inputPassword">Password</label>
        <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Please enter your password" required>
        <button type="submit" class="loginbtn">Login</button>
         
          <button type="button" class="cancelbtn"><a href="teetimes.html">Return</button>
          
        
      </form>
</div>
</div>
</div>
<?php  //Start the Session
session_start();
require('connect.php');
//3. If the form is submitted or not.
//3.1 If the form is submitted
if (isset($_POST['memberNumber']) and isset($_POST['password'])){
//3.1.1 Assigning posted values to variables.
$memberNumber = $_POST['memberNumber'];
$password = $_POST['password'];
//3.1.2 Checking the values are existing in the database or not
$query = "SELECT * FROM `members` WHERE memberNo='$memberNumber' and password='$password'";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);
//3.1.2 If the posted values are equal to the database values, then session will be created for the user.
if ($count == 1)
{

$_SESSION['memberNumber'] = $memberNumber;
header("Location: membersInformation.php");
}
else
{
//3.1.3 If the login credentials doesn't match, he will be shown with an error message.
echo '<script type="text/javascript"> alert("Incorrect Member Number or Password.") </script>';
}
}
?>
 
</body>
</html>