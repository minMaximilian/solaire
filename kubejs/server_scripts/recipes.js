ServerEvents.recipes((event) => {
  addCreateRecipeHandler(event);

  event.replaceOutput({ output: SP('rope') }, SP('rope'), FD('rope'));

  [
    {
      output: KJ('andesite_compound'),
      pattern: ['BBB', 'AAA', 'CCC'],
      key: {
        A: C('zinc_nugget'),
        B: MC('andesite'),
        C: MC('clay_ball'),
      },
    },
    {
      output: KJ('andesite_compound'),
      pattern: ['BBB', 'AAA', 'CCC'],
      key: {
        A: MC('iron_nugget'),
        B: MC('andesite'),
        C: MC('clay_ball'),
      },
    },
    {
      output: KJ('rubber_block'),
      pattern: ['RRR', 'RRR', 'RRR'],
      key: {
        R: KJ('rubber'),
      },
    },
    {
      output: C('hose_pulley'),
      pattern: ['C', 'R', 'S'],
      key: {
        C: C('copper_casing'),
        R: KJ('rubber_block'),
        S: C('copper_sheet'),
      },
    },
    {
      output: C('spout'),
      pattern: ['C', 'R'],
      key: {
        C: C('copper_casing'),
        R: KJ('rubber'),
      },
    },
    {
      output: C('andesite_funnel'),
      pattern: ['A', 'R'],
      key: {
        A: C('andesite_alloy'),
        R: KJ('rubber'),
      },
    },
    {
      output: C('brass_funnel'),
      pattern: ['T', 'B', 'R'],
      key: {
        T: C('electron_tube'),
        B: C('brass_ingot'),
        R: KJ('rubber'),
      },
    },
    {
      output: C('andesite_tunnel'),
      pattern: ['AA', 'RR'],
      key: {
        A: C('andesite_alloy'),
        R: KJ('rubber'),
      },
    },
    {
      output: C('brass_tunnel'),
      pattern: ['T ', 'BB', 'RR'],
      key: {
        T: C('electron_tube'),
        B: C('brass_ingot'),
        R: KJ('rubber'),
      },
    },
    {
      output: C('brass_hand'),
      pattern: [' A ', 'RRR', ' R '],
      key: {
        A: C('andesite_alloy'),
        R: KJ('rubber'),
      },
    },
    {
      output: C('elevator_pulley'),
      pattern: ['C', 'R', 'S'],
      key: {
        C: C('brass_casing'),
        R: KJ('rubber_block'),
        S: C('iron_sheet'),
      },
    },
    {
      output: C('belt_connector', 2),
      pattern: ['RRR', 'RRR'],
      key: {
        R: KJ('rubber'),
      },
    },
    {
      output: S('rope_ladder', 4),
      pattern: ['R R', 'SSS', 'R R'],
      key: {
        R: FD('rope'),
        S: MC('stick'),
      },
    },
    {
      output: S('rope_ladder', 4),
      pattern: ['R R', 'SSS', 'R R'],
      key: {
        R: S('tangle_roots'),
        S: MC('stick'),
      },
    },
    {
      output: FD('flint_knife'),
      pattern: ['F', 'S'],
      key: {
        F: KJ('#flint'),
        S: MC('stick'),
      },
    },
    {
      output: MC('stone_axe'),
      pattern: ['FT', ' S'],
      key: {
        F: KJ('#flint'),
        T: FD('straw'),
        S: MC('stick'),
      },
    },
    {
      output: MC('stone_shovel'),
      pattern: ['F ', 'ST'],
      key: {
        F: KJ('#flint'),
        T: FD('straw'),
        S: MC('stick'),
      },
    },
    {
      output: MC('stone_pickaxe'),
      pattern: ['F ', 'TS'],
      key: {
        F: KJ('#flint'),
        T: FD('straw'),
        S: MC('stick'),
      },
    },
    {
      output: MC('iron_helmet'),
      pattern: ['SSS', 'S S'],
      key: {
        S: C('iron_sheet'),
      },
    },
    {
      output: MC('iron_chestplate'),
      pattern: ['S S', 'SSS', 'SSS'],
      key: {
        S: C('iron_sheet'),
      },
    },
    {
      output: MC('iron_leggings'),
      pattern: ['SSS', 'S S', 'S S'],
      key: {
        S: C('iron_sheet'),
      },
    },
    {
      output: MC('iron_boots'),
      pattern: ['S S', 'S S'],
      key: {
        S: C('iron_sheet'),
      },
    },
  ].forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key);
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

  event.recipes.createMilling(C('powdered_obsidian'), [MC('obsidian')]);

  event.recipes.createItemApplication(C('railway_casing'), [
    CON('stripped_logs'),
    C('sturdy_sheet'),
  ]);

  event.recipes.createItemApplication(C('railway_casing'), [
    CON('stripped_wood'),
    C('sturdy_sheet'),
  ]);

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

  event.recipes
    .createMixing(Fluid.of(H('molten_brass'), 18000), [
      Fluid.of(H('molten_zinc'), 9000),
      Fluid.of(H('molten_copper'), 9000),
    ])
    .superheated();

  event.smelting(C('andesite_alloy'), KJ('andesite_compound'));

  event.recipes.create.finalize();
});
