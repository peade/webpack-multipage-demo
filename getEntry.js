const glob = require('glob')
const path = require('path')
module.exports = function getEntry (globPath, pathDir) {
    let files = glob.sync(globPath)
    let entries = {}, entry, dirname, basename, pathname, extname
    for (let i = 0; i < files.length; i++) {
        entry = files[i]
        dirname = path.dirname(entry)
        extname = path.extname(entry)
        basename = path.basename(entry, extname)
        pathname = path.join(dirname, basename)
        pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname
        entries[pathname] = ['./' + entry]
    }
    return entries
}
