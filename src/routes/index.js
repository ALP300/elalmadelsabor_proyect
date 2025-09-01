import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

router.get("/promociones", (req, res) => {
  res.render("promociones", { title: "Promociones" });
});
router.get("/catalogo", (req, res) => {
  res.render("catalogo", { title: "Catalogo" });
});

export default router;
