<?php 

$db = new mysqli("localhost", "root", "", "Planningstool");

$resultSet = $db->query("SELECT name FROM games");
?>



<form action="#">
	<input type="text" name="name" placeholder="">



<select name="game">
	<?php 
		while ($rows = $resultSet->fetch_assoc()){
			$name = $rows['name'];
			echo "<option value='$name'>$name</option>";
		}
	?>
</select>

</form>






