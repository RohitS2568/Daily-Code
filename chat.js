const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  
  socket.on('chat message', async (msg) => {
    console.log('message: ' + msg);
    const response = await getBotResponse(msg);
    io.emit('chat message', response);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Function to get bot response
async function getBotResponse(message) {
  const luisResponse = await callLuisService(message);
  if (luisResponse.topScoringIntent.intent === 'None') {
    return 'Sorry, I did not understand that.';
  } else if (luisResponse.topScoringIntent.intent === 'FAQ') {
    return await callQnAMakerService(message);
  } else {
    return `Intent recognized: ${luisResponse.topScoringIntent.intent}`;
  }
}

// Function to call LUIS
async function callLuisService(query) {
  const luisAppId = 'YOUR_LUIS_APP_ID';
  const endpointKey = 'YOUR_LUIS_ENDPOINT_KEY';
  const endpoint = `https://YOUR_LUIS_ENDPOINT/api/v2.0/apps/${luisAppId}?verbose=true&timezoneOffset=0&subscription-key=${endpointKey}&q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error calling LUIS:', error);
    return { topScoringIntent: { intent: 'None' } };
  }
}

// Function to call QnA Maker
async function callQnAMakerService(question) {
  const endpointKey = 'YOUR_QNA_MAKER_ENDPOINT_KEY';
  const endpoint = 'https://YOUR_QNA_MAKER_ENDPOINT/qnamaker/knowledgebases/YOUR_KB_ID/generateAnswer';
  const postBody = {
    question: question,
    top: 1
  };

  try {
    const response = await axios.post(endpoint, postBody, {
      headers: {
        'Authorization': `EndpointKey ${endpointKey}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.answers[0].answer;
  } catch (error) {
    console.error('Error calling QnA Maker:', error);
    return 'Sorry, I am unable to find an answer to your question at the moment.';
  }
}
