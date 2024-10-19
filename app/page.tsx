import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Image from "next/image";
import  profile  from "./public/profile.jpg";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
       <section className="bg-gradient-to-bl from-cyan-600 to-cyan-900 text-white py-20">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold">Hero Section</h1>
            <p className="mt-4 text-lg">I am MOID UDDIN, a Graphic Designer</p>
          </div>
        </section>

        <section className="py-10 bg-gradient-to-bl from-gray-100 to-gray-300">
          <div className="text-center px-4">
            <h2 className="text-3xl font-bold mb-4">About Me Section</h2>
            <p className="text-lg">I have completed my O-Levels in Science and A-Levels in Pre-Engineering. I am passionate about designing and bringing creative ideas to life.</p>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Portfolio Section</h2>
            <Image src= {profile} alt="Profile Picture" className="rounded-lg w-48 h-48 mr-4 mt-4" />

           
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">Skills</h3>
              <ul className="list-disc list-inside mt-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>TypeScript</li>
                <li>Speaking Skills</li>
              </ul>
            </div>

           
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">Education</h3>
              <p className="mt-2">O-Levels in Science, A-Levels in Pre-Engineering</p>
            </div>

            
            <div>
              <h3 className="text-2xl font-semibold">Experience</h3>
              <p className="mt-2">2 years as a Graphic Designer at CDX</p>
              <p>Currently working as a Graphic Designer at Viral Verse</p>
            </div>
          </div>
        </section>
        </main>
        <Footer></Footer>
    </div>
  );
}
