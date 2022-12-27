import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import Tabs from "../../components/tabs/Tabs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

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

export default function Profile(props) {
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

    console.log(skill)

    console.log(data)

    

    // console.log(dataUser)
  
  return (
    <>
      <NavAfterLogin />
    
      <section className="section absolute w-full bg-primary pt-36 h-56">
    </section>

    
        <>
      <section className="pt-40 z-1 relative">
        <div className="container">
          <div className="flex flex-wrap ">
            <div className="w-fit mx-auto pt-5">
              <>
            <div className="w-fit mx-auto pt-5">
          <Image width={100} height={100} className="h-30 w-30 rounded-full aspect-square"
                  src={`${userData.image_user}`} alt="" />
          </div>
          <div className="w-full pt-5">
              <h1 className="text-center text-lg font-semibold text-dark">{userData.name}</h1>
          </div>
          
          <div className="w-full pt-5">
              <h1 className="text-center text-sm font-normal text-dark">{userData.job_desk} </h1>
          </div>
          <div className="w-full pt-5">
              <h1 className="text-center text-sm font-normal text-softGrey">{userData.city}</h1>
          </div>
          <div className="w-full pt-5">
              <h1 className="text-center text-sm font-normal text-softGrey">{userData.tempat_kerja}</h1>
          </div>
          <div className="w-full pt-5">
              <p className="text-center text-sm font-normal text-softGrey">{userData.description}</p>
          </div>
          </>
            </div>
          {
          !data.id_recruiter ?
          id != data.id ? (
          <div style={{ display: "none" }} className="w-full pt-5 mt-10 text-center">
              <Link href={`/EditProfile/${id}`} className="py-4 px-16 font-bold text-white  bg-primary rounded-md">Edit</Link>
          </div>
          ) : (
            <div className="w-full pt-5 mt-10 text-center">
              <Link href={`/EditProfile/${id}`} className="py-4 px-16 font-bold text-white  bg-primary rounded-md">Edit</Link>
          </div>
          ) : (
            <div className="w-full pt-5 mt-10 text-center">
              <Link href={`/Hirepage/${id}`} className="py-4 px-16 font-bold text-white  bg-primary rounded-md">Hire</Link>
          </div>
          )
           }
          
          <div className="w-full pt-5 mt-10 text-center"> 
              <h1 className="text-lg text-dark font-semibold">Skills</h1>
              <div className="w-full flex flex-wrap pt-5 justify-center">
              {
          skill == "" ? ("Data Not Found") : (
            skill.map((item, index, e) => (
              <>
              <div key={index.id_skill}>
          <p className="bg-secondary text-white font-semibold rounded-md px-6 py-2 mr-3">{item.skill}</p>
          </div>
          </>
          )
          )
         )}     
        </div>
        {/* <div className="w-full pt-5 mt-10 text-center">
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
          </div> */}
          </div>
      </div>   
        </div>
      </section>
      </>

      

    <Tabs/>

      <Footer />
    </>
  );
}