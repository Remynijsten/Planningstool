<?php 
$value = $_GET['value'];
$player = json_decode($_GET['spelers']);
$starttime = $_GET['starttime'];
$endtime = $_GET['endtime'];

$errors = array();

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

foreach ($player as $p){
	$query = $conn->query(" SELECT * FROM people WHERE players LIKE '%$p%' AND id!='$value' ");

	foreach ($query as $row){
		$start = $row['starttime'];
		$end = $row['endtime'];
		$explainer = $row['explainer'];
		$occ = "$p speelt dan al een spel";
		
		if (($starttime >= $start && $starttime <= $end) || ($endtime >= $start && $endtime <= $end)){
			if (in_array($occ, $errors) == false){
				array_push($errors, $occ);
			}
		}
	}

	$query = $conn->query(" SELECT * FROM people WHERE explainer LIKE '%$p%' AND id!='$value' ");

	foreach ($query as $row){
		$start = $row['starttime'];
		$end = $row['endtime'];
		$occ = "$p geeft ergens uitleg binnen de speeltijd";
		
		if ($start >= $starttime && $start <= $endtime){
			if (in_array($occ, $errors) == false){
				array_push($errors, $occ);
			}
		}
	}
}

echo json_encode($errors);

?>