import bcrypt from 'bcrypt';
import { User } from "../models/index.js";
import jwt from 'jwt-simple'
import config from '../config/index.js'

const register = async (req, res) => {
  try {
    const encrypted = await bcrypt.hash(req.body.password, 10)
    req.body.password = encrypted
    const user = await User.create(req.body)
    user.password = encrypted

    return res.json({
      msg: 'User register sucessfully',
      user
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Sorry try again',
      error
    })
  }
}

const login = async (req, res) => {

  try {
    //Buscar usuario por correo
    const user = await User.findOne({
      email: req.body.email,
    });

    //VAlidar que existas usuario
    if (!user) {
      return res.status(401).json({
        msg: 'Invalid credentials',
      });
    }

    //Comparamos contraseñas
    const passwordMatched = await bcrypt.compare(
      req.body.password,
      user.password
    );

    //Si no coinciden retornamos 401
    if (!passwordMatched) {
      return res.status(401).json({
        msg: 'Invalid credentials',
      });
    }

    //ACÁ GENERAR TOKEN Y RETORNARLO

    //objeto a guardar en el token
    const payload = {
      userId: user.id,
    };

    const token = jwt.encode(payload, config.tokens.secret);

    return res.json({
      msg: 'Success Login',
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Fail to login',
      error,
    });
  }
};

export { register, login };

