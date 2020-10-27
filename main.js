$(document).ready(function () {

	var move = 1;
	var play = true;
	var scorex=0;
	var scoreo=0;


	$("#board tr td").click(function () {
		if ($(this).text() == "" && play) {
			if ((move % 2) == 1) {
				$(this).append("X");
				$(this).css('color', "#61892f");
				
			} else {
				$(this).append("O");
				$(this).css('color', "#e85a4f");
			}
			move++;
			if (checkForWinner() != "") {
				if (checkForWinner() == "X") {
					$('body').append('<div class="winner"><span>Winner</span>X</div><button id="reload">Play Again</button>');
					$('.winner').css('background-color', '#79ad3a');
					$('#reload').css('color','#79ad3a');
					scorex++;
					$('.sx').text(scorex);
					play=false;
				} else if(checkForWinner()=="O"){
					$('body').append('<div class="winner"><span>Winner</span>O</div><button id="reload">Play Again</button>');
					$('.winner').css('background-color', '#39a0f5');
					$('#reload').css('color','#39a0f5');
					scoreo++;
					$('.so').text(scoreo);
					play=false;
				}
				else if(checkForWinner()==-1){
					$('body').append('<div class="winner"><span>TIE</span>No one wins</div><button id="reload">Play Again</button>');
					$('.winner').css('background-color', '#51e2f5');
					$('#reload').css('color','#51e2f5');
					play = false;
				}

				$('#reload').click(function(){
					move=1;
					play=true;
					$('#board td').empty();
					$('.winner').remove();
					$(this).remove();
		
				});
				console.log("PlayerX:"+scorex+"  "+"PlayerO:"+scoreo);
				
			}
		}
	});
	function checkForWinner() {
		var space1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
		var space2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
		var space3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
		var space4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
		var space5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
		var space6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
		var space7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
		var space8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
		var space9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
		// check rows
		
		if ((space1 == space2) && (space2 == space3)) {
			return space3;
		} else if ((space4 == space5) && (space5 == space6)) {
			return space6;
		} else if ((space7 == space8) && (space8 == space9)) {
			return space9;
		}
		// check columns
		else if ((space1 == space4) && (space4 == space7)) {
			return space7;
		} else if ((space2 == space5) && (space5 == space8)) {
			return space8;
		} else if ((space3 == space6) && (space6 == space9)) {
			return space9;
		}
		// check diagonals
		else if ((space1 == space5) && (space5 == space9)) {
			return space9;
		} else if ((space3 == space5) && (space5 == space7)) {
			return space7;
		}
		else if(move==10){
			return -1;
		}
		// no winner
		
	}

		

});
