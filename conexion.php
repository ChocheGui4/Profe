<?php 
	$servername = "localhost";
	$database = "ejemplo";
	$username = "root";
	$password = "";
	
	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $database);
	if($conn){
		echo "Successfully";
	}

 ?>