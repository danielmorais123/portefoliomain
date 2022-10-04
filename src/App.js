import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />
      <section className="snap-start" id="main">
        <MainSection />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <a href="#main">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition duration-300"
              src="https://scontent.flis11-2.fna.fbcdn.net/v/t1.6435-9/125310022_1652899404882858_6815665546785122466_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Aqkh56BfusQAX_V-goX&_nc_ht=scontent.flis11-2.fna&oh=00_AT_lllQzhuIpir8Bgj7vNkdSNUgNIKzMcOEM7ReOLyRvrQ&oe=63593740"
            />
          </div>
        </footer>
      </a>
    </div>
  );
}

export default App;
