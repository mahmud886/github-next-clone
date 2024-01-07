import Image from 'next/image';
import React from 'react';

export default function Speakers() {
  const speakers = [
    {
      id: 1,
      name: 'Melody Meckfessel',
      speaking: 'Observable',
      eventDate: 'April 20, 2024',
      imageUrl: '/images/speakers/MelodyMeckfessel.jpg',
    },
    {
      id: 2,
      name: 'Sumana Harihareswara',
      speaking: 'Changeset Consulting',
      eventDate: 'March 30, 2021',
      imageUrl: '/images/speakers/SumanaHarihareswara.jpg',
    },
    {
      id: 3,
      name: 'swyx',
      speaking: 'Temporal.io',
      eventDate: 'March 18, 2021',
      imageUrl: '/images/speakers/swyx.jpg',
    },
    {
      id: 4,
      name: 'Peter van Hardenberg',
      speaking: 'Ink & Switch',
      eventDate: 'February 26, 2021',
      imageUrl: '/images/speakers/PetervanHardenberg.jpg',
    },
    {
      id: 5,
      name: 'Fred K. Schott',
      speaking: 'Skypack.dev, Snowpack.dev',
      eventDate: 'January 21, 2021',
      imageUrl: '/images/speakers/FredKSchott.jpg',
    },
    {
      id: 6,
      name: 'Amir Shevat',
      speaking: 'Reshuffle',
      eventDate: 'December 2, 2020',
      imageUrl: '/images/speakers/AmirShevat.jpg',
    },
    {
      id: 7,
      name: 'Simon Willison',
      speaking: 'Python, Django & Datasette',
      eventDate: 'November 12, 2020',
      imageUrl: '/images/speakers/SimonWillison.jpg',
    },
    {
      id: 8,
      name: 'Simon Peyton-Jones',
      speaking: 'Microsoft Research',
      eventDate: 'October 22, 2020',
      imageUrl: '/images/speakers/SimonPeytonJones.jpg',
    },
    {
      id: 9,
      name: 'John Hughes',
      speaking: 'Chalmers University and Quviq AB, Gothenburg',
      eventDate: 'October 8, 2020',
      imageUrl: '/images/speakers/JohnHughes.jpg',
    },
    {
      id: 10,
      name: 'Dr. Denae Ford Robinson',
      speaking: 'Microsoft Research',
      eventDate: 'August 19, 2020',
      imageUrl: '/images/speakers/DenaeFordRobinson.jpg',
    },
  ];
  return (
    <div className='mx-4 '>
      <div className='container mx-auto'>
        <div className='col-span-12 lg:col-span-10 lg:col-start-2 mb-8'>
          <h2 className='text-3xl font-extrabold text-black'>Speakers</h2>
          <p className='mt-3 text-2xl font-light max-w-[30em]'>
            Our team spans time zones, languages, and fields of expertise.
          </p>
        </div>

        <div className='col-span-12 lg:col-span-10 lg:col-start-2'>
          <div className='grid lg:grid-cols-3 gap-8'>
            {speakers.map((speaker) => {
              return (
                <a key={speaker.id} className='focus:outline-none group block'>
                  <div>
                    <div className='group-focus:ring aspect-video rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow mb-2 '>
                      <div className='relative h-full'>
                        <Image
                          src={speaker.imageUrl}
                          alt={speaker.name}
                          width={390}
                          height={220}
                          className='object-cover w-full object-center group-focus:ring-4 group-focus:ring-indigo-200 group-focus:ring-offset-4 h-full'
                        />
                      </div>
                    </div>

                    <h4 className='font-bold tracking-tight text-lg text-grey-900'>{speaker.name}</h4>
                    <p className='text-grey-600 -mt-1'>{speaker.speaking}</p>
                    <p className='text-sm text-grey-500 mt-2'>{speaker.eventDate}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
