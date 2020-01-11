module.exports = (path, method, res) => {
    require(`./${path}`)(method, res)
        // res.write(path)
        // res.end('data')
}