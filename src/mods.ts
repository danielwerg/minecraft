interface Mod {
  name: string;
  icon: string;
  abstract: string;
  description: string;
  note: string | null;
  categories: Category[] | null;
  loaders: Loader[];
  environments: Environment[];
  authors: string[];
  urls: ModUrl[];
}

type Category =
  | 'Decoration'
  | 'HUD'
  | 'Library'
  | 'Optimization'
  | 'Storage'
  | 'Technology'
  | 'Utility'
  | 'World Generation';

type Loader = 'Fabric' | 'Forge' | 'Quilt';

type Environment = 'Client' | 'Server';

interface ModUrl {
  name: string;
  url: string;
}

export const mods: Mod[] = [
  {
    name: 'Advanced Tooltips',
    icon: 'https://cdn.modrinth.com/data/hErQiboW/92d27e31158fffe3b621b9d551df030dd9f77c82.png',
    abstract:
      'More and better tooltips on items! Fabric port of the Inspecio mod.',
    description:
      'Advanced Tooltips adds new tooltips to items like shulker boxes, filled maps, fish buckets, armor, food, banner patterns, and more! The mod is also pretty configurable, most parts can be enabled/disabled to your heart\'s desire!',
    note: 'Conflicts with `AppleSkin` and `Hunger Preview` from `Vanilla Tweals`',
    categories: ['Decoration', 'Utility'],
    loaders: ['Fabric'],
    environments: ['Client'],
    authors: ['NebelNidas'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/advanced-tooltips' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/advanced-tooltips'
      },
      { name: 'GitHub', url: 'https://github.com/ReviversMC/advanced-tooltips' }
    ]
  },
  {
    name: 'AFKTape',
    icon: 'https://i.imgur.com/IxjP4iq.png',
    abstract: 'Get stuff done while AFK!',
    description: 'Simulates taping down keys while AFK',
    note: 'Default keybind: `K`. Lastest supported version 1.16 but could be easily updated, read CurseForge comments.',
    categories: ['Utility'],
    loaders: ['Fabric'],
    environments: ['Client'],
    authors: ['Kokeria'],
    urls: [
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/afktape'
      },
      { name: 'GitHub', url: 'https://github.com/jrddp/AFKTape' }
    ]
  },
  {
    name: 'AppleSkin',
    icon: 'https://cdn.modrinth.com/data/EsAfCjCV/icon.png',
    abstract: 'Food/hunger-related HUD improvements',
    description:
      'Adds food value information to tooltips. Adds a visualization of saturation and exhaustion to the HUD. Adds a visualization of potential hunger/saturation restored while holding food. Adds a visualization of potential health restored while holding food.',
    note: 'Best paired with `Hunger Preview` from `Vanilla Tweals`',
    categories: ['HUD', 'Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client', 'Server'],
    authors: ['squeek502'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/appleskin' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/appleskin'
      },
      { name: 'GitHub', url: 'https://github.com/squeek502/AppleSkin' }
    ]
  },
  {
    name: 'Carpet',
    icon: 'https://i.imgur.com/tRHQe6i.png',
    abstract: 'Cause all carpets are made of fabric?',
    description:
      'Carpet Mod is a mod for vanilla Minecraft that allows you to take full control of what matters from a technical perspective of the game.',
    note: 'See [Wiki](https://github.com/gnembon/fabric-carpet/wiki)',
    categories: ['Utility'],
    loaders: ['Fabric'],
    environments: ['Client'],
    authors: ['gnembon'],
    urls: [
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/carpet'
      },
      { name: 'GitHub', url: 'https://github.com/gnembon/fabric-carpet' }
    ]
  },
  {
    name: 'Carpet Sky Additions',
    icon: 'https://cdn.modrinth.com/data/3oX3JnAP/b61a36dcadef7fa1197ffa10443fc2b36018dd2f.jpeg',
    abstract:
      'Carpet extension providing empty world generation with new ways to obtain resources',
    description:
      'Carpet Sky Additions is a module for Carpet that provides infinite empty World Generation with Biomes and Structure Bounding Boxes kept in place. It also provides new vanilla-like ways to obtain resources that would otherwise be unobtainable.',
    note: 'Install datapack as well, enable cheats to enable/disable mod features',
    categories: ['World Generation'],
    loaders: ['Fabric'],
    environments: ['Server'],
    authors: ['jsorrell'],
    urls: [
      {
        name: 'Modrinth',
        url: 'https://modrinth.com/mod/carpet-sky-additions'
      },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/carpet-sky-additions'
      },
      { name: 'GitHub', url: 'https://github.com/jsorrell/CarpetSkyAdditions' }
    ]
  },
  {
    name: 'Clear Despawn',
    icon: 'https://cdn.modrinth.com/data/yoJJjRRE/icon.png',
    abstract: 'Make items blink when they\'re about to despawn',
    description:
      'Clear Despawn is a mod that makes dropped items flash when they\'re about to despawn. By default, this happens when the item has about 20 seconds left until despawn and the flashing gradually gets faster as the timer goes down.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['Giselbaer', 'strikerrocker'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/cleardespawn' },
      {
        name: 'CurseForge Fabric',
        url: 'https://www.curseforge.com/minecraft/mc-mods/clear-despawn-fabric'
      },
      {
        name: 'CurseForge Forge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/clear-despawn'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/StrikerRockers-Mods/ClearDespawn/'
      }
    ]
  },
  {
    name: 'ClickThrough',
    icon: 'https://cdn.modrinth.com/data/Z5b0cAlD/icon.png',
    abstract: 'Click through signs and item frames to chests',
    description:
      'This mod helps you access containers (chests, shulker boxes, barrels, but also hoppers, dispensers, ...) that are marked with a sign or item frame. Right-clicking a sign or item frame that\'s attached to a container will open the container instead.',
    note: 'Sneak to dye signs',
    categories: ['Utility'],
    loaders: ['Fabric'],
    environments: ['Client'],
    authors: ['Giselbaer'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/clickthrough' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/clickthrough'
      },
      { name: 'GitHub', url: 'https://github.com/gbl/ClickThrough' }
    ]
  },
  {
    name: 'Client Commands',
    icon: 'https://cdn.modrinth.com/data/7Coz83fv/icon.png',
    abstract: 'Adds useful client-side commands',
    description: 'Adds several useful client-side commands to Minecraft',
    note: 'See [Commands list](https://github.com/Earthcomputer/clientcommands/wiki/features#commands)',
    categories: ['Utility'],
    loaders: ['Fabric', 'Quilt'],
    environments: ['Client'],
    authors: ['Earthcomputer'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/client-commands' },
      { name: 'GitHub', url: 'https://github.com/Earthcomputer/clientcommands' }
    ]
  },
  {
    name: 'Dark Loading Screen',
    icon: 'https://cdn.modrinth.com/data/h3XWIuzM/icon.png',
    abstract: 'Makes the loading screen darker.',
    description: 'A simple Fabric mod to make the loading screen darker.',
    note: null,
    categories: ['Decoration', 'Utility'],
    loaders: ['Fabric', 'Quilt'],
    environments: ['Client'],
    authors: ['A5b84'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/dark-loading-screen' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/dark-loading-screen'
      },
      { name: 'GitHub', url: 'https://github.com/A5b84/dark-loading-screen' }
    ]
  },
  {
    name: 'Distant Horizons',
    icon: 'https://cdn.modrinth.com/data/uCdwusMi/icon.png',
    abstract: 'See farther without turning your game into a slide show',
    description:
      'Simply put, it add simplified terrain past Minecraft\'s default view distance to improve performance and allow for longer draw distances. Now you can finally enjoy that lookout tower you built on top of a mountain!',
    note: 'Might want to change chunk render distanse',
    categories: ['HUD', 'Optimization', 'Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: [
      'jeseibel',
      'Morippi',
      'coolGi',
      'Ran',
      'TomTheFurry',
      'cola98765'
    ],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/distanthorizons' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/distant-horizons'
      },
      { name: 'GitLab', url: 'https://gitlab.com/jeseibel/minecraft-lod-mod' }
    ]
  },
  {
    name: 'Enhanced Attack Indicator',
    icon: 'https://cdn.modrinth.com/data/eTy17BBS/icon.png',
    abstract: 'Uses the attack indicator for more than just melee attacks',
    description:
      'Enhanced Attack Indicator is a Fabric mod for Minecraft 1.16.x that shows the attack indicator progress on more actions. Added Actions:\n- Breaking blocks\n- Bows, crossbow, trident drawing\n- Eating foods\n- Items with a cooldown (shields, chorus fruit, enderpearls)',
    note: null,
    categories: ['Decoration', 'Utility'],
    loaders: ['Fabric'],
    environments: ['Client'],
    authors: ['Minenash'],
    urls: [
      {
        name: 'Modrinth',
        url: 'https://modrinth.com/mod/enhanced-attack-indicator'
      },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/enhanced-attack-indicator'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Minenash/Enhanced-Attack-Indicator'
      }
    ]
  },
  {
    name: 'Durability Viewer',
    icon: 'https://cdn.modrinth.com/data/LTM1f0yY/icon.png',
    abstract: 'Armor and Tool durability HUD',
    description:
      'Differences to other similar mods are:\n- Show item durability numbers in color (green/white/yellow/red) depending on items state\n- Items that are at almost 100% show damage, not durability. For example, your diamond pick that was used 5 times will show -5, not 1556. Great when you\'re using the mending enchantment to fix your stuff and don\'t know the exact number you want to reach\n- Also show number of empty inventory slots; know at a glance if you can continue mining or should return to your chest\n- Shows the amount of time for your buffs to run out so you don\'t have to press E to check whether that water breathing potion lasts for another minute (can be turned off in options)\n- Play a warning sound when your item is about to break; stop losing your Efficiency V pick to not looking at the GUI. The warning will play when your item is at less than 10% AND less than 100 - since 1.4, these values can be configured.\n- Set your window title to "<Username> on <Server>" so if you have more than one instance of MC open you can alt-tab to the one you\'re looking for easily. Can be turned off in options.',
    note: 'Replace tool breaking sound! Open the .jar file in a 7zip and replace the assets/durabilityviewer/sounds/tool_breaking.ogg file',
    categories: ['HUD', 'Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['Giselbaer'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/durabilityviewer' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/giselbaers-durability-viewer'
      },
      { name: 'GitHub', url: 'https://github.com/gbl/DurabilityViewer' }
    ]
  },
  {
    name: 'Grid',
    icon: 'https://cdn.modrinth.com/data/ebxDDOKt/icon.png',
    abstract: 'Overlay a grid over the world to help you build patterns',
    description:
      'Sometimes you want to place blocks in a regular pattern, so you need to count blocks, and if you mess up once, the error propagates to all subsequent blocks.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['Giselbaer'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/grid' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/grid'
      },
      { name: 'GitHub', url: 'https://github.com/gbl/Grid' }
    ]
  },
  {
    name: 'Inventory Control Tweaks',
    icon: 'https://cdn.modrinth.com/data/sPYwFCE0/icon.png',
    abstract:
      'Makes various tweaks to inventory controls including armor swapping and shift-clicking to offhand.',
    description:
      'This mod makes various changes to inventory controls to make them more convenient.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Quilt'],
    environments: ['Client'],
    authors: ['supersaiyansubtlety'],
    urls: [
      {
        name: 'Modrinth',
        url: 'https://modrinth.com/mod/inventory-control-tweaks'
      },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/inventory-control-tweaks'
      },
      {
        name: 'GitLab',
        url: 'https://gitlab.com/supersaiyansubtlety/inventory_control_tweaks'
      }
    ]
  },
  {
    name: 'Inventory Profiles Next',
    icon: 'https://cdn.modrinth.com/data/O7RBXm3n/icon.png',
    abstract:
      'Take control over you inventory. Sort. Move matching Items. Throw all. Locked slots. Gear sets! And much more.',
    description:
      'This mod will:\n- Help you keep your inventory sorted\n- Replace your quasi-broken tool\n- Dump everything in that chest with one click\n- Move the items you have that are also already in the chest\n- Lock item slots in place so that sorting ignores them\n- Keep locked slots empty\n- Allow you to press R+C to set your shortcuts',
    note: null,
    categories: ['Storage', 'Utility'],
    loaders: ['Fabric', 'Forge', 'Quilt'],
    environments: ['Client'],
    authors: ['blackd'],
    urls: [
      {
        name: 'Modrinth',
        url: 'https://modrinth.com/mod/inventory-profiles-next'
      },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/inventory-profiles-next'
      },
      { name: 'GitHub', url: 'https://github.com/blackd/Inventory-Profiles' }
    ]
  },
  {
    name: 'Iris Shaders',
    icon: 'https://cdn.modrinth.com/data/YL57xq9U/icon.webp',
    abstract:
      'A modern shaders mod for Minecraft intended to be compatible with existing OptiFine shader packs',
    description: 'Shaders, optifine alternative',
    note: null,
    categories: ['Decoration', 'Optimization'],
    loaders: ['Fabric', 'Quilt'],
    environments: ['Client'],
    authors: ['coderbot', 'IMS212'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/iris' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/irisshaders'
      },
      { name: 'GitHub', url: 'https://github.com/IrisShaders/Iris' }
    ]
  },
  {
    name: 'Item Scroller',
    icon: 'https://i.imgur.com/3LLrUsd.jpg',
    abstract: 'Move items by mouse wheel scrolling, Shift + dragging, etc.',
    description:
      'A client-side mod that adds several ways of moving items in inventory GUIs. This is done by scrolling the mouse wheel over item slots (optionally while holding some modifier keys) or by holding down modifier keys and then left- or right-click dragging over the slots.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['masady', 'CFGrafanaStats'],
    urls: [
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/item-scroller'
      },
      { name: 'GitHub', url: 'https://github.com/maruohon/itemscroller' }
    ]
  },
  {
    name: 'LambDynamicLights',
    icon: 'https://cdn.modrinth.com/data/yBW8D80W/icon.png',
    abstract: 'A dynamic lights mod for Fabric.',
    description:
      'This mod adds dynamic lights to Minecraft. Dynamic lights are lights created by an entity holding an item which makes light as a block, or created by an entity on fire, etc.',
    note: null,
    categories: ['Decoration', 'Utility'],
    loaders: ['Fabric', 'Quilt'],
    environments: ['Client'],
    authors: ['LambdAurora'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/lambdynamiclights' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/lambdynamiclights'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/LambdAurora/LambDynamicLights'
      }
    ]
  },
  {
    name: 'Light Overlay',
    icon: 'https://cdn.modrinth.com/data/YfOlc91N/icon.png',
    abstract:
      'A simple mod to provide users with NEI-like light level overlay.',
    description:
      'Press F7 to toggle the light overlay, configurable through Controls Settings.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['shedaniel'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/light-overlay' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/light-overlay'
      },
      { name: 'GitHub', url: 'https://github.com/shedaniel/LightOverlay' }
    ]
  },
  {
    name: 'Litematica',
    icon: 'https://i.imgur.com/iFtnVfd.jpg',
    abstract: 'A modern schematic mod',
    description:
      'Litematica is a new schematic mod written from scratch. It has all the features of the old Schematica mod except for the printer (which is also planned), plus a bunch more.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['masady', 'CFGrafanaStats'],
    urls: [
      {
        name: 'CurseForge Fabric',
        url: 'https://www.curseforge.com/minecraft/mc-mods/litematica'
      },
      {
        name: 'CurseForge Forge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/litematica-forge'
      },
      { name: 'GitHub', url: 'https://github.com/maruohon/litematica' }
    ]
  },
  {
    name: 'MiniHUD',
    icon: 'https://i.imgur.com/r1duNpF.png',
    abstract:
      'A "mini F3" HUD mod, with light level, spawn & slime chunk overlays etc.',
    description:
      'A client-side mod that allows displaying various "info lines" on the screen ("mini-F3"). The alignment (screen corner), background and text color and font size are configurable. Note: This is a client-side-only mod! You can\'t put it on a server.',
    note: null,
    categories: ['HUD', 'Utility'],
    loaders: ['Fabric'],
    environments: ['Client'],
    authors: ['masady', 'CFGrafanaStats'],
    urls: [
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/minihud'
      },
      { name: 'GitHub', url: 'https://github.com/maruohon/minihud' }
    ]
  },
  {
    name: 'Mod Menu',
    icon: 'https://cdn.modrinth.com/data/mOgUt4GM/icon.png',
    abstract: 'Adds a mod menu to view the list of mods you have installed.',
    description:
      'Hard to be more descriptive than that. It enriches the standard Minecraft menu with an interface displaying a one-dimensional array of modifications',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Quilt'],
    environments: ['Client'],
    authors: ['Prospector', 'jackassmc', 'NeusFear', 'modmuss50'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/modmenu' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/modmenu'
      },
      { name: 'GitHub', url: 'https://github.com/TerraformersMC/ModMenu' }
    ]
  },
  {
    name: 'Mouse Tweaks',
    icon: 'https://cdn.modrinth.com/data/aC3cM3Vq/icon.jpg',
    abstract:
      'Enhances inventory management by adding various functions to the mouse buttons.',
    description:
      'Mouse Tweaks replaces the standard RMB dragging mechanic, adds two new LMB dragging mechanics and an ability to quickly move items with the scroll wheel.',
    note: null,
    categories: ['Storage', 'Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['YaLTeR'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/mouse-tweaks' },
      { name: 'GitHub', url: 'https://github.com/YaLTeR/MouseTweaks' }
    ]
  },
  {
    name: 'No Telemetry',
    icon: 'https://cdn.modrinth.com//data/hg77g4Pw/icon.png',
    abstract: 'Disable the telemetry introduced in 21w38a',
    description:
      'Disables the usage data collection, aka telemetry, introduced in Minecraft 1.18 (snapshot 21w38a).',
    note: null,
    categories: null,
    loaders: ['Fabric', 'Forge', 'Quilt'],
    environments: ['Client'],
    authors: ['kb1000'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/no-telemetry' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/no-telemetry/'
      },
      { name: 'GitHub', url: 'https://github.com/kb-1000/no-telemetry' }
    ]
  },
  {
    name: 'Omega Mute',
    icon: 'https://cdn.modrinth.com/data/2ots5RF5/icon.png',
    abstract:
      'Ω The only mod you\'ll need to have full control over individual in-game sound.',
    description:
      'Omega Mute is a minimalistic client-side mod which allows you to mute/silence all Minecraft sounds while in-game or via a file',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['Serilum'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/omega-mute' },
      {
        name: 'CurseForge Fabric',
        url: 'https://www.curseforge.com/minecraft/mc-mods/omega-mute-fabric'
      },
      {
        name: 'CurseForge Forge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/omega-mute'
      },
      {
        name: 'GitHub Fabric',
        url: 'https://github.com/ricksouth/serilum-mc-mods/tree/master/sources-fabric/Omega%20Mute%20(Fabric)'
      },
      {
        name: 'GitHub Forge',
        url: 'https://github.com/ricksouth/serilum-mc-mods/tree/master/sources/Omega%20Mute'
      }
    ]
  },
  {
    name: 'PaperDoll',
    icon: 'https://cdn-raw.modrinth.com/data/edwFXb9k/icon.png',
    abstract: 'Get a customizable (bedrock like) preview of yourself',
    description:
      'Shows a Bedrock/PocketEdition like highly configurable PaperDoll.',
    note: null,
    categories: ['HUD'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['tr7zw'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/paperdoll' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/paperdoll'
      },
      { name: 'GitHub', url: 'https://github.com/tr7zw/PaperDoll' }
    ]
  },
  {
    name: 'Replay Mod',
    icon: 'https://cdn.modrinth.com/data/Nv2fQJo5/icon.png',
    abstract: 'A Minecraft Mod to record, relive and share your experience.',
    description:
      'It\'s easy to use, but an incredibly powerful tool. Create perfect Minecraft videos within minutes.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['Johni0702'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/replaymod' },
      { name: 'GitHub', url: 'https://github.com/ReplayMod/ReplayMod' }
    ]
  },
  {
    name: 'Roughly Enough Items',
    icon: 'https://cdn.modrinth.com/data/nfn13YXA/icon.png',
    abstract: 'Clean and Customizable. Alternative to Just Enough Items/JEI.',
    description: 'Roughly Enough Items is a mod to view Items and Recipes.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['shedaniel'],
    urls: [
      {
        name: 'Modrinth',
        url: 'https://modrinth.com/mod/roughly-enough-items'
      },
      {
        name: 'CurseForge',
        url: 'https://minecraft.curseforge.com/projects/roughly-enough-items'
      },
      { name: 'GitHub', url: 'https://github.com/shedaniel/RoughlyEnoughItems' }
    ]
  },
  {
    name: 'Silence!',
    icon: 'https://cdn.modrinth.com//data/1PmPJ4ss/icon.png',
    abstract: 'Silence Minecraft quickly without turning the PC speakers off',
    description:
      'You might need to silence Minecraft quickly without wanting to turn your PC speakers off, for example, when you\'re getting a Zoom call. This mod adds a keybind to do that: pressing the key (by default F12, can be configured in Options/Controls) will set the Master Volume (from Options/Music and Sounds) to 0, pressing the key again restores the original value.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric'],
    environments: ['Client'],
    authors: ['Giselbaer'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/silence' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/silence'
      },
      { name: 'GitHub', url: 'https://github.com/gbl/Silence' }
    ]
  },
  {
    name: 'Silence Mobs',
    icon: 'https://cdn.modrinth.com/data/rpmGvDKs/icon.png',
    abstract: '🙊 Silence or mute mobs and villager with The Silence Stick.',
    description:
      'Silence Mobs is a minimalistic mod that adds the functionality to silence a mob with The Silence Stick, which can be collected by transforming a stick via the /silencestick (or /st) command.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['Serilum'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/silence-mobs' },
      {
        name: 'CurseForge Fabric',
        url: 'https://www.curseforge.com/minecraft/mc-mods/silence-mobs-fabric'
      },
      {
        name: 'CurseForge Forge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/silence-mobs'
      },
      {
        name: 'GitHub Fabric',
        url: 'https://github.com/ricksouth/serilum-mc-mods/tree/master/sources-fabric/Silence%20Mobs%20(Fabric)'
      },
      {
        name: 'GitHub Forge',
        url: 'https://github.com/ricksouth/serilum-mc-mods/tree/master/sources/Silence%20Mobs'
      }
    ]
  },
  {
    name: 'Smooth Boot',
    icon: 'https://cdn.modrinth.com/data/FWumhS4T/icon.png',
    abstract: 'Improve Minecraft CPU scheduling',
    description:
      'Smooth Boot makes Minecraft load smoother and possibly faster by editing some parameters related to executors.',
    note: null,
    categories: ['Optimization'],
    loaders: ['Fabric', 'Quilt'],
    environments: ['Client'],
    authors: ['UltimateBoomer'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/smoothboot-fabric' },
      {
        name: 'CurseForge Fabric',
        url: 'https://www.curseforge.com/minecraft/mc-mods/smooth-boot'
      },
      {
        name: 'CurseForge Forge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/smooth-boot-forge'
      },
      { name: 'GitHub', url: 'https://github.com/UltimateBoomer/mc-smoothboot' }
    ]
  },
  {
    name: 'Sodium',
    icon: 'https://cdn.modrinth.com/data/AANobbMI/icon.png',
    abstract:
      'Modern rendering engine and client-side optimization mod for Minecraft',
    description:
      'Sodium is a free and open-source rendering optimization mod for Minecraft 1.16+ which greatly improves frame rates and stuttering while fixing many graphical issues. It boasts wide compatibility with the Fabric mod ecosystem when compared to other rendering-focused mods, and it does so without compromising on how the game looks, giving you that authentic block game feel.',
    note: null,
    categories: ['Optimization'],
    loaders: ['Fabric', 'Quilt'],
    environments: ['Client'],
    authors: ['jellysquid3', 'IMS212', 'burgerguy'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/sodium' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/sodium'
      },
      { name: 'GitHub', url: 'https://github.com/CaffeineMC/sodium-fabric' }
    ]
  },
  {
    name: 'Starlight',
    icon: 'https://cdn.modrinth.com/data/H8CaAYZC/icon.png',
    abstract:
      'Rewrites the light engine to fix lighting performance and lighting errors',
    description:
      'Fabric mod for rewriting the light engine to fix lighting performance and lighting errors.',
    note: null,
    categories: ['Optimization'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client', 'Server'],
    authors: ['spottedleaf'],
    urls: [
      { name: 'Modrinth Fabric', url: 'https://modrinth.com/mod/starlight' },
      {
        name: 'Modrinth Forge',
        url: 'https://modrinth.com/mod/starlight-forge'
      },
      {
        name: 'CurseForge Fabric',
        url: 'https://www.curseforge.com/minecraft/mc-mods/starlight'
      },
      {
        name: 'CurseForge Forge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/starlight-forge'
      },
      { name: 'GitHub', url: 'https://github.com/PaperMC/Starlight' }
    ]
  },
  {
    name: 'Suggestion Tweaker',
    icon: 'https://cdn.modrinth.com/data/MBLj38R0/icon.png',
    abstract:
      'Improves the way suggestions are filtered when writing a command',
    description:
      'This is a client and server mod which improves the way suggestions are filtered when writing a command.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client', 'Server'],
    authors: ['velizarbg'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/suggestion-tweaker' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/suggestion-tweaker'
      },
      { name: 'GitHub', url: 'https://github.com/VelizarBG/suggestion-tweaker' }
    ]
  },
  {
    name: 'ToroHealth Damage Indicators',
    icon: 'https://i.imgur.com/pE4OVkS.png',
    abstract: 'Shows health and damage received for mobs, NPCs, and players',
    description:
      'With ToroHealth Damage Indicators a health bar will appear in the top left corner for the entity in the player\'s crosshairs.',
    note: null,
    categories: ['HUD'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['ToroCraft'],
    urls: [
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/torohealth-damage-indicators'
      },
      { name: 'GitHub', url: 'https://github.com/ToroCraft/ToroHealth' }
    ]
  },
  {
    name: 'Tweakeroo',
    icon: 'https://i.imgur.com/3Mbc5xf.jpg',
    abstract:
      'Various client-side tweaks, such as hand restock, hotbar swap/cycle, flexible/fast block placement etc.',
    description:
      'Tweakeroo is a client-side mod, which adds a whole bunch of various different "tweaks" to the game.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric'],
    environments: ['Client'],
    authors: ['masady', 'CFGrafanaStats'],
    urls: [
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/tweakeroo'
      },
      { name: 'GitHub', url: 'https://github.com/maruohon/tweakeroo' }
    ]
  },
  {
    name: 'TweakerMore',
    icon: 'https://cdn.modrinth.com/data/GBeCx05I/icon.png',
    abstract:
      'A collection of client-side tweak kits to enhance your Minecraft game experience. Tweak Minecraft and beyond!',
    description:
      'A collection of client-side tweak kits for enhance your Minecraft game experience',
    note: 'Hand restoke for buckets',
    categories: ['Utility'],
    loaders: ['Fabric'],
    environments: ['Client'],
    authors: ['fallen-breath'],
    urls: [
      { name: 'Modrinth', url: 'https://modrinth.com/mod/tweakermore' },
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/tweakermore'
      },
      { name: 'GitHub', url: 'https://github.com/Fallen-Breath/tweakermore' }
    ]
  },
  {
    name: 'WorldEdit',
    icon: 'https://i.imgur.com/tu7WPwd.png',
    abstract:
      'In-game Minecraft map editor - build bigger things more quickly!',
    description:
      'A Minecraft Map Editor... that runs in-game! With selections, schematics, copy and paste, brushes, and scripting. Use it in creative, or use it temporarily in survival.',
    note: 'See [Docs](https://worldedit.enginehub.org/en/latest)',
    categories: ['Utility', 'World Generation'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client'],
    authors: ['sk89q', 'wizjany_', 'me4502', 'octylFractal'],
    urls: [
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/worldedit'
      },
      { name: 'GitHub', url: 'https://github.com/enginehub/WorldEdit' }
    ]
  },
  {
    name: 'Xaero\'s Minimap',
    icon: 'https://i.imgur.com/kVYzJ0S.png',
    abstract:
      'Displays the nearby world terrain, players, mobs, entities in the corner of your screen.',
    description:
      'Unlike many other minimap mods, Xaero\'s minimap keeps the aesthetic of vanilla Minecraft, which helps it be a more seamless addition to the game.',
    note: null,
    categories: ['HUD', 'Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client', 'Server'],
    authors: ['xaero96'],
    urls: [
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap'
      }
    ]
  },
  {
    name: 'Xaero\'s World Map',
    icon: 'https://i.imgur.com/kVYzJ0S.png',
    abstract:
      'Adds a fullscreen worldmap which shows you what you have explored in the world.',
    description:
      'Xaero\'s World Map mod adds a self-writing fullscreen map to your Minecraft client.',
    note: null,
    categories: ['Utility'],
    loaders: ['Fabric', 'Forge'],
    environments: ['Client', 'Server'],
    authors: ['xaero96'],
    urls: [
      {
        name: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map'
      }
    ]
  }
];
