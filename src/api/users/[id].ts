// Connection to API server

import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${id}`);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user profile' });
    }
  } else if (req.method === 'PATCH') {
    try {
      const response = await axios.patch(`${API_BASE_URL}/users/create-profile/${id}`, req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user profile' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PATCH']); 
    res.status(405).end(`Method ${req.method} Not allowed`)
  }
}