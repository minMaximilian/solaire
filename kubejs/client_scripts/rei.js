REIEvents.hide('item', (event) => {
  Ingredient.of(KJ('#bloat')).itemIds.forEach((e) => {
    event.hide(e);
  });
});
