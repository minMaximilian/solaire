<<<<<<< HEAD
// Listen to item tag event
ServerEvents.tags('item', tags => {
    tags.remove(SP('ropes'), SP('rope'))

	tags
		.add(NTP('knives'), '#c:tools/knives')

		[
			('flint', 'iron', 'gold', 'diamond', 'netherite')
		].map(material => tags.removeAllTagsFrom(NTP(`${material}_knife`)))
})
=======
// Listen to item tag event
ServerEvents.tags('item', tags => {
    event.remove(SP('ropes'), SP('rope'))

	tags
		.add(NTP('knives'), '#c:tools/knives')

		[
			('flint', 'iron', 'gold', 'diamond', 'netherite')
		].map(material => tags.removeAllTagsFrom(NTP(`${material}_knife`)))
})
>>>>>>> 16658b754d9728c4f14b23c45160d77d6a12374d
