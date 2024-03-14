import { FaSquareGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaDev } from 'react-icons/fa';

export default function About() {
  return (
    <div className='text-justify py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-primary'>
        About the House Bay Project
      </h1>
      <p className='mb-4 text-primary'>
        About the House Bay Project The House Bay project is a fullstack web
        application built using React and Node.js technologies, with styling
        entirely implemented in Tailwind CSS. Its primary objective is to serve
        as a platform for listing rental and sale properties, along with
        providing features such as user login and individual post creation.
        MongoDB is utilized as the database for data storage.
      </p>
      <p className='mb-4 text-primary'>
        Throughout the development process of this project, I focused on
        enhancing various skills. Particularly, I honed my abilities in
        performing HTTP requests, manipulating APIs, and creating them.
        Furthermore, I refined my problem-solving skills, promptly addressing
        any errors and issues encountered during the applications development.
        Additionally, I sought to apply my creativity in designing a dynamic and
        appealing user interface capable of capturing and retaining user
        engagement.
      </p>
      <h1 className='text-3xl font-bold mb-4 text-primary'>
        Social media of the developer
      </h1>
      <div className='flex flex-col gap-5 w-[35%]'>
        <a
          href='https://github.com/Aleikson'
          className='flex items-center text-primary cursor-pointer hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaSquareGithub className='mr-3 h-auto w-[35px] hover:opacity-95' />
          github.com/Aleikson
        </a>
        <a
          href='https://linkedin.com/in/aleikson-frontend'
          className='flex items-center text-primary cursor-pointer hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='mr-3 h-auto w-[35px] hover:opacity-95' />
          linkedin.com/in/aleikson-frontend
        </a>
        <a
          href='https://aleiksons.vercel.app'
          className='flex items-center text-primary cursor-pointer hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaDev className='mr-3 h-auto w-[35px] hover:opacity-95' />
          aleiksons.vercel.app
        </a>
      </div>
    </div>
  );
}
