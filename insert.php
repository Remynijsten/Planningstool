<?php 

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

 $query = $conn->prepare("INSERT INTO people (`game`, `players`, `starttime`, `endtime`, `explainer`, `explaintime`, `duration`) VALUES (:game, :players, :starttime, :endtime, :explainer, :explaintime, :duration)");
 $query->bindParam(":game", $game);
 $query->bindParam(":players", $players);
 $query->bindParam(":starttime", $starttime);
 $query->bindParam(":endtime", $endtime);
 $query->bindParam(":explainer", $explainer);
 $query->bindParam(":explaintime", $explaintime);
 $query->bindParam(":duration", $duration);
 $query->execute();
} catch (PDOException $e){
	 echo "Error: " . $e->getMessage();
}

?>