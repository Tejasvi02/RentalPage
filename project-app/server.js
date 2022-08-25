const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const sessions = require('./sessions');
const users = require('./users');

app.use(cookieParser());
app.use(express.static('./build'));
app.use(express.json());

// Sessions
app.get('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'authentication is missing' });
    return;
  }
  res.json({ username });
});

app.post('/api/session', (req, res) => {
  const { username } = req.body;

  if(!users.isValid(username)) {
    res.status(400).json({ error: 'username is required' });
    return;
  }

  if(username === 'dog') {
    res.status(403).json({ error: 'Insufficient authorization' });
    return;
  }

  const sid = sessions.addSession(username);
  const existingUserData = users.getUserData(username);

  if(!existingUserData) {
    users.addUserData(username, 0);
  }

  const respUserData = users.getUserData(username);

  res.cookie('sid', sid);
  res.json(respUserData);
});

app.delete('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(sid) {
    res.clearCookie('sid');
    // delete onlinesids.sid;
  }

  if(username) {
    // Delete the session, but not the user data
    sessions.deleteSession(sid);
  }

  // We don't report any error if sid or session didn't exist
  // Because that means we already have what we want
  res.json({ username });
});

function noAuthMissingError(req, res)
{
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'authentication is missing' });
    return false;
  }
  return true;
}

app.get('/api/rentals', (req, res) => {
  if (noAuthMissingError(req, res)) {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    const existingUserData = users.getUserData(username);
    res.json(existingUserData);
  }
});

app.post('/api/rentals', (req, res) => {
  if (noAuthMissingError(req, res)) {
    const { id } = req.body;
  if(!id) {
    res.status(400).json({ error: 'rentalID is required' });
    return;
  }  
  
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : ''; 
  users.addUserData(username, id);
  res.json(id);
  }  
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
