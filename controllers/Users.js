export const getUsers = async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get Users Data Successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: error.message});
    }
};