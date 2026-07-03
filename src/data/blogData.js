export const blogPosts = [
  {
    id: 1,
    slug: "understanding-react-components",
    title: "Understanding React Components",
    category: "React",
    image: "/react-blog.jpg",
    author: "Samson Mungai",
    date: "July 2026",
    readTime: "8 min read",
    description:
      "Learn how React components form the building blocks of modern web applications and why reusability is one of React's greatest strengths.",
    content: `
React is built around the concept of components. A component is an independent, reusable piece of a user interface that can contain its own structure, styling, and functionality.

React components allow developers to divide applications into manageable pieces, making projects easier to maintain and scale. Instead of writing one large HTML page, developers create multiple small components such as Navbar, Hero Section, Skills, Projects, Footer, and Blog Cards.

There are two major types of components:

 Functional Components
 Class Components

Modern React development mainly relies on functional components together with Hooks like useState and useEffect.

During my portfolio development, I learned how reusable components reduce duplicated code while making applications cleaner and easier to update. Components also encourage better organization and improve collaboration in larger projects.
`
  },

  {
    id: 2,
    slug: "mastering-react-router",
    title: "Mastering React Router",
    category: "React",
    image: "/router-blog.jpg",
    author: "Samson Mungai",
    date: "July 2026",
    readTime: "7 min read",
    description:
      "A beginner-friendly guide to React Router and how it enables seamless navigation in Single Page Applications.",
    content: `
React Router enables navigation without refreshing the browser.

Instead of loading a new HTML page every time a user clicks a link, React Router dynamically changes components while keeping the application fast and responsive.

Some important concepts include:

BrowserRouter
Routes
Route
Link
useParams
useNavigate

While building my portfolio, React Router allowed me to separate pages such as Frontend, Networking, Kali Linux, Graphics Design, Education, Blog, and individual Blog Details into independent routes.
`
  },

  {
    id: 3,
    slug: "getting-started-with-kali-linux",
    title: "Getting Started with Kali Linux",
    category: "Cybersecurity",
    image: "/kali-blog.jpg",
    author: "Samson Mungai",
    date: "July 2026",
    readTime: "9 min read",
    description:
      "An introduction to Kali Linux and why it has become the preferred operating system for penetration testers and security researchers.",
    content: `
Kali Linux is a Debian-based Linux distribution developed by Offensive Security.

It comes pre-installed with hundreds of security tools used for penetration testing, digital forensics, wireless security, password auditing, vulnerability assessment, and reverse engineering.

Some of the tools I have explored include:

Nmap
Wireshark
Metasploit 
Framework
Burp Suite
Hydra

Learning Kali Linux has helped me understand how ethical hackers identify vulnerabilities while following responsible security practices.
`
  },

  {
    id: 4,
    slug: "computer-networking-fundamentals",
    title: "Computer Networking Fundamentals",
    category: "Networking",
    image: "/network-blog.jpg",
    author: "Samson Mungai",
    date: "July 2026",
    readTime: "10 min read",
    description:
      "Understanding how devices communicate and why networking knowledge is essential for every cybersecurity professional.",
    content: `
Computer networking enables computers and devices to exchange information efficiently.

A network consists of multiple devices connected through communication media such as Ethernet cables, fiber optics, or wireless technologies.

Some important networking concepts include:

IP Addressing
Subnetting
Routing
Switching
DNS
DHCP
Firewalls

Through networking practicals, I have learned how routers, switches, and firewalls work together to create secure communication between systems.
`
  },

  {
    id: 5,
    slug: "javascript-arrays-and-objects",
    title: "Working with Arrays and Objects in JavaScript",
    category: "JavaScript",
    image: "/javascript-blog.jpg",
    author: "Samson Mungai",
    date: "July 2026",
    readTime: "8 min read",
    description:
      "Understanding two of JavaScript's most important data structures through practical examples.",
    content: `
Arrays and objects are fundamental data structures in JavaScript.

Arrays store ordered collections of data while objects store information as key-value pairs.

Some useful array methods include:

map()
filter()
find()
reduce()
forEach()

During my React projects, I frequently used map() to display lists of skills, projects, and blog articles dynamically.
`
  },

  {
    id: 6,
    slug: "graphic-design-for-developers",
    title: "Why Graphic Design Matters for Developers",
    category: "Graphic Design",
    image: "/design-blog.jpg",
    author: "Samson Mungai",
    date: "July 2026",
    readTime: "6 min read",
    description:
      "Exploring how design principles improve user experience and help developers build visually appealing applications.",
    content: `
Software is not only about functionality—it should also provide an excellent user experience.

Graphic design principles such as typography, spacing, alignment, color theory, and visual hierarchy significantly influence how users interact with applications.

As I continue learning graphic design, I have improved my ability to create cleaner interfaces, professional layouts, and visually consistent portfolio projects.
`
  },

  {
    id: 7,
    slug: "my-learning-journey",
    title: "My Journey into Software Development and Cybersecurity",
    category: "Personal",
    image: "/journey-blog.jpg",
    author: "Samson Mungai",
    date: "July 2026",
    readTime: "11 min read",
    description:
      "Reflecting on my learning journey from writing my first lines of JavaScript to building React applications and studying cybersecurity.",
    content: `
My technology journey began with curiosity about how websites and computer systems work.

As a Computer Security and Forensics student at Jaramogi Oginga Odinga University of Science and Technology, I have continued expanding my knowledge in software development, networking, cybersecurity, and graphic design.

One of my biggest milestones has been building a complete React portfolio from scratch. Along the way I learned:

 React Components
 React Router
 Props
 State Management
 CSS Modules
 Project Structure
 Responsive Design
 Git and GitHub

Every project teaches me something new, and I continue improving my technical skills through consistent practice and hands-on development.
`
  }
];