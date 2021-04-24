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

// const {blessed, fox, heavy, judge, lightbearer, marhsal, ranger, seeker, wouldBeHero} = allBackgrounds;
// const {blessed, fox, heavy, judge, lightbearer, marhsal, ranger, seeker, wouldBeHero} = allDrives;
// const {blessed, fox, heavy, judge, lightbearer, marhsal, ranger, seeker, wouldBeHero} = allMoves;

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

        $("#move-aid").html(allBasicMoves.aid);
        $("#move-clash").html(allBasicMoves.clash);
        $("#move-defend").html(allBasicMoves.defend);
        $("#move-defy-danger").html(allBasicMoves.defyDanger);
        $("#move-interfere").html(allBasicMoves.interfere);
        $("#move-know-things").html(allBasicMoves.knowThings);
        $("#move-let-fly").html(allBasicMoves.letFly);
        $("#move-persuade-npc").html(allBasicMoves.persuadeNPCs);
        $("#move-persuade-pc").html(allBasicMoves.persuadePCs);
        $("#move-seek-insight").html(allBasicMoves.seekInsight);

        if (stonetopHero.playbook === "Blessed") {

            $("#playbook-moves-sheet-container").children().addClass("move-card");

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
                $("#background-display").html(allBackgrounds.blessed.initiate);

                $("#background-move-title").text("Rites of the Land");
                $("#background-move-content").html("<p>When <b><i>Seasons Change and you oversee the sacred rites</i></b>, you can sacrifice 2 Surplus to increase the steading’s Fortunes by 1 (max +3). If you sacrifice something (or someone) much-loved and greatly valued, you can redo a roll from Seasons Change, with your choice of advantage or disdvantage.</p>");

            } else if (stonetopHero.background === "two") {

                $("#background-display").html(allBackgrounds.blessed.raisedByWolves);

                $("#background-move-title").text("Trackless Step");
                $("#background-move-content").html("<p>When you <b><i>move through nature with care and patience</i></b>, you make no sound, leave no trace and can ignore any hindering or treacherous terrain (briars, mire, scree, etc.). <b><i>When you spend 1 Stock and mark others</i></b>, they each gain this benefit so long as the mark remains. 1 Stock can mark a number of individuals up to your level +INT.</p>");

            } else if (stonetopHero.background === "three") {

                $("#background-display").html(allBackgrounds.blessed.vessel);

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
                $("#background-display").html(allBackgrounds.fox.theNatural);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "two") {

                $("#background-display").html(allBackgrounds.fox.aLifeOfCrime);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-display").html(allBackgrounds.fox.theProdigalReturned);

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
                $("#background-display").html(allBackgrounds.heavy.sheriff);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "two") {

                $("#background-display").html(allBackgrounds.heavy.bloodSoakedPast);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-display").html(allBackgrounds.heavy.stormMarked);
                
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
                $("#background-display").html(allBackgrounds.judge.legacy);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "two") {

                $("#background-display").html(allBackgrounds.judge.missionary);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-display").html(allBackgrounds.judge.prophet);

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
                $("#background-display").html(allBackgrounds.lightbearer.auspiciousBirth);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "two") {

                $("#background-display").html(allBackgrounds.lightbearer.itinerantMystic);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-display").html(allBackgrounds.lightbearer.soulOnFire);

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
                $("#background-display").html(allBackgrounds.marshal.scion);

                $("#background-move-title").text("Veteran Crew");
                $("#background-move-content").html("<p>Each time you take this move, pick 1. You can also choose to reselect their Instinct and Cost.</p><ul><li>Select 2 new tags for your Crew</li><li>Increase their damage die from d6 to d8</li><li>Increase their max HP by 2 each</li></ul>");

            } else if (stonetopHero.background === "two") {

                $("#background-display").html(allBackgrounds.marshal.penitent);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").html(allBackgrounds.marshal.luminary);

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
                $("#background-display").html(allBackgrounds.ranger.mightyHunter);

                $("#move-two-title").text("Expert Tracker");
                $("#move-two-content").html("<p>When you <b><i>Seek Insight by searching for tracks or studying the signs left by passing creatures</i></b>, you can ask “What happened here recently?” for free, even on a 6-.</p><p>When you <b><i>follow a creature’s trail</i></b>, roll +WIS: <b>on a 7+</b> you follow the trail to a significant change in direction, terrain, or mode of transport; <b>on a 10+</b>, you can also ask the GM a reasonable question about your quarry and get an honest, useful answer.</p>");

                $("#background-move-title").text("Stalker");
                $("#background-move-content").html("<p>When you <b><i>carry a normal or light load and move with care</i></b>, you make no noise and leave no sign of your passing. When you <b><i>hide yourself in a natural environment</i></b>, you remain unseen until you draw attention to yourself, move positions, or attack.</p>");

            } else if (stonetopHero.background === "two") {

                $("#background-display").html(allBackgrounds.ranger.wideWanderer);

                $("#background-move-title").text("Mental Map");
                $("#background-move-content").html("<p>You can always retrace your steps and can accurately gauge distances and directions. You might not know the way forward but can always find your way back.</p><p>When you <b><i>think back on a place you’ve been to or observed</i></b>, you can retroactively Seek Insight about it as if you were still there.</p>");

            } else if (stonetopHero.background === "three") {

                $("#background-display").html(allBackgrounds.ranger.beastBonded);

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
                $("#background-display").html(allBackgrounds.seeker.patriot);

                $("#background-move-title").text("Let's Make a Deal");
                $("#background-move-content").html("<p>When you <b><i>Seek Insight</i></b>, add “What do they really want or need?” to the list of questions. When you <b><i>Persuade by offering them something that you know they want or need</i></b>, treat a 7-9 as a 10+.</p>");

            } else if (stonetopHero.background === "two") {

                $("#background-display").html(allBackgrounds.seeker.antiquarian);

                $("#background-move-title").text("Polyglot");
                $("#background-move-content").html("<p>When you <b><i>first encounter a living language in play</i></b>, describe your proficiency with it (if any) and how you came to acquire it.</p><p>When you <b><i>Know Things about any script, text, runes or symbols that you encounter</i></b>, you have advantage.");

            } else if (stonetopHero.background === "three") {

                $("#background-display").html(allBackgrounds.seeker.witchHunter);

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
                $("#background-display").html(allBackgrounds.wouldBeHero.impetuousYouth);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "two") {

                $("#background-display").html(allBackgrounds.wouldBeHero.driven);

                $("#background-move-title").text("");
                $("#background-move-content").html("");

            } else if (stonetopHero.background === "three") {

                $("#background-sheet-name").html(allBackgrounds.wouldBeHero.destined);

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

        $("#background-create-one").html(allBackgrounds.blessed.initiate);
        $("#background-create-two").html(allBackgrounds.blessed.raisedByWolves);
        $("#background-create-three").html(allBackgrounds.blessed.vessel);
    }

    if (playbook === "Fox") {
        hitPoints = 16;
        damage = 8;
        
        $("#background-create-one").html(allBackgrounds.fox.theNatural);
        $("#background-create-two").html(allBackgrounds.fox.aLifeOfCrime);
        $("#background-create-three").html(allBackgrounds.fox.theProdigalReturned);
    }

    if (playbook === "Heavy") {
        hitPoints = 20;
        damage = 10;
        
        $("#background-create-one").html(allBackgrounds.heavy.sheriff);
        $("#background-create-two").html(allBackgrounds.heavy.bloodSoakedPast);
        $("#background-create-three").html(allBackgrounds.heavy.stormMarked);
    }

    if (playbook === "Judge") {
        hitPoints = 20;
        damage = 6;
        
        $("#background-create-one").html(allBackgrounds.judge.legacy);
        $("#background-create-two").html(allBackgrounds.judge.missionary);
        $("#background-create-three").html(allBackgrounds.judge.prophet);
    }

    if (playbook === "Lightbearer") {
        hitPoints = 18;
        damage = 4;
        
        $("#background-create-one").html(allBackgrounds.lightbearer.auspiciousBirth);
        $("#background-create-two").html(allBackgrounds.lightbearer.itinerantMystic);
        $("#background-create-three").html(allBackgrounds.lightbearer.soulOnFire);
    }

    if (playbook === "Marshal") {
        hitPoints = 20;
        damage = 8;
        
        $("#background-create-one").html(allBackgrounds.marshal.scion);
        $("#background-create-two").html(allBackgrounds.marshal.penitent);
        $("#background-create-three").html(allBackgrounds.marshal.luminary);
    }

    if (playbook === "Ranger") {
        hitPoints = 18;
        damage = 8;
        
        $("#background-create-one").html(allBackgrounds.ranger.mightyHunter);
        $("#background-create-two").html(allBackgrounds.ranger.wideWanderer);
        $("#background-create-three").html(allBackgrounds.ranger.beastBonded);
    }

    if (playbook === "Seeker") {
        hitPoints = 16;
        damage = 6;
        
        $("#background-create-one").html(allBackgrounds.seeker.patriot);
        $("#background-create-two").html(allBackgrounds.seeker.antiquarian);
        $("#background-create-three").html(allBackgrounds.seeker.witchHunter);
    }

    if (playbook === "Would-Be Hero") {
        hitPoints = 16;
        damage = 6;
        
        $("#background-create-one").html(allBackgrounds.wouldBeHero.impetuousYouth);
        $("#background-create-two").html(allBackgrounds.wouldBeHero.driven);
        $("#background-create-three").html(allBackgrounds.wouldBeHero.destined);
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
        $("#drive-create-one").html(allDrives.blessed.conciliation);
        $("#drive-create-two").html(allDrives.blessed.cultivation);
        $("#drive-create-three").html(allDrives.blessed.preservation);
        $("#drive-create-four").html(allDrives.blessed.renewal);
        
        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Fox") {
        $("#drive-create-one").html(allDrives.fox.conscience);
        $("#drive-create-two").html(allDrives.fox.excitement);
        $("#drive-create-three").html(allDrives.fox.glory);
        $("#drive-create-four").html(allDrives.fox.romance);
        $("#drive-create-five").html(allDrives.fox.trickery);
    }

    if (playbook === "Heavy") {
        $("#drive-create-one").html(allDrives.heavy.challenge);
        $("#drive-create-two").html(allDrives.heavy.honor);
        $("#drive-create-three").html(allDrives.heavy.peace);
        $("#drive-create-four").html(allDrives.heavy.pride);

        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Judge") {
        $("#drive-create-one").html(allDrives.judge.duty);
        $("#drive-create-two").html(allDrives.judge.harmony);
        $("#drive-create-three").html(allDrives.judge.knowledge);
        $("#drive-create-four").html(allDrives.judge.zeal);

        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Lightbearer") {
        $("#drive-create-one").html(allDrives.lightbearer.charity);
        $("#drive-create-two").html(allDrives.lightbearer.faith);
        $("#drive-create-three").html(allDrives.lightbearer.hope);
        $("#drive-create-four").html(allDrives.lightbearer.mercy);

        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Marshal") {
        $("#drive-create-one").html(allDrives.marshal.honor);
        $("#drive-create-two").html(allDrives.marshal.prestige);
        $("#drive-create-three").html(allDrives.marshal.resolve);
        $("#drive-create-four").html(allDrives.marshal.ruthlessness);
        
        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Ranger") {
        $("#drive-create-one").html(allDrives.ranger.mercy);
        $("#drive-create-two").html(allDrives.ranger.stewardship);
        $("#drive-create-three").html(allDrives.ranger.tenacity);
        $("#drive-create-four").html(allDrives.ranger.wonder);

        $("#last-drive").removeClass("drive-card");
        $("#last-drive").addClass("hidden");
    }

    if (playbook === "Seeker") {
        $("#drive-create-one").html(allDrives.seeker.cunning);
        $("#drive-create-two").html(allDrives.seeker.curiosity);
        $("#drive-create-three").html(allDrives.seeker.respect);
        $("#drive-create-four").html(allDrives.seeker.secrecy);
        $("#drive-create-five").html(allDrives.seeker.victory);
    }

    if (playbook === "Would-Be Hero") {
        $("#drive-create-one").html(allDrives.wouldBeHero.bravery);
        $("#drive-create-two").html(allDrives.wouldBeHero.glory);
        $("#drive-create-three").html(allDrives.wouldBeHero.sacrifice);
        $("#drive-create-four").html(allDrives.wouldBeHero.succor);

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
        $("#origin").html(allOrigins.blessed);
    }

    if (playbook === "Fox") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Gordin's Delve");
        $("#option-three").text("Marshedge");
        $("#option-four").text("Lygos");
        $("#option-five").text("-");
        $("#option-six").text("-");
        $("#origin").html(allOrigins.fox);
    }

    if (playbook === "Heavy") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Gordin's Delve");
        $("#option-three").text("Marshedge");
        $("#option-four").text("The Steplands");
        $("#option-five").text("The Manmarch");
        $("#option-six").text("Lygos");
        $("#origin").html(allOrigins.heavy);
    }

    if (playbook === "Judge") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Gordin's Delve");
        $("#option-three").text("Marshedge");
        $("#option-four").text("Lygos");
        $("#option-five").text("-");
        $("#option-six").text("-");
        $("#origin").html(allOrigins.judge);
    }

    if (playbook === "Lightbearer") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Gordin's Delve");
        $("#option-three").text("Marshedge");
        $("#option-four").text("Lygos");
        $("#option-five").text("-");
        $("#option-six").text("-");
        $("#origin").html(allOrigins.lightbearer);
    }

    if (playbook === "Marshal") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Gordin's Delve");
        $("#option-three").text("Marshedge");
        $("#option-four").text("The Steplands");
        $("#option-five").text("The Manmarch");
        $("#option-six").text("Lygos");
        $("#origin").html(allOrigins.marshal);
    }

    if (playbook === "Ranger") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("Marshedge");
        $("#option-three").text("The Steplands");
        $("#option-four").text("The Manmarch");
        $("#option-five").text("Lygos");
        $("#option-six").text("-");
        $("#origin").html(allOrigins.ranger);
    }

    if (playbook === "Seeker") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("The Steplands");
        $("#option-three").text("Gordin's Delve");
        $("#option-four").text("Marshedge");
        $("#option-five").text("Lygos");
        $("#option-six").text("-");
        $("#origin").html(allOrigins.seeker);
    }

    if (playbook === "Would-Be Hero") {
        $("#option-one").text("Stonetop");
        $("#option-two").text("The Steplands");
        $("#option-three").text("Gordin's Delve");
        $("#option-four").text("Marshedge");
        $("#option-five").text("Lygos");
        $("#option-six").text("-");
        $("#origin").html(allOrigins.playbook);
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