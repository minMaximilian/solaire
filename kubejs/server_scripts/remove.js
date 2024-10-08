ServerEvents.recipes((event) => {
  // OUTPUT
  [
    S('rope_ladder'),
    BP('metal_backpack'),
    BP('upgraded_backpack'),
    C('hose_pulley'),
    C('spout'),
    C('andesite_funnel'),
    C('brass_funnel'),
    C('andesite_tunnel'),
    C('brass_tunnel'),
    C('brass_hand'),
    C('elevator_pulley'),
    C('belt_connector'),
    C('sturdy_sheet'),
    C('schematicannon'),
    MC('furnace'),
    MC('blast_furnace'),
    MC('golden_apple'),
    MC('enchancted_golden_apple'),
    CA('seed_oil'),
    C('cogwheel'),
    C('large_cogwheel'),
    MC('crafting_table'),
    MC('bucket'),
    DD('sap'),
    C('electron_tube'),
    CBC('molten_bronze'),
    CBC('molten_cast_iron'),
    CBC('molten_cast_steel'),
    DD('flowing_sap'),
    DD('rubber_saplings'),
    S('obsidian_hammer_and_chisel'),
  ].forEach((recipe) => {
    event.remove({ output: recipe });
  });

  // ID
  const blacklist = [SPA('cracked_rotten_planks')];

  const planksToBeRemoved = Ingredient.of(MC('#planks')).itemIds.filter(
    (plank) => !blacklist.includes(plank)
  );

  const strippedWood = Ingredient.of(CON('#stripped_wood')).itemIds.map(
    (wood) => {
      return {
        type: C('cutting'),
        output: wood,
      };
    }
  );

  const strippedLogs = Ingredient.of(CON('#stripped_logs')).itemIds.map(
    (log) => {
      return {
        type: C('cutting'),
        output: log,
      };
    }
  );

  [
    C('splashing/gravel'),
    C('splashing/soul_sand'),
    C('splashing/red_sand'),
    C('crafting/appliances/slime_ball'),
    FD('flint_knife'),
    S('raw_magnetite_from_nuggets'),
    NS('joshua_planks_from_joshua_bundle'),
    NS('joshua_planks_from_stripped_joshua_bundle'),
    '/' + MM('mixing.*/'),
  ]
    .concat(planksToBeRemoved)
    .forEach((recipe) => {
      event.remove({ id: recipe });
    });

  // CUSTOM
  [
    { input: MC('netherite_ingot') },
    { input: DD('potassic_cobble') },
    { input: DD('asurine_cobble') },
    { input: DD('crimsite_cobble') },
    { input: DD('ochrum_cobble') },
    { input: DD('veridium_cobble') },
    { type: CBC('melting') },
    {
      type: MC('plugins/crafting'),
      output: MM('ingots_mold'),
    },
    {
      type: C('packing'),
      output: CA('seed_oil'),
    },
    {
      type: C('mixing'),
      output: CA('bioethanol'),
    },
    {
      output: C('brass_casing'),
      type: C('item_application'),
    },
    {
      output: C('copper_casing'),
      type: C('item_application'),
    },
    {
      output: C('railway_casing'),
      type: C('item_application'),
    },
    {
      output: C('andesite_alloy'),
      input: MC('andesite'),
    },
    {
      output: C('brass_ingot'),
      type: C('mixing'),
    },
    {
      output: MC('iron_ingot'),
      type: MC('smelting'),
    },
    {
      output: MC('copper_ingot'),
      type: MC('smelting'),
    },
    {
      output: MC('gold_ingot'),
      type: MC('smelting'),
    },
    {
      output: C('zinc_ingot'),
      type: MC('smelting'),
    },
    {
      input: S('raw_iron_nugget'),
      output: MC('iron_nugget'),
      type: MC('smelting'),
    },
    {
      input: S('raw_iron_nugget'),
      output: MC('iron_nugget'),
      type: MC('smelting'),
    },
    {
      input: S('raw_copper_nugget'),
      output: S('copper_nugget'),
      type: MC('smelting'),
    },
    {
      input: S('raw_gold_nugget'),
      output: MC('gold_nugget'),
      type: MC('smelting'),
    },
    {
      input: S('raw_copper_nugget'),
      output: C('copper_nugget'),
      type: MC('smelting'),
    },
    {
      input: S('raw_zinc_nugget'),
      output: C('zinc_nugget'),
      type: MC('smelting'),
    },
    {
      type: FD('cutting_board'),
      input: MC('saddle'),
    },
    {
      type: C('cutting'),
      output: MC('crimson_planks'),
    },
    {
      type: C('cutting'),
      output: MC('warped_planks'),
    },
    {
      type: C('cutting'),
      output: MC('oak_planks'),
    },
    {
      type: C('cutting'),
      output: MC('spruce_planks'),
    },
    {
      type: C('cutting'),
      output: MC('birch_planks'),
    },
    {
      type: C('cutting'),
      output: MC('jungle_planks'),
    },
    {
      type: C('cutting'),
      output: MC('crimson_planks'),
    },
    {
      type: C('cutting'),
      output: MC('acacia_planks'),
    },
    {
      type: C('cutting'),
      output: MC('crimson_planks'),
    },
    {
      type: C('cutting'),
      output: MC('dark_oak_planks'),
    },
    {
      type: C('cutting'),
      output: MC('crimson_planks'),
    },
    {
      type: C('cutting'),
      output: MC('mangrove_planks'),
    },
    {
      type: C('cutting'),
      output: MC('cherry_planks'),
    },
    {
      type: C('cutting'),
      output: MC('bamboo_planks'),
    },
    {
      type: C('mixing'),
      output: DD('condense_milk'),
    },
    {
      type: C('mixing'),
      output: DD('cream'),
    },
    {
      type: C('mixing'),
      output: DD('vanilla'),
    },
    {
      type: C('mixing'),
      output: DD('vanilla_milkshake'),
    },
    {
      type: C('mixing'),
      output: DD('strawberry'),
    },
    {
      type: C('mixing'),
      output: DD('strawberry_milkshake'),
    },
    {
      type: C('mixing'),
      output: DD('glowberry'),
    },
    {
      type: C('mixing'),
      output: DD('glowberry_milkshake'),
    },
    {
      type: C('mixing'),
      output: DD('hot_chocolate'),
    },
    {
      type: C('mixing'),
      output: DD('chocolate_milkshake'),
    },
    {
      type: C('mixing'),
      output: DD('chromatic_waste'),
    },
    {
      type: C('mixing'),
      output: DD('caramel'),
    },
    {
      type: C('mixing'),
      output: DD('caramel_milkshake'),
    },
    {
      type: C('mixing'),
      output: DD('bronze_ingot'),
    },
  ]
    .concat(strippedLogs)
    .concat(strippedWood)
    .forEach((recipe) => {
      event.remove(recipe);
    });

  // BLOAT
  Ingredient.of(KJ('#bloat')).itemIds.forEach((e) => {
    event.remove({ input: e });
    event.remove({ output: e });
  });

  // Remove recipes for all vanilla tools (stone and wooden tools don't have another recipe)
  tool_tiers.map((material) =>
    tools.map((tool) => event.remove({ output: MC(`${material}_${tool}`) }))
  );

  armour_tiers.map((material) =>
    armour.map((piece) => event.remove({ output: MC(`${material}_${piece}`) }))
  );

  // Remove recipes for making raw ores from their nuggets
  const raw_ores = ['iron', 'gold', 'copper', 'zinc', 'magnetite'];

  raw_ores.map((raw_ore) => {
    event.remove({ id: S(`raw_${raw_ore}`) });
    event.remove({ id: S(`raw_${raw_ore}_nugget`) });
  });
});
