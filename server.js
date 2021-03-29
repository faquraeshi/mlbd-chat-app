const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const pusher = new Pusher({
  appId: '1084873',
  key: '91b3fe78f65fb4acdaca',
  secret: '80ac45bd7d677f9da47d',
  cluster: 'ap1',
  encrypted: true,
});

app.set('PORT', process.env.PORT || 5000);


app.post('/message', (req, res) => {
  const payload = req.body;
  console.log(payload);
  pusher.trigger('chat', 'message', payload);
  res.send(payload)
});


app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT')))


