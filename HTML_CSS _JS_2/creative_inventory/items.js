const MINECRAFT_ITEMS_GROUPS = {

    "construction": [
        "stone", "grass_block", "dirt", "cobblestone", "oak_planks", "spruce_planks", "eucalyptus_planks", "jungle_planks", "bedrock",
        "sand", "gravel", "gold_ore", "iron_ore", "coal_ore", "oak_log", "spruce_log", "eucalyptus_log", "jungle_log",
        "sponge", "glass", "lapis_ore", "lapis_block", "sandstone", "chiseled_sandstone", "smooth_sandstone", "white_wool", "orange_wool",
        "magenta_wool", "light_blue_wool", "yellow_wool", "lime_wool", "pink_wool", "gray_wool", "light_gray_wool", "cyan_wool", "purple_wool",
        "blue_wool", "brown_wool", "green_wool", "red_wool", "black_wool", "gold_block", "iron_block", "stone_slab", "sandstone_slab",
        "cobblestone_slab", "brick_slab", "stone_brick_slab", "nether_brick_slab", "quartz_slab", "brick_block", "bookshelf", "mossy_cobblestone", "obsidian",
        "oak_stairs", "diamond_ore", "diamond_block", "stone_stairs", "redstone_ore",  "ice", "snow_block", "clay_block","pumpkin",
        "netherrack", "soulsand", "glowstone", "halloween_pumpkin", "stone_brick", "mossy_stone_brick", "cracked_stone_brick", "chiseled_stone_brick", "melon_block",
        "brick_stairs", "stone_brick_stairs", "mycelium", "nether_bricks", "nether_brick_stairs", "end_stone", "oak_slab", "spruce_slab", "eucalyptus_slab",
        "jungle_slab", "sandstone_stairs", "emerald_ore", "emerald_block", "spruce_stairs", "eucalyptus_stairs", "jungle_stairs", "cobblestone_wall", "mossy_cobblestone_wall",
        "quartz_ore", "quartz_block", "chiseled_quartz_block", "quartz_pilar", "quartz_stairs"
    ],


    "decorative": [
        "oak_sapling", "spruce_sapling", "eucalyptus_sapling", "jungle_sapling", "oak_leaves", "spruce_leaves", "eucalyptus_leaves", "jungle_leaves", "web",
        "grass", "fern", "dead_bush", "flower", "rose", "brown_mushroom", "red_mushroom", "torch", "chest",
        "crafting_table", "furnace", "stairs", "snow", "cactus", "jukebox", "fence", "infestes_stone", "infestes_cobblestone",
        "infestes_stone_brick", "iron_bars", "glass_plate", "vine", "lily_pad", "nether_fence", "enchant_table", "end_portal_frame", "ender_chest",
        "anvil", "chipped_anvil", "damaged_anvil", "trapped_chest", "painting", "sign", "bed", "item_frame", "flower_pot",
        "skeleton_head", "whiter_skeleton_head", "zombie_head", "steve_head", "creeper_head"
    ],


    "redstone": [
        "ejector", "note_block", "sticky_piston", "piston", "tnt", "lever", "stone_pressure_plate", "oak_pressure_plate", "redstone_torch",
        "stone_button", "trapdoor", "fence_gate", "redstone_lamp", "tripwire_hook", "oak_button", "light_weighted_pressure_plate", "heavy_weighted_pressure_plate", "daylight_detector",
        "redstone_block", "hopper", "dropper", "door", "iron_door", "redstone", "repeater", "comparator"
    ],


    "transport": [
        "powered_rail", "detector_rail", "rail", "activator_rail", "minecart", "saddle", "boat", "chest_minecart", "furnace_minecart",
        "carrot_on_a_stick", "tnt_minecart", "furnace_minecart"
    ],


    "miscellany": [
        "beacom", "bucket", "water_bucket", "lava_bucket", "snow_ball", "milk_bucket", "paper", "book", "slime_ball",
        "bone", "ender_pearl", "ender_eye", "creeper_spawn_egg", "skeleton_spawn_egg", "spider_spawn_egg", "zombie_pigman_spawn_egg", "slime_spawn_egg", "ghast_spawn_egg",
        "zombie_pigman_spawn_egg", "enderman_spawn_egg", "cave_spider_spawn_egg", "silverfish_egg", "blaze_egg", "magma_cube_egg", "bat_egg", "witch_egg", "pig_egg",
        "sheep_egg", "cow_egg", "chicken_egg", "squid_egg", "wolf_egg", "mushroom_egg", "ocelot_egg", "villager_egg", "experience_bottle",
        "fire_ball", "feather_and_book", "map", "firework_star", "music_disc_13", "music_disc_cat", "music_disc_blocks", "music_disc_chirp", "music_disc_far",
        "music_disc_mall", "music_disc_mellohi", "music_disc_stal", "music_disc_strad", "music_disc_ward", "music_disc_11", "music_disc_wait"
    ],


    "all": [
        "stone", "grass_block", "dirt", "cobblestone", "oak_planks", "spruce_planks", "eucalyptus_planks", "jungle_planks", "oak_sapling",
        "spruce_sapling", "eucalyptus_sapling", "jungle_sapling", "bedrock", "sand", "gravel", "gold_ore", "iron_ore", "coal_ore", 
        "oak_log", "spruce_log", "eucalyptus_log", "jungle_log", "oak_leaves", "spruce_leaves", "eucalyptus_leaves", "jungle_leaves", "sponge", 
        "glass", "lapis_ore", "lapis_block", "ejector", "sandstone", "chiseled_sandstone", "smooth_sandstone", "note_block", "powered_rail", 
        "detector_rail", "sticky_piston", "web", "grass", "fern", "dead_bush", "piston", "white_wool", "orange_wool", 
        "magenta_wool", "light_blue_wool", "yellow_wool", "lime_wool", "pink_wool", "gray_wool", "light_gray_wool", "cyan_wool", "purple_wool", 
        "blue_wool", "brown_wool", "green_wool", "red_wool", "black_wool", "flower", "rose", "brown_mushroom", "red_mushroom", 
        "gold_block", "iron_block", "stone_slab", "sandstone_slab", "cobblestone_slab", "brick_slab", "stone_brick_slab", "nether_brick_slab", "quartz_slab", 
        "brick_block", "tnt", "bookshelf", "mossy_cobblestone", "obsidian", "torch", "oak_stairs", "chest", "diamond_ore", 
        "diamond_block", "crafting_table", "furnace", "stairs", "rail", "stone_stairs", "lever", "stone_pressure_plate", "oak_pressure_plate", 
        "redstone_ore", "redstone_torch", "stone_button", "snow", "ice", "snow_block", "cactus", "clay_block", "jukebox", 
        "fence", "pumpkin", "netherrack", "soulsand", "glowstone", "halloween_pumpkin", "trapdoor", "infestes_stone", "infestes_cobblestone", 
        "infestes_stone_brick", "stone_brick", "mossy_stone_brick", "cracked_stone_brick", "chiseled_stone_brick", "iron_bars", "glass_plate", "melon_block", "vine", 
        "fence_gate", "brick_stairs", "stone_brick_stairs", "mycelium", "lily_pad", "nether_bricks", "nether_fence", "nether_brick_stairs", "enchant_table",
        "end_portal_frame", "end_stone", "redstone_lamp", "oak_slab", "spruce_slab", "eucalyptus_slab", "jungle_slab", "sandstone_stairs", "emerald_ore", 
        "ender_chest", "tripwire_hook", "emerald_block", "spruce_stairs", "eucalyptus_stairs", "jungle_stairs", "beacom", "cobblestone_wall", "mossy_cobblestone_wall", 
        "oak_button", "anvil", "chipped_anvil", "damaged_anvil", "trapped_chest", "light_weighted_pressure_plate", "heavy_weighted_pressure_plate", "daylight_detector", "redstone_block", 
        "quartz_ore", "hopper", "quartz_block", "chiseled_quartz_block", "quartz_pilar", "quartz_stairs", "activator_rail", "dropper", "iron_shovel", 
        "iron_picaxe", "iron_axe", "flint_and_steel", "apple", "bow", "arrow", "coal", "charcoal", "diamond", 
        "iron_ingot", "gold_ingot", "iron_sword", "wooden_sword", "wooden_shovel", "wooden_picaxe", "wooden_axe", "stone_sword", "stone_shovel", 
        "stone_picaxe", "stone_axe", "diamond_sword", "diamond_shovel", "diamond_picaxe", "diamond_axe", "stick", "bowl", "mushroom_stew", 
        "golden_sword", "golden_shovel", "golden_picaxe", "golden_axe", "line", "feather", "gun_powder", "wooden_hoe", "stone_hoe", 
        "iron_hoe", "diamond_hoe", "golden_hoe", "seed", "wheat", "bread", "leather_helmet", "leather_chestplate", "leather_leggings", 
        "leather_boots", "chainmail_helmet", "chainmail_chestplate", "chainmail_leggings", "chainmail_boots", "iron_helmet", "iron_chestplate", "iron_leggings", "iron_boots", 
        "diamond_helmet", "diamond_chestplate", "diamond_leggings", "diamond_boots", "golden_helmet", "golden_chestplate", "golden_leggings", "golden_boots", "flint", 
        "porkchop", "cooked_porkchop", "painting", "golden_apple", "enchanted_golden_apple", "sign", "door", "bucket", "water_bucket", 
        "lava_bucket", "minecart", "saddle", "iron_door", "redstone", "snow_ball", "boat", "leather", "milk_bucket",
        "brick", "clay", "sugar_cane", "paper", "book", "slime_ball", "chest_minecart", "furnace_minecart", "egg", 
        "compass", "fishing_rod", "clock", "glowstone_dust", "fish", "cooked_fish", "ink_sac", "red_dye", "green_dye", 
        "cacau_seed", "lapis_lazuli", "purple_dye", "cyan_dye", "light_gray_dye", "gray_dye", "pink_dye", "lime_dye", "yellow_dye", 
        "light_blue_dye", "magenta_dye", "orange_dye", "bone_meal", "bone", "sugar", "cake", "bed", "repeater", 
        "cookie", "shears", "melon_slice", "pumpkin_seed", "melon_seed", "beef", "cooked_beef", "chicken", "cooked_chicken", 
        "rotten_flesh", "ender_pearl", "blaze_rod", "ghast_tear", "gold_nugget", "nether_wart", "water_bottle", "potion_regeneration045_1", "potion_regeneration022_2",
        "potion_regeneration200_1", "trowable_potion_regeneration033_1", "trowable_potion_regeneration016_2", "trowable_potion_regeneration130_1", "potion_agility300_1", "potion_agility130_2", "potion_agility800_1", "trowable_potion_agility215_1", "trowable_potion_agility107_2",
        "trowable_potion_agility600_1", "potion_fire_resistance300_1", "potion_fire_resistance800_1", "trowable_potion_fire_resistance215_1", "trowable_potion_fire_resistance600_1", "potion_posion_045_1", "potion_posion_022_2", "potion_posion_200_1", "trowable_potion_posion_033_1", 
        "trowable_potion_posion_016_2", "trowable_potion_posion_130_1", "potion_health_1", "potion_health_2", "trowable_potion_health_1", "trowable_potion_health_2", "potion_nightvision_300", "potion_nightvision_800", "trowable_potion_nightvision_215", 
        "trowable_potion_nightvision_600", "potion_weakness_130", "potion_weakness_400", "trowable_potion_weakness_107", "trowable_potion_weakness_300", "potion_strength_300_1", "potion_strength_130_2", "potion_strength_130_1", "trowable_potion_strength_215_1", 
        "trowable_potion_strength_107_2", "trowable_potion_strength_600_1", "potion_slowness_130", "potion_slowness_400", "trowable_potion_slowness_107", "trowable_potion_slowness_300", "potion_harming_1", "potion_harming_2", "trowable_potion_harming_1", 
        "trowable_potion_harming_2", "potion_invisibility_300", "potion_invisibility_800", "trowable_potion_invisibility_215", "trowable_potion_invisibility_600", "bottle", "spider_eye", "fermented_spider_eye", "balze_powder", 
        "magma_cream", "brewing_stand", "cauldron", "ender_eye", "glowing_melon", "creeper_spawn_egg", "skeleton_spawn_egg", "spider_spawn_egg", "zombie_spawn_egg", 
        "slime_spawn_egg", "ghast_spawn_egg", "zombie_pigman_spawn_egg", "enderman_spawn_egg", "cave_spider_spawn_egg", "silverfish_egg", "blaze_egg", "magma_cube_egg", "bat_egg",
        "witch_egg", "pig_egg", "sheep_egg", "cow_egg", "chicken_egg", "squid_egg", "wolf_egg", "mushroom_egg", "ocelot_egg", 
        "villager_egg", "experience_bottle", "fire_ball", "feather_and_book", "emerald", "item_frame", "flower_pot", "carrot", "potato", 
        "cooked_potato", "poisonous_potato", "map", "golden_carrot", "skeleton_head", "whiter_skeleton_head", "zombie_head", "steve_head", "creeper_head", 
        "carrot_on_a_stick", "nether_star", "pumpkin_pie", "firework_star", "comparator", "nether_brick", "quartz", "tnt_minecart", "hopper_minecart", 
        "music_disc_13", "music_disc_cat", "music_disc_blocks", "music_disc_chirp", "music_disc_far", "music_disc_mall", "music_disc_mellohi", "music_disc_stal", "music_disc_strad", 
        "music_disc_ward", "music_disc_11", "music_disc_wait", "enchanted_book_protection_1", "enchanted_book_protection_2", "enchanted_book_protection_3", "enchanted_book_protection_4", "enchanted_book_fire_protection_1", "enchanted_book_fire_protection_2", 
        "enchanted_book_fire_protection_3", "enchanted_book_fire_protection_4", "enchanted_book_feather_falling_1", "enchanted_book_feather_falling_2", "enchanted_book_feather_falling_3", "enchanted_book_feather_falling_4", "enchanted_book_blast_protection_1", "enchanted_book_blast_protection_2", "enchanted_book_blast_protection_3", 
        "enchanted_book_blast_protection_4", "enchanted_book_projectile_protection_1", "enchanted_book_projectile_protection_2", "enchanted_book_projectile_protection_3", "enchanted_book_projectile_protection_4", "enchanted_book_respiration_1", "enchanted_book_respiration_2", "enchanted_book_respiration_3", "enchanted_book_aqua_affinity_1", 
        "enchanted_book_thorns_1", "enchanted_book_thorns_2", "enchanted_book_thorns_3", "enchanted_book_sharpness_1", "enchanted_book_sharpness_2", "enchanted_book_sharpness_3", "enchanted_book_sharpness_4", "enchanted_book_sharpness_5", "enchanted_book_smite_1", 
        "enchanted_book_smite_2", "enchanted_book_smite_3", "enchanted_book_smite_4", "enchanted_book_smite_5", "enchanted_book_bane_of_arthropods_1", "enchanted_book_bane_of_arthropods_2", "enchanted_book_bane_of_arthropods_3", "enchanted_book_bane_of_arthropods_4", "enchanted_book_bane_of_arthropods_5", 
        "enchanted_book_knockback_1", "enchanted_book_knockback_2", "enchanted_book_fire_aspect_1", "enchanted_book_fire_aspect_2", "enchanted_book_looting_1", "enchanted_book_looting_2", "enchanted_book_looting_3", "enchanted_book_efficiency_1", "enchanted_book_efficiency_2", 
        "enchanted_book_efficiency_3", "enchanted_book_efficiency_4", "enchanted_book_efficiency_5", "enchanted_book_silk_touch_1", "enchanted_book_unbreakable_1", "enchanted_book_unbreakable_2", "enchanted_book_unbreakable_3", "enchanted_book_fortune_1", "enchanted_book_fortune_2", 
        "enchanted_book_fortune_3", "enchanted_book_power_1", "enchanted_book_power_2", "enchanted_book_power_3", "enchanted_book_power_4", "enchanted_book_power_5", "enchanted_book_punch_1", "enchanted_book_punch_2", "enchanted_book_flame_1", "enchanted_book_infinity_1"
    ],


    "food": [
        "apple", "mushroom_stew", "bread", "porkchop", "cooked_porkchop", "golden_apple", "enchanted_golden_apple", "fish", "cooked_fish",
        "cake", "cookie", "melon_slice", "beef", "cooked_beef", "chicken", "cooked_chicken", "rotten_flesh", "spider_eye",
        "carrot", "potato", "cooked_potato", "poisonous_potato", "golden_carrot", "pumpkin_pie"
    ],
    

    "tool": [
        "iron_shovel", "iron_picaxe", "iron_axe", "flint_and_steel", "wooden_shovel", "wooden_picaxe", "wooden_axe", "stone_shovel", "stone_picaxe",
        "stone_axe", "diamond_shovel", "diamond_picaxe", "diamond_axe", "golden_shovel", "golden_picaxe", "golden_axe", "wooden_hoe", "stone_hoe",
        "iron_hoe", "diamond_hoe", "golden_hoe", "compass", "fishing_rod", "clock", "shears", "enchanted_book_efficiency_5", "enchanted_book_silk_touch_1",
        "enchanted_book_unbreakable_3", "enchanted_book_fortune_3"
    ],
    

    "combat": [
        "bow", "arrow", "iron_sword", "wooden_sword", "stone_sword", "diamond_sword", "golden_sword", "leather_helmet", "leather_chestplate",
        "leather_leggings", "leather_boots", "chainmail_helmet", "chainmail_chestplate", "chainmail_leggings", "chainmail_boots", "iron_helmet", "iron_chestplate", "iron_leggings",
        "iron_boots", "diamond_helmet", "diamond_chestplate", "diamond_leggings", "diamond_boots", "golden_helmet", "golden_chestplate", "golden_leggings", "golden_boots",
        "enchanted_book_protection_4", "enchanted_book_fire_protection_4", "enchanted_book_feather_falling_4", "enchanted_book_blast_protection_4", "enchanted_book_projectile_protection_4", "enchanted_book_respiration_3", "enchanted_book_aqua_affinity_1", "enchanted_book_thorns_3", "enchanted_book_sharpness_5",
        "enchanted_book_smite_5", "enchanted_book_bane_of_arthropods_5", "enchanted_book_knockback_2", "enchanted_book_fire_aspect_2", "enchanted_book_looting_3", "enchanted_book_power_5", "enchanted_book_punch_2", "enchanted_book_flame_1", "enchanted_book_infinity_1"
    ],
    

    "potions": [
        "ghast_tear", "water_bottle", "potion_regeneration045_1", "potion_regeneration022_2", "potion_regeneration200_1", "trowable_potion_regeneration033_1", "trowable_potion_regeneration016_2", "trowable_potion_regeneration130_1", "potion_agility300_1",
        "potion_agility130_2", "potion_agility800_1", "trowable_potion_agility215_1", "trowable_potion_agility107_2", "trowable_potion_agility600_1", "potion_fire_resistance300_1", "potion_fire_resistance800_1", "trowable_potion_fire_resistance215_1", "trowable_potion_fire_resistance600_1",
        "potion_posion_045_1", "potion_posion_022_2", "potion_posion_200_1", "trowable_potion_posion_033_1", "trowable_potion_posion_016_2", "trowable_potion_posion_130_1", "potion_health_1", "potion_health_2", "trowable_potion_health_1",
        "trowable_potion_health_2", "potion_nightvision_300", "potion_nightvision_800", "trowable_potion_nightvision_215", "trowable_potion_nightvision_600", "potion_weakness_130", "potion_weakness_400", "trowable_potion_weakness_107", "trowable_potion_weakness_300",
        "potion_strength_300_1", "potion_strength_130_2", "potion_strength_130_1", "trowable_potion_strength_215_1", "trowable_potion_strength_107_2", "trowable_potion_strength_600_1", "potion_slowness_130", "potion_slowness_400", "trowable_potion_slowness_107",
        "trowable_potion_slowness_300", "potion_harming_1", "potion_harming_2", "trowable_potion_harming_1", "trowable_potion_harming_2", "potion_invisibility_300", "potion_invisibility_800", "trowable_potion_invisibility_215", "trowable_potion_invisibility_600",
        "bottle", "fermented_spider_eye", "balze_powder", "magma_cream", "brewing_stand", "cauldron", "glowing_melon"
    ],


    "materials": [
        "coal", "charcoal", "diamond", "iron_ingot", "gold_ingot", "stick", "bowl", "line", "feather",
        "gun_powder", "seed", "wheat", "flint", "leather", "brick", "clay", "sugar_cane", "egg",
        "glowstone_dust", "ink_sac", "red_dye", "green_dye", "cacau_seed", "lapis_lazuli", "purple_dye", "cyan_dye", "light_gray_dye",
        "gray_dye", "pink_dye", "lime_dye", "yellow_dye", "light_blue_dye", "magenta_dye", "orange_dye", "bone_meal", "sugar",
        "pumpkin_seed", "melon_seed", "blaze_rod", "gold_nugget", "nether_wart", "emerald", "nether_star", "nether_brick", "quartz"
    ]

};


