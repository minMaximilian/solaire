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
const CD = (id, x) => MOD(`createdeco`, id, x);
const KJ = (id, x) => MOD(`kubejs`, id, x);
const MM = (id, x) => MOD(`molten_metals`, id, x);
const DD = (id, x) => MOD(`create_dd`, id, x);
const DEC = (id, x) => MOD(`design_decor`, id, x);
const BB = (id, x) => MOD('beansbackpacks', id, x);
const CBC = (id, x) => MOD('createbigcannons', id, x);
const S = (id, x) => MOD(`spelunkery`, id, x);
const ST = (id, x) => MOD(`sleep_tight`, id, x);
const ETC = (id, x) => MOD(`etcetera`, id, x);
const NTP = (id, x) => MOD(`notreepunching`, id, x);
const FD = (id, x) => MOD(`farmersdelight`, id, x);
const SP = (id, x) => MOD(`supplementaries`, id, x);
const SPA = (id, x) => MOD(`spawn`, id, x);
const BP = (id, x) => MOD(`beansbackpacks`, id, x);
const T = (id, x) => MOD(`twigs`, id, x);
const CA = (id, x) => MOD(`createaddition`, id, x);
const CC = (id, x) => MOD(`computercraft`, id, x);
const NS = (id, x) => MOD('natures_spirit', id, x);
const DOOR = (id, x) => MOD('dramaticdoors', id, x);
const SH = (id, x) => MOD('shutter', id, x);

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

const tool_tiers = ['stone', 'iron'];

const armour_tiers = ['iron'];

const tools = ['shovel', 'pickaxe', 'axe', 'hoe', 'sword'];

const armour = ['helmet', 'chestplate', 'leggings', 'boots'];
