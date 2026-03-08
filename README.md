# GitHub Developer Finder

A modern, responsive Angular application that allows you to search for GitHub users and explore their profiles and repositories. Built with Angular 19 and styled with a beautiful, professional design system.

## 🌟 Features

- 🔍 **User Search**: Search for any GitHub user by username
- 👤 **User Profiles**: View detailed user information including bio, location, company, and social stats
- 📚 **Repository Explorer**: Browse user's repositories with language, stars, and fork information
- ⚡ **Real-time Loading**: Smooth loading states and error handling
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful gradients, animations, and micro-interactions
- 🔗 **Direct Links**: Quick access to GitHub profiles and repositories

## 📸 Screenshots

### Homepage - Clean Search Interface
![GitHub Developer Finder Homepage](Screenshot%20(33).png)

### User Profile - Detailed Information Display
![User Profile View](Screenshot%20(34).png)

### Repository List - Organized Repository Cards
![Repository Explorer](Screenshot%20(35).png)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SAURABHSALVE/github-developer-finder.git
   cd github-developer-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**

   Navigate to `http://localhost:4200/` (or the port shown in your terminal)

## 🛠️ Technologies Used

- **Framework**: Angular 19
- **Language**: TypeScript
- **Styling**: CSS with modern design system
- **API**: GitHub REST API
- **HTTP Client**: Angular HttpClient
- **Build Tool**: Angular CLI

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── search-bar/          # Search input component
│   │   ├── user-profile/        # User information display
│   │   └── repo-list/           # Repository cards grid
│   ├── models/
│   │   ├── user.model.ts        # User interface
│   │   └── repo.model.ts        # Repository interface
│   ├── services/
│   │   └── github.service.ts    # GitHub API service
│   ├── app.component.*          # Main app component
│   └── app.config.ts            # App configuration
├── styles.css                   # Global styles
└── index.html                   # Main HTML file
```

## 🎯 Usage

1. **Search for a user**: Enter a GitHub username in the search bar
2. **View profile**: See the user's avatar, bio, location, and statistics
3. **Explore repositories**: Browse through the user's public repositories
4. **Visit GitHub**: Click links to view profiles and repos on GitHub

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Run linting

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- GitHub API for providing user and repository data
- Angular team for the amazing framework
- Open source community for inspiration

---

**Built with ❤️ using Angular**

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