// {
//     "name": "stone",
//     "label": "Pedra",
//     "pack": 64,
//     "icon": [23, 11],
//     "color": "blue",
//     "subTitle": {
//         "text": "batata",
//         "color": 'red'
//     }
// },



// {
//     "name": "nomeAqui",
//     "label": "LabelAqui",
//     "pack": 64,
//     "icon": [100, 100]
// },

// document.querySelector('.interface_active.search_mode');



const MINECRAFT_ARMOR = {

    "leather_helmet": "helmet",
    "chainmail_helmet": "helmet",
    "iron_helmet": "helmet",
    "golden_helmet": "helmet",
    "diamond_helmet": "helmet",
    
    "leather_chestplate": "chestplate",
    "chainmail_chestplate": "chestplate",
    "iron_chestplate": "chestplate",
    "golden_chestplate": "chestplate",
    "diamond_chestplate": "chestplate",

    "leather_leggings": "leggings",
    "chainmail_leggings": "leggings",
    "iron_leggings": "leggings",
    "golden_leggings": "leggings",
    "diamond_leggings": "leggings",

    "leather_boots": "boots",
    "chainmail_boots": "boots",
    "iron_boots": "boots",
    "golden_boots": "boots",
    "diamond_boots": "boots"

};







const MINECRAFT_ITEMS = [
    // 1
    {
        "name": "stone",
        "label": "Pedra",
        "pack": 64,
        "icon": [23, 11],
    },
    {
        "name": "grass_block",
        "label": "Bloco de Grama",
        "pack": 64,
        "icon": [20, 30]
    },
    {
        "name": "dirt",
        "label": "Terra",
        "pack": 64,
        "icon": [18, 30]
    },
    {
        "name": "cobblestone",
        "label": "Pedregulho",
        "pack": 64,
        "icon": [30, 104]
    },
    {
        "name": "oak_planks",
        "label": "Tábuas de Carvalho",
        "pack": 64,
        "icon": [6, 28]
    },
    {
        "name": "spruce_planks",
        "label": "Tábuas de Pinheiro",
        "pack": 64,
        "icon": [16, 27]
    },
    {
        "name": "eucalyptus_planks",
        "label": "Tábuas de Eucalipto",
        "pack": 64,
        "icon": [26, 26]
    },
    {
        "name": "jungle_planks",
        "label": "Tábuas de Madeira da Selva",
        "pack": 64,
        "icon": [31, 27]
    },
    {
        "name": "oak_sapling",
        "label": "Muda de Carvalho",
        "pack": 64,
        "icon": [6, 107]
    },
    // 2
    {
        "name": "spruce_sapling",
        "label": "Muda de Pinheiro",
        "pack": 64,
        "icon": [19, 107]
    },
    {
        "name": "eucalyptus_sapling",
        "label": "Muda de Eucalipto",
        "pack": 64,
        "icon": [13, 106]
    },
    {
        "name": "jungle_sapling",
        "label": "Muda de Árvore da Selva",
        "pack": 64,
        "icon": [30, 106]
    },
    {
        "name": "bedrock",
        "label": "Rocha Matriz",
        "pack": 64,
        "icon": [10, 30]
    },
    {
        "name": "sand",
        "label": "Areia",
        "pack": 64,
        "icon": [15, 105]
    },
    {
        "name": "gravel",
        "label": "Cascalho",
        "pack": 64,
        "icon": [4, 105]
    },
    {
        "name": "gold_ore",
        "label": "Minério de Ouro",
        "pack": 64,
        "icon": [1, 106]
    },
    {
        "name": "iron_ore",
        "label": "Minério de Ferro",
        "pack": 64,
        "icon": [2, 106]
    },
    {
        "name": "coal_ore",
        "label": "Minério de Carvão",
        "pack": 64,
        "icon": [30, 105]
    },
    // 3 
    {
        "name": "oak_log",
        "label": "Madeira de Carvalho",
        "pack": 64,
        "icon": [5, 107]
    },
    {
        "name": "spruce_log",
        "label": "Madeira de Pinheiro",
        "pack": 64,
        "icon": [18, 107]
    },
    {
        "name": "eucalyptus_log",
        "label": "Madeira de Eucalipto",
        "pack": 64,
        "icon": [12, 106]
    },
    {
        "name": "jungle_log",
        "label": "Madeira de Selva",
        "pack": 64,
        "icon": [29, 106]
    },
    {
        "name": "oak_leaves",
        "label": "Folhas de Carvalho",
        "pack": 64,
        "icon": [4, 107]
    },
    {
        "name": "spruce_leaves",
        "label": "Folhas de Pinheiro",
        "pack": 64,
        "icon": [17, 107]
    },
    {
        "name": "eucalyptus_leaves",
        "label": "Folhas de Eucalipto",
        "pack": 64,
        "icon": [11, 106]
    },
    {
        "name": "jungle_leaves",
        "label": "Folhas de Selva",
        "pack": 64,
        "icon": [28, 106]
    },
    {
        "name": "sponge",
        "label": "Esponja",
        "pack": 64,
        "icon": [28, 112]
    },
    // 4
    {
        "name": "glass",
        "label": "Vidro",
        "pack": 64,
        "icon": [30, 101]
    },
    {
        "name": "lapis_ore",
        "label": "Minério de Lápiz-Lazúli",
        "pack": 64,
        "icon": [3, 106]
    },
    {
        "name": "lapis_block",
        "label": "Bloco de Lápiz-Lazúli",
        "pack": 64,
        "icon": [8, 102]
    },
    {
        "name": "ejector",
        "label": "Ejetor",
        "pack": 64,
        "icon": [18, 112]
    },
    {
        "name": "sandstone",
        "label": "Arenito",
        "pack": 64,
        "icon": [16, 105]
    },
    {
        "name": "chiseled_sandstone",
        "label": "Arenito Talhado",
        "pack": 64,
        "icon": [12, 101]
    },
    {
        "name": "smooth_sandstone",
        "label": "Arenito Liso",
        "pack": 64,
        "icon": [17, 101]
    },
    {
        "name": "note_block",
        "label": "Bloco de Notal Musical",
        "pack": 64,
        "icon": [26, 112]
    },
    {
        "name": "powered_rail",
        "label": "Trilho Eletrico",
        "pack": 64,
        "icon": [14, 104]
    },
    // 5
    {
        "name": "detector_rail",
        "label": "Trilho Detetor",
        "pack": 64,
        "icon": [5, 104]
    },
    {
        "name": "sticky_piston",
        "label": "Pistão Grudento",
        "pack": 64,
        "icon": [22, 104]
    },
    {
        "name": "web",
        "label": "Teia",
        "pack": 64,
        "icon": [31, 104]
    },
    {
        "name": "grass",
        "label": "Grama",
        "pack": 64,
        "icon": [27, 106]
    },
    {
        "name": "fern",
        "label": "Samambaia",
        "pack": 64,
        "icon": [26, 106]
    },
    {
        "name": "dead_bush",
        "label": "Arbusto Morto",
        "pack": 64,
        "icon": [25, 106]
    },
    {
        "name": "piston",
        "label": "Pistão",
        "pack": 64,
        "icon": [13, 104]
    },
     
    {
        "name": "white_wool",
        "label": "Lã",
        "pack": 64,
        "icon": [0, 48]
    },
    {
        "name": "orange_wool",
        "label": "Lã Laranja",
        "pack": 64,
        "icon": [28, 47]
    },
    // 6
    {
        "name": "magenta_wool",
        "label": "Lã Magenta",
        "pack": 64,
        "icon": [27, 47]
    },
    {
        "name": "light_blue_wool",
        "label": "Lã Azul Claro",
        "pack": 64,
        "icon": [24, 47]
    },
    {
        "name": "yellow_wool",
        "label": "Lã Amarela",
        "pack": 64,
        "icon": [1, 48]
    },
    {
        "name": "lime_wool",
        "label": "Lã Verde Limão",
        "pack": 64,
        "icon": [26, 47]
    },
    {
        "name": "pink_wool",
        "label": "Lã Rosa",
        "pack": 64,
        "icon": [29, 47]
    },
    {
        "name": "gray_wool",
        "label": "Lã Cinza",
        "pack": 64,
        "icon": [22, 47]
    },
    {
        "name": "light_gray_wool",
        "label": "Lã Cinza Claro",
        "pack": 64,
        "icon": [25, 47]
    },
    {
        "name": "cyan_wool",
        "label": "Lã Ciano",
        "pack": 64,
        "icon": [21, 47]
    },
    {
        "name": "purple_wool",
        "label": "Lã Lilás",
        "pack": 64,
        "icon": [30, 47]
    },
    // 7
    {
        "name": "blue_wool",
        "label": "Lã Azul",
        "pack": 64,
        "icon": [19, 47]
    },
    {
        "name": "brown_wool",
        "label": "Lã Marrom",
        "pack": 64,
        "icon": [20, 47]
    },
    {
        "name": "green_wool",
        "label": "Lã Verde",
        "pack": 64,
        "icon": [23, 47]
    },
    {
        "name": "red_wool",
        "label": "Lã Vermelha",
        "pack": 64,
        "icon": [31, 47]
    },
    {
        "name": "black_wool",
        "label": "Lã Preta",
        "pack": 64,
        "icon": [18, 47]
    },
    {
        "name": "flower",
        "label": "Flor",
        "pack": 64,
        "icon": [21, 106]
    },
    {
        "name": "rose",
        "label": "Rosa",
        "pack": 64,
        "icon": [11, 107]
    },
    {
        "name": "brown_mushroom",
        "label": "Cogumelo",
        "pack": 64,
        "icon": [16, 106]
    },
    {
        "name": "red_mushroom",
        "label": "Cogumelo",
        "pack": 64,
        "icon": [14, 107]
    },
    // 8
    {
        "name": "gold_block",
        "label": "Bloco de Ouro",
        "pack": 64,
        "icon": [4, 101]
    },
    {
        "name": "iron_block",
        "label": "Bloco de Ferro",
        "pack": 64,
        "icon": [5, 101]
    },
    {
        "name": "stone_slab",
        "label": "Laje de Pedra",
        "pack": 64,
        "icon": [23, 102]
    },
    {
        "name": "sandstone_slab",
        "label": "Laje de Arenito",
        "pack": 64,
        "icon": [14, 103]
    },
    {
        "name": "cobblestone_slab",
        "label": "Laje de Pedregulho",
        "pack": 64,
        "icon": [13, 101]
    },
    {
        "name": "brick_slab",
        "label": "Laje de Tijolos",
        "pack": 64,
        "icon": [8, 101]
    },
    {
        "name": "stone_brick_slab",
        "label": "Laje de Tijolos de Pedra",
        "pack": 64,
        "icon": [12, 102]
    },
    {
        "name": "nether_brick_slab",
        "label": "Laje de Tijolos do Nether",
        "pack": 64,
        "icon": [15, 102]
    },
    {
        "name": "quartz_slab",
        "label": "Laje de Quartzo",
        "pack": 64,
        "icon": [30, 102]
    },
    // 9
    {
        "name": "brick_block",
        "label": "Tijolos",
        "pack": 64,
        "icon": [5, 27]
    },
    {
        "name": "tnt",
        "label": "Dinamite",
        "pack": 64,
        "icon": [30, 112]
    },
    {
        "name": "bookshelf",
        "label": "Estante",
        "pack": 64,
        "icon": [7, 101]
    },
    {
        "name": "mossy_cobblestone",
        "label": "Pedra com Musgo",
        "pack": 64,
        "icon": [25, 30]
    },
    {
        "name": "obsidian",
        "label": "Obsidiana",
        "pack": 64,
        "icon": [9, 105]
    },
    {
        "name": "torch",
        "label": "Tocha",
        "pack": 64,
        "icon": [29, 105]
    },
    {
        "name": "oak_stairs",
        "label": "Escadas de Carvalho",
        "pack": 64,
        "icon": [20, 70]
    },
    {
        "name": "chest",
        "label": "Baú",
        "pack": 64,
        "icon": [31, 112]
    },
    {
        "name": "diamond_ore",
        "label": "Minério de Diamante",
        "pack": 64,
        "icon": [31, 105]
    },
    // 10
    {
        "name": "diamond_block",
        "label": "Bloco de Diamante",
        "pack": 64,
        "icon": [2, 101]
    },
    {
        "name": "crafting_table",
        "label": "Bancada de Trabalho",
        "pack": 64,
        "icon": [16, 112]
    },
    {
        "name": "furnace",
        "label": "Fornalha",
        "pack": 64,
        "icon": [22, 112]
    },
    {
        "name": "stairs",
        "label": "Escada",
        "pack": 64,
        "icon": [7, 102]
    },
    {
        "name": "rail",
        "label": "Trilho",
        "pack": 64,
        "icon": [15, 104]
    },
    {
        "name": "stone_stairs",
        "label": "Escada de Pedra",
        "pack": 64,
        "icon": [17, 70]
    },
    {
        "name": "lever",
        "label": "Alavanca",
        "pack": 64,
        "icon": [9, 104]
    },
    {
        "name": "stone_pressure_plate",
        "label": "Placa de Pressão",
        "pack": 64,
        "icon": [24, 104]
    },
    {
        "name": "oak_pressure_plate",
        "label": "Placa de Pressão",
        "pack": 64,
        "icon": [12, 104]
    },
    // 11
    {
        "name": "redstone_ore",
        "label": "Minério de Redstone",
        "pack": 64,
        "icon": [4, 106]
    },
    {
        "name": "redstone_torch",
        "label": "Tocha de Redstone",
        "pack": 64,
        "icon": [19, 104]
    },
    {
        "name": "stone_button",
        "label": "Botão",
        "pack": 64,
        "icon": [23, 104]
    },
    {
        "name": "snow",
        "label": "Neve",
        "pack": 64,
        "icon": [17, 105]
    },
    {
        "name": "ice",
        "label": "Gelo",
        "pack": 64,
        "icon": [10, 105]
    },
    {
        "name": "snow_block",
        "label": "Neve",
        "pack": 64,
        "icon": [18, 103]
    },
    {
        "name": "cactus",
        "label": "Cacto",
        "pack": 64,
        "icon": [17, 106]
    },
    {
        "name": "clay_block",
        "label": "Argila",
        "pack": 64,
        "icon": [29, 104]
    },
    {
        "name": "jukebox",
        "label": "Jukebox",
        "pack": 64,
        "icon": [24, 112]
    },
    // 12
    {
        "name": "fence",
        "label": "Cerca",
        "pack": 64,
        "icon": [19, 102]
    },
    {
        "name": "pumpkin",
        "label": "Ábobora",
        "pack": 64,
        "icon": [18, 106]
    },
    {
        "name": "netherrack",
        "label": "Rocha do Nether",
        "pack": 64,
        "icon": [26, 105]
    },
    {
        "name": "soulsand",
        "label": "Areia de Almas",
        "pack": 64,
        "icon": [27, 105]
    },
    {
        "name": "glowstone",
        "label": "Pedra Luminosa",
        "pack": 64,
        "icon": [21, 105]
    },
    {
        "name": "halloween_pumpkin",
        "label": "Ábobora de Halloween",
        "pack": 64,
        "icon": [1, 102]
    },
    {
        "name": "trapdoor",
        "label": "Alçapão",
        "pack": 64,
        "icon": [29, 29]
    },
    {
        "name": "infestes_stone",
        "label": "Ovo de Monstro de Pedra",
        "pack": 64,
        "icon": [23, 11]
    },
    {
        "name": "infestes_cobblestone",
        "label": "Ovo de Monstro de Pedregulho",
        "pack": 64,
        "icon": [30, 104]
    },
    // 13
    {
        "name": "infestes_stone_brick",
        "label": "Ovo de Monstro de Tijolos de Pedra",
        "pack": 64,
        "icon": [19, 105]
    },
    {
        "name": "stone_brick",
        "label": "Tijolos de Pedra",
        "pack": 64,
        "icon": [19, 105]
    },
    {
        "name": "mossy_stone_brick",
        "label": "Tijolos de Pedra com Musgo",
        "pack": 64,
        "icon": [7, 105]
    }, 
    {
        "name": "cracked_stone_brick",
        "label": "Tijolos de Pedra Rachados",
        "pack": 64,
        "icon": [0, 105]
    }, 
    {
        "name": "chiseled_stone_brick",
        "label": "Tijolos de Pedra Talhados",
        "pack": 64,
        "icon": [28, 104]
    },
    {
        "name": "iron_bars",
        "label": "Barras d Ferro",
        "pack": 64,
        "icon": [0, 102]
    },
    {
        "name": "glass_plate",
        "label": "Painel de Vidro",
        "pack": 64,
        "icon": [29, 101]
    },
    {
        "name": "melon_block",
        "label": "Melancia",
        "pack": 64,
        "icon": [2, 107]
    },
    {
        "name": "vine",
        "label": "Vinhas",
        "pack": 64,
        "icon": [23, 107]
    },
    // 14
    {
        "name": "fence_gate",
        "label": "Portão",
        "pack": 64,
        "icon": [18, 102]
    },
    {
        "name": "brick_stairs",
        "label": "Escadas de Tijolos",
        "pack": 64,
        "icon": [16, 70]
    },
    {
        "name": "stone_brick_stairs",
        "label": "Escadas de Tijolos de Pedra",
        "pack": 64,
        "icon": [23, 70]
    },
    {
        "name": "mycelium",
        "label": "Micélio",
        "pack": 64,
        "icon": [8, 105]
    },
    {
        "name": "lily_pad",
        "label": "Vitória-Régia",
        "pack": 64,
        "icon": [1, 107]
    },
    {
        "name": "nether_bricks",
        "label": "Tijolos do Nether",
        "pack": 64,
        "icon": [24, 105]
    },
    {
        "name": "nether_fence",
        "label": "Cerca de Tijolos do Nether",
        "pack": 64,
        "icon": [22, 105]
    },
    {
        "name": "nether_brick_stairs",
        "label": "Escadas de Tijolos do Nether",
        "pack": 64,
        "icon": [19, 70]
    },
    {
        "name": "enchant_table",
        "label": "Altar de Encantamentos",
        "pack": 64,
        "icon": [20, 112]
    },
    // 15
    {
        "name": "end_portal_frame",
        "label": "Portal do Fim",
        "pack": 64,
        "icon": [20, 99]
    },
    {
        "name": "end_stone",
        "label": "Pedra do Fim",
        "pack": 64,
        "icon": [22, 99]
    },
    {
        "name": "redstone_lamp",
        "label": "Lâmpada de Redstone",
        "pack": 64,
        "icon": [17, 104]
    },
    {
        "name": "oak_slab",
        "label": "Laje de Carvalho",
        "pack": 64,
        "icon": [20, 102]
    },
    {
        "name": "spruce_slab",
        "label": "Laje de Pinheiro",
        "pack": 64,
        "icon": [20, 101]
    },
    {
        "name": "eucalyptus_slab",
        "label": "Laje de Eucalipto",
        "pack": 64,
        "icon": [30, 100]
    },
    {
        "name": "jungle_slab",
        "label": "Laje de Madeira da Selva",
        "pack": 64,
        "icon": [21, 103]
    },
    {
        "name": "sandstone_stairs",
        "label": "Escada de Arenito",
        "pack": 64,
        "icon": [21, 70]
    },
    {
        "name": "emerald_ore",
        "label": "Minério de Esmeralda",
        "pack": 64,
        "icon": [0, 106]
    },
    // 16
    {
        "name": "ender_chest",
        "label": "Baú do Fim",
        "pack": 64,
        "icon": [21, 112]
    },
    {
        "name": "tripwire_hook",
        "label": "Gancho de Armadilha",
        "pack": 64,
        "icon": [25, 104]
    },
    {
        "name": "emerald_block",
        "label": "Bloco de Esmeralda",
        "pack": 64,
        "icon": [3, 101]
    },
    {
        "name": "spruce_stairs",
        "label": "Escada de Pinheiro",
        "pack": 64,
        "icon": [22, 70]
    },
    {
        "name": "eucalyptus_stairs",
        "label": "Escada de Eucalipto",
        "pack": 64,
        "icon": [15, 70]
    },
    {
        "name": "jungle_stairs",
        "label": "Escada de Madeira da Selva",
        "pack": 64,
        "icon": [18, 70]
    },
    {
        "name": "beacom",
        "label": "Sinalizador",
        "pack": 64,
        "icon": [11, 112]
    },
    {
        "name": "cobblestone_wall",
        "label": "Parede de Pedregulho",
        "pack": 64,
        "icon": [15, 101]
    },
    {
        "name": "mossy_cobblestone_wall",
        "label": "Parede de Pedregulho Musgoso",
        "pack": 64,
        "icon": [11, 102]
    },
    // 17
    {
        "name": "oak_button",
        "label": "Botão",
        "pack": 64,
        "icon": [11, 104]
    },
    {
        "name": "anvil",
        "label": "Bigorna",
        "pack": 64,
        "icon": [9, 112]
    },
    {
        "name": "chipped_anvil",
        "label": "Bigorna Ligeiramente Danificada",
        "pack": 64,
        "icon": [15, 112]
    },
    {
        "name": "damaged_anvil",
        "label": "Bigorna Muito Danificada",
        "pack": 64,
        "icon": [17, 112]
    },
    {
        "name": "trapped_chest",
        "label": "Baú com Armadilha",
        "pack": 64,
        "icon": [31, 112]
    },
    {
        "name": "light_weighted_pressure_plate",
        "label": "Placa de Pressão de Passagem (Leve)",
        "pack": 64,
        "icon": [3, 65]
    },
    {
        "name": "heavy_weighted_pressure_plate",
        "label": "Placa de Pressão de Passagem (Pesada)",
        "pack": 64,
        "icon": [26, 64]
    },
    {
        "name": "daylight_detector",
        "label": "Sensor de Luz Solar",
        "pack": 64,
        "icon": [25, 38]
    },
    {
        "name": "redstone_block",
        "label": "Bloco de Redstone",
        "pack": 64,
        "icon": [2, 104]
    },
    // 18
    {
        "name": "quartz_ore",
        "label": "Minério de Quartzo",
        "pack": 64,
        "icon": [25, 105]
    },
    {
        "name": "hopper",
        "label": "Funil",
        "pack": 64,
        "icon": [23, 112]
    },
    {
        "name": "quartz_block",
        "label": "Bloco de Quartzo",
        "pack": 64,
        "icon": [2, 27]
    },
    {
        "name": "chiseled_quartz_block",
        "label": "Bloco de Quartzo Talhado",
        "pack": 64,
        "icon": [7, 27]
    },
    {
        "name": "quartz_pilar",
        "label": "Pilar de Quartzo",
        "pack": 64,
        "icon": [9, 28]
    },
    {
        "name": "quartz_stairs",
        "label": "Escada de Quartzo",
        "pack": 64,
        "icon": [10, 103]
    },
    {
        "name": "activator_rail",
        "label": "Trilho Ativador",
        "pack": 64,
        "icon": [31, 103]
    },
    {
        "name": "dropper",
        "label": "Lançador",
        "pack": 64,
        "icon": [19, 112]
    },
    {
        "name": "iron_shovel",
        "label": "Pá de Ferro",
        "icon": [24, 111]
    },
    // 19
    {
        "name": "iron_picaxe",
        "label": "Picareta de Ferro", 
        "icon": [23, 111]
    },
    {
        "name": "iron_axe",
        "label": "Machado de Ferro", 
        "icon": [23, 111]
    },
    {
        "name": "flint_and_steel",
        "label": "Isqueiro", 
        "icon": [15, 111]
    },
    {
        "name": "apple",
        "label": "Maçã",
        "pack": 64,
        "icon": [17, 63]
    },
    {
        "name": "bow",
        "label": "Arco",
        "icon": [31, 39]
    },
    {
        "name": "arrow",
        "label": "Flecha",
        "pack": 64,
        "icon": [18, 39]
    },
    {
        "name": "coal",
        "label": "Carvão",
        "pack": 64,
        "icon": [30, 34]
    },
    {
        "name": "charcoal",
        "label": "Carvão Vegetal",
        "pack": 64,
        "icon": [30, 34]
    },
    {
        "name": "diamond",
        "label": "Diamante",
        "pack": 64,
        "icon": [19, 109]
    },
    // 20
    {
        "name": "iron_ingot",
        "label": "Barra de Ferro",
        "pack": 64,
        "icon": [28, 109]
    },
    {
        "name": "gold_ingot",
        "label": "Barra de Ouro",
        "pack": 64,
        "icon": [25, 109]
    },
    {
        "name": "iron_sword",
        "label": "Espada de Ferro", 
        "icon": [20, 113]
    },
    {
        "name": "wooden_sword",
        "label": "Espada de Madeira", 
        "icon": [25, 113]
    },
    {
        "name": "wooden_shovel",
        "label": "Pá de Madeira", 
        "icon": [6, 112]
    },
    {
        "name": "wooden_picaxe",
        "label": "Picareta de Madeira", 
        "icon": [5, 112]
    },
    {
        "name": "wooden_axe",
        "label": "Machado de Madeira", 
        "icon": [3, 112]
    },
    {
        "name": "stone_sword",
        "label": "Espada de Pedra", 
        "icon": [23, 113]
    },
    {
        "name": "stone_shovel",
        "label": "Pá de Pedra", 
        "icon": [2, 112]
    },
    // 21
    {
        "name": "stone_picaxe",
        "label": "Picareta de Pedra", 
        "icon": [1, 112]
    },
    {
        "name": "stone_axe",
        "label": "Machado de Pedra", 
        "icon": [31, 111]
    },
    {
        "name": "diamond_sword",
        "label": "Espada de Diamante", 
        "icon": [18, 113]
    },
    {
        "name": "diamond_shovel",
        "label": "Pá de Diamante", 
        "icon": [9, 111]
    },
    {
        "name": "diamond_picaxe",
        "label": "Picareta de Diamante", 
        "icon": [8, 111]
    },
    {
        "name": "diamond_axe",
        "label": "Machado de Diamante", 
        "icon": [6, 111]
    },
    {
        "name": "stick",
        "label": "Graveto",
        "pack": 64,
        "icon": [19, 35]
    },
    {
        "name": "bowl",
        "label": "Tigela",
        "pack": 64,
        "icon": [12, 110]
    },
    {
        "name": "mushroom_stew",
        "label": "Ensopado de Cogumelos", 
        "icon": [7, 100]
    },
    // 22
    {
        "name": "golden_sword",
        "label": "Espada de Ouro", 
        "icon": [19, 113]
    },
    {
        "name": "golden_shovel",
        "label": "Pá de Ouro", 
        "icon": [20, 111]
    },
    {
        "name": "golden_picaxe",
        "label": "Picareta de Ouro", 
        "icon": [19, 111]
    },
    {
        "name": "golden_axe",
        "label": "Machado de Ouro", 
        "icon": [17, 111]
    },
    {
        "name": "line",
        "label": "Linha",
        "pack": 64,
        "icon": [10, 110]
    },
    {
        "name": "feather",
        "label": "Pena",
        "pack": 64,
        "icon": [22, 109]
    },
    {
        "name": "gun_powder",
        "label": "Pólvora",
        "pack": 64,
        "icon": [27, 109]
    },
    {
        "name": "wooden_hoe",
        "label": "Enxada de Madeira", 
        "icon": [4, 112]
    },
    {
        "name": "stone_hoe",
        "label": "Enxada de Pedra", 
        "icon": [0, 112]
    },
    {
        "name": "iron_hoe",
        "label": "Enxada de Ferro", 
        "icon": [22, 111]
    },
    {
        "name": "diamond_hoe",
        "label": "Enxada de Diamante", 
        "icon": [7, 111]
    },
    {
        "name": "golden_hoe",
        "label": "Enxada de Ouro", 
        "icon": [18, 111]
    },
    {
        "name": "seed",
        "label": "Sementes",
        "pack": 64,
        "icon": [10, 33]
    },






    {
        "name": "wheat",
        "label": "Trigo",
        "pack": 64,
        "icon": [19, 100]
    },
    {
        "name": "bread",
        "label": "Pão",
        "pack": 64,
        "icon": [28, 99]
    },
    {
        "name": "leather_helmet",
        "label": "Capacete de Couro",
        "icon": [19, 78]
    },
    {
        "name": "leather_chestplate",
        "label": "Peitoral de Couro",
        "icon": [21, 78]
    },
    {
        "name": "leather_leggings",
        "label": "Calça de Couro",
        "icon": [20, 78]
    },
    // 23
    {
        "name": "leather_boots",
        "label": "Botas de Couro",
        "icon": [18, 78]
    },
    {
        "name": "chainmail_helmet",
        "label": "Capacete de Cota de Malha",
        "icon": [10, 77]
    },
    {
        "name": "chainmail_chestplate",
        "label": "Peitoral de Cota de Malha",
        "icon": [9, 77]
    },
    {
        "name": "chainmail_leggings",
        "label": "Calça de Cota de Malha",
        "icon": [11, 77]
    },
    {
        "name": "chainmail_boots",
        "label": "Botas de Cota de Malha",
        "icon": [8, 77]
    },
    {
        "name": "iron_helmet",
        "label": "Capacete de Ferro",
        "icon": [16, 78]
    },
    {
        "name": "iron_chestplate",
        "label": "Peitoral de Ferro",
        "icon": [15, 78]
    },
    {
        "name": "iron_leggings",
        "label": "Calça de Ferro",
        "icon": [17, 78]
    },
    {
        "name": "iron_boots",
        "label": "Botas de Ferro",
        "icon": [14, 78]
    },
    // 24
    {
        "name": "diamond_helmet",
        "label": "Capacete de Diamante",
        "icon": [5, 78]
    },
    {
        "name": "diamond_chestplate",
        "label": "Peitoral de Diamante",
        "icon": [4, 78]
    },
    {
        "name": "diamond_leggings",
        "label": "Calça de Diamante",
        "icon": [6, 78]
    },
    {
        "name": "diamond_boots",
        "label": "Botas de Diamante",
        "icon": [3, 78]
    },
    {
        "name": "golden_helmet",
        "label": "Capacete de Ouro",
        "icon": [10, 78]
    },
    {
        "name": "golden_chestplate",
        "label": "Peitoral de Ouro",
        "icon": [9, 78]
    },
    {
        "name": "golden_leggings",
        "label": "Calça de Ouro",
        "icon": [11, 78]
    },
    {
        "name": "golden_boots",
        "label": "Botas de Ouro",
        "icon": [8, 78]
    },
    {
        "name": "flint",
        "label": "Pederneira",
        "pack": 64,
        "icon": [23, 109]
    },
    // 25
    {
        "name": "porkchop",
        "label": "Costela de Porco Crua",
        "pack": 64,
        "icon": [15, 100]
    },
    {
        "name": "cooked_porkchop",
        "label": "Costela de Porco Assada",
        "pack": 64,
        "icon": [1, 100]
    },
    {
        "name": "painting",
        "label": "Quadro",
        "pack": 64,
        "icon": [17, 98]
    },
    {
        "name": "golden_apple",
        "label": "Maçã Dourada",
        "pack": 64,
        "icon": [5, 100],
        "color": "#5ff"
    },
    {
        "name": "enchanted_golden_apple",
        "label": "Maçã Dourada",
        "pack": 64,
        "animation": "Enchanted_Golden_Apple.webp",
        "color": "#f5f"
    },
    {
        "name": "sign",
        "label": "Placa",
        "pack": 64,
        "icon": [28, 105]
    },
    {
        "name": "door",
        "label": "Porta",
        "pack": 64,
        "icon": [16, 29]
    },
    {
        "name": "bucket",
        "label": "Balde",
        "pack": 64,
        "icon": [9, 98]
    },
    {
        "name": "water_bucket",
        "label": "Balde de Água", 
        "icon": [12, 98]
    },
    // 26
    {
        "name": "lava_bucket",
        "label": "Balde de Lava", 
        "icon": [10, 98]
    },
    {
        "name": "minecart",
        "label": "Carrinho de Mina", 
        "icon": [5, 113]
    },
    {
        "name": "saddle",
        "label": "Sela", 
        "icon": [29, 111]
    },
    {
        "name": "iron_door",
        "label": "Porta de Ferro",
        "pack": 64,
        "icon": [12, 29]
    },
    {
        "name": "redstone",
        "label": "Pó de Redstone",
        "pack": 64,
        "icon": [17, 35]
    },
    {
        "name": "snow_ball",
        "label": "Bola de Neve",
        "pack": 16,
        "icon": [21, 113]
    },
    {
        "name": "boat",
        "label": "Bote", 
        "icon": [12, 19]
    },
    {
        "name": "leather",
        "label": "Couro",
        "pack": 64,
        "icon": [30, 109]
    },
    {
        "name": "milk_bucket",
        "label": "Balde de Leite", 
        "icon": [11, 98]
    },
    // 27
    {
        "name": "brick",
        "label": "Tijolo",
        "pack": 64,
        "icon": [15, 109]
    },
    {
        "name": "clay",
        "label": "Argila",
        "pack": 64,
        "icon": [17, 109]
    },
    {
        "name": "sugar_cane",
        "label": "Cana-de-Açúcar",
        "pack": 64,
        "icon": [20, 107]
    },
    {
        "name": "paper",
        "label": "Papel",
        "pack": 64,
        "icon": [2, 110]
    },
    {
        "name": "book",
        "label": "Livro",
        "pack": 64,
        "icon": [14, 109]
    },
    {
        "name": "slime_ball",
        "label": "Bola de Slime",
        "pack": 64,
        "icon": [9, 110]
    },
    {
        "name": "chest_minecart",
        "label": "Carrinho de Mina com Baú", 
        "icon": [6, 113]
    },
    {
        "name": "furnace_minecart",
        "label": "Carrinho de Mina com Fornalha", 
        "icon": [8, 113]
    },
    {
        "name": "egg",
        "label": "Ovo",
        "pack": 16,
        "icon": [4, 100]
    },
    // 28
    {
        "name": "compass",
        "label": "Bússola", 
        "pack": 64,
        "icon": [31, 15]
    },
    {
        "name": "fishing_rod",
        "label": "Vara de Pesca", 
        "icon": [14, 111]
    },
    {
        "name": "clock",
        "label": "Rélogio",
        "pack": 64,
        "icon": [30, 15]
    },
    {
        "name": "glowstone_dust",
        "label": "Pó de Pedra Luminosa",
        "pack": 64,
        "icon": [24, 109]
    },
    {
        "name": "fish",
        "label": "Peixe Cru",
        "pack": 64,
        "icon": [9, 26]
    },
    {
        "name": "cooked_fish",
        "label": "Peixe Assado",
        "pack": 64,
        "icon": [26, 25]
    },
    {
        "name": "ink_sac",
        "label": "Bolsa de Tinta",
        "pack": 64,
        "icon": [23, 98]
    },
    {
        "name": "red_dye",
        "label": "Corante Vermelho",
        "pack": 64,
        "icon": [0, 99]
    },
    {
        "name": "green_dye",
        "label": "Corante Verde",
        "pack": 64,
        "icon": [22, 98]
    },
    // 29
    {
        "name": "cacau_seed",
        "label": "Semente de Cacau",
        "pack": 64,
        "icon": [19, 98]
    },
    {
        "name": "lapis_lazuli",
        "label": "Lápiz-Lazúli",
        "pack": 64,
        "icon": [24, 98]
    },
    {
        "name": "purple_dye",
        "label": "Corante Lilás",
        "pack": 64,
        "icon": [31, 98]
    },
    {
        "name": "cyan_dye",
        "label": "Corante Ciano",
        "pack": 64,
        "icon": [20, 98]
    },
    {
        "name": "light_gray_dye",
        "label": "Corante Cinza Claro",
        "pack": 64,
        "icon": [25, 98]
    },
    {
        "name": "gray_dye",
        "label": "Corante Cinza",
        "pack": 64,
        "icon": [21, 98]
    },
    {
        "name": "pink_dye",
        "label": "Corante Rosa",
        "pack": 64,
        "icon": [30, 98]
    },
    {
        "name": "lime_dye",
        "label": "Corante Lima",
        "pack": 64,
        "icon": [27, 98]
    },
    {
        "name": "yellow_dye",
        "label": "Amarelo do Dente-de-Leão",
        "pack": 64,
        "icon": [1, 99]
    },
    // 30
    {
        "name": "light_blue_dye",
        "label": "Corante Azul-claro",
        "pack": 64,
        "icon": [25, 98]
    },
    {
        "name": "magenta_dye",
        "label": "Corante Magenta",
        "pack": 64,
        "icon": [28, 98]
    },
    {
        "name": "orange_dye",
        "label": "Corante Laranja",
        "pack": 64,
        "icon": [29, 98]
    },
    {
        "name": "bone_meal",
        "label": "Farinha de Osso",
        "pack": 64,
        "icon": [18, 98]
    },
    {
        "name": "bone",
        "label": "Osso",
        "pack": 64,
        "icon": [13, 109]
    },
    {
        "name": "sugar",
        "label": "Açúcar",
        "pack": 64,
        "icon": [18, 100]
    },
    {
        "name": "cake",
        "label": "Bolo",
        "icon": [1, 0]
    },
    {
        "name": "bed",
        "label": "Cama", 
        "icon": [21, 48]
    },
    {
        "name": "repeater",
        "label": "Repetidor de Redstone",
        "pack": 64,
        "icon": [18, 104]
    },
    // 31
    {
        "name": "cookie",
        "label": "Biscoito",
        "pack": 64,
        "icon": [3, 100]
    },
    {
        "name": "shears",
        "label": "Tesoura", 
        "icon": [30, 111]
    },
    {
        "name": "melon_slice",
        "label": "Melancia",
        "pack": 64,
        "icon": [6, 100]
    },
    {
        "name": "pumpkin_seed",
        "label": "Sementes de Ábobora",
        "pack": 64,
        "icon": [4, 33]
    },
    {
        "name": "melon_seed",
        "label": "Sementes de Melancia",
        "pack": 64,
        "icon": [25, 32]
    },
    {
        "name": "beef",
        "label": "Bife Cru",
        "pack": 64,
        "icon": [12, 100]
    },
    {
        "name": "cooked_beef",
        "label": "Filé",
        "pack": 64,
        "icon": [15, 26]
    },
    {
        "name": "chicken",
        "label": "Frango Cru",
        "pack": 64,
        "icon": [13, 100]
    },
    {
        "name": "cooked_chicken",
        "label": "Frango Assado",
        "pack": 64,
        "icon": [31, 99]
    },
    {
        "name": "rotten_flesh",
        "label": "Carne Podre",
        "pack": 64,
        "icon": [17, 100]
    },
    {
        "name": "ender_pearl",
        "label": "Pérola do Fim",
        "pack": 16,
        "icon": [21, 109]
    },
    {
        "name": "blaze_rod",
        "label": "Vara Incadescente",
        "pack": 64,
        "icon": [14, 20]
    },
    {
        "name": "ghast_tear",
        "label": "Lágrima de Ghast",
        "pack": 64,
        "icon": [3, 98]
    },
    {
        "name": "gold_nugget",
        "label": "Pepita de Ouro",
        "pack": 64,
        "icon": [26, 109]
    },
    {
        "name": "nether_wart",
        "label": "Fungo do Nether",
        "pack": 64,
        "icon": [22, 20]
    },







    // POTIONS - START

    {
        "name": "water_bottle",
        "label": "Frasco com Água",
        "icon": [4, 9]
    },
    {
        "name": "potion_regeneration045_1",
        "label": "Poção da Regeneração",
        "icon": [13, 9],
        "subTitle": {
            "text": "Regeneração (0:45)"
        }
    },
    {
        "name": "potion_regeneration022_2",
        "label": "Poção da Regeneração",
        "icon": [13, 9],
        "subTitle": {
            "text": "Regeneração II (0:22)"
        }
    },
    {
        "name": "potion_regeneration200_1",
        "label": "Poção da Regeneração",
        "icon": [13, 9],
        "subTitle": {
            "text": "Regeneração (2:00)"
        }
    },
    {
        "name": "trowable_potion_regeneration033_1",
        "label": "Arremessável Poção da Regeneração",
        "icon": [21, 10],
        "subTitle": {
            "text": "Regeneração (0:33)"
        }
    },
    {
        "name": "trowable_potion_regeneration016_2",
        "label": "Arremessável Poção da Regeneração",
        "icon": [21, 10],
        "subTitle": {
            "text": "Regeneração II (0:16)"
        }
    },
    {
        "name": "trowable_potion_regeneration130_1",
        "label": "Arremessável Poção da Regeneração",
        "icon": [21, 10],
        "subTitle": {
            "text": "Regeneração (1:30)"
        }
    },
    {
        "name": "potion_agility300_1",
        "label": "Poção da Agilidade",
        "icon": [17, 9],
        "subTitle": {
            "text": "Velocidade (3:00)"
        }
    },
    {
        "name": "potion_agility130_2",
        "label": "Poção da Agilidade",
        "icon": [17, 9],
        "subTitle": {
            "text": "Velocidade II (1:30)"
        }
    },
    {
        "name": "potion_agility800_1",
        "label": "Poção da Agilidade",
        "icon": [17, 9],
        "subTitle": {
            "text": "Velocidade (8:00)"
        }
    },
    {
        "name": "trowable_potion_agility215_1",
        "label": "Arremessável Poção da Agilidade",
        "icon": [25, 10],
        "subTitle": {
            "text": "Velocidade (2:15)"
        }
    },
    {
        "name": "trowable_potion_agility107_2",
        "label": "Arremessável Poção da Agilidade",
        "icon": [25, 10],
        "subTitle": {
            "text": "Velocidade II (1:07)"
        }
    },
    {
        "name": "trowable_potion_agility600_1",
        "label": "Arremessável Poção da Agilidade",
        "icon": [25, 10],
        "subTitle": {
            "text": "Velocidade (6:00)"
        }
    },
    {
        "name": "potion_fire_resistance300_1",
        "label": "Poção de Resistência ao Fogo",
        "icon": [5, 9],
        "subTitle": {
            "text": "Resistência ao Fogo (3:00)"
        }
    },
    {
        "name": "potion_fire_resistance800_1",
        "label": "Poção de Resistência ao Fogo",
        "icon": [5, 9],
        "subTitle": {
            "text": "Resistência ao Fogo (8:00)"
        }
    },
    {
        "name": "trowable_potion_fire_resistance215_1",
        "label": "Arremessável Poção de Resistência ao Fogo",
        "icon": [13, 10],
        "subTitle": {
            "text": "Resistência ao Fogo (2:15)"
        }
    }, 
    {
        "name": "trowable_potion_fire_resistance600_1",
        "label": "Arremessável Poção de Resistência ao Fogo",
        "icon": [13, 10],
        "subTitle": {
            "text": "Resistência ao Fogo (6:00)"
        }
    },
    {
        "name": "potion_posion_045_1",
        "label": "Poção Venenosa",
        "icon": [10, 9],
        "subTitle": {
            "text": "Veneno (0:45)",
            "color": "#f55"
        }
    }, 
    {
        "name": "potion_posion_022_2",
        "label": "Poção Venenosa",
        "icon": [10, 9],
        "subTitle": {
            "text": "Veneno II (0:22)",
            "color": "#f55"
        }
    }, 
    {
        "name": "potion_posion_200_1",
        "label": "Poção Venenosa",
        "icon": [10, 9],
        "subTitle": {
            "text": "Veneno (2:00)",
            "color": "#f55"
        }
    },
    {
        "name": "trowable_potion_posion_033_1",
        "label": "Arremessável Poção Venenosa",
        "icon": [18, 10],
        "subTitle": {
            "text": "Veneno (0:33)",
            "color": "#f55"
        }
    }, 
    {
        "name": "trowable_potion_posion_016_2",
        "label": "Arremessável Poção Venenosa",
        "icon": [18, 10],
        "subTitle": {
            "text": "Veneno II (0:16)",
            "color": "#f55"
        }
    }, 
    {
        "name": "trowable_potion_posion_130_1",
        "label": "Arremessável Poção Venenosa",
        "icon": [18, 10],
        "subTitle": {
            "text": "Veneno (1:30)",
            "color": "#f55"
        }
    },
    {
        "name": "potion_health_1",
        "label": "Poção de Cura",
        "icon": [7, 9],
        "subTitle": {
            "text": "Vida Instantânea"
        }
    }, 
    {
        "name": "potion_health_2",
        "label": "Poção de Cura",
        "icon": [7, 9],
        "subTitle": {
            "text": "Vida Instantânea II"
        }
    },
    {
        "name": "trowable_potion_health_1",
        "label": "Arremessável Poção de Cura",
        "icon": [15, 10],
        "subTitle": {
            "text": "Vida Instantânea"
        }
    }, 
    {
        "name": "trowable_potion_health_2",
        "label": "Arremessável Poção de Cura",
        "icon": [15, 10],
        "subTitle": {
            "text": "Vida Instantânea II"
        }
    },
    {
        "name": "potion_nightvision_300",
        "label": "Poção da Visão Noturna",
        "icon": [11, 9],
        "subTitle": {
            "text": "Visão Noturna (3:00)"
        }
    }, 
    {
        "name": "potion_nightvision_800",
        "label": "Poção da Visão Noturna",
        "icon": [11, 9],
        "subTitle": {
            "text": "Visão Noturna (8:00)"
        }
    },
    {
        "name": "trowable_potion_nightvision_215",
        "label": "Arremessável Poção da Visão Noturna",
        "icon": [19, 10],
        "subTitle": {
            "text": "Visão Noturna (2:15)"
        }
    }, 
    {
        "name": "trowable_potion_nightvision_600",
        "label": "Arremessável Poção da Visão Noturna",
        "icon": [19, 10],
        "subTitle": {
            "text": "Visão Noturna (6:00)"
        }
    },
    {
        "name": "potion_weakness_130",
        "label": "Poção da Fraqueza",
        "icon": [15, 9],
        "subTitle": {
            "text": "Fraqueza (1:30)",
            "color": "#f55"
        }
    }, 
    {
        "name": "potion_weakness_400",
        "label": "Poção da Fraqueza",
        "icon": [15, 9],
        "subTitle": {
            "text": "Fraqueza (4:00)",
            "color": "#f55"
        }
    },
    {
        "name": "trowable_potion_weakness_107",
        "label": "Arremessável Poção da Fraqueza",
        "icon": [23, 10],
        "subTitle": {
            "text": "Fraqueza (1:07)",
            "color": "#f55"
        }
    }, 
    {
        "name": "trowable_potion_weakness_300",
        "label": "Arremessável Poção da Fraqueza",
        "icon": [23, 10],
        "subTitle": {
            "text": "Fraqueza (3:00)",
            "color": "#f55"
        }
    },
    {
        "name": "potion_strength_300_1",
        "label": "Poção da Força",
        "icon": [16, 9],
        "subTitle": {
            "text": "Força (3:00)"
        }
    },  
    {
        "name": "potion_strength_130_2",
        "label": "Poção da Força",
        "icon": [16, 9],
        "subTitle": {
            "text": "Força II (1:30)"
        }
    },  
    {
        "name": "potion_strength_130_1",
        "label": "Poção da Força",
        "icon": [16, 9],
        "subTitle": {
            "text": "Força (8:00)"
        }
    },
    {
        "name": "trowable_potion_strength_215_1",
        "label": "Arremessável Poção da Força",
        "icon": [24, 10],
        "subTitle": {
            "text": "Força (2:15)"
        }
    },  
    {
        "name": "trowable_potion_strength_107_2",
        "label": "Arremessável Poção da Força",
        "icon": [24, 10],
        "subTitle": {
            "text": "Força II (1:07)"
        }
    },  
    {
        "name": "trowable_potion_strength_600_1",
        "label": "Arremessável Poção da Força",
        "icon": [24, 10],
        "subTitle": {
            "text": "Força (6:00)"
        }
    },
    {
        "name": "potion_slowness_130",
        "label": "Poção da Lentidão",
        "icon": [15, 9],
        "subTitle": {
            "text": "Lentidão (1:30)",
            "color": "#f55"
        }
    },  
    {
        "name": "potion_slowness_400",
        "label": "Poção da Lentidão",
        "icon": [15, 9],
        "subTitle": {
            "text": "Lentidão (4:00)",
            "color": "#f55"
        }
    },
    {
        "name": "trowable_potion_slowness_107",
        "label": "Arremessável Poção da Lentidão",
        "icon": [23, 10],
        "subTitle": {
            "text": "Lentidão (1:07)",
            "color": "#f55"
        }
    },  
    {
        "name": "trowable_potion_slowness_300",
        "label": "Arremessável Poção da Lentidão",
        "icon": [23, 10],
        "subTitle": {
            "text": "Lentidão (3:00)",
            "color": "#f55"
        }
    },
    {
        "name": "potion_harming_1",
        "label": "Poção de Dano",
        "icon": [6, 9],
        "subTitle": {
            "text": "Dano Instantâneo",
            "color": "#f55"
        }
    },  
    {
        "name": "potion_harming_2",
        "label": "Poção de Dano",
        "icon": [6, 9],
        "subTitle": {
            "text": "Dano Instantâneo II",
            "color": "#f55"
        }
    },
    {
        "name": "trowable_potion_harming_1",
        "label": "Arremessável Poção de Dano",
        "icon": [14, 10],
        "subTitle": {
            "text": "Dano Instantâneo",
            "color": "#f55"
        }
    },  
    {
        "name": "trowable_potion_harming_2",
        "label": "Arremessável Poção de Dano",
        "icon": [14, 10],
        "subTitle": {
            "text": "Dano Instantâneo II",
            "color": "#f55"
        }
    },
    {
        "name": "potion_invisibility_300",
        "label": "Poção da Invisibilidade",
        "icon": [15, 9],
        "subTitle": {
            "text": "Invisibilidade (3:00)"
        }
    },  
    {
        "name": "potion_invisibility_800",
        "label": "Poção da Invisibilidade",
        "icon": [15, 9],
        "subTitle": {
            "text": "Invisibilidade (8:00)"
        }
    },
    {
        "name": "trowable_potion_invisibility_215",
        "label": "Arremessável Poção da Invisibilidade",
        "icon": [23, 10],
        "subTitle": {
            "text": "Invisibilidade (2:15)"
        }
    },  
    {
        "name": "trowable_potion_invisibility_600",
        "label": "Arremessável Poção da Invisibilidade",
        "icon": [23, 10],
        "subTitle": {
            "text": "Invisibilidade (6:00)"
        }
    },
    {
        "name": "bottle",
        "label": "Frasco de Vidro",
        "pack": 64,
        "icon": [16, 111]
    },
    // POTIONS - END





    // 
    {
        "name": "spider_eye",
        "label": "Olho de Aranha",
        "pack": 64,
        "icon": [8, 98]
    },
    {
        "name": "fermented_spider_eye",
        "label": "Olho de Aranha Fermentado",
        "pack": 64,
        "icon": [2, 98]
    },
    {
        "name": "balze_powder",
        "label": "Pó de Blaze",
        "pack": 64,
        "icon": [13, 20]
    },
    //
    {
        "name": "magma_cream",
        "label": "Creme de Magma",
        "pack": 64,
        "icon": [6, 98]
    },
    {
        "name": "brewing_stand",
        "label": "Suporte de Poções",
        "pack": 64,
        "icon": [12, 112]
    },
    {
        "name": "cauldron",
        "label": "Caldeirão",
        "pack": 64,
        "icon": [14, 112]
    },
    {
        "name": "ender_eye",
        "label": "Olho do Fim",
        "pack": 64,
        "icon": [12, 111]
    },
    {
        "name": "glowing_melon",
        "label": "Melancia Reluzente",
        "pack": 64,
        "icon": [4, 98]
    },


    // OVOS - START
    
    {
        "name": "creeper_spawn_egg",
        "label": "Invocar Creeper",
        "pack": 64,
        "icon": [26, 35]
    },
    {
        "name": "skeleton_spawn_egg",
        "label": "Invocar Esqueleto",
        "pack": 64,
        "icon": [8, 36]
    },
    {
        "name": "spider_spawn_egg",
        "label": "Invocar Aranha",
        "pack": 64,
        "icon": [10, 36]
    },
    {
        "name": "zombie_spawn_egg",
        "label": "Invocar Zumbi",
        "pack": 64,
        "icon": [15, 36]
    },
    {
        "name": "slime_spawn_egg",
        "label": "Invocar Slime",
        "pack": 64,
        "icon": [9, 36]
    },
    {
        "name": "ghast_spawn_egg",
        "label": "Invocar Ghast",
        "pack": 64,
        "icon": [29, 35]
    },
    {
        "name": "zombie_pigman_spawn_egg",
        "label": "Invocar Homem-porco Zumbi",
        "pack": 64,
        "icon": [16, 36]
    },
    {
        "name": "enderman_spawn_egg",
        "label": "Invocar Enderman",
        "pack": 64,
        "icon": [27, 35]
    },
    {
        "name": "cave_spider_spawn_egg",
        "label": "Invocar Aranha da Caverna",
        "pack": 64,
        "icon": [23, 35]
    },
    {
        "name": "silverfish_egg",
        "label": "Invocar Traça",
        "pack": 64,
        "icon": [7, 36]
    },
    {
        "name": "blaze_egg",
        "label": "Invocar Blaze",
        "pack": 64,
        "icon": [22, 35]
    },
    {
        "name": "magma_cube_egg",
        "label": "Invocar Cubo de Magma",
        "pack": 64,
        "icon": [0, 36]
    },
    {
        "name": "bat_egg",
        "label": "Invocar Morcego",
        "pack": 64,
        "icon": [21, 35]
    },
    {
        "name": "witch_egg",
        "label": "Invocar Bruxa",
        "pack": 64,
        "icon": [13, 36]
    },
    {
        "name": "pig_egg",
        "label": "Invocar Porco",
        "pack": 64,
        "icon": [3, 36]
    },
    {
        "name": "sheep_egg",
        "label": "Invocar Ovelha",
        "pack": 64,
        "icon": [5, 36]
    },
    {
        "name": "cow_egg",
        "label": "Invocar Vaca",
        "pack": 64,
        "icon": [25, 35]
    },
    {
        "name": "chicken_egg",
        "label": "Invocar Galinha",
        "pack": 64,
        "icon": [24, 35]
    },
    {
        "name": "squid_egg",
        "label": "Invocar Lula",
        "pack": 64,
        "icon": [11, 36]
    },
    {
        "name": "wolf_egg",
        "label": "Invocar Lobo",
        "pack": 64,
        "icon": [14, 36]
    },
    {
        "name": "mushroom_egg",
        "label": "Invocar Coguvaca",
        "pack": 64,
        "icon": [1, 36]
    },
    {
        "name": "ocelot_egg",
        "label": "Invocar Jaguatirica",
        "pack": 64,
        "icon": [2, 36]
    },
    {
        "name": "villager_egg",
        "label": "Invocar Aldeão",
        "pack": 64,
        "icon": [12, 36]
    },
    
    // OVOS - END

    {
        "name": "experience_bottle",
        "label": "Frasco de Encantamentos",
        "pack": 64, 
        "animation": "Bottle_Enchanting.webp"
    },
    {
        "name": "fire_ball",
        "label": "Bola de Fogo",
        "pack": 64,
        "icon": [13, 111]
    },
    {
        "name": "feather_and_book",
        "label": "Pena e Livro", 
        "icon": [11, 110]
    },
    {
        "name": "emerald",
        "label": "Esmeralda",
        "pack": 64,
        "icon": [20, 109]
    },
    {
        "name": "item_frame",
        "label": "Moldura",
        "pack": 64,
        "icon": [15, 98]
    },
    {
        "name": "flower_pot",
        "label": "Vaso",
        "pack": 64,
        "icon": [14, 98]
    },
    {
        "name": "carrot",
        "label": "Cenoura",
        "pack": 64,
        "icon": [30, 3]
    },
    {
        "name": "potato",
        "label": "Potato",
        "pack": 64,
        "icon": [31, 3]
    },
    {
        "name": "cooked_potato",
        "label": "Batata Assada",
        "pack": 64,
        "icon": [25, 99]
    },
    {
        "name": "poisonous_potato",
        "label": "Batata Venenosa",
        "pack": 64,
        "icon": [8, 100]
    },
    {
        "name": "map",
        "label": "Mapa",
        "pack": 64,
        "icon": [10, 111]
    },
    {
        "name": "golden_carrot",
        "label": "Cenoura Dourada",
        "pack": 64,
        "icon": [5, 98]
    },
    {
        "name": "skeleton_head",
        "label": "Cabeça de Esqueleto",
        "pack": 64,
        "icon": [6, 30]
    },
    {
        "name": "whiter_skeleton_head",
        "label": "Cabeça de Esqueleto Whiter",
        "pack": 64,
        "icon": [7, 30]
    },
    {
        "name": "zombie_head",
        "label": "Cabeça de Zumbi",
        "pack": 64,
        "icon": [8, 30]
    },
    {
        "name": "steve_head",
        "label": "Cabeça",
        "pack": 64,
        "icon": [5, 30]
    },
    {
        "name": "creeper_head",
        "label": "Cabeça de Creeper",
        "pack": 64,
        "icon": [3, 30]
    },
    {
        "name": "carrot_on_a_stick",
        "label": "Cenoura no Palito", 
        "icon": [13, 110]
    },
    {
        "name": "nether_star",
        "label": "Estrela do Nether",
        "pack": 64,
        "animation": "Nether_Star.webp"
    },
    {
        "name": "pumpkin_pie",
        "label": "Torta de Ábobora",
        "pack": 64,
        "icon": [10, 100]
    },
    {
        "name": "firework_star",
        "label": "Estrela de Fogos de Artifício",
        "pack": 64,
        "icon": [8, 25]
    },
    {
        "name": "comparator",
        "label": "Compador de Redstone",
        "pack": 64,
        "icon": [16, 104]
    },
    {
        "name": "nether_brick",
        "label": "Tijolo do Nether",
        "pack": 64,
        "icon": [31, 109]
    },
    {
        "name": "quartz",
        "label": "Quartzo do Nether",
        "pack": 64,
        "icon": [0, 110]
    },
    {
        "name": "tnt_minecart",
        "label": "Carrinho com Dinamite", 
        "icon": [10, 113]
    },
    {
        "name": "hopper_minecart",
        "label": "Carrinho com Funil", 
        "icon": [9, 113]
    },


    // DISCO - START
    {
        "name": "music_disc_13",
        "label": "Disco de Música", 
        "icon": [0, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - 13"
        }
    },
    {
        "name": "music_disc_cat",
        "label": "Disco de Música", 
        "icon": [3, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - cat"
        }
    },
    {
        "name": "music_disc_blocks",
        "label": "Disco de Música", 
        "icon": [2, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - blocks"
        }
    },
    {
        "name": "music_disc_chirp",
        "label": "Disco de Música", 
        "icon": [4, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - chirp"
        }
    },
    {
        "name": "music_disc_far",
        "label": "Disco de Música", 
        "icon": [5, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - far"
        }
    },
    {
        "name": "music_disc_mall",
        "label": "Disco de Música", 
        "icon": [8, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - mall"
        }
    },
    {
        "name": "music_disc_mellohi",
        "label": "Disco de Música", 
        "icon": [9, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - mellohi"
        }
    },
    {
        "name": "music_disc_stal",
        "label": "Disco de Música", 
        "icon": [11, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - stal"
        }
    },
    {
        "name": "music_disc_strad",
        "label": "Disco de Música", 
        "icon": [12, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - strad"
        }
    },
    {
        "name": "music_disc_ward",
        "label": "Disco de Música", 
        "icon": [14, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - ward"
        }
    },
    {
        "name": "music_disc_11",
        "label": "Disco de Música", 
        "icon": [16, 98],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - 11"
        }
    },
    {
        "name": "music_disc_wait",
        "label": "Disco de Música", 
        "icon": [13, 21],
        "color": "#5ff",
        "subTitle": {
            "text": "C418 - wait"
        }
    },
    
    // DISCO - END
    
    
    
    
    
    // BOOKS - START
    
    {
        "name": "enchanted_book_protection_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção I"
        }
    },
    {
        "name": "enchanted_book_protection_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção II"
        }
    },
    {
        "name": "enchanted_book_protection_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção III"
        }
    },
    {
        "name": "enchanted_book_protection_4",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção IV"
        }
    },


    {
        "name": "enchanted_book_fire_protection_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Fogo I"
        }
    },
    {
        "name": "enchanted_book_fire_protection_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Fogo II"
        }
    },
    {
        "name": "enchanted_book_fire_protection_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Fogo III"
        }
    },
    {
        "name": "enchanted_book_fire_protection_4",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Fogo IV"
        }
    },
    {
        "name": "enchanted_book_feather_falling_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Peso Pena I"
        }
    },
    {
        "name": "enchanted_book_feather_falling_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Peso Pena II"
        }
    },
    {
        "name": "enchanted_book_feather_falling_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Peso Pena III"
        }
    },
    {
        "name": "enchanted_book_feather_falling_4",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Peso Pena IV"
        }
    },



    {
        "name": "enchanted_book_blast_protection_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Explosões I"
        }
    },
    {
        "name": "enchanted_book_blast_protection_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Explosões II"
        }
    },
    {
        "name": "enchanted_book_blast_protection_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Explosões III"
        }
    },
    {
        "name": "enchanted_book_blast_protection_4",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Explosões IV"
        }
    },



    {
        "name": "enchanted_book_projectile_protection_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Projéteis I"
        }
    },
    {
        "name": "enchanted_book_projectile_protection_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Projéteis II"
        }
    },
    {
        "name": "enchanted_book_projectile_protection_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Projéteis III"
        }
    },
    {
        "name": "enchanted_book_projectile_protection_4",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Proteção Contra Projéteis IV"
        }
    },
    {
        "name": "enchanted_book_respiration_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Respiração I"
        }
    },
    {
        "name": "enchanted_book_respiration_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Respiração II"
        }
    },
    {
        "name": "enchanted_book_respiration_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Respiração III"
        }
    },
    {
        "name": "enchanted_book_aqua_affinity_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Afinidade Aquática I"
        }
    },



    {
        "name": "enchanted_book_thorns_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Espinhos I"
        }
    },
    {
        "name": "enchanted_book_thorns_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Espinhos II"
        }
    },
    {
        "name": "enchanted_book_thorns_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Espinhos III"
        }
    },
    {
        "name": "enchanted_book_sharpness_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Afiada I"
        }
    },
    {
        "name": "enchanted_book_sharpness_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Afiada II"
        }
    },
    {
        "name": "enchanted_book_sharpness_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Afiada III"
        }
    },
    {
        "name": "enchanted_book_sharpness_4",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Afiada IV"
        }
    },
    {
        "name": "enchanted_book_sharpness_5",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Afiada V"
        }
    },
    {
        "name": "enchanted_book_smite_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Julgamento I"
        }
    },
    {
        "name": "enchanted_book_smite_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Julgamento II"
        }
    },
    {
        "name": "enchanted_book_smite_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Julgamento III"
        }
    },
    {
        "name": "enchanted_book_smite_4",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Julgamento IV"
        }
    },
    {
        "name": "enchanted_book_smite_5",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Julgamento V"
        }
    },
    {
        "name": "enchanted_book_bane_of_arthropods_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Ruina dos Artrópodes I"
        }
    },
    {
        "name": "enchanted_book_bane_of_arthropods_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Ruina dos Artrópodes II"
        }
    },
    {
        "name": "enchanted_book_bane_of_arthropods_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Ruina dos Artrópodes III"
        }
    },
    {
        "name": "enchanted_book_bane_of_arthropods_4",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Ruina dos Artrópodes IV"
        }
    },
    {
        "name": "enchanted_book_bane_of_arthropods_5",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Ruina dos Artrópodes V"
        }
    },

    

    {
        "name": "enchanted_book_knockback_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Repulsão I"
        }
    },
    {
        "name": "enchanted_book_knockback_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Repulsão II"
        }
    },
    {
        "name": "enchanted_book_fire_aspect_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Aspecto Flamejante I"
        }
    },
    {
        "name": "enchanted_book_fire_aspect_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Aspecto Flamejante II"
        }
    },
    {
        "name": "enchanted_book_looting_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Pilhagem I"
        }
    },
    {
        "name": "enchanted_book_looting_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Pilhagem II"
        }
    },
    {
        "name": "enchanted_book_looting_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Pilhagem III"
        }
    },
    {
        "name": "enchanted_book_efficiency_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Eficiência I"
        }
    },
    {
        "name": "enchanted_book_efficiency_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Eficiência II"
        }
    },
    {
        "name": "enchanted_book_efficiency_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Eficiência III"
        }
    },
    {
        "name": "enchanted_book_efficiency_4",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Eficiência IV"
        }
    },
    {
        "name": "enchanted_book_efficiency_5",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Eficiência V"
        }
    },



    {
        "name": "enchanted_book_silk_touch_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Toque Suave I"
        }
    },




    {
        "name": "enchanted_book_unbreakable_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Inquebrável I"
        }
    },
    {
        "name": "enchanted_book_unbreakable_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Inquebrável II"
        }
    },
    {
        "name": "enchanted_book_unbreakable_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Inquebrável III"
        }
    },




    {
        "name": "enchanted_book_fortune_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Fortuna I"
        }
    },
    {
        "name": "enchanted_book_fortune_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Fortuna II"
        }
    },
    {
        "name": "enchanted_book_fortune_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Fortuna III"
        }
    },




    {
        "name": "enchanted_book_power_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Força I"
        }
    },
    {
        "name": "enchanted_book_power_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Força II"
        }
    },
    {
        "name": "enchanted_book_power_3",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Força III"
        }
    },
    {
        "name": "enchanted_book_power_4",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Força IV"
        }
    },
    {
        "name": "enchanted_book_power_5",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Força V"
        }
    },



    {
        "name": "enchanted_book_punch_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Impacto I"
        }
    },
    {
        "name": "enchanted_book_punch_2",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Impacto II"
        }
    },



    {
        "name": "enchanted_book_flame_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Chama I"
        }
    },



    {
        "name": "enchanted_book_infinity_1",
        "label": "Livro Encantado",
        "animation": "Enchanted_Book.webp",
        "color": "#ff5",
        "subTitle": {
            "text": "Infinidade I"
        }
    },
    
    // BOOKS - END
    
];