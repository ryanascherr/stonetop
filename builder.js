const createCharacterBtn = $("#create-character-btn");
const selectCharacterBtn = $("#select-character-btn");
const classSelectBtn = document.querySelectorAll(".class-select-btn");
let playbook;
let background;
let drive;
let hitPoints;
let damage;
let characterName;
let origin;
let str;
let dex;
let int;
let wis;
let con;
let cha;
let onFrontPage = true;
let stonetopHero;
let rollNormal;
let rollAdvantage;
let rollDisadvantage;

let arrayOfMoves = [];
let newMoves;

// let anotherTest = "<p>Hello there!</p><p>Second paragraph!</p><h1>Big Text!</hi>"

selectCharacterBtn.click(function(){

    if (onFrontPage === true) {

        $("#select-character-btn").text("Main Page");
        $("#create-character-btn").addClass("hidden");
        $("header").addClass("hidden");
        $("#character-sheet-container").removeClass("hidden");

        window.scrollTo(0, 0);
        stonetopHero = JSON.parse(localStorage.getItem("new-character"));

        $("#name-playbook").text(`${stonetopHero.characterName}, the ${stonetopHero.playbook}`);
        $("#strength").text(`STR (${stonetopHero.str})`);
        $("#dexterity").text(`DEX (${stonetopHero.dex})`);
        $("#intelligence").text(`INT (${stonetopHero.int})`);
        $("#wisdom").text(`WIS (${stonetopHero.wis})`);
        $("#constitution").text(`CON (${stonetopHero.con})`);
        $("#charisma").text(`CHA (${stonetopHero.cha})`);
        $("#damage-display").text(`Damage (d${stonetopHero.damage})`);
        $("#hit-points-display").text(`HP (${stonetopHero.hitPoints})`);
        $("#armor-display").text("Armor (+0)");
        $("#xp-display").text("XP (+0)");
        $("#stat-btn").addClass("highlight");

        if (stonetopHero.playbook === "Blessed") {

            $("#playbook-moves-sheet-container").children().addClass("move-card");

            let moveOneName = "Spirit Tongue";
            let moveOneDescription = "<p>You can speak with natural beasts and spirits of the wild. You can always ask the GM “what spirits are active here?” and get an honest answer.</p>";
            let moveTwoName = "Call the Spirits";
            let moveTwoDescription = "<p>When you <b><i>perform a short ritual and invoke the spirit(s) of a place or object</i></b>, spend 1 Stock. The spirit(s) manifest before you and will hear what you have to say. What they do next is up to them.</p>";

            // arrayOfMoves.push(moveOneDescription);
            // arrayOfMoves.push(moveTwoDescription);

            // console.log(arrayOfMoves);

            // localStorage.setItem("array-of-moves", JSON.stringify(arrayOfMoves));

            // newMoves = JSON.parse(localStorage.getItem("array-of-moves"));
            // console.log(newMoves);

            // for (i = 0; i < newMoves.length; i++) {
            //     let newVar = $("div");
            //     newVar.html(newMoves[i]);
            //     $("#super-test").append(newVar);
            // }

            $("#move-one-title").text("Spirit Tongue");
            $("#move-one-content").html("<p>You can speak with natural beasts and spirits of the wild. You can always ask the GM “what spirits are active here?” and get an honest answer.</p>");
            $("#move-two-title").text("Call the Spirits");
            $("#move-two-content").html("<p>When you <b><i>perform a short ritual and invoke the spirit(s) of a place or object</i></b>, spend 1 Stock. The spirit(s) manifest before you and will hear what you have to say. What they do next is up to them.</p>");

            if (stonetopHero.origin === "option-one") {
                $("#origin-sheet").html("<h4>Stonetop</h4>");
            } else if (stonetopHero.origin === "option-two") {
                $("#origin-sheet").html("<h4>The Steplands</h4>");
            } else if (stonetopHero.origin === "option-three") {
                $("#origin-sheet").html("<h4>The Wild</h4>");
            }

            if (stonetopHero.drive === "one") {
                $("#drive-sheet-name").text("Conciliation");
                $("#drive-sheet-description").text("Calm, soothe, or mollify a hostile spirit or beast.");
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet-name").text("Cultivation");
                $("#drive-sheet-description").text("Help an NPC learn, grow, or improve themselves.");
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet-name").text("Preservation");
                $("#drive-sheet-description").text("Convince others to protect something of natural beauty or of importance to Danu.");
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet-name").text("Renewal");
                $("#drive-sheet-description").text("Restore someone or thing to its prior, untainted state, or defeat a perversion of the natural order.");
            }

            if (stonetopHero.background === "one") {
                $("#background-sheet-name").text("Initiate");
                $("#background-sheet-description").html("<p>Stonetop has long been home to a sacred order, keepers of the old ways and speakers for Danu. You are one such initiate, the most gifted in generations. You gain the Rites of the Land move.</p><p>There are other initiates in Stonetop, serving the goddess and the village. They aid you as followers—see the Initiates of Danu insert. Who are they? Choose 2 or 3:</p><ul><li><b>Enfys</b>, your acolyte, beloved by birds</li><li><b>Afon</b>, strange and fae-touched</li><li><b>Gwendyl</b>, your mentor, a talented healer</li><li><b>Olwin</b>, your anointed lover, seer of fates</li><li><b>Seren the Eldest</b>, wise and hard as winter</li></ul>");

                $("#background-move-title").text("Rites of the Land");
                $("#background-move-content").html("<p>When <b><i>Seasons Change and you oversee the sacred rites</i></b>, you can sacrifice 2 Surplus to increase the steading’s Fortunes by 1 (max +3). If you sacrifice something (or someone) much-loved and greatly valued, you can redo a roll from Seasons Change, with your choice of advantage or disdvantage.</p>");

            } else if (stonetopHero.background === "two") {

                $("#background-sheet-name").text("Raised by Wolves");
                $("#background-sheet-description").html("<p>Maybe not by <i>wolves</i>, but you grew up in the wild. Beasts of land and air were your siblings. The sighing wind taught you language. The trees and rocks were your home. Were you one of the Forest Folk? Abandoned or orphaned? Lured into the Wood?</p><p>Regardless, you get the Trackless Step move. Also, when you <b><i>Forage</i></b>, you have advantage.</p><p>For some reason, you’ve made yourself known to Stonetop and perhaps you even call it home. But the ways of humans are still strange to you. Once per session, <b><i>when your wild ways offend or alienate you from someone</i></b>, mark XP.</p>");

                $("#background-move-title").text("Trackless Step");
                $("#background-move-content").html("<p>When you <b><i>move through nature with care and patience</i></b>, you make no sound, leave no trace and can ignore any hindering or treacherous terrain (briars, mire, scree, etc.). <b><i>When you spend 1 Stock and mark others</i></b>, they each gain this benefit so long as the mark remains. 1 Stock can mark a number of individuals up to your level +INT.</p>");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").text("Vessel");
                $("#background-sheet-description").html("<p>A seed of Danu’s power has taken root in your soul. Perhaps it has always been there and only recently sprouted. Or maybe it was planted in you during some portentous event.</p><p>Regardless, your dreams have been haunted by strange markings and symbols. You feel the mystic power in plants, stones, and soil. And you’ve felt the growing wrath of the Earth Mother as foul things begin to move about. Take the Danu’s Grasp move.</p><p>Danu’s power flows through you, but at great cost. When you <b><i>would spend 1 Stock from your sacred pouch</i></b>, you may choose to lose 2d4 HP instead.</p>");

                $("#background-move-title").text("Danu's Grasp");
                $("#background-move-content").html("<p>When you <b><i>call on the world itself to bind a spirit or a perversion of nature</i></b>, spend 1 Stock and roll +WIS: <b>on a 10+</b>, choose 2 from the list below; <b>on a 7-9</b>, choose 1.</p><ul><li>You avoid or prevent their counterattack</li><li>Roots, vines, and earth restrain them</li><li>They take 2d4 damage (ignores armor)</li></ul><p>If this brings them to 0 HP, they are pulled into the earth and bound in rune-etched stone.</p>");
            }
        }

        if (stonetopHero.playbook === "Fox") {
            $("#playbook-moves-sheet-container").children().removeClass("move-card");

            $("#move-one-title").text("");
            $("#move-one-content").html("");
            $("#move-one-title").text("");
            $("#move-one-content").html("");

            if (stonetopHero.origin === "option-one") {
                $("#origin-sheet").html("<h4>Stonetop</h4>");
            } else if (stonetopHero.origin === "option-two") {
                $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
            } else if (stonetopHero.origin === "option-three") {
                $("#origin-sheet").html("<h4>Marshedge</h4>");
            } else if (stonetopHero.origin === "option-four") {
                $("#origin-sheet").html("<h4>Lygos</h4>");
            }

            if (stonetopHero.drive === "one") {
                $("#drive-sheet-name").text("Conscience");
                $("#drive-sheet-description").text("Forego comfort or advantage to do the right thing.");
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet-name").text("Excitement");
                $("#drive-sheet-description").text("Cause an ally trouble by taking an unnecessary risk.");
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet-name").text("Glory");
                $("#drive-sheet-description").text("Show off in front of NPCs who will tell your tale.");
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet-name").text("Romance");
                $("#drive-sheet-description").text("Get intimate with someone you’re attracted to.");
            } else if (stonetopHero.drive === "five") {
                $("#drive-sheet-name").text("Trickery");
                $("#drive-sheet-description").text("Get someone or thing to act on false information.");
            }

            if (stonetopHero.background === "one") {
                $("#background-sheet-name").text("The Natural");
                $("#background-sheet-description").html("<p>You grew up around here, and always picked things up quickly. Reading and numbers, sure, but more. Hide and seek. Throwing stones. Climbing. Fighting. Whatever you tried, you were good at it. As good as anyone else, if not better.</p><p>Sure, you’ve got a reputation for bending the rules. Playing dirty. But why play if you don’t play to win, right? And who do they come to when there’s a problem needs solving? You, that’s who.</p><p>When you <b><i>Seek Insight</i></b>, you may roll +INT instead +WIS and add “What opportunity does no one else see?” to the list of possible questions.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "two") {

                $("#background-sheet-name").text("A Life of Crime");
                $("#background-sheet-description").html("<p>You’re new to Stonetop, having left behind a...<i>colorful</i> past. How did you get into that life? Why and how did you get out? Who and what did you leave behind?</p><p>Regardless, these people have taken you in. Time to lead an honest life, right?</p><p>You start with either Burgle or Light Fingers (your choice) as an extra move, and either burglar tools or a hidden stash (your choice) as an additional special possession.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").text("The Prodigal Returned");
                $("#background-sheet-description").html("<p>You left long ago, travelling far and living by your wits. Why did you leave? What deeds do you boast of, and which do you regret?</p><p>You always longed to return to Stonetop, and return you have. You’re a bit of a celebrity now, and you’ve got friends (or close enough) strewn about the known world.</p><p>When you <b><i>declare that you know someone outside of Stonetop</i></b>, someone who can help, name them and roll +CHA: on a 10+, yeah, they can help (tell us why they’re willing); on a 7-9, they can help but pick 1 from the list below; on a 6-, the GM chooses 1 and then some.</p><ul><li>They still hold a grudge</li><li>They're going to need something from you first</li><li>They swore off this sort of thing long ago</li><li>You can't exactly, y'know, trust them</li></ul>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");
            }
        }

        if (stonetopHero.playbook === "Heavy") {
            $("#playbook-moves-sheet-container").children().addClass("move-card");

            $("#move-one-title").text("Dangerous");
            $("#move-one-content").html("<p>When you deal your damage, you have advantage.</p>");
            $("#move-two-title").text("Hard to Kill");
            $("#move-two-content").html("<p>When you <b><i>are at Death’s Door</i></b>, you can roll +CON or +nothing (your choice). <b>On a 7-9</b>, you can mark a debility of your choice to regain 1 HP.</p>");

            if (stonetopHero.origin === "option-one") {
                $("#origin-sheet").html("<h4>Stonetop</h4>");
            } else if (stonetopHero.origin === "option-two") {
                $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
            } else if (stonetopHero.origin === "option-three") {
                $("#origin-sheet").html("<h4>Marshedge</h4>");
            } else if (stonetopHero.origin === "option-four") {
                $("#origin-sheet").html("<h4>The Steplands</h4>");
            } else if (stonetopHero.origin === "option-five") {
                $("#origin-sheet").html("<h4>The Manmarch</h4>");
            } else if (stonetopHero.origin === "option-six") {
                $("#origin-sheet").html("<h4>Lygos</h4>");
            }

            if (stonetopHero.drive === "one") {
                $("#drive-sheet-name").text("Challenge");
                $("#drive-sheet-description").text("Provoke a fight with a worthy foe, just you & them.");
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet-name").text("Honor");
                $("#drive-sheet-description").text("Fullfi ll a vow or oath made to an NPC.");
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet-name").text("Peace");
                $("#drive-sheet-description").text("Prevent violence or end it without hurting anyone.");
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet-name").text("Pride");
                $("#drive-sheet-description").text("Put someone in their place.");
            }

            if (stonetopHero.background === "one") {
                $("#background-sheet-name").text("Sheriff");
                $("#background-sheet-description").html("<p>You keep order in Stonetop and protect it from outside threats. It might not be anything official, but everyone knows you’ve got a cool head and the weight to back up your words.</p><p>When you <b><i>bark an order or warning</i></b>, roll +CHA: <b>on a 7+</b>, they must choose 1:</p><ul><li>Do what you say</li><li>Dig in/take cover/flee</li><li>Attack you</li></ul><p><b>On a 10+</b>, you can tell which one they’re going to do and do something first; gain advantage if you do.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "two") {

                $("#background-sheet-name").text("Blood-Soaked Past");
                $("#background-sheet-description").html("<p>You left behind a life of violence and a name mothers used to scare their children. For whatever reason, the people of Stonetop took you (back?) in and treat you like one of their own.</p><p>When you <b><i>Persuade using violence or threats against someone who knows your black reputation</i></b>, you can roll +STR instead of +CHA. Also, if you take the Formidable move, you can choose to roll +CON instead of +CHA.</p><p>When you <b><i>fight to kill without mercy or hesitation</i></b>, you deal +1d4 damage.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").text("Storm-Marked");
                $("#background-sheet-description").html("<p>You’ve been touched by Tor (Rainmaker, Thunderhead, Slayer-of-Beasts!) and bear runic markings similar to those etched into the Stone. When did the marks manifest? Are they a symbol of your strength, speed, and courage? Or their source?</p><p>You start with the Storm Markings major arcanum. Mark one of the boxes on the front of the Storm Markings sheet, and describe here the time you were struck by lightning and walked away unharmed.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");
            }
        }

        if (stonetopHero.playbook === "Judge") {
            $("#playbook-moves-sheet-container").children().removeClass("move-card");

            $("#move-one-title").text("Censure");
            $("#move-one-content").html("<p>When you <b><i>first denounce someone (or thing) as an agent of chaos or anathema to civilization</i></b>, pick 1:</p><ul><li>You/your allies deal +1 damage against them</li><li>They deal -1 damage</li><li>They recoil and might be momentarily stunned</li><p>The bonus/penalty ends if you use this move again.</p>");
            $("#move-two-title").text("Chronicler of Stonetop");
            $("#move-two-content").html("<p>When you <b><i>write up detailed session notes and share them with the other players</i></b>, hold +1 Diligence.</p><p>You can spend 1 Diligence at any time to add +1 to a roll that you or a fellow player just made.</p>");

            if (stonetopHero.origin === "option-one") {
                $("#origin-sheet").html("<h4>Stonetop</h4>");
            } else if (stonetopHero.origin === "option-two") {
                $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
            } else if (stonetopHero.origin === "option-three") {
                $("#origin-sheet").html("<h4>Marshedge</h4>");
            } else if (stonetopHero.origin === "option-four") {
                $("#origin-sheet").html("<h4>Lygos</h4>");
            }

            if (stonetopHero.drive === "one") {
                $("#drive-sheet-name").text("Duty");
                $("#drive-sheet-description").text("Cause trouble by adhering strictly to doctrine");
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet-name").text("Harmony");
                $("#drive-sheet-description").text("Settle a dispute without anyone feeling wronged.");
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet-name").text("Knowledge");
                $("#drive-sheet-description").text("Teach another something important.");
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet-name").text("Zeal");
                $("#drive-sheet-description").text("Pass judgement hastily, without considering nuance or consequences.");
            }

            if (stonetopHero.background === "one") {
                $("#background-sheet-name").text("Legacy");
                $("#background-sheet-description").html("<p>You are the latest in a long line of Judges—born here, apprenticed to the prior Judge, and charged with the passing of the mantle. The Chronicle is a rich repository of lore, but there’s no index, so good luck fi nding anything.</p><p>When you <b><i>Know Things about the people or history of Stonetop</i></b>, you have advantage.</p><p>When you <b><i>spend days, weeks, or months poring over the Chronicle</i></b>, ask the GM a question, and the GM will tell you what you learn in that time.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "two") {

                $("#background-sheet-name").text("Missionary");
                $("#background-sheet-description").html("<p>You are part of a larger order of Aratis, sent to Stonetop to spread the faith and protect the flickering flame of civilization. The Chronicle is new and a work in progress; your position in town is far from certain. Add the following Judges to the Neighbors section of the Stonetop playbook:</p><ul><li>Devin (from Marshedge)</li><li>Haeris (from Gordin's Delve)</li><li>Rahat (from Lygos)</li></ul><p>When you <b><i>call upon the Judge of another steading for aid or information</i></b>, they are oath-bound to give it. You are likewise oathbound to support them.</p><p>You have an aviary in addition to your usual choice of special possessions. When you <b><i>send a message via trained bird</i></b>, as is the way of the Judges of your order, the GM will tell you if and when you receive a response, and what it says.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").text("Prophet");
                $("#background-sheet-description").html("<p>The line of Judges was broken long ago, the Chronicle lost or fallen into ruin. Aratis has called you personally to her service though dreams, omens, and visions. Some in town resent the authority you’ve assumed.</p>When you <b><i>spend a few days communing with Aratis about a threat facing Stonetop or civilization as a whole</i></b>, roll +WIS: <b>on a 7+</b>, Aratis reveals the course of action she would have you take; <b>on a 10+</b>, you also hold 2 Sanction. While <b><i>acting on her orders</i></b>, spend 1 Sanction to add +1 to a roll you just made.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");
            }
        }

        if (stonetopHero.playbook === "Lightbearer") {
            $("#playbook-moves-sheet-container").children().removeClass("move-card");

            $("#move-one-title").text("Consecrated Flame");
            $("#move-one-content").html("</p>When you <b><i>whisper words of consecration to a flame</i></b>, the flame casts a holy light. Holy light is uncomfortable for creatures of darkness to look upon, but does no true harm. The holy light lasts until the flame goes out or until you consecrate another flame, whichever comes first.</p>");
            $("#move-two-title").text("Invoke the Sun God");
            $("#move-two-content").html("<p>When you <b><i>imbue a holy light with Helior’s power</i></b>,choose an Invocation you know and roll +WIS: <b>on a 10+</b>, it works as described but you must choose 1 consequence from the list below; <b>on a 7-9</b>, it works as described, but you and the GM each choose 1.</p>");

            if (stonetopHero.origin === "option-one") {
                $("#origin-sheet").html("<h4>Stonetop</h4>");
            } else if (stonetopHero.origin === "option-two") {
                $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
            } else if (stonetopHero.origin === "option-three") {
                $("#origin-sheet").html("<h4>Marshedge</h4>");
            } else if (stonetopHero.origin === "option-four") {
                $("#origin-sheet").html("<h4>Lygos</h4>");
            }

            if (stonetopHero.drive === "one") {
                $("#drive-sheet-name").text("Charity");
                $("#drive-sheet-description").text("Bring relief or comfort to someone who is suffering.");
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet-name").text("Faith");
                $("#drive-sheet-description").text("Walk brazenly into danger, sure of Helior’s plan.");
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet-name").text("Hope");
                $("#drive-sheet-description").text("Lead another to act despite fear or doubt.");
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet-name").text("Mercy");
                $("#drive-sheet-description").text("Forgive a wrong or set a helpless enemy free.");
            }

            if (stonetopHero.background === "one") {
                $("#background-sheet-name").text("Auspicious Birth");
                $("#background-sheet-description").html("<p>You were born in Stonetop, and that birth was marked by the God of Light. You bear a sunshaped birthmark, perhaps, or maybe you were born during an eclipse?</p><p>Whatever the sign, your connection to Helior was clear early on. You’ve a place of honor in Stonetop, though it’d be a lie to say you don’t make some uneasy.</p><p>When <b><i>one of your moves would cause you to mark a debility</i></b>, you may mark this move instead, to no ill effect. When you <b><i>Make Camp</i></b>, clear the circle.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "two") {

                $("#background-sheet-name").text("Itinerant Mystic");
                $("#background-sheet-description").html("<p>They think of you as a self-satisfi ed kook who comes through now and again, speaking in riddles and playing tricks with the light. Sure, they know there’s something holy about you, but it’s not like you’re a priest or anything. Priests talk sense.</p><p>When you <b><i>start a session away from the others or go off on your own to do something mysterious</i></b>, hold 1 Enigma. You or the GM may spend your Enigma at any time to have you appear out of the blue, with or without explanation, for all things are possible to one who walks with Helior.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").text("Soul on Fire");
                $("#background-sheet-description").html("<p>You led a worldly life. A life of fear and doubt, base pleasures and petty grudges. A life like so many others. But something happened—injury, illness, a brush with Death; perhaps a moment of such profound misery and self-loathing that you thought you could fall no further.</p><p>Th ere, in the dark, Helior’s light shined upon you, igniting in your soul, lifting you and fi lling you with a profound sense of purpose.</p><p>When you <b><i>Persaude a group by preaching charity, mercy, and hope and roll a 7+</i></b>, aside from the usual effect, choose 1:</p><ul><li>Your name and your message spread</li><li>Someone approaches you, now or later, eager to know more</li></ul>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");
            }
        }

        if (stonetopHero.playbook === "Marshal") {
            $("#playbook-moves-sheet-container").children().addClass("move-card");

            $("#move-one-title").text("Crew");
            $("#move-one-content").html("<p>You’ve got a crew of stalwarts, six or so residents of Stonetop with some steel to them. See the Crew insert for details.</p>");
            $("#move-two-title").text("Logistics");
            $("#move-two-content").html("When you <b><i>have a steading Muster or Pull Together</i></b>, or when you <b><i>Requisition</i></b>, you have advantage.");

            if (stonetopHero.origin === "option-one") {
                $("#origin-sheet").html("<h4>Stonetop</h4>");
            } else if (stonetopHero.origin === "option-two") {
                $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
            } else if (stonetopHero.origin === "option-three") {
                $("#origin-sheet").html("<h4>Marshedge</h4>");
            } else if (stonetopHero.origin === "option-four") {
                $("#origin-sheet").html("<h4>The Steplands</h4>");
            } else if (stonetopHero.origin === "option-five") {
                $("#origin-sheet").html("<h4>The Manmarch</h4>");
            } else if (stonetopHero.origin === "option-six") {
                $("#origin-sheet").html("<h4>Lygos</h4>");
            }

            if (stonetopHero.drive === "one") {
                $("#drive-sheet-name").text("Honor");
                $("#drive-sheet-description").text("Keep a promise you made to an NPC.");
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet-name").text("Prestige");
                $("#drive-sheet-description").text("Impress an NPC from outside your home steading.");
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet-name").text("Resolve");
                $("#drive-sheet-description").text("Give an order or enact a plan knowing it will bring an ally to harm.");
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet-name").text("Ruthlessness");
                $("#drive-sheet-description").text("Deny mercy to an enemy or betray a supposed ally.");
            }

            if (stonetopHero.background === "one") {
                $("#background-sheet-name").text("Scion");
                $("#background-sheet-description").html("<p>You grew up here, descended from a long line. Some of the biggest names in Stonetop’s past are perched in your family tree. Everyone in the village takes your authority as a given, and your crew is a well-established institution in town.</p><p>You start with the Veteran Crew move, in addition to your usual moves.</p><p>When you <b><i>create your Crew</i></b>, they automatically have the <i>respected</i> tag (in addition to your usual picks, and any you get from Veteran Crew).</p>");

                $("#background-move-title").text("Veteran Crew");
                $("#background-move-content").html("<p>Each time you take this move, pick 1. You can also choose to reselect their Instinct and Cost.</p><ul><li>Select 2 new tags for your Crew</li><li>Increase their damage die from d6 to d8</li><li>Increase their max HP by 2 each</li></ul>");

            } else if (stonetopHero.background === "two") {

                $("#background-sheet-name").text("Penitent");
                $("#background-sheet-description").html("<p>Before you came here, you led a band of ne’er-dowells: bandits, raiders, or bloody-handed mercenaries. But something changed. A moment of truth led you and your followers—some of them at least—to leave that life behind. And for whatever reason, the people of Stonetop took you in.</p><p>When you <b><i>draw on your bloody past to Know Things</i></b>, you may roll +STR instead of +INT. If you do, the GM will ask you who you wronged back then or who might still hold a grudge. Answer them now.</p><p>When you <b><i>create your Crew</i></b>, they automatically have the <i>warriors</i> tag (in addition to your usual picks).</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").text("Luminary");
                $("#background-sheet-description").html("<p>You’re a natural leader—your words inspire, your plans win the day, your deeds are recounted far and wide. How is it that a luminary like you hails from this backwater? Are you touched by the gods? Does ancient blood fl ow in your veins? Or are you simply the champion that Stonetop needs in these trying times?</p><p>You start with the We Happy Few move, in addition to your usual moves.</p><p>When you <b><i>create your Crew</i></b>, they start with the Glory cost, in addition to 1 other cost of your choice. You may use either cost to trigger the Pay Up move.</p>");

                $("#background-move-title").text("We Happy Few");
                $("#background-move-content").html("<p>When you <b><i>give an inspiring speech to your allies before facing a dire threat</i></b>, roll +CHA: <b>on a 10+</b>, each ally holds 2 Inspiration; <b>on a 7-9</b>, each ally holds 1 Inspiration; <b>on a 6-</b>, each ally holds 1, but you have disadvantage on all rolls until you share your nagging doubts with someone else.</p><p>Once battle is joined, your allies can spend their Inspiration at any time, 1-for-1 to do the following:</p><ul><li>Act fearlessly in the face of terror or overwhelming odds</li><li>Keep 1 HP instead of being reduced to 0 HP</li><li>Add 1d6 to a damage roll they just made</li></ul>");
            }
        }

        if (stonetopHero.playbook === "Ranger") {
            $("#playbook-moves-sheet-container").children().removeClass("move-card");

            $("#move-one-title").text("Home on the Range");
            $("#move-one-content").html("<p>When <b><i>a journey requires you to Defy Danger or Struggle as One</i></b>, treat a 6- as a 7-9.");

            $("#move-two-title").text("");
            $("#move-two-content").html("");

            if (stonetopHero.origin === "option-one") {
                $("#origin-sheet").html("<h4>Stonetop</h4>");
            } else if (stonetopHero.origin === "option-two") {
                $("#origin-sheet").html("<h4>Marshedge</h4>");
            } else if (stonetopHero.origin === "option-three") {
                $("#origin-sheet").html("<h4>The Steplands</h4>");
            } else if (stonetopHero.origin === "option-four") {
                $("#origin-sheet").html("<h4>The Manmarch</h4>");
            } else if (stonetopHero.origin === "option-five") {
                $("#origin-sheet").html("<h4>Lygos</h4>");
            }

            if (stonetopHero.drive === "one") {
                $("#drive-sheet-name").text("Mercy");
                $("#drive-sheet-description").text("Release someone/thing from bondage or suff ering.");
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet-name").text("Stewardship");
                $("#drive-sheet-description").text("Put the best interests of a place or beast over a person’s desires.");
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet-name").text("Tenacity");
                $("#drive-sheet-description").text("Refuse to turn back despite objection or disaster.");
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet-name").text("Wonder");
                $("#drive-sheet-description").text("Show someone a place or thing of beauty.");
            }

            if (stonetopHero.background === "one") {
                $("#background-sheet-name").text("Mighty Hunter");
                $("#background-sheet-description").html("<p>You are a hunter of the Great Wood, the best the town has seen in generations. You know every part of the Wood within a two-day march.</p><p>You start with both the Expert Tracker move and the Stalker move.</p>");

                $("#move-two-title").text("Expert Tracker");
                $("#move-two-content").html("<p>When you <b><i>Seek Insight by searching for tracks or studying the signs left by passing creatures</i></b>, you can ask “What happened here recently?” for free, even on a 6-.</p><p>When you <b><i>follow a creature’s trail</i></b>, roll +WIS: <b>on a 7+</b> you follow the trail to a significant change in direction, terrain, or mode of transport; <b>on a 10+</b>, you can also ask the GM a reasonable question about your quarry and get an honest, useful answer.</p>");

                $("#background-move-title").text("Stalker");
                $("#background-move-content").html("<p>When you <b><i>carry a normal or light load and move with care</i></b>, you make no noise and leave no sign of your passing. When you <b><i>hide yourself in a natural environment</i></b>, you remain unseen until you draw attention to yourself, move positions, or attack.</p>");

            } else if (stonetopHero.background === "two") {

                $("#background-sheet-name").text("Wide Wanderer");
                $("#background-sheet-description").html("<p>You have travelled much of the known world and perhaps parts beyond. Add each of the following to the Neighbors list in the Stonetop playbook, choosing 1 trait for each:</p><ul><li>Ennis (from Marshedge)</li><li>Shahar (from Gordan's Delve)</li><li>Yannic (from the Hillfolk)</li><li>Tovia (from Lygos)</li><li>Sasca (frim the northern Manmarch</li></ul><p>You start with the Mental Map move.</p><p>When you <b><i>Know Things about the wider world</i></b>, you can roll +WIS instead of +INT.</p><p>When you <b><i>arrive somewhere you’ve visited before</i></b> (your call), tell the GM when you were last here, and the GM will tell you how it’s changed.</p>");

                $("#background-move-title").text("Mental Map");
                $("#background-move-content").html("<p>You can always retrace your steps and can accurately gauge distances and directions. You might not know the way forward but can always find your way back.</p><p>When you <b><i>think back on a place you’ve been to or observed</i></b>, you can retroactively Seek Insight about it as if you were still there.</p>");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").text("Beast Bonded");
                $("#background-sheet-description").html("ou grew up civilized, but your soul is bound to a beast of the wild. You’re closer to it than to any man or woman. How did this bond come about? How long ago? Regardless, you start with the Animal Companion move.</p><p>When you <b><i>focus on your animal companion for a few moments</i></b>, you can use any of the actions you’ve marked below, no matter the distance between you. Mark 1 action at 1st level, then another at 3rd, 5th, 7th, and 9th.</p><ul><li>Gauge its distance and direction from you</li><li>Call it back to your side</li><li>Sense its emotional state</li><li>Get a brief impression of what it senses</li><li>Lend it your strength-lose 1d6 HP, and it regains an equal amount</li></ul>");

                $("#background-move-title").text("Animal Companion");
                $("#background-move-content").html("<p>You are accompanied by a beast of uncommon loyalty and cleverness. See the Animal Companion insert for details.</p>");
            }
        }

        if (stonetopHero.playbook === "Seeker") {
            $("#playbook-moves-sheet-container").children().removeClass("move-card");

            $("#move-one-title").text("Well Versed");
            $("#move-one-content").html("<p>Mark 1 topic, in addition to the one noted in your Background. Each additional time you take this move, mark 2 more topics.</p><ul><li>The Last Door, death, and the undead</li><li>The civilizations of humanity</li><li>The fae and their strange ways</li><li>The Makers and their arts</li><li>The primordial powers</li><li>The Things Below</li><li>The wild world and its spirits</li></ul><p>When you <b><i>Know Things about one of your topics</i></b>, you can ask the GM a follow-up question of your choice (even on a 6-).</p>");
            $("#move-two-title").text("Work With What You've Got");
            $("#move-two-content").html("<p>When you <b><i>wield your environment against your foe(s)</i></b>, choose 1 from the list below and roll +INT: <b>on a 7+</b>, it works! <b>On a 10+</b>, pick 1 more—you get that, too.");

            if (stonetopHero.origin === "option-one") {
                $("#origin-sheet").html("<h4>Stonetop</h4>");
            } else if (stonetopHero.origin === "option-two") {
                $("#origin-sheet").html("<h4>The Steplands</h4>");
            } else if (stonetopHero.origin === "option-three") {
                $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
            } else if (stonetopHero.origin === "option-four") {
                $("#origin-sheet").html("<h4>Marshedge</h4>");
            } else if (stonetopHero.origin === "option-five") {
                $("#origin-sheet").html("<h4>Lygos</h4>");
            }

            if (stonetopHero.drive === "one") {
                $("#drive-sheet-name").text("Cunning");
                $("#drive-sheet-description").text("Set up a ploy and then take advantage of it.");
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet-name").text("Curiosity");
                $("#drive-sheet-description").text("Cause trouble by touching, opening, or tinkering with something.");
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet-name").text("Respect");
                $("#drive-sheet-description").text("Impress another with your superior knowledge.");
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet-name").text("Secrecy");
                $("#drive-sheet-description").text("Deflect or evade an inquiry into your doings.");
            } else if (stonetopHero.drive === "five") {
                $("#drive-sheet-name").text("Victory");
                $("#drive-sheet-description").text("Endanger others in order to defeat the supernatural.");
            }

            if (stonetopHero.background === "one") {
                $("#background-sheet-name").text("Patriot");
                $("#background-sheet-description").html("<p>Th ese people are family. Chaos grows all around, but you’ll be damned if you’ll let your family come to harm. Damned indeed.</p><p>You have sought out and embraced dark power to protect that which you hold dear. Or perhaps that power fell upon you, and you took it up for the greater good. Either way, you seek more.</p><p>You start with the Let’s Make a Deal move and are Well Versed in the Things Below. You’ve also acquired 1 major arcanum:</p><ul><li>The Hec’tumel Codex</li><li>The Red Scepter</li><li>The Staff of the Lidless Orb</li></ul>");

                $("#background-move-title").text("Let's Make a Deal");
                $("#background-move-content").html("<p>When you <b><i>Seek Insight</i></b>, add “What do they really want or need?” to the list of questions. When you <b><i>Persuade by offering them something that you know they want or need</i></b>, treat a 7-9 as a 10+.</p>");

            } else if (stonetopHero.background === "two") {

                $("#background-sheet-name").text("Antiquarian");
                $("#background-sheet-description").html("<p>Th e past has buried many secrets, and you are determined to dig them up. Years of study across the land have led you here, and you are convinced that this town holds the key to your greatest discoveries. What is it you hope to fi nd? What is it that keeps you here?</p><p>In any case, your travels and studies mean that you start with the Polyglot move and that you are Well Versed in the Makers and their arts. You’ve also acquired 1 major arcanum:</p><ul><li>Noruba’s Ice-Sphere</li><li>The Azure Hand</li><li>The Mindgem</li></ul>");

                $("#background-move-title").text("Polyglot");
                $("#background-move-content").html("<p>When you <b><i>first encounter a living language in play</i></b>, describe your proficiency with it (if any) and how you came to acquire it.</p><p>When you <b><i>Know Things about any script, text, runes or symbols that you encounter</i></b>, you have advantage.");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").text("Witch Hunter");
                $("#background-sheet-description").html("<p>You’ve dedicated your life to rooting out and destroying horrors and their servants. What set you down this path? What did you sacrifice to walk it? What led you to call Stonetop home?</p><p>Regardless, you start with the Everything Bleeds move and are Well Versed in (pick 1) the fae, the Things Below, or the Black Gates and what lies beyond (go mark them now). You’ve also acquired 1 major arcanum:</p><ul><li>The Demonhide Cloak</li><li>The Redwood Effigy</li><li>The Twisted Spear</li></ul>");

                $("#background-move-title").text("Everything Bleeds");
                $("#background-move-content").html("<p>When you <b><i>exploit an unnatural foe’s specific weakness or vulnerability</i></b>, deal +1d6 damage.</p>");
            }
        }

        if (stonetopHero.playbook === "Would-Be Hero") {
            $("#playbook-moves-sheet-container").children().removeClass("move-card");

            $("#move-one-title").text("Anger is a Gift");
            $("#move-one-content").html("<p>When you <b><i>burn with righteous anger</i></b> (see Fear & Anger on back of playbook), hold 2 Resolve. You can spend your Resolve 1-for-1 to:</p><ul><li>Set aside fear and doubt to do what must be done</li><li>Act suddenly, catching them off-guard</li><li>Inspire allies or bystanders to follow your lead</li><li>Strike hard (+1d4 damage, <i>forceful</i>)</li><li>Keep your footing, position, and/or your course despite what befalls you</li></ul>");
            $("#move-two-title").text("Potential for Greatness");
            $("#move-two-content").html("<p>Once per level, <b><i>when you roll a stat and get a 10+</i></b>, mark one of the following (note the level during which you marked it). You don’t have to mark them in order.</p><ul><li>Increase the stat you rolled by 1, to a max of +2 (at level ___)</li><li>Increase the stat you rolled by 1, to a max of +2 (at level ___)</li><li>Increase the stat you rolled by 1, to a max of +2 (at level ___)</li><li>Increase the stat you rolled by 1, to a max of +2 (at level ___)</li><li>Increase your max HP by 4 (at level ___)</li><li>Increase your damage die to a d8 (at level ___)</li></ul>");

            if (stonetopHero.origin === "option-one") {
                $("#origin-sheet").html("<h4>Stonetop</h4>");
            } else if (stonetopHero.origin === "option-two") {
                $("#origin-sheet").html("<h4>The Steplands</h4>");
            } else if (stonetopHero.origin === "option-three") {
                $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
            } else if (stonetopHero.origin === "option-four") {
                $("#origin-sheet").html("<h4>Marshedge</h4>");
            } else if (stonetopHero.origin === "option-five") {
                $("#origin-sheet").html("<h4>Lygos</h4>");
            }

            if (stonetopHero.drive === "one") {
                $("#drive-sheet-name").text("Bravery");
                $("#drive-sheet-description").text("Face up to one of your fears.");
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet-name").text("Glory");
                $("#drive-sheet-description").text("Impress onlookers with your bravery.");
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet-name").text("Sacrifice");
                $("#drive-sheet-description").text("Suffer or endure hardship so that someone else does not need to do so.");
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet-name").text("Succor");
                $("#drive-sheet-description").text("Provide aid or comfort to an NPC in need.");
            }

            if (stonetopHero.background === "one") {
                $("#background-sheet-name").text("Impetuous Youth");
                $("#background-sheet-description").html("<p>Stonetop has always been home, but you chafe at the demands of mundane life and have always longed for more. Excitement! Danger!</p><p>When you <b><i>make a move and come up short</i></b>, you can give it your all and turn a 6- into a 7-9, a 7-9 into a 10+, and (if it matters), a 10-11 into a 12+. But if you do, pick 1 (the GM will fill in the details):</p><ul><li>You get hurt (2d4 damage and an actual injury)</li><li>You cause collateral damage, endanger others, or otherwise escalate the situation</li><li>Something on your person is lost or breaks</li></ul>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "two") {

                $("#background-sheet-name").text("Driven");
                $("#background-sheet-description").html("<p>You once led a simple life, but something happened. Something changed you, burdened you with terrible purpose. What was it? Choose 1:</p><ul><li>A loved one was killed or abducted</li><li>Someone gave their life to save you</li><li>Your idol sacrificed themselves to save many</li><li>You stumbled upon a dark mystery</li><li>You must make amends for a terrible mistake</li></ul><p>You always have the option of Burning Bright; you can spend 2 XP after you roll to add +1, even if you don’t have enough XP to level.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").text("Destined");
                $("#background-sheet-description").html("<p>Fate has laid her hand upon you and set you on a course for greatness. Choose 3-4 of the items below to describe your destiny:</p><p>anointed, marked at birth, your coming foretold, destroy, discover, free, protect, restore, unify, blood, civilization, darkness, earth & stone, fire, ice, light, life, storms, war, water, the fae, the gods, the Makers, the Stone, the Things Below</p><p>When you <b><i>start a session</i></b>, roll +nothing: <b>on a 7+</b>, the GM will describe a recent omen, dream, or vision that points toward your fate; <b>on a 10+</b>, you can ask the GM a follow-up question and get a clear, helpful answer; <b>on a 6-</b>, tell us of the nightmares you’ve been having and how your fears play into them.</p><p>When you <b><i>are at Death’s Door</i></b>, ask yourself, “Is my destiny fulfilled?” If it is not, treat a miss as a 7-9 and a 7-9 as a 10+.</p>");

                $("#background-move-title").text("");
                $("#background-move-content").html("");
            }
        }

        window.scrollTo(0, 0);
        onFrontPage = false;
    
        } else {

            $("#create-character-btn").removeClass("hidden");
            $("#select-character-btn").text(`${stonetopHero.characterName}`);
            $("header").removeClass("hidden");
            $("#character-sheet-container").addClass("hidden");
            $("#stat-btn").addClass("highlight");
            $("#playbook-moves-btn").removeClass("highlight");
            $("#background-btn").removeClass("highlight");
            $("#basic-moves-btn").removeClass("highlight");
            $("#playbook-moves-sheet-container").addClass("hidden");
            $("#background-sheet-container").addClass("hidden");
            $("#basic-moves-sheet-container").addClass("hidden");
            $("#stat-sheet-container").removeClass("hidden");
            onFrontPage = true;
        }
})

$("#stat-btn").click(function(){
    $("#stat-btn").addClass("highlight");
    $("#playbook-moves-btn").removeClass("highlight");
    $("#background-btn").removeClass("highlight");
    $("#basic-moves-btn").removeClass("highlight");

    $("#playbook-moves-sheet-container").addClass("hidden");
    $("#background-sheet-container").addClass("hidden");
    $("#basic-moves-sheet-container").addClass("hidden");
    $("#stat-sheet-container").removeClass("hidden");
})

$("#playbook-moves-btn").click(function(){
    $("#playbook-moves-btn").addClass("highlight");
    $("#stat-btn").removeClass("highlight");
    $("#background-btn").removeClass("highlight");
    $("#basic-moves-btn").removeClass("highlight");

    $("#stat-sheet-container").addClass("hidden");
    $("#background-sheet-container").addClass("hidden");
    $("#basic-moves-sheet-container").addClass("hidden");
    $("#playbook-moves-sheet-container").removeClass("hidden");
})

$("#background-btn").click(function(){
    $("#background-btn").addClass("highlight");
    $("#stat-btn").removeClass("highlight");
    $("#playbook-moves-btn").removeClass("highlight");
    $("#basic-moves-btn").removeClass("highlight");

    $("#playbook-moves-sheet-container").addClass("hidden");
    $("#stat-sheet-container").addClass("hidden");
    $("#basic-moves-sheet-container").addClass("hidden");
    $("#background-sheet-container").removeClass("hidden");
})

$("#basic-moves-btn").click(function(){
    $("#basic-moves-btn").addClass("highlight");
    $("#background-btn").removeClass("highlight");
    $("#stat-btn").removeClass("highlight");
    $("#playbook-moves-btn").removeClass("highlight");

    $("#playbook-moves-sheet-container").addClass("hidden");
    $("#stat-sheet-container").addClass("hidden");
    $("#background-sheet-container").addClass("hidden");
    $("#basic-moves-sheet-container").removeClass("hidden");
})

createCharacterBtn.click(function(){

    if (onFrontPage === true) {

    $("#create-character-btn").text("Main Page");
    $("header").addClass("hidden");
    $("select-character-btn").addClass("hidden");
    $("#background-selector-container").addClass("hidden");
    $("#drive-selector-container").addClass("hidden");
    $("#origin-name-selector-container").addClass("hidden");
    $("#stats-selector-container").addClass("hidden");
    $("#select-character-btn").addClass("hidden");
    $("#class-selector-container").removeClass("hidden");
    window.scrollTo(0, 0);
    onFrontPage = false;

    } else {
        
        $("#create-character-btn").text("Create a Character");
        $("header").removeClass("hidden");
        $("#class-selector-container").addClass("hidden");
        $("#background-selector-container").addClass("hidden");
        $("#drive-selector-container").addClass("hidden");
        $("#origin-name-selector-container").addClass("hidden");
        $("#stats-selector-container").addClass("hidden");
        onFrontPage = true;

        if ($("#select-character-btn").text() !== "") {
            $("#select-character-btn").removeClass("hidden");
        }
    }



})

$("#class-card-container").click(function(event){

    let element = event.target;

    if (element.matches(".class-select-btn")) {
        window.scrollTo(0, 0);
        $("#class-selector-container").addClass("hidden");
        $("#background-selector-container").removeClass("hidden");
        playbook = element.getAttribute("data-playbook");
        onFrontPage = false;
    }

    if (playbook === "Blessed") {
        hitPoints = 18;
        damage = 6;
        $("#background-name-one").text("Initiate");
        $("#background-description-one").html("<p>Stonetop has long been home to a sacred order, keepers of the old ways and speakers for Danu. You are one such initiate, the most gifted in generations. You gain the Rites of the Land move.</p><p>There are other initiates in Stonetop, serving the goddess and the village. They aid you as followers—see the Initiates of Danu insert. Who are they? Choose 2 or 3:</p><ul><li><b>Enfys</b>, your acolyte, beloved by birds</li><li><b>Afon</b>, strange and fae-touched</li><li><b>Gwendyl</b>, your mentor, a talented healer</li><li><b>Olwin</b>, your anointed lover, seer of fates</li><li><b>Seren the Eldest</b>, wise and hard as winter</li></ul>");
        $("#background-name-two").text("Raised by Wolves");
        $("#background-description-two").html("<p>Maybe not by <i>wolves</i>, but you grew up in the wild. Beasts of land and air were your siblings. The sighing wind taught you language. The trees and rocks were your home. Were you one of the Forest Folk? Abandoned or orphaned? Lured into the Wood?</p><p>Regardless, you get the Trackless Step move. Also, when you <b><i>Forage</i></b>, you have advantage.</p><p>For some reason, you’ve made yourself known to Stonetop and perhaps you even call it home. But the ways of humans are still strange to you. Once per session, <b><i>when your wild ways offend or alienate you from someone</i></b>, mark XP.</p>");
        $("#background-name-three").text("Vessel");
        $("#background-description-three").html("<p>A seed of Danu’s power has taken root in your soul. Perhaps it has always been there and only recently sprouted. Or maybe it was planted in you during some portentous event.</p><p>Regardless, your dreams have been haunted by strange markings and symbols. You feel the mystic power in plants, stones, and soil. And you’ve felt the growing wrath of the Earth Mother as foul things begin to move about. Take the Danu’s Grasp move.</p><p>Danu’s power flows through you, but at great cost. When you <b><i>would spend 1 Stock from your sacred pouch</i></b>, you may choose to lose 2d4 HP instead.</p>");
    }

    if (playbook === "Fox") {
        hitPoints = 16;
        damage = 8;
        $("#background-name-one").text("The Natural");
        $("#background-description-one").html("<p>You grew up around here, and always picked things up quickly. Reading and numbers, sure, but more. Hide and seek. Throwing stones. Climbing. Fighting. Whatever you tried, you were good at it. As good as anyone else, if not better.</p><p>Sure, you’ve got a reputation for bending the rules. Playing dirty. But why play if you don’t play to win, right? And who do they come to when there’s a problem needs solving? You, that’s who.</p><p>When you <b><i>Seek Insight</i></b>, you may roll +INT instead +WIS and add “What opportunity does no one else see?” to the list of possible questions.</p>");
        $("#background-name-two").text("A Life of Crime");
        $("#background-description-two").html("<p>You’re new to Stonetop, having left behind a...<i>colorful</i> past. How did you get into that life? Why and how did you get out? Who and what did you leave behind?</p><p>Regardless, these people have taken you in. Time to lead an honest life, right?</p><p>You start with either Burgle or Light Fingers (your choice) as an extra move, and either burglar tools or a hidden stash (your choice) as an additional special possession.</p>");
        $("#background-name-three").text("The Prodigal Returned");
        $("#background-description-three").html("<p>You left long ago, travelling far and living by your wits. Why did you leave? What deeds do you boast of, and which do you regret?</p><p>You always longed to return to Stonetop, and return you have. You’re a bit of a celebrity now, and you’ve got friends (or close enough) strewn about the known world.</p><p>When you <b><i>declare that you know someone outside of Stonetop</i></b>, someone who can help, name them and roll +CHA: on a 10+, yeah, they can help (tell us why they’re willing); on a 7-9, they can help but pick 1 from the list below; on a 6-, the GM chooses 1 and then some.</p><ul><li>They still hold a grudge</li><li>They're going to need something from you first</li><li>They swore off this sort of thing long ago</li><li>You can't exactly, y'know, trust them</li></ul>");
    }

    if (playbook === "Heavy") {
        hitPoints = 20;
        damage = 10;
        $("#background-name-one").text("Sheriff");
        $("#background-description-one").html("<p>You keep order in Stonetop and protect it from outside threats. It might not be anything official, but everyone knows you’ve got a cool head and the weight to back up your words.</p><p>When you <b><i>bark an order or warning</i></b>, roll +CHA: <b>on a 7+</b>, they must choose 1:</p><ul><li>Do what you say</li><li>Dig in/take cover/flee</li><li>Attack you</li></ul><p><b>On a 10+</b>, you can tell which one they’re going to do and do something first; gain advantage if you do.</p>");
        $("#background-name-two").text("Blood-Soaked Past");
        $("#background-description-two").html("<p>You left behind a life of violence and a name mothers used to scare their children. For whatever reason, the people of Stonetop took you (back?) in and treat you like one of their own.</p><p>When you <b><i>Persuade using violence or threats against someone who knows your black reputation</i></b>, you can roll +STR instead of +CHA. Also, if you take the Formidable move, you can choose to roll +CON instead of +CHA.</p><p>When you <b><i>fight to kill without mercy or hesitation</i></b>, you deal +1d4 damage.</p>");
        $("#background-name-three").text("Storm-Marked");
        $("#background-description-three").html("<p>You’ve been touched by Tor (Rainmaker, Thunderhead, Slayer-of-Beasts!) and bear runic markings similar to those etched into the Stone. When did the marks manifest? Are they a symbol of your strength, speed, and courage? Or their source?</p><p>You start with the Storm Markings major arcanum. Mark one of the boxes on the front of the Storm Markings sheet, and describe here the time you were struck by lightning and walked away unharmed.</p>");
    }

    if (playbook === "Judge") {
        hitPoints = 20;
        damage = 6;
        $("#background-name-one").text("Legacy");
        $("#background-description-one").html("<p>You are the latest in a long line of Judges—born here, apprenticed to the prior Judge, and charged with the passing of the mantle. The Chronicle is a rich repository of lore, but there’s no index, so good luck fi nding anything.</p><p>When you <b><i>Know Things about the people or history of Stonetop</i></b>, you have advantage.</p><p>When you <b><i>spend days, weeks, or months poring over the Chronicle</i></b>, ask the GM a question, and the GM will tell you what you learn in that time.</p>");
        $("#background-name-two").text("Missionary");
        $("#background-description-two").html("<p>You are part of a larger order of Aratis, sent to Stonetop to spread the faith and protect the flickering flame of civilization. The Chronicle is new and a work in progress; your position in town is far from certain. Add the following Judges to the Neighbors section of the Stonetop playbook:</p><ul><li>Devin (from Marshedge)</li><li>Haeris (from Gordin's Delve)</li><li>Rahat (from Lygos)</li></ul><p>When you <b><i>call upon the Judge of another steading for aid or information</i></b>, they are oath-bound to give it. You are likewise oathbound to support them.</p><p>You have an aviary in addition to your usual choice of special possessions. When you <b><i>send a message via trained bird</i></b>, as is the way of the Judges of your order, the GM will tell you if and when you receive a response, and what it says.</p>");
        $("#background-name-three").text("Prophet");
        $("#background-description-three").html("<p>The line of Judges was broken long ago, the Chronicle lost or fallen into ruin. Aratis has called you personally to her service though dreams, omens, and visions. Some in town resent the authority you’ve assumed.</p>When you <b><i>spend a few days communing with Aratis about a threat facing Stonetop or civilization as a whole</i></b>, roll +WIS: <b>on a 7+</b>, Aratis reveals the course of action she would have you take; <b>on a 10+</b>, you also hold 2 Sanction. While <b><i>acting on her orders</i></b>, spend 1 Sanction to add +1 to a roll you just made.</p>");
    }

    if (playbook === "Lightbearer") {
        hitPoints = 18;
        damage = 4;
        $("#background-name-one").text("Auspicious Birth");
        $("#background-description-one").html("<p>You were born in Stonetop, and that birth was marked by the God of Light. You bear a sunshaped birthmark, perhaps, or maybe you were born during an eclipse?</p><p>Whatever the sign, your connection to Helior was clear early on. You’ve a place of honor in Stonetop, though it’d be a lie to say you don’t make some uneasy.</p><p>When <b><i>one of your moves would cause you to mark a debility</i></b>, you may mark this move instead, to no ill effect. When you <b><i>Make Camp</i></b>, clear the circle.</p>");
        $("#background-name-two").text("Itinerant Mystic");
        $("#background-description-two").html("<p>They think of you as a self-satisfi ed kook who comes through now and again, speaking in riddles and playing tricks with the light. Sure, they know there’s something holy about you, but it’s not like you’re a priest or anything. Priests talk sense.</p><p>When you <b><i>start a session away from the others or go off on your own to do something mysterious</i></b>, hold 1 Enigma. You or the GM may spend your Enigma at any time to have you appear out of the blue, with or without explanation, for all things are possible to one who walks with Helior.</p>");
        $("#background-name-three").text("Soul on Fire");
        $("#background-description-three").html("<p>You led a worldly life. A life of fear and doubt, base pleasures and petty grudges. A life like so many others. But something happened—injury, illness, a brush with Death; perhaps a moment of such profound misery and self-loathing that you thought you could fall no further.</p><p>Th ere, in the dark, Helior’s light shined upon you, igniting in your soul, lifting you and fi lling you with a profound sense of purpose.</p><p>When you <b><i>Persaude a group by preaching charity, mercy, and hope and roll a 7+</i></b>, aside from the usual effect, choose 1:</p><ul><li>Your name and your message spread</li><li>Someone approaches you, now or later, eager to know more</li></ul>");
    }

    if (playbook === "Marshal") {
        hitPoints = 20;
        damage = 8;
        $("#background-name-one").text("Scion");
        $("#background-description-one").html("<p>You grew up here, descended from a long line. Some of the biggest names in Stonetop’s past are perched in your family tree. Everyone in the village takes your authority as a given, and your crew is a well-established institution in town.</p><p>You start with the Veteran Crew move, in addition to your usual moves.</p><p>When you <b><i>create your Crew</i></b>, they automatically have the <i>respected</i> tag (in addition to your usual picks, and any you get from Veteran Crew).</p>");
        $("#background-name-two").text("Penitent");
        $("#background-description-two").html("<p>Before you came here, you led a band of ne’er-dowells: bandits, raiders, or bloody-handed mercenaries. But something changed. A moment of truth led you and your followers—some of them at least—to leave that life behind. And for whatever reason, the people of Stonetop took you in.</p><p>When you <b><i>draw on your bloody past to Know Things</i></b>, you may roll +STR instead of +INT. If you do, the GM will ask you who you wronged back then or who might still hold a grudge. Answer them now.</p><p>When you <b><i>create your Crew</i></b>, they automatically have the <i>warriors</i> tag (in addition to your usual picks).</p>");
        $("#background-name-three").text("Luminary");
        $("#background-description-three").html("<p>You’re a natural leader—your words inspire, your plans win the day, your deeds are recounted far and wide. How is it that a luminary like you hails from this backwater? Are you touched by the gods? Does ancient blood fl ow in your veins? Or are you simply the champion that Stonetop needs in these trying times?</p><p>You start with the We Happy Few move, in addition to your usual moves.</p><p>When you <b><i>create your Crew</i></b>, they start with the Glory cost, in addition to 1 other cost of your choice. You may use either cost to trigger the Pay Up move.</p>");
    }

    if (playbook === "Ranger") {
        hitPoints = 18;
        damage = 8;
        $("#background-name-one").text("Mighty Hunter");
        $("#background-description-one").html("<p>You are a hunter of the Great Wood, the best the town has seen in generations. You know every part of the Wood within a two-day march.</p><p>You start with both the Expert Tracker move and the Stalker move.</p>");
        $("#background-name-two").text("Wide Wanderer");
        $("#background-description-two").html("<p>You have travelled much of the known world and perhaps parts beyond. Add each of the following to the Neighbors list in the Stonetop playbook, choosing 1 trait for each:</p><ul><li>Ennis (from Marshedge)</li><li>Shahar (from Gordan's Delve)</li><li>Yannic (from the Hillfolk)</li><li>Tovia (from Lygos)</li><li>Sasca (frim the northern Manmarch</li></ul><p>You start with the Mental Map move.</p><p>When you <b><i>Know Things about the wider world</i></b>, you can roll +WIS instead of +INT.</p><p>When you <b><i>arrive somewhere you’ve visited before</i></b> (your call), tell the GM when you were last here, and the GM will tell you how it’s changed.</p>");
        $("#background-name-three").text("Beast-Bonded");
        $("#background-description-three").html("<p>You grew up civilized, but your soul is bound to a beast of the wild. You’re closer to it than to any man or woman. How did this bond come about? How long ago? Regardless, you start with the Animal Companion move.</p><p>When you <b><i>focus on your animal companion for a few moments</i></b>, you can use any of the actions you’ve marked below, no matter the distance between you. Mark 1 action at 1st level, then another at 3rd, 5th, 7th, and 9th.</p><ul><li>Gauge its distance and direction from you</li><li>Call it back to your side</li><li>Sense its emotional state</li><li>Get a brief impression of what it senses</li><li>Lend it your strength-lose 1d6 HP, and it regains an equal amount</li></ul>");
    }

    if (playbook === "Seeker") {
        hitPoints = 16;
        damage = 6;
        $("#background-name-one").text("Patriot");
        $("#background-description-one").html("<p>Th ese people are family. Chaos grows all around, but you’ll be damned if you’ll let your family come to harm. Damned indeed.</p><p>You have sought out and embraced dark power to protect that which you hold dear. Or perhaps that power fell upon you, and you took it up for the greater good. Either way, you seek more.</p><p>You start with the Let’s Make a Deal move and are Well Versed in the Things Below. You’ve also acquired 1 major arcanum:</p><ul><li>The Hec’tumel Codex</li><li>The Red Scepter</li><li>The Staff of the Lidless Orb</li></ul>");
        $("#background-name-two").text("Antiquarian");
        $("#background-description-two").html("<p>Th e past has buried many secrets, and you are determined to dig them up. Years of study across the land have led you here, and you are convinced that this town holds the key to your greatest discoveries. What is it you hope to fi nd? What is it that keeps you here?</p><p>In any case, your travels and studies mean that you start with the Polyglot move and that you are Well Versed in the Makers and their arts. You’ve also acquired 1 major arcanum:</p><ul><li>Noruba’s Ice-Sphere</li><li>The Azure Hand</li><li>The Mindgem</li></ul>");
        $("#background-name-three").text("Witch Hunter");
        $("#background-description-three").html("<p>You’ve dedicated your life to rooting out and destroying horrors and their servants. What set you down this path? What did you sacrifice to walk it? What led you to call Stonetop home?</p><p>Regardless, you start with the Everything Bleeds move and are Well Versed in (pick 1) the fae, the Things Below, or the Black Gates and what lies beyond (go mark them now). You’ve also acquired 1 major arcanum:</p><ul><li>The Demonhide Cloak</li><li>The Redwood Effigy</li><li>The Twisted Spear</li></ul>");
    }

    if (playbook === "Would-Be Hero") {
        hitPoints = 16;
        damage = 6;
        $("#background-name-one").text("Impetuous Youth");
        $("#background-description-one").html("<p>Stonetop has always been home, but you chafe at the demands of mundane life and have always longed for more. Excitement! Danger!</p><p>When you <b><i>make a move and come up short</i></b>, you can give it your all and turn a 6- into a 7-9, a 7-9 into a 10+, and (if it matters), a 10-11 into a 12+. But if you do, pick 1 (the GM will fill in the details):<ul><li>You get hurt (2d4 damage and an actual injury)</li><li>You cause collateral damage, endanger others, or otherwise escalate the situation</li><li>Something on your person is lost or breaks</li></ul>");
        $("#background-name-two").text("Driven");
        $("#background-description-two").html("<p>You once led a simple life, but something happened. Something changed you, burdened you with terrible purpose. What was it? Choose 1:</p><ul><li>A loved one was killed or abducted</li><li>Someone gave their life to save you</li><li>Your idol sacrificed themselves to save many</li><li>You stumbled upon a dark mystery</li><li>You must make amends for a terrible mistake</li></ul><p>You always have the option of Burning Bright; you can spend 2 XP after you roll to add +1, even if you don’t have enough XP to level.");
        $("#background-name-three").text("Destined");
        $("#background-description-three").html("<p>Fate has laid her hand upon you and set you on a course for greatness. Choose 3-4 of the items below to describe your destiny:</p><p>anointed, marked at birth, your coming foretold, destroy, discover, free, protect, restore, unify, blood, civilization, darkness, earth & stone, fire, ice, light, life, storms, war, water, the fae, the gods, the Makers, the Stone, the Things Below</p><p>When you <b><i>start a session</i></b>, roll +nothing: <b>on a 7+</b>, the GM will describe a recent omen, dream, or vision that points toward your fate; <b>on a 10+</b>, you can ask the GM a follow-up question and get a clear, helpful answer; <b>on a 6-</b>, tell us of the nightmares you’ve been having and how your fears play into them.</p><p>When you <b><i>are at Death’s Door</i></b>, ask yourself, “Is my destiny fulfilled?” If it is not, treat a miss as a 7-9 and a 7-9 as a 10+.</p>");
    }
})

$("#background-card-container").click(function(event){

    $("#last-drive").removeClass("hidden");
    $("#last-drive").addClass("drive-card");
    
    let element = event.target;

    if (element.matches(".background-select-btn")) {
        window.scrollTo(0, 0);
        $("#background-selector-container").addClass("hidden");
        $("#drive-selector-container").removeClass("hidden");
        background = element.getAttribute("data-background");
    }

    if (playbook === "Blessed") {
        $("#drive-name-one").text("Conciliation");
        $("#drive-description-one").text("Calm, soothe, or mollify a hostile spirit or beast.");
        $("#drive-name-two").text("Cultivation");
        $("#drive-description-two").text("Help an NPC learn, grow, or improve themselves.");
        $("#drive-name-three").text("Preservation");
        $("#drive-description-three").text("Convince others to protect something of natural beauty or of importance to Danu.");
        $("#drive-name-four").text("Renewal");
        $("#drive-description-four").text("Restore someone or thing to its prior, untainted state, or defeat a perversion of the natural order.");
        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Fox") {
        $("#drive-name-one").text("Conscience");
        $("#drive-description-one").text("Forego comfort or advantage to do the right thing.");
        $("#drive-name-two").text("Excitement");
        $("#drive-description-two").text("Cause an ally trouble by taking an unnecessary risk.");
        $("#drive-name-three").text("Glory");
        $("#drive-description-three").text("Show off in front of NPCs who will tell your tale.");
        $("#drive-name-four").text("Romance");
        $("#drive-description-four").text("Get intimate with someone you’re attracted to.");
        $("#drive-name-five").text("Trickery");
        $("#drive-description-five").text("Get someone or thing to act on false information.");
    }

    if (playbook === "Heavy") {
        $("#drive-name-one").text("Challenge");
        $("#drive-description-one").text("Provoke a fight with a worthy foe, just you & them.");
        $("#drive-name-two").text("Honor");
        $("#drive-description-two").text("Fullfill a vow or oath made to an NPC.");
        $("#drive-name-three").text("Peace");
        $("#drive-description-three").text("Prevent violence or end it without hurting anyone.");
        $("#drive-name-four").text("Pride");
        $("#drive-description-four").text("Put someone in their place.");
        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Judge") {
        $("#drive-name-one").text("Duty");
        $("#drive-description-one").text("Cause trouble by adhering strictly to doctrine.");
        $("#drive-name-two").text("Harmony");
        $("#drive-description-two").text("Settle a dispute without anyone feeling wronged.");
        $("#drive-name-three").text("Knowledge");
        $("#drive-description-three").text("Teach another something important.");
        $("#drive-name-four").text("Zeal");
        $("#drive-description-four").text("Pass judgement hastily, without considering nuance or consequences.");
        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Lightbearer") {
        $("#drive-name-one").text("Charity");
        $("#drive-description-one").text("Bring relief or comfort to someone who is suffering.");
        $("#drive-name-two").text("Faith");
        $("#drive-description-two").text("Walk brazenly into danger, sure of Helior’s plan.");
        $("#drive-name-three").text("Hope");
        $("#drive-description-three").text("Lead another to act despite fear or doubt.");
        $("#drive-name-four").text("Mercy");
        $("#drive-description-four").text("Forgive a wrong or set a helpless enemy free.");
        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Marshal") {
        $("#drive-name-one").text("Honor");
        $("#drive-description-one").text("Keep a promise you made to an NPC.");
        $("#drive-name-two").text("Prestige");
        $("#drive-description-two").text("Impress an NPC from outside your home steading.");
        $("#drive-name-three").text("Resolve");
        $("#drive-description-three").text("Give an order or enact a plan knowing it will bring an ally to harm.");
        $("#drive-name-four").text("Ruthlessness");
        $("#drive-description-four").text("Deny mercy to an enemy or betray a supposed ally.");
        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Ranger") {
        $("#drive-name-one").text("Mercy");
        $("#drive-description-one").text("Release someone/thing from bondage or suffering.");
        $("#drive-name-two").text("Stewardship");
        $("#drive-description-two").text("Put the best interests of a place or beast over a person’s desires.");
        $("#drive-name-three").text("Tenacity");
        $("#drive-description-three").text("Refuse to turn back despite objection or disaster.");
        $("#drive-name-four").text("Wonder");
        $("#drive-description-four").text("Show someone a place or thing of beauty.");
        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Seeker") {
        $("#drive-name-one").text("Cunning");
        $("#drive-description-one").text("Set up a ploy and then take advantage of it.");
        $("#drive-name-two").text("Curiosity");
        $("#drive-description-two").text("Cause trouble by touching, opening, or tinkering with something.");
        $("#drive-name-three").text("Respect");
        $("#drive-description-three").text("Impress another with your superior knowledge.");
        $("#drive-name-four").text("Secrecy");
        $("#drive-description-four").text("Deflect or evade an inquiry into your doings.");
        $("#drive-name-five").text("Victory");
        $("#drive-description-five").text("Endanger others in order to defeat the supernatural.");
    }

    if (playbook === "Would-Be Hero") {
        $("#drive-name-one").text("Bravery");
        $("#drive-description-one").text("Face up to one of your fears.");
        $("#drive-name-two").text("Glory");
        $("#drive-description-two").text("Impress onlookers with your bravery.");
        $("#drive-name-three").text("Sacrifice");
        $("#drive-description-three").text("Suffer or endure hardship so that someone else does not need to do so.");
        $("#drive-name-four").text("Succor");
        $("#drive-description-four").text("Provide aid or comfort to an NPC in need.");
        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }
})

$("#drive-card-container").click(function(event){
    
    let element = event.target;

    if (element.matches(".drive-select-btn")) {
        window.scrollTo(0, 0);
        $("#drive-selector-container").addClass("hidden");
        $("#origin-name-selector-container").removeClass("hidden");
        drive = element.getAttribute("data-drive");
        $("#name-input").val("");
    }

    if (playbook === "Blessed") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("The Steplands");
        $("#option-three").text("The Wild");
        $("#option-four").text("-");
        $("#option-five").text("-");
        $("#option-six").text("-");
        $("#origin").html("<p><b>Stonetop</b>:<br>Arwel, Blodwen, Brynmor, Celyn, Fflur, Gwynn, Tegwen, or Winned</p><p><b>The Steplands</b> (Hillfolk):<br>Bejn, Decla, Franza, Irv, Ivet, Jak, Sibl, or Yez</p><p><b>The Wild</b> (mix and match 1-3):<br>Autumn, Badger, Big, Black, Bloody, Brave, Crow, Cub, Dark, Doe, Fang, Fierce, Flower, Gentle, Green, Grim, Hart, Leaf, Little, Lonely, Old, Owl, Pale, Pup, Quick, Quiet, Rain, Red, Sharp, Snake, Snow, Spring, Summer, Tall, Tree, Yellow, White, Wind, Winter, Wolf, Whisper");
    }

    if (playbook === "Fox") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Gordin's Delve");
        $("#option-three").text("Marshedge");
        $("#option-four").text("Lygos");
        $("#option-five").text("-");
        $("#option-six").text("-");
        $("#origin").html("<p><b>Stonetop</b>:<br>Bran, Carwyn, Delyth, Elin, Fion, Geral, Mair, Rannon, Vaughn, or Wynn</p><p><b>Gordin’s Delve</b>:<br>Pick a name from any list</p><p><b>Marshedge</b>:<br>Comyna, Crevan, Fitz, Greagir, Maired, Nainsi, Naiclas, or Saraid</p><p><b>Lygos or some other point south</b>:<br>Amit, Baz, Dafna, Mahsa, Parviz, Sanaz, Tzofiya, Yaniv</p>");
    }

    if (playbook === "Heavy") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Gordin's Delve");
        $("#option-three").text("Marshedge");
        $("#option-four").text("The Steplands");
        $("#option-five").text("The Manmarch");
        $("#option-six").text("Lygos");
        $("#origin").html("<p><b>Stonetop</b>:<br>Aerona, Arthfael, Cadmor, Esyllt, Pedr, Rhonwen, Terrwen, or Trystan</p><p><b>Gordin’s Delve</b>:<br>Pick a name from any list</p><p><b>Marshedge</b>:<br>Aengus, Bairbre, Bronach, Flann, Laughn, Muirdoc, Quinn, or Treasa</p><p><b>The Steplands</b> (Hillfolk):<br>Andr, Gabrl, Kaetl, Mael, Maela, Par, Ral, or Umbert</p><p><b>The Manmarch</b>:<br> Bathhilde, Clothar, Ganter, Hiltrude, Ludig, Luise, Modd, or Wiland</p><p><b>Lygos or some other point south</b>:<br>Arihl, Akios, Bhadur, Seble, Shahnaz, Shay, Tisi, or Zubin</p>");
    }

    if (playbook === "Judge") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Gordin's Delve");
        $("#option-three").text("Marshedge");
        $("#option-four").text("Lygos");
        $("#option-five").text("-");
        $("#option-six").text("-");
        $("#origin").html("<p><b>Stonetop</b>:<br>Arianrhod, Caerwyn, Einion, Eleri, Magda, Nerys, Trahaern, or Trefor</p><p><b>Gordin’s Delve</b>:<br>Pick a name from any list</p><p><b>Marshedge</b>:<br>Briget, Comhall, Elnor, Liadain, Mirdach, Onghus, Somha, or Toal</p><p><b>Lygos or some other southern town</b>:<br>Abrim, Cassander, Despina, Hypatta, Morecai, Nomika, Sofia, or Yose</p>");
    }

    if (playbook === "Lightbearer") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Gordin's Delve");
        $("#option-three").text("Marshedge");
        $("#option-four").text("Lygos");
        $("#option-five").text("-");
        $("#option-six").text("-");
        $("#origin").html("<p><b>Stonetop</b>:<br>Dai, Eirian, Eurig, Haf, Haul, Hefin, Hulwen, or Tesni</p><p><b>Gordin’s Delve</b>:<br>Pick a name from any list</p><p><b>Marshedge</b>:<br>Adfin, Callach, Conlad, Eadna, Fionntan, Niamh, Orlaith, or Sorsha</p><p><b>Lygos or some other point south</b>:<br>Arash, Azar, Hafiz, Murat, Roshan, Shideh, Zara, or Zohara</p>");
    }

    if (playbook === "Marshal") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Gordin's Delve");
        $("#option-three").text("Marshedge");
        $("#option-four").text("The Steplands");
        $("#option-five").text("The Manmarch");
        $("#option-six").text("Lygos");
        $("#origin").html("<p><b>Stonetop</b>:<br>Bethan, Cadfael, Ffraid, Gwythyr, Llewelyn, Meredith, Rhianna, or Urien</p><p><b>Gordin’s Delve</b>:<br>Pick a name from any list</p><p><b>Marshedge</b>: Brigh, Cathal, Conn, Donal, Fionna, Laith, Talulla, or Torin</p><p><b>Steplands</b> (Hillfolk):<br>Adl, Aeln, Clotild, Judoc, Katrn, Mygl, Pirn, or Sera</p><p><b>The Manmarch</b>:<br>Berkhard, Gerhild, Hartig, Hilde, Sabrinne, Ulrike, Urrsla, or Weillem</p><p><b>Lygos or some other point south</b>:<br>Ameer, Calixta, Hadar, Kelila, Sulaim, Ursa or Xandros");
    }

    if (playbook === "Ranger") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Marshedge");
        $("#option-three").text("The Steplands");
        $("#option-four").text("The Manmarch");
        $("#option-five").text("Lygos");
        $("#option-six").text("-");
        $("#origin").html("<p><b>Stonetop</b>:<br>Aran, Bledyn, Branwen, Deryn, Ifur, Meinir, Rhys or Teagan</p><p><b>Marshedge</b>:<br>Asling, Conar, Enna, Flannan, Macha, Mave, Proinsias, or Rowen</p><p><b>The Steplands</b> (Hillfolk):<br>Bernd, Elown, Irn, Kani, Pol, Nol, Rozn, or Sterin</p><p><b>The Manmarch</b>:<br>Alfher, Bertrim, Dagmar, Elfrida, Hramn, Meike, Swanhilde, or Wulfrim</p><p><b>Lygos or some other point south</b>:<br>Ari, Boriz, Dimitra, Gorhan, Nitza, Selen, Todora, or Vasil</p>");
    }

    if (playbook === "Seeker") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("The Steplands");
        $("#option-three").text("Gordin's Delve");
        $("#option-four").text("Marshedge");
        $("#option-five").text("Lygos");
        $("#option-six").text("-");
        $("#origin").html("<p><b>Stonetop</b>:<br>Alis, Dylan, Eilwen, Gerlt, Gwenda, Macsen, Mirgan, Owena, Taliesyn, or Twymor</p><p><b>The Steplands</b> (Hillfolk):<br>Anook, Anxo, Dors, Jory, Mari, Padg, Pons, or Silf</p><p><b>Gordin’s Delve</b>:<br>Pick a name from any list</p><p><b>Marshedge</b>:<br>Aiden, Barrfind, Caolan, Ciara, Deirbhile, Moirin, Tiern, or Reamann</p><p><b>Lygos or another southern town</b>:<br>Dana, Eliana, Erez, Fikri, Isra, Persefoni, Spiro, or Vahid</p>");
    }

    if (playbook === "Would-Be Hero") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("The Steplands");
        $("#option-three").text("Gordin's Delve");
        $("#option-four").text("Marshedge");
        $("#option-five").text("Lygos");
        $("#option-six").text("-");
        $("#origin").html("<p><b>Stonetop</b>:<br>Anwen, Caradoc, Dafyd, Glenys, Madoc, Morwenna, Siwan, or Wynfor</p><p><b>The Steplands</b> (Hillfolk):<br>Annic, Cosette, Denl, Hugenne, Jag, Marc, Oanz, or Sandre</p><p><b>Gordin’s Delve</b>:<br>Pick a name from any list</p><p><b>Marshedge</b>:<br>Bridin, Clian, Engis, Fearghul, Lan, Neasa, Nill, or Una</p><p><b>Lygos or some other southern town</b>:<br>Chara, Davud, Korina, Omid, Parvaneh, Tamir, Takish, or Yannis</p>");
    }
})

