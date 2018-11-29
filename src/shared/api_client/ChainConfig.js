import * as weku from 'steem'

weku.config.set('address_prefix', 'WKA')

let chain_id = ""
for(let i = 0; i < 32; i++) chain_id += "00"

module.exports = {
    address_prefix: "WKA",
    expire_in_secs: 15,
    chain_id
}
