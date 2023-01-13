import { Router } from "express";
import { checkDateParam } from "../validators/dateValidator.js";

const router = Router()

router.get("/:date", checkDateParam, async(req, res) => {
    const { date } = req.params

    res.json({
        "unix": date.getTime(),
        "utc": date.toUTCString()
    })
})

export default router