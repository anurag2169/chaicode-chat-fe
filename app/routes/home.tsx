import {
  MessageCircle,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const HomePage = () => {
  const mentors = [
    {
      id: 1,
      name: "Hitesh Choudhary",
      title: "Educator and Mentor",
      description:
        "Expert in JavaScript, React, Node.js, and modern web development. Creator of popular programming tutorials and courses.",
      image: "/hitesh-sir.png",
      specialties: ["JavaScript", "React", "Node.js", "MongoDB"],
      experience: "10+ Years",
      students: "500K+",
      social: {
        twitter: "https://twitter.com/Hiteshdotcom",
        github: "https://github.com/hiteshchoudhary",
        linkedin: "https://linkedin.com/in/hiteshchoudhary",
      },
    },
    {
      id: 2,
      name: "Piyush Garg",
      title: "DevOps Engineer & Cloud Architect",
      description:
        "Specialized in DevOps, Cloud Computing, Docker, Kubernetes, and system architecture. Passionate about scalable solutions.",
      image: "/piyush-sir.jpg",
      specialties: ["DevOps", "AWS", "Docker", "Kubernetes"],
      experience: "8+ Years",
      students: "200K+",
      social: {
        twitter: "https://twitter.com/piyushgargdev",
        github: "https://github.com/piyushgarg-dev",
        linkedin: "https://linkedin.com/in/piyushgarg-dev",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-100">Chaicode Chat</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#mentors"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                Mentors
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-br from-gray-800 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
              Learn from the
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                {" "}
                Best
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with industry experts and get personalized guidance
              through our AI-powered chat platform. Learn programming, DevOps,
              and modern web development from experienced mentors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Get Started
              </button>
              <button className="border-2 border-orange-500 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500/10 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Mentor Cards */}
          <div
            id="mentors"
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {mentors.map((mentor) => (
              <Link
                key={mentor.id}
                to="/chat"
                className="group bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-orange-500/20"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-orange-400 transition-colors">
                        {mentor.name}
                      </h3>
                      <p className="text-orange-400 font-medium">
                        {mentor.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {mentor.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialties.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between text-sm text-gray-400">
                      <span>
                        <strong className="text-gray-200">Experience:</strong>{" "}
                        {mentor.experience}
                      </span>
                      <span>
                        <strong className="text-gray-200">Students:</strong>{" "}
                        {mentor.students}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={mentor.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Twitter className="w-4 h-4 text-gray-300 hover:text-orange-400" />
                      </a>
                      <a
                        href={mentor.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 text-gray-300 hover:text-orange-400" />
                      </a>
                      <a
                        href={mentor.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-4 h-4 text-gray-300 hover:text-orange-400" />
                      </a>
                    </div>

                    <div className="flex items-center text-orange-400 font-medium group-hover:text-orange-300">
                      <span className="mr-2">Start Chat</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Chaicode Chat</h3>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Connect with industry experts and accelerate your learning
                journey through personalized AI-powered conversations.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#mentors"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Mentors
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-orange-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Chaicode Chat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
