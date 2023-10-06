console.info('Misc Items')

StartupEvents.registry('item', items => {
  items.create('redstone_mechanism')
  items.create('incomplete_redstone_mechanism')

  items.create('impure_scrap')
  items.create('incomplete_electron_tube')
  items.create('defiled_gold')
  items.create('incomplete_super_glue')
})