$(".origin-name-btn").click(function(){
    
    if (!$("#name-input").val() || !$("#option option:selected").text() || $("#option option:selected").text() === "-") {
        return;
    }

    window.scrollTo(0, 0);
    
    $("#origin-name-selector-container").addClass("hidden");
    $("#stats-selector-container").removeClass("hidden");
    characterName = $("#name-input").val().trim();
    origin = $("#option").val();
})

$(".stat-select-btn").click(function(){

    if ($("#stat-one").val() === "-" || $("#stat-two").val() === "-" || $("#stat-three").val() === "-" || $("#stat-four").val() === "-" || $("#stat-five").val() === "-" || $("#stat-six").val() === "-") {
    return;
    }

    $("#stats-selector-container").addClass("hidden");

    $("header").removeClass("hidden");

    localStorage.clear();

    window.scrollTo(0, 0);

    str = $("#stat-one").val();
    dex = $("#stat-two").val();
    int = $("#stat-three").val();
    wis = $("#stat-four").val();
    con = $("#stat-five").val();
    cha = $("#stat-six").val();

    // localStorage.setItem("playbook", playbook);

//set things to local storage via object

    let newCharacter = {
        playbook: playbook,
        background: background,
        drive: drive,
        hitPoints: hitPoints,
        damage: damage,
        characterName: characterName,
        origin: origin,
        str: str,
        dex: dex,
        int: int,
        wis: wis,
        con: con,
        cha: cha
    };    
    
    localStorage.setItem("new-character", JSON.stringify(newCharacter));

    let stonetopHero = JSON.parse(localStorage.getItem("new-character"));

    console.log(stonetopHero);

    $("#select-character-btn").removeClass("hidden").text(stonetopHero.characterName);

    onFrontPage = true;

    $("#create-character-btn").text("Create a Character");
})

