//const express = require('express');
import express from "express";
const router = express.Router();

/**
 * GET Users
 */

router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get Data Successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server Error");
    }

});

export default router;