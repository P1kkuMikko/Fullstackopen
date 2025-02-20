const express = require('express')
const app = express()
const PORT = 3001;

let notes = [
    {
        "id": 1,
        "content": "GET and POST are the most important methods of HTTP protocol",
        "important": false
    },
    {
        "id": 2,
        "content": "Test note 1",
        "important": false
    },
    {
        "id": 3,
        "content": "TEst note 2",
        "important": false
    },
    {
        "id": 4,
        "content": "Test note 3",
        "important": false
    },
    {
        "id": 5,
        "content": "Test note 4",
        "important": true
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
    response.send(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    }
    else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});