$("#strength").click(function(){
    statRollNormal(parseInt(stonetopHero.str));
    statRollAdvantage(parseInt(stonetopHero.str));
    statRollDisadvantage(parseInt(stonetopHero.str));

    $("#roll").html(`<b><i>Strength</i></b><br>Normal: <b>${rollNormal}</b><br>Advantage: <b>${rollAdvantage}</b><br>Disadvantage: <b>${rollDisadvantage}</b>`);

    window.scrollTo(0,document.body.scrollHeight);
})

$("#dexterity").click(function(){
    statRollNormal(parseInt(stonetopHero.dex));
    statRollAdvantage(parseInt(stonetopHero.dex));
    statRollDisadvantage(parseInt(stonetopHero.dex));

    $("#roll").html(`<b><i>Dexterity</i></b><br>Normal: <b>${rollNormal}</b><br>Advantage: <b>${rollAdvantage}</b><br>Disadvantage: <b>${rollDisadvantage}</b>`);

    window.scrollTo(0,document.body.scrollHeight);
})

$("#intelligence").click(function(){
    statRollNormal(parseInt(stonetopHero.int));
    statRollAdvantage(parseInt(stonetopHero.int));
    statRollDisadvantage(parseInt(stonetopHero.int));

    $("#roll").html(`<b><i>Intelligence</i></b><br>Normal: <b>${rollNormal}</b><br>Advantage: <b>${rollAdvantage}</b><br>Disadvantage: <b>${rollDisadvantage}</b>`);

    window.scrollTo(0,document.body.scrollHeight);
})

