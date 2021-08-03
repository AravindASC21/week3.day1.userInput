let title_input = document.getElementById("title_input");
let main_title = document.getElementById("main_title");

title_input.addEventListener("keyup", typingEvent);
function typingEvent(event)
{
    main_title.innerText = title_input.value;
}

let button = document.getElementById("submit_button");
button.addEventListener("click", clickListener);

function clickListener(event)
{
    event.preventDefault();
    let title_input = document.getElementById("title_input");
    let noun_input = document.getElementById("noun");
    let verb_input = document.getElementById("verb");
    let adjective_input = document.getElementById("adjective");

    let form = title_input.value.length > 0 && noun_input.value.length > 0 &&  verb_input.value.length > 0 && adjective_input.value.length > 0;
    
    if(form){
        let story = `Last night I ate a ${noun_input.value}, and today I just had to ${verb_input.value}. What a ${adjective_input.value} day!`
        let result = document.getElementById("story_result");
        result.innerText = story;
        document.getElementsByClassName("form_container")[0].style.display = "none";
    }
    else
    {
        alert("Please fill in all fields");
    }
}