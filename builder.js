const createCharacterBtn = $("#create-character-btn");
const selectCharacterBtn = $("#select-character-btn");
const classSelectBtn = document.querySelectorAll(".class-select-btn");
const confirmNewMoveBtn = $(".js-confirm-new-move-btn");
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

$('input[name=weakened]').change(function(){
    if($(this).is(':checked')) {
        $("#strength").addClass("red");
        $("#dexterity").addClass("red");
    } else {
        $("#strength").removeClass("red");
        $("#dexterity").removeClass("red");
    }
});

$('input[name=dazed]').change(function(){
    if($(this).is(':checked')) {
        $("#intelligence").addClass("red");
        $("#wisdom").addClass("red");
    } else {
        $("#intelligence").removeClass("red");
        $("#wisdom").removeClass("red");
    }
});

$('input[name=miserable]').change(function(){
    if($(this).is(':checked')) {
        $("#constitution").addClass("red");
        $("#charisma").addClass("red");
    } else {
        $("#constitution").removeClass("red");
        $("#charisma").removeClass("red");
    }
});

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
        $(".base-move-remove").remove();

        onFrontPage = false;

        let moveArray = localStorage.getItem("markup");
        console.log(moveArray);

        if (moveArray) {
            $("#super-test").html(moveArray);
        }



        switch(stonetopHero.playbook) {
            case "Blessed":
                listOfMoves.push(allPlaybookMoves.blessed.spiritTongue);
                listOfMoves.push(allPlaybookMoves.blessed.callTheSpirits);

                console.log(listOfMoves);

                switch(stonetopHero.origin) {
                    case "option-one":
                        $("#origin-sheet").html("<h4>Stonetop</h4>");
                        break;
                    case "option-two":
                        $("#origin-sheet").html("<h4>The Steplands</h4>");
                        break;
                    case "option-three":
                        $("#origin-sheet").html("<h4>The Wild</h4>");
                        break;
                }

                switch(stonetopHero.drive) {
                    case "one":
                        $("#drive-sheet").html(allDrives.blessed.conciliation);
                        break;
                    case "two":
                        $("#drive-sheet").html(allDrives.blessed.cultivation);
                        break;
                    case "three":
                        $("#drive-sheet").html(allDrives.blessed.preservation);
                        break;
                    case "four":
                        $("#drive-sheet").html(allDrives.blessed.renewal);
                        break;
                }

                switch(stonetopHero.background) {
                    case "one":
                        $("#background-display").html(allBackgrounds.blessed.initiate);
                        listOfMoves.push(allPlaybookMoves.blessed.ritesOfTheLand);
                        break;
                    case "two":
                        $("#background-display").html(allBackgrounds.blessed.raisedByWolves);
                        listOfMoves.push(allPlaybookMoves.blessed.tracklessStep);
                        break;
                    case "three":
                        $("#background-display").html(allBackgrounds.blessed.vessel);
                        listOfMoves.push(allPlaybookMoves.blessed.danusGrasp);
                        break;
                }

                listOfMoves.forEach(item => {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("move-card");
                    newDiv.classList.add("base-move-remove");
                    newDiv.innerHTML = item;
                    $("#super-test").append(newDiv);
                    console.log(item);
                })
                break;

            case "Fox":
                switch(stonetopHero.origin) {
                    case "option-one":
                        $("#origin-sheet").html("<h4>Stonetop</h4>");
                        break;
                    case "option-two":
                        $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
                        break;
                    case "option-three":
                        $("#origin-sheet").html("<h4>Marshedge</h4>");
                        break;
                    case "option-four":
                        $("#origin-sheet").html("<h4>Lygos</h4>");
                        break;
                }
    
                switch(stonetopHero.drive) {
                    case "one":
                        $("#drive-sheet").html(allDrives.fox.conscience);
                        break;
                    case "two":
                        $("#drive-sheet").html(allDrives.fox.excitement);
                        break;
                    case "three":
                        $("#drive-sheet").html(allDrives.fox.glory);
                        break;
                    case "four":
                        $("#drive-sheet").html(allDrives.fox.romance);
                        break;
                    case "five":
                        $("#drive-sheet").html(allDrives.fox.trickery);
                        break;
                }
    
                switch(stonetopHero.background) {
                    case "one":
                        $("#background-display").html(allBackgrounds.fox.theNatural);
                        break;
                    case "two":
                        $("#background-display").html(allBackgrounds.fox.aLifeOfCrime);
                        break;
                    case "three":
                        $("#background-display").html(allBackgrounds.fox.theProdigalReturned);
                        break;
                }
                break;

            case "Heavy":
                listOfMoves.push(allPlaybookMoves.heavy.dangerous);
                listOfMoves.push(allPlaybookMoves.heavy.hardToKill);

                console.log(listOfMoves);

                listOfMoves.forEach(item => {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("move-card");
                    newDiv.classList.add("base-move-remove");
                    newDiv.innerHTML = item;
                    $("#super-test").append(newDiv);
                    console.log(item);
                })

                switch(stonetopHero.origin) {
                    case "option-one":
                        $("#origin-sheet").html("<h4>Stonetop</h4>");
                        break;
                    case "option-two":
                        $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
                        break;
                    case "option-three":
                        $("#origin-sheet").html("<h4>Marshedge</h4>");
                        break;
                    case "option-four":
                        $("#origin-sheet").html("<h4>The Steplands</h4>");
                        break;
                    case "otpion-five":
                        $("#origin-sheet").html("<h4>The Manmarch</h4>");
                        break;
                    case "option-six":
                        $("#origin-sheet").html("<h4>Lygos</h4>");
                        break;
                }

                switch(stonetopHero.drive) {
                    case "one":
                        $("#drive-sheet").html(allDrives.heavy.challenge);
                        break;
                    case "two":
                        $("#drive-sheet").html(allDrives.heavy.honor);
                        break;
                    case "three":
                        $("#drive-sheet").html(allDrives.heavy.peace);
                        break;
                    case "four":
                        $("#drive-sheet").html(allDrives.heavy.pride);
                        break;
                }

                switch(stonetopHero.background) {
                    case "one":
                        $("#background-display").html(allBackgrounds.heavy.sheriff);
                        break;
                    case "two":
                        $("#background-display").html(allBackgrounds.heavy.bloodSoakedPast);
                        break;
                    case "three":
                        $("#background-display").html(allBackgrounds.heavy.stormMarked);
                }
                break;

            case "Judge":
                listOfMoves.push(allPlaybookMoves.judge.censure);
                listOfMoves.push(allPlaybookMoves.judge.chroniclerOfStonetop);

                console.log(listOfMoves);

                listOfMoves.forEach(item => {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("move-card");
                    newDiv.classList.add("base-move-remove");
                    newDiv.innerHTML = item;
                    $("#super-test").append(newDiv);
                    console.log(item);
                })

                switch(stonetopHero.origin) {
                    case "option-one":
                        $("#origin-sheet").html("<h4>Stonetop</h4>");
                        break;
                    case "option-two":
                        $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
                        break;
                    case "option-three":
                        $("#origin-sheet").html("<h4>Marshedge</h4>");
                        break;
                    case "option-four":
                        $("#origin-sheet").html("<h4>Lygos</h4>");
                        break;
                }

                switch(stonetopHero.drive) {
                    case "one":
                        $("#drive-sheet").html(allDrives.judge.duty);
                    case "two":
                        $("#drive-sheet").html(allDrives.judge.harmony);
                        break;
                    case "three":
                        $("#drive-sheet").html(allDrives.judge.knowledge);
                        break;
                    case "four":
                        $("#drive-sheet").html(allDrives.judge.zeal);
                        break;
                }

                switch(stonetopHero.background) {
                    case "one":
                        $("#background-display").html(allBackgrounds.judge.legacy);
                        break;
                    case "two":
                        $("#background-display").html(allBackgrounds.judge.missionary);
                        break;
                    case "three":
                        $("#background-sheet-display").html(allBackgrounds.judge.prophet);
                        break;
                }
                break;
            
            case "Lightbearer":
                listOfMoves.push(allPlaybookMoves.lightbearer.consecratedFlame);
                listOfMoves.push(allPlaybookMoves.lightbearer.invokeTheSunGod);

                console.log(listOfMoves);

                listOfMoves.forEach(item => {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("move-card");
                    newDiv.classList.add("base-move-remove");
                    newDiv.innerHTML = item;
                    $("#super-test").append(newDiv);
                    console.log(item);
                })

                switch(stonetopHero.origin) {
                    case "option-one":
                        $("#origin-sheet").html("<h4>Stonetop</h4>");
                        break;
                    case "option-two":
                        $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
                        break;
                    case "option-three":
                        $("#origin-sheet").html("<h4>Marshedge</h4>");
                        break;
                    case "option-four":
                        $("#origin-sheet").html("<h4>Lygos</h4>");
                        break;
                }

                switch(stonetopHero.drive) {
                    case "one":
                        $("#drive-sheet").html(allDrives.lightbearer.charity);
                        break;
                    case "two":
                        $("#drive-sheet").html(allDrives.lightbearer.faith);
                        break;
                    case "three":
                        $("#drive-sheet").html(allDrives.lightbearer.hope);
                        break;
                    case "option-four":
                        $("#drive-sheet").html(allDrives.lightbearer.mercy);
                        break;
                }

                switch(stonetopHero.background) {
                    case "one":
                        $("#background-display").html(allBackgrounds.lightbearer.auspiciousBirth);
                        break;
                    case "two":
                        $("#background-display").html(allBackgrounds.lightbearer.itinerantMystic);
                        break;
                    case "three":
                        $("#background-display").html(allBackgrounds.lightbearer.soulOnFire);
                        break;   
                }
                break;
            
            case "Marshal":
                listOfMoves.push(allPlaybookMoves.marshal.crew);
                listOfMoves.push(allPlaybookMoves.marshal.logistics);

                console.log(listOfMoves);

                switch(stonetopHero.origin) {
                    case "option-one":
                        $("#origin-sheet").html("<h4>Stonetop</h4>");
                        break;
                    case "option-two":
                        $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
                        break;
                    case "option-three":
                        $("#origin-sheet").html("<h4>Marshedge</h4>");
                        break;
                    case "option-four":
                        $("#origin-sheet").html("<h4>The Steplands</h4>");
                        break;
                    case "otpion-five":
                        $("#origin-sheet").html("<h4>The Manmarch</h4>");
                        break;
                    case "option-six":
                        $("#origin-sheet").html("<h4>Lygos</h4>");
                        break;
                }

                switch(stonetopHero.drive) {
                    case "one":
                        $("#drive-sheet").html(allDrives.marshal.honor);
                        break;
                    case "two":
                        $("#drive-sheet").html(allDrives.marshal.prestige);
                        break;
                    case "three":
                        $("#drive-sheet").html(allDrives.marshal.resolve);
                        break;
                    case "four":
                        $("#drive-sheet").html(allDrives.marshal.ruthlessness);
                        break;
                }

                switch(stonetopHero.background) {
                    case "one":
                        $("#background-display").html(allBackgrounds.marshal.scion);
                        listOfMoves.push(allPlaybookMoves.marshal.veteranCrew);
                        break;
                    case "two":
                        $("#background-display").html(allBackgrounds.marshal.penitent);
                        break;
                    case "three":
                        $("#background-display").html(allBackgrounds.marshal.luminary);
                        listOfMoves.push(allPlaybookMoves.marshal.weHappyFew);
                        break;
                }

                listOfMoves.forEach(item => {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("move-card");
                    newDiv.classList.add("base-move-remove");
                    newDiv.innerHTML = item;
                    $("#super-test").append(newDiv);
                    console.log(item);
                })
                break;

            case "Ranger":
                listOfMoves.push(allPlaybookMoves.ranger.homeOnTheRange);

                console.log(listOfMoves);

                switch(stonetopHero.origin) {
                    case "option-one":
                        $("#origin-sheet").html("<h4>Stonetop</h4>");
                        break;
                    case "option-two":
                        $("#origin-sheet").html("<h4>Marshedge</h4>");
                        break;
                    case "option-three":
                        $("#origin-sheet").html("<h4>The Steplands</h4>");
                        break;
                    case "option-four":
                        $("#origin-sheet").html("<h4>The Manmarch</h4>");
                        break;
                    case "option-five":
                        $("#origin-sheet").html("<h4>Lygos</h4>");
                        break;
                }

                switch(stonetopHero.drive) {
                    case "one":
                        $("#drive-sheet").html(allDrives.ranger.mercy);
                        break;
                    case "two":
                        $("#drive-sheet").html(allDrives.ranger.stewardship);
                        break;
                    case "three":
                        $("#drive-sheet").html(allDrives.ranger.tenacity);
                        break;
                    case "four":
                        $("#drive-sheet").html(allDrives.ranger.wonder);
                        break;
                }

                switch(stonetopHero.background) {
                    case "one":
                        $("#background-display").html(allBackgrounds.ranger.mightyHunter);
                        listOfMoves.push(allPlaybookMoves.ranger.expertTracker);
                        listOfMoves.push(allPlaybookMoves.ranger.stalker);
                        break;
                    case "two":
                        $("#background-display").html(allBackgrounds.ranger.wideWanderer);
                        listOfMoves.push(allPlaybookMoves.ranger.mentalMap);
                    case "three":
                        $("#background-display").html(allBackgrounds.ranger.beastBonded);
                        listOfMoves.push(allPlaybookMoves.ranger.animalCompanion);
                }

                listOfMoves.forEach(item => {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("move-card");
                    newDiv.classList.add("base-move-remove");
                    newDiv.innerHTML = item;
                    $("#super-test").append(newDiv);
                    console.log(item);
                })
                break;
            
            case "Seeker":
                listOfMoves.push(allPlaybookMoves.seeker.wellVersed);
                listOfMoves.push(allPlaybookMoves.seeker.workWithWhatYouveGot);

                console.log(listOfMoves);

                switch(stonetopHero.origin) {
                    case "option-one":
                        $("#origin-sheet").html("<h4>Stonetop</h4>");
                        break;
                    case "option-two":
                        $("#origin-sheet").html("<h4>The Steplands</h4>");
                        break;
                    case "option-three":
                        $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
                        break;
                    case "option-four":
                        $("#origin-sheet").html("<h4>Marshedge</h4>");
                        break;
                    case "option-five":
                        $("#origin-sheet").html("<h4>Lygos</h4>");
                        break;
                }

                switch(stonetopHero.drive) {
                    case "one":
                        $("#drive-sheet").html(allDrives.seeker.cunning);
                        break;
                    case "two":
                        $("#drive-sheet").html(allDrives.seeker.curiosity);
                        break;
                    case "three":
                        $("#drive-sheet").html(allDrives.seeker.respect);
                        break;
                    case "four":
                        $("#drive-sheet").html(allDrives.seeker.secrecy);
                        break;
                    case "five":
                        $("#drive-sheet").html(allDrives.seeker.victory);
                        break;
                }

                switch(stonetopHero.background) {
                    case "one":
                        $("#background-display").html(allBackgrounds.seeker.patriot);
                        listOfMoves.push(allPlaybookMoves.seeker.letsMakeADeal);
                        break;
                    case "two":
                        $("#background-display").html(allBackgrounds.seeker.antiquarian);
                        listOfMoves.push(allPlaybookMoves.seeker.polyglot);
                        break;
                    case "three":
                        $("#background-display").html(allBackgrounds.seeker.witchHunter);
                        listOfMoves.push(allPlaybookMoves.seeker.everythingBleeds);
                        break;
                }

                listOfMoves.forEach(item => {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("move-card");
                    newDiv.classList.add("base-move-remove");
                    newDiv.innerHTML = item;
                    $("#super-test").append(newDiv);
                    console.log(item);
                })
                break;

            case "Would-Be Hero":
                listOfMoves.push(allPlaybookMoves.wouldBeHero.angerIsAGift);
                listOfMoves.push(allPlaybookMoves.wouldBeHero.potentialForGreatness);
    
                console.log(listOfMoves);
    
                listOfMoves.forEach(item => {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("move-card");
                    newDiv.classList.add("base-move-remove");
                    newDiv.innerHTML = item;
                    $("#super-test").append(newDiv);
                    console.log(item);
                })
    
                switch(stonetopHero.origin) {
                    case "option-one":
                        $("#origin-sheet").html("<h4>Stonetop</h4>");
                        break;
                    case "option-two":
                        $("#origin-sheet").html("<h4>The Steplands</h4>");
                        break;
                    case "option-three":
                        $("#origin-sheet").html("<h4>Gordin's Delve</h4>");
                        break;
                    case "otpion-four":
                        $("#origin-sheet").html("<h4>Marshedge</h4>");
                        break;
                    case "option-five":
                        $("#origin-sheet").html("<h4>Lygos</h4>");
                        break;
                }
                
                switch(stonetopHero.drive) {
                    case "one":
                        $("#drive-sheet").html(allDrives.wouldBeHero.bravery);
                        break;
                    case "two":
                        $("#drive-sheet").html(allDrives.wouldBeHero.glory);
                        break;
                    case "three":
                        $("#drive-sheet").html(allDrives.wouldBeHero.sacrifice);
                        break;
                    case "four":
                        $("#drive-sheet").html(allDrives.wouldBeHero.succor);
                        break;
                }
    
                switch(stonetopHero.background) {
                    case "one":
                        $("#background-display").html(allBackgrounds.wouldBeHero.impetuousYouth);
                        break;
                    case "two":
                        ("#background-display").html(allBackgrounds.wouldBeHero.driven);
                        break;
                    case "three":
                        $("#background-display").html(allBackgrounds.wouldBeHero.destined);
                        break;
                }
                break;
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
        $(".move-remove").remove();

        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.blessed) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.classList.add("move-remove");
            newDiv.innerHTML = allPlaybookMoves.blessed[property] + `<div class='flex-row center'><button class='js-confirm-new-move-btn' data-move="${property}" data-playbook="blessed">Add<button</div>`;

            $("#super-test-2").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Fox") {
        $(".move-remove").remove();

        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.fox) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.classList.add("move-remove");
            newDiv.innerHTML = allPlaybookMoves.fox[property] + "<div class='confirm-new-move-btn flex-row center'><button>Add<button</div>";

            $("#super-test-2").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Heavy") {
        $(".move-remove").remove();

        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.heavy) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.classList.add("move-remove");
            newDiv.innerHTML = allPlaybookMoves.heavy[property] + "<div class='confirm-new-move-btn flex-row center'><button>Add<button</div>";

            $("#super-test-2").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Judge") {
        $(".move-remove").remove();

        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.judge) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.classList.add("move-remove");
            newDiv.innerHTML = allPlaybookMoves.judge[property] + "<div class='confirm-new-move-btn flex-row center'><button>Add<button</div>";

            $("#super-test-2").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Lightbearer") {
        $(".move-remove").remove();

        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.lightbearer) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.classList.add("move-remove");
            newDiv.innerHTML = allPlaybookMoves.lightbearer[property] + "<div class='confirm-new-move-btn flex-row center'><button>Add<button</div>";

            $("#super-test-2").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Marshal") {
        $(".move-remove").remove();

        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.marshal) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.classList.add("move-remove");
            newDiv.innerHTML = allPlaybookMoves.marshal[property] + "<div class='confirm-new-move-btn flex-row center'><button>Add<button</div>";

            $("#super-test-2").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Ranger") {
        $(".move-remove").remove();

        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.ranger) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.classList.add("move-remove");
            newDiv.innerHTML = allPlaybookMoves.ranger[property] + "<div class='confirm-new-move-btn flex-row center'><button>Add<button</div>";

            $("#super-test-2").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Seeker") {
        $(".move-remove").remove();

        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.seeker) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.classList.add("move-remove");
            newDiv.innerHTML = allPlaybookMoves.seeker[property] + "<div class='confirm-new-move-btn flex-row center'><button>Add<button</div>";

            $("#super-test-2").append(newDiv);
        }
    }

    if (stonetopHero.playbook === "Would-Be Hero") {
        $(".move-remove").remove();

        $("#add-playbook-moves-sheet-container").removeClass("hidden");

        for (const property in allPlaybookMoves.wouldBeHero) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("move-card");
            newDiv.classList.add("move-remove");
            newDiv.innerHTML = allPlaybookMoves.wouldBeHero[property] + "<div class='confirm-new-move-btn flex-row center'><button>Add<button</div>";

            $("#super-test-2").append(newDiv);
        }
    }
})

$(document).on("click", ".js-confirm-new-move-btn", function(event) {
    let playbook = event.currentTarget.dataset.playbook;
    let move = event.currentTarget.dataset.move;
    let fullMove = allPlaybookMoves[playbook][move];
    // let newTemporaryArray = [...listOfMoves];

    // listOfMoves = [];
    //     $(".base-move-remove").remove();

    listOfMoves.push(fullMove);

    let markup = listOfMoves.map(function(move){
        return `
            <div class="move-card base-move-remove">
                ${move}
            </div>
        `
    }).join(" ");

    console.log(markup);

    $("#super-test").html(markup);

    localStorage.setItem("markup", markup);

    // newTemporaryArray.forEach(item => {
    //     let newDiv = document.createElement("div");
    //     newDiv.classList.add("move-card");
    //     newDiv.classList.add("base-move-remove");
    //     newDiv.innerHTML = item;
    //     $("#super-test").append(newDiv);
    //     console.log(item);
    // })

});

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
        $("#origin").html(allOrigins.wouldBeHero);
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