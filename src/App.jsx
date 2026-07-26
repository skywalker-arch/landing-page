import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if  (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');

    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]); 

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      
      <nav className="sticky top-0 z-50 bg-zinc-950/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">C</div>
            <span className="text-2xl font-semibold tracking-tighter">CITA TECH</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl hover:bg-zinc-800 transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a href="#contact" className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 rounded-2xl font-medium transition">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative py-28 md:py-40 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f97316_0.8px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter mb-8">
            With Innovation,<br />We Build More.<br />
            <span className="text-orange-500">This is Empowerment.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
            For Startups, Companies, Individuals. Simply Everyone in Kenya!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" 
               className="px-10 py-4 border-2 border-zinc-700 hover:border-orange-500 rounded-3xl text-lg font-medium transition">
              Our Works
            </a>
            <a href="#contact" 
               className="px-10 py-4 bg-lime-400 hover:bg-lime-500 text-black rounded-3xl text-lg font-semibold transition shadow-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. Our Services */}
      <section id="services" className="py-20 bg-zinc-900 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Transform your business with powerful websites, POS systems, and custom software.
            </p>
          </div>

          <div className="space-y-8">
            {/* Service 1 - Web Development */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-10 hover:border-orange-500/30 transition group">
              <div className="flex items-start gap-5">
                <div className="text-4xl text-orange-500 mt-1">💻</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold mb-4">Web Development</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    High-converting modern websites that help your business stand out and generate more revenue.
                  </p>
                  <button className="mt-8 px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-2xl text-sm font-medium transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Service 2 - POS Systems */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-10 hover:border-orange-500/30 transition group">
              <div className="flex items-start gap-5">
                <div className="text-4xl text-orange-500 mt-1">🛒</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold mb-4">POS Systems</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Real-time sales and inventory tracking systems built for Kenyan businesses.
                  </p>
                  <button className="mt-8 px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-2xl text-sm font-medium transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Service 3 - Custom Software */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-10 hover:border-orange-500/30 transition group">
              <div className="flex items-start gap-5">
                <div className="text-4xl text-orange-500 mt-1">⚙️</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold mb-4">Custom Software</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Tailored software solutions built specifically for your business needs.
                  </p>
                  <button className="mt-8 px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-2xl text-sm font-medium transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose CITA TECH */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose CITA TECH</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-orange-500 text-4xl mb-6">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Expertise</h3>
              <p className="text-zinc-400">Our team consists of highly skilled professionals delivering cutting-edge solutions.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-orange-500 text-4xl mb-6">❤️</div>
              <h3 className="text-2xl font-semibold mb-4">Client-Centric Approach</h3>
              <p className="text-zinc-400">We listen to your needs and deliver solutions tailored specifically for you.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-orange-500 text-4xl mb-6">📈</div>
              <h3 className="text-2xl font-semibold mb-4">Results-Driven</h3>
              <p className="text-zinc-400">We focus on delivering measurable results that grow your business.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-orange-500 text-4xl mb-6">🤝</div>
              <h3 className="text-2xl font-semibold mb-4">Collaborative Partnership</h3>
              <p className="text-zinc-400">We become your long-term technology partner, not just a service provider.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section id="testimonials" className="py-20 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say About Us</h2>
          <p className="text-center text-zinc-400 mb-12">Real stories from Kenyan businesses we've helped grow.</p>

          {/* Add 2-3 testimonial cards here similar to GiGet style */}
        </div>
      </section>

      {/* 5. Contact Form */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Thank You For Your Interest In CITA TECH</h2>
            <p className="text-zinc-400">We would love to hear from you and discuss how we can help bring your ideas to life.</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10 space-y-8">
            <div>
              <label className="block text-sm mb-2 text-zinc-400">Full Name</label>
              <input type="text" className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500" placeholder="Type Here" />
            </div>

            <div>
              <label className="block text-sm mb-2 text-zinc-400">Email</label>
              <input type="email" className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500" placeholder="Type Here" />
            </div>

            <div>
              <label className="block text-sm mb-3 text-zinc-400">Why are you contacting us?</label>
              <div className="space-y-3">
                {['Web Development', 'POS System', 'Custom Software', 'Other'].map((option) => (
                  <label key={option} className="flex items-center gap-3">
                    <input type="radio" name="service" className="accent-orange-500" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-zinc-400">Your Message</label>
              <textarea className="w-full bg-zinc-950 border border-zinc-700 rounded-3xl px-6 py-4 h-32 focus:outline-none focus:border-orange-500" placeholder="Your Message Here"></textarea>
            </div>

            <button className="w-full py-5 bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-3xl text-lg transition">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-3xl text-white">C</div>
              <span className="text-2xl font-semibold">CITA TECH</span>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-orange-500">Home</a>
              <a href="#services" className="hover:text-orange-500">Services</a>
              <a href="#" className="hover:text-orange-500">Work</a>
              <a href="#contact" className="hover:text-orange-500">Contact</a>
            </div>

            <div className="text-sm text-zinc-400">
              <div>info@citatech.co.ke</div>
              <div>+254 712 128 45Q</div>
              <div>Nairobi, Kenya</div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-800 text-xs text-zinc-600">
            © 2026 CITA TECH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;