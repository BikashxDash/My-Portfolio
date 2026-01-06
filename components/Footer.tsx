export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <a href="#home" className="text-textMuted hover:text-primary">
            Home
          </a>
          <a href="#about" className="text-textMuted hover:text-primary">
            About
          </a>
          <a href="#education" className="text-textMuted hover:text-primary">
            Education
          </a>
          <a href="#skills" className="text-textMuted hover:text-primary">
            Skills
          </a>
          <a href="#projects" className="text-textMuted hover:text-primary">
            Projects
          </a>
          <a href="#blog" className="text-textMuted hover:text-primary">
            Blog
          </a>
          <a href="#contact" className="text-textMuted hover:text-primary">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-textMuted">
          © {new Date().getFullYear()} All rights reserved | Bikash Dash <br/>
          Made With ❤️
        </p>

      </div>
    </footer>
  );
}