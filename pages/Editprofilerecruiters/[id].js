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
  const [updateImage, setUpdateImage] = useState();
  const [update, setUpdate] = useState({
    companyname: dataUser.companyname,
    field: dataUser.field,
    city: dataUser.city,
    description: dataUser.description,
    email: dataUser.email,
    instagram: dataUser.instagram,
    phone: dataUser.phone,
    linkedin: dataUser.linkedin
  })
  
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("gantifoto").innerHTML = fileUploaded.name;
    setUpdateImage(fileUploaded);
  };

  useEffect(() => {
  const data = JSON.parse(localStorage.getItem("user"));
  const id = data.id_recruiter;
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
  const data = JSON.parse(localStorage.getItem("user"));
  const id = data.id_recruiter
  e.preventDefault();
  // const form = {
  //   companyname: update.companyname,
  //   field: update.field,
  //   city: update.city,
  //   description: update.description,
  //   email: update.email,
  //   instagram: update.instagram,
  //   phone: update.phone,
  //   linkedin: update.linkedin  
  // }
  let inputForm = new FormData();
  inputForm.append("companyname", update.companyname);
  inputForm.append("field", update.field);
  inputForm.append("city", update.city);
  inputForm.append("description", update.description);
  inputForm.append("email", update.email);
  inputForm.append("instagram", update.instagram);
  inputForm.append("phone", update.phone);
  inputForm.append("linkedin", update.linkedin);
  inputForm.append("image_recruiters", updateImage);
  axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/userrecruiters/update/${id}`, inputForm)
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

    <section className="section absolute top-0 w-full bg-primary pt-36 h-80">
    </section>

    <section>
      <div className="container z-1 relative mt-52">
        <div className="flex d-flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-96 shadow-lg shadow-slate-300 bg-white mr-4 rounded-md sticky top-24">
          <section className="bottom-0 z-1 relative">
      <div className="container">
          <div className="flex flex-wrap ">
          {dataUser.map((item, index) => (
            <>
              <div className="w-fit mx-auto pt-10">
              <Image
              width={100}
              height={100}
              className="h-28 w-28 rounded-full" src={item.image_recruiters} alt="" />
              </div>
              <div className="w-full pt-9">
                  <h1 className="text-center text-lg font-semibold text-dark">{item.companyname}</h1>
              </div>
              <div className="w-full pt-5">
                  <h1 className="text-center text-sm font-normal text-dark">{item.city}</h1>
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
          </div>
          <div className="w-full lg:w-full shadow-lg shadow-slate-300 bg-white rounded-md">
          <section className="mt-10 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
      <form onSubmit={(e) => handlePost(e)}>
        <div className="container"> 
        <h1 className="mb-5 text-dark text-semibold text-2xl">Data Diri</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap pb-11">          
          
          {dataUser.map((item, index) => (
            <>
            <div key={index}>
            <label for="namalengkap" className=" text-sm font-normal text-softGrey pb-4">Nama Perusahaan</label>
                      <input type="text" defaultValue={item.companyname} onChange={(e) => setUpdate({...update,companyname: e.target.value})} id="namalengkap" placeholder="Masukan nama perusahaan" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="field" className=" text-sm font-normal text-softGrey pb-4">Bidang</label>
                      <input type="text" id="field" onChange={(e) => setUpdate({...update,field: e.target.value})} placeholder="Masukan bidang perusahaan ex : Financial" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="domisili" className=" text-sm font-normal text-softGrey pb-4">Kota</label>
                      <input type="text" id="domisili" onChange={(e) => setUpdate({...update,city: e.target.value})} placeholder="Masukan kota" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="deskripsi" className=" text-sm font-normal text-softGrey pb-4">Deskripsi singkat</label>
                      <textarea type="textarea" id="deskripsi" onChange={(e) => setUpdate({...update,description: e.target.value})} placeholder="Tuliskan Deskripsi singkat" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="email" className=" text-sm font-normal text-softGrey pb-4">Email</label>
                      <input type="email" onChange={(e) => setUpdate({...update,email: e.target.value})} id="email" placeholder="Masukan email" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="instagram" className=" text-sm font-normal text-softGrey pb-4">Instagram</label>
                      <input type="instagram" onChange={(e) => setUpdate({...update,instagram: e.target.value})} id="email" placeholder="Masukan nama Instagram" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="phone" className=" text-sm font-normal text-softGrey pb-4">No. Handphone</label>
                      <input type="phone" onChange={(e) => setUpdate({...update,phone: e.target.value})} id="phone" placeholder="Masukan nomor telepon" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            <label for="linkedin" className=" text-sm font-normal text-softGrey pb-4">Linkedin</label>
                      <input type="text" onChange={(e) => setUpdate({...update,linkedin: e.target.value})} id="linkedin" placeholder="Masukan nama linkedin" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                      <label for="gantifoto" className=" text-sm font-normal text-softGrey pb-4">Ganti Foto</label>
                      <input type="file" id="gantifoto" onChange={handleChange} placeholder="Tuliskan Deskripsi singkat" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                      <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan</button>
                      </div>
                      </>
          ))}
          
          </div>
        </div>
        </form>
      </section>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
  );
}