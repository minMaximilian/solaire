ItemEvents.armorTierRegistry((event) => {
  event.add('copper', (tier) => {
    tier.durabilityMultiplier = 5;
    tier.slotProtections = [2, 5, 6, 2];
    tier.enchantmentValue = 0;
    tier.equipSound = MC('item.armor.equip_iron');
    tier.repairIngredient = MC('copper_ingot');
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });

  event.add('bronze', (tier) => {
    tier.durabilityMultiplier = 10;
    tier.slotProtections = [2, 5, 6, 2];
    tier.enchantmentValue = 0;
    tier.equipSound = MC('item.armor.equip_iron');
    tier.repairIngredient = DD('bronze_ingot');
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });

  event.add('steel', (tier) => {
    tier.durabilityMultiplier = 15;
    tier.slotProtections = [2, 5, 6, 2];
    tier.enchantmentValue = 0;
    tier.equipSound = MC('item.armor.equip_iron');
    tier.repairIngredient = DD('steel_ingot');
    tier.toughness = 2.0;
    tier.knockbackResistance = 1.0;
  });
});
