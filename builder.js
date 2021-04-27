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
let listOfMoves = [];
let isLightMode = true;

// const {blessed, fox, heavy, judge, lightbearer, marhsal, ranger, seeker, wouldBeHero} = allBackgrounds;
// const {blessed, fox, heavy, judge, lightbearer, marhsal, ranger, seeker, wouldBeHero} = allDrives;
// const {blessed, fox, heavy, judge, lightbearer, marhsal, ranger, seeker, wouldBeHero} = allMoves;

// $("#light-mode-btn").click(function(){
//     if (isLightMode) {
//         $("#light-mode-btn").text("Dark Mode");
//         $("body").removeClass("light-mode");
//         $("body").addClass("dark-mode");
//         isLightMode === false;
//         localStorage.setItem("is-light-mode", isLightMode);
//     }
//     $("#light-mode-btn").text("Light Mode");
//     $("body").removeClass("dark-mode");
//     $("body").addClass("light-mode");
//     isLightMode === true;
//     localStorage.setItem("is-light-mode", isLightMode);
// })

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

        $("#add-playbook-moves-sheet-container").addClass("hidden");

        listOfMoves = [];
        $(".move-remove").remove();

        onFrontPage = false;

        if (stonetopHero.playbook === "Blessed") {

            listOfMoves.push(allPlaybookMoves.blessed.spiritTongue);
            listOfMoves.push(allPlaybookMoves.blessed.callTheSpirits);

            console.log(listOfMoves);

            if (stonetopHero.origin === "option-one") {
                $("#origin-sheet").html("<h4>Stonetop</h4>");
            } else if (stonetopHero.origin === "option-two") {
                $("#origin-sheet").html("<h4>The Steplands</h4>");
            } else if (stonetopHero.origin === "option-three") {
                $("#origin-sheet").html("<h4>The Wild</h4>");
            }

            if (stonetopHero.drive === "one") {
                $("#drive-sheet").html(allDrives.blessed.conciliation);
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet").html(allDrives.blessed.cultivation);
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet").html(allDrives.blessed.preservation);
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet").html(allDrives.blessed.renewal);
            }

            if (stonetopHero.background === "one") {
                $("#background-display").html(allBackgrounds.blessed.initiate);

                listOfMoves.push(allPlaybookMoves.blessed.ritesOfTheLand);
                
            } else if (stonetopHero.background === "two") {

                $("#background-display").html(allBackgrounds.blessed.raisedByWolves);

                listOfMoves.push(allPlaybookMoves.blessed.tracklessStep);

            } else if (stonetopHero.background === "three") {

                $("#background-display").html(allBackgrounds.blessed.vessel);

                listOfMoves.push(allPlaybookMoves.blessed.danusGrasp);
            }

            for (let i = 0; i < listOfMoves.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("move-card");
                newDiv.classList.add("move-remove");
                newDiv.innerHTML = listOfMoves[i];
                $("#super-test").append(newDiv);
            }
        }

        if (stonetopHero.playbook === "Fox") {

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
                $("#drive-sheet").html(allDrives.fox.conscience);
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet").html(allDrives.fox.excitement);
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet").html(allDrives.fox.glory);
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet").html(allDrives.fox.romance);
            } else if (stonetopHero.drive === "five") {
                $("#drive-sheet").html(allDrives.fox.trickery);
            }

            if (stonetopHero.background === "one") {
                $("#background-display").html(allBackgrounds.fox.theNatural);
            } else if (stonetopHero.background === "two") {
                $("#background-display").html(allBackgrounds.fox.aLifeOfCrime);
            } else if (stonetopHero.background === "three") {
                $("#background-display").html(allBackgrounds.fox.theProdigalReturned);
            }
        }

        if (stonetopHero.playbook === "Heavy") {

            listOfMoves.push(allPlaybookMoves.heavy.dangerous);
            listOfMoves.push(allPlaybookMoves.heavy.hardToKill);

            console.log(listOfMoves);

            for (let i = 0; i < listOfMoves.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("move-card");
                newDiv.classList.add("move-remove");
                newDiv.innerHTML = listOfMoves[i];
                $("#super-test").append(newDiv);
            }

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
                $("#drive-sheet").html(allDrives.heavy.challenge);
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet").html(allDrives.heavy.honor);
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet").html(allDrives.heavy.peace);
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet").html(allDrives.heavy.pride);
            }

            if (stonetopHero.background === "one") {
                $("#background-display").html(allBackgrounds.heavy.sheriff);
            } else if (stonetopHero.background === "two") {
                $("#background-display").html(allBackgrounds.heavy.bloodSoakedPast);
            } else if (stonetopHero.background === "three") {
                $("#background-display").html(allBackgrounds.heavy.stormMarked);
            }
        }

        if (stonetopHero.playbook === "Judge") {

            listOfMoves.push(allPlaybookMoves.judge.censure);
            listOfMoves.push(allPlaybookMoves.judge.chroniclerOfStonetop);

            console.log(listOfMoves);

            for (let i = 0; i < listOfMoves.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("move-card");
                newDiv.classList.add("move-remove");
                newDiv.innerHTML = listOfMoves[i];
                $("#super-test").append(newDiv);
            }

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
                $("#drive-sheet").html(allDrives.judge.duty);
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet").html(allDrives.judge.harmony);
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet").html(allDrives.judge.knowThings);
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet").html(allDrives.judge.zeal);
            }

            if (stonetopHero.background === "one") {
                $("#background-display").html(allBackgrounds.judge.legacy);
            } else if (stonetopHero.background === "two") {
                $("#background-display").html(allBackgrounds.judge.missionary);
            } else if (stonetopHero.background === "three") {
                $("#background-sheet-display").html(allBackgrounds.judge.prophet);
            }
        }

        if (stonetopHero.playbook === "Lightbearer") {
            
            listOfMoves.push(allPlaybookMoves.lightbearer.consecratedFlame);
            listOfMoves.push(allPlaybookMoves.lightbearer.invokeTheSunGod);

            console.log(listOfMoves);

            for (let i = 0; i < listOfMoves.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("move-card");
                newDiv.classList.add("move-remove");
                newDiv.innerHTML = listOfMoves[i];
                $("#super-test").append(newDiv);
            }

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
                $("#drive-sheet").html(allDrives.lightbearer.charity);
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet").html(allDrives.lightbearer.faith);
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet").html(allDrives.lightbearer.hope);
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet").html(allDrives.lightbearer.mercy);
            }

            if (stonetopHero.background === "one") {
                $("#background-display").html(allBackgrounds.lightbearer.auspiciousBirth);
            } else if (stonetopHero.background === "two") {
                $("#background-display").html(allBackgrounds.lightbearer.itinerantMystic);
            } else if (stonetopHero.background === "three") {
                $("#background-display").html(allBackgrounds.lightbearer.soulOnFire);
            }
        }

        if (stonetopHero.playbook === "Marshal") {

            listOfMoves.push(allPlaybookMoves.marshal.crew);
            listOfMoves.push(allPlaybookMoves.marshal.logistics);

            console.log(listOfMoves);

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
                $("#drive-sheet").html(allDrives.marshal.honor);
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet").html(allDrives.marshal.prestige);
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet").html(allDrives.marshal.resolve);
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet").html(allDrives.marshal.ruthlessness);
            }

            if (stonetopHero.background === "one") {
                $("#background-display").html(allBackgrounds.marshal.scion);
                listOfMoves.push(allPlaybookMoves.marshal.veteranCrew);
            } else if (stonetopHero.background === "two") {
                $("#background-display").html(allBackgrounds.marshal.penitent);
            } else if (stonetopHero.background === "three") {
                $("#background-display").html(allBackgrounds.marshal.luminary);
                listOfMoves.push(allPlaybookMoves.marshal.weHappyFew);
            }

            for (let i = 0; i < listOfMoves.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("move-card");
                newDiv.classList.add("move-remove");
                newDiv.innerHTML = listOfMoves[i];
                $("#super-test").append(newDiv);
            }
        }

        if (stonetopHero.playbook === "Ranger") {

            listOfMoves.push(allPlaybookMoves.ranger.homeOnTheRange);

            console.log(listOfMoves);

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
                $("#drive-sheet").html(allDrives.ranger.mercy);
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet").html(allDrives.ranger.stewardship);
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet").html(allDrives.ranger.tenacity);
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet").html(allDrives.ranger.wonder);
            }

            if (stonetopHero.background === "one") {
                $("#background-display").html(allBackgrounds.ranger.mightyHunter);
                listOfMoves.push(allPlaybookMoves.ranger.expertTracker);
                listOfMoves.push(allPlaybookMoves.ranger.stalker);
            } else if (stonetopHero.background === "two") {
                $("#background-display").html(allBackgrounds.ranger.wideWanderer);
                listOfMoves.push(allPlaybookMoves.ranger.mentalMap);
            } else if (stonetopHero.background === "three") {
                $("#background-display").html(allBackgrounds.ranger.beastBonded);
                listOfMoves.push(allPlaybookMoves.ranger.animalCompanion);
            }

            for (let i = 0; i < listOfMoves.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("move-card");
                newDiv.classList.add("move-remove");
                newDiv.innerHTML = listOfMoves[i];
                $("#super-test").append(newDiv);
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
                $("#drive-sheet").html(allDrives.seeker.cunning);
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet").html(allDrives.seeker.curiosity);
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet").html(allDrives.seeker.respect);
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet").html(allDrives.seeker.secrecy);
            } else if (stonetopHero.drive === "five") {
                $("#drive-sheet").html(allDrives.seeker.victory);
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
                $("#drive-sheet").html(allDrives.wouldBeHero.bravery);
            } else if (stonetopHero.drive === "two") {
                $("#drive-sheet").html(allDrives.wouldBeHero.glory);
            } else if (stonetopHero.drive === "three") {
                $("#drive-sheet").html(allDrives.wouldBeHero.sacrifice);
            } else if (stonetopHero.drive === "four") {
                $("#drive-sheet").html(allDrives.wouldBeHero.succor);
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
            $("#select-character-btn").text(`${stonetopHero.characterName}, the ${stonetopHero.playbook}`);
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
    $("#add-playbook-moves-sheet-container").addClass("hidden");
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
    $("#add-playbook-moves-sheet-container").addClass("hidden");
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
    $("#add-playbook-moves-sheet-container").addClass("hidden");
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
    $("#add-playbook-moves-sheet-container").addClass("hidden");
    $("#basic-moves-sheet-container").removeClass("hidden");
})

