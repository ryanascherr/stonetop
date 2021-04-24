const allBasicMoves = {

    aid: "<h3>Aid</h3><p>When you <b><i>help someone who has not yet rolled</i></b>, the GM picks 1:</p><ul><li>They can accomplish more than they could alone</li><li>They gain advantage on their roll</li></ul><p>Regardless, you are exposed to any risk, cost, or consequence associated with their roll.</p>",

    clash: "<h3>Clash</h3><p>When you <b><i>fight in melee or close quarters</i></b>, roll +STR: <b>on a 10+</b>, your maneuver works as expected (deal your damage) and pick 1:</p><ul><li>Avoid, prevent, or counter your enemy’s attack</li><li>Strike hard and fast, for 1d6 extra damage, butsuffer your enemy’s attack</li></ul><p><b>On a 7-9</b>, your maneuver works, mostly (deal your damage) but you suffer your enemy’s attack.</p>",

    defend: "<h3>Defend</h3><p>When you <b><i>take up a defensive stance or jump in to protect others</i></b>, roll +CON: <b>on a 10+</b>, hold 3 Readiness (or 4 if you bear a shield); <b>on a 7-9</b>, hold 1 Readiness (or 2 with a shield). Spend your Readiness 1-for-1 to:</p><ul><li>Suffer an attack’s damage/effects instead of your ward</li><li>Halve an attack’s effect or damage</li><li>Draw all attention from your ward to yourself</li><li>Strike back at an attacker (deal your damage, with disadvantage)</li></ul><p>When you <b><i>go on the offense, cease to focus on defense, or the threat passes</i></b>, lose any Readiness that you hold.</p>",

    defyDanger: "<h3>Defy Danger</h3><p>When <b><i>danger looms, the stakes are high, and you do something chancy</i></b>, check if another move applies. If not, roll...</p><ul><li>... +STR to power through or test your might</li><li>... +DEX to employ speed, agility, or finesse</li><li>... +CON to endure or hold steady</li><li>... +INT to apply expertise or enact a clever plan</li><li>... +WIS to exert willpower or rely on your senses</li><li>... +CHA to charm, bluff, impress, or fit in</li></ul><p><b>On a 10+</b>, you pull it off as well as one could hope; <b>on a 7-9</b>, you can do it, but the GM will present a lesser success, a cost, or a consequence (and maybe a choice between them, or a chance to back down).</p>",

    interfere: "<h3>Interfere</h3><p>When you <b><i>try to foil another PC’s action and neither of you back down</i></b>, roll...</p><ul><li>... +STR to power through or test your might</li><li>... +DEX to employ speed, agility, or finesse</li><li>... +CON to endure or hold steady</li><li>... +INT to apply expertise or enact a clever plan</li><li>... +WIS to exert willpower or rely on your senses</li><li>... +CHA to charm, bluff, impress, or fit in</li></ul><p><b>On a 10+</b>, they pick 1 from the list below; <b>on a 7-9</b>, they pick 1 from the list below but you are left off balance, exposed, or otherwise vulnerable.</p><ul><li>Do it anyway, but with disadvantage on their (next) roll</li><li>Relent, change course, or otherwise allow their move to be foiled</li></ul>",

    knowThings: '<h3>Know Things</h3><p>When you <b><i>consult your accumulated knowledge</i></b>, roll +INT: <b>on a 10+</b>, the GM will tell you something interesting and useful about the topic at hand; <b>on a 7-9</b>, the GM will tell you something interesting—it’s on you to make it useful; <b>either way</b> the GM might ask, “How do you know this?”</p>',

    letFly: "<h3>Let Fly</h3><p>When you <b><i>launch a ranged attack</i></b>, roll +DEX: <b>on a 10+</b>, you have a clear shot—deal your damage; <b>on a 7-9</b>, deal your damage but pick 1:</p><ul><li>You must move or hold steady to get the shot, placing you in danger</li><li>Take what you can get; you have disadvantage on your damage roll</li><li>Deplete your ammo, marking the next status next to your weapon (don’t pick this if it’s <i>thrown</i>)</li></ul>",

    persuadeNPCs: "<h3>Persuade (vs. NPCs)</h3><p>When you <b><i>press or entice an NPC</i></b>, say what you want them to do (or not do). If they <b><i>have reason to resist</i></b>, roll +CHA: <b>on a 10+</b>, they either do as you want or reveal the easiest way to convince them; <b>on a 7-9</b>, they reveal something you can do to convince them, though it’ll likely be costly, tricky, or distasteful.</p>",

    persuadePCs: '<h3>Persuade (vs. PCs)</h3><p>When you <b><i>press or entice a PC and they resist</i></b>, ask their player: "Could I possibly get you to do this, yes or no?" If answer is "No," let it drop.</p><p>If the answer is "Yes," you can roll +CHA: <b>on a 10+</b>, they mark XP if they do what you want, and if they don\'t, they must reveal how you could convince them; <b>on a 7-9</b>, they mark XP if they do what you want (but can refuse or make a counter-offer if they like).</p>',

    seekInsight: "<h3>Seek Insight</h3><p>When you <b><i>study a situation or person</i></b>, looking to the GM for insight, roll +WIS: <b>on a 10+</b>, ask the GM 3 questions from the list below; <b>on a 7-9</b>, ask 1; either way, gain advantage on your next move that acts on the answers.</p>",
}