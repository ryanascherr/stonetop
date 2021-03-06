const allBackgrounds = {

    blessed: {

        initiate: `<h3>Initiate</h3><p>Stonetop has long been home to a sacred order, keepers of the old ways and speakers for Danu. You are one such initiate, the most gifted in generations. You gain the Rites of the Land move.</p><p>There are other initiates in Stonetop, serving the goddess and the village. They aid you as followers—see the Initiates of Danu insert. Who are they? Choose 2 or 3:</p><ul style="list-style-type: none;"><li><input type="checkbox"><b>Enfys</b>, your acolyte, beloved by birds</li><li><input type="checkbox"><b>Afon</b>, strange and fae-touched</li><li><input type="checkbox"><b>Gwendyl</b>, your mentor, a talented healer</li><li><input type="checkbox"><b>Olwin</b>, your anointed lover, seer of fates</li><li><input type="checkbox"><b>Seren the Eldest</b>, wise and hard as winter</li></ul>`,

        raisedByWolves: "<h3>Raised by Wolves</h3><p>Maybe not by <i>wolves</i>, but you grew up in the wild. Beasts of land and air were your siblings. The sighing wind taught you language. The trees and rocks were your home. Were you one of the Forest Folk? Abandoned or orphaned? Lured into the Wood?</p><p>Regardless, you get the Trackless Step move. Also, when you <b><i>Forage</i></b>, you have advantage.</p><p>For some reason, you’ve made yourself known to Stonetop and perhaps you even call it home. But the ways of humans are still strange to you. Once per session, <b><i>when your wild ways offend or alienate you from someone</i></b>, mark XP.</p>",

        vessel: "<h3>Vessel</h3><p>A seed of Danu’s power has taken root in your soul. Perhaps it has always been there and only recently sprouted. Or maybe it was planted in you during some portentous event.</p><p>Regardless, your dreams have been haunted by strange markings and symbols. You feel the mystic power in plants, stones, and soil. And you’ve felt the growing wrath of the Earth Mother as foul things begin to move about. Take the Danu’s Grasp move.</p><p>Danu’s power flows through you, but at great cost. When you <b><i>would spend 1 Stock from your sacred pouch</i></b>, you may choose to lose 2d4 HP instead.</p>"

    },

    fox: {

        theNatural: "<h3>The Natural</h3><p>You grew up around here, and always picked things up quickly. Reading and numbers, sure, but more. Hide and seek. Throwing stones. Climbing. Fighting. Whatever you tried, you were good at it. As good as anyone else, if not better.</p><p>Sure, you’ve got a reputation for bending the rules. Playing dirty. But why play if you don’t play to win, right? And who do they come to when there’s a problem needs solving? You, that’s who.</p><p>When you <b><i>Seek Insight</i></b>, you may roll +INT instead +WIS and add “What opportunity does no one else see?” to the list of possible questions.</p>",

        aLifeOfCrime: "<h3>A Life of Crime</h3><p>You’re new to Stonetop, having left behind a...<i>colorful</i> past. How did you get into that life? Why and how did you get out? Who and what did you leave behind?</p><p>Regardless, these people have taken you in. Time to lead an honest life, right?</p><p>You start with either Burgle or Light Fingers (your choice) as an extra move, and either burglar tools or a hidden stash (your choice) as an additional special possession.</p>",

        theProdigalReturned: "<h3>The Prodigal Returned</h3><p>You left long ago, travelling far and living by your wits. Why did you leave? What deeds do you boast of, and which do you regret?</p><p>You always longed to return to Stonetop, and return you have. You’re a bit of a celebrity now, and you’ve got friends (or close enough) strewn about the known world.</p><p>When you <b><i>declare that you know someone outside of Stonetop</i></b>, someone who can help, name them and roll +CHA: on a 10+, yeah, they can help (tell us why they’re willing); on a 7-9, they can help but pick 1 from the list below; on a 6-, the GM chooses 1 and then some.</p><ul><li>They still hold a grudge</li><li>They're going to need something from you first</li><li>They swore off this sort of thing long ago</li><li>You can't exactly, y'know, trust them</li></ul>"

    },

    heavy: {

        sheriff: "<h3>Sheriff</h3><p>You keep order in Stonetop and protect it from outside threats. It might not be anything official, but everyone knows you’ve got a cool head and the weight to back up your words.</p><p>When you <b><i>bark an order or warning</i></b>, roll +CHA: <b>on a 7+</b>, they must choose 1:</p><ul><li>Do what you say</li><li>Dig in/take cover/flee</li><li>Attack you</li></ul><p><b>On a 10+</b>, you can tell which one they’re going to do and do something first; gain advantage if you do.</p>",

        bloodSoakedPast: "<h3>Blood-Soaked Past</h3><p>You left behind a life of violence and a name mothers used to scare their children. For whatever reason, the people of Stonetop took you (back?) in and treat you like one of their own.</p><p>When you <b><i>Persuade using violence or threats against someone who knows your black reputation</i></b>, you can roll +STR instead of +CHA. Also, if you take the Formidable move, you can choose to roll +CON instead of +CHA.</p><p>When you <b><i>fight to kill without mercy or hesitation</i></b>, you deal +1d4 damage.</p>",

        stormMarked: "<h3>Storm-Marked</h3><p>You’ve been touched by Tor (Rainmaker, Thunderhead, Slayer-of-Beasts!) and bear runic markings similar to those etched into the Stone. When did the marks manifest? Are they a symbol of your strength, speed, and courage? Or their source?</p><p>You start with the Storm Markings major arcanum. Mark one of the boxes on the front of the Storm Markings sheet, and describe here the time you were struck by lightning and walked away unharmed.</p>"

    },

    judge: {

        legacy: "<h3>Legacy</h3><p>You are the latest in a long line of Judges—born here, apprenticed to the prior Judge, and charged with the passing of the mantle. The Chronicle is a rich repository of lore, but there’s no index, so good luck fi nding anything.</p><p>When you <b><i>Know Things about the people or history of Stonetop</i></b>, you have advantage.</p><p>When you <b><i>spend days, weeks, or months poring over the Chronicle</i></b>, ask the GM a question, and the GM will tell you what you learn in that time.</p>",

        missionary: "<h3>Missionary</h3><p>You are part of a larger order of Aratis, sent to Stonetop to spread the faith and protect the flickering flame of civilization. The Chronicle is new and a work in progress; your position in town is far from certain. Add the following Judges to the Neighbors section of the Stonetop playbook:</p><ul><li>Devin (from Marshedge)</li><li>Haeris (from Gordin's Delve)</li><li>Rahat (from Lygos)</li></ul><p>When you <b><i>call upon the Judge of another steading for aid or information</i></b>, they are oath-bound to give it. You are likewise oathbound to support them.</p><p>You have an aviary in addition to your usual choice of special possessions. When you <b><i>send a message via trained bird</i></b>, as is the way of the Judges of your order, the GM will tell you if and when you receive a response, and what it says.</p>",

        prophet: "<h3>Prophet</h3><p>The line of Judges was broken long ago, the Chronicle lost or fallen into ruin. Aratis has called you personally to her service though dreams, omens, and visions. Some in town resent the authority you’ve assumed.</p>When you <b><i>spend a few days communing with Aratis about a threat facing Stonetop or civilization as a whole</i></b>, roll +WIS: <b>on a 7+</b>, Aratis reveals the course of action she would have you take; <b>on a 10+</b>, you also hold 2 Sanction. While <b><i>acting on her orders</i></b>, spend 1 Sanction to add +1 to a roll you just made.</p>"

    },

    lightbearer: {

        auspiciousBirth: "<h3>Auspicious Birth</h3><p>You were born in Stonetop, and that birth was marked by the God of Light. You bear a sunshaped birthmark, perhaps, or maybe you were born during an eclipse?</p><p>Whatever the sign, your connection to Helior was clear early on. You’ve a place of honor in Stonetop, though it’d be a lie to say you don’t make some uneasy.</p><p>When <b><i>one of your moves would cause you to mark a debility</i></b>, you may mark this move instead, to no ill effect. When you <b><i>Make Camp</i></b>, clear the circle.</p>",

        itinerantMystic: "<h3>Itinerant Mystic</h3><p>They think of you as a self-satisfied kook who comes through now and again, speaking in riddles and playing tricks with the light. Sure, they know there’s something holy about you, but it’s not like you’re a priest or anything. Priests talk sense.</p><p>When you <b><i>start a session away from the others or go off on your own to do something mysterious</i></b>, hold 1 Enigma. You or the GM may spend your Enigma at any time to have you appear out of the blue, with or without explanation, for all things are possible to one who walks with Helior.</p>",

        soulOnFire: "<h3>Soul on Fire</h3><p>You led a worldly life. A life of fear and doubt, base pleasures and petty grudges. A life like so many others. But something happened—injury, illness, a brush with Death; perhaps a moment of such profound misery and self-loathing that you thought you could fall no further.</p><p>Th ere, in the dark, Helior’s light shined upon you, igniting in your soul, lifting you and fi lling you with a profound sense of purpose.</p><p>When you <b><i>Persaude a group by preaching charity, mercy, and hope and roll a 7+</i></b>, aside from the usual effect, choose 1:</p><ul><li>Your name and your message spread</li><li>Someone approaches you, now or later, eager to know more</li></ul>"

    },

    marshal: {

        scion: "<h3>Scion</h3><p>You grew up here, descended from a long line. Some of the biggest names in Stonetop’s past are perched in your family tree. Everyone in the village takes your authority as a given, and your crew is a well-established institution in town.</p><p>You start with the Veteran Crew move, in addition to your usual moves.</p><p>When you <b><i>create your Crew</i></b>, they automatically have the <i>respected</i> tag (in addition to your usual picks, and any you get from Veteran Crew).</p>",

        penitent: "<h3>Penitent</h3><p>Before you came here, you led a band of ne’er-dowells: bandits, raiders, or bloody-handed mercenaries. But something changed. A moment of truth led you and your followers—some of them at least—to leave that life behind. And for whatever reason, the people of Stonetop took you in.</p><p>When you <b><i>draw on your bloody past to Know Things</i></b>, you may roll +STR instead of +INT. If you do, the GM will ask you who you wronged back then or who might still hold a grudge. Answer them now.</p><p>When you <b><i>create your Crew</i></b>, they automatically have the <i>warriors</i> tag (in addition to your usual picks).</p>",

        luminary: "<h3>Luminary</h3><p>You’re a natural leader—your words inspire, your plans win the day, your deeds are recounted far and wide. How is it that a luminary like you hails from this backwater? Are you touched by the gods? Does ancient blood flow in your veins? Or are you simply the champion that Stonetop needs in these trying times?</p><p>You start with the We Happy Few move, in addition to your usual moves.</p><p>When you <b><i>create your Crew</i></b>, they start with the Glory cost, in addition to 1 other cost of your choice. You may use either cost to trigger the Pay Up move.</p>"

    },

    ranger: {

        mightyHunter: "<h3>Mighty Hunter</h3><p>You are a hunter of the Great Wood, the best the town has seen in generations. You know every part of the Wood within a two-day march.</p><p>You start with both the Expert Tracker move and the Stalker move.</p>",

        wideWanderer: "<h3>Wide Wanderer</h3><p>You have travelled much of the known world and perhaps parts beyond. Add each of the following to the Neighbors list in the Stonetop playbook, choosing 1 trait for each:</p><ul><li>Ennis (from Marshedge)</li><li>Shahar (from Gordan's Delve)</li><li>Yannic (from the Hillfolk)</li><li>Tovia (from Lygos)</li><li>Sasca (from the northern Manmarch)</li></ul><p>You start with the Mental Map move.</p><p>When you <b><i>Know Things about the wider world</i></b>, you can roll +WIS instead of +INT.</p><p>When you <b><i>arrive somewhere you’ve visited before</i></b> (your call), tell the GM when you were last here, and the GM will tell you how it’s changed.</p>",

        beastBonded: "<h3>Beast Bonded</h3>You grew up civilized, but your soul is bound to a beast of the wild. You’re closer to it than to any man or woman. How did this bond come about? How long ago? Regardless, you start with the Animal Companion move.</p><p>When you <b><i>focus on your animal companion for a few moments</i></b>, you can use any of the actions you’ve marked below, no matter the distance between you. Mark 1 action at 1st level, then another at 3rd, 5th, 7th, and 9th.</p><ul><li>Gauge its distance and direction from you</li><li>Call it back to your side</li><li>Sense its emotional state</li><li>Get a brief impression of what it senses</li><li>Lend it your strength-lose 1d6 HP, and it regains an equal amount</li></ul>"

    },

    seeker: {

        patriot: "<h3>Patriot</h3><p>These people are family. Chaos grows all around, but you’ll be damned if you’ll let your family come to harm. Damned indeed.</p><p>You have sought out and embraced dark power to protect that which you hold dear. Or perhaps that power fell upon you, and you took it up for the greater good. Either way, you seek more.</p><p>You start with the Let’s Make a Deal move and are Well Versed in the Things Below. You’ve also acquired 1 major arcanum:</p><ul><li>The Hec’tumel Codex</li><li>The Red Scepter</li><li>The Staff of the Lidless Orb</li></ul>",

        antiquarian: "<h3>Antiquarian</h3><p>The past has buried many secrets, and you are determined to dig them up. Years of study across the land have led you here, and you are convinced that this town holds the key to your greatest discoveries. What is it you hope to find? What is it that keeps you here?</p><p>In any case, your travels and studies mean that you start with the Polyglot move and that you are Well Versed in the Makers and their arts. You’ve also acquired 1 major arcanum:</p><ul><li>Noruba’s Ice-Sphere</li><li>The Azure Hand</li><li>The Mindgem</li></ul>",

        witchHunter: "<h3>Witch Hunter</h3><p>You’ve dedicated your life to rooting out and destroying horrors and their servants. What set you down this path? What did you sacrifice to walk it? What led you to call Stonetop home?</p><p>Regardless, you start with the Everything Bleeds move and are Well Versed in (pick 1) the fae, the Things Below, or the Black Gates and what lies beyond. You’ve also acquired 1 major arcanum:</p><ul><li>The Demonhide Cloak</li><li>The Redwood Effigy</li><li>The Twisted Spear</li></ul>"

    },

    wouldBeHero: {

        impetuousYouth: "<h3>Impetuous Youth</h3><p>Stonetop has always been home, but you chafe at the demands of mundane life and have always longed for more. Excitement! Danger!</p><p>When you <b><i>make a move and come up short</i></b>, you can give it your all and turn a 6- into a 7-9, a 7-9 into a 10+, and (if it matters), a 10-11 into a 12+. But if you do, pick 1 (the GM will fill in the details):</p><ul><li>You get hurt (2d4 damage and an actual injury)</li><li>You cause collateral damage, endanger others, or otherwise escalate the situation</li><li>Something on your person is lost or breaks</li></ul>",

        driven: "<h3>Driven</h3><p>You once led a simple life, but something happened. Something changed you, burdened you with terrible purpose. What was it? Choose 1:</p><ul><li>A loved one was killed or abducted</li><li>Someone gave their life to save you</li><li>Your idol sacrificed themselves to save many</li><li>You stumbled upon a dark mystery</li><li>You must make amends for a terrible mistake</li></ul><p>You always have the option of Burning Bright; you can spend 2 XP after you roll to add +1, even if you don’t have enough XP to level.</p>",
        
        destined: "<h3>Destined</h3><p>Fate has laid her hand upon you and set you on a course for greatness. Choose 3-4 of the items below to describe your destiny:</p><p>anointed, marked at birth, your coming foretold, destroy, discover, free, protect, restore, unify, blood, civilization, darkness, earth & stone, fire, ice, light, life, storms, war, water, the fae, the gods, the Makers, the Stone, the Things Below</p><p>When you <b><i>start a session</i></b>, roll +nothing: <b>on a 7+</b>, the GM will describe a recent omen, dream, or vision that points toward your fate; <b>on a 10+</b>, you can ask the GM a follow-up question and get a clear, helpful answer; <b>on a 6-</b>, tell us of the nightmares you’ve been having and how your fears play into them.</p><p>When you <b><i>are at Death’s Door</i></b>, ask yourself, “Is my destiny fulfilled?” If it is not, treat a miss as a 7-9 and a 7-9 as a 10+.</p>"
    }
}