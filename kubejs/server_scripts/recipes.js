ServerEvents.recipes((event) => {
  addCreateRecipeHandler(event);

  event.replaceOutput({ output: SP('rope') }, SP('rope'), FD('rope'));

  console.log(Ingredient.of('/deepslate/'));

  // PATTERNS
  [
    {
      output: S('obsidian_hammer_and_chisel'),
      pattern: [' O ', 'SO ', ' SO'],
      key: {
        S: MC('stick'),
        O: DD('steel_ingot'),
      },
    },
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
      output: MM('ingot_mold'),
      pattern: ['I I', 'SSS'],
      key: {
        I: DD('steel_ingot'),
        S: DD('steel_sheet'),
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
        R: DD('rubber'),
      },
    },
    {
      output: C('hose_pulley'),
      pattern: ['C', 'R', 'S'],
      key: {
        C: C('copper_casing'),
        R: DD('rubber_block'),
        S: C('copper_sheet'),
      },
    },
    {
      output: C('spout'),
      pattern: ['C', 'R'],
      key: {
        C: C('copper_casing'),
        R: DD('rubber'),
      },
    },
    {
      output: C('andesite_funnel'),
      pattern: ['A', 'R'],
      key: {
        A: C('andesite_alloy'),
        R: DD('rubber'),
      },
    },
    {
      output: MC('bucket'),
      pattern: ['S S', ' S '],
      key: {
        S: C('iron_sheet'),
      },
    },
    {
      output: C('brass_funnel'),
      pattern: ['T', 'B', 'R'],
      key: {
        T: C('electron_tube'),
        B: C('brass_ingot'),
        R: DD('rubber'),
      },
    },
    {
      output: C('andesite_tunnel'),
      pattern: ['AA', 'RR'],
      key: {
        A: C('andesite_alloy'),
        R: DD('rubber'),
      },
    },
    {
      output: C('brass_tunnel'),
      pattern: ['T ', 'BB', 'RR'],
      key: {
        T: C('electron_tube'),
        B: C('brass_ingot'),
        R: DD('rubber'),
      },
    },
    {
      output: C('brass_hand'),
      pattern: [' A ', 'RRR', ' R '],
      key: {
        A: C('andesite_alloy'),
        R: DD('rubber'),
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
      output: MC('furnace'),
      pattern: ['BBB', 'B B', 'SSS'],
      key: {
        B: MC('brick'),
        S: CON('#raw_ores'),
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
    {
      output: MC('crafting_table'),
      pattern: ['AA', 'BB'],
      key: {
        A: MC('leather'),
        B: MC('#planks'),
      },
    },
    {
      output: KJ('copper_pickaxe'),
      pattern: ['CCC', ' S ', ' S '],
      key: {
        C: MC('copper_ingot'),
        S: MC('stick'),
      },
    },
    {
      output: KJ('copper_axe'),
      pattern: ['CC', 'CS', ' S'],
      key: {
        C: MC('copper_ingot'),
        S: MC('stick'),
      },
    },
    {
      output: KJ('copper_sword'),
      pattern: ['C', 'C', 'S'],
      key: {
        C: MC('copper_ingot'),
        S: MC('stick'),
      },
    },
    {
      output: KJ('copper_hoe'),
      pattern: ['CC', ' S', ' S'],
      key: {
        C: MC('copper_ingot'),
        S: MC('stick'),
      },
    },
    {
      output: KJ('copper_shovel'),
      pattern: ['C', 'S', 'S'],
      key: {
        C: MC('copper_ingot'),
        S: MC('stick'),
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
      superheated: true,
      output: Fluid.of(MM('molten_brass', 18000)),
      input: [
        Fluid.of(MM('molten_zinc'), 9000),
        Fluid.of(MM('molten_copper'), 9000),
      ],
    },
    {
      heated: true,
      output: Fluid.of(MM('molten_bronze', 36000)),
      input: [
        Fluid.of(MM('molten_tin'), 9000),
        Fluid.of(MM('molten_copper'), 27000),
      ],
    },
    {
      superheated: true,
      output: Fluid.of(MM('molten_steel', 9000)),
      input: [
        KJ('crushed_limestone'),
        MC('charcoal'),
        Fluid.of(MM('molten_iron'), 9000),
      ],
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
        DD('rubber'),
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
        Fluid.of(MM('molten_brass'), 9000),
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

  event.recipes.createFilling(C('electron_tube'), [
    C('polished_rose_quartz'),
    Fluid.of(MM('molten_gold'), 9000),
  ]);

  event.recipes.createPressing(
    Fluid.of(DD('flowing_sap'), 20250),
    DD('crystalized_sap')
  );

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
        tag: KJ('rubber_logs'),
      },
      result: {
        item: DD('crystallized_sap'),
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
      event.shapeless('2x ' + plank, [getLogTag(plank)]);
    }
  });

  // MELTING
  const meltableOres = [
    { metal: 'iron', heatRequirement: 'heated', tag: MC },
    { metal: 'copper', heatRequirement: 'heated', tag: MC },
    { metal: 'gold', heatRequirement: 'heated', tag: MC },
    { metal: 'zinc', heatRequirement: 'heated', tag: C },
    { metal: 'tin', heatRequirement: 'heated', tag: DD },
  ];

  meltableOres.forEach((e) => {
    event.custom({
      type: CBC('melting'),
      heatRequirement: e.heatRequirement,
      ingredients: [
        {
          item: e.tag(`raw_${e.metal}_block`),
        },
      ],
      processingTime: 1620,
      results: [
        {
          amount: 121500,
          fluid: MM(`molten_${e.metal}`),
        },
        {
          item: MM('slag_block'),
        },
      ],
    });

    event.custom({
      type: CBC('melting'),
      heatRequirement: e.heatRequirement,
      ingredients: [
        {
          item: e.tag(`raw_${e.metal}`),
        },
      ],
      processingTime: 180,
      results: [
        {
          amount: 13500,
          fluid: MM(`molten_${e.metal}`),
        },
        {
          item: MM('slag'),
        },
      ],
    });

    event.custom({
      type: CBC('melting'),
      heatRequirement: e.heatRequirement,
      ingredients: [
        {
          item:
            e.metal == 'tin'
              ? DD(`crushed_raw_${e.metal}`)
              : C(`crushed_raw_${e.metal}`),
        },
      ],
      processingTime: 180,
      results: [
        {
          amount: 13500,
          fluid: MM(`molten_${e.metal}`),
        },
        {
          item: MM('slag'),
        },
      ],
    });

    event.custom({
      type: CBC('melting'),
      heatRequirement: e.heatRequirement,
      ingredients: [
        {
          item:
            e.metal == 'tin'
              ? DD(`raw_${e.metal}_nugget`)
              : S(`raw_${e.metal}_nugget`),
        },
      ],
      processingTime: 20,
      results: [
        {
          amount: 1215,
          fluid: MM(`molten_${e.metal}`),
        },
        {
          item: MM('slag_nugget'),
        },
      ],
    });
  });

  const meltableBars = [
    { metal: 'iron', heatRequirement: 'heated', tag: MC },
    { metal: 'copper', heatRequirement: 'heated', tag: MC },
    { metal: 'gold', heatRequirement: 'heated', tag: MC },
    { metal: 'zinc', heatRequirement: 'heated', tag: C },
    { metal: 'tin', heatRequirement: 'heated', tag: DD },
    { metal: 'brass', heatRequirement: 'heated', tag: C },
    { metal: 'electrum', heatRequirement: 'heated', tag: CA },
    { metal: 'bronze', heatRequirement: 'heated', tag: DD },
    { metal: 'steel', heatRequirement: 'heated', tag: DD },
  ];

  meltableBars.forEach((e) => {
    event.custom({
      type: CBC('melting'),
      heatRequirement: e.heatRequirement,
      ingredients: [
        {
          item: e.tag(`${e.metal}_block`),
        },
      ],
      processingTime: 1620,
      results: [
        {
          amount: 81000,
          fluid: MM(`molten_${e.metal}`),
        },
      ],
    });

    event.custom({
      type: CBC('melting'),
      heatRequirement: e.heatRequirement,
      ingredients: [
        {
          item: e.tag(`${e.metal}_ingot`),
        },
      ],
      processingTime: 180,
      results: [
        {
          amount: 9000,
          fluid: MM(`molten_${e.metal}`),
        },
      ],
    });

    event.custom({
      type: CBC('melting'),
      heatRequirement: e.heatRequirement,
      ingredients: [
        {
          item:
            e.metal == 'copper'
              ? C(`${e.metal}_nugget`)
              : e.tag(`${e.metal}_nugget`),
        },
      ],
      processingTime: 20,
      results: [
        {
          amount: 810,
          fluid: MM(`molten_${e.metal}`),
        },
      ],
    });
  });

  const tools = [
    { tool: 'sword', liquid: 18000 },
    { tool: 'axe', liquid: 27000 },
    { tool: 'hoe', liquid: 18000 },
    { tool: 'shovel', liquid: 9000 },
    { tool: 'pickaxe', liquid: 27000 },
  ];

  const viableMetals = ['bronze', 'steel'];

  const firedMolds = ['ceramic', ''];

  tools.forEach((toolData) => {
    viableMetals.forEach((metal) => {
      firedMolds.forEach((mold) => {
        const moldItem = KJ(
          `${mold === 'ceramic' ? 'ceramic_' : ''}${toolData.tool}_mold`
        );
        const outputItem = KJ(`${metal}_${toolData.tool}_head`);

        event.shaped(KJ(`${metal}_${toolData.tool}`), ['H', 'S', 'P'], {
          H: KJ(`${metal}_${toolData.tool}_head`),
          S: MC('stick'),
          P: DD(`${metal}_nugget`),
        });

        event.recipes.createFilling(
          KJ(
            `molten_${metal}_${mold === 'ceramic' ? 'ceramic_' : ''}${
              toolData.tool
            }_mold`
          ),
          [moldItem, Fluid.of(MM(`molten_${metal}`), toolData.liquid)]
        );

        event.recipes.createEmptying(
          [moldItem, Fluid.of(MM(`molten_${metal}`), toolData.liquid)],
          KJ(
            `molten_${metal}_${mold === 'ceramic' ? 'ceramic_' : ''}${
              toolData.tool
            }_mold`
          )
        );

        if (mold === '') {
          event.custom({
            type: C('splashing'),
            ingredients: [
              Ingredient.of(
                KJ(`molten_${metal}_${toolData.tool}_mold`)
              ).toJson(),
            ],
            results: [
              { item: outputItem },
              {
                item: moldItem,
              },
            ],
          });
        } else {
          event.custom({
            type: C('splashing'),
            ingredients: [
              Ingredient.of(
                KJ(`molten_${metal}_ceramic_${toolData.tool}_mold`)
              ).toJson(),
            ],
            results: [
              { item: outputItem },
              {
                item: moldItem,
                chance: 0.8,
              },
            ],
          });
        }
      });
    });
  });

  firedMolds.forEach((mold) => {
    const moldItem = MM(`${mold === 'ceramic' ? 'ceramic_' : ''}ingot_mold`);
    const outputItem = C('andesite_alloy');

    event.recipes.createFilling(
      KJ(
        `molten_andesite_compound_${
          mold === 'ceramic' ? 'ceramic_' : ''
        }ingot_mold`
      ),
      [moldItem, Fluid.of(KJ(`molten_andesite_compound`), 9000)]
    );

    event.recipes.createEmptying(
      [moldItem, Fluid.of(KJ(`molten_andesite_compound`), 9000)],
      KJ(
        `molten_andesite_compound_${
          mold === 'ceramic' ? 'ceramic_' : ''
        }ingot_mold`
      )
    );

    if (mold === '') {
      event.custom({
        type: C('splashing'),
        ingredients: [
          Ingredient.of(KJ(`molten_andesite_compound_ingot_mold`)).toJson(),
        ],
        results: [
          { item: outputItem },
          {
            item: moldItem,
          },
        ],
      });
    } else {
      event.custom({
        type: C('splashing'),
        ingredients: [
          Ingredient.of(
            KJ(`molten_andesite_compound_ceramic_ingot_mold`)
          ).toJson(),
        ],
        results: [
          { item: outputItem },
          {
            item: moldItem,
            chance: 0.8,
          },
        ],
      });
    }
  });

  event.recipes.create.finalize();
});
