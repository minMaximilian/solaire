console.info('Remove Script')

ServerEvents.recipes(e => {

	// Remove recipes for all vanilla tools (stone and wooden tools don't have another recipe)
	const tools = ["shovel", "pickaxe", "axe", "hoe", "sword"];
	const materials = ["wooden", "stone", "iron", "golden", "diamond", "netherite"];

	materials.map(material => tools.map(tool => e.remove({output: MC(`${material}_${tool}`)})))

	const raw_ores = ["iron", "gold", "copper", "zinc", "magnetite"]

	raw_ores.map(raw_ore => {
		e.remove({id: S(`raw_${raw_ore}`)}) 
		e.remove({id: S(`raw_${raw_ore}_nugget`)})
	})
	e.remove({id: S("raw_magnetite_from_nuggets")}) // cause recipe ids dumb
})