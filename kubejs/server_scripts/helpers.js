const MOD = (domain, id, x) =>
  (x ? `${x}x ` : '') +
  (id.startsWith('#') ? '#' : '') +
  domain +
  ':' +
  id.replace('#', '');

const MC = (id, x) => MOD(`minecraft`, id, x);
const F = (id, x) => MOD(`fabric`, id, x);
const CON = (id, x) => MOD(`c`, id, x);
const C = (id, x) => MOD(`create`, id, x);
const KJ = (id, x) => MOD(`kubejs`, id, x);
const H = (id, x) => MOD(`tconstruct`, id, x);
const S = (id, x) => MOD(`spelunkery`, id, x);
const ST = (id, x) => MOD(`sleep_tight`, id, x);
const ETC = (id, x) => MOD(`etcetera`, id, x);
const NTP = (id, x) => MOD(`notreepunching`, id, x);
const FD = (id, x) => MOD(`farmersdelight`, id, x);
const SP = (id, x) => MOD(`supplementaries`, id, x);
const BP = (id, x) => MOD(`beansbackpacks`, id, x);
const T = (id, x) => MOD(`twigs`, id, x);
const CA = (id, x) => MOD(`createaddition`, id, x);
const NS = (id, x) => MOD('natures_spirit', id, x);

// Steam n' Rails
// const R = (id, x) => MOD(`railways`, id, x)

const dyes = [
  'white',
  'light_gray',
  'gray',
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'cyan',
  'light_blue',
  'blue',
  'purple',
  'magenta',
  'pink',
];

const tool_tiers = [
  'wooden',
  'stone',
  'iron',
  'golden',
  'diamond',
  'netherite',
];

const armour_tiers = ['iron', 'golden', 'diamond', 'netherite'];

const tools = ['shovel', 'pickaxe', 'axe', 'hoe', 'sword'];

const armour = ['helmet', 'chestplate', 'leggings', 'boots'];
