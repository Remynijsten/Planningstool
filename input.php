<?php  
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

?>

<form id="form" action="#">
	<select id="selectgame">
		<option value="Counterfeiters">Counterfeiters</option>
		<option value="7 Wonders">7 Wonders</option>
		<option value="Camel Up">Camel Up</option>
		<option value="Roborally">Roborally</option>
		<option value="Codenames: Pictures">Codenames: Pictures</option>
		<option value="Dale of Merchants">Dale of Merchants</option>
		<option value="Dixit: Odyssey">Dixit: Odyssey</option>
		<option value="Concept">Concept</option>
		<option value="10 minuten kraak">10 minuten kraak</option>
		<option value="Ghost Fightin' Treasure Hunters">Ghost Fightin' Treasure Hunters</option>
		<option value="Downforce">Downforce</option>
		<option value="City of Horror">City of Horror</option>
		<option value="Fantasy Realms">Fantasy Realms</option>
		<option value="The Estates">The Estates</option>
		<option value="Lemming Maffia">Lemming Maffia</option>
		<option value="Micropolis">Micropolis</option>
		<option value="Mysterium">Mysterium</option>
		<option value="Spyfall">Spyfall</option>
		<option value="Keep Talking and Nobody Explodes">Keep Talking and Nobody Explodes</option>
		<option value="Not Alone">Not Alone</option>
		<option value="The Climbers">The Climbers</option>
		<option value="Gizmos">Gizmos</option>
		<option value="The Dragon & Flagon">The Dragon & Flagon</option>
		<option value="Pandemic">Pandemic</option>
		<option value="Everyone is John">Everyone is John</option>
	</select>
	<select id="player1"></select>
	<select id="player2"></select>
	<select id="player3"></select>
	<select id="player4"></select>
	<select id="player5"></select>
	<select id="player6"></select>
</form>