var list = []
var PublicController = {

    AgregarMensaje: (req, res) => {
        const body = req.body
        list.push(body)
    },

    MostrarMensaje: (req, res) => {
        return res.status(200).send(list)
    },

    ModificarTask: (req, res) => {
        return TaskRepository.ModificarTask(req, res)
    },
}

module.exports = PublicController;