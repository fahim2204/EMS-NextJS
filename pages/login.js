// Import NEXT/React Library
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useState } from "react";

// Import Components
import { loginValidate } from "../lib/validate";
import { apiUrl, MainTitle, notify } from "../utils/config";

const Login = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    setServerError(null);
  }

  return (
    <>
      <Head>
        <title>EMS - Login</title>
      </Head>
      <main>
        <div className="flex items-center min-h-screen bg-gray-100 justify-center px-2">
          <div className="overflow-hidden rounded-lg shadow-lg sm:max-w-sm md:mx-auto w-full">
            <div className="py-6 px-10 bg-white md:flex-1">
              <div className="mb-3 mt-1 hover:scale-110 transition-all duration-500">
                <Link href={"/"}>
                  <Image className="mx-auto" src="/img/ems-logo.png" width={120} height={10} priority property="contain" />
                </Link>
              </div>
              <h3 className="mb-3 mt-1 text-base font-semibold text-gray-700 text-center">
                Welcome Back! Please Login
              </h3>
              <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="username" className="text-sm font-semibold text-gray-500">
                    Username
                  </label>
                  <input
                    type="text"
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
                    <label htmlFor="password" className="text-sm font-semibold text-gray-500">
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
                {serverError && (
                  <div className="text-rose-600 text-sm text-center">{serverError}</div>
                )}

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-ems-green-900 rounded-md shadow hover:bg-ems-green-800 focus:outline-none focus:ring-ems-green-100 focus:ring-4"
                  >
                    Log in
                  </button>
                </div>
                <h3 className="mb-3 mt-3 text-sm font-semibold text-gray-500 text-center">
                  Not Registered?{" "}
                  <Link href={"/register"} className="hover:text-ems-green-700 cursor-pointer transition-colors duration-300">
                    Register
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
export default Login;
