import Script from "next/script";
import Image from "next/image";

export default function Footer() {
    return (
        <>
        {/* Footer section */}
       <footer className="bg-primary mt-32 pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 md:w-1/2">
              <Image
                    height={100} width={100} src="/logo_white.png" alt="" className="mb-5"/>
              <p className="text-white font-light lg:text-base lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>
            <hr className="mt-10 w-full"></hr>
            <div className="w-full px-4 mb-5 md:text-start md:w-1/2">
              <p className="mt-5 font-light text-base text-white">2020 Pewworld. All right reserved</p>
            </div>
            <div className="w-full px-4 mb-5 md:text-end md:w-1/2  md:flex md:justify-between">
              <p className="mt-5 font-light text-base text-white md:mx-auto">Telepon</p>
              <p className="mt-5 font-light text-base text-white">Email</p>
            </div>
          </div>
        </div>
       </footer>
      {/* Footer section */}
        </>
    )
}