const mongoose = require("mongoose");
const Barcode = mongoose.model("barcodes");
const Product = mongoose.model("products");

module.exports = app => {
    app.get("/api/product", async (req, res) => {
        let response;
        var query = req.query;
        if (query.barcode) {
            const barcode = await Barcode.find({ barcode: query.barcode });
        }
        res.send(response);
    });

    app.post("/api/product", async (req, res) => {
        const { name, item_code } = req.body;

        const product = new product({ name, item_code }).save();

        res.send(product);
    });

    app.get("/api/product/:id", async (req, res) => {
        const response = await Product.findById(req.params.id);
        res.send(response);
    });
};
