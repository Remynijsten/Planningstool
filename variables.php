<?php 
	// Server credentials
	if (isset($_GET['value'])){
		$value = $_GET['value'];
	}

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "Planningstool";

	// Server connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	$maxed = mysqli_query($conn, "SELECT MAX(id) AS maxedID FROM people ");
	$high = mysqli_fetch_array($maxed);
	$id = $high['maxedID'];

	if (isset($value)){
		$id = $value;
	}

	//People Query
	$q = mysqli_query($conn," SELECT * FROM people WHERE id = '$id' ");
	$row = mysqli_fetch_assoc($q);

	$start = $row["starttime"];
	$starthour = substr($start, 0, 2);
	$startminute = substr($start, -2);

	$end = $row["endtime"];
	$endhour = substr($end, 0, 2);
	$endminute = substr($end, -2);

	$players = $row["players"];
	$duration = $row['duration'];

	$explaintime = $row['explaintime'];
	$explainer = $row['explainer'];

	$idnumber = $row['id'];

	$plarray = explode(',', $players);
	
	$totalPlayers = count($plarray);

	$game = $row["game"];


	$dbvalues = array(
		"totalplayers" => $totalPlayers, 
		"starthour" => $starthour, 
		"startminute" => $startminute, 
		"endhour" =>  $endhour, 
		"endminute" => $endminute, 
		"duration" => $duration,
		"explaintime" => $explaintime,
		"explainer" => $explainer,
		"players" => $plarray,
		"game" => $game,
		"idnumber" => $idnumber,
	);

	echo json_encode($dbvalues);
?>
