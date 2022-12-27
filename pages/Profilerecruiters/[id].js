import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import Tabs from "../../components/tabs/Tabs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/userrecruiters/${id}`
  );

  return {
    props: {
      companyData: result.data,
    },
  };
};

export const getStaticPaths = async (context) => {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/userrecruiters/list`)
  const res = data.data.data.rows
  console.log(res)
  const paths = res.map((item) => {
    return {
      params : { id: item.id + "" }
    }
  })

  return {
    paths,
    fallback: true,
  };
};

export default function Profilerecruiters() {
  const router = useRouter();
  const { id } = router.query;
  const [dataUser, setDataUser] = useState([]);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/userrecruiters/${id}`)
        .then((response) => {
          console.log(response.data);
          setDataUser(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.isReady, id]);

  console.log(dataUser);

  return (
    <>
      <NavAfterLogin />

      <section className="section absolute w-full bg-primary pt-36 h-56"></section>
      <>
        <section className="pt-40 z-1 relative">
          <div className="container">
          {
          dataUser == "" ? ("Data Not Found") : (
            dataUser.map((item, index, e) => (
            <div key={index} className="flex flex-wrap">
              <div className="w-fit mx-auto pt-5">
              <Image width={100} height={100} className="h-30 w-30 rounded-full aspect-square"
                  src={item.image_recruiters} alt="" />
              </div>
              <div className="w-full pt-5">
                <div>
                  <div>
                    <h1 className="text-center text-lg font-semibold text-dark">
                      {item.companyname}
                    </h1>
                  </div>
                  <div className="w-full pt-5">
                    <h1 className="text-center text-sm font-normal text-softGrey">
                      {item.city}
                    </h1>
                  </div>
                  <div className="w-full pt-5">
                    <h1 className="text-center text-sm font-normal text-softGrey">
                      {item.field}
                    </h1>
                  </div>
                  <div className="w-full pt-5">
                    <p className="text-center text-sm font-normal text-softGrey">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="w-full pt-5 mt-10 text-center">
                  <Link
                    href={`/Editprofilerecruiters/${id}`}
                    className="py-4 px-16 font-bold text-white  bg-primary rounded-md"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
            )
            )
           )}
          </div>
        </section>
      </>
      <Footer />
    </>
  );
}
