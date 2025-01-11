// filepath: /c:/Users/Taboka Chloé Dube/Desktop/DA-Portfolio/src/index.js
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Header() {
  return (
    <header className="bg-[#F4F5FF] text-white p-12 border-b-2 border-[#020617]">
      <nav className="max-w-6xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <i className="fa-brands fa-codepen h-8 w-8 mt-2 text-3xl text-[#1e3a8a]"></i>
          <h1 className="text-xl font-serif text-[#1e3a8a]">Chloe's Portfolio</h1>
        </div>
        <span className = "mt-4 font-serif text-xl">
        <button className="bg-[#020617] hover:bg-red-700 text-white font-bold py-3 px-12 rounded-full">Menu</button>
        </span>
      </nav>
    </header>
  );
}
  