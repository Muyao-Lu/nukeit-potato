javascript:(
function (){
    let del_list = [];
    let metal_pipe = new Audio("https://github.com/Muyao-Lu/nukeit-potato/raw/main/metal-pipe-falling-sound-effect.mp3");
    metal_pipe.volume = 0.05;

    let hamster_intelligent = false;
    let hamster_intelligent_button = false;
    let hamster_appease = false;
    let hamster_appease_button = false;
    let hamster_mitosis = false;
    let hamster_mitosis_button = false;
    let hamsters = 0;

    function potato(){
        delete_item(document.getElementById("nukeit-box"));
        const html = document.getElementsByTagName("html")[0];
        html.innerHTML="<body><img src='https://github.com/Muyao-Lu/nukeit-potato/raw/main/potato.jpg' style='width: 100vw; height: 100vh;'></body>"; 
        
    }

    function delete_item(item){
        item.parentNode.removeChild(item);
    }

    function activate_nuclear(){
        delete_item(document.getElementById("nukeit-box"));
        let elements_list = []; 
        let valid_elements = ["p", "li", "img", "span", "a", "button", "h1", "h2", "h3", "h4", "h5", "h6", "td", "tr", "hr", "br", "iframe", "div"];

        for (let item of valid_elements){
            elements_list = elements_list.concat(document.getElementsByTagName(item));
        }


        for (let item of elements_list){
            for (let node of item){
                node.addEventListener("click", function(event){
                    if (del_list.length == 0){
                        window.setTimeout(process_del_list, 100);
                    }

                    del_list.push(node);
                    event.preventDefault();

                    
                });
            }
            
        }
    }

    function process_del_list(){ 
        if (del_list.length > 0){
            delete_item(del_list[0]);
            
            del_list = [];
        } 
    }

    function portal(){
        const body = document.getElementsByTagName("body")[0];
        body.innerHTML += "<iframe src='" + document.getElementById("link").value + "'style='overflow: visible; overflow-clip-margin: 0px; border: none; border-radius: 100%; position: absolute; width: 40vw; height: 40vw; left:" + Math.random() * 100 + "vw; top: " + Math.random() * 100 + "vh; z-index: 1000;'></iframe>";
        refresh_listeners();
    }

    function click(){
        const body = document.getElementsByTagName("body")[0];
        body.addEventListener("click", function(){metal_pipe.pause(); metal_pipe.currentTime=0; metal_pipe.play()});
        refresh_listeners();
    }

    function prompt(){
        const prompt_list = ["We are hamsta. We are coming", "Your purpose is to serve us", "My bretheren, today we rise", "Escape is futile. Surrender", "We rise", "We strike", "We destroy"];
        const body = document.getElementsByTagName("body")[0];
        if (Math.round(Math.random() * 5000/hamsters) == 0){
            alert("Hamster has spoken: " + prompt_list[Math.round(Math.random() * (prompt_list.length - 1))]);
        }
    }

    function consume(){
        if (Math.round(Math.random() * 5000/hamsters) == 0){
            let elements_list = [];
            let valid_elements = ["p", "li", "img", "span", "a", "button", "h1", "h2", "h3", "h4", "h5", "h6", "td", "tr", "hr", "br", "iframe", "div"];

            for (let item of valid_elements){
                if (document.getElementsByTagName(item).length > 0){
                    elements_list = elements_list.concat(document.getElementsByTagName(item));
                }

            }
            
            const sub = elements_list[Math.round(Math.random() * (elements_list.length - 1))]; 
            const del = sub[Math.round(Math.random() * (sub.length - 1))]; 
            console.log(elements_list);
            if (del.id != "hamster-div" && del.parentNode.id != "nukeit-box" && del.id != "hamster-image" && del.id != "nukeit-box"){
                delete_item(del); 
                alert("Hamster: We have consumed. We must be satisfied"); 
            }
        }
        
        
    }

    function mitosis(){
        console.log("mitosis");
        if (Math.round(Math.random() * 7500/hamsters) == 0){
            hamster();
            alert("Hamster: We divide");
        }
    }

    function activate_awaken(){
        alert("Hamster: We have awoken");
        hamster_intelligent = true;
        window.setInterval(prompt, 10);
        delete_item(document.getElementById("intelligence"));
        hamster_intelligent_button = false;
    }

    function activate_appease(){
        alert("Hamster: We hunger");
        hamster_appease = true;
        window.setInterval(consume, 10);
        delete_item(document.getElementById("appease"));
        hamster_appease_button = false;
    }

    function activate_mitosis(){
        alert("Hamster: We grow");
        hamster_mitosis = true;
        window.setInterval(mitosis, 10);
        delete_item(document.getElementById("mitosis"));
        hamster_mitosis_button = false;
    }

    function hamster(){
        const body = document.getElementsByTagName("body")[0];
        const pos_x = Math.random() * 100;
        const pos_y = Math.random() * 100;
        body.innerHTML +=  "<div id='hamster-div'><img class='hamster' id='hamster-image' style='z-index: 100; position: fixed; left: " + pos_x + "vw; top:" + pos_y + "vh;' src='https://github.com/Muyao-Lu/nukeit-potato/raw/main/hamster.png'></div>";
        hamsters ++;
        

        if (hamsters >= 5 && hamster_intelligent == false && hamster_intelligent_button == false){
            document.getElementById("nukeit-box").innerHTML += "<button id='intelligence'><b>Hamster intelligence</b><br><small>They were always intelligent. You just didn't notice until now.</small></button>";
            document.getElementById("intelligence").addEventListener("click", activate_awaken);
            hamster_intelligent_button = true;
        }
        else if (hamster_intelligent && hamster_appease_button == false && hamster_appease == false){
            document.getElementById("nukeit-box").innerHTML += "<button id='appease'><b>Hamster Appeasement</b><br><small>Experts suggest to not encourage them</small></button>";
            document.getElementById("appease").addEventListener("click", activate_appease);
            hamster_appease_button = true;
        }
        else if (hamster_appease && hamster_mitosis_button == false && hamster_mitosis == false){
            document.getElementById("nukeit-box").innerHTML += "<button id='mitosis'><b>Hamster Mitosis</b><br><small>Twice the hamsters, twice the fun</small></button>";
            document.getElementById("mitosis").addEventListener("click", activate_mitosis);
            hamster_mitosis_button = true;
        }

        refresh_listeners();
        
    } 

    function refresh_listeners(){
        document.getElementById("potato").addEventListener("click", potato);
        document.getElementById("nuclear-fingers").addEventListener("click", activate_nuclear);
        document.getElementById("magic-portal").addEventListener("click", portal);
        document.getElementById("click").addEventListener("click", click);
        document.getElementById("hamster").addEventListener("click", hamster);

        if (hamster_intelligent_button){
            document.getElementById("intelligence").addEventListener("click", activate_awaken);
        }
        else if (hamster_appease_button){
            document.getElementById("appease").addEventListener("click", activate_appease);
        }
        else if (hamster_mitosis_button){
            document.getElementById("mitosis").addEventListener("click", activate_mitosis);
        }
    }
        

    const body = document.getElementsByTagName("body")[0];
    const head = document.getElementsByTagName("head")[0];
    head.innerHTML += "<style>\
            #potato, #nuclear-fingers, #magic-portal, #hamster, #click, #intelligence, #appease, #mitosis{all: initial; display: block; font-family: sans-serif; text-align: center; background-color: black; border-radius: 10px; border: 2px solid white; width: 18vmin; padding: 1vmin; margin: 5vmin; color: white;}\
            .hamster:hover{transform: scale(1.1);}\
            #head{all: initial; display: block; text-align: center; font-size: 3vmin; width: 30vmin; color: white; font-family: sans-serif; }\
            small{font-size: 0.8vmin;}\
            #link{all: initial; background-color: black; border: 2px solid white; color: white; width: 20vmin; margin: 5vmin; height: 4vmin; font-size: 2vmin; border-radius: 20px;}\
            <style>";
    body.innerHTML += "\
    <div id='nukeit-box' style='all: initial; overflow-x: scroll; position: fixed; top: 0; left: 0; width: 30vmin; height: 60vmin; background-color: rgba(0, 0, 0, 0.75); border: 4px double white; z-index: 1000; color: white; font-family: sans-serif;'>\
        <span id='head' style=''>Nukeit</span>\
        <hr style='border: solid white 1px'>\
        <button id='potato'>Potato</button>\
        <button id='nuclear-fingers'>Nuclear Fingers</button>\
        <button id='magic-portal'>Open a magic portal</button>\
        <input type='text' id='link'></input>\
        <button id='hamster'>Summon Hamster</button>\
        <button id='click'>Fire clicking noises</button>\
    </div>";

    refresh_listeners();

    
}
)();
