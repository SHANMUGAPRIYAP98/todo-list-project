import { Request, Response } from 'express';
import registerUser from '../authentication/register';
import User, { IUser } from '../model/user.model';

const registerController = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  if (!email || !password) {
    console.log('email and password are required fields!');
    return response.status(400).json({
      message: 'email and password are required',
    });
  }

  const result = await registerUser(email, password);

  if (result.success) {
 const user: IUser = new User({ email, password });
    await user.save();
    return response
      .status(200)
      .json({ message: 'User Registered successfully!' });
  } else {
    return response.status(500).json({ message: 'User Registered Failed' });
  }
};


export default registerController;