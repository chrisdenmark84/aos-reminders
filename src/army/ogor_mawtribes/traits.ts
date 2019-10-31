import { TTraits } from 'types/army'
import {
  START_OF_HERO_PHASE,
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  START_OF_SETUP,
  DURING_GAME,
  CHARGE_PHASE,
  HERO_PHASE,
  SHOOTING_PHASE,
  DURING_ROUND,
  MOVEMENT_PHASE,
  DURING_SETUP,
  START_OF_COMBAT_PHASE,
} from 'types/phases'

const CommandTraits: TTraits = [
  {
    name: `Furious Guzzler`,
    effects: [
      {
        name: `Furious Guzzler`,
        desc: `At the start of your hero phase, if this general is eating, you can heal up to D3 wounds allocated to them.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  {
    name: `Prodigious Girth`,
    effects: [
      {
        name: `Prodigious Girth`,
        desc: `Add 2 to this general's Wounds characteristic.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Killer Reputation`,
    effects: [
      {
        name: `Killer Reputation`,
        desc: `Before this general is set up for the first time, you can pick a second big name for them. Their second big name cannot be the same as their first big name.`,
        when: [START_OF_SETUP],
      },
    ],
  },
  {
    name: `Mighty Bellower`,
    effects: [
      {
        name: `Mighty Bellower`,
        desc: `If an enemy unit fails a battleshock test within 6 of this general, add D3 to the number of models that flee.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  {
    name: `An Eye for Loot`,
    effects: [
      {
        name: `An Eye for Loot`,
        desc: `You can re-roll hit and wound rolls for attacks made with melee weapons by this general that target an enemy HERO with an artefact of power.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Crushing Bulk`,
    effects: [
      {
        name: `Crushing Bulk`,
        desc: `This general is treated as a MONSTER for the purposes of the Trampling Charge battle trait.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  {
    name: `Questionable Hygiene`,
    effects: [
      {
        name: `Questionable Hygiene`,
        desc: `Subtract 1 from hit rolls for attacks made by enemy units while they are within 6" of this general.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Herald of the Gulping God`,
    effects: [
      {
        name: `Herald of the Gulping God`,
        desc: `Friendly units do not take battleshock tests while they are wholly within 15" of this general and this general is eating.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  {
    name: `Growling Stomach`,
    effects: [
      {
        name: `Growling Stomach`,
        desc: `Subtract 2 from the Bravery characteristic of enemy units while they are within 12" of this general and this general is hungry.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  {
    name: `Gastromancer`,
    effects: [
      {
        name: `Gastromancer`,
        desc: `This general knows all spells from the Lore of Gutmagic.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Rolls of Fat`,
    effects: [
      {
        name: `Rolls of Fat`,
        desc: `Add 2 to this general's Wounds characteristic.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Spell-eater`,
    effects: [
      {
        name: `Spell-eater`,
        desc: `Each time this general dispels an endless spell, you can heal any wounds allocated to them. If this general has no wounds allocated to them, you can instead add 1 to this general's Wounds characteristic until the end of the battle. In addition, each time this general dispels an endless spell, they can cast 1 additional spell in that phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Nomadic Raider`,
    effects: [
      {
        name: `Nomadic Raider`,
        desc: `You can re-roll wound rolls for attacks made with melee weapons by this general (including their mount) while this general is wholly within enemy territory.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Voice of the Avalanche`,
    effects: [
      {
        name: `Voice of the Avalanche`,
        desc: `Once per battle round, this general can use a command ability on their warscroll without spending 1 command point.`,
        when: [DURING_ROUND],
      },
    ],
  },
  {
    name: `Frostfell Aura`,
    effects: [
      {
        name: `Frostfell Aura`,
        desc: `Enemy units cannot retreat while they are within 3" of this general.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  {
    name: `Master of the Mournfangs`,
    effects: [
      {
        name: `Master of the Mournfangs`,
        desc: `Friendly MOURNFANG PACK units do not take battleshock tests while they are wholly within 18" of this general.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  {
    name: `Skilled Rider`,
    effects: [
      {
        name: `Skilled Rider`,
        desc: `Halve the number of wounds suffered by this general (rounding up) when determining which row on its damage table to use.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Touched by the Everwinter`,
    effects: [
      {
        name: `Touched by the Everwinter`,
        desc: `This general is a PRIEST. If this general is already a PRIEST, they know 1 additional Everwinter prayer.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Winter Ranger`,
    effects: [
      {
        name: `Winter Ranger`,
        desc: `At the start of each of your hero phases, if this general is in ambush, you gain D3 additional command points.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  {
    name: `Eye of the Blizzard`,
    effects: [
      {
        name: `Eye of the Blizzard`,
        desc: `Subtract 1 from hit rolls for attacks that target this general.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Blood Vulture's Gaze`,
    effects: [
      {
        name: `Blood Vulture's Gaze`,
        desc: `Add 1 to hit and wound rolls for attacks made with missile weapons by this general.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Frost Maw`,
    effects: [
      {
        name: `Frost Maw`,
        desc: `When you use this general's Icy Breath ability, you can pick D3 enemy units within 6" of this general instead of 1.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Raised by Yhetees`,
    effects: [
      {
        name: `Raised by Yhetees`,
        desc: `Add 1 to the Attacks characteristic of melee weapons used by friendly units of ICEFALL YHETEES while they are wholly within 12" of this general.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Skal Packmaster`,
    effects: [
      {
        name: `Skal Packmaster`,
        desc: `When you use this general's Masters Of Ambush ability, up to 2 units of FROST SABRES can join this general in ambush instead of 1.`,
        when: [DURING_SETUP],
      },
    ],
  },
  {
    name: `Fleet of Hoof (Mount)`,
    effects: [
      {
        name: `Fleet of Hoof`,
        desc: `You can re-roll one or both of the dice when making charge rolls for this model.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  {
    name: `Fleshgreed (Mount)`,
    effects: [
      {
        name: `Fleshgreed`,
        desc: `At the start of each hero phase, if this model is eating, you can heal 1 wound allocated to this model.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  {
    name: `Rimefrost Hide (Mount)`,
    effects: [
      {
        name: `Rimefrost Hide`,
        desc: `Worsen the Rend characteristic of melee weapons that target this model by 1 (to a minimum of '-').`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Gvarnak (Mount)`,
    effects: [
      {
        name: `Gvarnak`,
        desc: `Add 1 to this model's Wounds characteristic.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Matriarch (Mount)`,
    effects: [
      {
        name: `Matriarch`,
        desc: `Add 1 to charge rolls for friendly THUNDERTUSKS while they are wholly within 12" of this model.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  {
    name: `Alvagr Ancient (Mount)`,
    effects: [
      {
        name: `Alvagr Ancient`,
        desc: `If this model has not made a charge move in the same turn, enemy units that are within 3" of this model at the start of the combat phase fight at the end of that combat phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
]

export default CommandTraits