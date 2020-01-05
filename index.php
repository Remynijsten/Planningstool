<!DOCTYPE php>
<html>
	<head>
		<title>Planningstools</title>
		<link rel="icon" href="data:;base64,=">
		<link rel="stylesheet" href="style.css">
		<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
		<meta http-equiv="Cache-control" content="no-cache">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="utf-8">
		<script src="jquery-3.4.1.min.js"></script>
		<script src="https://kit.fontawesome.com/970adb2e15.js" crossorigin="anonymous"></script>
	</head>
	<body>
		<div class="main">
			<?php include "table.php" ?>
			<?php include "form.php" ?>
			<?php include "menu.php" ?>

			<button class="addevent">Voeg Spel Toe</button>
		</div>

		<script src="createEvent.js"></script>	
		<script src="addgame.js"></script>	
		<script src="tables.js"></script>
		<script src="editEvent.js"></script>
	</body>
</html>