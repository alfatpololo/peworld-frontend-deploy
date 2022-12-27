import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";

export default function EditProfilerecruiters() {

  const [dataUser, setDataUser] = useState([]);
 
  const [update, setUpdate] = useState({
    name: dataUser.name,
    job_desk: dataUser.job_desk,
    city: dataUser.city,
    tempat_kerja: dataUser.tempat_kerja,
    description: dataUser.description
  })
  
  useEffect(() => {
  const data = JSON.parse(localStorage.getItem("data"));
  const id = data.id;
  console.log(id);
  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/userrecruiters/${id}`)
    .then((response) => {
      setDataUser(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);


const handlePost = (e) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const id = data.id
  e.preventDefault();
  const form = {
    name: update.name,
    job_desk: update.job_desk,
    city: update.city,
    tempat_kerja: update.tempat_kerja,
    description: update.description
      
  }
  console.log(form)
  axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/userrecruiters/update/${id}`, form)
      .then((res) => {
          console.log(res);
          alert("Update Success");
// router.push('/home');
      })
      .catch((err) => {
          console.log(err);
          alert("Update Failed");
      })
};




  return (
    <>
    <NavAfterLogin />

    <section className="section absolute w-full bg-primary pt-36 h-56">
    </section>

    <section className="pt-40 z-1 relative">
      <div className="container">
          <div className="flex flex-wrap ">
          {dataUser.map((item, index) => (
            <>
              <div className="w-fit mx-auto pt-5">
                  <Image
                    height={100} width={100} src="Ellipse 326.png" alt="" />
              </div>
              <div className="w-full pt-5">
                  <h1 className="text-center text-lg font-semibold text-dark">{item.name}</h1>
              </div>
              <div className="w-full pt-5">
                  <h1 className="text-center text-sm font-normal text-dark">{item.position}</h1>
              </div>
              <div className="w-full pt-5">
                  <h1 className="text-center text-sm font-normal text-softGrey">{item.field}</h1>
              </div>
              <div className="w-full pt-5">
                  <h1 className="text-center text-sm font-normal text-softGrey">{item.description}</h1>
              </div>
              </>
            ))}
          </div>
      </div>
    </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
      <form onSubmit={(e) => handlePost(e)}>
        <div className="container"> 
        <h1 className="mb-5 text-dark text-semibold text-2xl">Data Diri</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">          
          
          {dataUser.map((item, index) => (
            <>
            <div key={index}>
            <label for="namalengkap" className=" text-sm font-normal text-softGrey pb-4">Nama Lengkap</label>
                      <input type="text" defaultValue={item.name} onChange={(e) => setUpdate({...update,name: e.target.value})} id="namalengkap" placeholder="Masukan nama lengkap" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="jobdesk" className=" text-sm font-normal text-softGrey pb-4">Job Desk</label>
                      <input type="text" id="jobdesk" onChange={(e) => setUpdate({...update,job_desk: e.target.value})} placeholder="Masukan jobdesk" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="domisili" className=" text-sm font-normal text-softGrey pb-4">Domisili</label>
                      <input type="text" id="domisili" onChange={(e) => setUpdate({...update,city: e.target.value})} placeholder="Masukan domisili" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="tempatkerja" className=" text-sm font-normal text-softGrey pb-4">Tempat kerja</label>
                      <input type="text" id="tempatkerja" onChange={(e) => setUpdate({...update,tempat_kerja: e.target.value})} placeholder="Masukan tempat kerja" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="deskripsi" className=" text-sm font-normal text-softGrey pb-4">Deskripsi singkat</label>
                      <textarea type="textarea" id="deskripsi" onChange={(e) => setUpdate({...update,description: e.target.value})} placeholder="Tuliskan Deskripsi singkat" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="gantifoto" className=" text-sm font-normal text-softGrey pb-4">Ganti Foto</label>
                      <input type="file" id="gantifoto" placeholder="Tuliskan Deskripsi singkat" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          
                      <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan</button>
                      </div>
                      </>
          ))}
          
          </div>
        </div>
        </form>
      </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
        <div className="container">
        <h1 className="mb-5 text-dark text-semibold text-2xl">Skill</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">          
                    <input type="text" id="skill" placeholder="Ex: Java" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan</button>
          </div>
        </div>
      </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
    <div className="container">
        <h1 className="mb-5 text-dark text-semibold text-2xl">Pengalaman Kerja</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">          
          <label for="position" className=" text-sm font-normal text-softGrey pb-4">Posisi</label>
                    <input type="text" id="position" placeholder="Ex: UI/UX Designer" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="companyname" className=" text-sm font-normal text-softGrey pb-4">Nama Perusahaan</label>
                    <input type="text" id="companyname" placeholder="Ex: Gojek" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="date" className=" text-sm font-normal text-softGrey pb-4">Bulan/Tahun Masuk</label>
                    <input type="date" id="date" placeholder="Masukan domisili" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="date" className=" text-sm font-normal text-softGrey pb-4">Bulan/Tahun Keluar</label>
                    <input type="date" id="date" placeholder="Masukan domisili" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="deskripsipekerjaan" className=" text-sm font-normal text-softGrey pb-4">Deskripsi singkat</label>
                    <textarea type="textarea" id="deskripsipekerjaan" placeholder="Deskripsikan pekerjaan anda" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />

          
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan</button>
          </div>
        </div>
      </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
    <div className="container">
        <h1 className="mb-5 text-dark text-semibold text-2xl">Portfolio</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">          
          <label for="namaaplikasi" className=" text-sm font-normal text-softGrey pb-4">Nama Aplikasi</label>
                    <input type="text" id="namaaplikasi" placeholder="Ex: Ankasa Ticketing" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="linkrepository" className=" text-sm font-normal text-softGrey pb-4">Link Repository</label>
                    <input type="text" id="linkrepository" placeholder="Ex: github/test" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="typeportfolio" className=" text-sm font-normal text-softGrey pb-4">Type Portfolio</label>
                    <input type="text" id="typeportfolio" placeholder="Ex: github/test" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="uploadportfolio" className=" text-sm font-normal text-softGrey pb-4">Upload Gambar</label>
                    <input type="file" id="uploadportfolio" placeholder="Deskripsikan pekerjaan anda" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />

          
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan Portfolio</button>
          </div>
        </div>
      </section>


    <Footer />
  </>
  );
}