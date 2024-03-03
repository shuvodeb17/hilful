// Mern stack
import ashraful from '../../assets/update/Team/Web development/head.jpeg'
import redwan from '../../assets/update/Team/Web development/assistant-Head-Redwan-Islam.jpg'
import shuvo from '../../assets/update/Team/Web development/project-manager.png'

// digital marketer
import DMshohagh from '../../assets/update/Team/Digital marketing/team-head-mohammad-shohagh.jpg'
import DMnewaz from '../../assets/update/Team/Digital marketing/assistant-head-newaz-sheakh.jpg'
import DMSadika from '../../assets/update/Team/Digital marketing/project-manager-sadika-rahman.jpg'

// laravel
import LShakil from '../../assets/update/Team/Laravel team/Team-Head-Shakil-khan.jpg'
import LRaju from '../../assets/update/Team/Laravel team/assistant-head-Raju-sheikh.jpg'
import LSorif from '../../assets/update/Team/Laravel team/Project-Manager-md-shorfuddin-siam.jpg'

// graphics
import GImran from '../../assets/update/Team/Graphic design/head-imran-talukder.jpg'
import GAzizul from '../../assets/update/Team/Graphic design/assistant-team-head-azizul-islam.jpg'
import GImaranHossain from '../../assets/update/Team/Graphic design/project-manager-iIman-hossain.jpg'


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Department = () => {

    const departmentInfo = [
        {
            departName: 'MERN Stack Department',
            members: [
                {
                    name: 'MD: Ashraful islam',
                    img: ashraful,
                    position: 'Department Head',
                    description: 'The MERN stack Department Head oversees development of web applications using MongoDB, Express.js, React.js, and Node.js, ensuring timely delivery and quality standards.',
                    aosAnimation: 'fade-up'
                },
                {
                    name: 'Shuvo Deb',
                    img: shuvo,
                    position: 'Project Manager',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'fade-right'
                },
                {
                    name: 'Redwan Islam',
                    img: redwan,
                    position: 'Assistant Project Manager',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'fade-left'
                }
            ]
        },
        {
            departName: 'Laravel Department',
            members: [
                {
                    name: 'Sakil khan',
                    img: LShakil,
                    position: 'Department Head',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'flip-right'
                },
                {
                    name: 'Raju Sheikh',
                    img: LRaju,
                    position: 'Assistant Department Head',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'flip-up'
                },
                {
                    name: 'Shorifuddin Siyam',
                    img: LSorif,
                    position: 'Project Manager',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'flip-left'
                },
            ]
        },
        {
            departName: 'Digital Marketers Department',
            members: [
                {
                    name: 'Mohammad Sohag',
                    img: DMshohagh,
                    position: 'Department Head',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'zoom-in'
                },
                {
                    name: 'Newaz Sheikh',
                    img: DMnewaz,
                    position: 'Assistant Department Head',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'zoom-in-up'
                },
                {
                    name: 'Sadika Rahman',
                    img: DMSadika,
                    position: 'Project Manager',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'zoom-in-down'
                },
            ]
        },
        {
            departName: 'Graphics Designers Department',
            members: [
                {
                    name: 'Imran Talukdar',
                    img: GImran,
                    position: 'Department Head',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'zoom-out-right'
                },
                {
                    name: 'Azizul islam',
                    img: GAzizul,
                    position: 'Assistant Department Head',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'zoom-out-left'
                },
                {
                    name: 'Imran Hossain',
                    img: GImaranHossain,
                    position: 'Project Manager',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe',
                    aosAnimation: 'zoom-out-down'
                },
            ]
        }
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Meet Our <span className="text-[#5B96FB]">Department</span> </h1>
            {/* <p className="w-8/12 text-center mt-2 text-[#232536] mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim recusandae maxime, delectus saepe temporibus modi provident quisquam. Iste, voluptatum ipsa?</p> */}

            <div className="mt-5 gap-5">
                {departmentInfo.map((department, index) => (
                    <div key={index}>
                        <h2 className="text-2xl font-semibold mb-5 mt-10">{department.departName}</h2>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                            {department.members.map((member, i) => (
                                <div key={i} className="shadow p-2 rounded border" data-aos={member.aosAnimation}>
                                    <div className="flex gap-2">
                                        <img style={{ border: '2px solid #5B96FB' }} className='w-16 h-16 object-cover rounded-full p-1' src={member.img} alt="" />
                                        <div>
                                            <h5 className="font-semibold text-xl">{member.name}</h5>
                                            <p className="">{member.position}</p>
                                        </div>
                                    </div>
                                    {/* <p className="mt-2 text-[#232536]">{member.description}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Department;
