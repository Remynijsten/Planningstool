<?php  

$spel = "";
if(isset($_POST['spel'])){
	$spel = $_POST['spel'];
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Planningstool";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$gameArray = [];

for ($i = 1; $i <= 25; $i++){
	$games = mysqli_query($conn, "SELECT * FROM games AS gamename WHERE id=$i");
			$obj = mysqli_fetch_assoc($games);
			$json = json_encode($obj["name"]);
			array_push($gameArray, $json);
}

echo json_encode($spel);

?>

