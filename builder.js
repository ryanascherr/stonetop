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
        $("#background-name-one").text("");
        $("#background-description-one").html("");
        $("#background-name-two").text("");
        $("#background-description-two").html("");
        $("#background-name-three").text("");
        $("#background-description-three").html("");
    }

    if (playbook === "heavy") {
        $("#background-name-one").text("");
        $("#background-description-one").html("");
        $("#background-name-two").text("");
        $("#background-description-two").html("");
        $("#background-name-three").text("");
        $("#background-description-three").html("");
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