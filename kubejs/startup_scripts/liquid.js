StartupEvents.registry('fluid', (event) => {
  const simpleLiquid = (name, hex) => {
    event.create(name).thickTexture(hex).noBucket().noBlock();
  };

  simpleLiquid('molten_andesite_compound', 0x9fa63b);
});
