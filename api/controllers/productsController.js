
import Products from "../models/Products.js"

const createProduct = async (req, res) => {
  try {
    const products = new Products(req.body)
    await products.save()
    return res.status(201).json({
      msg: 'Product created successfully',
      products
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error creating product',
      error: error.message
    })
  }
}


const getAllProducts = async (_, res) => {
  try {
    const products = await Products.find();
    return res.json({
      msg: 'Product found',
      products,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Try again',
      error,
    });
  }
};


const updateProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: `Product ${product.name} updated`,
      product,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Try again',
    });
  }
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    await Products.findByIdAndRemove(id);
    return res.json({
      msg: 'Product deleted',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Try again',
      error,
    });
  }
};

export { createProduct, getAllProducts, updateProductById, deleteProductById }