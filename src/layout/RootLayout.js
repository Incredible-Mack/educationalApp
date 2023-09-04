import { Outlet, NavLink } from "react-router-dom";
import { Footer } from "../component/Footer";
const currentUrl = window.location.href;
const shouldDisplayComponent = !currentUrl.includes('student');

export const RootLayout = () => {
  return (
    <div className="relative">
     {shouldDisplayComponent &&   <div className="fixed  font-body z-[1000] ">
        <header className="relative">
          <nav className="bg-transparent justify-between  items-center w-screen">
            <div className="flex justify-between  items-center">
              <div className="flex-shrink-0 px-5 font-bold text-slate-300 text-lg">
                ISLT
              </div>
              <div className="bg-purple-700 p-5">
                <ul>
                  <li className="px-3 font-bold text-white">
                    <NavLink>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 inline-block mx-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                      </svg>
                      Menu
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div> }
      <main>
        <Outlet />
      </main>
      {shouldDisplayComponent &&  <Footer /> }
    </div>
  );
};
