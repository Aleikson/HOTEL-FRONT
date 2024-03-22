import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ItemListing from '../components/ItemListing';
import { images } from '../assets/images';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const response = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await response.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-primary font-bold text-3xl lg:text-6xl'>
          Discover Your Ideal <span className='text-secondary'>Residence</span>
          <br />
          Effortlessly
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          House Bay presents itself as the premier platform for locating your
          next ideal dwelling.
          <br />
          We boast a diverse selection of properties to suit your preferences.
        </div>
        <a
          href='/search'
          className='text-xs sm:text-sm text-secondary font-bold hover:underline'
        >
          Begin Your Search...
        </a>
      </div>

      <Swiper navigation>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: `url(${image}) center no-repeat`,
                backgroundSize: 'cover',
                height: '500px',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-secondary'>
                Recent offers
              </h2>
              <Link
                className='text-sm text-secondary underline hover:opacity-95'
                to={'/search?offer=true'}
              >
                Show more offers
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ItemListing listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-secondary'>
                Recent places for rent
              </h2>
              <Link
                className='text-sm text-secondary underline	hover:opacity-95'
                to={'/search?type=rent'}
              >
                Show more places for rent
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ItemListing listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-secondary'>
                Recent places for sale
              </h2>
              <Link
                className='text-sm text-secondary underline hover:opacity-95'
                to={'/search?type=sale'}
              >
                Show more places for sale
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ItemListing listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
