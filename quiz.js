$(document).ready(function(){
    correct = ["Hans Cristian Andersen", "2", "mirror", "Grandmother", "pumpkin"];
    
    questions = ["Who is the author of the tale 'Little Mermaid'?", 
    "How many step-sisters does Cinderella have?",
     "Which of the following objects are NOT poisoned in the Snow White?", 
     "To the house of which relative does Little Red Riding Hood travel?", 
     "Which vegetable serves as a carriage to the Cinderella?"]
    
     choice_options = [["Charles Perrault", "Italo Calvino", "Hans Christian Andersen", "Brothers Grimm"], 
    ["1", "2", "3", "4"], 
    ["apple", "comb", "lace", "mirror"], 
    ["Mother", "Father", "Grandmother", "Grandfather"], 
    ["pumpkin", "cabbage", "carrot", "potato"]]
    
    
    quizBox = $("#quiz-box");
    
    quizBox.append ("<div class='question'>"); 
    $('.question').append ("<p class='d'> 1. Who is the author of the tale 'Little Mermaid'?</p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Charles Perrault</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Italo Calvino</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Hans Christian Andersen</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Brothers Grimm</label>")
    $('.question').append ("<p class='d'> 2.  How many step-sisters does Cinderella have?</p>");
    $('.question').append ("<label><input type='radio' name='q2' value='a'>1</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>2</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>3</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>4</label>")
    $('.question').append ("<p class='d'> 3. Which of the following objects are NOT poisoned in the Snow White?</p>");
    $('.question').append ("<label><input type='radio' name='q3' value='a'>apple</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>comb</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>lace</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>mirror</label>")
    $('.question').append ("<p class='d'> 4. To the house of which relative does Little Red Riding Hood travel?</p>");
    $('.question').append ("<label><input type='radio' name='q4' value='a'>Mother</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>Father</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>Grandmother</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>Grandfather</label>")
    $('.question').append ("<p class='d'> 5. Which vegetable serves as a carriage to the Cinderella?</p>");
    $('.question').append ("<label><input type='radio' name='q5' value='a'>pumpkin</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>cabbage</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>carrot</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>potato</label>")
    
    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && correct [0] == choice){
                     countCorrect += 1;
                }
         })
         $("input[name=q2]").each (function (index){
            choice = $(this).parent().text(); 
            if ($( this ).prop("checked") == true && correct [1] == choice){
                 countCorrect += 1;
            }
        })

        $("input[name=q3]").each (function (index){
            choice = $(this).parent().text(); 
            if ($( this ).prop("checked") == true && correct [2] == choice){
                 countCorrect += 1;
            }
        })

        $("input[name=q4]").each (function (index){
            choice = $(this).parent().text(); 
            if ($( this ).prop("checked") == true && correct [3] == choice){
                 countCorrect += 1;
            }
        })

        $("input[name=q5]").each (function (index){
            choice = $(this).parent().text(); 
            if ($( this ).prop("checked") == true && correct [4] == choice){
                 countCorrect += 1;
            }
        })
        $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    }); 
    
});
