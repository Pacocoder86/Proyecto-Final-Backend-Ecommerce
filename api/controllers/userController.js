import User from '../models/User.js'

const createUser = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    return res.status(201).json({
      msg: 'User created successfully',
      user
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error creating user',
      error: error.message
    })
  }
}

const getAllUsers = async (_, res) => {
  try {
    const user = await User.find();
    return res.json({
      msg: 'Users found',
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Try again',
      error,
    });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndRemove(id);
    return res.json({
      msg: 'User deleted',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Try again',
      error,
    });
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: `User ${user.name} updated`,
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Try again',
    });
  }
};



export { createUser, getAllUsers, deleteById, updateUserById }