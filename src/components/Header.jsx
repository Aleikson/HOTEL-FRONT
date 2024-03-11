import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [search, setsearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('search', search);

    const searchQuery = urlParams.toString();

    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchFromUrl = urlParams.get('seachTerm');

    if (searchFromUrl) {
      setsearch(searchFromUrl);
    }
  }, []);

  return (
    <header className='bg-neutral shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-secondary'>Hotel</span>
            <span className='text-primary'>Bay</span>
          </h1>
        </Link>

        <form
          className='bg-white p-3 rounded-lg flex items-center'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            placeholder='Search...'
            value={search}
            className='bg-trasparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-secondary' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-primary hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-primary hover:underline'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-primary hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
