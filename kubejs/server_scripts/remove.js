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
  ].forEach((recipe) => {
    event.remove({ output: recipe });
  });

  // ID
  [
    C('crafting/appliances/slime_ball'),
    FD('flint_knife'),
    S('raw_magnetite_from_nuggets'),
  ].forEach((recipe) => {
    event.remove({ id: recipe });
  });

  // CUSTOM
  [
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
      output: S('raw_iron_nugget'),
      type: C('splashing'),
    },
    {
      output: S('raw_gold_nugget'),
      type: C('splashing'),
    },
    {
      output: C('brass_ingot'),
      type: C('mixing'),
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
