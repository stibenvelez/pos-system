import express from 'express'
import salesReportRoutes from './sales/routes.js'
const router = express.Router()

router.use("/sales", salesReportRoutes);

export default router;