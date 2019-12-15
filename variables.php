
<?php 
	$id = $_GET['id'];

	// Server credentials
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "Planningstool";

	// Server connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}
	//Query for total events listed in database
	$max = mysqli_query($conn,"SELECT max(id) AS totalEvent FROM people");
	$row = mysqli_fetch_assoc($max);
	$totalEvent = $row["totalEvent"];

	//People Query
	$starttime = mysqli_query($conn," SELECT * FROM people WHERE id = '$id' ");
	$row = mysqli_fetch_assoc($starttime);

	$start = $row["starttime"];
	$end = $row["endtime"];
	
	$starthour = substr($start, 0, 2);
	$startminute = substr($start, -2);

	$endhour = substr($end, 0, 2);
	$endminute = substr($end, -2);

	$players = $row["players"];
	$plarray = explode(',', $players);
	$totalPlayers = count($plarray);

	$game = $row["game"];

	// Games query
	$selectedGame = mysqli_query($conn, " SELECT * FROM games WHERE name= '$game' ");
	$times = mysqli_fetch_assoc($selectedGame);
	$playminute = $times["play_minutes"];
	$explaintime = $times["explain_minutes"];


	$dbvalues = array(
		"totalevent" => $totalEvent, 
		"totalplayers" => $totalPlayers, 
		"starthour" => $starthour, 
		"startminute" => $startminute, 
		"endhour" =>  $endhour, 
		"endminute" => $endminute, 
		"playtime" => $playminute,
		"explaintime" => $explaintime,
		"players" => $plarray,
		"game" => $game,
	);

	echo json_encode($dbvalues);
?>
