StartupEvents.registry('block', (event) => {
  event.create('rubber_block');

  const tools = ['sword', 'axe', 'hoe', 'shovel', 'pickaxe'];

  const molds = ['unfired_ceramic', 'ceramic', ''];

  const viableMetals = ['bronze', 'steel'];

  const firedMolds = ['ceramic', ''];

  tools.forEach((tool) => {
    molds.forEach((mold) => {
      event.create(`${mold}${mold ? '_' : ''}${tool}_mold`);
    });
  });

  tools.forEach((tool) => {
    viableMetals.forEach((metal) => {
      firedMolds.forEach((mold) => {
        event.create(`molten_${metal}_${mold}${mold ? '_' : ''}${tool}_mold`);
      });
    });
  });
});
