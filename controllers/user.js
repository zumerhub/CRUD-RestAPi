const fs = require('fs');
const Users = require('../models/user');

async function handlerGetAllUsers(req, res) {
    const alluser = await Users.find().sort('name');
    return res.json(alluser);
}

async function handlerGetUserById(req, res) {
    const user = await Users.findById(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.json(user);
}


async function hanleCreateNewUser(req, res) {
    const { first_name, last_name, email, gender, job_title } = req.body;
    // console.log(body);
    if (!first_name &&
        !last_name &&
        !email &&
        !gender &&
        !job_title
    ) {
        return res.status(404).json({ msg: "user not found!!" });
    }
    try {
        const result = await Users.create({ first_name, last_name, email, gender, job_title });
        // console.log('result', result)
        return res.json({ msg: "successful!", id: result._id });
    } catch (error) {
        console.error("error creating user:", error);
        return res.json({ error: "internal error" });
    };

    // Users.push({ ...body, id: Users.length + 1 });
    // fs.writeFile("../MOCK_DATA.json", JSON.stringify(Users) + "\n", (err, data) => {
    //     return res.status(200).json({ status: "pending....", id: Users.length })
    // });
}

async function hanlePatchUsersId(req, res) {

    // CODE...........1
    
    const update = req.body;

    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!update) {
                  return res.status(404).json({ error: 'User not found' });
                }
       
        console.log('result', updatedUser);
        return res.json({ status: "successful", user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}

async function hanleDeleteUsersId(req, res) {

    // return res.json({ status: "pending...." })

    try {
        await Users.findByIdAndDelete(req.params.id);
        // console.log('result', body);
        return res.json({ status: "successful" });

    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}

module.exports = {
    handlerGetAllUsers,
    handlerGetUserById,
    hanleCreateNewUser,
    hanlePatchUsersId,
    hanleDeleteUsersId
}