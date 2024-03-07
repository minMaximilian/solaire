// Listen to item tag event
ServerEvents.tags('item', tags => {
    event.remove(SP('ropes'), SP('rope'))

	tags
		.add(NTP('knives'), '#c:tools/knives')

		[
			('flint', 'iron', 'gold', 'diamond', 'netherite')
		].map(material => tags.removeAllTagsFrom(NTP(`${material}_knife`)))
})
