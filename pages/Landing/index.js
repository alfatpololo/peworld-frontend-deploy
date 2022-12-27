// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import tailwindConfig from '../../tailwind.config';
import { hamburger } from "../../dist/js/script";
import Script from "next/script";
import Image from "next/image";
import NavBeforeLogin from "../../components/navbeforelogin";
import Footer from "../../components/footer/Footer";
import NavAfterLogin from "../../components/navafterloginpages";

export default function Landing() {
  return (
    <>
      <NavAfterLogin />

      {/* Hero Section */}
      <section className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-dark font-semibold text-3xl md:text-6xl md:leading-normal">
                Talenta terbaik negri untuk perubahan revolusi 4.0
              </h1>
              <h2 className="text-hardGrey font-normal text-base text-md mt-3 leading-relaxed mb-12 lg:text-xl lg:leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et
              </h2>

              <a
                href="#"
                className="text-base font-bold text-white bg-primary py-6 rounded-md px-8 hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"
              >
                Mulai Dari Sekarang
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <Image src="/image1.png" width={500} height={500} alt="" className="max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}

      {/* FAQ Section */}
      <section className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <Image src="/image2.png" width={500} height={500} alt="" />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h1 className="text-dark font-semibold pt-4 text-3xl lg:text-5xl lg:leading-normal">
                Kenapa harus mencari tallent di peworld
              </h1>
              <div className="flex flex-wrap pt-5">
                <Image
                    height={20} width={20}
                 src="/tick 1.png" className="pt-6" alt="" />
                <p className="px-3 pt-6">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex flex-wrap">
                <Image
                    height={20} width={20}
                 src="/tick 1.png" className="pt-6" alt="" />
                <p className="px-3 pt-6">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex flex-wrap">
                <Image
                    height={20} width={20}
                 src="/tick 1.png" className="pt-6" alt="" />
                <p className="px-3 pt-6">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex flex-wrap">
                <Image
                    height={20} width={20}
                 src="/tick 1.png" className="pt-6" alt="" />
                <p className="px-3 pt-6">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}

      {/* Skill Section */}
      <section className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <h1 className="text-dark font-semibold pt-4 text-3xl lg:text-5xl lg:leading-normal">
                Skill Tallent
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <div className="flex flex-wrap">
                <div className="w-1/2 px-4 lg:w-1/2">
                  <div className="flex flex-wrap pt-5">
                    <Image
                    height={20} width={20}
                     src="/tick 13.png" className="pt-6" alt="" />
                    <p className="h-10 w-5 px-3 pt-6">Java</p>
                  </div>
                  <div className="flex flex-wrap">
                    <Image
                    height={20} width={20}
                     src="/tick 13.png" className="pt-6" alt="" />
                    <p className="h-10 w-5 px-3 pt-6">Kotlin</p>
                  </div>
                  <div className="flex flex-wrap">
                    <Image
                    height={20} width={20}
                     src="/tick 13.png" className="pt-6" alt="" />
                    <p className="h-10 w-5 px-3 pt-6">PHP</p>
                  </div>
                  <div className="flex flex-wrap">
                    <Image
                    height={20} width={20} src="/tick 13.png" className="pt-6" alt="" />
                    <p className="h-10 w-5 px-3 pt-6">Javascript</p>
                  </div>
                </div>
                <div className="w-1/2 px-4 lg:w-1/2">
                  <div className="flex flex-wrap pt-5">
                    <Image
                    height={20} width={20} src="/tick 13.png" className="pt-6" alt="" />
                    <p className="h-10 w-5 px-3 pt-6">Golang</p>
                  </div>
                  <div className="flex flex-wrap">
                    <Image
                    height={20} width={20} src="/tick 13.png" className="pt-6" alt="" />
                    <p className="h-10 w-5 px-3 pt-6">C++</p>
                  </div>
                  <div className="flex flex-wrap">
                    <Image
                    height={20} width={20} src="/tick 13.png" className="pt-6" alt="" />
                    <p className="h-10 w-5 px-3 pt-6">Ruby</p>
                  </div>
                  <div className="flex flex-wrap">
                    <Image
                    height={20} width={20} src="/tick 13.png" className="pt-6" alt="" />
                    <p className="h-10 w-5 px-3 pt-6">10+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mt-10 lg:w-1/2">
              <Image src="/image3.png" width={500} height={500} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Skill Section */}

      {/* Testimonials Section */}
      <section className="pt-20 pb-32 bg-anotherWhite">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 pb-28">
              <h1 className="text-3xl text-dark font-semibold lg:text-center lg:text-4xl">
                Their opinion about peworld
              </h1>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <Image
                height={100} width={100}
                  src="/harry.png"
                  alt="programming"
                  class="object-center mx-auto py-6"
                />
                <div class="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      class="block mb-3 font-semibold text-xl text-center text-dark hover:text-primary truncate"
                    >
                      Harry Styles
                    </a>
                  </h3>
                  <p class="font-medium text-base text-slate-400 mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae, sed.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <Image
                height={100} width={100}
                  src="/harry.png"
                  alt="programming"
                  class="object-center mx-auto py-6"
                />
                <div class="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      class="block mb-3 font-semibold text-xl text-center text-dark hover:text-primary truncate"
                    >
                      Harry Styles
                    </a>
                  </h3>
                  <p class="font-medium text-base text-slate-400 mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae, sed.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <Image
                height={100} width={100}
                  src="/harry.png"
                  alt="programming"
                  class="object-center mx-auto py-6"
                />
                <div class="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      class="block mb-3 font-semibold text-xl text-center text-dark hover:text-primary truncate"
                    >
                      Harry Styles
                    </a>
                  </h3>
                  <p class="font-medium text-base text-slate-400 mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae, sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}

      {/* Startnow Section */}
      <section className="bg-white pt-24 w-full flex items-center z-10">
        <div className="container ">
          <div className="block lg:flex items-center justify-between relative bg-primary rounded-tl-3xl rounded-md rounded-br-3xl py-8 px-8 lg:py-16 lg:px-10">
            <div className="px-4">
              <h1 className="text-white text-semibold text-xl lg:text-5xl lg:w-1/2 lg:leading-relaxed">Lorem ipsum dolor sit amet</h1>
            </div>
            <div className="block lg:flex items-center px-4 py-10">
            <a
                href="#"
                className="text-xs font-bold text-primary bg-white py-4 px-16 rounded-md lg:py-6 lg:text-base lg:px-18 hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"
              >
                Mulai Dari Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Startnow Section */}

      <Footer/>

      {/* <Script src="dist/js/script.js"></Script> */}
    </>
  );
}
