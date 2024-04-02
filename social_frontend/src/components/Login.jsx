import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
//import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logo.png';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
//import GoogleLogin from 'react-google-login';
import {jwtDecode} from 'jwt-decode'; // Need to Study
import  {client} from '../client';


const Login = () => {

const navigate=useNavigate(); // Study
      
    const responseGoogle =  async (credentialResponse) => {
        //console.log(credentialResponse.credential);
       localStorage.setItem('user',JSON.stringify(jwtDecode(credentialResponse.credential))); // Study
        const {name,picture,sub} = jwtDecode(credentialResponse.credential);
        const doc = {
            _id:sub,
            _type:'user',
            userName:name,
            image:picture,
        }
        
        
        client.createIfNotExists(doc) // Study
        .then(()=>{
            navigate('/',{replace:true})
        })


      };


    return (
<GoogleOAuthProvider clientId='392144246083-j3esccdi8s791cl4pet0hfvbjm4cbf8o.apps.googleusercontent.com'> 

        <div className="flex justify-start items-center flex-col  h-screen">
            <div className="relative w-full h-full">

                <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />
                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                    <div className="p-5">
                        <img src={logo} width="130px" alt="logo" />
                    </div>
                    <GoogleLogin
                            onSuccess={responseGoogle}
                            onError={()=>console.log('Login failed')}
                            cookiePolicy="single_host_origin"
                    />;



                </div>
            </div>
        </div>
 

        </GoogleOAuthProvider>

    )
}

export default Login
