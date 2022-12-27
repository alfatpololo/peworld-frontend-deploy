import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";

export default function EditProfile() {

  const [dataUser, setDataUser] = useState([]);
  const [imagePortfolio, setImagePortfolio] = useState();
  const [updateImage, setUpdateImage] = useState();
  const [update, setUpdate] = useState({
    name: dataUser.name,
    job_desk: dataUser.job_desk,
    city: dataUser.city,
    tempat_kerja: dataUser.tempat_kerja,
    description: dataUser.description,
  })

  const [skill, setSkill] = useState({
    id_user: "",
    skill: "",
  });

  const [portofolio, setPortofolio] = useState({
    id_user: "",
    title_portofolio: "",
    link: "",
    type: "",
  })

  const [experience, setExperience] = useState({
    id_user: "",
    job_title: "",
    company: "",
    date_in: "",
    date_out: "",
    description: "",
  })

  const handleImagePortfolio = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("uploadportfolio").innerHTML = fileUploaded.name;
    setImagePortfolio(fileUploaded);
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("gantifoto").innerHTML = fileUploaded.name;
    setUpdateImage(fileUploaded);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = JSON.parse(localStorage.getItem("data"));
  //   const id = data.id;
  //   let inputForm = new FormData();
  //   inputForm.append("image_user", updateImage);
  //   axios
  //     .put(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${id}`, inputForm)
  //     .then((res) => {
  //       console.log(res.data);
  //       return navigate("/Home");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  
  useEffect(() => {
  const data = JSON.parse(localStorage.getItem("user"));
  const id = data.id;
  console.log(id);
  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`)
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
  const id = data.id
  e.preventDefault();
  let inputForm = new FormData();
  inputForm.append("name", update.name);
  inputForm.append("job_desk", update.job_desk);
  inputForm.append("city", update.city);
  inputForm.append("tempat_kerja", update.tempat_kerja);
  inputForm.append("description", update.description);
  inputForm.append("image_user", updateImage);
  console.log("ini update", inputForm)
  axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${id}`, inputForm)
      .then((res) => {
          console.log(res);
          alert("Update User Success");
// router.push('/Landing');
      })
      .catch((err) => {
          console.log(err);
          alert("Update User Failed");
      })
};

const handlePostPortfolio = (e) => {
  const data = JSON.parse(localStorage.getItem("user"));
  const id = data.id
  e.preventDefault();
  const inputPortfolio = new FormData();
  inputPortfolio.append("id_user", id);
    inputPortfolio.append("title_portofolio", portofolio.title_portofolio);
    inputPortfolio.append("image", imagePortfolio); 
    inputPortfolio.append("link", portofolio.link);
    inputPortfolio.append("type", portofolio.type);
  axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/portofolio/insert`, inputPortfolio)
      .then((res) => {
          console.log(res);
          alert("Update Portfolio Success");
// router.push('/Landing');
      })
      .catch((err) => {
          console.log(err);
          alert("Update Portfolio Failed");
      })
};

const handlePostExperience = (e) => {
  const data = JSON.parse(localStorage.getItem("user"));
  const id = data.id
  e.preventDefault();
  const formExperience = {
    id_user: id,
    job_title: experience.job_title,
    company: experience.company,
    date_in: experience.date_in,
    date_out: experience.date_out,
    description: experience.description,
  }
  axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/experience/insert`, formExperience)
      .then((res) => {
          console.log(res);
          alert("Update Experience Success");
// router.push('/Landing');
      })
      .catch((err) => {
          console.log(err);
          alert("Update Experience Failed");
      })
};

