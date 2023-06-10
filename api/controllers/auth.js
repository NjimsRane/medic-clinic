import { db } from '../connect.js';
import bcryptsj from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register = (req, res) => {
    const q = "SELECT * FROM patients WHERE name = ?";

    db.query(q, [req.body.name], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json('User already exist!');

        const salt = bcryptsj.genSaltSync(10);
        const hashedPassword = bcryptsj.hashSync(req.body.password, salt);

        const q = "INSERT INTO patients ( name , email , password ) VALUES (?)";
        const values = [req.body.name, req.body.email, hashedPassword];


        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json('User has been created !');
        });

    });
};

const login = (req, res) => {
    const q = "SELECT * FROM patients WHERE  email = ?";

    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(409).json('User not found');

        const checkedPassword = bcryptsj.compareSync(req.body.password, data[0].password);
        if (!checkedPassword) return res.status(404).json('Wrong password or User');


        const token = jwt.sign({ id: data[0].id }, 'secretkey');
        const { password, ...others } = data[0];

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others);

    });
};

const logout = (req, res) => {

    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json('User has been logged out');

};



export { register, login, logout };