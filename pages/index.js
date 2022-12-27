import Image from "next/image"
import React, {useState} from "react";
import axios from "axios"
import { useRouter } from "next/router";
import Link from "next/link";

export default function Loginrecruiters() {
    return (
        <>
      <section className="pt-10 pb-2">
        <div className="container ">
          <div className="flex flex-wrap justify-between justify-items-center">
            <div className="w-full px-4 mb-10 hidden lg:flex lg:w-1/2 sticky">
              <div className="bg-login bg-cover py-20 px-9">
                <Image 
                height={500} width={100}
                src="/Group 978.png" alt="" />
                <h1 className="text-6xl text-white mt-36">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
              </div>
            </div>
            <div className="w-full px-4 py-24 lg:w-1/2">
            <form onSubmit={(e) => onSubmit(e)}>
              <h1 className="text-hardGrey font-semibold pt-4 text-3xl lg:text-5xl lg:leading-normal">
              Halo, Pewpeople
              </h1>
              <p className="text-softGrey text-sm pt-4 lg:text-xl mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
              <div className="flex flex-wrap pt-5 justify-center">
                <Link href={'/Auth/Loginworkers'} className="w-full text-base text-center font-bold text-white bg-secondary py-6 rounded-md px-8">Masuk Sebagai Pekerja</Link>
              </div>
              <div className="flex flex-wrap pt-5 justify-center">
                <p>or</p>
              </div>
              <div className="flex flex-wrap pt-5 justify-center">
                <Link href={'/Auth/Loginrecruiters'} className="w-full text-base text-center font-bold text-white bg-primary py-6 rounded-md px-8">Masuk Sebagai Perekrut</Link>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}