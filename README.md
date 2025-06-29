# Anuj Dekate - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Firebase. Showcase your skills, projects, and professional information with a beautiful, interactive design.

## 🚀 Features

### ✨ Modern Design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Dark Theme**: Beautiful dark gradient design with purple accents
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Professional UI**: Clean, modern interface using shadcn/ui components

### 📱 Sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About**: Professional background and education information
- **Skills**: Comprehensive skill showcase with animated icons (6 categories)
- **Projects**: Portfolio projects with live demo and GitHub links
- **Experience**: Work history and certifications
- **Contact**: Interactive contact form with multiple contact methods

### 🔧 Technical Features
- **React 18**: Latest React features and hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Firebase Backend**: Contact form submissions stored in Firestore
- **Vercel Analytics**: Built-in analytics tracking
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags and structured data

### 🎯 Skills Showcase
- **Frontend Development**: React.js, JavaScript, HTML, CSS, Tailwind CSS
- **Programming Languages**: Python, C++, C, JavaScript
- **AI & Modern Tools**: AI Prompting, Prompt Engineering, ChatGPT, Vercel
- **Design & UI/UX**: Figma, Canva, UI/UX Design, Content Management
- **Development Tools**: GitHub, Version Control, Cursor
- **Soft Skills**: Problem Solving, Project Management, Leadership, Communication

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd anuj-nextgen-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Firebase Setup

#### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Go to Project Settings → General → Your Apps
5. Add a web app and copy the configuration

#### Update Firebase Config
Edit `src/lib/firebase.js` and replace the placeholder config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

#### Set Up Firestore Rules
In Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow write: if true;
      allow read: if false;
    }
  }
}
```

### 4. Update Project Links

#### Update Project URLs
Edit `src/components/Projects.jsx` and replace placeholder URLs:

```javascript
{
  title: "Your Project",
  // ... other properties
  githubUrl: "https://github.com/yourusername/your-project",
  liveUrl: "https://your-project.vercel.app"
}
```

#### Update Social Media Links
Edit `src/components/Hero.jsx` and `src/components/Contact.jsx` with your actual links.

### 5. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:8082` to see your portfolio!

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. **Deploy to Vercel**
- Go to [Vercel](https://vercel.com/)
- Import your GitHub repository
- Vercel will automatically detect it's a Vite project
- Deploy!

3. **Environment Variables** (Optional)
Add Firebase config as environment variables in Vercel dashboard.

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
- Drag and drop the `dist` folder to Netlify
- Or connect your GitHub repository

## 📊 Analytics

Vercel Analytics is already integrated! View your analytics in the Vercel dashboard after deployment.

## 🎨 Customization

### Colors and Theme
Edit `tailwind.config.js` to customize colors and theme.

### Content
Update the following files with your information:
- `src/components/Hero.jsx` - Personal info and social links
- `src/components/About.jsx` - About section content
- `src/components/Skills.jsx` - Skills and categories
- `src/components/Projects.jsx` - Project details and links
- `src/components/Experience.jsx` - Work experience and certifications
- `src/components/Contact.jsx` - Contact information

### Styling
- Modify Tailwind classes in components
- Update CSS variables in `src/index.css`
- Customize animations and transitions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Contact Form Backend

The contact form uses Firebase Firestore to store submissions:

- **Collection**: `contacts`
- **Fields**: name, email, subject, message, timestamp, status
- **Security**: Write-only access (no read permissions)

## 🎯 SEO Optimization

- Meta tags in `index.html`
- Open Graph tags for social sharing
- Structured data for better search results
- Semantic HTML structure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Anuj Dekate**
