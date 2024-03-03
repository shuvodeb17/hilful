import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


const Orders = () => {
    const [value, setValue] = useState('');

    const orderHandler = e => {
        e.preventDefault();
        const formElement = e.target;
        const data = {};

        for (let i = 0; i < formElement.elements.length; i++) {
            const element = formElement.elements[i];
            if (element) {
                data[element.name] = element.value;
            }
        }
        data['service'] = value;

        fetch('https://lazy-pink-beaver-sock.cyclic.app/api/v1/client/orders-post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.statusCode === 200){
                    toast.success(data.message);
                    formElement.reset();
                }
            })
    }


    return (
        <div className="my-container ">
            <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-5">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Orders</h2>

                <form onSubmit={orderHandler} >
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="username">Name</label>
                            <input id="username" name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Name" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                            <input id="emailAddress" name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Email" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="phone">Phone Number</label>
                            <input id="phone" name="phone" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Phone number" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="service">Service type</label>
                            <select onChange={e => setValue(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name="" id="">
                                <option className="bg-[#ddd] font-semibold" disabled>Web Design</option>
                                <option value="MERN Stack">MERN Stack</option>
                                <option value="Laravel">Laravel</option>
                                <option value="WordPress">WordPress</option>
                                <option value="E-commerce website">E-commerce website </option>
                                <option value="Personal website">Personal website</option>
                                <option value="Business website">Business website</option>
                                <option value="Company website">Company website</option>
                                <option value="Portfolio website">Portfolio website</option>

                                {/* graphics */}
                                <option className="bg-[#ddd] font-semibold" disabled>Graphic Design</option>
                                <option value="Branding Design">Branding design</option>
                                <option value="Logo Design">Logo Design</option>
                                <option value="Cover Design">Cover Design</option>
                                <option value="Social media post design">Social media post design</option>
                                <option value="Gig image design">Gig image design</option>
                                <option value="Banner design">Banner design</option>


                                {/* Digital marketing */}
                                <option className="bg-[#ddd] font-semibold" disabled>Digital Marketing</option>
                                <option className="ml-5">SEO</option>
                                <option value="On page seo">On page SEO</option>
                                <option value="Off page seo">Off page SEO</option>
                                <option value="Content written">Content written</option>
                                <option value="Backlink">Backlink</option>
                                <option value="Banner design">Banner design</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Message</label>
                        <textarea name="message" className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring w-full" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                    </div>
                </form>
            </div>
            <Toaster/>
        </div>
    );
};

export default Orders;