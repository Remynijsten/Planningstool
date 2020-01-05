<?php 

$gamename = $_GET['gamename'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Planningstool";

try {
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch (PDOException $e){
	 echo "Error: " . $e->getMessage();
}

$query = $conn->query(" SELECT * FROM games WHERE name='$gamename' ");
foreach ($query as $row){
	echo ($row['id']);
}

?>