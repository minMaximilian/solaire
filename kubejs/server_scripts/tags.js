// Listen to item tag event
ServerEvents.tags('item', (event) => {
  event.remove(SP('ropes'), SP('rope'));
  event.remove(H('planklike'), S('conk_fungus'));
  event.remove(H('planks'), S('conk_fungus'));

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

  event.add(KJ('wood'), [
    MC('dark_oak_wood'),
    MC('oak_wood'),
    MC('acacia_wood'),
    MC('birch_wood'),
    MC('jungle_wood'),
    MC('spruce_wood'),
    MC('mangrove_wood'),
    MC('cherry_wood'),
    MC('crimson_hyphae'),
    MC('warped_hyphae'),
    NS('mahogany_wood'),
    NS('saxaul_wood'),
    NS('redwood_wood'),
    NS('aspen_wood'),
    NS('fir_wood'),
    NS('cypress_wood'),
    NS('coconut_wood'),
    NS('wisteria_wood'),
    NS('willow_wood'),
    NS('cedar_wood'),
    NS('sugi_wood'),
    NS('palo_verde_wood'),
    NS('olive_wood'),
    NS('ghaf_wood'),
    NS('maple_wood'),
    NS('larch_wood'),
    SPA('rotten_wood'),
    H('greenheart_wood'),
    H('skyroot_wood'),
    H('bloodshroom_wood'),
  ]);

  event.add(KJ('logs'), [
    MC('dark_oak_log'),
    MC('oak_log'),
    MC('acacia_log'),
    MC('birch_log'),
    MC('jungle_log'),
    MC('spruce_log'),
    MC('mangrove_log'),
    MC('cherry_log'),
    MC('crimson_stem'),
    MC('warped_stem'),
    NS('mahogany_log'),
    NS('saxaul_log'),
    NS('redwood_log'),
    NS('aspen_log'),
    NS('fir_log'),
    NS('cypress_log'),
    NS('coconut_log'),
    NS('wisteria_log'),
    NS('willow_log'),
    NS('cedar_log'),
    NS('sugi_log'),
    NS('palo_verde_log'),
    NS('olive_log'),
    NS('joshua_log'),
    NS('ghaf_log'),
    NS('maple_log'),
    NS('larch_log'),
    SPA('rotten_log'),
    H('greenheart_log'),
    H('skyroot_log'),
    H('bloodshroom_log'),
  ]);
});
