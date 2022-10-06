import { Cart, Products } from '../models/index.js'

const createCart = async (req, res) => {
  try {
    const { products } = req.body
    const { userId } = req
    if (!userId) return res.status(401).json({ msg: 'Unauthorized' })

    // const newCart = new Cart({
    //   products,
    //   user: userId
    // })
    const cartSaved = await Cart.create({
      products,
      user: userId
    })
    res.status(201).json({
      msg: 'Cart created successfully',
      cart: cartSaved,
    })
  } catch (error) {
    res.status(400).json({
      msg: 'Error creating cart',
      error
    })
  }
}

const updateCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: `Product ${cart.name} updated`,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Try again',
    });
  }
};

const deleteCartById = async (req, res) => {
  const { id } = req.params;
  try {
    await Products.findByIdAndRemove(id);
    return res.json({
      msg: 'Product deleted in you cart',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Try again',
      error,
    });
  }
};

const getAllCart = async (_, res) => {
  try {
    const cart = await Cart.find();
    return res.json({
      msg: 'Cart found',
      cart
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Try again',
      error,
    });
  }
};


export { createCart, deleteCartById, updateCartById, getAllCart }