require('dotenv').config();

module.exports = app => {

    app.route('/')
        .get((req, res, next)=>{
            res.status(200).json({ message: process.env.WELCOME })
        })

    app.route('/hello')
        .get((req, res) => {
        res.status(200).json({ message: "Hello World!" })
    })

}