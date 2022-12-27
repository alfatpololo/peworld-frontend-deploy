import NavAfterLogin from "../../components/navafterloginpages";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Home() {
  const [orderVar, setOrderVar] = useState("desc")
  const router = useRouter()
  const [pageVar, setPageVar] = useState(1)
  const [limitVar, setLimitVar] = useState(2)
  const [searchVar, setSearchVar] = useState("")
  const [data, setData] = useState([])
  const [totalPage, setTotalPage] = useState();
  const handlePage = (index) => {
    if (
      index > 1
    ) {setPageVar(pageVar-1)
      handleFilter(orderVar, pageVar-1, 2, searchVar)}
      else {
        setPageVar(pageVar+1)
        handleFilter(orderVar, pageVar+1, 2, searchVar)
      }
  }
  const handleFilter = (orderVar, pageVar, limitVar, searchVar) => {
    axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/user/search?order=${orderVar}&page=${pageVar}&limit=${limitVar}&search=${searchVar}`,
    }).then((res) => {
      setData(res.data.data)
      console.log(res.data.pagination);
      console.log("ini datanya")
      console.log(data)
      console.log("ini datanya")
      setTotalPage(res.data.pagination.totalPage);
    });
  }


  useEffect(() => {
    handleFilter(orderVar, pageVar, 2, searchVar)
  }, [orderVar, pageVar, 2, searchVar]);

  const nextPage = () => {
    setPageVar(pageVar+1)
    handleFilter(orderVar, pageVar, 2, searchVar)
  }
  const previousPage = () => {
    if (
      pageVar > 1
    ) {setPageVar(pageVar-1)
      handleFilter(orderVar, pageVar-1, 2, searchVar)}
  }

  const setSkill = async (id) => {
    let skill = []
     await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/skill/user/${id}`)
      .then((res) => {
        skill = res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(skill)
      return skill
  }

  return (
    <>
      <NavAfterLogin />

      {/* Top Jobs Section */}
      <section className="bg-primary mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
        <div className="container ">
          <div className="flex flex-wrap">
            <div className="px-6 py-6 justify-center items-center justify-items-center">
              <h1 className="text-white text-semibold text-xl lg:text-2xl">
                Top Jobs
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Top Jobs Section */}

      {/* Search Section */}
      <section className="pt-28 w-full flex items-center z-10">
        <div className="container rounded-lg">
          <div className="flex flex-wrap items-center justify-between relative shadow-lg bg-white">
            <div className="px-4">
              <input
                onChange={(e) => setSearchVar(e.target.value)}
                placeholder="Search workers"
                class="w-full bg-white ring-transparent ring-2 text-dark p-4 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex items-center px4">
              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Image
                    height={70} width={70}
                      src="/search (1) 1.png"
                      alt=""
                      className="px-6 py-3 mx-3"
                    />
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      class="text-base text-start text-softGrey border border-l-1 border-t-0 border-r-0 border-b-0 bg-transparanet px-6 py-3 mx-3 flex"
                    >
                      Kategori
                    </a>
                  </li>
                  <li className="group">
                    <button
                      type="submit"
                      class="text-base text-white bg-primary border rounded-md border-primary px-6 py-3 mx-3 flex"
                    >
                      Search
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Search Section */}

      {/* Search Section */}
      <section className="mt-20 pb-2 pt-2 w-full flex items-center justify-center lg:pb-0">
        <div className="container">
          {
          data == "" ? ("Data Not Found") : (
            data.map((item, index, e) => (
              <div key={index} className="flex flex-wrap border">
                <div className="px-6 py-6 relative">
                  <Image 
                  width={100} height={100}
                  className="h-20 w-20 rounded-full"
                  src={`${item.image_user}`} alt="" />
                </div>
                <div className="px-6 py-6 relative">
                  <p className="text-dark font-semibold">{item.name}</p>
                  <p>{item.job_desk}</p>
                  <p>{item.city}</p>
                  <div className="flex pt-2">   
                  {/* {
                    setSkill(item.id) == "" ? ("Data Not Found") : (
                      setSkill(item.id).map((item, index) => (
                    <div>
                          <p className="bg-secondary text-white font-semibold rounded-md px-6 py-2 ml-5">
                      {item.skill}
                    </p>
                    </div>     
                      ))
                    )
                  }                    */}
                  </div>
                </div>
                <div className="lg:w-1/2 lg:mx-auto lg:justify-self-end lg:-mr-1 lg:py-20 lg:px-6 text-end">
                  <Link
                    href={`/Profile/${item.id}`}
                    className="bg-primary py-3 px-3 lg:text-xl text-center font-semibold lg:py-6 lg:px-6 text-white"
                  >
                    Lihat Profile
                  </Link>
                </div>
              </div>
            )
          )
         )}
        </div>
      </section>
      {/* Search Section */}

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-10">
        <div className="flex flex-1 justify-between sm:hidden">
          <button onClick={() => previousPage()} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="btn btn-warning-custom page-link">
                {pageVar}
              </button>
          <button onClick={() => nextPage()} disabled={data <= 3} className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                <span className="sr-only">Previous</span>
              </button>
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
              {new Array(totalPage).fill().map((item, index) => (
                <button
                key={index}
                onClick={() => {
                 handlePage(index)
                }}
                aria-current="page"
                className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
              >
                {index+1}
              </button>
              ))}
              <button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                <span className="sr-only">Next</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <Footer />
    </>
  );
}
