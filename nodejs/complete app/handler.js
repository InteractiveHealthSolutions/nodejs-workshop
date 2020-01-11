const url = require('url')


// we have following urls
const allUrls = ['users']

exports.handleReq = (req, res) => {
    let reqUrl = url.parse(req.url, true);
    const method = req.method.toLowerCase()

    // get requested path name
    reqUrl = reqUrl.pathname.split('/').filter(url => url !== '')[0]
    if (allUrls.includes(reqUrl))
        require(`./routes/${reqUrl}`)(method, req, res)
    else {
        res.write('Url Not Found')
        res.end()
    }
}