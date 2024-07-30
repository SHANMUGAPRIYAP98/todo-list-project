import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Session from '../model/session.model';

export const sessionController = async (
    request: Request,
    response: Response
  )=> {
    try {
      const { user_id } = request.params;
      console.log('==', user_id)
      if (!user_id) {
        return response.status(400).json({ message: 'Invalid Todo ID' });
      }
      const session = await Session.find({user_id});
      if (session) {
        response.status(200).json({message: 'User Session fetched successfully!', data: session});
      } else {
        response.status(404).json({ message: "Session not found" });
      }
    } catch (error: any) {
      response.status(500).json({ message: 'Failed to fetch Session By Id', error: error.message });
    }
  };