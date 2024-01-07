import Image from 'next/image';
import React from 'react';

export default function Events() {
  const events = [
    {
      id: 1,
      name: 'Bringing the power of AI into your application',
      eventDate: 'Nov 29, 2023',
      imageUrl: '/images/events/5427083.jpg',
    },
    {
      id: 2,
      name: 'Designing for Intelligence',
      eventDate: 'Mar 30, 2023',
      imageUrl: '/images/events/22723.jpg',
    },
    {
      id: 3,
      name: 'Crafting Code Suggestions using Large Language Models',
      eventDate: 'Feb 6, 2023',
      imageUrl: '/images/events/4733401.jpg',
    },
    {
      id: 4,
      name: 'AI-assisted pair programming with GitHub Copilot',
      eventDate: 'February 26, 2021',
      imageUrl: '/images/events/3774274.jpg',
    },
    {
      id: 5,
      name: 'Crafting Code Suggestions using Large Language Models',
      eventDate: 'January 21, 2021',
      imageUrl: '/images/events/3774274.jpg',
    },
    {
      id: 6,
      name: 'Bringing the Power of AI into your Editor with GitHub Copilot',
      eventDate: 'December 2, 2020',
      imageUrl: '/images/events/2157841.jpg',
    },
    {
      id: 7,
      name: 'How We Evaluate the Quality of Copilot',
      eventDate: 'November 12, 2020',
      imageUrl: '/images/events/55346556.jpg',
    },
    {
      id: 8,
      name: 'Bringing the Power of AI into your Editor with GitHub Copilot',
      eventDate: 'October 22, 2020',
      imageUrl: '/images/events/5427083.jpg',
    },
    {
      id: 9,
      name: 'Productivity Assessment of Neural Code Completion',
      eventDate: 'Jun 13, 2022',
      imageUrl: '/images/events/2157841.jpg',
    },
    {
      id: 10,
      name: 'Turning AI for Code into AI for Coding',
      eventDate: 'August 19, 2020',
      imageUrl: '/images/events/55346556.jpg',
    },
    {
      id: 11,
      name: 'A Tour of F# Editor Training',
      eventDate: 'Jul 26, 2021',
      imageUrl: '/images/events/5427083.jpg',
    },
  ];
  return (
    <div className=' bg-blue-300 m-4 rounded-xl'>
      <div className='mx-4 py-10'>
        <div className='container mx-auto'>
          <div className='col-span-12 lg:col-span-10 lg:col-start-2 mb-8'>
            <h2 className='text-3xl font-extrabold text-black'>Events</h2>
            <p className='mt-3 text-2xl font-light max-w-[30em]'>
              Our team members speak at a variety of conferences, meetups, and other events across the world.
            </p>
          </div>
          <div className='mt-8'>
            <ul className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              {events.map((event) => {
                return (
                  <li key={event.key} className='h-full'>
                    <div className='bg-white rounded-lg shadow p-4 w-full h-full flex flex-col transform transition hover:scale-[1.01]'>
                      <h3 className='text-lg font-semibold'>{event.name}</h3>
                      <p className='text-grey-500 text-sm'>{event.eventDate}</p>
                      <div className='flex -space-x-1 relative z-0 overflow-hidden mt-4'>
                        <a href='' className='z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden'>
                          <Image src={event.imageUrl} width={32} height={32} alt={event.name} />
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
