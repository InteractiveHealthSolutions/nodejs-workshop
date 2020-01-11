const path = require('path');
const fs = require('fs')

exports.get = (method, req, res) => {

    // path.join('users.json')
    fs.readFile('users.json', (err, data) => {
        if (err)
            return res.end('err');
        else {
            res.writeHead(200, { "Content-Type": "application/json" })
            res.write(data)
            res.end()
        }

    })
}



exports.post = async(method, req, res) => {

    // path.join('users.json')
    bodyParser(req).then((request) => {
        const body = request.body

        fs.readFile('users.json', (err, data) => {
            if (err)
                return res.end('err');
            else {

                data = JSON.parse(data)
                data.users.push(body)

                fs.writeFile('users.json', JSON.stringify(data), (err, result) => {
                    if (err)
                        return res.end('err');
                    else {
                        res.writeHead(200, { "Content-Type": "application/json" })
                        res.write(JSON.stringify(data))
                        res.end()
                    }
                })
            }

        })
    }, (e) => {
        res.write('Error adding Users')
        res.end()
    })

}


async function bodyParser(request) {
    return new Promise((resolve, reject) => {
        let totalChunked = ""
        request
            .on("error", err => {
                console.error(err)
                reject()
            })
            .on("data", chunk => {
                totalChunked += chunk
            })
            .on("end", () => {
                request.body = JSON.parse(totalChunked)
                resolve(request)
            })
    })
}