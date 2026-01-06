import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* HOME */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
      >
        {/* Background Image */}
        <img
          src="/images/Profile Pic.png"
          alt="Profile"
          className="absolute inset-0 w-full h-full object-cover object-[65%_35%]"/>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 w-full">
          <div className="max-w-xl text-white space-y-6">

            <p className="text-lg opacity-80">
              Hi, I’m
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Bikash
            </h1>

            <p className="text-xl opacity-80">
              Frontend Developer & Engineering Student
            </p>

            <p className="opacity-75 leading-relaxed">
              I build clean, responsive, and user-focused web interfaces
              using modern technologies and minimal design principles.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md">Download CV</a>

              <a href="/cv.pdf" className="px-6 py-3 border border-white/40 hover:border-white transition rounded-md">Contact Me</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-6">

              {/* GitHub */}
              <a href="https://github.com/BikashxDash" target="_blank" className="text-white/80 hover:text-white transition" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">

                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.17 1.84 1.17 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.15v3.19c0 .3.2.65.79.54A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-white/80 hover:text-white transition" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">

                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.74 2.63 4.74 6.05V24h-4v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24h-4z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="https://x.com/yourusername" target="_blank" className="text-white/80 hover:text-white transition" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">

                  <path d="M18.9 2H22l-7.4 8.5L23 22h-6.6l-5.2-6.8L5.3 22H2l7.9-9.1L1 2h6.8l4.7 6.2L18.9 2z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://instagram.com/bikashxdash" target="_blank" className="text-white/80 hover:text-white transition" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">

                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5z"/>
                  <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"/>
                  <circle cx="17.5" cy="6.5" r="1"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

          <p className="text-textMuted text-lg leading-relaxed text-center">
            I am a frontend-focused engineering student with a strong interest in
            building clean, responsive, and user-friendly web interfaces. I enjoy
            working with modern technologies and minimal design systems that prioritize
            clarity and usability. Over time, I have developed a habit of learning by
            building real projects, which helps me understand concepts deeply and apply
            them practically. I am continuously improving my skills and aiming to grow
            as a professional developer.
          </p>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section section-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Education
          </h2>

          <div className="relative border-l border-primary/40 pl-8 space-y-10">

            {/* Item 1 */}
            <div>
              <span className="absolute -left-[7px] w-3.5 h-3.5 bg-primary rounded-full"></span>
              <h3 className="text-xl font-semibold">
                Bachelor’s Degree (Engineering)
              </h3>
              <p className="text-textMuted">
                KMBB College of Engineering & Technology
              </p>
              <p className="text-sm text-textMuted">
                2023 – 2027
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <span className="absolute -left-[7px] w-3.5 h-3.5 bg-primary rounded-full"></span>
              <h3 className="text-xl font-semibold">
                Higher Secondary (12th)
              </h3>
              <p className="text-textMuted">
                Divine Higher Secondary School
              </p>
              <p className="text-sm text-textMuted">
                2021 – 2023
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <span className="absolute -left-[7px] w-3.5 h-3.5 bg-primary rounded-full"></span>
              <h3 className="text-xl font-semibold">
                Secondary School (10th)
              </h3>
              <p className="text-textMuted">
                Govt. up graded High School Kainfulia
              </p>
              <p className="text-sm text-textMuted">
                2016 – 2021
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Skill Card */}
            <div className=" border border-primary/30 dark:border-primary/40 rounded-lg p-5">
              <div className="flex justify-between mb-2">
                <span className="font-medium">HTML / CSS</span>
                <span className="text-sm text-textMuted">90%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
                <div className="h-2 bg-primary rounded" style={{ width: "90%" }} />
              </div>
            </div>

            <div className=" border border-primary/30 dark:border-primary/40 rounded-lg p-5">
              <div className="flex justify-between mb-2">
                <span className="font-medium">JavaScript</span>
                <span className="text-sm text-textMuted">80%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
                <div className="h-2 bg-primary rounded" style={{ width: "80%" }} />
              </div>
            </div>

            <div className=" border border-primary/30 dark:border-primary/40 rounded-lg p-5">
              <div className="flex justify-between mb-2">
                <span className="font-medium">React</span>
                <span className="text-sm text-textMuted">75%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
                <div className="h-2 bg-primary rounded" style={{ width: "75%" }} />
              </div>
            </div>

            <div className=" border border-primary/30 dark:border-primary/40 rounded-lg p-5">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Next.js</span>
                <span className="text-sm text-textMuted">70%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
                <div className="h-2 bg-primary rounded" style={{ width: "70%" }} />
              </div>
            </div>

            <div className=" border border-primary/30 dark:border-primary/40 rounded-lg p-5">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Tailwind CSS</span>
                <span className="text-sm text-textMuted">85%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
                <div className="h-2 bg-primary rounded" style={{ width: "85%" }} />
              </div>
            </div>

            <div className=" border border-primary/30 dark:border-primary/40 rounded-lg p-5">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Git & GitHub</span>
                <span className="text-sm text-textMuted">80%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
                <div className="h-2 bg-primary rounded" style={{ width: "80%" }} />
              </div>
            </div>

            <div className=" border border-primary/30 dark:border-primary/40 rounded-lg p-5">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Next.js</span>
                <span className="text-sm text-textMuted">70%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
                <div className="h-2 bg-primary rounded" style={{ width: "70%" }} />
              </div>
            </div>

            <div className=" border border-primary/30 dark:border-primary/40 rounded-lg p-5">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Tailwind CSS</span>
                <span className="text-sm text-textMuted">85%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
                <div className="h-2 bg-primary rounded" style={{ width: "85%" }} />
              </div>
            </div>

            <div className=" border border-primary/30 dark:border-primary/40 rounded-lg p-5">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Git & GitHub</span>
                <span className="text-sm text-textMuted">80%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded">
                <div className="h-2 bg-primary rounded" style={{ width: "80%" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Project Card */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:ring-2 hover:ring-primary/50">
              <h3 className="text-xl font-semibold mb-2">
                Personal Portfolio Website
              </h3>
              <p className="text-textMuted mb-4">
                A clean and minimal personal portfolio built using Next.js and
                Tailwind CSS, focused on performance, responsiveness, and modern UI
                design.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">GitHub</a>

                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">Live Demo</a>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:ring-2 hover:ring-primary/50">
              <h3 className="text-xl font-semibold mb-2">
                Task Management App
              </h3>
              <p className="text-textMuted mb-4">
                A simple task management web application that allows users to add,
                edit, and track daily tasks with a clean and intuitive interface.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">GitHub</a>

                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">Live Demo</a>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:ring-2 hover:ring-primary/50">
              <h3 className="text-xl font-semibold mb-2">
                Landing Page Design
              </h3>
              <p className="text-textMuted mb-4">
                A responsive marketing landing page designed with a strong focus on
                layout, typography, and conversion-friendly UI patterns.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">GitHub</a>

                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">Live Demo</a>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:ring-2 hover:ring-primary/50">
              <h3 className="text-xl font-semibold mb-2">
                Personal Portfolio Website
              </h3>
              <p className="text-textMuted mb-4">
                A clean and minimal personal portfolio built using Next.js and
                Tailwind CSS, focused on performance, responsiveness, and modern UI
                design.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">GitHub</a>

                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">Live Demo</a>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:ring-2 hover:ring-primary/50">
              <h3 className="text-xl font-semibold mb-2">
                Task Management App
              </h3>
              <p className="text-textMuted mb-4">
                A simple task management web application that allows users to add,
                edit, and track daily tasks with a clean and intuitive interface.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">GitHub</a>

                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">Live Demo</a>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:ring-2 hover:ring-primary/50">
              <h3 className="text-xl font-semibold mb-2">
                Landing Page Design
              </h3>
              <p className="text-textMuted mb-4">
                A responsive marketing landing page designed with a strong focus on
                layout, typography, and conversion-friendly UI patterns.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">GitHub</a>

                <a href="#" className=" px-4 py-2 rounded-md border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white dark:border-primary/60 dark:text-primary dark:hover:bg-primary dark:hover:text-white">Live Demo</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">
            Blog
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Blog Card 1 */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:ring-2 hover:ring-primary/50">
              <p className="text-sm text-textMuted mb-2">
                Jan 10, 2025
              </p>
              <h3 className="text-xl font-semibold mb-2">
                How I Started Learning Web Development
              </h3>
              <p className="text-textMuted mb-4">
                A short story about how I entered web development, the mistakes I made,
                and what I learned as a beginner.
              </p>
              <a href="#" className="text-primary text-sm hover:underline">
                Read more →
              </a>
            </div>

            {/* Blog Card 2 */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:ring-2 hover:ring-primary/50">
              <p className="text-sm text-textMuted mb-2">
                Feb 02, 2025
              </p>
              <h3 className="text-xl font-semibold mb-2">
                My First Portfolio Using Next.js
              </h3>
              <p className="text-textMuted mb-4">
                Sharing my experience of building my first modern portfolio using
                Next.js, Tailwind CSS, and React.
              </p>
              <a href="#" className="text-primary text-sm hover:underline">
                Read more →
              </a>
            </div>

            {/* Blog Card 3 */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-300 hover:ring-2 hover:ring-primary/50">
              <p className="text-sm text-textMuted mb-2">
                Feb 20, 2025
              </p>
              <h3 className="text-xl font-semibold mb-2">
                Mistakes Beginners Make in Frontend Development
              </h3>
              <p className="text-textMuted mb-4">
                Common frontend mistakes I made and how beginners can avoid them while
                learning HTML, CSS, and JavaScript.
              </p>
              <a href="#" className="text-primary text-sm hover:underline">
                Read more →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="max-w-md mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

          {/* change mail  */}
          <form action="mailto:yourmail@gmail.com" method="POST" encType="text/plain" className="space-y-4 mt-10">

            <input type="text" name="Name" placeholder="Your Name" required className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-transparent"/>

            <input type="email" name="Email" placeholder="Your Email" required className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-transparent"/>

            <textarea name="Message" placeholder="Your Message" rows={5} required className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 bg-transparent"/>

            <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90 transition">Send Message</button>

          </form>
        </div>
      </section>

    </main>
  );
}
