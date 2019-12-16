<div class="addgame">
	<form id="form" action="#">
		<select id="selectgame" required>
			<option value="" disabled selected>Selecteer het spel...</option>
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

		<select name="explain" class="explainer">
			<option value="" disabled selected>Wie legt het spel uit...</option>
			<option value="remy">Remy</option>
			<option value="billy">Billy</option>
			<option value="harry">Harry</option>
			<option value="jack">Jack</option>
			<option value="thijmen">Thijmen</option>
			<option value="luigi">Luigi</option>
		</select>
		<p class="explainTXT">SELECTEER DE SPELERS</p>



		<div class="avatar">
			<p class="removechar">X</p>
			<img src="img/Remy.png" alt="remy" value="remy" class="selectavatar">
			<p class="avatarTXT">Remy</p>
		</div>
		
		<div class="avatar">
			<p class="removechar">X</p>
			<img src="img/Billy.png" alt="billy" value="billy" class="selectavatar">
			<p class="avatarTXT">Billy</p>
		</div>

		<div class="avatar">
			<p class="removechar">X</p>
			<img src="img/Harry.png" alt="harry" value="harry" class="selectavatar">
			<p class="avatarTXT">Harry</p>
		</div>

		<div class="avatar">
			<p class="removechar">X</p>
			<img src="img/Jack.png" alt="jack" value="jack" class="selectavatar">
			<p class="avatarTXT">Jack</p>
		</div>

		<div class="avatar">
			<p class="removechar">X</p>
			<img src="img/Thijmen.png" alt="thijmen" value="thijmen" class="selectavatar">
			<p class="avatarTXT">Thijmen</p>
		</div>

		<div class="avatar">
			<p class="removechar">X</p>
			<img src="img/Luigi.png" alt="luigi" value="luigi" class="selectavatar">
			<p class="avatarTXT">Luigi</p>
		</div>

		<div class="times">
			<input class="starthour" type="number" name="starthour" min="12" max="18" required>
			<input class="startminute" type="number" name="startminute" min="00" max="59" required>
	       	<p> TOT </p>
			<input class="endhour" type="number" name="endhour" min="12" max="17" required>
			<input class="endminute" type="number" name="endminute" min="00" max="59" required>
		</div>





	</form>

	
	<button class="submitBTN" type="submit" >Voeg Toe</button>
	<div class="errors"></div>
</div>