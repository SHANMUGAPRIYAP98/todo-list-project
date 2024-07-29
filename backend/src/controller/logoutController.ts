import { Request, Response } from 'express';
import Session from '../model/session.model';

const logoutController = async (request: Request, response: Response) => {
  const { sessionId } = request.body;

  if (!sessionId) {
    return response.status(400).json({ message: 'Session ID is required' });
  }

  try {
    const session = await Session.findById(sessionId);
    if (session) {
      session.logout_time = new Date();
      await session.save();
      return response.status(200).json({ message: 'Logout successful' });
    } else {
      return response.status(404).json({ message: 'Session not found' });
    }
  } catch (error: any) {
    return response.status(500).json({ message: 'Failed to Logout', error: error.message });
  }
};

export default logoutController;