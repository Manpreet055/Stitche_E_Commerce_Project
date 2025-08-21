let express = require("express");
let product = require("./database.js");
let helmet = require("helmet");
let app = express();
app.use(express.json());
app.use(helmet());
require("dotenv").config();

app.post("/", async (request, response) => {
  try {
    let { name, desc, availability, price } = request.body;
    let newProduct = new product({
      name: name,
      desc: desc,
      availability: availability,
      price: price,
    });
    await newProduct.save();
    response.send({
      status: "Success",
      newProduct,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({
      status: "Error",
      message: error.message,
    });
  }
});

//update

app.put("/update/:id", async (request, response) => {
  try {
    let { id } = request.params;
    let { name, desc, availability, price } = request.body;
    let obj = {
      name,
      availability,
      price,
      desc
    };

    if (name != null && name != undefined) {
      obj.name = name;
    }

    let updateProduct = await product.findByIdAndUpdate(id, obj, { new: true });

    if (!updateProduct) {
      return response.status(404).send({
        status: "Error",
        message: "Product not found"
      });
    }

    response.send({
      status: "Success",
      updateProduct
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({
      status: "Error",
      message: error.message
    });
  }
});

app.delete("/delete/:id",async(request,response)=>{

  let{id} = request.params;
  let deleteProduct = await product.findByIdAndDelete(id);

  response.send({
    status:"Sucess",
    deleteProduct
  })

})

app.get("/products", async (request, response) => {
  let data = await product.find();

  response.send({
     status: "Success",
      data,
  })
});
app.listen(process.env.PORT, () => console.log("API is running.."));
