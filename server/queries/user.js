const {sql} = require('../db.js')

const md5 = require('md5')


const getUsers = async (req, res) => {
    const users = await sql`
    SELECT * FROM users;
    `
    res.status(200).json(users)
}


const getUserById = async (req, res) => {
    const id = req.params.id
    const user = await sql`
    SELECT * FROM users WHERE id = ${id}
    `
    res.status(200).json(user)
 }

 const createUser = async (req, res) => {
   const {first_name, last_name, email, password} = req.body 
   const password_hash = md5(password)
   //MD5 Hash is terrible, I plan on using proper password salting and hashing.
    const newUser = await sql`
    INSERT INTO users
     (first_name, last_name, email,password_hash)
    VALUES
     (${first_name},${last_name},${email},${password_hash})
     RETURNING id`
    res.status(201).json(newUser)
 }

 const updateUser = async (req, res) => {
    const id = req.params.id
    const {email} = req.body
    const userUpdate = await sql`
    UPDATE users SET email = ${email}
    WHERE id = ${id};`
    res.status(201).json(userUpdate)
 }

 const deleteUser = async (req, res ) => {
    const id = req.params.id
    const deleteUser = await sql `
    DELETE FROM users WHERE id = ${id};
    `
    res.status(200).send(deleteUser)
 }


 module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  }