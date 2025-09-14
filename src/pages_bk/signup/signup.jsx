import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axiosClient from "../../api/axios";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import "./index.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const SignUp = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [anniversaryDate, setAnniversaryDate] = useState(null);
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid = () => {
    return (
      title.trim() !== "" &&
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      password.length >= 6
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid() || loading) return; // Prevent if already loading

    setLoading(true); // Disable button

    const formData = {
      title,
      name: `${firstName} ${lastName}`,
      email,
      birth_date: birthDate
        ? `${birthDate.getFullYear()}-${String(
            birthDate.getMonth() + 1
          ).padStart(2, "0")}-${String(birthDate.getDate()).padStart(2, "0")}`
        : null,
      anniversary_date: anniversaryDate
        ? `${anniversaryDate.getFullYear()}-${String(
            anniversaryDate.getMonth() + 1
          ).padStart(2, "0")}-${String(anniversaryDate.getDate()).padStart(
            2,
            "0"
          )}`
        : null,
      password,
    };

    try {
      const response = await axiosClient.post("api/register", formData);
      if (response.status === 201) {
        setSuccessMessage("Please check your email to verify your account.");
        setTitle("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setBirthDate(null);
        setAnniversaryDate(null);
        setPassword("");
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false); // Re-enable button
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = {
  //     title,
  //     name: `${firstName} ${lastName}`,
  //     email,
  //     birth_date: birthDate ? birthDate.toISOString().split("T")[0] : null,
  //     anniversary_date: anniversaryDate
  //       ? anniversaryDate.toISOString().split("T")[0]
  //       : null,
  //     password,
  //   };

  //   try {
  //     const response = await axiosClient.post("api/register", formData);
  //     if (response.status === 201) {
  //       // setSuccessMessage("Registration successful!");
  //       setSuccessMessage("Please check your email to verify your account.");
  //       console.log("Server response:", response.data);

  //       // setSuccessMessage("Registration successful!");
  //       // Reset form fields
  //       setTitle("");
  //       setFirstName("");
  //       setLastName("");
  //       setEmail("");
  //       setBirthDate(null);
  //       setAnniversaryDate(null);
  //       setPassword("");

  //       // Optionally hide success message
  //       setTimeout(() => setSuccessMessage(""), 3000);
  //     } else {
  //       alert(data.message || "Registration failed.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     if (error.response?.data?.message) {
  //       alert(error.response.data.message);
  //     } else {
  //       alert("An error occurred. Please try again.");
  //     }
  //   }
  // };

  return (
    <section className="sign_up">
      <div className="container">
        <div
          className="row align-items-center"
          style={{ marginTop: "10%", marginBottom: "10%" }}
        >
          <div className="col-xl-6">
            <img
              src="/images/women-wearing-thai-costumes-that-are-symbolic-pointing-fingers.jpg"
              alt="signup"
              className="img-fluid"
            />
          </div>

          <div className="col-xl-6">
            <div id="CustomerRegisterForm" className="form-vertical px-5">
              <div className="section-heading text-center">
                <h1 className="section-header-sm text-uppercase">Sign Up</h1>
                <p>
                  Become a Radiance Rewards member to <br />
                  start earning points and unlock exclusive benefits.
                </p>
              </div>

              <a
                className="w-100 bg-danger d-block p-2 px-3 text-white my-2 text-decoration-none"
                href="#"
              >
                Sign in with Google <i className="bi bi-google"></i>
              </a>

              <a
                className="w-100 bg-dark d-block p-2 px-3 text-white my-2 text-decoration-none"
                href="#"
              >
                Sign in with Apple <i className="bi bi-apple"></i>
              </a>

              <form onSubmit={handleSubmit}>
                <div className="input__group my-3">
                  <select
                    className="w-100 px-3 py-2 text-capitalize"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  >
                    <option value="">Select title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                  </select>
                </div>

                <div className="input__group my-3">
                  <input
                    type="text"
                    className="w-100 px-3 py-2 text-capitalize"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="input__group my-3">
                  <input
                    type="text"
                    className="w-100 px-3 py-2 text-capitalize"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="input__group my-3">
                  <input
                    type="email"
                    className="w-100 px-3 py-2 "
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input__group my-3">
                  <DatePicker
                    selected={birthDate}
                    onChange={(date) => setBirthDate(date)}
                    placeholderText="Birth Date"
                    dateFormat="MM/dd/yyyy"
                    className="w-100 px-3 py-2 text-capitalize"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </div>

                <div className="input__group my-3">
                  <DatePicker
                    selected={anniversaryDate}
                    onChange={(date) => setAnniversaryDate(date)}
                    placeholderText="Anniversary Date"
                    dateFormat="MM/dd/yyyy"
                    className="w-100 px-3 py-2 text-capitalize"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </div>

                <div className="input__group my-3 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-100 px-3 py-2 pe-5"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="position-absolute"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      top: "50%",
                      right: "15px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "#999",
                      fontSize: "18px",
                    }}
                  >
                    {showPassword ? (
                      <BsEyeSlash className="signin-eye-icon" />
                    ) : (
                      <BsEye className="signin-eye-icon" />
                    )}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid() || loading}
                  className={`submit-btn w-100 text-uppercase text-white border-button border my-2 p-2 rounded-0 fw-bold border-dark mt-0 ${
                    !isFormValid() || loading ? "disabled-btn-register" : ""
                  }`}
                >
                  {loading ? "Creating..." : "Create"}
                </button>

                {successMessage && (
                  <div className="alert alert-success text-center mt-3">
                    {successMessage}
                  </div>
                )}
              </form>

              <div className="form__actions d-flex justify-content-between login-account mt-3">
                <span>Already Have An Account?</span>
                <Link className="link align-items_center" to="/signin">
                  Sign in
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path
                      d="M1518,753.5a.5.5,0,0,1,.5-.5h3.795l-1.15-1.146a.5.5,0,0,1,.71-.707l2,2a.5.5,0,0,1,0,.707l-2,2a.5.5,0,0,1-.71-.707l1.15-1.146H1518.5A.5.5,0,0,1,1518,753.5Z"
                      transform="translate(-1515 -747.5)"
                      fill="#181a1d"
                    />
                    <path
                      d="M1518,756a6,6,0,1,0-6-6A6,6,0,0,0,1518,756Zm0-1a5,5,0,1,0-5-5A5,5,0,0,0,1518,755Z"
                      transform="translate(-1512 -744)"
                      fill="#181a1d"
                      fillRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
