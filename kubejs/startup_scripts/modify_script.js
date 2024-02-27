console.info('Item Modification')

ItemEvents.modification(items => {
	items.modify(MC('glistering_melon_slice'), item => {
		item.setFoodProperties(food => {
			food
				.hunger(3)
				.saturation(4)
				.meat(false)
				.alwaysEdible(false)
				.effect(MC('regeneration'), 300, 0, 1)
		})
	})
	items.modify(MC('fermented_spider_eye'), item => {
		item.setFoodProperties(food => {
			food
				.hunger(1)
				.saturation(0)
				.meat(false)
				.alwaysEdible(false)
				.effect(MC('weakness'), 1200, 1, 1)
		})
	})
})

BlockEvents.modification(blocks => {
	blocks.modify(MC('deepslate'), block => {
		block.destroySpeed = 6
    // block.explosionResistance = 6
	})
})
