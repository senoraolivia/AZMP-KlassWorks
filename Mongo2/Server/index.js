const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

const { Schema } = mongoose;

const BlogSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    age: { type: Number, required: true },
    
  });



const BlogModel = mongoose.model("Blogs", BlogSchema);



app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    res.status(200).json({ data: blogs, message: "success!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});




app.get("/api/blogs/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const blog = await BlogModel.findById(id);
  
      if (!blog) {
        return res.status(404).json({ message: "blog not found!" });
      }
  
      res.status(200).json({ data: blog, message: "success!" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });






  app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await ProductModel.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res
          .status(404)
          .json({ message: "failed to delete! | product not found!" });
      }
      res.status(200).json({
        deletedProduct: deletedProduct,
        message: "deleted successfully!",
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  





  mongoose
  .connect(
    "mongodb+srv://Ulviyya:ulviya123@cluster0.3uaev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(PORT, () => {
      console.log(
        `Example app listening on port ${PORT}, url is http://localhost:${PORT}`
      );
    });
  });
