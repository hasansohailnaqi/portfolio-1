import Certification from './components/Certification';
import Project from './components/Project';
export default  function Home() {
  return (
    <div>
    <h1 className="text-7xl font-extrabold">Hello I&apos;m
      <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Ajmal Khan!</span>
    </h1>
    <p className="mt-3 text-xl text-gray-600">Hi everyone! Check out my projects!</p>
    <Project />
    <Certification />
      </div>
)}
