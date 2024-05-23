import { Request, Response } from 'express';
import AbstractController from './AbstractController';
import db from '../models';

class ClienteController extends AbstractController {
    // Singleton
    // Atributo de clase
    private static _instance: ClienteController;

    // Método de clase
    public static get instance(): AbstractController {
        if (!this._instance) {
            this._instance = new ClienteController('cliente');
        }
        return this._instance;
    }

    // Declarar todas las rutas del controlador
    protected initRoutes(): void {
        this.router.get('/testcliente', this.getTestCliente.bind(this));
        this.router.get('/consultarClientes', this.getConsultarClientes.bind(this));
        this.router.post('/crearCliente', this.postCrearCliente.bind(this));
    }

    private async postCrearCliente(req: Request, res: Response) {
        try {
            console.log(req.body);
            await db.Cliente.create(req.body);
            console.log('Cliente creado');
            res.status(200).send('<h1>Cliente creado</h1>');
        } catch (err) {
            console.log(err);
            res.status(500).send('Internal server error' + err);
        }
    }

    private async getConsultarClientes(req: Request, res: Response) {
        try {
            console.log('Consultar clientes');
            const clientes = await db.Cliente.findAll();
            res.status(200).json(clientes);
        } catch (err) {
            console.log(err);
            res.status(500).send('Internal server error' + err);
        }
    }

    // Métodos de instancia
    private getTestCliente(req: Request, res: Response) {
        try {
            console.log('Prueba exitosa');
            res.status(200).send('<h1>Prueba exitosa</h1>');
        } catch (error: any) {
            console.log(error);
            res.status(500).send('Internal server error' + error);
        }
    }
}

export default ClienteController;