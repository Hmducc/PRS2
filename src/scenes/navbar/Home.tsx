import { ArrowRightRegular } from "@fluentui/react-icons";
import type { SelectProps } from "antd";
import { Input, Select, Tag } from "antd";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import business from "../../assets/Business.png";
import customer from "../../assets/Customer Services.png";
import education from "../../assets/Education.png";
import elecs from "../../assets/Elecs.png";
import finance from "../../assets/Finance.png";
import it from "../../assets/IT.png";
import industrial from "../../assets/Industrial.png";
import marketing from "../../assets/Marketing.png";
import medical from "../../assets/Medical.png";
import planner from "../../assets/Planner.png";
import fptlogo from "../../assets/fptlogo.png";
import usth from "../../assets/usthlogo.png";
import "./Home.css";
import JobCard from "./JobCard";

const jobData = [
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "15.000.000 VND",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "25.000.000 VND",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "Negotiable",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "Negotiable",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "Negotiable",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "Negotiable",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "Negotiable",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "Negotiable",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "Negotiable",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "Negotiable",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "Negotiable",
    imageUrl: fptlogo,
  },
  {
    title: "Frontend Developer",
    company: "FPT Corporation",
    salary: "Negotiable",
    imageUrl: fptlogo,
  },
];
const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"jobs" | "companies">("jobs");

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  type TagRender = SelectProps["tagRender"];
  const MAX_COUNT = 2;
  const options: { value: string }[] = [
    { value: "Hà Nội" },
    { value: "TP Hồ Chí Minh" },
    { value: "Đà Nẵng" },
    { value: "An Giang" },
    { value: "Bà Rịa - Vũng Tàu" },
    { value: "Bắc Giang" },
    { value: "Bắc Kạn" },
    { value: "Bạc Liêu" },
    { value: "Bắc Ninh" },
    { value: "Bến Tre" },
    { value: "Bình Định" },
    { value: "Bình Dương" },
    { value: "Bình Phước" },
    { value: "Bình Thuận" },
    { value: "Cà Mau" },
    { value: "Cần Thơ" },
    { value: "Cao Bằng" },
    { value: "Đắk Lắk" },
    { value: "Đắk Nông" },
    { value: "Điện Biên" },
    { value: "Đồng Nai" },
    { value: "Đồng Tháp" },
    { value: "Gia Lai" },
    { value: "Hà Giang" },
    { value: "Hà Nam" },
    { value: "Hà Tĩnh" },
    { value: "Hải Dương" },
    { value: "Hải Phòng" },
    { value: "Hậu Giang" },
    { value: "Hòa Bình" },
    { value: "Hưng Yên" },
    { value: "Khánh Hòa" },
    { value: "Kiên Giang" },
    { value: "Kon Tum" },
    { value: "Lai Châu" },
    { value: "Lâm Đồng" },
    { value: "Lạng Sơn" },
    { value: "Lào Cai" },
    { value: "Long An" },
    { value: "Nam Định" },
    { value: "Nghệ An" },
    { value: "Ninh Bình" },
    { value: "Ninh Thuận" },
    { value: "Phú Thọ" },
    { value: "Phú Yên" },
    { value: "Quảng Bình" },
    { value: "Quảng Nam" },
    { value: "Quảng Ngãi" },
    { value: "Quảng Ninh" },
    { value: "Quảng Trị" },
    { value: "Sóc Trăng" },
    { value: "Sơn La" },
    { value: "Tây Ninh" },
    { value: "Thái Bình" },
    { value: "Thái Nguyên" },
    { value: "Thanh Hóa" },
    { value: "Thừa Thiên Huế" },
    { value: "Tiền Giang" },
    { value: "Trà Vinh" },
    { value: "Tuyên Quang" },
    { value: "Vĩnh Long" },
    { value: "Vĩnh Phúc" },
    { value: "Yên Bái" },
  ];

  const tagRender: TagRender = (props) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color="blue"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginInlineEnd: 4 }}
      >
        {label}
      </Tag>
    );
  };
  const jobNames: { value: string }[] = [
    { value: "Software Developer" },
    { value: "Data Scientist" },
    { value: "Product Manager" },
    { value: "UI/UX Designer" },
    { value: "System Administrator" },
    { value: "DevOps Engineer" },
    { value: "Project Manager" },
    { value: "Quality Assurance" },
    { value: "Business Analyst" },
    { value: "Network Engineer" },
    // Add more job names as needed
  ];

  const tagRender2: SelectProps["tagRender"] = (props) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color="blue"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginInlineEnd: 4 }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <div className="full mt-10">
      <article className="background firstpart">
        <div className="container">
          <div className="slogan">
            <h1 className="text-6xl absolute ">
              <span className="font-light text-gray-600">From</span>
              <span className="ml-3 kind text-7xl">College</span>
              <span className="ml-3 font-light text-gray-600">to</span>
              <span className="ml-3 kind text-7xl">Corporations</span>
              <br />
              <span className="font-light text-gray-600">in a touch!</span>
            </h1>
          </div>
          <div className="search mt-42 p-4 bg-white rounded-lg ">
            {" "}
            {/* Added padding, background color, and rounded corners */}
            <ul className="tab_title flex border-b mb-4  items-center">
              {" "}
              {/* Added margin-bottom */}
              <li
                className={`cursor-pointer vieclam px-4 py-2 font-medium ${
                  activeTab === "jobs" ? " kind border-b-2  " : "kind2"
                }`}
                onClick={() => setActiveTab("jobs")}
              >
                Carreer
              </li>
              <li
                className={`cursor-pointer congti px-4 py-2 font-medium ${
                  activeTab === "companies" ? " kind border-b-2  " : "kind2"
                }`}
                onClick={() => setActiveTab("companies")}
              >
                Corporation
              </li>
            </ul>
            <div className="mt-4">
              <div className="flex items-center  space-x-4">
                <Input
                  placeholder="Search by keywords"
                  style={{ height: 46 }}
                />
                <button className="px-4 py-2 button1 text-white rounded">
                  Search
                </button>
              </div>
              <div className="mt-4 grid grid-cols-3">
                <Select
                  mode="multiple"
                  tagRender={tagRender2}
                  maxCount={MAX_COUNT}
                  placeholder="Profession"
                  style={{ width: 254.46, height: 46 }}
                  options={jobNames}
                />
                <Select
                  mode="multiple"
                  tagRender={tagRender}
                  maxCount={MAX_COUNT}
                  placeholder="Location"
                  style={{ width: 254.46, height: 46 }}
                  options={options}
                />
                <Select
                  placeholder="Income"
                  style={{ width: 254.46, height: 46 }}
                  onChange={handleChange}
                  options={[
                    { value: "No Salary", label: "Without Payment" },
                    { value: "Negotiable Salary", label: "Nagotiable Payment" },
                    { value: "0-5", label: "0 - 5.000.000 VND" },
                    { value: "5-10", label: "5 - 10.000.000 VND" },
                    { value: "10-20", label: "10 - 20.000.000 VND" },
                    { value: "20-30", label: "20 - 30.000.000 VND" },
                    { value: "30-50", label: "30 - 50.000.000 VND" },
                  ]}
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-blue-100 hashtag px-3 py-1 rounded-full mr-2">
                #OfficeJobs
              </span>
              <span className="inline-block bg-blue-100 hashtag  px-3 py-1 rounded-full mr-2">
                #GeneralJobs
              </span>
              <span className="inline-block bg-blue-100 hashtag px-3 py-1 rounded-full mr-2">
                #Hanoi
              </span>
              <span className="inline-block bg-blue-100 hashtag px-3 py-1 rounded-full mr-2">
                #HighIncomemmmmm12123123HH
              </span>
            </div>
          </div>
        </div>
      </article>
      <div>
        <h1 className="title text-main">Popular Jobs</h1>
        <div className="choosing flex justify-center items-center">
          <Swiper
            slidesPerView={2}
            grid={{
              rows: 2,
            }}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {jobData.map((job, index) => (
              <SwiperSlide key={index}>
                <JobCard
                  title={job.title}
                  company={job.company}
                  salary={job.salary}
                  imageUrl={job.imageUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <section className="box-content">
        <div>
          <div className="content">
            <div className="box">
              <div className="me">
                <div className="me1">
                  <img width={120} height={26} src={usth} className=""></img>
                  <h1 className="aboutme text-white ">About The Intern</h1>
                </div>
              </div>
              <div className="bullet">
                <ul className="list list-disc text-white">
                  <li>Name: Hoang Minh Duc</li>
                  <li className="space">Date of birth: 20 Ocotber 2003</li>
                  <li className="space">Student ID: BI12-093</li>
                  <li className="space">
                    Major: Information Communication Technology
                  </li>
                  <li className="space">
                    Currently interning at iViec Project, FPT Corporation{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1 className="title text-main">Top Profession</h1>
        <div className="choosing1 flex justify-center items-center">
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 2,
            }}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="profession hover:bg-blue-500">
                <div className="pro-item">
                  <div className="image">
                    <img src={it}></img>
                  </div>
                  <div>
                    <h3 className="mt-3 text-black">Information Technology</h3>
                  </div>
                  <div className="jobname">
                    <h4 className="job text-main">5 Jobs</h4>
                    <button className="arrow text-main">
                      <ArrowRightRegular></ArrowRightRegular>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profession hover:bg-blue-500">
                <div className="pro-item">
                  <div className="image">
                    <img src={business}></img>
                  </div>
                  <div>
                    <h3 className="mt-3 text-black">Business</h3>
                  </div>
                  <div className="jobname">
                    <h4 className="job text-main">5 Jobs</h4>
                    <button className="arrow text-main">
                      <ArrowRightRegular></ArrowRightRegular>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profession hover:bg-blue-500">
                <div className="pro-item">
                  <div className="image">
                    <img src={finance}></img>
                  </div>
                  <div>
                    <h3 className="mt-3 text-black">Finance</h3>
                  </div>
                  <div className="jobname">
                    <h4 className="job text-main">5 Jobs</h4>
                    <button className="arrow text-main">
                      <ArrowRightRegular></ArrowRightRegular>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profession  hover:bg-blue-500">
                <div className="pro-item">
                  <div className="image">
                    <img src={education}></img>
                  </div>
                  <div>
                    <h3 className="mt-5 text-black">Education</h3>
                  </div>
                  <div className="jobname">
                    <h4 className="job text-main">5 Jobs</h4>
                    <button className="arrow text-main">
                      <ArrowRightRegular></ArrowRightRegular>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profession hover:bg-blue-500">
                <div className="pro-item">
                  <div className="image">
                    <img src={elecs}></img>
                  </div>
                  <div>
                    <h3 className="mt-3 text-black">
                      Electronics Telecommunication
                    </h3>
                  </div>
                  <div className="jobname">
                    <h4 className="job text-main">5 Jobs</h4>
                    <button className="arrow text-main">
                      <ArrowRightRegular></ArrowRightRegular>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profession hover:bg-blue-500">
                <div className="pro-item">
                  <div className="image">
                    <img src={marketing}></img>
                  </div>
                  <div>
                    <h3 className="mt-3 text-black">Marketing</h3>
                  </div>
                  <div className="jobname">
                    <h4 className="job text-main">5 Jobs</h4>
                    <button className="arrow text-main">
                      <ArrowRightRegular></ArrowRightRegular>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profession hover:bg-blue-500">
                <div className="pro-item">
                  <div className="image">
                    <img src={customer}></img>
                  </div>
                  <div>
                    <h3 className="mt-3 text-black">Customer Services</h3>
                  </div>
                  <div className="jobname">
                    <h4 className="job text-main">5 Jobs</h4>
                    <button className="arrow text-main">
                      <ArrowRightRegular></ArrowRightRegular>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profession hover:bg-blue-500">
                <div className="pro-item">
                  <div className="image">
                    <img src={planner}></img>
                  </div>
                  <div>
                    <h3 className="mt-3 text-black">Planner</h3>
                  </div>
                  <div className="jobname">
                    <h4 className="job text-main">5 Jobs</h4>
                    <button className="arrow text-main">
                      <ArrowRightRegular></ArrowRightRegular>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profession hover:bg-blue-500">
                <div className="pro-item">
                  <div className="image">
                    <img src={medical}></img>
                  </div>
                  <div>
                    <h3 className="mt-3 text-black">Medical</h3>
                  </div>
                  <div className="jobname">
                    <h4 className="job text-main">5 Jobs</h4>
                    <button className="arrow text-main">
                      <ArrowRightRegular></ArrowRightRegular>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profession hover:bg-blue-500">
                <div className="pro-item">
                  <div className="image">
                    <img src={industrial}></img>
                  </div>
                  <div>
                    <h3 className="mt-3 text-black">Industrial</h3>
                  </div>
                  <div className="jobname">
                    <h4 className="job text-main">5 Jobs</h4>
                    <button className="arrow text-main">
                      <ArrowRightRegular></ArrowRightRegular>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <footer className="bg-blue-500">
        <div className="footer">
          <div className=" flex-wrap flex items-center pt-6 footercontent">
            <div className="left">
              <img src={usth} width={100} height={20}></img>

              <span className="text-white mt-12">
                © Copyright 2021 - 2024 | IVIEC.IO | FPT CORPORATION | USTH
              </span>
            </div>
            <div className="right">
              <span className="text-white email ">
                Address: Floor 15, FPT Tower, 10 Pham Van Bach Street, Cau Giay
                District, Hanoi
              </span>
              <div className="email mt-6">
                <span className="text-white">
                  Email: hoangminhduc.210@gmail.com
                </span>
                <span className="ml-10 text-white">Hotline: 0868867185</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
