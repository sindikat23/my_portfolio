import my_photo from '@/../public/images/21.jpg'
import my_photo1 from '@/../public/images/22.jpg'
import Image from 'next/image'

const page = () => {
  return (
    <div className='container mx-auto'>
      <div className=' py-6 px-10'>
        <div className='py-4'>
          <div className='flex justify-center py-3 w-1/10 bg-[#3C3D42]'>
            <p className='font-thin text-[#c5c0c086]'>ABOUT</p>
          </div>
          <h1 className='text-white text-4xl py-6'>About Me</h1>
          <div className='lg:grid grid-cols-1 gap-4'>
            <Image src={my_photo1} alt='Joldasov Alpamis' className='min-w-full max-h-150' />
          </div>
          <div className='py-8'>
            <h1 className='text-4xl text-white'>Alpamis Joldasov</h1>
            <p className='text-lg text-gray-500 pt-2 saira'>Web Developer</p>
          </div>
        </div>
        <div className='border-gray-600 border-[1px_0px_1px_0px] py-4'>
          <p className='py-2 text-[16px] text-gray-400 saira'>Hello!</p>
          <p className='py-2 text-[16px] text-gray-400 saira'>I'm Joldasov Alpamis, a passionate frontend developer currently studying at Najot Ta'lim Academy, specializing in Frontend Web Development.</p>
          <p className='py-2 text-[16px] text-gray-400 saira'>
            Throughout my learning journey, I've gained strong skills and deep knowledge in modern web technologies. I enjoy creating user-friendly and responsive interfaces that provide real value to users. Crafting clean, interactive, and functional websites is what truly inspires me.</p>
        </div>
        <div className='grid grid-cols-2 py-8'>
          <ul className='col-span-1'>
            <li>
              <span className="min-w-[100px] float-left mr-[10px] font-medium text-white saira">Birthday: </span>
              <span className='saira font-extralight text-[#AAAAAB]'>1 0 . 1 1 . 1 9 9 9</span>
            </li>
            <li>
              <span className="min-w-[100px] float-left mr-[10px] font-medium text-white saira">Age: </span>
              <span className='saira font-extralight text-[#AAAAAB]'>2 5</span>
            </li>
            <li>
              <span className="min-w-[100px] float-left mr-[10px] font-medium text-white saira">Address:</span>
              <span className='saira font-extralight text-[#AAAAAB]'>Dosliq 2, Nukus, Qaraqalpaqstan</span>
            </li>
            <li>
              <span className="min-w-[100px] float-left mr-[10px] font-medium text-white saira">Email:</span>
              <span className='saira font-extralight text-[#AAAAAB]'>ajoldasov013@gmail.com</span>
            </li>
            <li>
              <span className="min-w-[100px] float-left mr-[10px] font-medium text-white saira">Phone:</span>
              <span className='saira font-extralight text-[#AAAAAB]'>+998 91 191 00 62</span>
            </li>
          </ul>
          <ul className='col-span-1'>
          <li>
              <span className="min-w-[100px] float-left mr-[10px] font-medium text-white saira">Nationality:</span>
              <span className='saira font-extralight text-[#AAAAAB]'>Qaraqalpaq</span>
            </li>
            <li>
              <span className="min-w-[100px] float-left mr-[10px] font-medium text-white saira">Study:</span>
              <span className='saira font-extralight text-[#AAAAAB]'>Transport Univercity of Tashkent</span>
            </li>
            <li>
              <span className="min-w-[100px] float-left mr-[10px] font-medium text-white saira">Degree:</span>
              <span className='saira font-extralight text-[#AAAAAB]'>Mechanical Engineer</span>
            </li>
            <li>
              <span className="min-w-[100px] float-left mr-[10px] font-medium text-white saira">Interest:</span>
              <span className='saira font-extralight text-[#AAAAAB]'>Playing Football</span>
            </li>
            <li>
              <span className="min-w-[100px] float-left mr-[10px] font-medium text-white saira">Freelance:</span>
              <span className='saira font-extralight text-[#AAAAAB]'>Available</span>
            </li>
          </ul>
        </div>
        <div>
          {/* <section className="max-w-3xl mx-auto p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-4">👋 Hello!</h1>
            <p className="text-lg mb-6">
              I'm <strong>Joldasov Alpamis</strong>, a passionate frontend developer currently studying at
              <strong> Najot Ta'lim Academy</strong>, specializing in <strong>Frontend Web Development</strong>.
            </p>

            <p className="text-lg mb-6">
              Throughout my learning journey, I've gained strong skills and deep knowledge in modern web
              technologies. I enjoy creating <strong>user-friendly</strong> and <strong>responsive</strong> interfaces
              that provide real value to users. Crafting clean, interactive, and functional websites is what
              truly inspires me.
            </p>

            <h2 className="text-2xl font-semibold mb-2">🧠 Technologies I’ve learned:</h2>
            <ul className="list-disc list-inside mb-6">
              <li><strong>HTML5, CSS3</strong> – Building semantic and visually appealing web structures</li>
              <li><strong>Tailwind CSS, Bootstrap</strong> – Creating responsive and modern UI designs</li>
              <li><strong>JavaScript (ES6+)</strong> – Core concepts, functional programming, and DOM manipulation</li>
              <li><strong>Git & GitHub</strong> – Version control and team collaboration</li>
              <li><strong>React.js</strong> – Building dynamic applications with component-based architecture</li>
              <li><strong>Vite</strong> – Fast and lightweight development environment setup</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">🔨 Practice & Project Experience:</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Static and dynamic web pages</li>
              <li>Interactive forms, dropdowns, and modal components</li>
              <li>Small apps that interact with public APIs</li>
              <li>My own <strong>portfolio website</strong> (including this very page 😎)</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">🎯 My Goal:</h2>
            <p className="text-lg">
              To constantly improve my frontend skills, work on real-world projects, and build useful applications
              that positively impact users. I'm proud to be taking my first steps toward becoming a professional
              developer, and I'm excited for what lies ahead.
            </p>
          </section> */}
        </div>
      </div>
    </div>
  )
}

export default page