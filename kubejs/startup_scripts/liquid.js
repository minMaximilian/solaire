StartupEvents.registry('fluid', (event) => {
  const simpleLiquid = (name, hex) => {
    event.create(name).thickTexture(hex).noBucket().noBlock();
  };

  simpleLiquid('rubber', 0x9fa63b);
  simpleLiquid('andesite_compound', 0x9fa63b);
});