$("#add-move-btn").click(function(){
    if (stonetopHero.playbook === "Blessed") {
        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.blessed) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.innerHTML = allPlaybookMoves.blessed[property] + "<div class='flex-row center'><button>Add<button</div>";

            $("#add-playbook-moves-sheet-container").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Fox") {
        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.fox) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.innerHTML = allPlaybookMoves.fox[property] + "<button>Add</button>";

            $("#add-playbook-moves-sheet-container").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Heavy") {
        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.heavy) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.innerHTML = allPlaybookMoves.heavy[property] + "<button>Add</button>";

            $("#add-playbook-moves-sheet-container").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Judge") {
        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.judge) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.innerHTML = allPlaybookMoves.judge[property] + "<button>Add</button>";

            $("#add-playbook-moves-sheet-container").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Lightbearer") {
        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.lightbearer) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.innerHTML = allPlaybookMoves.lightbearer[property] + "<button>Add</button>";

            $("#add-playbook-moves-sheet-container").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Marshal") {
        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.marshal) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.innerHTML = allPlaybookMoves.marshal[property] + "<button>Add</button>";

            $("#add-playbook-moves-sheet-container").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Ranger") {
        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.ranger) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.innerHTML = allPlaybookMoves.ranger[property] + "<button>Add</button>";

            $("#add-playbook-moves-sheet-container").append(newDiv);
        }
    }
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

    $("#select-character-btn").removeClass("hidden").text(`${stonetopHero.characterName}, the ${stonetopHero.playbook}`);

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

        $("#select-character-btn").removeClass("hidden").text(`${stonetopHero.characterName}, the ${stonetopHero.playbook}`);
    }

    console.log(stonetopHero);

    // isLightMode = localStorage.getItem("is-light-mode");

    // if (isLightMode) {
    //     $("#light-mode-btn").text("Dark Mode");
    //     $("body").removeClass("light-mode");
    //     $("body").addClass("dark-mode");
    //     isLightMode === false;
    //     localStorage.setItem("is-light-mode", isLightMode);
    // }
    // $("#light-mode-btn").text("Light Mode");
    // $("body").removeClass("dark-mode");
    // $("body").addClass("light-mode");
    // isLightMode === true;
    // localStorage.setItem("is-light-mode", isLightMode);
}

initialize();