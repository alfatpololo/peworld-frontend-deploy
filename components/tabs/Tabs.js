import { useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Tabs() {
  const router = useRouter();
  const {id} = router.query
  const [portofolio, setPortofolio] = useState([]);
  const [experience, setExperience] = useState([]);
  const [toggleState, setToggleState] = useState(1);

  useEffect(() => {
    // getDataLocal();
    getPortofolio();
    getExperience();
  }, []);
  

  const getPortofolio = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/portofolio/user/${id}`)
      .then((res) => {
        setPortofolio(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getExperience = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/experience/user/${id}`)
      .then((res) => {
        setExperience(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
  <>
  <section>
    <div className="container-tabs">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Portfolio
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Pengalaman Kerja
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          <div class="flex flex-wrap">
          {
          portofolio == "" ? ("Data Not Found") : (
            portofolio.map((item, index, e) => (
            <div key={index.id_portofolio} class="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <Image
                    height={300} width={300}
                  src={`${item.image}`}
                  alt="portfolio"
                  class="object-center mx-auto py-6"
                />
                <div class="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      class="block mb-3 font-semibold text-xl text-center text-dark hover:text-primary truncate"
                    >
                     {item.title_portofolio}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            )
            )
           )}
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
          <div class="flex flex-wrap">
          {
          experience == "" ? ("Data Not Found") : (
            experience.map((item, index, e) => (
            <div key={index.id_experience} class="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <Image
                    height={100} width={100}
                  src="/mililogo.png"
                  alt="programming"
                  class="object-center mx-auto py-6"
                />
                <div class="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      class="block mb-1 font-semibold text-2xl text-center text-dark hover:text-primary truncate"
                    >
                     {item.job_title}
                    </a>
                  </h3>
                    <div className="text-hardGrey text-center font-normal ">
                      <p>{item.company}</p>
                    </div>
                    <div className="text-softGrey text-center font-normal mb-4 ">
                      <p>{String(item.date_in).slice(0, 10)} - {" "} {String(item.date_out).slice(0, 10)}</p>
                    </div>
                    <div className="text-softGrey text-center font-normal ">
                      <p>{item.description}</p>
                    </div>
                </div>
              </div>
            </div>
            )
            )
           )}
          </div>
        </div>

        
      </div>
    </div>
    </section>
    
    </>
  );
}

export default Tabs;