$("#wisdom").click(function(){
    statRollNormal(parseInt(stonetopHero.wis));
    statRollAdvantage(parseInt(stonetopHero.wis));
    statRollDisadvantage(parseInt(stonetopHero.wis));

    $("#roll").html(`<b><i>Wisdom</i></b><br>Normal: <b>${rollNormal}</b><br>Advantage: <b>${rollAdvantage}</b><br>Disadvantage: <b>${rollDisadvantage}</b>`);

    window.scrollTo(0,document.body.scrollHeight);
})

$("#constitution").click(function(){
    statRollNormal(parseInt(stonetopHero.con));
    statRollAdvantage(parseInt(stonetopHero.con));
    statRollDisadvantage(parseInt(stonetopHero.con));

    $("#roll").html(`<b><i>Constitution</i></b><br>Normal: <b>${rollNormal}</b><br>Advantage: <b>${rollAdvantage}</b><br>Disadvantage: <b>${rollDisadvantage}</b>`);

    window.scrollTo(0,document.body.scrollHeight);
})

$("#charisma").click(function(){
    statRollNormal(parseInt(stonetopHero.cha));
    statRollAdvantage(parseInt(stonetopHero.cha));
    statRollDisadvantage(parseInt(stonetopHero.cha));

    $("#roll").html(`<b><i>Charisma</i></b><br>Normal: <b>${rollNormal}</b><br>Advantage: <b>${rollAdvantage}</b><br>Disadvantage: <b>${rollDisadvantage}</b>`);

    window.scrollTo(0,document.body.scrollHeight);
})

