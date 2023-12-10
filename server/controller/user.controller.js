import { getResults } from "../util/getResults";
const bcrypt = require("bcrypt");


export const getAllUsers = async (req, res) => {
    try {
        const sql = /* sql */`
            select * from users
        `;

        const results = await getResults(sql);

        return res.status(200).send({
            success: true,
            message: 'sucessfully retrieved all users',
            data: results
        })
    } catch (error) {
        console.error(error);

        res.status(500).send({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

export const getSingleUser = async (req, res) => {
    try {
        const sql = /* sql */`
            select * from users where u_id >= 2
        `;

        const user = await getResults(sql);

        if (user.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'User successfully retrieved',
            data: user
        })
    } catch (error) {
        console.error(error);

        res.status(500).send({
            success: false,
            message: 'Internal Server Error'
        })
    }
};

export const registerUser = async (req, res) => {
    try {
        const { 
            name, password, confPass, profile_pic_url, status, 
            role, email_addr, teams
        } = req.body;

        const hashPass = await bcrypt.hash(password, 10);

        const sql = /* sql */ `
            insert into users (
                name, password, confPass, profile_pic_url, status, 
                role, email_addr, teams)
                values (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const result = await getResults(sql, [name, hashPass, profile_pic_url, status, 
            role, email_addr, teams]);

        if (result.length >= 1) {
            return res.status(200).send({
                success: true,
                message: 'successfully registered user',
                data: result
            })
        } else {
            return res.status(400).send({
                success: false,
                message: 'failed to register user'
            })
        }

    } catch (error) {
        console.error(error);

        res.status(500).send({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

export const logInUser = (req, res) => {
    const { name } = req.body;

    if (name !== '') {
        req.session.user = name;
        res.send({ 
            success: true, 
            message: 'User logged in' 
        });
    } else {
        res.status(403).send({
            success: false,
            message: 'authentication failed'
        });
    }
};
export const logoutUser = async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send({
                message: 'internal server error'
            });
        }

        res.send('logout successful')
    })
};

export const updateUser = async (req, res) => {};

export const deleteUser = async (req, res) => {};