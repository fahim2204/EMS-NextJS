import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiUrl, MainTitle, notify } from "../utils/config";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate";

const Register = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState(null);
  const [registerStep, setRegisterStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    axios
      .post(`/api/user`, values)
      .then((x) => {
        setServerError([]);
        notify("Registration success!!");
        router.push("/login");
      })
      .catch((e) => {
        if (e.response.data.errors) {
          setServerError(e.response.data.errors);
        } else {
          console.log("Error>> ", e);
        }
      });
  }

  return (
    <>
      <Head>
        <title>EMS - Register</title>
      </Head>
      <main>
        <ToastContainer />
        <div className="flex items-center min-h-screen bg-gray-100 justify-center px-2">
          <div className="overflow-hidden rounded-lg shadow-lg sm:max-w-sm md:mx-auto w-full">
            <div className="py-6 px-10 bg-white md:flex-1">
              <div className="mb-3 mt-1 hover:scale-110 transition-all duration-500">
                <Link href={"/"}>
                  <Image
                    className="mx-auto"
                    src="/img/ems-logo.png"
                    width={120}
                    height={10}
                    priority
                    property="contain"
                  />
                </Link>
              </div>
              <h3 className="mb-3 mt-1 text-base font-semibold text-gray-700 text-center">
                Choose Account Type
              </h3>
              <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-2">
                {registerStep === 1 && <>
                  <button
                        type="button" onClick={()=>setRegisterStep(2)}
                        className="mt-3 w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-ems-green-900 rounded-md shadow hover:bg-ems-green-800 focus:outline-none focus:ring-ems-green-100 focus:ring-4"
                      >
                        Next
                      </button></>}
                {registerStep === 2 && (
                  <>
                    <div className="flex flex-col space-y-1">
                      <label for="fullName" className="text-sm font-semibold text-gray-500">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className={`px-3 py-1 transition duration-300 border ${
                          formik.errors.fullName && formik.touched.fullName
                            ? "border-rose-600"
                            : "border-gray-300"
                        } rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ems-green-300`}
                        {...formik.getFieldProps("fullName")}
                      />
                      <div className="text-rose-600 text-xs mt-1">
                        {formik.errors.fullName && formik.touched.fullName && (
                          <div>{formik.errors.fullName}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label for="email" className="text-sm font-semibold text-gray-500">
                        Username
                      </label>
                      <input
                        type="username"
                        id="username"
                        name="username"
                        className={`px-3 py-1 transition duration-300 border ${
                          formik.errors.username && formik.touched.username
                            ? "border-rose-600"
                            : "border-gray-300"
                        } rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ems-green-300`}
                        {...formik.getFieldProps("username")}
                      />
                      <div className="text-rose-600 text-xs mt-1">
                        {formik.errors.username && formik.touched.username && (
                          <div>{formik.errors.username}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between">
                        <label for="password" className="text-sm font-semibold text-gray-500">
                          Password
                        </label>
                      </div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className={`px-3 py-1 transition duration-300 border ${
                          formik.errors.password && formik.touched.password
                            ? "border-rose-600"
                            : "border-gray-300"
                        } rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ems-green-300`}
                        {...formik.getFieldProps("password")}
                      />
                      <div className="text-rose-600 text-xs mt-1">
                        {formik.errors.password && formik.touched.password && (
                          <div>{formik.errors.password}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-centerustify-between">
                        <label for="password" className="text-sm font-semibold text-gray-500">
                          Confirm Password
                        </label>
                      </div>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className={`px-3 py-1 transition duration-300 border ${
                          formik.errors.confirmPassword && formik.touched.confirmPassword
                            ? "border-rose-600"
                            : "border-gray-300"
                        } rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ems-green-300`}
                        {...formik.getFieldProps("confirmPassword")}
                      />
                      <div className="text-rose-600 text-xs mt-1">
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                          <div>{formik.errors.confirmPassword}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <ul className="list-disc m-0 flex flex-col ml-6">
                        {serverError &&
                          serverError.map((err) => {
                            return (
                              <>
                                <li className="text-rose-600 leading-5 text-sm">
                                  {err.instancePath.replace("/", "")} {err.message}
                                </li>
                              </>
                            );
                          })}
                      </ul>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="mt-3 w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-ems-green-900 rounded-md shadow hover:bg-ems-green-800 focus:outline-none focus:ring-ems-green-100 focus:ring-4"
                      >
                        Register
                      </button>
                    </div>
                  </>
                )}

                <h3 className="mb-3 mt-1 text-sm font-semibold text-gray-500 text-center">
                  Already Registered?{" "}
                  <Link
                    href={"/login"}
                    className="hover:text-ems-green-700 cursor-pointer transition-colors duration-300"
                  >
                    Login
                  </Link>
                </h3>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Register;
