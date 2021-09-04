const mongoose = require("mongoose");
const Barcode = mongoose.model("barcodes");
const Product = mongoose.model("products");

module.exports = (app) => {
    app.get("/api/barcode/:id", async (req, res) => {
        const response = await Barcode.findById(req.params.id);
        res.send(response);
    });
    app.get("/api/update", async (req, res) => {
        try {
            var barcodes = await Barcode.find();
            barcodes.forEach(async (barcode) => {
                var product = await Product.findOne({
                    product_id: barcode._product,
                }).exec();
                if (product)
                    var res = await Barcode.updateOne(
                        { _id: barcode._id },
                        { _product: product._id }
                    );
            });
            Product.updateMany({}, { $unset: { product_id: 1 } })
                .then((res) => {
                    console.log(res.n); // Number of documents matched
                    console.log(res.nModified); // // Number of documents modified
                })
                .catch((err) => console.log(err));

            res.send("Successful");
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    app.post("/api/barcode", async (req, res) => {
        const {
            barcode_id,
            total_production,
            total_sold,
            adjustment,
            average_yearly_sell,
        } = req.body;

        const barcode = new Barcode({
            barcode_id,
            total_production,
            total_sold,
            adjustment,
            average_yearly_sell,
            type,
            _product,
        }).save();

        res.send(barcode);
    });

    //Find Product details using Barcode_ID
    app.get("/api/barcode/:barcode/product", (req, res) => {
        Barcode.findById(req.params.barcode)
            .then(barcode => Product.findById(barcode._product)
                .then(result => res.send(result))
                .catch(err => res.status(500).send(err))
            )
            .catch(err => res.status(500).send(err));
    });
};
