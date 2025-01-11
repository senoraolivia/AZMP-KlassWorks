const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();


const port = 3001;

app.use(express.json());

const products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing"
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing"
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing"
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing"
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery"
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery"
  }
  ]


app.get('/', (req, res) => {
  res.send('hello world')
})


// GET
app.get("/api/products", (req, res) => {
    if (products.length > 0) {
      res.status(200).send({
        data: products,
        message: "success",
        error: null,
      });
    } else {
      res.status(204).send({
        data: [],
        message: "data is empty!",
      });
    }
  });






  // GET  by id
  app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === +id);
    if (product !== undefined) {
      res.status(200).send({
        data: product,
        message: "success",
      });
    } else {
      res.status(404).send({
        message: "not found!",
      });
    }
  });
  





  // DELETE
  app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;
  
    const idx = products.findIndex((p) => p.id === +id);
  
    if (idx === -1) {
      res.status(404).send({
        message: "no such product to delete!",
      });
    } else {
      const deleted = products.splice(idx, 1);
      res.status(200).send({
        deletedProduct: deleted,
        products: products,
        message: "succesfully deleted!",
      });
    }
  });
  





  // POST
  app.post("/api/products", (req, res) => {
    const { name, description } = req.body;
  
    const newProduct = {
      id: uuidv4(),
      name,
      description,
    };
  
    products.push(newProduct);
    res.status(201).send({
      message: "successfully posted product!",
      newProduct,
    });
  });





// UPDATE

  app.put("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const { title, category, description, price, imageUrl } = req.body;
  
    const idx = products.findIndex((p) => p.id === +id);
  
    if (idx !== -1) {
      const updatedProduct = {
        id: +id,
        title,
        category,
        description,
        price,
        imageUrl,
      };
      products[idx] = updatedProduct;
  
      res.status(200).send({
        message: "successfully updated!",
        updatedProduct,
      });
    } else {
      res.status(404).send({ message: "not found" });
    }
  });
  app.patch("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const { title, category, description, price, imageUrl } = req.body;
  
    const idx = products.findIndex((p) => p.id === +id);
  
    if (idx !== -1) {
      if (title !== undefined) {
        products[idx].title = title;
      }
      if (category !== undefined) {
        products[idx].category = category;
      }
      if (description !== undefined) {
        products[idx].description = description;
      }
      if (price !== undefined) {
        products[idx].price = price;
      }
  
      if (imageUrl !== undefined) {
        products[idx].imageUrl = imageUrl;
      }
  
      res.status(200).send({
        message: "successfully updated!",
        updatedProduct: products[idx],
        products,
      });
    } else {
      res.status(404).send({ message: "not found" });
    }
  });



  // (POST)
app.post("/api/products", (req, res) => {
  const { title, category, description, price, imageUrl } = req.body;

  const newProduct = {
    id: uuidv4(),
    title,
    category,
    description,
    price,
    imageUrl,
  };

  products.push(newProduct);
  res.status(201).send({
    message: "successfully posted product!",
    newProduct,
  });
});


// (PUT)
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, category, description, price, imageUrl } = req.body;

  const idx = products.findIndex((p) => p.id === +id);

  if (idx !== -1) {
    const updatedProduct = {
      id: +id,
      title,
      category,
      description,
      price,
      imageUrl,
    };
    products[idx] = updatedProduct;

    res.status(200).send({
      message: "successfully updated!",
      updatedProduct,
    });
  } else {
    res.status(404).send({ message: "not found" });
  }
});
app.patch("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, category, description, price, imageUrl } = req.body;

  const idx = products.findIndex((p) => p.id === +id);

  if (idx !== -1) {
    if (title !== undefined) {
      products[idx].title = title;
    }
    if (category !== undefined) {
      products[idx].category = category;
    }
    if (description !== undefined) {
      products[idx].description = description;
    }
    if (price !== undefined) {
      products[idx].price = price;
    }

    if (imageUrl !== undefined) {
      products[idx].imageUrl = imageUrl;
    }

    res.status(200).send({
      message: "successfully updated!",
      updatedProduct: products[idx],
      products,
    });
  } else {
    res.status(404).send({ message: "not found" });
  }
});



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
