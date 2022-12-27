import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import Tabs from "../../components/tabs/Tabs";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

export async function getServerSideProps(context) {
  try {
    const {id} = context.params
    const response = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
    });
    console.log(response.data);
    return {
      props: {
        data: response.data,
        error: false,
        errorMessage: "",
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
        error: true,
        errorMessage: "error API",
      },
    };
  }
}

export default function Hirepage(props) {
  const [skill, setSkill] = useState([]);
    const router = useRouter();
    const {id} = router.query;
    const [data, setData] = useState({
      isLoading: true,
      data: {},
    });
    // const [buttonHidden, setButtonHidden] =  useState(true);
    // console.log(id)

    useEffect(() => {
      const data =
			typeof window !== "undefined"
				? JSON.parse(localStorage.getItem("user"))
				: null;
      if (data) {
        setData({...data, isLoading: false, data:data})
      }
    }, [])


    useEffect(() => {
      if (id) {
        axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/skill/user/${id}`)
        .then((res) => {
          setSkill(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }, [id])

    const userData = props.data[0];

  
  return (
    <>
      <NavAfterLogin />

      <section className="section absolute top-0 w-full bg-primary pt-36 h-56">
    </section>

    <section>
      <div className="container z-1 relative mt-36">
        <div className="flex d-flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-full shadow-lg shadow-slate-300 bg-white mr-4 rounded-md lg:sticky lg:top-24">
          <section className="bottom-0 z-1 relative">
        <div className="container">
            <div className="flex flex-wrap pb-11">
                <div className="w-fit mx-auto pt-5">
                    <Image
                    className="h-30 w-30 rounded-full aspect square"
                    height={100} width={100} src={`${userData.image_user}`} alt="" />
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-lg font-semibold text-dark">{userData.name}</h1>
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-sm font-normal text-dark">{userData.job_desk}</h1>
                </div>
                <div className="w-full pt-5">
                    <h1 className="text-center text-sm font-normal text-softGrey">{userData.city}</h1>
                </div>
                <div className="w-full pt-5">
                    <p className="text-center text-sm font-normal text-softGrey">{userData.description}</p>
                </div>
                <div className="w-full pt-2 mt-10 text-center">
                    <h1 className="text-lg text-dark font-semibold">Skills</h1>
                    <div className="w-full flex flex-wrap pt-5 justify-center">
                      {
                        skill == "" ? ("Data Not Found") : (
                          skill.map((item, index, e) => (
                            <>
                            <div className="mb-5 mr-2">
                      <p className="bg-secondary text-white font-semibold rounded-md px-6 py-2">{item.skill}</p>
                      </div>
                            </>
                          ))
                        )
                      }
              </div>  
                </div>
            </div>
        </div>
      </section>
          </div>
          <div className="w-full lg:w-full shadow-lg shadow-slate-300 bg-white rounded-md">
          <section className="mt-10 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
        <div className="container">
        <h1 className="mb-5 text-dark text-semibold text-2xl">Data Diri</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap pb-11">          
          <label for="namalengkap" className=" text-sm font-normal text-softGrey pb-4">Nama Lengkap</label>
                    <input type="text" id="namalengkap" placeholder="Masukan nama lengkap" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="jobdesk" className=" text-sm font-normal text-softGrey pb-4">Job Desk</label>
                    <input type="text" id="jobdesk" placeholder="Masukan jobdesk" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="domisili" className=" text-sm font-normal text-softGrey pb-4">Domisili</label>
                    <input type="text" id="domisili" placeholder="Masukan domisili" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="tempatkerja" className=" text-sm font-normal text-softGrey pb-4">Tempat kerja</label>
                    <input type="text" id="tempatkerja" placeholder="Masukan tempat kerja" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="deskripsi" className=" text-sm font-normal text-softGrey pb-4">Deskripsi singkat</label>
                    <textarea type="textarea" id="deskripsi" placeholder="Tuliskan Deskripsi singkat" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Hire</button>
          </div>
        </div>
      </section>
          </div>
        </div>
      </div>
    </section>

      

      

      <Footer />
    </>
  );
}