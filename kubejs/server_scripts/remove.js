
ServerEvents.recipes(event => {
	const tools = ["shovel", "pickaxe", "axe", "hoe", "sword"];
	const materials = ["wooden", "stone", "iron", "golden", "diamond", "netherite"];

	materials.map(material => tools.map(tool => event.remove({output: MC(`${material}_${tool}`)})))
})