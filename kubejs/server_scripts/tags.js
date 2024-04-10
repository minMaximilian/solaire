// Listen to item tag event
ServerEvents.tags('item', (event) => {
  event.remove(SP('ropes'), SP('rope'));

  event.add(KJ('flint'), T('pebble'));
  event.add(KJ('flint'), MC('flint'));
  event.add(CON('brass_ingots'), C('brass_ingot'));
  event.add(CON('tools/pickaxes'), H('pickaxe'));
  event.add(CON('tools/pickaxes'), H('sledge_hammer'));
  event.add(CON('tools/pickaxes'), H('vein_hammer'));
  event.add(CON('tools/axes'), H('broad_axe'));
  event.add(CON('tools/axes'), H('hand_axe'));
  event.add(CON('tools/knives'), H('dagger'));
  event.add(CON('tools/shovels'), H('excavator'));
  event.add(CON('slimeballs'), KJ('sap'));
  event.add(MC('shovels'), H('excavator'));
  event.add(MC('hoes'), H('scythe'));
  event.add(F('tools/hoes'), H('scythe'));
});
