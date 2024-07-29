import { Request, Response } from 'express';
import loginUser from '../authentication/login';
import Session from '../model/session.model';

const loginController = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const ipAddress = request.headers['x-forwarded-for'] || request.connection.remoteAddress;

  if (!email || !password) {
    console.log('email and password are required fields!');
    return response.status(400).json({
      message: 'email and password are required',
    });
  }

  const result = await loginUser(email, password);

  try {

    const sessionRecord = new Session({
      user_id: result.user!.id,
      ip_address: ipAddress as string,
      login_time: new Date(),
    });

    await sessionRecord.save();

    return response.status(200).json({
      message: 'Login successful',
      token: result.session!.access_token,
      sessionId: sessionRecord._id,
    });
  } catch (error: any) {
    return response.status(500).json({ message: 'User Login Failed', error: error.message });
  }
};



export default loginController;