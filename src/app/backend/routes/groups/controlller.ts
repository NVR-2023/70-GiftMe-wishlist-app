// @ts-nocheck

import { Request, Response } from "express";
import { CreateGroup, CreateGroupProps } from "./models";

export const GroupController = {
  createGroup: async (req: Request<any, any>, res: Response) => {
    try {
      const groupData: CreateGroupProps = req.body;
      const newGroup = await CreateGroup().createGroup(groupData);
      res.status(201).json(newGroup);
    } catch (error: unknown) {
      console.error("Error creating group", error);
      res.status(500).json({
        err: "Failed to create group",
        message: (error as Error).message,
      });
    }
  },
};
