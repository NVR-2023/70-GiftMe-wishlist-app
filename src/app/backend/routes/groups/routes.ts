import { Request, Response, Router } from "express";

import { GroupController } from "./controllers.ts";
import { GroupDataType } from "./models.js";

const router = Router();

router.post("/groups", (req: Request<GroupDataType>, res: Response<GroupDataType>) => {
  GroupController.createGroup(req, res);
});

export default router;
