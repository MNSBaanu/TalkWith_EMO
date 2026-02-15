#Imposter

## 🎮 Word Imposter — Real-Time Multiplayer Party Game

Word Imposter is a real-time multiplayer social deduction game where players receive secret roles and must identify the imposter through discussion, observation, and strategy.

Unlike traditional party games that rely on a single shared device, **Word Imposter allows every player to join using their own phone or browser**, creating a smooth and modern multiplayer experience.

---

## 📌 Overview

Word Imposter is designed for friends to play together either in the same room or remotely online. Each player secretly receives a role and a word (or sometimes no word). Players must describe their word carefully without revealing it directly.

One or more players are imposters whose goal is to blend into the conversation and avoid being discovered.

Players discuss, analyze clues, and vote to eliminate the imposter before the round ends.

---

## ✨ Features

### 🎯 Core Gameplay
- Private game room creation
- Join using room code or invite link
- Secret role assignment
- Real-time multiplayer synchronization
- Discussion phase with timer
- Voting system
- Round result reveal
- Score tracking

### 📱 Multi-Device Gameplay
- Each player joins using their own device
- No need to pass a single phone
- Instant updates across all players

### 🌐 Online Multiplayer
- Play remotely with friends
- Live lobby updates
- Real-time gameplay using WebSockets

### 🎮 Planned Game Modes
- Classic Imposter Mode
- Multiple Imposters
- Fake Word Mode
- Category-Only Mode
- Custom Word Packs

---

## 🧠 How the Game Works

1. A host creates a game room.
2. Players join using a room code.
3. The game secretly assigns roles:
   - ✅ Normal players receive the same or related word.
   - 🕵️ Imposter receives a different word or no word.
4. Players take turns describing their word without saying it directly.
5. Discussion phase begins.
6. Players vote for who they believe is the imposter.
7. Roles are revealed and scores are updated.

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion (animations)

### Backend
- Node.js
- Express.js
- Socket.IO (real-time communication)

### Database
- MongoDB (MongoDB Atlas)

### Deployment
- Frontend → Vercel
- Backend → Render / Railway
- Database → MongoDB Atlas

---

## ⚙️ Architecture

The application follows a **room-based multiplayer architecture**.

The server controls all game logic to ensure fairness and prevent cheating.  
Each player receives only their own role information.

---

## 🔄 Real-Time Communication

Socket.IO enables live synchronization between players:

- Player join / leave
- Lobby updates
- Role assignment
- Timer synchronization
- Voting updates
- Round transitions
