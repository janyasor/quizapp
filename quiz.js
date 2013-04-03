var allQuestions = [
    {question1: "1. You see a girl waiting at the bus stop. She is exactly your type. How do you get her number?", options:
    ["You walk right up to her, strike up a conversation, and ask for her number", "You wait a few days until you get the courage to go and talk to her",
    "You tell one of your mutual friends that you like her", "You wait for her to come to you"]},
    {question2: "2. You guys decide to go out on a date. Where do you decide to take her?", options:
    ["You take her out for a short coffee and talk about life and relationships", "You take her out on a creative date and ask her questions about her life and you respond in kind, tried-and-true interview-style",
    "You take her out to a nice restaurant and dress in your best clothes. You ask the same questions as above", "You take her to the best restaurant and hope that your clothes does most of the talking. If not, you've got great stories to tell up your sleeves"]},
    {question3: "3. You think you had a great first date. What do you do between now and your second date?", options:
    ["You send her a text telling her you'll have out again soon. No big deal. Another date with another girl, coming up!", "You send her a text telling her how much fun you had and can't wait for the next date.",
    "In addition to doing above, you call her and ask her how she thinks the date went and when/where the next date is", "In addition to doing above, you think about how lucky you are for finally finding an amazing girl. You hope to start a relationship ASAP"]},
    {question4: "4. Crap! You just remembered you have a huge project due this Friday. This might be a problem. How many dates do you have this week?", options:
    ["More than 5. You're going to have to cancel one of them.", "You have a few dates in the pipeline, just testing the waters. You can still make the dates",
    "You have one date because you're a one woman kind of guy", "You have one date. You don't date much, in general."]},
    {question5: "5. Finally, how spontaneous are you?", options:
    ["YOLO is your middle name. Your amusement > all else", "You may not be the most wild or crazy person, but you are definitely down for good times",
    "You like to have fun as much as the next guy, as long as things don't get too out of hand", "I like to plan ahead, no matter what the situation, work or play"]}
];

$(document).ready(function(){
    answers = new Object();
    $('.option').change(function(){
        var answer = ($(this).attr('value'));
        var question = ($(this).attr('name'));
        answers[question] = answer;
    });

    var totalQuestions = $('.questions').size();
    var currentQuestion = 0;
    var totalScore = $("input[type='text'][name='sum']");
    $questions = $('.questions');
    $questions.hide();
    $totalScore = totalScore;
    $totalScore.hide();
    $($questions.get(currentQuestion)).fadeIn();
    $('#next').click(function(){
        $($questions.get(currentQuestion)).fadeOut(function(){
            currentQuestion = currentQuestion + 1;
            if(currentQuestion == totalQuestions){
                $('#next').hide();
                result = $("#final").val();
                //Takes total points and assigns it to the result;
                $('h2').append("Your final score: "+result+' <br/>');
            }else{
                $($questions.get(currentQuestion)).fadeIn();
            }
        });

    });
    $('#back').click(function(){
        $($questions.get(currentQuestion)).fadeIn(function(){
            $($questions.get(currentQuestion)).hide();
            currentQuestion = currentQuestion - 1;
            $($questions.get(currentQuestion)).fadeIn();

        });
    });
});


function calcScore(){
    var score = 0;
    $(".option:checked").each(function(){
        score+=parseInt($(this).val(),"value");
    });
    $("input[name=sum]").val(score);

}

$().ready(function(){
    $(".option").change(function(){
        calcScore();
    });
});