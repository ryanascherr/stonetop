const allPlaybookMoves = {

    blessed: {

        amuletsAndTalismans: "<h3>Amulets & Talismans</h3><p>When you <b><i>craft a protective charm for someone</i></b>, spend 1 Stock and name a source of harm (fire, stabbing, etc.). When they <b><i>would suffer such harm while bearing your charm</i></b>, roll +INT: <b>on a 10+</b>, they ignore the harm entirely; <b>on a 7-9</b>, they suffer only half the damage or effect; <b>on a 6-</b>, they suffer the harm normally. One can benefit from only 1 charm at a time, and it loses its potency after 1 use.</p>",

        barkskin: "<h3>Barksin</h3><p>When you <b><i>are touching the ground</i></b>, you have 2 armor. When you <b><i>mark another with 1 Stock</i></b>, they gain this benefit so long as the mark remains.</p>",

        bigMagic: "<h3>Big Magic</h3><p>Each time you take this move, choose an additional remarkable trait for your sacred pouch and increase your max Stock by 2.</p>",

        danusGrasp: "<h3>Danu's Grasp</h3><p>When you <b><i>call on the world itself to bind a spirit or a perversion of nature</i></b>, spend 1 Stock and roll +WIS: <b>on a 10+</b>, choose 2 from the list below; <b>on a 7-9</b>, choose 1.</p><ul><li>You avoid or prevent their counterattack</li><li>Roots, vines, and earth restrain them</li><li>They take 2d4 damage (ignores armor)</li></ul><p>If this brings them to 0 HP, they are pulled into the earth and bound in rune-etched stone.</p>",

        healersArts: "<h3>Healer's Arts</h3><p>When <b><i>someone Recovers under your care</i></b>, they recover (extra) HP equal to your WIS. If you <b><i>also spend 1 Stock</i></b>, they heal an extra 5 HP and their wounds/injuries are stabilized.</p>",

        heedMyWords: "<h3>Heed My Words</h3><p>When you <b><i>Persuade by talking sense or warning against foolishness</i></b>, you have advantage.</p>",

        improvedStat: "<h3>Improved Stat</h3><p>Each time you take this move, increase one of your stats by 1 (to a max of +2).</p>",

        intoTheLionsDen: "<h3>Into the Lion's Den</h3><p>When you <b><i>approach a beast calmly and show no fear</i></b>, it will not harm you—though it may well threaten you and test your nerve. When you <b><i>lay your hand gently upon a beast</i></b>, it will calm to your touch.</p>",

        lightningRod: "<h3>Lightning Rod</h3><p>When you <b><i>Defend while touching the ground</i></b>, you can spend 1 Readiness to intercept a nearby magical attack and redirect it harmlessly into the ground.</p>",

        ritesOfTheLand: "<h3>Rites of the Land</h3><p>When <b><i>Seasons Change and you oversee the sacred rites</i></b>, you can sacrifice 2 Surplus to increase the steading’s Fortunes by 1 (max +3). If you sacrifice something (or someone) much-loved and greatly valued, you can redo a roll from Seasons Change, with your choice of advantage or disdvantage.</p>",

        spiritTongue: "<h3>Spirit Tongue</h3><p>You can speak with natural beasts and spirits of the wild. You can always ask the GM “what spirits are active here?” and get an honest answer.</p>",

        borrowPower: "<h3>Borrow Power</h3><p>When <b><i>a spirit or beast loans you power</i></b>, ask the GM for one of its moves. Store it in your sacred pouch in place of 1 Stock. When you <b><i>use the borrowed move</i></b>, roll +WIS: <b>on a 10+</b>, you do it and can use the move again; <b>on a 7-9</b>, you do it, but lose the move.</p>",

        callTheSpirits: "<h3>Call the Spirits</h3><p>When you <b><i>perform a short ritual and invoke the spirit(s) of a place or object</i></b>, spend 1 Stock. The spirit(s) manifest before you and will hear what you have to say. What they do next is up to them.</p>",

        tracklessStep: "<h3>Trackless Step</h3><p>When you <b><i>move through nature with care and patience</i></b>, you make no sound, leave no trace and can ignore any hindering or treacherous terrain (briars, mire, scree, etc.). When you <b><i>spend 1 Stock and mark others</i></b>, they each gain this benefit so long as the mark remains. 1 Stock can mark a number of individuals up to your level +INT.</p>",

        veil: '<h3>Veil</h3><p>When you <b><i>wrap yourself or another in a subtle veil</i></b>, spend 1 Stock and choose 1:</p><ul><li>A type of being you name (including “people”) will tend to ignore your presence</li><li>People will perceive you as someone else, though you must wear something of an individual’s in order to impersonate them</li></ul><p>When <b><i>your deception comes under scrutiny</i></b>, roll +INT: <b>on a 10+</b>, the veil holds, and no one is the wiser; <b>on a 7-9</b>, the veil holds, but there is further scrutiny or a complication (GM’s choice).</p>',

        wardsAndBindings: "<h3>Wards & Bindings</h3><p>When you <b><i>mark a boundary with sacred signs</i></b>, spend 1 Stock and describe who or what they affect (using no more words than your level). Also, choose whether the affected beings are repelled or trapped by the signs.</p><p>When <b><i>your wards or bindings are first tested</i></b>, roll +INT: <b>on 10+</b>, they will hold as long as the signs remain unmarred (and the affected creature can do nothing to affect them directly); <b>on a 7-9</b>, they hold for now but may be overcome through might or will.</p>",

        wildSoul: "<h3>Wild Soul</h3><p>Each time you take this move, gain a Ranger move of your choice for which you qualify. You can’t pick Improved Stat or Superior Stat.</p>",

        naturesWrath: "<h3>Nature's Wrath</h3><p>Danu’s Grasp gains the area tag and can affect any creature. A mortal reduced to 0 HP is subdued or killed (your choice) rather than bound in stone.</p>",

        potentWorkings: "<h3>Potent Workings</h3><p>When you <b><i>craft a protective charm</i></b>, you may spend 1 additional Stock to choose 1:</p><ul><li>Name an additional type of harm</li><li>On a 10+, the charm retains its potency</li></ul>",

        sharedSouls: "<h3>Shared Souls</h3><p>When you <b><i>mark a beast with 1 Stock</i></b>, you can perceive the world through its senses no matter the distance between you. You can also guide its actions; treat it as a follower with Loyalty +1. Only one such beast can be affected at a time.</p>",

        suckThePoisonOut: "<h3>Suck the Poison Out</h3><p>When you <b><i>draw a malady from a patient’s body, mind, or soul</i></b>, spend 1 Stock and roll +WIS: <b>on a 10+</b>, you remove the malady and can safely discard it or store it in your sacred pouch (taking the space of 1 Stock) to study or inflict on another; <b>on a 7-9</b>, you remove it, but choose 1:</p><ul><li>Your patient suffers lingering harm or trauma</li><li>You suffer some of the malady’s effects</li><li>It will be harmful and dangerous to discard</li></ul>",

        superiorStat: "<h3>Superior Stat</h3><p>Increase one of your stats by +1 (to a max of +3).</p>",

        voiceOfTheEarthMother: "<h3>Voice of the Earth Mother</h3><p>When you <b><i>speak on behalf of Danu</i></b>, natural beasts and spirits of the wild respect your authority. All but the most headstrong will do as you command, even against their instincts.</p>"

    },

    fox: {

        allInTheWrist: "<h3>All in the Wrist</h3><p>Any knife or dagger gets the <i>thrown</i> tag in your hands. Also, you keep a number of iron throwing blades (<i>near</i>) on you; they don’t take up space in your inventory. Your ammo replenishes whenever you Outfit.</p>",

        ambush: "<h3>Ambush</h3><p>When you <b><i>attack someone up close and they don’t see it coming</i></b>, deal your damage or roll +DEX: <b>on a 10+</b>, deal your damage and pick 2; <b>on a 7-9</b>, deal your damage and pick 1:</p><ul><li>Deal +1d4 damage</li><li>Stop them from making noise/raising an alarm</li><li>Slip away before they can react</li><li>Create an opportunity; you or an ally gains advantage on the next move to act on it</li></ul>",

        burgle: "<h3>Burgle</h3><p>When you <b><i>break into a place or thing</i></b>, roll +INT: <b>on a 10+</b>, you do it but pick 1; <b>on a 7-9</b>, you do it but pick 2:</p><ul><li>It takes a fair bit of time/effort</li><li>You draw unwanted attention</li><li>You break something important and/or leave clear evidence of your intrusion</li>",

        catlike: "<h3>Catlike</h3><p>When you <b><i>carry a light load and move with care</i></b>, you make no noise.</p><p>When you <b><i>keep still in shadows or darkness</i></b>, you remain unseen until you draw attention to yourself, move positions, or attack.</p>",

        dabbler: "<h3>Dabbler</h3><p>Each time you take this move, choose a move from the Heavy, Marshal, Ranger, or Seeker playbooks for which you otherwise qualify (you can’t take Improved Stat or Superior Stat).</p>",

        dangerSense: "<h3>Danger Sense</h3><p>You can always ask the GM, “Is there an ambush or trap here?” If they say “yes,” roll +INT: <b>on a 10+</b>, ask the GM both of the questions below; <b>on a 7-9</b>, ask 1; <b>either way</b>, gain advantage on your next roll to act on the answer(s).</p><ul><li>What will trigger the ambush or trap?</li><li>What will happen once it’s triggered?</li></ul><p><b>On a 6-</b>, don’t mark XP but nothing bad happens just yet.",

        freeRunning: "<h3>Free Running</h3><p>When you <b><i>carry a light load and move with speed and grace</i></b>, gain advantage on any move to surmount or bypass a physical obstacle.</p>",

        improvedStat: "<h3>Improved Stat</h3><p>Each time you take this move, increase one of your stats by 1 (to a max of +2).</p>",

        irresistible: "<h3>Irresistible</h3><p>When you <b><i>interact with someone</i></b>, you can ask their player if they find you attractive and get an honest answer (usually “yes”).</p><p>When you <b><i>Persuade by using your considerable charms as leverage</i></b>, you have advantage.</p>",

        laughAtDanger: "<h3>Laugh at Danger</h3><p>When you <b><i>make a joke in the face of adversity</i></b>, you may roll +CHA in place of +CON.</p>",

        lightFingers: "<h3>Light Fingers</h3><p>When you <b><i>perform sleight of hand on an unwary mark</i></b>, you succeed and no one’s the wiser. If you’re being watched, roll +DEX: <b>on a 10+</b>, you succeed and no one’s the wiser; <b>on a 7-9</b>, you succeed OR no one’s the wiser (your choice).</p>",

        perceptive: "<h3>Perceptive</h3><p>When you <b><i>Seek Insight</i></b>, you may ask 1 additional question. Even on a 6-, you can ask 1 question (though you might not like how you learn the answer).</p>",

        rapierWit: "<h3>Rapier Wit</h3><p>When you <b><i>pierce an NPC’s pride with a well-placed quip</i></b>, they must do 1 (their choice):</p><ul><li>Attack, doing +1d4 damage if they hit but giving you advantage on your next roll against them</li><li>Stoop to your level and respond in kind</li><li>Spend a few moments fuming, sputtering, or controlling their temper</li></ul>",

        skillAtArms: "<h3>Skill at Arms</h3><p>When you <b><i>wield a spear, sword, or staff</i></b>, it has the <i>precise</i> tag (you can Clash with DEX).</p>",

        parryAndRiposte: "<h3>Parry & Riposte</h3><p>When you <b><i>Defend with a </i>precise <i>weapon</i></b>, you can spend 1 Readiness to both halve an attack’s effects/damage and strike back at the attacker (deal your damage with disadvantage), instead of spending 1 Readiness for each.</p>",

        silverTongued: "<h3>Silver Tongued</h3><p>When you <b><i>use words to avoid suspicion or trouble</i></b>, roll +CHA: <b>on a 10+</b>, hold 3 Nerve; <b>on a 7-9</b>, hold 1 Nerve. You may spend Nerve, 1-for-1, to:</p><ul><li>Move about or maneuver unchallenged</li><li>Withstand direct scrutiny or questioning</li><li>Direct suspicion or attention elsewhere</li></ul>",

        underYourSkin: "<h3>Under Your Skin</h3><p>When you <b><i>engage an NPC in conversation</i></b>, you can ask the GM 1 of these and get an honest answer:</p><ul><li>What are they expecting me to do?</li><li>What, in general, are they trying to hide?</li><li>What do they want to happen?</li></ul>",

        battleDancer: "<h3>Battle Dancer</h3><p>When you <b><i>Clash using a </i>precise <i>weapon</i></b>, <b>on a 12+</b> you deal your damage, avoid your enemy’s attack, and impress/embarrass/overawe your foes.</p>",

        cheapShot: "<h3>Cheap Shot</h3><p>When you <b><i>Ambush with a </i>hand <i>or </i>precise <i>weapon</i></b>, you have advantage on your damage roll.</p>",

        eyeOnTheDoor: "<h3>Eye on the Door</h3><p>When <b><i>you and your allies need to get out of here</i></b>, name your escape route and roll +INT: <b>on a 10+</b>, you’re gone; <b>on a 7-9</b>, you can stay or go but if you go, it costs you—the GM will tell you what (or who) you leave behind or take with you.</p>",

        pantsOnFire: "<h3>Pants on Fire</h3><p>When you <b><i>Defy Danger, Persuade, or Interfere by being deceitful</i></b>, you have advantage.</p><p>When another move (like Seek Insight) allows a player to ask you a question, you can opt not to answer.</p>",

        secondIntent: "<h3>Second Intent</h3><p>When you <b><i>Defend and spend 1 Readiness to Parry & Riposte</i></b>, also pick 1 option from the Ambush list.",

        slippery: "<h3>Slippery</h3><p>When you <b><i>roll to escape being caught or controlled</i></b>, treat a 6- as a 7-9. On a 12+, say how you turn the tables or use the circumstances to your advantage.",

        superiorStat: "<h3>Superior Stat</h3><p>Increase one of your stats by +1 (to a max of +3).</p>"
    },

    heavy: {

        armored: "<h3>Armored</h3><p>When you <b><i>wear armor or carry a shield</i></b>, mark only O for each (instead of OO), and ignore the clumsy tag (you don’t suffer disadvantage for wearing it). If you take this move at the start of play, add an O iron hauberk, O bronze cuirass, or O scale coat to your inventory (all are 2 armor, <i>warm</i>, <i>clumsy</i>).</p>",

        battleJoy: "<h3>Battle Joy</h3><p>When you <b><i>spill blood—yours or another’s—and lose yourself in battle</i></b>, you ignore fear, pain, mind-control, and the effects of debilities as long as you keep fighting.</p><p>When <b><i>the action stops</i></b>, roll +CON: <b>on a 10+</b>, that was a rush, regain 1d4 HP; <b>on a 7-9</b>, you’re winded and out of it, but you’ll be fine with a few minutes’ rest; <b>on a 6-</b>, mark a debility but don’t mark XP.</p>",

        berserker: "<h3>Berserker</h3><p>While <b><i>in your Battle Joy</i></b>, add the <i>area</i> tag to your melee attacks, lashing out at anyone in nearby (friend and foe alike). Roll damage seperately for each target.</p>",

        carvedOutOfWood: "<h3>Carved Out of Wood</h3><p>Increase your max HP by 4.</p>",

        dangerous: "<h3>Dangerous</h3><p>When you deal your damage, you have advantage.</p>",

        formidable: "<h3>Formidable</h3><p>When you <b><i>wade into battle</i></b>, you can choose to roll +CHA: <b>on a 10+</b>, both; <b>on a 7-9</b>, pick 1:</p><ul><li>Lesser foes will quail, hesitate, or flee before you.</li><li>Doughty foes will focus on you, seeing you as the greatest threat.</li></ul><p><b>On a 6-</b>, pick 1 but ask the GM what you’ve missed.</p>",

        frosty: "<h3>Frosty</h3><p>When you <b><i>Defy Danger by keeping calm and carrying on</i></b>, <b>on a 10+</b> you can also ask the GM a question that you could ask when Seeking Insight. You have advantage on your next move to act on the answer.</p>",

        guardian: "<h3>Guardian</h3><p>When you <b><i>Defend</i></b>, hold 1 extra Readiness. Even on a 6-, hold 1 Readiness (plus whatever the GM says).</p>",

        improvedStat: "<h3>Improved Stat</h3><p>Each time you take this move, increase one of your stats by 1 (to a max of +2).</p>",

        intimidating: "<h3>Intimidating</h3><p>When you <b><i>Persuade using violence or threats</i></b>, you have advantage.</p>",

        hardToKill: "<h3>Hard to Kill</h3><p>When you <b><i>are at Death’s Door</i></b>, you can roll +CON or +nothing (your choice). <b>On a 7-9</b>, you can mark a debility of your choice to regain 1 HP.</p>",

        unstoppable: "<h3>Unstoppable</h3><p>When you <b><i>are reduced to 0 HP in battle</i></b>, you can keep fighting. Each time you take damage while at 0 HP, mark 1. If something would heal you while you keep fighting, clear one mark instead.</p><p>When you stop fighting, roll for Death’s Door with a -1 penalty for each circle marked. If you survive, clear all your circles.</p>",

        musclebound: "<h3>Musclebound</h3><p>When you <b><i>make a hand-to-hand or thrown attack</i></b>, it’s forceful and messy. If it would already be forceful and/or messy, it’s even more so.</p>",

        payback: "<h3>Payback</h3><p>When you <b><i>deal damage to a foe that has harmed you or one of your allies</i></b>, deal +1d4 damage.</p>",

        relentless: "<h3>Relentless</h3><p>When you <b><i>Clash and your foe survives</i></b>, you gain advantage the next time you Clash with them.</p>",

        seasonedWarrior: "<h3>Seasoned Warrior</h3><p>Take a move from the Fox, Marshal, Ranger, or Seeker playbooks, for which you otherwise qualify. You can pick from a different playbook each time (you can’t pick Improved Stat or Superior Stat).</p>",

        situationalAwareness: "<h3>Situational Awareness</h3><p>When you <b><i>Seek Insight</i></b>, add the following to the list of questions you can ask:</p><ul><li>Who or what here is the biggest threat?</li><li>What is my enemy’s true position?</li><li>What here can I use as a weapon?</li></ul><p>When <b><i>a fight breaks out</i></b>, ask the GM 1 question that you could ask when Seeking Insight.</p>",

        uncannyReflexes: "<h3>Uncanny Reflexes</h3><p>When you <b><i>are unarmored and carrying a normal or light load</i></b>, you impose disadvantage on any damage you take that you could dodge or roll with.</p>",

        unfettered: "<h3>Unfettered</h3><p>When you <b><i>are subject to physical or mental restraint</i></b>, you may mark a debility to immediately break free of that restraint.</p>",

        terrorOnTheField: "<h3>Terror on the Field</h3><p>When you <b><i>reduce a foe to 0 HP</i></b>, describe how you take them out. If you fell them in a particularly brutal or impressive manner, their allies are impressed, dismayed, or frightened and respond accordingly.</p>",

        bringerOfRuin: "<h3>Bringer of Ruin</h3><p>When you <b><i>roll a 12+ to Clash and your foe survives</i></b>, name something they possess (like their sword, their position, a limb, their dignity, etc.), but nothing that would kill them outright. Whatever you name, it is broken shattered, lost. Tell us how.</p>",

        cutFromGranite: "<h3>Cut From Granite</h3><p>Gain +1 armor (stacks with other sources) and increase your max HP by another 2 (+6 HP total).</p>",

        mightyThews: "<h3>Mighty Thews</h3><p>When you <b><i>perform a feat of extraordinary strength</i></b> (bursting chains, smashing through a wall, heaving a boulder, etc.), pick 1 from the list below and do it.</p><ul><li>It takes a while</li><li>You cause unwanted damage or harm</li><li>It takes a toll (mark a debility)</li></ul>",

        nemesis: "<h3>Nemesis</h3><p>When you <b><i>Clash and your foe survives</i></b>, all of your future attacks against them do +1d6 damage.</p>",

        steadfastGuardian: "<h3>Steadfast Guardian</h3><p>When you <b><i>hold Readiness (from Defend)</i></b>, you can always suffer the damage/effects of an attack instead of your ward; no need to spend Readiness, you can just do it.</p>",

        stoneCone: "<h3>Stone Cold</h3><p>When you <b><i>Defy Danger (or Struggle as One) by keeping calm and carrying on</i></b>, treat a 6- as a 7-9.</p>",

        superiorStat: "<h3>Superior Stat</h3><p>Increase one of your stats by +1 (to a max of +3).</p>"
    },

    judge: {

        aegisOfFaith: "<h3>Aegis of Faith</h3><p>When you bear a shield, it can turn away spells, magical effects, and insubstantial attacks as if they were physical blows.</p>",

        armored: "<h3>Armored</h3><p>When you <b><i>wear armor or carry a shield</i></b>, mark only O for each (instead of OO), and ignore the clumsy tag (you don’t suffer disadvantage for wearing it). If you take this move at the start of play, add an O iron hauberk, O bronze cuirass, or O scale coat to your inventory (all are 2 armor, <i>warm</i>, <i>clumsy</i>).</p>",
        
        bearWitness: "<h3>Bear Witness</h3><p>When you <b><i>speak the truth with conviction and candor</i></b>, none can doubt you. They might deny what you say, but in their hearts they recognize the truth.</p>",

        breakBread: "<h3>Break Bread</h3><p>When you <b><i>share a proper meal with someone and each of you eats their fill</i></b>, each of you recovers 1d8 (extra) hit points.</p>",

        bulwark: "<h3>Bulwark</h3><p>When you <b><i>Defend</i></b>, you can spend 1 Readiness to stand fast, holding your position despite what befalls you.</p>",

        censure: "<h3>Censure</h3><p>When you <b><i>first denounce someone (or thing) as an agent of chaos or anathema to civilization</i></b>, pick 1:</p><ul><li>You/your allies deal +1 damage against them</li><li>They deal -1 damage</li><li>They recoil and might be momentarily stunned</li></ul><p>The bonus/penalty ends if you use this move again.</p>",

        castigate: "<h3>Castigate</h3><p>When you <b><i>Censure someone (or thing)</i></b>, pick 2 effects instead of 1.</p>",

        chroniclerOfStonetop: "<h3>Chronicler of Stonetop</h3><p>When you <b><i>write up detailed session notes and share them with the other players</i></b>, hold +1 Diligence.</p><p>You can spend 1 Diligence at any time to add +1 to a roll that you or a fellow player just made.</p>",

        forTheGreaterGood: "<h3>For the Greater Good</h3><p>When you <b><i>Order Followers in defense of civilization</i></b>, treat a result of 6- as a 7-9. In addition, your followers always accept “thwarting a threat to civilization” as payment of their cost.</p>",

        houndOfAratis: "<h3>Hound of Aratis</h3><p>When you Seek Insight, you can always ask “What here is tainted by chaos?” for free, even on a 6-.</p>",

        likeADogWithABone: "<h3>Like a Dog With a Bone</h3><p>When you <b><i>attack something you know to be tainted by chaos</i></b>, deal +1d6 damage.</p>",

        improvedStat: "<h3>Improved Stat</h3><p>Each time you take this move, increase one of your stats by 1 (to a max of +2).</p>",

        knowledgeIsPower: "<h3>Knowledge is Power</h3><p>When you <b><i>roll 10+ to Know Things</i></b>, you or an ally gain advantage on the next roll to act on what you learn.</p>",

        manyHandsMakeLightWork: "<h3>Many Hands Make Light Work</h3><p>When you <b><i>jump in to help another character who just rolled</i></b>, tell us how and ask the GM what else is required or what the consequences will be. If you accept, increase your ally’s roll by +1.</p>",

        aBundleOfSticksUnbroken: "<h3>A Bundle of Sticks Unbroken</h3><p>When you <b><i>Struggle as One</i></b>, you and one ally of your choice have advantage.</p>",

        theHammerAndTheBook: "<h3>The Hammer and the Book</h3><p>When you <b><i>strike a thing of supernatural chaos</i></b>, roll +WIS: <b>on a 10+</b>, deal your damage and choose 1 from the list below; <b>on a 7-9</b>, deal damage and choose 1, but you also expose yourself to harm or unwanted attention.</p><ul><li>Deal +1d6 damage</li><li>Ignore the thing’s armor or other defenses</li><li>Suppress one of its unnatural powers</li><li>Force it from its host</li></ul>",

        truthOrConsequences: "<h3>Truth or Consequences</h3><p>When you <b><i>look into someone’s eyes and gaze upon their soul</i></b>, roll +WIS: <b>on a 10+</b>, hold 3 Insight; <b>on a 7-9</b>, hold 2; <b>on a 6-</b>, hold 1 anyway, but you can never use this move on them again.</p><p>While in their presence, spend 1 Insight to ask their player 1 of the following and get an honest answer:</p><ul><li>Are you lying?</li><li>Are you hiding something from me?</li></ul><p>If they answer “yes,” gain advantage on your next move against them.</p>",

        bindingArbitration: "<h3>Binding Arbitration</h3><p>When you <b><i>bear witness to someone’s promise or oath</i></b>, henceforth you may ask their player if they have kept their word. They must answer honestly. The character need not be present. If <b><i>they have broken their word</i></b>, you gain advantage on all rolls against them until they admit their wrong and suffer an appropriate consequence (your call).</p>",

        visionUnclouded: "<h3>Visions Unclouded</h3><p>When you <b><i>Seek Insight</i></b>, you can always ask “What here is hidden by illusion or magic?” for free, even on a 6-.</p>",

        wellRead: "<h3>Well-Read</h3><p>When you <b><i>name the source in which you read about the matter at hand</i></b>, roll +WIS to Know Things instead of +INT.</p>",

        aMightyRampart: "<h3>A Mighty Rampart</h3><p>When you <b><i>hold Readiness</i></b> (from Defend), you cannot be forced from your position. Also, you can spend 1 Readiness to completely ignore the effects/ damage of an attack that you suffer.</p>",

        armistice: "<h3>Armistice</h3><p>When you <b><i>approach an enemy to negotiate in good faith</i></b>, they will at least hear you out. Even the most debased and savage foe will delay violence until you’ve had your say.</p>",

        condemn: "<h3>Condemn</h3><p>When you <b><i>Censure someone</i></b>, they are marked with a mystical brand that cannot be removed or hidden until you dismiss it. Any intelligent creature who sees the mark recognizes the bearer as an agent of chaos and anathema to civilization.</p>",

        proclamation: "<h3>Proclamation</h3><p>When you <b><i>Censure</i></b>, you may denounce a group or faction as long as you can clearly identify them. Apply the effects of Censure to every member of that group, regardless of distance.</p>",

        mirrorshield: "<h3>Mirrorshield</h3><p>When you <b><i>Defend with a shield</i></b>, you can spend 1 Readiness to intercept a magical force and redirect it to a different target (or none).</p>",

        superiorStat: "<h3>Superior Stat</h3><p>Increase one of your stats by +1 (to a max of +3).</p>",

        theTowerEternal: "<h3>The Tower Eternal</h3><p>When you <b><i>Defy Danger against magic</i></b>, treat a result of 6- as a 7-9.</p>"
    },

    
}