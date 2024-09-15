StartupEvents.registry('item', (event) => {
  event.create('incomplete_copper_casing');
  event.create('incomplete_brass_casing');
  event.create('andesite_compound');
  event.create('crushed_limestone');

  event.create('copper_helmet', 'helmet').tier('copper');
  event.create('copper_chestplate', 'chestplate').tier('copper');
  event.create('copper_leggings', 'leggings').tier('copper');
  event.create('copper_boots', 'boots').tier('copper');

  event.create('bronze_helmet', 'helmet').tier('bronze');
  event.create('bronze_chestplate', 'chestplate').tier('bronze');
  event.create('bronze_leggings', 'leggings').tier('bronze');
  event.create('bronze_boots', 'boots').tier('bronze');

  event.create('steel_helmet', 'helmet').tier('steel');
  event.create('steel_chestplate', 'chestplate').tier('steel');
  event.create('steel_leggings', 'leggings').tier('steel');
  event.create('steel_boots', 'boots').tier('steel');

  const tools = ['sword', 'axe', 'hoe', 'shovel', 'pickaxe'];

  const viableMetals = ['bronze', 'steel'];

  tools.forEach((tool) => {
    viableMetals.forEach((metal) => {
      event.create(`${metal}_${tool}_head`);
    });
  });

  const newMetalTools = viableMetals.concat(['copper']);

  tools.forEach((tool) => {
    newMetalTools.forEach((metal) => {
      event.create(`${metal}_${tool}`, tool).tier(metal);
    });
  });
});
