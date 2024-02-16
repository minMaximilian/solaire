console.info('Compatability Script')

ServerEvents.recipes(recipes => {
	// Replace bismuth tool recipes to iron
	let tools = ['hammer', 'chisel', 'wrench']

	tools.map(tool =>
		recipes.replaceInput(
			{ id: ETC(tool) },
			ETC('bismuth_ingot'),
			MC('iron_ingot')
		)
	)
})
