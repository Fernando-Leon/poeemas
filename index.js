const express = require('express');
const app = express();

// Poemas de amor
const poemas = [
  {
    id: 1,
    autor: 'Federico García Lorca',
    poema: 'Eres tú la más bella flor que el jardín de mi corazón guarda'
  },
  {
    id: 2,
    autor: 'Pablo Neruda',
    poema: 'Te amo sin saber cómo, ni cuándo, ni de dónde, te amo'
  },
  {
    id: 3,
    autor: 'Gustavo Adolfo Bécquer',
    poema: 'Amor y una rosa son dos cosas igualmente jóvenes y graves'
  },
  {
    id: 4,
    autor: 'Mario Benedetti',
    poema: 'Te amo porque te amo, porque no necesito otra razón'
  },
  {
    id: 5,
    autor: 'Jorge Luis Borges',
    poema: 'Te amo sin saber cómo, ni cuándo, ni con qué intensidad'
  },
];

// Obtener todos los poemas
app.get('/poemas', (req, res) => {
  res.send(poemas);
});

// Obtener un poema por id
app.get('/poemas/:id', (req, res) => {
  const poema = poemas.find(p => p.id === parseInt(req.params.id));
  if (!poema) res.status(404).send('El poema con el id proporcionado no fue encontrado.');
  res.send(poema);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));