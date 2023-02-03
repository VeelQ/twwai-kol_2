import business from '../business/business.container';
import applicationException from "../service/applicationException";

const paramEndpoint = (router) => {
    // get
    router.get('/api/paramsAW', async (request, response) => {
        try {
            let result = await business.getParamManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/paramsAW/last', async(req, res) => {
        try{
            let result = await business.getParamManager().getLast();
            res.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, res);
        }
    })
    
    router.get('/api/paramsAW/:id', async(req, res) => {
        try{
            let result = await business.getParamManager().get(req.params.id);
            res.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, res);
        }
    })
    // add
};
export default paramEndpoint;
