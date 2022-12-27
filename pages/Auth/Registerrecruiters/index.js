import Image from "next/image"
import React, {useState} from "react"
import axios from "axios";
import {useRouter} from "next/router";
import Link from "next/link";


export default function Registerrecruiters() {
  const router = useRouter();

    const [form, setForm] = useState({
      companyname:'',
         password:'',
         email:'',
         company:'',
         position:'',
         phone:'',
    })
    
    const onSubmit =  (e) => {
        e.preventDefault();
        // console.log(form)
        if(form.companyname == "" || form.phone == "" || form.password == ""){
            alert('Semua input wajib diisi')
        }else {
            if (form.password !== form.password2) {
              alert("Password harus sama");
              router.push("/Auth/Registerrecruiters")
            } else {
            const body = {
              companyname: form.companyname,
                password: form.password,
                password2: form.password,
                email: form.email,
                company:'',
                position:'',
                phone: form.phone,      
            }
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/registerrecruiters`, body)
            .then((response) => {
                if(response.data.code !== 200){
                    alert('error:' + response.data.message)
                }
                else{
                    console.log(response.data)
                    alert("Register Success")
                    router.push('/Auth/Loginrecruiters')
                }
            }).catch((err) => {
                console.error(err)
            })
        }
      }
    }
    return (
        <>
      <section className="pt-10 pb-2">
        <div className="container ">
          <div className="flex flex-wrap justify-between justify-items-center">
            <div className="w-full px-4 mb-10 hidden lg:flex lg:w-1/2 sticky">
              <div className="bg-login bg-cover py-20 px-9">
                <Image
                    height={150} width={100}
                    src="/Group 978.png" alt="" />
                <h1 className="text-6xl text-white mt-36">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
              </div>
            </div>
            <div className="w-full px-4 py-16 lg:w-1/2">
            <form onSubmit={(e) => onSubmit(e)}>
              <h1 className="text-hardGrey font-semibold pt-4 text-3xl lg:text-5xl lg:leading-normal">
              Halo, Pewpeople
              </h1>
              <p className="text-softGrey text-sm pt-4 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
              <div className="flex flex-wrap pt-10">
                <label for="name" class=" text-sm font-normal text-softGrey pb-4">Name</label>
                    <input type="text" id="name" onChange={(e) => setForm({...form, companyname: e.target.value})} placeholder="Masukan nama perusahaan" class="w-full bg-white ring-lightGrey ring-2 text-dark p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap pt-10">
                <label for="email" class=" text-sm font-normal text-softGrey pb-4">Email</label>
                    <input type="email" id="email" onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Masukan alamat email" class="w-full bg-white ring-lightGrey ring-2 text-dark p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap pt-10">
                <label for="company" class=" text-sm font-normal text-softGrey pb-4">Perusahaan</label>
                    <input type="text" id="company" onChange={(e) => setForm({...form, company: e.target.value})} placeholder="Masukan alamat email" class="w-full bg-white ring-lightGrey ring-2 text-dark p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap pt-10">
                <label for="position" class=" text-sm font-normal text-softGrey pb-4">Jabatan</label>
                    <input type="text" id="position" onChange={(e) => setForm({...form, position: e.target.value})} placeholder="Masukan alamat email" class="w-full bg-white ring-lightGrey ring-2 text-dark p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap pt-10">
                <label for="phone" class=" text-sm font-normal text-softGrey pb-4">No Handphone</label>
                    <input type="phone" id="phone" onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="Masukan no handphone" class="w-full bg-white ring-lightGrey ring-2 text-dark p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap pt-10">
                <label for="password" class=" text-sm font-normal text-softGrey pb-4">Kata Sandi</label>
                    <input type="password" id="password" onChange={(e) => setForm({...form, password: e.target.value})} placeholder="Masukan kata sandi" class="w-full bg-white ring-lightGrey ring-2 text-dark p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap pt-10">
                <label for="password" class=" text-sm font-normal text-softGrey pb-4">Konfirmasi Kata Sandi</label>
                    <input type="password" id="password" onChange={(e) => setForm({...form, password2: e.target.value})} placeholder="Masukan konfirmasi kata sandi" class="w-full bg-white ring-lightGrey ring-2 text-dark p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="flex flex-wrap pt-5 justify-end">
                <a href="" className="text-sm">Lupa Kata Sandi?</a>
              </div>
              <div className="flex flex-wrap pt-5 justify-center">
              <button type="submit" href="" className="w-full text-base text-center font-bold text-white bg-secondary py-6 rounded-md px-8">Masuk</button>
              </div>
              <div className="flex flex-wrap pt-5 justify-center">
                <a href="" className="">Anda sudah punya akun? <span className="text-secondary"><Link href="/Auth/Loginworkers">Silahkan Login</Link></span></a>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}