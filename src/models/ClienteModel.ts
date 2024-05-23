import { Model, DataTypes, Sequelize } from 'sequelize';

interface ClienteAttributes {
    clienteId: string;
    nombre: string;
    email: string;
    telefono: string;
}

class Cliente extends Model<ClienteAttributes> implements ClienteAttributes {
    public clienteId!: string;
    public nombre!: string;
    public email!: string;
    public telefono!: string;

    static associate(models: any) {
        // Asociaciones si son necesarias
    }
}

export default (sequelize: Sequelize) => {
    Cliente.init({
        clienteId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING(15),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Cliente'
    });

    return Cliente;
};