WorldgenEvents.remove((event) => {
  event.removeOres((props) => {
    props.blocks = [H('cobalt_ore')];
  });
});
