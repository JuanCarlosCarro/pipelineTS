import {Model, Sequelize } from 'sequelize';

interface ClienteAttributes {
    clienteId: string;
    nombre: string;
    email: string;
    telefono: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
    class Cliente extends Model<ClienteAttributes> implements ClienteAttributes {
        public clienteId!: string;
        public nombre!: string;
        public email!: string;
        public telefono!: string;
        static associate(models: any) {
        // Asociaciones si son necesarias
        }
    }
    Cliente.init({
        clienteId: {
            type:DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
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
    Cliente.init({
        clienteId: {
            type:DataTypes.STRING,
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
