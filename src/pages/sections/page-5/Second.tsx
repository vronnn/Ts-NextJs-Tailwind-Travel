import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { IoMdPhotos } from "react-icons/io";

const Second = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-end xl:container"
    >
      <div className="min-h-[7rem]"></div>
      <div className="flex flex-col pb-10 box-border cont-height justify-between gap-y-14 ">
        <div className="flex flex-wrap justify-between px-8 gap-y-6 xl:px-0">
          <div className="flex flex-col gap-y-10 lmd:w-[47%]">
            <div className="flex flex-col gap-y-6">
              <h1 className="text-3xl font-bold text-gray-700 md:text-4xl lg:text-5xl lmd:max-w-lg">
                The most populer travel agency in the world
              </h1>
              <p className="lg:text-lg">
                Welcome to the Official Travel website. Build with the finest
                services for our customers and become the biggest travel agency
                in 2023. Find and discover the beauty of the world with us by
                your side
              </p>
            </div>
            <div className="flex gap-x-4">
              <Link
                href="/gallery/WorldGallery"
                className="px-4 py-[0.6rem] lmd:py-3 lmd:px-6 shadow bg-gray-700 text-gray-100"
              >
                Discover more places
              </Link>
              <Link
                href=""
                className="px-4 py-[0.6rem] lmd:py-3 lmd:px-6 shadow"
              >
                View our packages
              </Link>
            </div>
            <div className="bg-gray-200 p-4">
              <p>
                Interested in Travel to be your travel companion on your special
                moment? Get in touch with our team at{" "}
                <a href="" className="text-emerald-800 underline">
                  tripteam@travel.com
                </a>
              </p>
            </div>
          </div>
          {/* image */}
          <div className="w-full lmd:w-[47%]">
            <div className="bg-[url('/pg2-2.jpg')] h-[20rem] w-full bg-cover bg-center shadow-2xl lmd:h-3/4 lg:h-[90%] relative">
              <div className="absolute -bottom-4 -right-4 shadow-2xl border-8 border-gray-200">
                <Image src="/pg2-4.jpg" alt="" width={200} height={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[80%] flex justify-between px-8 lmd:px-10 box-border">
            <div className="flex items-start gap-x-3">
              <MdOutlineTravelExplore size={30} />
              <div>
                <h3 className="text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl">
                  1.4B
                </h3>
                <p>travellers/month</p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <SlPeople size={30} />
              <div>
                <h3 className="text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl">
                  4.9M
                </h3>
                <p>honest reviews</p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <IoMdPhotos size={30} />
              <div>
                <h3 className="text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl">
                  329.6k
                </h3>
                <p>photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
