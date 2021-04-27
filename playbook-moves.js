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
    
    lightbearer: {

        aCandleAgainstTheDark: "<h3>A Candle Against the Dark</h3><p>When you <b><i>wield a holy light but go otherwise unarmed</i></b>, you have 2 Armor.</p>",

        luminousShield: "<h3>Luminous Shield</h3><p>When you <b><i>brandish a holy light to turn aside an attack against body, mind, or soul</i></b>, roll +CHA: <b>on a 10+</b>, pick 2; <b>on a 7-9</b>, pick 1:</p><ul><li>The attack is deflected, doing no harm</li><li>The attacker, if in range of your light, is briefly blinded</li><li>Your holy light is not extinguished</li></ul>",

        allIsIlluminated: "<h3>All is Illuminated</h3><p>When you <b><i>look closely on another and see their soul laid bare</i></b>, roll +WIS: <b>on a 10+</b>, ask their player 1 question from the list below, plus “And what would make them feel loved, beautiful, or worthy?”; <b>on a 7-9</b>, ask them 1 question from the list. In any case, they must answer truthfully.</p><ul><li>Of what are they most ashamed?</li><li>What do they most desire or covet?</li><li>What hope have they abandoned?</li><li>Who or what is most precious to them?</li></ul>",

        andBeholdAPaleHorse: "<h3>And Behold a Pale Horse</h3><p>When you <b><i>spend the night gazing into a flame</i></b>, ask the GM to reveal an impending doom or grim portent that will come to pass unless you intervene, and how you might yet do so.</p>",

        consecratedFlame: "<h3>Consecrated Flame</h3><p>When you <b><i>whisper words of consecration to a flame</i></b>, the flame casts a holy light. Holy light is uncomfortable for creatures of darkness to look upon, but does no true harm. The holy light lasts until the flame goes out or until you consecrate another flame, whichever comes first.</p>",

        fireWithin: "<h3>Fire Within</h3><p>When you <b><i>are in darkness</i></b>, you are able to see by the light of your inner fire. When you <b><i>take damage from cold or fire</i></b>, reduce that damage by 2.</p>",

        guidingLight: "<h3>Guiding Light</h3><p>When you <b><i>lead one or more NPCs through danger</i></b>, roll +CHA: <b>on a 10+</b>, you all make it through (Helior be praised); <b>on a 7-9</b>, the GM will tell you what’s required to get everyone through safely.</p>",

        heliorsUnblinkingEye: "<h3>Helior's Unblinking Eye</h3><p>When you <b><i>stare into the sun long enough to lose your vision</i></b>, name a person or place that you know and roll +WIS: <b>on a 10+</b>, you briefly glimpse your subject as if from a great height, and choose 2 from the list below; <b>on a 7-9</b>, you briefly glimpse your subject as if from a great height, and choose 1:</p><ul><li>The glimpse lasts as long as you wish</li><li>Your point of view shifts to very close range</li><li>You recover your vision quickly</li></ul>",

        improvedStat: "<h3>Improved Stat</h3><p>Each time you take this move, increase one of your stats by 1 (to a max of +2).</p>",

        invokeTheSunGod: "<h3>Invoke the Sun God</h3><p>When you <b><i>imbue a holy light with Helior’s power</i></b>, choose an Invocation you know and roll +WIS: <b>on a 10+</b>, it works as described but you must choose 1 consequence from the list below; <b>on a 7-9</b>, it works as described, but you and the GM each choose 1:</p><ul><li>The Invocation has its reduced effect</li><li>The effort taxes you; mark a debility</li><li>The light is snuffed out when the Invocation is complete, its fuel consumed</li><li>You must bask in sunlight for a hour or so before using that Invocation again</li></ul><p>See the <b>Invocations</b> insert for details.</p>",

        keepTheHomeFiresBurning: "<h3>Keep the Home-Fires Burning</h3><p>When you <b><i>build a camp fire and sprinkle it with ash from your own hearth</i></b>, anyone who Makes Camp with you is free from nightmares or bad dreams and recovers (extra) HP equal to your CHA.</p>",

        lamplighter: "<h3>Lamplighter</h3><p>When you <b><i>whisper to a flammable object</i></b> (torch, wick, kindling, etc.), it ignites in moments.</p>",

        piety: "<h3>Piety</h3><p>When you <b><i>spend at least an hour in proper worship to Helior</i></b>, hold 1 Blessing. Other faithful PCs who partake in this worship also hold 1 Blessing. At any time, you can spend 1 Blessing to add +1 to a roll you just made in pursuit of a righteous cause.</p>",

        purifyingFlames: "<h3>Purifying Flames</h3><p>When you <b><i>wield a holy light against creatures of darkness</i></b>, you may roll +WIS to Clash. When you do so, your range is that of your light source, and your damage is d10 (ignores armor).</p>",

        radiantCountenance: "<h3>Radiant Countenance</h3><p>When you <b><i>give your fond attention and affection to your followers</i></b>, they accept it as payment regardless of their usual Cost and you gain advantage on your next roll to Order Followers.</p>",

        riseLikeTheSun: "<h3>Rise Like the Sun</h3><p>When you <b><i>draw attention to yourself by word or deed</i></b>, roll +CHA: <b>on a 10+</b>, everyone turns and looks, and you hold their gaze as long as you keep giving them reason to look; <b>on a 7-9</b>, everyone turns and looks.</p>",

        springsFirstThaw: "<h3>Spring's First Thaw</h3><p>When you <b><i>spend time (an hour at least, maybe more) seeking to stir hope, kindness, or mercy in an NPC</i></b>, roll +CHA: <b>on a 10+</b>, you light a fire deep within them and affect a lasting change; <b>on a 7-9</b>, you kindle goodness in their heart for now, but they will eventually return to their old ways; <b>on a 6-</b>, their heart hardens and, whatever else the GM says, you can’t use this move on them again.</p>",

        burnTwiceAsBright: "<h3>Burn Twice as Bright</h3><p>When you <b><i>Invoke the Sun God</i></b>, you may mark a debility to use 2 Invocations at once. Roll once, and apply any consequences to both Invocations.</p>",

        empoweredInvocations: "<h3>Empowered Invocations</h3><p>When you <b><i>Invoke the Sun God</i></b>, you can choose an extra consequence before you roll. If you do, the invocation has its <i>empowered</i> effect.</p>",

        gloriousServant: "<h3>Glorious Servant</h3><p>When you <b><i>Invoke the Sun God and roll a 10+</i></b>, you need not choose a consequence; <b>on a 7-9</b>, you choose a consequence but the GM does not.</p>",

        hungryFlames: "<h3>Hungry Flames</h3><p>When you <b><i>deal damage with a holy light</i></b>, you deal +1d6 damage and your target is engulfed in holy light and flames.</p>",

        lightMoreLight: "<h3>Light, More Light</h3><p>When you <b><i>consecrate a flame</i></b>, it burns brighter than normal. A rushlight or candle illuminates to <i>reach</i> range, an oil lamp, lantern, or torch out to <i>near</i> range, and a bullseye lantern out to <i>far</i> range.</p>",

        superiorStat: "<h3>Superior Stat</h3><p>Increase one of your stats by +1 (to a max of +3).</p>",

        wielderOfTheWhiteFlame: "<h3>Wielder of the White Flame</h3><p>When you <b><i>channel Helior’s essence into an object you carry</i></b>, roll +WIS: <b>on a 10+</b>, it ignites with a white flame that casts a holy light (<i>reach</i>, <i>area</i>) and burns neither you nor the object, and you may Invoke the Sun God right now as if you rolled a 10+; <b>on a 7-9</b>, it ignites with a white flame that casts a holy light (<i>reach</i>, <i>area</i>) and burns neither you nor the object.</p>"
    },

    marshal: {

        armored: "<h3>Armored</h3><p>When you <b><i>wear armor or carry a shield</i></b>, mark only O for each (instead of OO), and ignore the clumsy tag (you don’t suffer disadvantage for wearing it). If you take this move at the start of play, add an O iron hauberk, O bronze cuirass, or O scale coat to your inventory (all are 2 armor, <i>warm</i>, <i>clumsy</i>).</p>",

        artsOfWar: "<h3>Arts of War</h3><p>Take a move from the Fox, Heavy, Judge, Ranger, or Seeker playbooks, for which you otherwise qualify. You can pick from a different playbook each time. You can’t take Improved Stat or Superior Stat.</p>",

        crew: "<h3>Crew</h3><p>You’ve got a crew of stalwarts, six or so residents of Stonetop with some steel to them. See the Crew insert for details.</p>",

        veteranCrew: "<h3>Veteran Crew</h3><p>Each time you take this move, pick 1. You can also choose to reselect their Instinct and Cost.</p><ul><li>Select 2 new tags for your Crew</li><li>Increase their damage die from d6 to d8</li><li>Increase their max HP by 2 each</li></ul>",

        frontLineLeader: "<h3>Front Line Leader</h3><p>You have advantage to Order Followers while fighting. When <b><i>at least one ally Aids your attack</i></b>, deal +1d4 damage (+1 for each extra attacker).</p>",

        improvedStat: "<h3>Improved Stat</h3><p>Each time you take this move, increase one of your stats by 1 (to a max of +2).</p>",

        logistics: "<h3>Logistics</h3><p>When you <b><i>have a steading Muster or Pull Together</i></b>, or when you <b><i>Requisition</i></b>, you have advantage.</p>",

        readTheLand: "<h3>Read the Land</h3><p>When you <b><i>first take a moment to survey the terrain</i></b>, ask the GM one of the following; gain advantage on your next roll to act on the answer.</p><ul><li>What’s the best way in, out, through, or past?</li><li>Where’s the best spot for a trap or an ambush?</li><li>Where’s the most defensible position?</li><li>What here is out of place?</li></ul>",

        prepareAWelcome: "<h3>Prepare a Welcome</h3><p>When you <b><i>have your allies fortify a position and lie in wait for battle</i></b>, hold 1 Surprise if you’re rushed or 2 Surprises if you can take your time.</p><p>Once battle is joined, spend 1 Surprise to reveal a ploy, defense, or dirty trick you prepared in advance and roll +INT: on a 10+, it works as well as can be expected, and you’ve still got a few tricks up your sleeve—regain 1 Surprise; on a 7-9, it works as well as can be expected.</p>",

        setUpStrike: "<h3>Set-Up Strike</h3><p>When you <b><i>call an ally’s attention to an attack you are about to make</i></b>, that ally’s next attack against the same target does +1d4 damage.</p>",

        shakeItOff: "<h3>Shake It Off</h3><p>When you <b><i>order an ally to overcome fear, pain, doubt, or delusion</i></b>, roll +CHA: <b>on a 10+</b>, they do it; <b>on a 7-9</b>, a PC gets advantage to do it; an NPC will do it, but they’ll need time, they’ll resent you, or they’ll feel humiliated (GM decides).</p>",

        shieldWall: "<h3>Shield Wall</h3><p>When you <b><i>have your crew form a shield wall</i></b>, they Defend with advantage and <b>on a 7+</b> they hold +2 Readiness (instead of the usual +1 for shields). <b><i>As long as they maintain formation</i></b>, they can go on the offensive without losing Readiness.</p>",

        sirPermissionToDieSir: "<h3>Sir, Permission To Die, Sir</h3><p>When <b><i>one of your followers is at Death’s Door</i></b>, pick 1:</p><ul><li>They roll +Loyalty (instead of +nothing)</li><li>You let them go; they die and you mark XP</li></ul>",

        speakSoftly: "<h3>Speak Softly</h3><p>When you <b><i>offer peace but your enemy refuses</i></b>, gain advantage on your next roll against them.</p>",

        stentorian: "<h3>Stentorian</h3><p>When you <b><i>raise your voice</i></b>, it carries far and cuts through even the din of battle.</p><p>When you <b><i>go into battle</i></b>, hold 2 Command. You can spend 1 Command to shout an order or warning to an ally; they gain advantage on their next roll to do as you say.</p>",

        takeTheMeasure: "<h3>Take the Measure</h3><p>When you <b><i>size someone up</i></b>, ask their player one of the questions below and get an honest answer. If they <b><i>fear or respect you</i></b> (their call), you can ask another question. You can’t use this move on them again until your relationship significantly changes.</p><ul><li>Can I trust them (to ______ )?</li><li>What do they intend to do?</li><li>How are they most useful/dangerous?</li><li>What weakness of theirs can I exploit?</li></ul>",

        weHappyFew: "<h3>We Happy Few</h3><p>When you <b><i>give an inspiring speech to your allies before facing a dire threat</i></b>, roll +CHA: <b>on a 10+</b>, each ally holds 2 Inspiration; <b>on a 7-9</b>, each ally holds 1 Inspiration; <b>on a 6-</b>, each ally holds 1, but you have disadvantage on all rolls until you share your nagging doubts with someone else.</p><p>Once battle is joined, your allies can spend their Inspiration at any time, 1-for-1 to do the following:</p><ul><li>Act fearlessly in the face of terror or overwhelming odds</li><li>Keep 1 HP instead of being reduced to 0 HP</li><li>Add 1d6 to a damage roll they just made</li></ul>",

        battlefieldGrace: "<h3>Battlefield Grace</h3><p>When you <b><i>take damage while leading your allies in battle</i></b>, the damage roll has disadvantage.</p>",

        heroesToTheLast: "<h3>Heroes to the Last</h3><p>Each time you take this move, pick 1:</p><ul><li>They are <i>exceptional</i> (and roll +2 instead of +1)</li><li>They are inured to terror & horror</li><li>Increase their max HP by 4 each</li><li>Increase their damage die one size (max d10)</li></ul>",

        focusFire: "<h3>Focus Fire</h3><p>When you <b><i>call the attention of nearby allies to an attack you are about to make</i></b>, those allies deal +1d4 damage against your target until you attack another foe or the fighting stops.</p>",

        likeAnOpenBook: "<h3>Like an Open Book</h3><p>When you <b><i>Take the Measure of someone who fears or respects you</i></b>, your second question can be anything you want. The GM might ask how you could possibly know this; tell them or ask something else.</p>",

        nobleMien: "<h3>Noble Mien</h3><p>When you <b><i>lead an NPC through danger and return them to safety</i></b>, if they aren’t part of your crew they will either offer to join your crew or pledge their future aid and support.</p>",

        peaceThroughStrength: "<h3>Peace Through Strength</h3><p>When you <b><i>stand ready to fight alongside like-minded allies</i></b>, anything capable of fear recognizes you as a serious threat and treats you accordingly.</p>",

        superiorStat: "<h3>Superior Stat</h3><p>Increase one of your stats by +1 (to a max of +3).</p>"
    },

    ranger: {

        aSafePlace: "<h3>A Safe Place</h3><p>When you <b><i>select and prepare the party’s camp site</i></b>, hold 1 Precaution, or 2 Precaution if you are wellversed with this area and its dangers.</p><p>If trouble finds your camp site, you can spend 1 Precaution to reveal a simple defense, warning, or trick that you prepared in advance. If you do, tell us how you knew to make that specific preparation.</p>",

        animalCompanion: "<h3>Animal Companion</h3><p>You are accompanied by a beast of uncommon loyalty and cleverness. See the Animal Companion insert for details.</p>",

        magnificentSpecimen: "<h3>Magnificent Specimen</h3><p>Each time you take this move, your companion gains 2 additional options of your choice.</p>",

        bigGameHunter: "<h3>Big Game Hunter</h3><p>When you <b><i>strike at the weak spot of a large or huge creature</i></b>, you deal +2 damage.</p>",

        blotOutTheSun: "<h3>Blot Out the Sun</h3><p>When you <b><i>Let Fly with a bow</i></b>, you can deplete your ammunition (mark the next ammo status after your weapon) before you roll. If you do, choose 1:</p><ul><li>Gain advantage on your damage roll</li><li>Add the <i>area</i> tag to your attack; roll damage seperately for each target</li></ul>",

        callTheShot: "<h3>Call the Shot</h3><p>When you <b><i>take your time and calmly line up the perfect shot</i></b>, either deal your damage or roll +DEX: <b>on a 10+</b>, deal your damage and pick 2; <b>on a 7-9</b>, deal your damage and pick 1:</p><ul><li>Ignore armor or deal +1d4 damage (your call)</li><li>Stun, hobble, or hinder them</li><li>Make them trip or drop what they’re holding</li><li>Do no harm; don’t deal your damage after all</li></ul>",

        expertTracker: "<h3>Expert Tracker</h3><p>When you <b><i>Seek Insight by searching for tracks or studying the signs left by passing creatures</i></b>, you can ask “What happened here recently?” for free, even on a 6-.</p><p>When you <b><i>follow a creature’s trail</i></b>, roll +WIS: <b>on a 7+</b> you follow the trail to a significant change in direction, terrain, or mode of transport; <b>on a 10+</b>, you can also ask the GM a reasonable question about your quarry and get an honest, useful answer.</p>",

        homeOnTheRange: "<h3>Home on the Range</h3><p>When <b><i>a journey requires you to Defy Danger or Struggle as One</i></b>, treat a 6- as a 7-9.</p>",

        improvedStat: "<h3>Improved Stat</h3><p>Each time you take this move, increase one of your stats by 1 (to a max of +2).</p>",

        mentalMap: "<h3>Mental Map</h3><p>You can always retrace your steps and can accurately gauge distances and directions. You might not know the way forward but can always find your way back.</p><p>When you <b><i>think back on a place you’ve been to or observed</i></b>, you can retroactively Seek Insight about it as if you were still there.</p>",

        naturalist: "<h3>Naturalist</h3><p>When you <b><i>Know Things about beasts, natural environs, or spirits of the wild</i></b>, you have advantage.</p>",

        onTheHoof: "<h3>On The Hoof</h3><p>When you <b><i>travel through the wilderness</i></b>, you can procure 1d6 uses of O provisions each day (roll with disadvantage in winter or barren terrain). Each use of provisions can substitute for 1 supplies when you Make Camp.</p>",

        packHorse: "<h3>Pack Horse</h3><p>You can carry up to 4 O with a light load, 7 O with a normal load, and 10 O with a heavy load.</p>",

        predator: "<h3>Predator</h3><p>When you <b><i>Seek Insight</i></b>, add the following to the list of questions you can ask:</p><ul><li>Who or what here is the easiest prey?</li><li>How is ________ weak or vulnerable?</li></ul><p>When <b><i>acting on the answer to either question</i></b>, deal an extra 1d4 damage.</p>",

        senseTheUnnatural: "<h3>Sense the Unnatural</h3><p>When you <b><i>Seek Insight</i></b>, you can always ask, “What here is a perversion of the natural order?” for free, even on a 6-.</p>",

        stalker: "<h3>Stalker</h3><p>When you <b><i>carry a normal or light load and move with care</i></b>, you make no noise and leave no sign of your passing. When you <b><i>hide yourself in a natural environment</i></b>, you remain unseen until you draw attention to yourself, move positions, or attack.</p>",

        wildSpeech: "<h3>Wild Speech</h3><p>The grunts, barks, chirps, and calls of natural creatures are as a language to you. You can understand the intentions of and communicate basic ideas with any beast.</p>",

        alpha: "<h3>Alpha</h3><p>When you <b><i>assert your dominance over a beast or spirit of the wild</i></b>, roll +WIS: <b>on a 7+</b>, it must choose 1 from the list below; <b>on a 10+</b>, you also gain advantage on your next roll against it.</p><ul><li>Fight you for dominance</li><li>Slink away or flee, then avoid you</li><li>Accept your authority, at least for now</li></ul>",

        wordly: "<h3>Wordly</h3><p>Take a move from the Blessed, Fox, Heavy, or Seeker playbooks, for which you otherwise qualify. You can pick from a different playbook each time. You can’t pick Improved Stat or Superior Stat.</p>",

        beastOfLegend: "<h3>Beast of Legend</h3><p>Each time you take this move, pick 1:</p><ul><li>They are <i>exceptional</i> (and roll +2 instead of +1)</li><li>They get +4 HP and +1 armor</li></ul>",

        constantVigilance: "<h3>Constant Vigilance</h3><p>When <b><i>a foe would get the drop on you</i></b>, they don’t— you get to act first instead (if the GM describes an enemy taking you by surprise, even on a 6-, remind them of this move and say what you do).</p>",

        giantSlayer: "<h3>Giant Slayer</h3><p>When you <b><i>strike at a weak spot of a large or huge creature</i></b>, you deal another +2 damage (+4 total).</p>",

        masterTracker: "<h3>Master Tracker</h3><p>When you <b><i>even briefly scan for tracks or other signs left by passing creatures</i></b>, you can ask the GM, “What happened here recently?” and get an honest answer—no need to Seek Insight.</p>",

        superiorStat: "<h3>Superior Stat</h3><p>Increase one of your stats by +1 (to a max of +3).</p>",

        trailblazer: "<h3>Trailblazer</h3><p>When <b><i>a journey causes you to Defy Danger or Struggle as One</i></b>, don’t roll; you always get a 10+.</p>",

        walkItOff: "<h3>Walk It Off</h3><p>When you <b><i>would mark a debility</i></b>, you can mark this move instead to no ill effect. Clear it as you would a debility.</p>",

        wardenOfTheWild: "<h3>Warden of the Wild</h3><p>When you <b><i>deal damage to something you know to be a perversion of the natural order</i></b>, deal +1d4 damage.</p>"
    },

    seeker: {

        attuned: "<h3>Attuned</h3><p>When you <b><i>Seek Insight</i></b>, you can always ask, “What here is infused with magic?” for free, even on a 6-.</p>",

        conduitOfPower: "<h3>Conduit of Power</h3><p>When you <b><i>would mark a Consequence from a major arcanum</i></b>, you can mark 1 box here instead, with no negative effect (these marks never clear).</p>",

        countermeasures: "<h3>Countermeasures</h3><p>When you <b><i>witness a magical effect</i></b>, you may ask the GM, “how can this be countered or interrupted?” and get an honest answer. You or an ally gain advantage on your next roll to act on the answer.</p>",

        everythingBleeds: "<h3>Everything Bleeds</h3><p>When you <b><i>exploit an unnatural foe’s specific weakness or vulnerability</i></b>, deal +1d6 damage.</p>",

        everythingBurns: "<h3>Everything Burns</h3><p>When you <b><i>inspect a work of artifice or magic for a fatal flaw</i></b>, roll +INT: <b>on a 7+</b>, the GM will reveal the best way to destroy/sabotage it; <b>on a 10+</b>, you or an ally also gain advantage to act on the info.</p>",

        improvedStat: "<h3>Improved Stat</h3><p>Each time you take this move, increase one of your stats by 1 (to a max of +2).</p>",

        initiateOfTheSecretArts: "<h3>Initiate of the Secret Arts</h3><p>You have a “Sacred Pouch” (3 Stock, <i>magical</i>), as per the Blessed, but with no extraordinary qualities. Each time you take this move, choose a Blessed move for which you otherwise qualify (you can’t take Improved Stat or Superior Stat).</p>",

        letsMakeADeal: "<h3>Let's Make a Deal</h3><p>When you <b><i>Seek Insight</i></b>, add “What do they really want or need?” to the list of questions. When you <b><i>Persuade by offering them something that you know they want or need</i></b>, treat a 7-9 as a 10+.</p>",

        logbook: "<h3>Logbook</h3><p>You have a logbook (2 uses, <i>slow</i>) that doesn’t take up space in your inventory. When you (and only you) <b><i>consult your logbook and expend a use</i></b>, you can ignore a Know Things roll you just made and treat the result as a 10+. When <b><i>the Seasons Change</i></b>, reset your logbook to 2 uses.</p>",

        magpie: "<h3>Magpie</h3><p>When you <b><i>Have What You Need</i></b>, you can produce something strange, specific, maybe even valuable or a little bit magical, but if you do, tell us where you got and 2 of the following:</p><ul><li>How it’s not quite right, but maybe it’ll do?</li><li>The trouble you caused back home by getting it</li><li>Why using it will draw unwanted attention</li><li>That it’s the only thing like this that you’ve got, and why it’ll only work the one time</li></ul>",

        neverAtALoss: "<h3>Never at a Loss</h3><p>When you <b><i>Know Things and roll a 6-</i></b>, you may choose to not mark XP. If you don’t mark XP, the worst that happens is that the GM tells you nothing interesting or useful about the subject, but instead tells you how you could learn more.</p>",

        polyglot: "<h3>Polyglot</h3><p>When you <b><i>first encounter a living language in play</i></b>, describe your proficiency with it (if any) and how you came to acquire it.</p><p>When you <b><i>Know Things about any script, text, runes or symbols that you encounter</i></b>, you have advantage.</p>",

        cryptologist: "<h3>Cryptologist</h3><p>When you <b><i>study encoded, forgotten, or arcane marks or writing</i></b>, roll +INT: <b>on a 10+</b>, you can fully decipher them in just a few minutes; <b>on a 7-9</b>, you get the gist in a few minutes, but fully deciphering them will take you an hour or so.</p>",

        quickStudy: "<h3>Quick Study</h3><p>When you <b><i>study something magical that should take months to understand</i></b>, it instead takes mere weeks. If it should take weeks, it takes days. If it should take days, it takes only a few hours.</p>",

        safetyFirst: "<h3>Safety First</h3><p>When you <b><i>spend an hour or so preparing your mystical defenses</i></b>, hold 2 Protection. When you <b><i>are affected by harmful magic</i></b>, spend 1 Protection to halve the damage or effect.</p>",

        sageAdvice: "<h3>Sage Advice</h3><p>When <b><i>someone asks you for guidance</i></b>, they get advantage on their next roll to follow your advice.</p>",

        wellVersed: "<h3>Well-Versed</h3><p>Mark 1 topic, in addition to the one noted in your Background. Each additional time you take this move, mark 2 more topics.</p><ul><li>The Last Door, death, and the undead</li><li>The civilizations of humanity</li><li>The fae and their strange ways</li><li>The Makers and their arts</li><li>The primordial powers</li><li>The Things Below</li><li>The wild world and its spirits</li></ul><p>When you <b><i>Know Things about one of your topics</i></b>, you can ask the GM a follow-up question of your choice (even on a 6-).</p>",

        workWithWhatYouveGot: "<h3>Work With What You've Got</h3><p>When you <b><i>wield your environment against your foe(s)</i></b>, choose 1 from the list below and roll +INT: <b>on a 7+</b>, it works! <b>On a 10+</b>, pick 1 more—you get that, too.</p><ul><li>Impede or interrupt their actions</li><li>Create an advantage that grants you or an ally advantage on the next roll to exploit it</li><li>Deal damage appropriate to the source (d4 for bruises/scrapes, d6 for bloodshed, d8 if it’d break bones, d10 if it’d kill a common person)</li></ul>",

        arcaneAdept: "<h3>Arcane Adept</h3><p>When you <b><i>wish to invent a spell or magical effect</i></b>, detail its workings with the GM (using existing spells for guidance). Then, Make a Plan to invent it. If you like, pick one of the GM’s statements and ask them to provide an alternative (for example “first you must _____” could become “first you must _____, or it will take months”).</p>",

        deepInsight: "<h3>Deep Insight</h3><p>When you <b><i>Seek Insight about a magical object, effect, or creature</i></b>, you may ask one additional question, not limited to the list. Even on a 6-, you get to ask this question.</p>",

        improvise: "<h3>Improvise</h3><p>When you <b><i>attempt to use or trigger one of an arcanum’s mysteries without having unlocked it</i></b>, roll +INT: <b>on a 7+</b>, you pull it off, at least this once; <b>on a 10+</b>, you also unlock that mystery in the process.</p>",

        superiorStat: "<h3>Superior Stat</h3><p>Increase one of your stats by +1 (to a max of +3).</p>",

        mindOverMagic: "<h3>Mind Over Magic</h3><p>When you <b><i>roll to study or use an arcanum</i></b>, you can roll +INT instead of whatever stat you would normally roll.</p>",

        overchannel: "<h3>Overchannel</h3><p>When you <b><i>would mark a Consequence from a major arcanum</i></b>, you may mark a debility instead.</p>",

        proofAgainstDetection: "<h3>Proof Against Detection</h3><p>When you <b><i>hold Protection</i></b>, you can’t be scried upon or sensed by magical means, and have advantage to Defy Danger by being stealthy.</p>"
    },

    wouldBeHero: {

        angerIsAGift: "<h3>Anger is a Gift</h3><p>When you <b><i>burn with righteous anger</i></b> (see Fear & Anger on back of playbook), hold 2 Resolve. You can spend your Resolve 1-for-1 to:</p><ul><li>Set aside fear and doubt to do what must be done</li><li>Act suddenly, catching them off-guard</li><li>Inspire allies or bystanders to follow your lead</li><li>Strike hard (+1d4 damage, <i>forceful</i>)</li><li>Keep your footing, position, and/or your course despite what befalls you</li></ul>",

        speakTruthToPower: "<h3>Speak Truth to Power</h3><p>When you <b><i>demand that someone does what is clearly good and right</i></b>, you have advantage to Persuade. If they refuse, gain +1 Resolve.</p>",

        betterPartOfValor: "<h3>Better Part of Valor</h3><p>When you <b><i>are outnumbered or facing a foe bigger than you</i></b>, you have advantage to hide from, escape from, or sneak past them.</p>",

        iGetKnockedDown: "<h3>I Get Knocked Down</h3><p>When you <b><i>take damage despite your best efforts to avoid it</i></b>, you can choose to halve the damage but pick 1 of the following:</p><ul><li>You lose something (footing, grip, etc.)</li><li>Something on your person breaks</li><li>You’re out of it for a moment</li></ul><p>Whatever you choose, the GM will describe the details.</p>",

        butIGetUpAgain: "<h3>But I Get Up Again</h3><p>When you <b><i>use I Get Knocked Down</i></b>, you have advantage on your next roll against whatever dealt the damage and your next blow against them does +1d4 damage.</p>",

        improvedStat: "<h3>Improved Stat</h3><p>Each time you take this move, increase one of your stats by 1 (to a max of +2).</p>",

        inOverYourHead: "<h3>In Over Your Head</h3><p>When <b><i>another PC rescues you from danger</i></b>, mark XP.</p>",

        ironWill: "<h3>Iron Will</h3><p>When you <b><i>are subject to mind control or magic that affects your feelings</i></b>, you can take 1d4 damage (ignoring armor) to disregard its influence.</p>",

        inquiringMinds: "<h3>Inquiring Minds</h3><p>When you <b><i>seek out and receive honest advice</i></b>, gain advantage on your next roll to follow that advice.</p>",

        neverGonnaKeepMeDown: "<h3>Never Gonna Keep Me Down</h3><p>When you <b><i>have 5 or fewer current HP</i></b>, you impose disadvantage on any damage you take.</p><p>Once per session, <b><i>when you are at Death’s Door</i></b>, don’t roll. You get a 10+.</p>",

        potentialForGreatness: "<h3>Potential for Greatness</h3><p>Once per level, <b><i>when you roll a stat and get a 10+</i></b>, mark one of the following (note the level during which you marked it). You don’t have to mark them in order.</p><ul><li>Increase the stat you rolled by 1, to a max of +2 (at level ___)</li><li>Increase the stat you rolled by 1, to a max of +2 (at level ___)</li><li>Increase the stat you rolled by 1, to a max of +2 (at level ___)</li><li>Increase the stat you rolled by 1, to a max of +2 (at level ___)</li><li>Increase your max HP by 4 (at level ___)</li><li>Increase your damage die to a d8 (at level ___)</li></ul>",

        resourceful: "<h3>Resourceful</h3><p>When you <b><i>Defy Danger and roll a 6-</i></b>, ask the GM a question from Seek Insight after they describe what happens. Gain advantage on your next roll to act on the answer.</p>",

        somethingToRememberMeBy: "<h3>Something to Remember Me By</h3><p>When you <b><i>spend Readiness (from Defend) to strike back at an attacker</i></b>, you deal +1d4 damage and scar, mark, or diminish them in some way (the GM will say how, or ask you to).</p>",

        toughLove: "<h3>Tough Love</h3><p>When you <b><i>honestly think another PC is in the wrong and call them on it</i></b>, they have disadvantage on any rolls against you until you two work it out.</p>",

        underestimated: "<h3>Underestimated</h3><p>As long as you avoid overt hostility, no enemy will consider you a threat.</p><p>When you <b><i>make your first move against an enemy who underestimates you</i></b>, you have advantage.</p>",

        upWithPeople: "<h3>Up With People</h3><p>When you <b><i>converse with someone</i></b> (PC or NPC) you can hold 2 Rapport with them. If you do, they hold 1 Rapport with you. During the conversation, either of you can spend 1 Rapport to ask the other player one of the following and get an honest answer.</p><ul><li>What weighs you down or holds you back?</li><li>What drives you forward?</li><li>What lesson would you have me learn?</li><li>What do you think of me, truly?</li></ul>",

        versatile: "<h3>Versatile</h3><p>Choose a move from any other playbook, as long as you meet its requirements. You can pick from a different playbook each time. You can’t take Improved Stat or Superior Stat.</p>",

        aForceToBeReckonedWith: "<h3>A Force to be Reckoned With</h3><p>Any intelligent creature who looks you in the eye or hears the steel in your voice instinctively knows that you are a force to be reckoned with, and treats you appropriately.</p><p>When you <b><i>Defy Danger against something trying to harm or constrain you</i></b>, on a 12+ you turn the tables on them (the GM will say how, or ask you to).</p>",

        bigDamnHero: "<h3>Big Damn Hero</h3><p>When you <b><i>first leap into danger to protect someone</i></b>, don’t roll to Defend. Instead, treat as though you rolled a 10+.</p><p>When you <b><i>Defend</i></b>, you can spend 1 Readiness to lock eyes with an attacker; they have disadvantage on damage rolls against you and your ward for the rest of the fight.</p>",

        superiorStat: "<h3>Superior Stat</h3><p>Increase one of your stats by +1 (to a max of +3).</p>",

        undaunted: "<h3>Undaunted</h3><p>When you <b><i>are outnumbered or facing a foe bigger than you</i></b>, you get +1 armor and deal +1d6 damage.</p>",

        voiceOfExperience: "<h3>Voice of Experience</h3><p>When <b><i>another PC comes to you for advice and you tell them what you think is best</i></b>, they have advantage on their first roll to follow your advice.</p><p>When you <b><i>Seek Insight</i></b>, you can always ask, “What is about to happen?” for free, even on a 6-.</p>"
    }
}