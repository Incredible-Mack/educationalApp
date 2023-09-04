import bag from '../img/bag.png'

const Login = () => {
  return (
    <div className="p-40">
      <div className="grid grid-cols-3 gap-0  rounded-2xl ">
        <div className="col-span-2 bg-white border border-purple-700 pt-20 pb-60 pl-24 pr-24  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <p className="font-bold text-center text-4xl text-purple-700">
            Hello!
          </p>
          <p className="font-bold text-center text-base text-purple-900 font-text capitalize ">
            Sing into your account
          </p>
          <form>
            <div className="mb-4 mt-3">
              <div className="flex items-center  p-4 rounded-full  px-3 bg-white border-purple-700 border">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-purple-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  className="focus:outline-none outline-none flex-grow bg-white"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4 mt-3 ">
              <div className="flex items-center  p-4 border-purple-700 border rounded-full px-3 bg-white ">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-purple-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  id="password"
                  className="focus:outline-none outline-none flex-grow bg-white"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div class="flex items-center">
                {/* <input  id="checked-checkbox" type="checkbox" value="" className="outline-none border-none"  />
              <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"> me</label>        */}
                <label class="container ml-2 text-base font-medium ">
                Remember Me
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div>Forget Password</div>
            </div>
            <button className=" text-purple-700 border-purple-700 border w-full rounded-md py-2 px-4 hover:bg-purple-700 hover:text-white focus:outline-none">
              Login
            </button>
          </form>
        </div>
        <div className="col-span-1 bg-purple-700 pt-24 text-center">
          <h3 className='text-bold text-2xl mb-2 text-white'>Welcome Back To ISLT</h3>
          <p className='p-3 text-purple-50  font-text'> Consequat ex occaecat elit anim do sit cupidatat esse ut duis pariatur Lorem sunt. Commodo ex labore commodo id commodo Lorem velit.</p>
       <img src={bag} alt="bag"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
