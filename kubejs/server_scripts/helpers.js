const MOD = (domain, id, x) =>
  (x ? `${x}x ` : '') +
  (id.startsWith('#') ? '#' : '') +
  domain +
  ':' +
  id.replace('#', '')

const MC = (id, x) => MOD(`minecraft`, id, x)
const C = (id, x) => MOD(`create`, id, x)
const KJ = (id, x) => MOD(`kubejs`, id, x)
const H = (id, x) => MOD(`tconstruct`, id, x)
const S = (id, x) => MOD(`spelunkery`, id, x)
const ST = (id, x) => MOD(`sleep_tight`, id, x)
const ETC = (id, x) => MOD(`etcetera`, id, x)
const NTP = (id, x) => MOD(`notreepunching`, id, x)
const FD = (id, x) => MOD(`farmersdelight`, id, x)
const SP = (id, x) => MOD(`supplementaries`, id, x)
const BP = (id, x) => MOD(`beansbackpacks`, id, x)
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
  'pink'
]
