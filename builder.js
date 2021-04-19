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
        $("#background-name-one").text("Legacy");
        $("#background-description-one").html("<p>You are the latest in a long line of Judges—born here, apprenticed to the prior Judge, and charged with the passing of the mantle. The Chronicle is a rich repository of lore, but there’s no index, so good luck fi nding anything.</p><p>When you <b><i>Know Things about the people or history of Stonetop</i></b>, you have advantage.</p><p>When you <b><i>spend days, weeks, or months poring over the Chronicle</i></b>, ask the GM a question, and the GM will tell you what you learn in that time.</p>");
        $("#background-name-two").text("Missionary");
        $("#background-description-two").html("<p>You are part of a larger order of Aratis, sent to Stonetop to spread the faith and protect the flickering flame of civilization. The Chronicle is new and a work in progress; your position in town is far from certain. Add the following Judges to the Neighbors section of the Stonetop playbook:</p><ul><li>Devin (from Marshedge)</li><li>Haeris (from Gordin's Delve)</li><li>Rahat (from Lygos)</li></ul><p>When you <b><i>call upon the Judge of another steading for aid or information</i></b>, they are oath-bound to give it. You are likewise oathbound to support them.</p><p>You have an aviary in addition to your usual choice of special possessions. When you <b><i>send a message via trained bird</i></b>, as is the way of the Judges of your order, the GM will tell you if and when you receive a response, and what it says.");
        $("#background-name-three").text("Prophet");
        $("#background-description-three").html("<p>The line of Judges was broken long ago, the Chronicle lost or fallen into ruin. Aratis has called you personally to her service though dreams, omens, and visions. Some in town resent the authority you’ve assumed.</p>When you <b><i>spend a few days communing with Aratis about a threat facing Stonetop or civilization as a whole</i></b>, roll +WIS: <b>on a 7+</b>, Aratis reveals the course of action she would have you take; <b>on a 10+</b>, you also hold 2 Sanction. While <b><i>acting on her orders</i></b>, spend 1 Sanction to add +1 to a roll you just made.</p>");
    }

    if (playbook === "lightbearer") {
        $("#background-name-one").text("Auspicious Birth");
        $("#background-description-one").html("<p>You were born in Stonetop, and that birth was marked by the God of Light. You bear a sunshaped birthmark, perhaps, or maybe you were born during an eclipse?</p><p>Whatever the sign, your connection to Helior was clear early on. You’ve a place of honor in Stonetop, though it’d be a lie to say you don’t make some uneasy.</p><p>When <b><i>one of your moves would cause you to mark a debility</i></b>, you may mark this move instead, to no ill effect. When you <b><i>Make Camp</i></b>, clear the circle.");
        $("#background-name-two").text("Itinerant Mystic");
        $("#background-description-two").html("<p>Th ey think of you as a self-satisfi ed kook who comes through now and again, speaking in riddles and playing tricks with the light. Sure, they know there’s something holy about you, but it’s not like you’re a priest or anything. Priests talk sense.</p><p>When you <b><i>start a session away from the others or go off on your own to do something mysterious</i></b>, hold 1 Enigma. You or the GM may spend your Enigma at any time to have you appear out of the blue, with or without explanation, for all things are possible to one who walks with Helior.");
        $("#background-name-three").text("Soul on Fire");
        $("#background-description-three").html("<p>You led a worldly life. A life of fear and doubt, base pleasures and petty grudges. A life like so many others. But something happened—injury, illness, a brush with Death; perhaps a moment of such profound misery and self-loathing that you thought you could fall no further.</p><p>Th ere, in the dark, Helior’s light shined upon you, igniting in your soul, lifting you and fi lling you with a profound sense of purpose.</p><p>When you <b><i>Persaude a group by preaching charity, mercy, and hope and roll a 7+</i></b>, aside from the usual effect, choose 1:</p><ul><li>Your name and your message spread</li><li>Someone approaches you, now or later, eager to know more</li></ul>");
    }

    if (playbook === "marshal") {
        $("#background-name-one").text("Scion");
        $("#background-description-one").html("<p>You grew up here, descended from a long line. Some of the biggest names in Stonetop’s past are perched in your family tree. Everyone in the village takes your authority as a given, and your crew is a well-established institution in town.</p><p>You start with the Veteran Crew move, in addition to your usual moves.</p><p>When you <b><i>create your Crew</i></b>, they automatically have the <i>respected</i> tag (in addition to your usual picks, and any you get from Veteran Crew).</p>");
        $("#background-name-two").text("Penitent");
        $("#background-description-two").html("<p>Before you came here, you led a band of ne’er-dowells: bandits, raiders, or bloody-handed mercenaries. But something changed. A moment of truth led you and your followers—some of them at least—to leave that life behind. And for whatever reason, the people of Stonetop took you in.</p><p>When you <b><i>draw on your bloody past to Know Things</i></b>, you may roll +STR instead of +INT. If you do, the GM will ask you who you wronged back then or who might still hold a grudge. Answer them now.</p><p>When you <b><i>create your Crew</i></b>, they automatically have the <i>warriors</i> tag (in addition to your usual picks).</p>");
        $("#background-name-three").text("Luminary");
        $("#background-description-three").html("<p>You’re a natural leader—your words inspire, your plans win the day, your deeds are recounted far and wide. How is it that a luminary like you hails from this backwater? Are you touched by the gods? Does ancient blood fl ow in your veins? Or are you simply the champion that Stonetop needs in these trying times?</p><p>You start with the We Happy Few move, in addition to your usual moves.</p><p>When you <b><i>create your Crew</i></b>, they start with the Glory cost, in addition to 1 other cost of your choice. You may use either cost to trigger the Pay Up move.</p>");
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