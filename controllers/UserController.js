const mongoose = require("mongoose");
const User = require("../models/UserModel");

//Dua function dalam satu exports, hati2
//https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js
module.exports = {
    //GET all users
    getUsers : async (req, res) => {
        try {
            const users = await User.find();
            console.log("Get All Users: '\n" + users);
            res.json(users);
        } catch (error) {
            console.log("error getUsers");
            res.status(500).json({message: error.message});        
        }
    },

    //GET one user specified by id
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            console.log("GET one user: \n" +user);
            res.json(user);
        } catch (error) {
            console.log("Error getUserById");
            res.status(404).json({message: error.message});
        }

    },

    //DELETE one by id
    deleteUser: async(req, res) => {
       try {
         //delete
         const deletedUser = await User.findByIdAndDelete({_id: req.params.id});
         console.log("User Deleted");
         res.status(200).json(deletedUser);

       } catch (error) {
            console.log("Failed to Delete");
            res.status(400).json({message: error.message});
       }

    }, 

    //Update User
    updateUser: async(req, res) => {
        try {
            const updatedUser = await User.updateOne({_id:req.params.id},
            {$set: req.body});
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },


    //ADD user
    saveUser : async(req, res)=>{
        const user = new User(req.body);
        try {
            const insertedUser = await user.save();
            res.status(201).json(insertedUser);
        } catch (error) {
            res.status(401).json({message: error.message});
        }
    }


}; 