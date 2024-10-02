import express from 'express';   // ES module import
import users from './users.js';  // Import the users array

const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

app.get('/users', (req, res) => {
  res.send(users);  // Send the users array in response to GET requests
});

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
 
  if (!logo) {
    res.status(418).send({ message: 'We need a logo' });
  } else {
    res.send({
      tshirt: `Your shirt with logo ${logo} and ID ${id}`,
    });
  }
});
