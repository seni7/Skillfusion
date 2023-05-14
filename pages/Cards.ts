import React from "react";
import Link from 'next/link'
import Sidebar from './Sidebar'
const Card = ({id,title,grade}) => {
  return (
   <>
<div>
{/* <Link className=" py-2 text-center m-2 bg-blue-50 shadow-lg rounded-full pointer-cursor font-bold  hover:shadow-x1 active:scale-90 translation duration-150" href="/Card">Add Resource</Link>
<Link className=" py-2 text-center m-2 bg-blue-50 shadow-lg rounded-full pointer-cursor font-bold hover:shadow-x1 active:scale-90 translation duration-150" href="/Card">Add Exercise</Link>
<Link className=" py-2 text-center m-2 bg-blue-50 shadow-lg rounded-full pointer-cursor font-bold  hover:shadow-x1 active:scale-90 translation duration-150" href="/Card">Add exam</Link>
<Link className=" py-2 text-center m-2 bg-blue-50 shadow-lg rounded-full pointer-cursor font-bold  hover:shadow-x1 active:scale-90 translation duration-150" href="/Card">Download exam</Link>
<Link className=" py-2 text-center m-2 bg-blue-50 shadow-lg rounded-full pointer-cursor font-bold hover:shadow-x1 active:scale-90 translation duration-150" href="/Card">Download Resource</Link>
<Link className=" py-2 text-center m-2 bg-blue-50 shadow-lg rounded-full pointer-cursor font-bold  hover:shadow-x1 active:scale-90 translation duration-150" href="/Card">Upload Result</Link>
<Link className=" py-2 text-center m-2 bg-blue-50 shadow-lg rounded-full pointer-cursor font-bold hover:shadow-x1 active:scale-90 translation duration-150" href="/Card">Videos</Link>
<Link className=" py-2 text-center m-2 bg-blue-50 shadow-lg rounded-full pointer-cursor font-bold  hover:shadow-x1 active:scale-90 translation duration-150" href="/Card">Books</Link> */}
{/* <Sidebar/> */}

</div>
     <div className="relative h-100  grid grid-cols-1 md:grid-cols-2 ml-60 p-5">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl my-1  border-double transition delay-700 duration-300 border-4 border-sky-200  hover:border-dotted border-2 border-sky-500 transition delay-700 duration-300">
      <div className="md:flex">
        <div className="px-20">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold m-5">
          Subject Name:-{title}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Grade {grade}
          </a>
       

          <form className="items-center	 mt-4" encType="multipart/form-data" method="POST" action="/">
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Upload file
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6v14l5-5h10V6H4zm12 8v-2h-2v2h-2v-2h-2v2H8v-2H6v4h12v-4h-2z" />
                  </svg>
                </span>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="sr-only"
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer ml-3 font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Choose a file
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl my-1  border-double transition delay-700 duration-300 border-4 border-sky-200  hover:border-dotted border-2 border-sky-500 transition delay-700 duration-300">
      <div className="md:flex">
        <div className="px-20">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold m-5">
          Subject Name:-{title}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Grade {grade}
          </a>
       

          <form className="items-center	 mt-4" encType="multipart/form-data" method="POST" action="/">
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Upload file
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6v14l5-5h10V6H4zm12 8v-2h-2v2h-2v-2h-2v2H8v-2H6v4h12v-4h-2z" />
                  </svg>
                </span>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="sr-only"
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer ml-3 font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Choose a file
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl my-1  border-double transition delay-700 duration-300 border-4 border-sky-200  hover:border-dotted border-2 border-sky-500 transition delay-700 duration-300">
      <div className="md:flex">
        <div className="px-20">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold m-5">
          Subject Name:-{title}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Grade {grade}
          </a>
       

          <form className="items-center	 mt-4" encType="multipart/form-data" method="POST" action="/">
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Upload file
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6v14l5-5h10V6H4zm12 8v-2h-2v2h-2v-2h-2v2H8v-2H6v4h12v-4h-2z" />
                  </svg>
                </span>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="sr-only"
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer ml-3 font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Choose a file
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl my-1  border-double transition delay-700 duration-300 border-4 border-sky-200  hover:border-dotted border-2 border-sky-500 transition delay-700 duration-300">
      <div className="md:flex">
        <div className="px-20">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold m-5">
          Subject Name:-{title}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Grade {grade}
          </a>
       

          <form className="items-center	 mt-4" encType="multipart/form-data" method="POST" action="/">
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Upload file
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6v14l5-5h10V6H4zm12 8v-2h-2v2h-2v-2h-2v2H8v-2H6v4h12v-4h-2z" />
                  </svg>
                </span>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="sr-only"
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer ml-3 font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Choose a file
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl my-1  border-double transition delay-700 duration-300 border-4 border-sky-200  hover:border-dotted border-2 border-sky-500 transition delay-700 duration-300">
      <div className="md:flex">
        <div className="px-20">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold m-5">
          Subject Name:-{title}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Grade {grade}
          </a>
       

          <form className="items-center	 mt-4" encType="multipart/form-data" method="POST" action="/">
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Upload file
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6v14l5-5h10V6H4zm12 8v-2h-2v2h-2v-2h-2v2H8v-2H6v4h12v-4h-2z" />
                  </svg>
                </span>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="sr-only"
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer ml-3 font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Choose a file
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl my-1  border-double transition delay-700 duration-300 border-4 border-sky-200  hover:border-dotted border-2 border-sky-500 transition delay-700 duration-300">
      <div className="md:flex">
        <div className="px-20">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold m-5">
          Subject Name:-{title}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Grade {grade}
          </a>
       

          <form className="items-center	 mt-4" encType="multipart/form-data" method="POST" action="/">
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Upload file
              </label>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6v14l5-5h10V6H4zm12 8v-2h-2v2h-2v-2h-2v2H8v-2H6v4h12v-4h-2z" />
                  </svg>
                </span>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="sr-only"
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer ml-3 font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Choose a file
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
   </>
  
  
  );
};

export default Card;
