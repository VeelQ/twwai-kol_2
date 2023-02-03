import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const paramSchema = new mongoose.Schema({
    temp: {type: String},
    humidity: {type: String},
    pressure: {type: String},
    date: {type: String}
}, {
    collection: 'paramsAW'
});
paramSchema.plugin(uniqueValidator);

const ParamModel = mongoose.model('paramsAW', paramSchema);

async function query() {
    // pobierz wszystkie
    const result = await ParamModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return ParamModel.findOne({'_id': id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
 }

async function getLast() {
    const result = await ParamModel.findOne().sort({'_id':-1}).limit(1);
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}



    // add

export default {
    query: query,
    get: get,
    getLast,

    model: ParamModel
};
