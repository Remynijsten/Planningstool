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
	</head>
	<body>
		<div class="main">
			<?php include $_SERVER['DOCUMENT_ROOT'].'/php/table.php' ?>
			<button onclick="create()">test</button>
		</div>

		<script src="tables.js"></script>
		<script src="createEvent.js"></script>		
	</body>
</html>