import dynamodb from "../services/dynamoService";
import joi from 'joi';
import { PREFIX_NAME } from '../config';

const MascotaModel = dynamodb.define('mascota', {
    hashKey: 'MascotaId',
    timestamps: false,
    schema: {
        MascotaId: dynamodb.types.uuid(),
        Nombre: joi.string(),
        Edad: joi.number(),
        Tipo: joi.string()
    },
    tableName: `Mascota${PREFIX_NAME}`
    
});

dynamodb.createTables((err:any)=>{
    if(err)
        return console.log('Error al crear la tabla',err);
    console.log('Tabla creada exitosamente');
})

export default MascotaModel;