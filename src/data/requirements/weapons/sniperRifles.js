import requirements from '@/data/requirements/camouflages'

export default {
  'KATT-AMR': {
    // Multiplayer
    'Death 3D': requirements['Death 3D'],
    'Topo Boulder': requirements['Topo Boulder'],
    'Palette Neapolitan': requirements['Palette Neapolitan'],
    'Art Glass': requirements['Art Glass'],

    // Zombies
    'Ruination': requirements['Ruination'],
    'Topo Stone': requirements['Topo Stone'],
    'Palette Corpse': requirements['Palette Corpse'],
    'Dimensional Shift': requirements['Dimensional Shift'],

    'Gilded': {
      amount: 10,
      type: 'focused_kills',
    },

    'Forged': {
      amount: 15,
      type: 'penetration_kills',
    },

    'Priceless': {
      amount: 3,
      type: 'suppressed_headshots',
    },

    'Golden Enigma': {
      amount: 100,
      type: 'kills_and_successfully_extract_in_a_single_deployment',
    },

    'Zircon Scale': {
      amount: 300,
      type: 'pack_a_punched_kills',
    },

    'Serpentinite': {
      amount: 10,
      type: 'special_or_elite_zombie_kills',
    },
  },

  'Longbow': {
    // Multiplayer
    'Crimson Skulls': requirements['Crimson Skulls'],
    'Topo Arid': requirements['Topo Arid'],
    'Palette Sunrise': requirements['Palette Sunrise'],
    'Rippled': requirements['Rippled'],

    // Zombies
    'Calamity': requirements['Calamity'],
    'Topo Ash': requirements['Topo Ash'],
    'Palette Adjudicator': requirements['Palette Adjudicator'],
    'Puzzled': requirements['Puzzled'],

    'Gilded': {
      amount: 10,
      type: 'focused_kills',
    },

    'Forged': {
      amount: 25,
      type: 'kills_while_ads_and_fully_loaded',
    },

    'Priceless': {
      amount: 5,
      times: 3,
      type: 'kills_without_dying',
    },

    'Golden Enigma': {
      amount: 100,
      type: 'kills_and_successfully_extract_in_a_single_deployment',
    },

    'Zircon Scale': {
      amount: 300,
      type: 'pack_a_punched_kills',
    },

    'Serpentinite': {
      amount: 10,
      type: 'special_or_elite_zombie_kills',
    },
  },

  'KV Inhibitor': {
    // Multiplayer
    'Deathparency': requirements['Deathparency'],
    'Tactical Colors': requirements['Tactical Colors'],
    'Palette Dusk': requirements['Palette Dusk'],
    'Puzzling Tiles': requirements['Puzzling Tiles'],

    // Zombies
    'Incinerated': requirements['Incinerated'],
    'Spoiled Eggs': requirements['Spoiled Eggs'],
    'Palette Grove': requirements['Palette Grove'],
    'Strung Organs': requirements['Strung Organs'],

    'Gilded': {
      amount: 10,
      type: 'focused_kills',
    },

    'Forged': {
      amount: 25,
      type: 'headshot_kills',
    },

    'Priceless': {
      amount: 5,
      type: 'headshots_while_moving',
    },

    'Golden Enigma': {
      amount: 100,
      type: 'kills_and_successfully_extract_in_a_single_deployment',
    },

    'Zircon Scale': {
      amount: 300,
      type: 'pack_a_punched_kills',
    },

    'Serpentinite': {
      amount: 10,
      type: 'special_or_elite_zombie_kills',
    },
  },
}
