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
    H('smeltery_controller'),
    H('foundry_controller'),
    H('scorched_brick'),
    H('scorched_stone'),
    H('scorched_road'),
    H('scorched_bricks'),
    H('chiseled_scorched_bricks'),
    H('scorched_ladder'),
    H('scorched_glass'),
    H('scorched_glass_pane'),
    H('scorched_drain'),
    H('scorched_duct'),
    H('scorched_chute'),
    H('scorched_fuel_tank'),
    H('scorched_fuel_gauge'),
    H('scorched_basin'),
    H('scorched_table'),
    H('polished_scorched_stone'),
    H('fantastic_foundry'),
    C('sturdy_sheet'),
    C('schematicannon'),
    MC('furnace'),
    MC('blast_furnace'),
    H('plate_boots'),
    H('plate_leggings'),
    H('plate_chestplate'),
    H('plate_helmet'),
  ].forEach((recipe) => {
    event.remove({ output: recipe });
  });

  // ID
  [
    C('splashing/gravel'),
    C('splashing/soul_sand'),
    C('splashing/red_sand'),
    C('crafting/appliances/slime_ball'),
    FD('flint_knife'),
    S('raw_magnetite_from_nuggets'),
  ].forEach((recipe) => {
    event.remove({ id: recipe });
  });

  // CUSTOM
  [
    { type: H('alloy') },
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
  ].forEach((recipe) => {
    event.remove(recipe);
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
