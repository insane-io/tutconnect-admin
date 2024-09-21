import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "./Context/MyContext";



const Login = () => {
    const [token, setToken] = useState();
    const { setLogin } = useContext(MyContext)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // useEffect(() => {
    //     if (token) {
    //         axios.post('http://13.60.236.4:8000/api/google-login/', { token })
    //             .then(response => {
    //                 console.log('Logged in ', response);
    //                 localStorage.setItem("access_token", response.data.access)
    //                 localStorage.setItem("refresh_token", response.data.refresh)
    //                 navigate("/freelancerprofile");
    //                 setLogin(true)
    //             })
    //             .catch(error => {
    //                 console.error('error', error);
    //             });
    //     }
    // }, [token, navigate]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = new FormData();
        postData.append("email", formData.email);
        postData.append("password", formData.password);

        try {
            const res = await axios.post(`http://13.60.236.4:8000/user/login/`, postData);
            localStorage.setItem("access_token", res.data.access);
            localStorage.setItem("refresh_token", res.data.refresh);
            console.log(res.data)
            navigate("/admin");
            setLogin(true)
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="mx-[30rem] mt-40">
                <div className=" m-16 border-2 p-5 rounded-xl flex flex-col justify-center" >
                    <h1 style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', margin: '20px 0' }}>
                        Login
                    </h1>
                    <label htmlFor="user-email" className="block text-md font-bold mb-2" style={{ paddingTop: "13px" }}>
                        Email
                    </label>
                    <input
                        id="user-email"
                        className="rounded-md w-full py-3 px-3  focus:outline-none bg-[#E6E0E9]"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => handleChange(e)}
                        autoComplete="on"
                        required
                    />
                    <div className="form-border"></div>
                    <label htmlFor="user-password" className="block text-md font-bold mb-2" style={{ paddingTop: "22px" }}>
                        Password
                    </label>
                    <input
                        id="user-password"
                        className="rounded-md w-full py-3 px-3  focus:outline-none bg-[#E6E0E9]"
                        type="password"
                        name="password"
                        placeholder="******"
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    {/* <GoogleLogin
                        onSuccess={credentialResponse => {
                            setToken(credentialResponse.credential);
                            console.log(credentialResponse.credential);
                        }}
                        onError={(error) => {
                            console.log('Login Failed', error);
                        }}
                    /> */}
                    <div className="form-border"></div>
                    <input
                        id="submit-btn"
                        type="submit"
                        name="submit"
                        value="LOGIN"
                        className="bg-[#DF73FF] hover:bg-gray-900 w-full mt-3 cursor-pointer text-white font-thin py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </>
    );
};

export default Login;