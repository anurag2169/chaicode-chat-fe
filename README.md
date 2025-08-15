# Chaicode Chat App

A beautiful, modern chat application built with React, TypeScript, and Tailwind CSS. Connect with industry experts and get personalized guidance through our AI-powered chat platform.

## preview : https://chaicode-chat-fe.vercel.app/

## ✨ Features

### 🏠 Home Page

- **Beautiful Landing Page**: Modern dark theme with gradient backgrounds
- **Mentor Profiles**: Detailed cards for industry experts (Hitesh Choudhary & Piyush Garg)
- **Professional Design**: Clean typography, hover effects, and micro-interactions
- **Social Integration**: Direct links to mentors' social media profiles
- **Responsive Layout**: Optimized for all screen sizes

### 💬 Chat Interface

- **ChatGPT-Style Design**: Modern conversation layout with message bubbles
- **Real-time Streaming**: Live AI responses with streaming support
- **Rich Text Formatting**:
  - Code syntax highlighting
  - Markdown-style links
  - Bold text formatting
  - Bullet points
  - Inline code blocks
- **Dark Mode**: Complete dark theme throughout the application
- **User Experience**: Smooth animations, loading states, and intuitive navigation

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint + TypeScript ESLint

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd chaicode-chat-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Setup

The app expects a chat API endpoint at `http://localhost:3000/chat`. Make sure your backend server is running on port 3000.

### API Integration

The chat functionality connects to a streaming endpoint that should:

- Accept POST requests with JSON body: `{ message: string }`
- Return Server-Sent Events (SSE) format
- Stream responses in chunks with `data: { content: string }` format

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full-width layout with sidebar navigation
- **Tablet**: Adapted grid layouts and touch-friendly interactions
- **Mobile**: Stacked layouts and mobile-optimized navigation

## 🎯 Usage

1. **Home Page**: Browse mentor profiles and learn about their expertise
2. **Select Mentor**: Click on any mentor card to start a conversation
3. **Chat Interface**:
   - Type your message in the input field
   - Press Enter to send (Shift+Enter for new lines)
   - Watch AI responses stream in real-time
   - Enjoy formatted responses with code highlighting and links

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Multiple chat rooms/conversations
- [ ] File upload and sharing
- [ ] Voice messages
- [ ] Mobile app version
- [ ] Advanced AI model selection
- [ ] Chat history persistence
- [ ] Real-time collaboration features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Mentors Featured

### Hitesh Choudhary

- **Expertise**: JavaScript, React, Node.js, MongoDB
- **Experience**: 10+ Years
- **Students**: 500K+
- **Social**: [Twitter](https://twitter.com/Hiteshdotcom) | [GitHub](https://github.com/hiteshchoudhary) | [LinkedIn](https://linkedin.com/in/hiteshchoudhary)

### Piyush Garg

- **Expertise**: DevOps, AWS, Docker, Kubernetes
- **Experience**: 8+ Years
- **Students**: 200K+
- **Social**: [Twitter](https://twitter.com/piyushgargdev) | [GitHub](https://github.com/piyushgarg-dev) | [LinkedIn](https://linkedin.com/in/piyushgarg-dev)

## 🙏 Acknowledgments

- Design inspiration from modern chat applications
- Icons provided by [Lucide React](https://lucide.dev)
- Images from [Pexels](https://pexels.com)
- Built with ❤️ using React and Tailwind CSS

---

**Made with ☕ by the Chaicode Community**
