<?php 

$value = $_POST['value'];
$game = $_POST['game'];
$players = implode(",",$_POST['players']);
$starttime = $_POST['starttime'];
$endtime = $_POST['endtime'];
$explainer = $_POST['explainer'];
$explaintime = $_POST['explaintime'];
$duration = $_POST['duration'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Planningstool";

try {
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$query = $conn->prepare("UPDATE people SET game=:game, players=:players, starttime=:starttime, endtime=:endtime, explainer=:explainer, explaintime=:explaintime, duration=:duration WHERE id=:value");
	$query->bindParam(":game", $game);
	$query->bindParam(":players", $players);
	$query->bindParam(":starttime", $starttime);
	$query->bindParam(":endtime", $endtime);
	$query->bindParam(":explainer", $explainer);
	$query->bindParam(":explaintime", $explaintime);
	$query->bindParam(":duration", $duration);
	$query->bindParam(":value", $value);
	$query->execute();

} catch (PDOException $e){
	 echo "Error: " . $e->getMessage();
}



?>