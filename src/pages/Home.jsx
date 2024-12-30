import React from 'react'
// Images
import image1 from '../assets/images/book1.webp'
import image2 from '../assets/images/book2.webp'
import image3 from '../assets/images/book3.webp'
import image4 from '../assets/images/book4.webp'
import image5 from '../assets/images/book5.webp'
import image6 from '../assets/images/book6.webp'
const BookData = [
    {
        image: image1,
        title: "WALK INTO THE SHADOWS"
    },
    {
        image: image2,
        title: "HARRY POTTER AND THE CHAMBER OF SECRETS"
    },
    {
        image: image3,
        title: "ALONE"
    },
    {
        image: image4,
        title: "SOUL"
    },
    {
        image: image5,
        title: "IT"
    },
    {
        image: image6,
        title: "THE STAND"
    },
    
    
]

function Home() {
    return (
        <section className='containers py-[50px]'>
            <h1 className='font-bold text-[20px]'>
                Suggested Books
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[20px] gap-6 '>
                {BookData.map((item, index) => (
                    <div key={index} className='rounded-lg shadow-2xl p-4 '>
                        <img
                            src={item?.image}
                            alt="Suggested Book"
                            className="w-full h-[600px] object-cover rounded-lg static top-3"
                        />
                        <p className='p-2 font-bold pt-5'>{item?.title}</p>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default Home