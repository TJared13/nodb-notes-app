const notes = [];
id = 0;

module.exports = {

    retrieve: (req, res) => {
        res.status(200).send(notes)
    },

    create: (req, res) => {
        let {title, body} = req.body
        console.log(req.body)
        notes.push({
            id,
            title,
            body,
        });
        id++;
        res.status(200).send(notes)
    },

    update: (req, res) => {
        const {id} = req.params
        let {title, body} = req.body
        let noteIndex = null

        notes.forEach((elem, i) => {
            if (elem.id === id){
                noteIndex = i
            }
        })
        const updatedNote = {
            id: +id,
            title,
            body,
        }
        notes.splice(noteIndex, 1, updatedNote)
        res.status(200).send(notes)
    },

    delete: (req, res) => {
        let noteIndex = null;
        notes.forEach((elem, i) => {
            if (elem.id === +req.params.id){
                noteIndex = i
            }
        })
        notes.splice(noteIndex, 1)
        res.status(200).send(notes)
    },
}