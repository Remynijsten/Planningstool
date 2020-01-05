<?php 

$selectedgame = $_POST['selectedgame'];


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Planningstool";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$q = mysqli_query($conn, "SELECT * FROM games WHERE name = '$selectedgame' ");
$obj = mysqli_fetch_assoc($q);

$gamename = $obj['name'];
$duration = $obj['play_minutes'];
$minplayers = $obj['min_players'];
$maxplayers = $obj['max_players'];
$explaintime = $obj['explain_minutes'];

$gamevalues = array(
	"gamename" => $gamename,
	"duration" => $duration, 
	"minplayers" => $minplayers, 
	"maxplayers" => $maxplayers, 
	"explaintime" => $explaintime, 
);

echo json_encode($gamevalues);

?>