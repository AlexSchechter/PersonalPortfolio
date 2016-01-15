$(function(){

	$("#factorialSubmit").click(function() {
		var factorial = +$("#factorialInput").val();
		if (factorial < 0 || factorial % 1) {
			alert("The number has to be non-negative and an integer, please input again")
			myReset();
			return;
		}
		$("#factorialResult").text("The factorial of the number is: " + calculateFactorial(factorial));		
	});
	
	$("#factorialReset").click(function() {
		myReset();
	});
	
})

function calculateFactorial(n){
	if	(n === 0){
		return 1;
	}
	else{
		return n*calculateFactorial(n-1);
	}
	return n;
}

function myReset() {
	$("#factorialInput").val("");
	$("#factorialResult").text("");
	return;
}