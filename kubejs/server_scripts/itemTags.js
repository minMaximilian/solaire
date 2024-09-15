// Listen to item tag event
ServerEvents.tags('item', (event) => {
  event.remove(SP('ropes'), SP('rope'));
  event.remove(MC('planks'), S('conk_fungus'));

  event.add(KJ('flint'), T('pebble'));
  event.add(KJ('flint'), MC('flint'));
  event.add(CON('brass_ingots'), C('brass_ingot'));

  event.add(KJ('rubber_logs'), [
    DD('rubber_log'),
    DD('stripped_rubber_log'),
    DD('rubber_wood'),
    DD('stripped_rubber_wood'),
  ]);

  event.add(KJ('bloat'), [
    MC('iron_sword'),
    MC('iron_shovel'),
    MC('iron_pickaxe'),
    MC('iron_axe'),
    MC('iron_hoe'),
    MC('iron_helmet'),
    MC('iron_chestplate'),
    MC('iron_leggings'),
    MC('iron_boots'),
    MC('netherite_block'),
    MC('netherite_ingot'),
    MC('netherite_scrap'),
    MC('netherite_sword'),
    MC('netherite_shovel'),
    MC('netherite_pickaxe'),
    MC('netherite_axe'),
    MC('netherite_hoe'),
    MC('netherite_helmet'),
    MC('netherite_chestplate'),
    MC('netherite_leggings'),
    MC('netherite_boots'),
    MC('netherite_upgrade_smithing_template'),
    MC('turtle_helmet'),
    MC('chainmail_helmet'),
    MC('chainmail_chestplate'),
    MC('chainmail_leggings'),
    MC('chainmail_boots'),
    MC('diamond_helmet'),
    MC('diamond_chestplate'),
    MC('diamond_leggings'),
    MC('diamond_boots'),
    MC('diamond_shovel'),
    MC('diamond_pickaxe'),
    MC('diamond_axe'),
    MC('diamond_hoe'),
    MC('diamond_sword'),
    MC('golden_helmet'),
    MC('golden_chestplate'),
    MC('golden_leggings'),
    MC('golden_boots'),
    MC('wooden_shovel'),
    MC('wooden_pickaxe'),
    MC('wooden_axe'),
    MC('wooden_hoe'),
    MC('wooden_sword'),
    MC('golden_shovel'),
    MC('golden_pickaxe'),
    MC('golden_axe'),
    MC('golden_hoe'),
    MC('golden_sword'),
    MC('stone_sword'),
    MC('stone_hoe'),

    BB('metal_backpack'),

    C('netherite_backtank'),
    C('netherite_diving_helmet'),
    C('netherite_diving_boots'),

    CD('netherite_sheet'),
    CD('netherite_nugget'),
    CD('netherite_coin'),
    CD('netherite_coinstack'),

    DOOR('short_netherite_door'),
    DOOR('tall_netherite_door'),

    SP('netherite_door'),
    SP('netherite_trapdoor'),

    DD('integrated_mechanism'),
    DD('calculation_mechanism'),
    DD('logisticis_mechanism'),
    DD('infernal_mechanism'),
    DD('abstruse_mechanism'),
    DD('incomplete_integrated_mechanism'),
    DD('incomplete_calculation_mechanism'),
    DD('incomplete_logisticis_mechanism'),
    DD('incomplete_infernal_mechanism'),
    DD('incomplete_abstruse_mechanism'),
    DD('inductive_mechanism'),
    DD('incomplete_inductive_mechanism'),
    DD('sealed_mechanism'),
    DD('incomplete_sealed_mechanism'),
    DD('crafting_inductive_mechanism1'),
    DD('crafting_inductive_mechanism2'),
    DD('crafting_kinetic_mechanism1'),
    DD('crafting_kinetic_mechanism2'),
    DD('incomplete_stargaze_singularity'),
    DD('stargaze_singularity'),
    DD('stargaze_singularity_sheet'),
    DD('fallen_stargaze_singularity'),
    DD('stargaze_singularity_casing'),
    DD('stargaze_singularity_block'),
    DD('stargaze_singularity_scaffolding'),
    DD('netherite_large_chain'),
    DD('forest_ravager'),
    DD('deforester_saw'),
    DD('ember_alloy'),
    DD('ember_alloy_block'),
    DD('8_blade_fan'),
    DD('4_blade_fan'),
    DD('2_blade_fan'),
    DD('industrial_fan'),
    DD('superheating_sail'),
    DD('overcharge_alloy'),
    DD('overcharge_alloy_block'),
    DD('overcharge_alloy_sheet'),
    DD('overcharged_casing'),
    DD('overcharged_scaffolding'),
    DD('overcharged_alloy_block'),
    DD('industrial_casing'),
    DD('lapis_alloy_block'),
    DD('lapis_sheet'),
    DD('lapis_alloy'),
    DD('mithril_ingot'),
    DD('mithril_nugget'),
    DD('mithril_sheet'),
    DD('mithril_block'),
    DD('mithril_casing'),
    DD('mithril_scaffolding'),
    DD('refined_radiance'),
    DD('refined_radiance_sheet'),
    DD('refined_radiance_block'),
    DD('refined_radiance_casing'),
    DD('refined_radiance_casing'),
    DD('radiant_drill'),
    DD('refined_radiance_scaffolding'),
    DD('overburden_casing'),
    DD('bronze_casing'),
    DD('overburden_scaffoldign'),
    DD('tin_casing'),
    DD('ponder_in_a_box'),
    DD('potato_turret'),
    DD('shadow_steel'),
    DD('shadow_steel_sheet'),
    DD('shadow_steel_block'),
    DD('shadow_steel_casing'),
    DD('shadow_steel_casing'),
    DD('shadow_drill'),
    DD('bronze_saw'),
    DD('bronze_drill'),
    DD('shadow_steel_scaffolding'),
    DD('hydraulic_casing'),
    DD('hydraulic_press'),
    DD('flywheel'),
    DD('furnace_engine'),
    DD('compound_base'),
    DD('chromatic_compound'),
    DD('chromatic_block'),
    DD('blaze_gold'),
    DD('blaze_gold_sheet'),
    DD('blaze_gold_block'),
    DD('blaze_gold_casing'),
    DD('blaze_gold_scaffolding'),
    DD('brick_casing'),
    DD('nether_brick_casing'),
    DD('netherite_casing'),
    DD('coal_piece'),
    DD('diamond_shard'),
    DD('infastone'),
    DD('infagranite'),
    DD('infadiorite'),
    DD('infaandesite'),
    DD('infacobbled_deepslate'),
    DD('infacalcite'),
    DD('infatuff'),
    DD('infadripstone_block'),
    DD('infadirt'),
    DD('infacoarse_dirt'),
    DD('infamud'),
    DD('infacobblestone'),
    DD('infasand'),
    DD('infared_sand'),
    DD('infagravel'),
    DD('infaobsidian'),
    DD('infaice'),
    DD('infasnow_block'),
    DD('infasoul_sand'),
    DD('infaend_stone'),
    DD('infanetherrack'),
    DD('infamagma_block'),
    DD('infamoss_block'),
    DD('shimmer_bucket'),
    DD('experience_mass'),
    DD('experience_ingot'),
    DD('frozen_nugget'),
    DD('aethersite'),
    DD('cut_aethersite'),
    DD('cut_aethersite_stairs'),
    DD('aethersite_asphalt_block'),
    DD('aethersite_mossy_bricks'),
    DD('cut_aethersite_slab'),
    DD('cut_aethersite_wall'),
    DD('polished_cut_aethersite'),
    DD('polished_cut_aethersite_stairs'),
    DD('polished_cut_aethersite_slab'),
    DD('polished_cut_aethersite_wall'),
    DD('cut_aethersite_bricks'),
    DD('cut_aethersite_brick_stairs'),
    DD('cut_aethersite_brick_slab'),
    DD('cut_aethersite_brick_wall'),
    DD('small_aethersite_bricks'),
    DD('small_aethersite_brick_stairs'),
    DD('small_aethersite_brick_slab'),
    DD('small_aethersite_brick_wall'),
    DD('layered_aethersite'),
    DD('layered_pillar'),
    DD('secondary_encased_chain_drive'),
    DD('secondary_adjustable_chain_gearshift'),
    DD('industrial_casing'),
    DD('steel_casing'),
    DD('netherite_scaffolding'),
    DD('industrial_iron_ingot'),
    DD('industrial_iron_nugget'),
    DD('industrial_iron_sheet'),
    DD('industrial_iron_block'),
    DD('industrial_scaffolding'),
    DD('cast_iron_boiler'),
    DD('cast_iron_large_chain'),
    DD('condense_milk_bucket'),
    DD('cream_bucket'),
    DD('vanilla_bucket'),
    DD('vanilla_milkshake_bucket'),
    DD('caramel_bucket'),
    DD('caramel_milkshake_bucket'),
    DD('strawberry_bucket'),
    DD('strawberry_milkshake_bucket'),
    DD('glowberry_bucket'),
    DD('glowberry_milkshake_bucket'),
    DD('hot_chocolate_bucket'),
    DD('chocolate_milkshake_bucket'),
    DD('chromatic_waste_bucket'),
    DD('vanilla_milkshake'),
    DD('caramel_milkshake'),
    DD('strawberry_milkshake'),
    DD('glowberry_milkshake'),
    DD('chocolate_milkshake'),
    DD('hot_chocolate'),

    CC('turtle_normal'),
    CC('turtle_advanced'),

    MM('molten_necronium'),
    MM('molten_netherite'),
    MM('molten_netherite_bucket'),
    MM('molten_netherite_ceramic_ingot_mold'),
    MM('molten_netherite_ingot_mold'),

    FD('netherite_knife'),
    FD('diamond_knife'),

    SH('netherite_shutter'),

    CBC('molten_cast_iron'),
    CBC('molten_bronze'),
    CBC('molten_steel'),
    CBC('molten_nethersteel'),
    CBC('nethersteel_cannon_barrel'),
    CBC('built_up_nethersteel_cannon_barrel'),
    CBC('nethersteel_cannon_chamber'),
    CBC('built_up_nethersteel_cannon_chamber'),
    CBC('thick_nethersteel_cannon_chamber'),
    CBC('very_small_nethersteel_cannon_layer'),
    CBC('small_nethersteel_cannon_layer'),
    CBC('medium_nethersteel_cannon_layer'),
    CBC('large_nethersteel_cannon_layer'),
    CBC('very_large_nethersteel_cannon_layer'),
    CBC('unbored_very_small_nethersteel_cannon_layer'),
    CBC('unbored_small_nethersteel_cannon_layer'),
    CBC('unbored_medium_nethersteel_cannon_layer'),
    CBC('unbored_large_nethersteel_cannon_layer'),
    CBC('unbored_very_large_nethersteel_cannon_layer'),
    CBC('nethersteel_screw_breech'),
    CBC('incomplete_nethersteel_screw_breech'),
    CBC('unbored_nethersteel_screw_breech'),
    CBC('nethersteel_block'),
    CBC('nethersteel_screw_lock'),
    CBC('nethersteel_ingot'),
    CBC('nethersteel_nugget'),
    CBC('molten_nethersteel_bucket'),
    DEC('nethersteel_large_chain'),
    CBC('cast_iron_ingot'),
    CBC('cast_iron_nugget'),
    CBC('cast_iron_block'),
    CBC('cast_iron_cannon_barrel'),
    CBC('unbored_cast_iron_cannon_barrel'),
    CBC('cast_iron_cannon_chamber'),
    CBC('unbored_cast_iron_cannon_chamber'),
    CBC('cast_iron_cannon_end'),
    CBC('cast_iron_quickfiring_breech'),
    CBC('cast_iron_sliding_breech'),
    CBC('incomplete_cast_iron_sliding_breech'),
    CBC('unbored_cast_iron_sliding_breech'),
    CBC('cast_iron_autocannon_barrel'),
    CBC('cast_iron_autocannon_breech'),
    CBC('cast_iron_autocannon_recoil_spring'),
    CBC('incomplete_cast_iron_autocannon_recoil_spring'),
    CBC('incomplete_cast_iron_autocannon_breech'),
    CBC('unbored_cast_iron_autocannon_barrel'),
    CBC('unbored_cast_iron_autocannon_recoil_spring'),
    CBC('unbored_cast_iron_autocannon_breech'),
    CBC('cast_iron_sliding_breechblock'),
    CBC('cast_iron_autocannon_breech_extractor'),
    CBC('partial_cast_iron_autocannon_breech_extractor'),
    CBC('molten_cast_iron_bucket'),
    CBC('molten_bronze_bucket'),
    CBC('molten_steel_bucket'),
  ]);

  event.add(KJ('wood'), [
    MC('dark_oak_wood'),
    MC('oak_wood'),
    MC('acacia_wood'),
    MC('birch_wood'),
    MC('jungle_wood'),
    MC('spruce_wood'),
    MC('mangrove_wood'),
    MC('cherry_wood'),
    MC('crimson_hyphae'),
    MC('warped_hyphae'),
    NS('mahogany_wood'),
    NS('saxaul_wood'),
    NS('redwood_wood'),
    NS('aspen_wood'),
    NS('fir_wood'),
    NS('cypress_wood'),
    NS('coconut_wood'),
    NS('wisteria_wood'),
    NS('willow_wood'),
    NS('cedar_wood'),
    NS('sugi_wood'),
    NS('palo_verde_wood'),
    NS('olive_wood'),
    NS('ghaf_wood'),
    NS('maple_wood'),
    NS('larch_wood'),
    SPA('rotten_wood'),
    DD('rose_wood'),
    DD('spirit_wood'),
    DD('rubber_wood'),
    DD('smoked_wood'),
  ]);

  event.add(KJ('logs'), [
    MC('dark_oak_log'),
    MC('oak_log'),
    MC('acacia_log'),
    MC('birch_log'),
    MC('jungle_log'),
    MC('spruce_log'),
    MC('mangrove_log'),
    MC('cherry_log'),
    MC('crimson_stem'),
    MC('warped_stem'),
    NS('mahogany_log'),
    NS('saxaul_log'),
    NS('redwood_log'),
    NS('aspen_log'),
    NS('fir_log'),
    NS('cypress_log'),
    NS('coconut_log'),
    NS('wisteria_log'),
    NS('willow_log'),
    NS('cedar_log'),
    NS('sugi_log'),
    NS('palo_verde_log'),
    NS('olive_log'),
    NS('joshua_log'),
    NS('ghaf_log'),
    NS('maple_log'),
    NS('larch_log'),
    SPA('rotten_log'),
    DD('rose_log'),
    DD('spirit_log'),
    DD('rubber_log'),
    DD('smoked_log'),
  ]);
});
