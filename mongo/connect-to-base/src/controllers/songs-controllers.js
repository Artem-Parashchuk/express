import { ctrlWrapper } from "../decorators/ctrlWrapper.js";
import { getSongById, getSongs } from "../services/song-services.js";
import { httpError } from "../utils/httpError.js";


const getSongsControllers = async (req, res) => {
    const data = await getSongs()

    res.json({
        status: 200,
        message: 'Songs get successfully',
        data,
    });

}

const getSongsByIdControllers = async (req, res) => {
    const { id } = req.params
    const data = await getSongById(id)
    if (!data) {
        throw httpError(404, `Song with id=${id} not found`)
    }
    res.json({
        status: 200,
        message: `Song with id=${id} get successfully`,
        data
    })
}

export default {
    getSongsControllers: ctrlWrapper(getSongsControllers),
    getSongsByIdControllers: ctrlWrapper(getSongsByIdControllers),
}