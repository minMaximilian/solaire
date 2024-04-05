// Listen to item tag event
ServerEvents.tags('item', (event) => {
  event.remove(SP('ropes'), SP('rope'));

  event.add(KJ('flint'), T('pebble'));
  event.add(KJ('flint'), MC('flint'));
});
