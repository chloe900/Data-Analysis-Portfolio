import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
export default function Section2() {
  return (
    <section id="projects" className="bg-[#172554] bg-cover min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-6xl lg:w-full">
        <h1 className="text-6xl font-serif text-center mb-10">Projects</h1>
        <section  className="overflow-x-auto">
          <table className="table-auto w-full border-white border-2">
            <tbody className="flex flex-wrap">
              <tr className="flex flex-col md:flex-row w-full">
                <td className="p-4 border-white border-2 flex-1">
                  <div className="flex flex-col items-center">
                    <img src="/images/project1.webp" alt="Project 1" className="w-full max-w-full h-auto mb-4" />
                    <h2 className="text-2xl font-serif">Covid-19 Statistics</h2>
                    <p className="text-lg text-center">An SQL project that analyzed Covid-19 Statistics from 2020 to April 2021.</p>
                    <a href = "https://public.tableau.com/views/CovidDashboard_17368609440570/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target = "_blank" rel="noreferrer">
                          <i className="fa-solid fa-arrow-right h-8 w-8 text-l text-white p-2"></i>
                    </a>
                  </div>
                </td>
                <td className="p-4 border-white border-2 flex-1">
                  <div className="flex flex-col items-center">
                    <img src="/images/project2.webp" alt="Project 2" className="w-full max-w-full h-auto mb-4" />
                    <h2 className="text-2xl font-serif">Project 2</h2>
                    <p className="text-lg">Description of Project 2</p>
                    <a href="https://github.com/chloe900" target="_blank" rel="noreferrer">
                      <i className="fa-solid fa-arrow-right h-8 w-8 text-l text-white p-2"></i>
                    </a>
                  </div>
                </td>
                <td className="p-4 border-white border-2 flex-1">
                  <div className="flex flex-col items-center">
                    <img src="/images/project3.webp" alt="Project 3" className="w-full max-w-full h-auto mb-4" />
                    <h2 className="text-2xl font-serif">Project 3</h2>
                    <p className="text-lg">Description of Project 3</p>
                    <a href="https://github.com/chloe900" target="_blank" rel="noreferrer">
                      <i className="fa-solid fa-arrow-right h-8 w-8 text-l text-white p-2"></i>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </section>
  );
}