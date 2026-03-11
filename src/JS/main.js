//Kreierung des Spielfeldes und Resourcenanzeige
			//Zähl Variablen
			let column_3_Count = 0;
			let column_4_Count = 0;
			let column_5_Count = 0;
			let column_4_0_Count = 0;
			let column_3_0_Count = 0;

			//Spiel Variablen (Resourcen)
			let gold = 0
			let wood = 0
			let stone = 0
			let food = 100
			let land = 0
			let forest = 0
			let quarry = 0
			let wonder = 0
			let population = 0
			let popCap = 8
			let turn = 0

			let goldModifier = 1
			let foodModifier = 1
			let stoneModifier = 0
			let woodModifier = 0
			let populationModifier = 1

			//Baumodi Variablen
			let buyHouseM = false
			let buyLandM = false
			let buyForesterM = false
			let buyQuarryM = false
			let buyWonderM = false

			//Resourcen Anzeige

			//-----------------------------------------------------
			//---------------Resourcen
			//----------------------------------------------------
			var goldIcon = document.createElement("img")
			goldIcon.src = "src/img/gold.png"
			document.getElementById("Spielbrett").appendChild(goldIcon)
			goldIcon.classList.add("icon");
			goldIcon.style.width = "50px"
			goldIcon.style.height = "50px"
			goldIcon.style.margin = "25px 10px -15px 25px"

			var goldLabel = document.createElement("Label");
			goldLabel.innerHTML = gold+" "+"("+goldModifier+")";
			document.getElementById("Spielbrett").appendChild(goldLabel);
			goldLabel.id = "gold"
			goldLabel.classList.add("resource");
			goldLabel.style.margin = "25px 10px -15px 10px"


			var foodIcon = document.createElement("img")
			foodIcon.src = "src/img/food.jpg"
			document.getElementById("Spielbrett").appendChild(foodIcon)
			foodIcon.classList.add("icon");
			foodIcon.style.width = "50px"
			foodIcon.style.height = "50px"
			foodIcon.style.margin = "25px 10px -15px 10px"

			var foodLabel = document.createElement("Label");
			foodLabel.innerHTML = food+" "+"("+foodModifier+")";
			document.getElementById("Spielbrett").appendChild(foodLabel);
			foodLabel.id = "food"
			foodLabel.classList.add("resource");

			var woodIcon = document.createElement("img")
			woodIcon.src = "src/img/wood.png"
			document.getElementById("Spielbrett").appendChild(woodIcon)
			woodIcon.classList.add("icon");
			woodIcon.style.width = "69px"
			woodIcon.style.height = "50px"
			woodIcon.style.margin = "25px 10px -15px 10px"

			var woodLabel = document.createElement("Label");
			woodLabel.innerHTML = wood+" "+"("+woodModifier+")";
			document.getElementById("Spielbrett").appendChild(woodLabel);
			woodLabel.id = "wood" 
			woodLabel.classList.add("resource");

			var stoneIcon = document.createElement("img")
			stoneIcon.src = "src/img/stone.png"
			document.getElementById("Spielbrett").appendChild(stoneIcon)
			stoneIcon.classList.add("icon");
			stoneIcon.style.width = "50px"
			stoneIcon.style.height = "50px"
			stoneIcon.style.margin = "25px 10px -15px 10px"

			var stoneLabel = document.createElement("Label");
			stoneLabel.innerHTML = stone+" "+"("+stoneModifier+")";
			document.getElementById("Spielbrett").appendChild(stoneLabel);
			stoneLabel.id = "stone"
			stoneLabel.classList.add("resource");

			//-----------------------------------------------------
			//---------------Statistik
			//----------------------------------------------------


			var populationIcon = document.createElement("img")
			populationIcon.src = "src/img/population.png"
			document.getElementById("Spielbrett").appendChild(populationIcon)
			populationIcon.classList.add("icon");
			populationIcon.style.width = "50px"
			populationIcon.style.height = "50px"
			populationIcon.style.margin = "25px 10px -15px 10px"

			var populationLabel = document.createElement("Label");
			populationLabel.innerHTML = population+"/"+popCap+" ";
			document.getElementById("Spielbrett").appendChild(populationLabel);
			populationLabel.id = "population"
			populationLabel.classList.add("statistic");

			var turnLabel = document.createElement("Label");
			turnLabel.innerHTML = "Year: " + turn+" ";
			document.getElementById("Spielbrett").appendChild(populationLabel);
			turnLabel.id = "turn"
			turnLabel.classList.add("statistic");




			//Beim ersten Laden ausgeführt:
			window.addEventListener("contextmenu", e => e.preventDefault()); //deaktiviert das ContextMenu
			scoutForLand();

			window.addEventListener("keypress", (e) => {
				if(e.keyCode == 32 && e.target === document.body) { //deaktiviert Scrollen bei Space-Druck
					e.preventDefault();      
					endTurn();
				}
			})




			//Prop Construction

			function scoutForLand() {
				
				//Baut ein großes Sechseck aus 19 Sechsecken
				var grid = document.createElement("DIV");
				grid.id = "grid";
				var column_3 = document.createElement("DIV");
				grid.appendChild(column_3);    
				column_3.id = "column-3";
				
				var column_4 = document.createElement("DIV");
				grid.appendChild(column_4);    
				column_4.id = "column-4"
				
				var column_5 = document.createElement("DIV");
				grid.appendChild(column_5);    
				column_5.id = "column-5";
				
				var column_4_0 = document.createElement("DIV");
				grid.appendChild(column_4_0);    
				column_4_0.id = "column-4-0";

				
				var column_3_0 = document.createElement("DIV");
				grid.appendChild(column_3_0);    
				column_3_0.id = "column-3-0";
				
				document.getElementById("Spielbrett").appendChild(grid);   
				
				for (let i = 0; i < 3; i++) {
					buildHexagon("column-3");}
					
				for (let i = 0; i < 4; i++) {
					buildHexagon("column-4");}
					
				for (let i = 0; i < 5; i++) {
					buildHexagon("column-5");}
					
				for (let i = 0; i < 4; i++) {
					buildHexagon("column-4-0");}
					
				for (let i = 0; i < 3; i++) {
					buildHexagon("column-3-0");}
			}



			function spawnHexagon() {
				let colInputField = document.getElementById("columnPos").value; //Holt den String aus dem Input Field
				buildHexagon(colInputField) 
			}

			function convertIntoLand(pos) {
				
				
				//Hexagon erfassen
				
				var hexagonTop = document.getElementById(pos).childNodes[0].childNodes;
				var hexagonBottom = document.getElementById(pos).childNodes[1].childNodes;
				hexagonTop[0].style.borderColor = "transparent yellow orange transparent";
				hexagonTop[1].style.borderColor = "transparent transparent orange yellow";
				
				hexagonBottom[0].style.borderColor = "yellow orange transparent transparent";
				hexagonBottom[1].style.borderColor = "yellow transparent transparent orange";
				
				
				//border style verändern
			}
			function convertIntoForest(pos) {
				
				
				//Hexagon erfassen
				
				var hexagonTop = document.getElementById(pos).childNodes[0].childNodes;
				var hexagonBottom = document.getElementById(pos).childNodes[1].childNodes;
				hexagonTop[0].style.borderColor = "transparent lightgreen darkgreen transparent";
				hexagonTop[1].style.borderColor = "transparent transparent darkgreen lightgreen";
				
				hexagonBottom[0].style.borderColor = "lightgreen darkgreen transparent transparent";
				hexagonBottom[1].style.borderColor = "lightgreen transparent transparent darkgreen";
				
				
				//border style verändern
			}

			function convertIntoQuarry(pos) {
				
				
				//Hexagon erfassen
				
				var hexagonTop = document.getElementById(pos).childNodes[0].childNodes;
				var hexagonBottom = document.getElementById(pos).childNodes[1].childNodes;
				hexagonTop[0].style.borderColor = "transparent grey black transparent";
				hexagonTop[1].style.borderColor = "transparent transparent black grey";
				
				hexagonBottom[0].style.borderColor = "grey black transparent transparent";
				hexagonBottom[1].style.borderColor = "grey transparent transparent black";
				
				
				//border style verändern
			}
			
			function convertIntoWonder(pos) {
				
				var hexagonTop = document.getElementById(pos).childNodes[0].childNodes;
				var hexagonBottom = document.getElementById(pos).childNodes[1].childNodes;
				hexagonTop[0].style.borderColor = "transparent #f55d5d #bf1111 transparent";
				hexagonTop[1].style.borderColor = "transparent transparent #bf1111 #f55d5d";
				
				hexagonBottom[0].style.borderColor = "#f55d5d #bf1111 transparent transparent";
				hexagonBottom[1].style.borderColor = "#f55d5d transparent transparent #bf1111";
				
			}


			function buildHexagon(column) {
				
				//Konstruiert ein Sechseck
				var hexagon = document.createElement("DIV");
				hexagon.classList.add("hexagon");
				
					var hexagon_top_row = document.createElement("DIV");
					hexagon.appendChild(hexagon_top_row);  
					hexagon_top_row.classList.add("hexagon-top-row");			
					
						var hexagon_left = document.createElement("DIV");
						hexagon_top_row.appendChild(hexagon_left); 
						hexagon_left.classList.add("left");			
						
						var hexagon_right = document.createElement("DIV");
						hexagon_top_row.appendChild(hexagon_right);
						hexagon_right.classList.add("right");			
					
					var hexagon_bottom_row = document.createElement("DIV");
					hexagon.appendChild(hexagon_bottom_row); 
					hexagon_bottom_row.classList.add("hexagon-bottom-row");
					
						var hexagon_bottom_left = document.createElement("DIV");
						hexagon_bottom_row.appendChild(hexagon_bottom_left); 
						hexagon_bottom_left.classList.add("hexagon-bottom-left");
						
						var hexagon_bottom_right = document.createElement("DIV");
						hexagon_bottom_row.appendChild(hexagon_bottom_right); 
						hexagon_bottom_right.classList.add("hexagon-bottom-right");
				
				

				document.getElementById(column).appendChild(hexagon);  
				
				//Zählt die Sechsecke je Reihe und weißt ihn Nummern zu
				if(column == "column-3") {
					column_3_Count ++; 
					hexagon.id = "column-3_"+column_3_Count;
				}
				if(column == "column-4") {
					column_4_Count ++;
					hexagon.id = "column-4_"+column_4_Count;
				}
				if(column == "column-5") {
					column_5_Count ++;
					hexagon.id = "column-5_"+column_5_Count;
				}
				if(column == "column-4-0") {
					column_4_0_Count ++;
					hexagon.id = "column-4-0_"+column_4_0_Count;
				}
				if(column == "column-3-0") {
					column_3_0_Count ++;
					hexagon.id = "column-3-0_"+column_3_0_Count;
				}	
				
				
				hexagon.addEventListener("click", ()=> 
				{
					let id = hexagon.id;

					if(Boolean(buyHouseM)) {
						buildHouse(id)
					}
					if(Boolean(buyLandM)) {
						buyLand(id)
					}
					if(Boolean(buyForesterM)) {
						buyForest(id)
					}
					if(Boolean(buyQuarryM)) {
						buyQuarry(id)
					}
					 if(Boolean(buyWonderM)) {
						buyWonder(id)
					}
				}) ;
				

				
				
				
				
			}


			function constructHouse(posHouse) {
				
				
				
			//Haus wird konstruiert   
			var house = document.createElement("DIV");                 


				var front = document.createElement("DIV");
				house.appendChild(front);  

					var roof = document.createElement("SPAN");
					front.appendChild(roof); 
					
					var triangle = document.createElement("SPAN");
					front.appendChild(triangle); 
					
					var sidewall = document.createElement("SPAN");
					front.appendChild(sidewall); 
					
					var wall = document.createElement("DIV");
					front.appendChild(wall);  
					
						var top_window = document.createElement("SPAN");
						wall.appendChild(top_window);
						
						var middle_window = document.createElement("SPAN");
						wall.appendChild(middle_window);
						
						var door = document.createElement("SPAN");
						wall.appendChild(door);
						
				var garage = document.createElement("DIV");
				house.appendChild(garage);
					
					var roofGarage = document.createElement("SPAN");
					garage.appendChild(roofGarage);
					
					var triangleGarage = document.createElement("SPAN");
					garage.appendChild(triangleGarage);
					
					var sidewallGarage = document.createElement("SPAN");
					garage.appendChild(sidewallGarage);
					
					var wallGarage = document.createElement("DIV");
					garage.appendChild(wallGarage);


				//Hausbauteile bekommen ihre IDs
				house.id = "house";
				
				front.id = "front";
				roof.classList.add("roof");
				triangle.classList.add("triangle");
				sidewall.classList.add("sidewall");
				
				wall.classList.add("wall");
				top_window.id = "top-window";
				middle_window.id = "middle-window";
				door.id = "door";
				
				garage.id = "garage";
				roofGarage.classList.add("roof");
				triangleGarage.classList.add("triangle");
				sidewallGarage.classList.add("sidewall");
				wallGarage.classList.add("wall");
				
				document.getElementById(posHouse).appendChild(house);
				
				house.style.transform = "translateY(-140px)";
			}




			//Spiel Logik


			function buildHouse(housePos) {
				buyAmount = document.getElementById("buyAmount").value //buyAmount wird bei Ausführung d. F. immer neu geladen
				
				if(!buyAmount) //kein Wert im Input => * 1
				{
					buyAmount = 1
				}
				
				if(gold >= 100 * buyAmount && wood >= 50 * buyAmount && stone >= 20 * buyAmount && buyAmount > 0)
				{
					gold -= 100 * buyAmount
					wood -= 50 * buyAmount
					stone -= 20 * buyAmount
					popCap += 4 * buyAmount
				
					constructHouse(housePos)
					
					for (let i = 0 ; i < buyAmount; i++) {//pro gebautes Objekt vergeht eine Runde
						endTurn();
					}
				}
				
				updateStats()
			}

			function buyLand(pos) {
				buyAmount = document.getElementById("buyAmount").value
				
				if(!buyAmount) //kein Wert im Input => * 1
				{
					buyAmount = 1
				}
				if(gold >= 20 * buyAmount && buyAmount > 0) {
					land += 1 * buyAmount
					foodModifier += 1 * buyAmount
					gold -= 20 * buyAmount
					
					convertIntoLand(pos);
					
					for (let i = 0 ; i < buyAmount; i++) {//pro gebautes Objekt vergeht eine Runde
						endTurn();
					}
				}
				else {
					document.getElementById("recentEvents").innerHTML += "Not enough Money! \n"
				}
				
				updateStats()
			}

			function buyForest(pos) {
				buyAmount = document.getElementById("buyAmount").value
				
				if(!buyAmount) //kein Wert im Input => * 1
				{
					buyAmount = 1
				}
				if(gold >= 20 * buyAmount && buyAmount > 0) {
					forest += 1 * buyAmount
					woodModifier += 0.3 * buyAmount
					gold -= 20 * buyAmount
					
					convertIntoForest(pos);
					
					for (let i = 0 ; i < buyAmount; i++) {//pro gebautes Objekt vergeht eine Runde
						endTurn();
					}
				}
				else {
					document.getElementById("recentEvents").innerHTML += "Not enough Money! \n"
				}
				
				updateStats()
			}

			function buyQuarry(pos) {
				buyAmount = document.getElementById("buyAmount").value
				
				if(!buyAmount) //kein Wert im Input => * 1
				{
					buyAmount = 1
				}
				if(gold >= 200 * buyAmount && buyAmount > 0) {
					quarry += 1 * buyAmount
					stoneModifier += 0.1 * buyAmount
					gold -= 200 * buyAmount
					
					convertIntoQuarry(pos);
					
					for (let i = 0 ; i < buyAmount; i++) {//pro gebautes Objekt vergeht eine Runde
						endTurn();
					}
				}
				else {
					document.getElementById("recentEvents").innerHTML += "Not enough Money! \n"
				}
				
				updateStats()
			}
			
			function buyWonder(pos) {
				buyAmount = document.getElementById("buyAmount").value
				
				if(!buyAmount) //kein Wert im Input => * 1
				{
					buyAmount = 1
				}
				if( population >= 1000 * buyAmount && gold >= 1000 * buyAmount && food >= 1000 * buyAmount && wood >= 1000 * buyAmount && stone >= 1000 * buyAmount && buyAmount > 0) { //Konstruier-Kosten: 1000 Bevölkerung, Gold, Essen, Holz und Stein
					wonder += 1 * buyAmount
					gold -= 1000 * buyAmount
					food -= 1000 * buyAmount
					wood -= 1000 * buyAmount
					stone -= 1000 * buyAmount
					goldModifier += 100 * buyAmount
					foodModifier += 100 *buyAmount
					woodModifier += 30 * buyAmount
					stoneModifier += 20 * buyAmount
					popCap += 1000 * buyAmount
					
					convertIntoWonder(pos);
					
					for (let i = 0 ; i < buyAmount; i++) {//pro gebautes Objekt vergeht eine Runde
						endTurn();
					}
				}
				else {
					document.getElementById("recentEvents").innerHTML += "Not enough Money! \n"
				}
				
				updateStats()
			}

			function endTurn() { 
				turn++
				
				collectResources() //Berechne die Resourcen Veränderung
				updateStats()      //Lade alle Labels neu (sichtbare Resourcenwerte)
				checkWin()	
				
				document.getElementById("recentEvents").innerHTML = "" //eventLog wird gecleart
			}

			function collectResources() {
				gold += goldModifier
				food += foodModifier
				wood += woodModifier
				stone += stoneModifier
				if(population < popCap) {
					population += populationModifier
					foodModifier = -population + land //Population verkleinert den Nahrungsertrag, Felder erhöhen ihn
					goldModifier += populationModifier
				}
				if(food < 1) {
					
					document.getElementById("recentEvents").innerHTML = "Your People are starving! \n"
					
					if(population > 0){
						population--	 
					}
					
					populationModifier = 0
					food = 0
					
					
					
					if(population == 0) {
						//GAME OVER!
				
						alert("All of your people are in the ground! You lost.")
					}
				}
				if(food > 0)
				{
					populationModifier = 1 + Math.floor(population/10)
					}
			}

			function updateStats() {
				//Updatet die Resourcenanzeige
				//Resourcen
				goldLabel.innerHTML = gold+" "+"("+goldModifier+")";
				foodLabel.innerHTML = food+" "+"("+foodModifier+")";
				woodLabel.innerHTML = Math.round(wood * 100) / 100 +" "+"("+ Math.round(woodModifier * 100) / 100+")"; //rundet auf zwei Dezimalstellen
				stoneLabel.innerHTML = Math.round(stone * 100) / 100 +" "+"("+Math.round(stoneModifier * 100) / 100+")";
				//Stats
				populationLabel.innerHTML = population+"/"+popCap+" ";
				turnLabel.innerHTML = "Year: " + turn+" ";

				//console.log(" buyHouse: "+Boolean(buyHouseM)+"\n" +" buyLand: "+Boolean(buyLandM)+"\n"+" buyForester: "+Boolean(buyForesterM)+"\n"+" buyQuarry: "+Boolean(buyQuarryM)+"\n"+" buyWonder: "+Boolean(buyWonderM))
			}

			function checkWin() {
				if(wonder === 1) {
					alert("Ihr seid Siegreich Mylord!")
					
					wonder++
				}
			}
			

			function buyHouseMode() {
				buyHouseM = true
				buyLandM = false
				buyForesterM = false
				buyQuarryM = false
				buyWonderM = false
			}

			function buyLandMode() {
				buyHouseM = false
				buyLandM = true
				buyForesterM = false
				buyQuarryM = false
				buyWonderM = false
			}

			function buyForesterMode() {
				buyHouseM = false
				buyLandM = false
				buyForesterM = true
				buyQuarryM = false
				buyWonderM = false
			}

			function buyQuarryMode() {
				buyHouseM = false
				buyLandM = false
				buyForesterM = false
				buyQuarryM = true
				buyWonderM = false
			}

			function buyWonderMode() {
				buyHouseM = false
				buyLandM = false
				buyForesterM = false
				buyQuarryM = false
				buyWonderM = true
			}