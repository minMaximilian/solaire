console.info('Remove Script')

ServerEvents.recipes(e => {
	// // Remove recipes for all vanilla tools (stone and wooden tools don't have another recipe)
	// const tools = ["shovel", "pickaxe", "axe", "hoe", "sword"];
	// const materials = ["wooden", "stone", "iron", "golden", "diamond", "netherite"];
	// materials.map(material => tools.map(tool => e.remove({output: MC(`${material}_${tool}`)})))

	// // Remove recipes for raw ore into raw ore nuggets
	// const rawOres = ["iron", "gold", "copper", "zinc", "magnetite"]
	// rawOres.map(raw_ore => {
	// 	e.remove({id: S(`raw_${raw_ore}`)}) 
	// 	e.remove({id: S(`raw_${raw_ore}_nugget`)})
	// })
	// e.remove({id: S("raw_magnetite_from_nuggets")})
})

function removeItemRecipes (item) {
	ServerEvents.recipes(e => {
	e.remove({input: item})
	e.remove({output: item})
	})
}

// Bismuth Stuff
global.remove.map(item => removeItemRecipes(item))