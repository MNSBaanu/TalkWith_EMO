# Gather

> One place for all your event memories.

Gather is a real-time media collection platform that lets event attendees upload photos and videos via a unique link or QR code — organized, moderated, and ready to share.

---

## Features

- **Instant Join** — Attendees join via QR code, event code, or direct link. No account required.
- **Real-time Gallery** — Uploads sync instantly into a shared, organized event timeline.
- **Moderation Controls** — Hosts manage upload permissions, approve content, and control visibility.
- **Micro-Social** — Like, comment, and react to memories as they come in.
- **Live Slideshow** — Auto-generated presentation mode for event screens.
- **Secure Sharing** — Share the final gallery via private, permission-controlled links.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS v4 |
| Routing | React Router v7 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Backend | Node.js, Express |
| Database | MongoDB |
| Real-time | Socket.io |
| Media Storage | Cloudinary / Firebase Storage |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/gather.git
cd gather

# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
```

### Running Locally

```bash
# Start the client (from /client)
npm run dev

# Start the backend (from root)
npm run server
```

The client runs on `http://localhost:5173` by default.

### Build for Production

```bash
cd client
npm run build
```

---

## Project Structure

```
gather/
├── client/               # React frontend
│   ├── src/
│   │   ├── App.jsx       # Main app component
│   │   ├── main.jsx      # Entry point
│   │   └── index.css     # Global styles
│   ├── public/
│   └── vite.config.js
├── package.json
└── README.md
```

---

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

## License

[MIT](LICENSE)

---

## Credits

Odea & Concept by **MNSBaanu**.

*Designed for moments that matter.*
