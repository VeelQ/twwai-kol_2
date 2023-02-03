import paramDAO from '../DAO/paramDAO';

function create() {
    async function query() {
        //funkcja pobierająca wszystkie wpisy

        let result = paramDAO.query();
        if (result) {
            return result;
        }
    }
    async function get(id) {
        let result = paramDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function getLast() {
        let result = paramDAO.getLast();
        if (result) {
            return result;
        }
    }



      //add

    return {
        query: query,
        get: get,
        getLast,
    };
}

export default {
    create: create,
    

};
