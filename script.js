$(document).ready(function () {
    $("#submit").click(function () {
        var answer = document.getElementById('answer').value;
        var correct="congrats on your first cipher";  
        var result;
        var i=0;
        if (answer.length != correct.length) {
        		result=false;
            
        } 
        else{
        
				while(i<answer.length){
    				if (answer.charAt(i)==correct.charAt(i)){
            	result=true;
              i++;
            }
            else{
            	result=false;
              break;
            }
            
				}
        }
        if (result==true){
        alert("good job!");
        
        }
        else{
        alert("Incorrect,try again!");
        }
        
    });
     $("#vignere").click(function () {
        var answer = document.getElementById('answer').value;
        var correct="i think youre set with the alphabet";  
        var result;
        var i=0;
        if (answer.length != correct.length) {
        		result=false;
            
        } 
        else{
        
				while(i<answer.length){
    				if (answer.charAt(i)==correct.charAt(i)){
            	result=true;
              i++;
            }
            else{
            	result=false;
              break;
            }
            
				}
        }
        if (result==true){
        alert("good job!");
        
        }
        else{
        alert("Incorrect,try again!");
        }
        
    });
   $("#binary").click(function () {
        var answer = document.getElementById('answer').value;
        var correct="00010100"
        var result;
        var i=0;
        if (answer.length != correct.length) {
        		result=false;
            
        } 
        else{
        
				while(i<answer.length){
    				if (answer.charAt(i)==correct.charAt(i)){
            	result=true;
              i++;
            }
            else{
            	result=false;
              break;
            }
            
				}
        }
        if (result==true){
        alert("good job!");
        
        }
        else{
        alert("Incorrect,try again!");
        }
        
    });
    $("#xor").click(function () {
        var answer = document.getElementById('answer').value;
        var correct="111"
        var result;
        var i=0;
        if (answer.length != correct.length) {
        		result=false;
            
        } 
        else{
        
				while(i<answer.length){
    				if (answer.charAt(i)==correct.charAt(i)){
            	result=true;
              i++;
            }
            else{
            	result=false;
              break;
            }
            
				}
        }
        if (result==true){
        alert("good job!");
        
        }
        else{
        alert("Incorrect,try again!");
        }
        
    });
     $("#binary").click(function () {
        var answer = document.getElementById('answer').value;
        var correct="00010100"
        var result;
        var i=0;
        if (answer.length != correct.length) {
        		result=false;
            
        } 
        else{
        
				while(i<answer.length){
    				if (answer.charAt(i)==correct.charAt(i)){
            	result=true;
              i++;
            }
            else{
            	result=false;
              break;
            }
            
				}
        }
        if (result==true){
        alert("good job!");
        
        }
        else{
        alert("Incorrect,try again!");
        }
        
    });
    $("#xorChallenge").click(function () {
        var answer = document.getElementById('answer2').value;
        var correct="WOW"
        var result;
        var i=0;
        if (answer.length != correct.length) {
        		result=false;
            
        } 
        else{
        
				while(i<answer.length){
    				if (answer.charAt(i)==correct.charAt(i)){
            	   result=true;
                    i++;
                    }
            else{
            	result=false;
              break;
            }
            
				}
        }
        if (result==true){
        alert("good job!");
        
        }
        else{
        alert(answer);
        } 
    });
     $("#DESKey").click(function () {
        var answer = document.getElementById('answer').value;
        var correct="64";
        var result;
        var i=0;
        if (answer.length != correct.length) {
        		result=false;
            
        } 
        else{
        
				while(i<answer.length){
    				if (answer.charAt(i)==correct.charAt(i)){
            	result=true;
              i++;
            }
            else{
            	result=false;
              break;
            }
            
				}
        }
        if (result==true){
        alert("good job!");
        
        }
        else{
        alert("Incorrect,try again!");
        }
        
    });
});
