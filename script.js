let quest = document.getElementById("question"),
    bigBtn = document.getElementById("big"),
    guessBtn = document.getElementById("guessed"),
    smallBtn = document.getElementById("small"),
    resetBtn = document.getElementById("reset"),
    stageCount = document.getElementById("stage");

let min = 0,
    max = 101,
    stage = 1;

let middle = Math.floor((min + max)/2);

function start() {
  document.getElementById('startText').classList.add("notVis");
  document.getElementById('startBtn').classList.add("notVis");

  quest.classList.remove("notVis");
  quest.innerHTML = "Попытка " + stage + ": " + middle;
  
  smallBtn.classList.remove("notVis");
  guessBtn.classList.remove("notVis");
  bigBtn.classList.remove("notVis");
}

function small() {
  max = middle;
  
  middle = Math.floor((min + max)/2);
  
  if (max == middle) {
    middle -= 1;
  }
  
  checkGame();
}

function big() {
  min = middle;
  
  middle = Math.floor((min + max)/2);
  
  if (min == middle) {
    middle += 1;
  }
  
  checkGame();
}

function guessed() {
	max = middle;
	min = middle;
  
	checkGame();
}

function checkGame() {
  		
		if (min == max){
		 	quest.innerHTML = "Вы загадали число " + min;
      stageCount.innerHTML = "Попыток использовано: " + "<span class=stage>" + stage + "</span>";
      
      stageCount.classList.remove("notVis");
			smallBtn.classList.add("notVis");
			guessBtn.classList.add("notVis");
			bigBtn.classList.add("notVis");
      resetBtn.classList.remove("notVis");

		 	return;
		}

		stage += 1;

		quest.innerHTML = "Попытка " + stage + ": " + middle;
}

function resetPage() {
    location.reload();
}
