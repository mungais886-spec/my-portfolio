import { Routes, Route } from "react-router-dom"

import { Navbar } from "./Navbar"
import { Hero } from "./Hero"
import { About } from "./About"
import { Skills } from "./Skills"
import { Projects } from "./Projects"
import { Experience } from "./Experience"
import { Contact } from "./Contact"

import { Frontend } from "./pages/Frontend"
import { Cybersecurity } from "./pages/Cybersecurity"
import { Kali } from "./pages/Kali"
import { Networking } from "./pages/Networking"
import { Graphics } from "./pages/Graphics"
import { More } from "./pages/More"
import { Blog } from "./pages/Blog";
import { ErrorPage } from "./ErrorPage"
import { BlogDetails } from "./pages/BlogDetails";

import "./App.css"


function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About 
      button2Text="No me more"
      />

        <section className="skillswrapper">
        <section className="skillsHero">

          <div className="skillsOverlay">

            <span className="skillsTag">
              MY EXPERTISE
            </span>

            <h1>
              Skills & Technologies
            </h1>

            <p>
              Throughout my journey in software development, cybersecurity,
              networking, graphic design, and digital media, I have developed
              practical skills that enable me to build modern applications,
              secure digital systems, solve real-world problems, and continuously
              learn emerging technologies.
            </p>

          </div>

        </section>

                <section className="skillsSection">

                  <Skills
                    title="Frontend Development"
                    content="Building modern, responsive, and user-focused web applications using JavaScript and React. Experienced in creating clean interfaces, reusable components, and interactive digital experiences while emphasizing performance, maintainability, and usability."
                    image="/frontend.png"
                    link="/frontend"
                  />

                  <Skills
                    title="Cybersecurity Fundamentals"
                    content="Developing practical knowledge in Computer Security and Forensics through continuous learning and hands-on exploration of digital security concepts, system protection, secure practices, and cybersecurity workflows."
                    image="/cyber.png"
                    link="/cybersecurity"
                  />

                  <Skills
                    title="Kali Linux Tools"
                    content="Hands-on experience working with Kali Linux environments and security-focused tools to explore security testing concepts, system analysis techniques, and ethical approaches to understanding vulnerabilities and strengthening systems."
                    image="/kali.png"
                    link="/kali"
                  />

                  <Skills
                    title="JavaScript Development"
                    content="Strong foundation in JavaScript for developing dynamic applications, implementing interactive features, solving logical problems, and creating scalable frontend solutions."
                    image="/js.png"
                    link="/frontend"
                  />

                  <Skills
                    title="React Ecosystem"
                    content="Experience building component-based interfaces with React while applying structured development practices and creating smooth, engaging user experiences."
                    image="/react.png"
                    link="/frontend"
                  />

                  <Skills
                    title="Computer Networking"
                    content="Growing understanding of network communication, infrastructure concepts, connectivity principles, and how secure networking contributes to reliable digital systems."
                    image="/network.png"
                    link="/networking"
                  />

                  <Skills
                    title="Graphic Design & Creative Media"
                    content="Combining technical thinking with creativity to produce visually appealing content and digital experiences. Applying design principles to improve communication, branding, and user engagement."
                    image="/graphics.png"
                    link="/graphics"
                  />

                  <Skills
                    title="Digital Communication & Media Production"
                    content="Actively contributing through creative media work in the CU Media Team, strengthening skills in collaboration, visual storytelling, content creation, and delivering impactful digital communication."
                    image="/media.png"
                    link="/graphics"
                  />

                  <Skills
                    title="Problem Solving & Analytical Thinking"
                    content="Applying curiosity, structured thinking, and continuous experimentation to approach technical challenges, understand complex systems, and develop practical solutions."
                    image="/problem.png"
                    link="/frontend"
                  />

                  <Skills
                    title="Continuous Learning & Innovation"
                    content="Committed to ongoing growth in technology by exploring emerging tools, improving technical capabilities, and staying engaged with modern development and cybersecurity practices."
                    image="/learning.png"
                    link="/frontend"
                  />

                </section>

              </section>


        <section className="projectsHero">

          <div className="projectsOverlay">

            <span className="projectsTag">
              FEATURED WORK
            </span>

            <h1>
              Projects I've Built
            </h1>

            <p>
              Every project represents an opportunity to solve real-world problems,
              strengthen my technical skills, and apply best practices in software
              development. These projects demonstrate my experience in frontend
              development, secure application design, financial systems, and modern
              web technologies while emphasizing clean architecture, usability,
              scalability, and security.
            </p>

          </div>

        </section>


        <section className="projectsWrapper">

          <h1 className="projectsHeading">
            Featured Projects
          </h1>

          <p className="projectsIntro">
            A selection of projects that showcase my passion for software
            development, problem solving, and secure application design.
          </p>

          <div className="projectsGrid">

            <Projects
              title="Secure Banking Management System"
              description="A secure web-based banking application designed to simulate modern digital banking. The system enables users to create accounts, transfer funds, monitor transactions, and securely manage finances while implementing authentication, authorization, and secure data handling."
              buttonText="View Project"
              image="/bank.png"
            />

            <Projects
              title="Loan Management System"
              description="A comprehensive application that automates loan applications, approval workflows, repayment schedules, customer management, and reporting for financial institutions."
              buttonText="View Project"
              image="/loan.png"
            />

            <Projects
              title="Digital Wallet & Payment Platform"
              description="A secure payment platform that enables users to deposit funds, transfer money, receive payments, and manage multiple virtual wallets with modern payment security practices."
              buttonText="View Project"
              image="/digital.png"
            />

            <Projects
              title="SACCO Management System"
              description="A complete management platform for Savings and Credit Cooperative Organizations that manages members, savings, loans, dividends, and financial reporting."
              buttonText="View Project"
              image="/sacco.png"
            />

            <Projects
              title="Expense Tracker & Budget Planner"
              description="A budgeting application that allows users to monitor spending, categorize expenses, create monthly budgets, and visualize financial insights through dashboards."
              buttonText="View Project"
              image="/expense.png"
            />

            <Projects
              title="Investment Portfolio Tracker"
              description="A financial dashboard that helps investors monitor portfolios, calculate returns, analyze performance, and visualize investment growth over time."
              buttonText="View Project"
              image="/investment.png"
            />

            <Projects
              title="Secure Document Verification System"
              description="A secure platform for storing and verifying digital documents using authentication, encryption, and controlled access to protect sensitive information."
              buttonText="View Project"
              image="/documentation.png"
            />

          </div>

        </section>

        <section>
          <Experience />
        </section>

        <Contact />
    </>
  )
}

function App() {
  return (
    <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/frontend"element={<Frontend />}/>
        <Route path="/Cybersecurity"element={<Cybersecurity />}/>
        <Route path="/kali"element={<Kali />}/>
        <Route path="/networking"element={<Networking />}/>
        <Route path="/graphics" element={<Graphics />}/>
        <Route path="/More"element={<More />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/blog/:slug"element={<BlogDetails />}/>
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App 