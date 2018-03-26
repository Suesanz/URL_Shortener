const hasha = require('hasha')
const db = require('./db')
const codeMap = {}
const r = require('convert-radix64')
module.exports = {
    shorten: function (url) {
        let hash = hasha(url, {encoding: "base64", algorithm: "md5"})
        let code = hash.slice(0, 4)
        code = code.replace('/', '-')
        code = code.replace('+', '_')
        codeMap[code] = url
        db.addurl(r.from64(code), url)
        return code
    },
    expand: function (shortcode) {
        return codeMap[shortcode]
    }
}