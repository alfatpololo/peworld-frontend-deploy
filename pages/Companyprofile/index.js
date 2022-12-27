import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import Tabs from "../../components/tabs/Tabs";

export default function Companyprofile() {

  
  return (
    <>
      <NavAfterLogin />

      <section className="section absolute w-full bg-primary pt-36 h-56">
    </section>

      <section className="pt-40 z-1 relative">
      
        <div className="container">
            <div className="flex flex-wrap ">
                <div className="w-fit mx-auto pt-5">
                    <Image
                    height={100} width={100}
                    src="Ellipse 326.png" alt="" />
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-lg font-semibold text-dark">Louis Tomlinsoon</h1>
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-sm font-normal text-dark">Web Developer</h1>
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-sm font-normal text-softGrey">Purwokerto, Jawa Tengah</h1>
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-sm font-normal text-softGrey">Freelancer</h1>
                </div>
                <div className="w-full pt-5">
                    <p className="text-center text-sm font-normal text-softGrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec 
                    <br></br>gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                </div>
                <div className="w-full pt-5 mt-10 text-center">
                    <a href="" className="py-4 px-16 font-bold text-white  bg-primary rounded-md">Hire</a>
                </div>
                <div className="w-full pt-5 mt-10 text-center">
              <div className="w-full pt-5 mt-10 text-center">
                    <a href="" className="text-softGrey font-normal">Louistommo@gmail.com</a>
                </div>
              <div className="w-full pt-5 mt-10 text-center">
                    <a href="" className="text-softGrey font-normal">@Louist91</a>
                </div>
              <div className="w-full pt-5 mt-10 text-center">
                    <a href="" className="text-softGrey font-normal">@Louistommo</a>
                </div>
              <div className="w-full pt-5 mt-10 text-center">
                    <a href="" className="text-softGrey font-normal">@Louistommo91</a>
                </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
}