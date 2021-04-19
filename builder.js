const createCharacterBtn = $("#create-character-btn");
const selectCharacterBtn = $("#select-character-btn");
const classSelectBtn = document.querySelectorAll(".class-select-btn");
let playbook;

createCharacterBtn.click(function(){
    $("#class-selection-container").removeClass("hidden");
})

$("#class-card-container").click(function(event){

    let element = event.target;

    if (element.matches(".class-select-btn")) {
        $("#class-selection-container").addClass("hidden");
        $("#background-selector-container").removeClass("hidden");
        playbook = element.getAttribute("data-playbook");
    }

    if (playbook === "blessed") {
        $("#background-name-one").text("Initiate");
        $("#background-description-one").html("<p>Stonetop has long been home to a sacred order, keepers of the old ways and speakers for Danu. You are one such initiate, the most gifted in generations. You gain the Rites of the Land move.</p><p>There are other initiates in Stonetop, serving the goddess and the village. They aid you as followers—see the Initiates of Danu insert. Who are they? Choose 2 or 3:</p><ul><li><b>Enfys</b>, your acolyte, beloved by birds</li><li><b>Afon</b>, strange and fae-touched</li><li><b>Gwendyl</b>, your mentor, a talented healer</li><li><b>Olwin</b>, your anointed lover, seer of fates</li><li><b>Seren the Eldest</b>, wise and hard as winter</li></ul>");
        $("#background-name-two").text("Raised by Wolves");
        $("#background-description-two").html("<p>Maybe not by <i>wolves</i>, but you grew up in the wild. Beasts of land and air were your siblings. Th e sighing wind taught you language. Th e trees and rocks were your home. Were you one of the Forest Folk? Abandoned or orphaned? Lured into the Wood?</p><p>Regardless, you get the Trackless Step move. Also, when you <b><i>Forage</i></b>, you have advantage.</p><p>For some reason, you’ve made yourself known to Stonetop and perhaps you even call it home. But the ways of humans are still strange to you. Once per session, <b><i>when your wild ways off end or alienate you from someone</i></b>, mark XP.</p>");
        $("#background-name-three").text("Vessel");
        $("#background-description-three").html("<p>A seed of Danu’s power has taken root in your soul. Perhaps it has always been there and only recently sprouted. Or maybe it was planted in you during some portentous event.</p><p>Regardless, your dreams have been haunted by strange markings and symbols. You feel the mystic power in plants, stones, and soil. And you’ve felt the growing wrath of the Earth Mother as foul things begin to move about. Take the Danu’s Grasp move.</p><p>Danu’s power flows through you, but at great cost. When you <b><i>would spend 1 Stock from your sacred pouch</i></b>, you may choose to lose 2d4 HP instead.");
    }

    if (playbook === "fox") {
        $("#background-name-one").text("The Natural");
        $("#background-description-one").html("<p>You grew up around here, and always picked things up quickly. Reading and numbers, sure, but more. Hide and seek. Throwing stones. Climbing. Fighting. Whatever you tried, you were good at it. As good as anyone else, if not better.</p><p>Sure, you’ve got a reputation for bending the rules. Playing dirty. But why play if you don’t play to win, right? And who do they come to when there’s a problem needs solving? You, that’s who.</p><p>When you <b><i>Seek Insight</i></b>, you may roll +INT instead +WIS and add “What opportunity does no one else see?” to the list of possible questions.");
        $("#background-name-two").text("A Life of Crime");
        $("#background-description-two").html("<p>You’re new to Stonetop, having left behind a...<i>colorful</i> past. How did you get into that life? Why and how did you get out? Who and what did you leave behind?</p><p>Regardless, these people have taken you in. Time to lead an honest life, right?</p><p>You start with either Burgle or Light Fingers (your choice) as an extra move, and either burglar tools or a hidden stash (your choice) as an additional special possession.");
        $("#background-name-three").text("The Prodigal Returned");
        $("#background-description-three").html("<p>You left long ago, travelling far and living by your wits. Why did you leave? What deeds do you boast of, and which do you regret?</p><p>You always longed to return to Stonetop, and return you have. You’re a bit of a celebrity now, and you’ve got friends (or close enough) strewn about the known world.</p><p>When you <b><i>declare that you know someone outside of Stonetop</i></b>, someone who can help, name them and roll +CHA: on a 10+, yeah, they can help (tell us why they’re willing); on a 7-9, they can help but pick 1 from the list below; on a 6-, the GM chooses 1 and then some.</p><ul><li>They still hold a grudge</li><li>They're going to need something from you first</li><li>They swore off this sort of thing long ago</li><li>You can't exactly, y'know, trust them</li></ul>");
    }

    if (playbook === "heavy") {
        $("#background-name-one").text("Sheriff");
        $("#background-description-one").html("<p>You keep order in Stonetop and protect it from outside threats. It might not be anything official, but everyone knows you’ve got a cool head and the weight to back up your words.</p><p>When you <b><i>bark an order or warning</i></b>, roll +CHA: <b>on a 7+</b>, they must choose 1:</p><ul><li>Do what you say</li><li>Dig in/take cover/flee</li><li>Attack you</li></ul><p><b>On a 10+</b>, you can tell which one they’re going to do and do something first; gain advantage if you do.");
        $("#background-name-two").text("Blood-Soaked Past");
        $("#background-description-two").html("<p>You left behind a life of violence and a name mothers used to scare their children. For whatever reason, the people of Stonetop took you (back?) in and treat you like one of their own.</p><p>When you <b><i>Persuade using violence or threats against someone who knows your black reputation</i></b>, you can roll +STR instead of +CHA. Also, if you take the Formidable move, you can choose to roll +CON instead of +CHA.</p><p>When you <b><i>fight to kill without mercy or hesitation</i></b>, you deal +1d4 damage.");
        $("#background-name-three").text("Storm-Marked");
        $("#background-description-three").html("<p>You’ve been touched by Tor (Rainmaker, Thunderhead, Slayer-of-Beasts!) and bear runic markings similar to those etched into the Stone. When did the marks manifest? Are they a symbol of your strength, speed, and courage? Or their source?</p><p>You start with the Storm Markings major arcanum. Mark one of the boxes on the front of the Storm Markings sheet, and describe here the time you were struck by lightning and walked away unharmed.</p>");
    }

    if (playbook === "judge") {
        $("#background-name-one").text("");
        $("#background-description-one").html("");
        $("#background-name-two").text("");
        $("#background-description-two").html("");
        $("#background-name-three").text("");
        $("#background-description-three").html("");
    }

    if (playbook === "lightbearer") {
        $("#background-name-one").text("");
        $("#background-description-one").html("");
        $("#background-name-two").text("");
        $("#background-description-two").html("");
        $("#background-name-three").text("");
        $("#background-description-three").html("");
    }

    if (playbook === "marshal") {
        $("#background-name-one").text("");
        $("#background-description-one").html("");
        $("#background-name-two").text("");
        $("#background-description-two").html("");
        $("#background-name-three").text("");
        $("#background-description-three").html("");
    }

    if (playbook === "ranger") {
        $("#background-name-one").text("");
        $("#background-description-one").html("");
        $("#background-name-two").text("");
        $("#background-description-two").html("");
        $("#background-name-three").text("");
        $("#background-description-three").html("");
    }

    if (playbook === "seeker") {
        $("#background-name-one").text("");
        $("#background-description-one").html("");
        $("#background-name-two").text("");
        $("#background-description-two").html("");
        $("#background-name-three").text("");
        $("#background-description-three").html("");
    }

    if (playbook === "would-be-hero") {
        $("#background-name-one").text("");
        $("#background-description-one").html("");
        $("#background-name-two").text("");
        $("#background-description-two").html("");
        $("#background-name-three").text("");
        $("#background-description-three").html("");
    }
})

$("#backgroun-card-container").click(function(event){
    
    let element = event.target;

})