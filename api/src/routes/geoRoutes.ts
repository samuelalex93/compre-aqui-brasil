import { Router } from 'express';
import { GeoCidadeController } from "../controllers/GeoCidadeController";
import { GeoEstadoController } from "../controllers/GeoEstadoController";
import { GeoPaisController } from "../controllers/GeoPaisController";

const geoRoutes = Router();

const geoCidadeController = new GeoCidadeController();
const geoEstadoController = new GeoEstadoController();
const geoPaisController = new GeoPaisController();

geoRoutes.get("/cidade", geoCidadeController.listAll);
geoRoutes.get("/cidade/:id", geoCidadeController.findOne);

geoRoutes.get("/estado", geoEstadoController.listAll);
geoRoutes.get("/estado/:id", geoEstadoController.findOne);
geoRoutes.get("/estado/:id/cidade", geoCidadeController.findByEstado);

geoRoutes.get("/pais", geoPaisController.listAll);
geoRoutes.get("/pais/:id", geoPaisController.findOne);

export { geoRoutes };
