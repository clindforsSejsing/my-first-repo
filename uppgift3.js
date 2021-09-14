let goodByeButton = document.querySelector("#talkingButton");

goodByeButton.addEventListener("click",
    function (event) {

        let goodBye = document.querySelector("h1");
        goodBye.innerHTML = "GoodBye World!"
    }
    , false)