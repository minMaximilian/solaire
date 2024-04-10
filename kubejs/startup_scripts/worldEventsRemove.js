WorldgenEvents.remove((event) => {
  event.removeOres((props) => {
    props.blocks = [];
  });
});
