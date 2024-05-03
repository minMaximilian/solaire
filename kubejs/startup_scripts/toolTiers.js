ItemEvents.toolTierRegistry((event) => {
  event.add('copper', (tier) => {
    tier.uses = 250;
    tier.speed = 4.0;
    tier.attackDamageBonus = 1.0;
    tier.level = 1;
    tier.enchantmentValue = 0;
    tier.repairIngredient = MC('copper_ingot');
  });

  event.add('bronze', (tier) => {
    tier.uses = 500;
    tier.speed = 5.0;
    tier.attackDamageBonus = 2.0;
    tier.level = 2;
    tier.enchantmentValue = 0;
    tier.repairIngredient = DD('bronze_ingot');
  });

  event.add('steel', (tier) => {
    tier.uses = 1500;
    tier.speed = 6.0;
    tier.attackDamageBonus = 3.0;
    tier.level = 3;
    tier.enchantmentValue = 0;
    tier.repairIngredient = DD('steel_ingot');
  });
});
