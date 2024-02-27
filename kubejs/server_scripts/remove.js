ServerEvents.recipes(recipes => {
	/**
	 *
	 * @param {String} item
	 */
	let remove = item => {
		recipes.remove({ output: item })
		recipes.replaceInput({ input: item }, item, MC('barrier'))
	}

	remove(ETC('dice'))
	remove(ETC('raw_bismuth'))
	remove(ETC('nether_bismuth_ore'))
	remove(ETC('turtle_raft'))
	remove(NTP('plant_fiber'))[
		('flint', 'iron', 'gold', 'diamond', 'netherite')
	].map(material => remove(NTP(`${material}_knife`)))
	remove(BP('metal_backpack'))
	remove(BP('upgraded_backpack'))
	// Once steam n' rails is added
	// remove(R("track_phantom"))
	// remove(R("track_ender_narrow"))
	// remove(R("track_ender"))
	// remove(R("track_ender_wide"))

	// Remove recipes for all vanilla tools (stone and wooden tools don't have another recipe)
	const tools = ['shovel', 'pickaxe', 'axe', 'hoe', 'sword']
	const materials = [
		'wooden',
		'stone',
		'iron',
		'golden',
		'diamond',
		'netherite'
	]

	materials.map(material =>
		tools.map(tool => recipes.remove({ output: MC(`${material}_${tool}`) }))
	)

	// Remove recipes for making raw ores from their nuggets
	const raw_ores = ['iron', 'gold', 'copper', 'zinc', 'magnetite']

	raw_ores.map(raw_ore => {
		recipes.remove({ id: S(`raw_${raw_ore}`) })
		recipes.remove({ id: S(`raw_${raw_ore}_nugget`) })
	})
	recipes.remove({ id: S('raw_magnetite_from_nuggets') }) // cause recipe ids dumb

	// Remove dough -> slime recipe
	recipes.remove({ id: C('crafting/appliances/slime_ball') })
})
