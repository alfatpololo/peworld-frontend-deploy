import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";


export default function NavAfterLogin() {
  const [role, setRole] = useState(false)
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  console.log(data)
  const router = useRouter();
  const logout = (e) => {
    localStorage.clear();
    router.push("/")
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user.id) {
     const dataWorker = JSON.parse(localStorage.getItem('user'))
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${dataWorker.id}`)
      .then ((res) => {
        setName(res.data[0].name)
        setData(res.data)
        setId(res.data[0].id)
      })
      setRole(true)
    } else if (user.id_recruiter) {
      const dataRecruiter = JSON.parse(localStorage.getItem('user'))
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/userrecruiters/${dataRecruiter.id_recruiter}`)
      .then ((res) => {
        console.log(res)
        setName(res.data[0].companyname)
        setData(res.data)
        setId(res.data[0].id_recruiter)
      })
      setRole(false)
    }
  }, [])
    return (
        <>
        {/* navbar-section */}
      <header className="bg-white shadow-lg fixed top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div onClick={() => router.push("/Landing")} className="cursor-pointer px-4">
              <Image
                    height={130} width={130} src="/logo.png" className="block py-6" alt="" />
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
              <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                               <li onClick={() => router.push("/Home")} className="group">
                                    <Image
                    height={25} width={25} src="/Home.png" alt="" className="cursor-pointer mr-12 py-3" />
                                </li>
                                <li className="group">
                                    <Image
                    height={25} width={25} src="/bell (1) 1.png" alt="" className="cursor-pointer mr-12 py-3" />
                                </li>
                                <li className="group">
                                    <Image
                    height={25} width={25} src="/mail (3) 1.png" alt="" className="cursor-pointer mr-14 py-3" />
                                </li>
                                <li className="group flex d-flex mr-7">
                                    <Image
                    height={25} width={25} src={data.length != 0 ? role ? `${data[0].image_user}` : `${data[0].image_recruiters}` : ""} alt="" className="cursor-pointer mr-3 py-3" />
                    <Link href={
                      role ? `/Profile/${id}` 
                      :
                      `/Profilerecruiters/${id}`} className="ms-5 py-3">{name}</Link>
                                </li>
                                <li className="group">
                                    <button onClick={(e) => logout(e)} className="py-3">Logout</button>
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