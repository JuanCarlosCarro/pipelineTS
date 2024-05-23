import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import MascotaModel from "../modelsNOSQL/mascotasNOSQL";

class MascotaController extends AbstractController {
    // Singleton
    // Atributo de clase
    private static _instance: MascotaController;

    // Método de clase
    public static get instance(): AbstractController {
        if (!this._instance) {
            this._instance = new MascotaController("mascota");
        }
        return this._instance;
    }

    // Declarar todas las rutas del controlador
    protected initRoutes(): void {
        this.router.get('/testmascota', this.getTestMascota.bind(this));
        this.router.get('/consultarMascotas', this.getConsultarMascotas.bind(this));
        this.router.post('/crearMascota', this.postCrearMascota.bind(this));
    }

    private async postCrearMascota(req: Request, res: Response) {
        try {
            console.log(req.body);
            await MascotaModel.create(req.body);
            console.log("Mascota creada");
            res.status(200).send("<h1>Mascota creada</h1>");
        } catch (err) {
            console.log(err);
            res.status(500).send('Internal server error' + err);
        }
    }

    private async getConsultarMascotas(req: Request, res: Response) {
        try {
            console.log("Consultar mascotas");
            const mascotas = await MascotaModel.scan().exec().promise();
            res.status(200).json(mascotas.Items);
        } catch (err) {
            console.log(err);
            res.status(500).send('Internal server error' + err);
        }
    }

    // Métodos de instancia
    private getTestMascota(req: Request, res: Response) {
        try {
            console.log("Prueba exitosa");
            res.status(200).send("<h1>Prueba exitosa</h1>");
        } catch (error: any) {
            console.log(error);
            res.status(500).send('Internal server error' + error);
        }
    }
}

export default MascotaController;