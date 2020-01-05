<?php  
$value = $_GET['value'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Planningstool";

try {
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$query = $conn->prepare("SELECT * FROM people WHERE id=:value");

	$query->bindParam(":value", $value);
	$query->execute();

	foreach($query as $row){
		$game = $row['game'];
		$players = $row['players'];
		$starttime = $row['starttime'];
		$endtime = $row['endtime'];
		$explainer = $row['explainer'];
		$explaintime = $row['explaintime'];
		$duration = $row['duration'];
	}

	$query = $conn->prepare("SELECT * FROM games WHERE name=:game");

	$query->bindParam(":game", $game);
	$query->execute();

	foreach($query as $row){
		$image = $row['image'];
		$descr = $row['description'];
		$exp = $row['expansions'];
		$skills = $row['skills'];
		$url = $row['url'];
		$youtube = $row['youtube'];
	}

	$gamevalues = array(
		"game" => $game,
		"image" => $image, 
		"descr" => $descr,
		"expansions" => $exp,
		"skills" => $skills,
		"url" => $url,
		"youtube" => $youtube,
		"players" => $players,
		"explainer" => $explainer,
		"starttime" => $starttime,
		"endtime" => $endtime,
		"explaintime" => $explaintime,
		"duration" => $duration
	);

	echo json_encode($gamevalues);
} 
catch (PDOException $e){
	 echo "Error: " . $e->getMessage();
}

?>