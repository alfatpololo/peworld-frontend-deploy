import Script from "next/script";
import Image from "next/image";

export default function NavBeforeLogin() {
    return (
        <>
        {/* navbar-section */}
      <header className="bg-white shadow-lg fixed top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Image
                    height={100} width={100} src="/logo.png" className="block py-6" alt="" />
            </div>
            <div className="flex items-center px4">
              {/* <button
                id="hamburger"
                name="hamburger"
                type="buttons"
                className="block absolute right-4"
              >
                <span className="primary hamburger-line transition duration-300 origin-top-left "></span>
                <span className="primary hamburger-line transition duration-300"></span>
                <span className="primary hamburger-line transition duration-300 origin-bottom-left"></span>
              </button> */}
              <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" class="text-base text-primary bg-transparanet border rounded-md border-primary px-6 py-3 mx-3 flex">Masuk</a>
                                </li>
                                <li className="group">
                                    <a href="#about" class="text-base text-white bg-primary border rounded-md border-primary px-6 py-3 mx-3 flex">Daftar</a>
                                </li>
                            </ul>
                        </nav>
            </div>
          </div>
        </div>
      </header>
        </>
    )
}