$("#damage-display").click(function(){
    damageRollNormal(stonetopHero.damage);
    damageRollAdvantage(stonetopHero.damage);
    damageRollDisadvantage(stonetopHero.damage);

    $("#roll").html(`<b><i>Damage</i></b><br>Normal: <b>${rollNormal}</b><br>Advantage: <b>${rollAdvantage}</b><br>Disadvantage: <b>${rollDisadvantage}</b>`);

    window.scrollTo(0,document.body.scrollHeight);
})

function statRollNormal(stat) {
    let rollOne = Math.floor(Math.random() * 6) + 1;
    let rollTwo = Math.floor(Math.random() * 6) + 1;

    rollNormal = rollOne + rollTwo + stat;
}

function statRollAdvantage(stat) {
    let rollOne = Math.floor(Math.random() * 6) + 1;
    let rollTwo = Math.floor(Math.random() * 6) + 1;
    let rollThree = Math.floor(Math.random() * 6) + 1;

    if (rollThree <= rollTwo && rollThree <= rollOne) {
        rollAdvantage = rollOne + rollTwo + stat;
    } else if (rollTwo <= rollOne && rollTwo <= rollThree) {
        rollAdvantage = rollOne + rollThree + stat;
    } else {
        rollAdvantage = rollTwo + rollThree + stat;
    }
}

