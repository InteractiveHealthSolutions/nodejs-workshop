const fs = require('fs')

exports.get = (req, res) => {
    // res.render('')
    // return res.sendFile(__dirname + './../views/index.html')
    fs.readFile('users.json', (err, data) => {
        if (err) {
            return res.status(200).json({
                status: 403,
                success: false,
                msg: 'Error reading file',
                data: null
            })
        } else {

            res.render('users', { users: JSON.parse(data) })
                // res.status(200).json({
                //     success: true,
                //     msg: 'Data found succefully',
                //     data: JSON.parse(data)
                // })
        }

    })

}