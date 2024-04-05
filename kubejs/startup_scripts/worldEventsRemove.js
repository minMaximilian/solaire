WorldgenEvents.remove((event) => {
  event.removeOres((props) => {
    props.blocks = [H('cobalt_ore'), ETC('nether_bismuth_ore')];
  });
});
