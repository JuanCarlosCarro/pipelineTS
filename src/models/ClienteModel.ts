import {Model, Sequelize } from 'sequelize';

interface ClienteAttributes {
    clienteId: number;
    nombre: string;
    email: string;
    telefono: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
    class Cliente extends Model<ClienteAttributes> implements ClienteAttributes {
        public clienteId!: number;
        public nombre!: string;
        public email!: string;
        public telefono!: string;
        static associate(models: any) {
        // Asociaciones si son necesarias
        }
    }
    Cliente.init({
        clienteId: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: {
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type:DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Cliente'
    });
    return Cliente;
};
