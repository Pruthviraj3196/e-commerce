const placeOrder = async (req, res) => {
    try {
        const { firstName, lastName, address, items } = req.body;

        if (!firstName || !lastName || !address || !items || items.length === 0) {
            return res.status(400).json({
                message: "Please provide all required details and at least one product."
            });
        }

        console.log("Order Details:", req.body);

        res.status(201).json({
            message: "Order placed successfully!",
            order: req.body
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const orderController = {
    placeOrder,
};

module.exports = orderController;