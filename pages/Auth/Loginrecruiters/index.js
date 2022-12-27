import Image from "next/image"
import React, {useState} from "react";
import axios from "axios"
import { useRouter } from "next/router";
import Link from "next/link";

export default function Loginrecruiters() {
  const router = useRouter();

  const [form, setForm] = useState ({
    email: '',
    password: '',
  })

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form)

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/loginrecruiters`, form)
        .then((response) => {
            console.log(response.data)
            if (response.data.status !== "success") {
              alert(response.data.message)
            } else {
              localStorage.setItem("token", response.data.token.token);
              localStorage.setItem("user", JSON.stringify(response.data.token.data));
              localStorage.setItem("email", JSON.stringify(response.data.token.data.email));
              alert("Login Success")
              router.push("/Landing")
            }
        })
        .catch((err) => {
            console.log(err);
        })
  }
    return (
        <>
      <section className="pt-10 pb-2">
        <div className="container ">
          <div className="flex flex-wrap justify-between justify-items-center">
            <div className="w-full px-4 mb-10 hidden lg:flex lg:w-1/2 sticky">
              <div className="bg-login bg-cover py-20 px-9">
                <Image 
                height={100} width={100}
                src="/Group 978.png" alt="" />
                <h1 className="text-6xl text-white mt-36">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
              </div>
            </div>
            <div className="w-full px-4 py-16 lg:w-1/2">
            <form onSubmit={(e) => onSubmit(e)}>
              <h1 className="text-hardGrey font-semibold pt-4 text-3xl lg:text-5xl lg:leading-normal">
              Halo, Perekrut  
              </h1>
              <p className="text-softGrey text-sm pt-4 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
              <div className="flex flex-wrap pt-10">
                <label for="email" class=" text-sm font-normal text-softGrey pb-4">Email</label>
                    <input type="email" id="email" onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Masukan alamat email" class="w-full bg-white ring-lightGrey ring-2 text-dark p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap pt-10">
                <label for="password" class=" text-sm font-normal text-softGrey pb-4">Password</label>
                    <input type="password" id="password" onChange={(e) => setForm({...form, password: e.target.value})} placeholder="Masukan kata sandi" class="w-full bg-white ring-lightGrey ring-2 text-dark p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap pt-5 justify-end">
                <a href="" className="text-sm">Lupa Kata Sandi?</a>
              </div>
              <div className="flex flex-wrap pt-5 justify-center">
                <button type="submit" href="" className="w-full text-base text-center font-bold text-white bg-secondary py-6 rounded-md px-8">Masuk</button>
              </div>
              <div className="flex flex-wrap pt-5 justify-center">
                <button type="submit" className="">Anda belum punya akun? <span className="text-secondary"><Link href="/Auth/Registerrecruiters">Daftar disini</Link> </span></button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}