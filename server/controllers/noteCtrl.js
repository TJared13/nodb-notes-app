// const notes = [];
// id = 0;

// module.exports = {

//     retrieve: (res) => {
//         res.status(200).send(notes)
//     },

//     create: (req, res) => {
//         const {note} = req.body

//         notes.push({
//             id,
//             note,
//         });
//         id++;
//         res.status(200).send(notes)
//     },

//     delete: (req, res) => {
//         let noteIndex = null
//         notes.forEach((elem, i) => {
//             if (elem.id === +req.params.id){
//                 noteIndex = i
//             }
//         })
//         notes.splice(noteIndex, 1)
//         res.status(200).send(notes)
//     },
// }