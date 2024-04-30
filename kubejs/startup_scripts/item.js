StartupEvents.registry('item', (event) => {
  event.create('incomplete_copper_casing');
  event.create('incomplete_brass_casing');
  event.create('andesite_compound');
  event.create('brass_helmet', 'helmet').tier('iron').maxDamage(330);
  event.create('brass_chesplate', 'chestplate').tier('iron').maxDamage(480);
  event.create('brass_leggings', 'leggings').tier('iron').maxDamage(450);
  event.create('brass_boots', 'boots').tier('iron').maxDamage(390);
});
