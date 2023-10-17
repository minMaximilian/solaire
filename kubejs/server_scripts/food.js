// console.info('Drink Recipes')

ServerEvents.recipes(e => {
//   let FillingAndEmptying = (drink, fluid, bottle) => {
//     e.recipes.create.filling(drink, [Fluid.of(fluid, 250), bottle])

//     e.recipes.create.emptying([Fluid.of(fluid, 250), bottle], drink)
//   }

//   // Melon Juice
//   e.recipes.create
//     .mixing(Fluid.of(KJ`sweet_melon_juice`, 250), [
//       Item.of('melon_slice', 2),
//       Fluid.water(250),
//       'sugar'
//     ])
//     .heated()

//   e.recipes.create
//     .mixing(Fluid.of(KJ`sweet_melon_juice`, 250), [
//       Fluid.of(OF`melon_juice`, 250),
//       'sugar'
//     ])
//     .heated()

//   e.recipes.create.compacting(
//     Fluid.of(CCK`melon_juice`, 1000),
//     OF`seedless_peeled_melon`
//   )

//   FillingAndEmptying(FD`melon_juice`, KJ`sweet_melon_juice`, 'glass_bottle')

//   // TODO: Brewing Recipe: No water + Sugar -> Sweet Melon Juice (Melon Juice as bottle), Heated

//   e.remove({ id: CCK`mixing/melon_juice` })
//   e.remove({ id: FD`melon_juice` })

//   // Sweet Berry Cheescake
//   e.recipes.create.mixing(Fluid.of(KJ`sweet_berry_filling`, 1000), [
//     Fluid.of('milk', 500),
//     Item.of('sweet_berries', 6)
//   ])

//   e.recipes.create.filling(FD`sweet_berry_cheesecake`, [
//     Fluid.of(KJ`sweet_berry_filling`, 1000),
//     FD`pie_crust`
//   ])

//   e.remove({ id: CCK`sequenced_assembly/sweet_berry_cheesecake` })
//   e.remove({ id: FD`sweet_berry_cheesecake_from_slices` })

//   // Rose Hip Pie
//   e.recipes.create.mixing(Fluid.of(KJ`rose_hip_filling`, 1000), [
//     Fluid.of('milk', 500),
//     Fluid.of('honey', 250),
//     Item.of(FR`rose_hips`, 3)
//   ])

//   e.recipes.create.filling(FR`rose_hip_pie`, [
//     Fluid.of(KJ`rose_hip_filling`, 1000),
//     FD`pie_crust`
//   ])

//   e.remove({ id: FD`rose_hip_pie_from_slices` })

//   // Ruby Chocolate
//   e.recipes.create.mixing(Fluid.of(CCF`ruby_chocolate`, 250), [
//     Fluid.of('milk', 250),
//     Fluid.of(KJ`dragon_breath`, 250),
//     'sugar',
//     'cocoa_beans'
//   ])

//   e.remove({ id: CCF`ruby_chocolate_recipe` })

//   // Brewin' and Chewin' Drinks
//   ;[
//     'beer',
//     'bloody_mary',
//     'dread_nog',
//     'egg_grog',
//     'glittering_grenadine',
//     'kombucha',
//     'mead',
//     'pale_jane',
//     'red_rum',
//     'rice_wine',
//     'saccharine_rum',
//     'salty_folly',
//     'steel_toe_stout',
//     'strongroot_ale',
//     'vodka',
//     'withering_dross'
//   ].map(drink =>
//     FillingAndEmptying(BC(`${drink}`), KJ(`${drink}`), BC`tankard`)
//   )
//   // KJS Drinks
//   ;['vinegar', 'soy_sauce'].map(drink =>
//     FillingAndEmptying(KJ(`${drink}`), KJ(`${drink}`), BC`tankard`)
//   )

//   // Cakes, big thing here
//   e.remove({ id: GO`butter` })

//   e.recipes.create.mixing(GO`butter`, Fluid.of(CDD`cream`, 250))

//   e.remove({ id: GO`batter` })

//   e.recipes.create.mixing(Fluid.of(GO`batter`, 1000), [
//     Fluid.of('milk', 500),
//     Fluid.of(CDD`vanilla`, 50),
//     Item.of(GO`butter`, 2),
//     Item.of('#forge:eggs', 2),
//     Item.of('sugar', 2),
//     Item.of(FD`wheat_dough`),
//     S`salt`
//   ])

//   e.remove({ id: CCA`compacting/cake_base` })

//   e.recipes.create.compacting(CCA`cake_base`, [Fluid.of(GO`batter`, 500)])

//   e.remove({ id: NA`cake` })
//   e.remove({ id: C`crafting/curiosities/cake` })
//   e.remove({ id: FD`cake_from_milk_bottle` })
//   e.remove({ id: NE`cake` })
//   e.remove({ id: 'cake' })

//   e.remove({ output: CCA`chocolate_cake` })
//   e.remove({ id: CCK`chocolate_cake_from_dough` })
//   e.remove({ id: CCK`compacting/chocolate_cake` })
//   e.remove({ id: CCK`compacting/chocolate_cake_from_fluid_chocolate` })
//   e.remove({ id: NE`chocolate/chocolate_cake` })

//   e.recipes.create.filling(NE`chocolate_cake`, [
//     Fluid.of(C`chocolate`, 500),
//     CCA`cake_base_baked`
//   ])

//   e.recipes.create.filling(FR`coffee_cake`, [
//     Fluid.of(CCK`coffee`, 250),
//     CCA`cake_base_baked`
//   ])

//   // Milkshakes
//   let Milkshake = flavor => {
//     e.remove({ id: CDD(`mixing/${flavor}_milkshake`) })
//     e.recipes.create.mixing(Fluid.of(CDD(`${flavor}_milkshake`)), [
//       Fluid.of(CDD`cream`, 250),
//       Fluid.of(CDD(`${flavor}`)),
//       Item.of('sugar', 2),
//       GO`ice_cube`
//     ])
//   }

//   ;['strawberry', 'glowberry', 'vanilla', 'caramel'].map(flavor =>
//     Milkshake(flavor)
//   )

//   e.remove({ id: CDD(`mixing/chocolate_milkshake`) })
//   e.recipes.create.mixing(Fluid.of(CDD(`chocolate_milkshake`)), [
//     Fluid.of(CDD`cream`, 250),
//     Fluid.of(C(`chocolate`)),
//     Item.of('sugar', 2),
//     GO`ice_cube`
//   ])
})