const handlePostSkill = (e) => {
  const data = JSON.parse(localStorage.getItem("user"));
  const id = data.id
  e.preventDefault();
  const formSkill = {
    id_user: id,
    skill: skill.skill
  }
  axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/skill/insert`, formSkill)
      .then((res) => {
          console.log(res);
          alert("Update Skill Success");
// router.push('/Landing');
      })
      .catch((err) => {
          console.log(err);
          alert("Update Skill Failed");
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
          <div className="w-full lg:w-1/3 h-96 shadow-lg shadow-slate-300 bg-white mr-4 rounded-md lg:sticky lg:top-24">
          <section className="z-1 bottom-0 relative">
      <div className="container">
      {
          dataUser == "" ? ("Data Not Found") : (
            dataUser.map((item, index, e) => (
          <div key={index} className="flex flex-wrap ">
              <div className="w-fit mx-auto pt-10">
              <Image
              width={100}
              height={100}
              className="h-28 w-28 rounded-full"
                  src={`${item.image_user}`} alt="" />
              </div>
              <div className="w-full mt-9">
                  <h1 className="text-left text-lg font-semibold text-dark">{item.name}</h1>
              </div>
              <div className="w-full pt-3">
                  <h1 className="text-left text-sm font-normal text-dark">{item.job_desk}</h1>
              </div>
              <div className="w-full pt-3 flex d-flex items-center">
                 <Image 
                 width={100}
                 height={100}
                 className="h-3 w-3 mr-2"
                 src={'/map.png'}
                 /> <h1 className="text-left text-sm font-normal text-softGrey">{item.city}</h1>
              </div>
              <div className="w-full pt-3">
                  <h1 className="text-left text-sm font-normal text-softGrey">{item.description}</h1>
              </div>
          </div>
      )
      )
     )}  
      </div>
    </section>
          </div>
          <div className="w-full lg:w-full shadow-lg shadow-slate-300 bg-white rounded-md">
          <section className="mt-10 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
      <form>
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
                      <input type="file" id="gantifoto" onChange={handleChange} placeholder="Tuliskan Deskripsi singkat" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          
                      <button onClick={(e) => handlePost(e)} type="button" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan</button>
                      </div>
                      </>
          ))}
          
          </div>
        </div>
        </form>
      </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
        <div className="container">
        <form onSubmit={(e) => handlePostSkill(e)}>
        <h1 className="mb-5 text-dark text-semibold text-2xl">Skill</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">
          {dataUser.map((item, index) => (
        <>
                    <input type="text" id="skill" onChange={(e) => setSkill({...skill,skill: e.target.value})} placeholder="Ex: Java" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan</button>
                    </>
            ))}
            </div>
          </form>
        </div>
      </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
    <form onSubmit={(e) => handlePostExperience(e)}>
    <div className="container">
        <h1 className="mb-5 text-dark text-semibold text-2xl">Pengalaman Kerja</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap">
          {dataUser.map((item, index) => (
            <>
            <div key={index}>          
          <label for="position" className=" text-sm font-normal text-softGrey pb-4">Posisi</label>
                    <input type="text" onChange={(e) => setExperience({...experience,job_title: e.target.value})} id="position" placeholder="Ex: UI/UX Designer" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="companyname" className=" text-sm font-normal text-softGrey pb-4">Nama Perusahaan</label>
                    <input type="text" onChange={(e) => setExperience({...experience,company: e.target.value})} id="companyname" placeholder="Ex: Gojek" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="date" className=" text-sm font-normal text-softGrey pb-4">Bulan/Tahun Masuk</label>
                    <input type="date" onChange={(e) => setExperience({...experience,date_in: e.target.value})} aria-describedby="" id="" placeholder="DD-MM-YYYY" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="date" className=" text-sm font-normal text-softGrey pb-4">Bulan/Tahun Keluar</label>
                    <input type="date" onChange={(e) => setExperience({...experience,date_out: e.target.value})} aria-describedby="" id="" placeholder="DD-MM-YYYY" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="deskripsipekerjaan" className=" text-sm font-normal text-softGrey pb-4">Deskripsi singkat</label>
                    <textarea type="textarea" onChange={(e) => setExperience({...experience,description: e.target.value})} id="deskripsipekerjaan" placeholder="Deskripsikan pekerjaan anda" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />

          
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan</button>
          </div>
          </>
          ))}
        </div>
        </div>
        </form>
      </section>

    <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
    <form onSubmit={(e) => handlePostPortfolio(e)}>
    <div className="container">
        <h1 className="mb-5 text-dark text-semibold text-2xl">Portfolio</h1>
        <hr className="mb-5"></hr>
          <div className="flex flex-wrap pb-11">
          {dataUser.map((item, index) => (     
            <>
            <div key={index}>
          <label for="namaaplikasi" className="text-sm font-normal text-softGrey pb-4">Nama Aplikasi</label>
                    <input type="text" onChange={(e) => setPortofolio({...portofolio,title_portofolio: e.target.value})} id="namaaplikasi" placeholder="Ex: Ankasa Ticketing" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="linkrepository" className=" text-sm font-normal text-softGrey pb-4">Link Repository</label>
                    <input type="text" onChange={(e) => setPortofolio({...portofolio,link: e.target.value})} id="linkrepository" placeholder="Ex: github/test" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="typeportfolio" className=" text-sm font-normal text-softGrey pb-4">Type Portfolio</label>
                    <input type="text" onChange={(e) => setPortofolio({...portofolio,type: e.target.value})} id="typeportfolio" placeholder="Ex: github/test" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          <label for="uploadportfolio" className=" text-sm font-normal text-softGrey pb-4">Upload Gambar</label>
                    <input type="file" onChange={handleImagePortfolio} id="uploadportfolio" placeholder="Deskripsikan pekerjaan anda" className="w-full bg-white ring-lightGrey ring-2 text-dark mb-5 p-4 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />

          
                    <button type="submit" href="" className="mt-10 w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Simpan Portfolio</button>      
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