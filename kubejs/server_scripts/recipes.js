ServerEvents.recipes(recipes => {
	// Replace bismuth tool recipes to iron
	// let tools = ['hammer', 'chisel', 'wrench']

	// tools.map(tool =>
	// 	recipes.replaceInput(
	// 		{ id: ETC(tool) },
	// 		ETC('bismuth_ingot'),
	// 		MC('iron_ingot')
	// 	)
	// )

	recipes.replaceOutput({ output: SP('rope') }, SP('rope'), FD('rope'))

	recipes.remove(S('rope_ladder'))

	recipes.shaped(`4x ${S('rope_ladder')}`, ['R R', 'SSS', 'R R'], {
		R: FD('rope'),
		S: MC('stick')
	})

	recipes.shaped(`4x ${S('rope_ladder')}`, ['R R', 'SSS', 'R R'], {
		R: S('tangle_roots'),
		S: MC('stick')
	})
})
