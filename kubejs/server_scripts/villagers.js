MoreJSEvents.villagerTrades((event) => {
  [1, 2, 3, 4, 5].forEach((i) => {
    event.removeVanillaTrades([MC('weaponsmith')], i);
  });
  event.removeVanillaTrades([MC('armorer')], 4);
  event.removeVanillaTrades([MC('armorer')], 5);
  event.removeModdedTrades();
});
