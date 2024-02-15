import { footerLinks } from "./constant";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 px-12 pt-12">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        
        <div className="flex flex-1 justify-around flex-wrap ">
        <div className="flex flex-col ">
          <h3 className="text-3xl pb-3 font-bold">Fit Buddy</h3>
          <p className="font-semibold leading-8">
            Get ready for the new lifestyle. Find Your <br /> perfect Routin In
            hear. Get Rewards
          </p>
        </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-3xl font-xl font-bold font-montserrat text-white ">
                {section.title}
              </h3>

              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white hover:text-slate-gray font-semibold"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
