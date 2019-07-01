<?php
$name2 = $_POST['name1'];
$email2 = $_POST['email1'];
$password2 = $_POST['password1'];
$contact2 = $_POST['contact1'];
$channel2=$_POST['channel1'];
$insta2=$_POST['insta1'];
$connection = mysql_connect("localhost", "root", ""); 
$db = mysql_select_db("registration", $connection); 
if (isset($_POST['name1'])) {
$query = mysql_query("INSERT INTO `data`(`id`, `name`, `email`, `password`, `contact`, `channel`, `insta`) VALUES ('$name2', '$email2', '$password2','$contact2','channel2','$inta2')"); 
echo "Form Submitted succesfully";
}
mysql_close($connection); 
?>