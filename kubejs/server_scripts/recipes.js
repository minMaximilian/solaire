ServerEvents.recipes((event) => {
  addCreateRecipeHandler(event);

  event.replaceOutput({ output: SP('rope') }, SP('rope'), FD('rope'));

  // PATTERNS
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
    {
      output: MC('furnace'),
      pattern: ['BBB', 'B B', 'SSS'],
      key: {
        B: MC('brick'),
        S: MC('#stone_tool_materials'),
      },
    },
    {
      output: MC('blast_furnace'),
      pattern: ['BBB', 'BFB', 'SSS'],
      key: {
        B: CON('#raw_ores'),
        S: MC('smooth_stone'),
        F: MC('furnace'),
      },
    },
    {
      output: MC('blast_furnace'),
      pattern: ['BBB', 'BFB', 'SSS'],
      key: {
        B: CON('#raw_ores'),
        S: MC('smooth_basalt'),
        F: MC('furnace'),
      },
    },
    {
      output: C('schematicannon'),
      pattern: [' B ', 'LBL', 'CDC'],
      key: {
        B: C('brass_block'),
        L: MC('#logs'),
        C: C('brass_casing'),
        D: MC('dispenser'),
      },
    },
    {
      output: C('track', 2),
      pattern: ['NNN', 'NNN', 'SSS'],
      key: {
        N: C('zinc_nugget'),
        S: C('#sleepers'),
      },
    },
    {
      output: C('track', 2),
      pattern: ['NNN', 'NNN', 'SSS'],
      key: {
        N: MC('iron_nugget'),
        S: C('#sleepers'),
      },
    },
    {
      output: C('cogwheel'),
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: MC('#wooden_buttons'),
        B: C('shaft'),
      },
    },
    {
      output: C('large_cogwheel'),
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: MC('#planks'),
        B: C('cogwheel'),
      },
    },
  ].forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key);
  });

  // MIXING
  [
    {
      output: KJ('rubber'),
      input: [KJ('sap')],
    },
    {
      output: Fluid.of(H('molten_brass'), 18000),
      input: [
        Fluid.of(H('molten_zinc'), 9000),
        Fluid.of(H('molten_copper'), 9000),
      ],
      heated: true,
    },
    {
      output: Fluid.of(H('molten_rose_gold'), 18000),
      input: [
        Fluid.of(H('molten_gold'), 9000),
        Fluid.of(H('molten_copper'), 9000),
      ],
    },
    {
      output: Fluid.of(H('molten_obsidian'), 8100),
      input: [Fluid.of(MC('lava'), 8100), Fluid.of(MC('water'), 4050)],
    },
    {
      output: Fluid.of(H('molten_obsidian'), 20250),
      input: [Fluid.of(MC('lava'), 20250), Fluid.of(H('mushroom_stew'), 20250)],
    },
    {
      output: Fluid.of(H('molten_amethyst_bronze'), 9000),
      input: [
        Fluid.of(H('molten_amethyst'), 8100),
        Fluid.of(H('molten_copper'), 9000),
      ],
    },
    {
      output: Fluid.of(H('molten_pig_iron'), 18000),
      input: [
        Fluid.of(CON('honey'), 27000),
        Fluid.of(H('molten_iron'), 9000),
        Fluid.of(H('blood'), 40500),
      ],
    },
    {
      output: Fluid.of(H('molten_slimesteel'), 18000),
      input: [
        Fluid.of(H('seared_stone'), 20250),
        Fluid.of(H('sky_slime'), 20250),
        Fluid.of(H('molten_iron'), 9000),
      ],
    },
    {
      output: Fluid.of(H('molten_netherite'), 972),
      input: [
        Fluid.of(H('molten_debris'), 1944),
        Fluid.of(H('molten_gold'), 3969),
      ],
      superheated: true,
    },
    {
      output: Fluid.of(H('molten_manyullyn'), 972),
      input: [
        Fluid.of(H('molten_debris'), 9000),
        Fluid.of(H('molten_cobalt'), 27000),
      ],
      superheated: true,
    },
    {
      output: Fluid.of(H('molten_hepatizon'), 972),
      input: [
        Fluid.of(H('molten_cobalt'), 9000),
        Fluid.of(H('molten_copper'), 18000),
        Fluid.of(H('molten_quartz'), 32400),
      ],
      superheated: true,
    },
    {
      output: Fluid.of(H('molten_queens_slime'), 18000),
      input: [
        Fluid.of(H('magma'), 20250),
        Fluid.of(H('molten_gold'), 9000),
        Fluid.of(H('molten_cobalt'), 9000),
      ],
      superheated: true,
    },
    {
      output: Fluid.of(KJ('molten_andesite_compound'), 9000),
      input: [MC('iron_nugget'), MC('andesite'), MC('clay_ball')],
    },
    {
      output: Fluid.of(KJ('molten_andesite_compound'), 9000),
      input: [C('zinc_nugget'), MC('andesite'), MC('clay_ball')],
    },
  ].forEach((recipe) => {
    if (recipe.superheated) {
      event.recipes.createMixing(recipe.output, recipe.input).superheated();
    } else if (recipe.heated) {
      event.recipes.createMixing(recipe.output, recipe.input).heated();
    } else {
      event.recipes.createMixing(recipe.output, recipe.input);
    }
  });

  // ITEM APPLICATION
  [
    {
      output: C('railway_casing'),
      input: [CON('#stripped_logs'), C('sturdy_sheet')],
    },
    {
      output: C('railway_casing'),
      input: [CON('#stripped_wood'), C('sturdy_sheet')],
    },
  ].forEach((recipe) => {
    event.recipes.createItemApplication(recipe.output, recipe.input);
  });

  // SMELTING
  [
    {
      output: KJ('rubber'),
      input: KJ('sap'),
    },
    {
      output: C('andesite_alloy'),
      input: KJ('andesite_compound'),
    },
  ].forEach((recipe) => {
    event.smelting(recipe.output, recipe.input);
  });

  // MILLING
  [
    {
      output: C('powdered_obsidian'),
      input: [MC('obsidian')],
    },
  ].forEach((recipe) => {
    event.recipes.createMilling(recipe.output, recipe.input);
  });

  // CAMPFIRE
  [
    {
      output: MC('brick'),
      input: MC('clay_ball'),
    },
  ].forEach((recipe) => {
    event.campfireCooking(recipe.output, recipe.input);
  });

  // ASSEMBLY
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

  // CUTTING
  const addStripped = (str) => str.replace(/:/, ':stripped_');

  const strippedToPlanks = (str) =>
    str.replace(/stripped_(.+)_(log|wood)|hyphae/, '$1_planks');

  Ingredient.of(KJ('#logs'))
    .itemIds.concat(Ingredient.of(KJ('#wood')).itemIds)
    .forEach((log) => {
      event.recipes.createCutting(addStripped(log), log);
      event.recipes.createCutting(
        '6x ' + strippedToPlanks(addStripped(log)),
        addStripped(log)
      );
    });

  // CUSTOM
  event
    .custom({
      type: CA('rolling'),
      input: {
        tag: NS('maple_logs'),
      },
      result: {
        item: KJ('sap'),
        count: 1,
      },
    })
    .id(CA('rolling/sap'));

  // PLANKS
  const blacklist = [
    SPA('cracked_rotten_planks'),
    MC('crimson_planks'),
    MC('warped_planks'),
  ];

  const getLogTag = (plankId) =>
    plankId.endsWith('_planks')
      ? `#${plankId.split(':')[0]}:${plankId
          .split(':')[1]
          .replace('_planks', '_logs')}`
      : null;

  Ingredient.of(MC('#planks')).itemIds.forEach((plank) => {
    if (!blacklist.includes(plank)) {
      console.log(plank);
      event.shapeless('2x ' + plank, [getLogTag(plank)]);
    }
  });

  event.custom({
    type: H('retextured_casting_basin'),
    cast: {
      tag: H('smeltery_bricks'),
    },
    cast_consumed: true,
    cooling_time: 100,
    fluid: {
      amount: 81000,
      tag: H('molten_brass'),
    },
    result: H('smeltery_controller'),
  });

  event.recipes.create.finalize();
});
