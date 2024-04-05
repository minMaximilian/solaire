ServerEvents.recipes((event) => {
  addCreateRecipeHandler(event);

  event.replaceOutput({ output: SP('rope') }, SP('rope'), FD('rope'));

  event.remove(S('rope_ladder'));

  event.shaped(S('rope_ladder', 4), ['R R', 'SSS', 'R R'], {
    R: FD('rope'),
    S: MC('stick'),
  });

  event.shaped(S('rope_ladder', 4), ['R R', 'SSS', 'R R'], {
    R: S('tangle_roots'),
    S: MC('stick'),
  });

  event.shaped(FD('flint_knife'), ['F', 'S'], {
    F: KJ('#flint'),
    S: MC('stick'),
  });

  event.shaped(MC('stone_axe'), ['FT', ' S'], {
    F: KJ('#flint'),
    T: FD('straw'),
    S: MC('stick'),
  });

  event.shaped(MC('stone_shovel'), ['F ', 'ST'], {
    F: KJ('#flint'),
    T: FD('straw'),
    S: MC('stick'),
  });

  event.shaped(MC('stone_pickaxe'), ['F ', 'TS'], {
    F: KJ('#flint'),
    T: FD('straw'),
    S: MC('stick'),
  });

  event.shaped(MC('iron_helmet'), ['SSS', 'S S'], {
    S: C('iron_sheet'),
  });

  event.shaped(MC('iron_chestplate'), ['S S', 'SSS', 'SSS'], {
    S: C('iron_sheet'),
  });

  event.shaped(MC('iron_leggings'), ['SSS', 'S S', 'S S'], {
    S: C('iron_sheet'),
  });

  event.shaped(MC('iron_boots'), ['S S', 'S S'], {
    S: C('iron_sheet'),
  });

  event.recipes
    .createSequencedAssembly([C('copper_casing')], C('andesite_casing'), [
      event.recipes.createDeploying(KJ('incomplete_copper_casing'), [
        KJ('incomplete_copper_casing'),
        KJ('rubber'),
      ]),
      event.recipes.createDeploying(KJ('incomplete_copper_casing'), [
        KJ('incomplete_copper_casing'),
        C('copper_sheet'),
      ]),
    ])
    .transitionalItem(KJ('incomplete_copper_casing'))
    .loops(3);

  event.recipes.createMilling(C('powdered_obsidian'), [MC('obsidian')]);

  event.recipes
    .createSequencedAssembly([C('brass_casing')], C('copper_casing'), [
      event.recipes.createDeploying(KJ('incomplete_brass_casing'), [
        KJ('incomplete_brass_casing'),
        C('precision_mechanism'),
      ]),
      event.recipes.createFilling(KJ('incomplete_brass_casing'), [
        KJ('incomplete_brass_casing'),
        Fluid.of(H('molten_brass'), 9000),
      ]),
    ])
    .transitionalItem(KJ('incomplete_brass_casing'))
    .loops(3);

  event.recipes
    .createSequencedAssembly([C('sturdy_sheet')], C('powdered_obsidian'), [
      event.recipes.createPressing(
        C('unprocessed_obsidian_sheet'),
        KJ('unprocessed_obsidian_sheet')
      ),
      event.recipes.createPressing(
        KJ('unprocessed_obsidian_sheet'),
        KJ('unprocessed_obsidian_sheet')
      ),
    ])
    .transitionalItem(C('unprocessed_obsidian_sheet'))
    .loops(2);

  event.recipes.createMixing(KJ('rubber'), [
    MC('bone_meal'),
    MC('bone_meal'),
    MC('bone_meal'),
    MC('bone_meal'),
    MC('dried_kelp'),
    MC('dried_kelp'),
    MC('dried_kelp'),
    MC('dried_kelp'),
  ]);

  event.shaped(KJ('andesite_compound'), ['BBB', 'AAA', 'CCC'], {
    A: C('zinc_nugget'),
    B: MC('andesite'),
    C: MC('clay_ball'),
  });

  event.shaped(KJ('andesite_compound'), ['BBB', 'AAA', 'CCC'], {
    A: MC('iron_nugget'),
    B: MC('andesite'),
    C: MC('clay_ball'),
  });

  event.shaped(KJ('rubber_block'), ['RRR', 'RRR', 'RRR'], {
    R: KJ('rubber'),
  });

  event.shaped(C('hose_pulley'), ['C', 'R', 'S'], {
    C: C('copper_casing'),
    R: KJ('rubber_block'),
    S: C('copper_sheet'),
  });

  event.shaped(C('spout'), ['C', 'R'], {
    C: C('copper_casing'),
    R: KJ('rubber'),
  });

  event.shaped(C('andesite_funnel'), ['A', 'R'], {
    A: C('andesite_alloy'),
    R: KJ('rubber'),
  });

  event.shaped(C('brass_funnel'), ['T', 'B', 'R'], {
    T: C('electron_tube'),
    B: C('brass_ingot'),
    R: KJ('rubber'),
  });

  event.shaped(C('andesite_tunnel'), ['AA', 'RR'], {
    A: C('andesite_alloy'),
    R: KJ('rubber'),
  });

  event.shaped(C('brass_tunnel'), ['T ', 'BB', 'RR'], {
    T: C('electron_tube'),
    B: C('brass_ingot'),
    R: KJ('rubber'),
  });

  event.shaped(C('brass_hand'), [' A ', 'RRR', ' R '], {
    A: C('andesite_alloy'),
    R: KJ('rubber'),
  });

  event.shaped(C('elevator_pulley'), ['C', 'R', 'S'], {
    C: C('brass_casing'),
    R: KJ('rubber_block'),
    S: C('iron_sheet'),
  });

  event.shaped(C('belt_connector', 2), ['RRR', 'RRR'], {
    R: KJ('rubber'),
  });

  event.recipes
    .createMixing(Fluid.of(H('molten_brass'), 18000), [
      Fluid.of(H('molten_zinc'), 9000),
      Fluid.of(H('molten_copper'), 9000),
    ])
    .superheated();

  event.smelting(C('andesite_alloy'), KJ('andesite_compound'));

  event.recipes.create.finalize();
});
