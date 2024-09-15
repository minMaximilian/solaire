console.info('Block Modification');

BlockEvents.modification((e) => {
  let planks = BlockStatePredicate.of(/.*_planks/).blockIds;

  let shutters = BlockStatePredicate.of(/.*shutter/).blockIds;

  const woodTypes = planks
    .filter((e) => e != SPA('cracked_rotten_planks'))
    .map((id) => {
      const plankMaterial = new String(id.toString()).replace('_planks', '');
      const [modId, woodType] = plankMaterial.split(':');
      return {
        tag: modId,
        wood: woodType,
      };
    });

  woodTypes.forEach((woodType) => {
    const woodsToRemove = [
      `${woodType.tag}:${woodType.wood}_${
        woodType.wood === 'warped' || woodType.wood === 'crimson'
          ? 'stem'
          : 'log'
      }`,
      `${woodType.tag}:${woodType.wood}_${
        woodType.wood === 'warped' || woodType.wood === 'crimson'
          ? 'hyphae'
          : 'wood'
      }`,
      `${woodType.tag}:stripped_${woodType.wood}_${
        woodType.wood === 'warped' || woodType.wood === 'crimson'
          ? 'stem'
          : 'log'
      }`,
      `${woodType.tag}:stripped_${woodType.wood}_${
        woodType.wood === 'warped' || woodType.wood === 'crimson'
          ? 'hyphae'
          : 'wood'
      }`,
    ];

    const blockPredicates = [
      `${woodType.wood}_beam`,
      `${woodType.wood}_plank_secret_button`,
      `${woodType.wood}_large_button`,
      `sign_post_${woodType.wood}`,
      `tall_${woodType.wood}_door`,
      `short_${woodType.wood}_door`,
      `${woodType.wood}_cabinet`,
      `${woodType.wood}_table`,
      `${woodType.wood}_palisade`,
      `${woodType.wood}_seat`,
      `${woodType.wood}_support`,
      `item_shelf_${woodType.wood}`,
    ];

    const blockIds = [
      `${woodType.tag}:${woodType.wood}_slab`,
      `${woodType.tag}:${woodType.wood}_button`,
      `${woodType.tag}:${woodType.wood}_fence`,
      `${woodType.tag}:${woodType.wood}_pressure_plate`,
      `${woodType.tag}:${woodType.wood}_fence_gate`,
      `${woodType.tag}:${woodType.wood}_stairs`,
      `${woodType.tag}:${woodType.wood}_door`,
      `${woodType.tag}:${woodType.wood}_trapdoor`,
      `${woodType.tag}:${woodType.wood}_planks`,
    ];

    const finalModificationList = woodsToRemove
      .concat(blockIds)
      .concat(
        blockPredicates.map((predicate) => BlockStatePredicate.of(predicate))
      )
      .concat(shutters);

    finalModificationList.forEach((id) => {
      console.log(id);
      e.modify(id, (block) => {
        block.setRequiresTool(true);
      });
    });
  });

  // No tags in start_up scripts
  const misc = [
    S('conk_fungus'),
    SPA('cracked_rotten_planks'),
    EC('all_woods'),
  ];

  misc.forEach((log) => {
    e.modify(log, (block) => {
      block.setRequiresTool(true);
    });
  });
});
