const MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')

const MC = (id, x) => MOD(`minecraft`, id, x)
const C = (id, x) => MOD(`create`, id, x)
const KJ = (id, x) => MOD(`kubejs`, id, x)
const H = (id, x) => MOD(`tconstruct`, id, x)
const S = (id, x) => MOD(`spelunkery`, id, x)
const ST = (id, x) => MOD(`sleep_tight`, id, x)

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