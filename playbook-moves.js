const allMoves = {
    blessed: {
        amuletsAndTalismans: "<h3>Amulets & Talismans</h3><p>When you <b><i>craft a protective charm for someone</i></b>, spend 1 Stock and name a source of harm (fire, stabbing, etc.). When they <b><i>would suffer such harm while bearing your charm</i></b>, roll +INT: <b>on a 10+</b>, they ignore the harm entirely; <b>on a 7-9</b>, they suffer only half the damage or effect; <b>on a 6-</b>, they suffer the harm normally. One can benefit from only 1 charm at a time, and it loses its potency after 1 use.</p>",

        barkskin: "<h3>Barksin</h3><p>When you <b><i>are touching the ground</i></b>, you have 2 armor. When you <b><i>mark another with 1 Stock</i></b>, they gain this benefit so long as the mark remains.</p>",

        bigMagic: "<h3>Big Magic/h3><p>Each time you take this move, choose an additional remarkable trait for your sacred pouch and increase your max Stock by 2.</p>",

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

        wardsAndBindings: "<h3>Wards & Bindings</h3><p>When you <b><i>mark a boundary with sacred signs</i></b>, spend 1 Stock and describe who or what they affect (using no more words than your level). Also, choose whether the affected beings are repelled or trapped by the signs.</p><p>When <b><i>your wards or bindings are first tested</i></b>, roll +INT: <b>on 10+</b>, they will hold as long as the signs remain unmarred (and the affected creature can do nothing to affect them directly); <b>on a 7-9</b>, they hold for now but may be overcome through might or will.",

        wildSoul: "<h3>Wild Soul</h3><p>Each time you take this move, gain a Ranger move of your choice for which you qualify. You can’t pick Improved Stat or Superior Stat.</p>",

        naturesWrath: "<h3>Nature's Wrath</h3><p>Danu’s Grasp gains the area tag and can affect any creature. A mortal reduced to 0 HP is subdued or killed (your choice) rather than bound in stone.</p>",

        potentWorkings: "<h3>Potent Workings</h3><p>When you <b><i>craft a protective charm</i></b>, you may spend 1 additional Stock to choose 1:</p><ul><li>Name an additional type of harm</li><li>On a 10+, the charm retains its potency</li></ul>",

        sharedSouls: "<h3>Shared Souls</h3><p>When you <b><i>mark a beast with 1 Stock</i></b>, you can perceive the world through its senses no matter the distance between you. You can also guide its actions; treat it as a follower with Loyalty +1. Only one such beast can be affected at a time.</p>",

        suckThePoisonOut: "<h3>Suck the Poison Out</h3><p>When you <b><i>draw a malady from a patient’s body, mind, or soul</i></b>, spend 1 Stock and roll +WIS: <b>on a 10+</b>, you remove the malady and can safely discard it or store it in your sacred pouch (taking the space of 1 Stock) to study or inflict on another; <b>on a 7-9</b>, you remove it, but choose 1:</p><ul><li>Your patient suffers lingering harm or trauma</li><li>You suffer some of the malady’s effects</li><li>It will be harmful and dangerous to discard</li></ul>",

        superiorStat: "<h3>Superior Stat</h3><p>Increase one of your stats by +1 (to a max of +3).</p>",

        voiceOfTheEarthMother: "<h3>Voice of the Earth Mother</h3><p>When you <b><i>speak on behalf of Danu</i></b>, natural beasts and spirits of the wild respect your authority. All but the most headstrong will do as you command, even against their instincts.</p>"
    }
}