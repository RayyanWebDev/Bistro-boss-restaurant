const Navbar = () => {
  return (
    <>
      <div className="navbar backdrop-filter bg-neutral-800/50  shadow-xl fixed z-10 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>HOME</a>
              </li>

              <li>
                <a>CONTACT US</a>
              </li>
              <li>
                <a>DASHBOARD</a>
              </li>
              <li>
                <a>OUR MENU</a>
              </li>
              <li>
                <a>OUR SHOP</a>
              </li>
              <li>
                <a className="indicator ">
                  <img
                    className="w-12 h-12"
                    src="https://i.ibb.co/n7R65WB/151-1511569-cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
                    alt=""
                  />
                  <span className="badge badge-sm indicator-item">8</span>
                </a>
              </li>
              <li>
                <a>SIGN IN</a>
              </li>
            </ul>
          </div>
          <div className="">
            <img src="https://i.ibb.co/YczSfxD/BISTRO-BOSS.png" alt="" />
            <img src="https://i.ibb.co/nnCK180/Restaurant.png" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu menu-horizontal px-1">
            <li className="font-extrabold text-white">
              <a>HOME</a>
            </li>

            <li className="font-extrabold text-white">
              <a>CONTACT US</a>
            </li>
            <li className="font-extrabold text-white">
              <a>DASHBOARD</a>
            </li>
            <li className="font-extrabold text-white">
              <a>OUR MENU</a>
            </li>
            <li className="font-extrabold text-white">
              <a>OUR SHOP</a>
            </li>
            <li>
              <a className="indicator ">
                <img
                  className="w-12 h-12"
                  src="https://i.ibb.co/n7R65WB/151-1511569-cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
                  alt=""
                />
                <span className="badge badge-sm indicator-item">8</span>
              </a>
            </li>
            <li className="font-extrabold text-white">
              <a>SIGN IN</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
