import { Router } from "express";
import authRoutes from "../auth_module/routes.js"
import ticketRoutes from "../ticket_module/route.js"

const router = Router();

router.use("/api/auth", authRoutes)
router.use("/api/tickets", ticketRoutes)


export default router;