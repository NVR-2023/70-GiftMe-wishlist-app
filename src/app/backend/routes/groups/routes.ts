import { Request, Response, Router } from "express";

import { GroupController } from "./controlller.js";
import { CreateGroupProps } from "./models.js";

const router = Router();

router.post("/groups", (req: Request<CreateGroupProps>, res: Response<CreateGroupProps>) => {
  GroupController.createGroup(req, res);
});

export default router;
