import React from 'react';
import { TbHandClick } from 'react-icons/tb'

const Blogs = () => {
    return (
        <div>
            <div className="collapse w-8/12 mx-auto my-5 shadow-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-pink-200 text-xl flex justify-between text-pink-800  peer-checked:text-black">
                    What is Cors ? <TbHandClick className='h-5 w-1/12'/>
                </div>
                <div className="collapse-content text-justify bg-primary text-primary-content peer-checked:bg-pink-100 peer-checked:text-pink-800 ">
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>
                </div>
            </div>
            <div className="collapse w-8/12 mx-auto my-5 shadow-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-pink-200 text-xl flex justify-between text-pink-800  peer-checked:text-black">
                Why are you using firebase? What other options do you have to implement authentication? <TbHandClick className='h-5 w-1/12'/>
                </div>
                <div className="collapse-content text-justify bg-primary text-primary-content peer-checked:bg-pink-100 peer-checked:text-pink-800 ">
                    <p>Firebase is a set of tools offered by Google to build excellent scalable applications in the cloud. It is a powerful service that helps in building applications quickly without reinventing the components or modules. Services like analytics, authentication, databases, configuration, file storage, push messaging are provided by firebase thereby making it easy for the developers to focus on the user experience of the application. <br/>Firebase is a good choice if you plan to either write a brand-new application or rewrite an existing one from scratch. Additionally, firebase helps in the easy storing and retrieval of dynamic content. If you decide to develop the application without any form of custom coding the backend, firebase makes this easy. </p>
                </div>
            </div>
            <div className="collapse w-8/12 mx-auto my-5 shadow-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-pink-200 text-xl flex justify-between text-pink-800  peer-checked:text-black">
                <h1 className='w-11/12'>How does the private route work?</h1> <TbHandClick className='h-5 w-1/12'/>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-pink-100 peer-checked:text-pink-800 ">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse w-8/12 mx-auto my-5 shadow-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-pink-200 text-xl flex justify-between text-pink-800  peer-checked:text-black">
                What is Node? How does Node work? <TbHandClick className='h-5 w-1/12'/>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-pink-100 peer-checked:text-pink-800 ">
                    <p>hello</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;