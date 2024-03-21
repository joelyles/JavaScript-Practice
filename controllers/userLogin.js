// practice server using Dave Gray node tutorial

const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.user = data }
}

const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'you must have username and password' });
    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401);
    // check pwd
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        res.json({ 'success': `user ${user} logged in successfully.` });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };