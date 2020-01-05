<?php  
$value = $_GET['value'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Planningstool";

try {
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$query = $conn->prepare("DELETE FROM people WHERE id=:value");

	$query->bindParam(":value", $value);
	$query->execute();
} 
catch (PDOException $e){
	 echo "Error: " . $e->getMessage();
}



?>