function statRollDisadvantage(stat) {
    let rollOne = Math.floor(Math.random() * 6) + 1;
    let rollTwo = Math.floor(Math.random() * 6) + 1;
    let rollThree = Math.floor(Math.random() * 6) + 1;

    if (rollThree >= rollTwo && rollThree >= rollOne) {
        rollDisadvantage = rollOne + rollTwo + stat;
    } else if (rollTwo >= rollOne && rollTwo >= rollThree) {
        rollDisadvantage = rollOne + rollThree + stat;
    } else {
        rollDisadvantage = rollTwo + rollThree + stat;
    }
}

function damageRollNormal(damage) {
    let rollOne = Math.floor(Math.random() * damage) + 1;

    rollNormal = rollOne;
}

function damageRollAdvantage(damage) {
    let rollOne = Math.floor(Math.random() * damage) + 1;
    let rollTwo = Math.floor(Math.random() * damage) + 1;

    if (rollOne >= rollTwo) {
        rollAdvantage = rollOne;
    } else {
        rollAdvantage = rollTwo;
    }  
}

function damageRollDisadvantage(damage) {
    let rollOne = Math.floor(Math.random() * damage) + 1;
    let rollTwo = Math.floor(Math.random() * damage) + 1;

    if (rollOne >= rollTwo) {
        rollDisadvantage = rollTwo;
    } else {
        rollDisadvantage = rollOne;
    }  
}

function initialize(){

    $("#create-character-btn").text("Create a Character");

    stonetopHero = JSON.parse(localStorage.getItem("new-character"));

    if (stonetopHero) {

        $("#select-character-btn").removeClass("hidden").text(stonetopHero.characterName);
    }

    console.log(stonetopHero);
}

initialize();