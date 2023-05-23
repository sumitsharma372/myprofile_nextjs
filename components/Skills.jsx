import Image from 'next/image'
import {React, Django, Tailwind, Node, Mongodb, Python, Html, JavaScript, Next} from '@public/assets/icons'

const Skills = () => {
  return (
    <section className='my-10 text-gray-100 mx-auto'>
        <h2 className='text-center my-4 text-3xl md:text-5xl font-bold font-code text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-lime-500'>SKILLS</h2>
        <div className=' flex justify-center flex-wrap gap-2 mx-auto w-[80%] lg:w-full'>
            <div className='lan'>
                <Image 
                    src= {React}
                    width = {100}
                    className='lan_img'
                />
            </div>
            <div className='lan'>
                <Image 
                    src= {Node}
                    width = {100}
                    className='lan_img'
                />
            </div>
            <div className = 'lan'>
                <Image 
                    src= {Mongodb}
                    width = {100}
                    className='lan_img'
                />
            </div>
            <div className='lan'>
                <Image 
                    src= {Next}
                    width = {100}
                    className='lan_img'
                />
            </div>
            <div className = 'lan'>
                <Image 
                    src= {Html}
                    width = {100}
                    className='lan_img'
                />
            </div>
            <div className = 'lan'>
                <Image 
                    src= {Django}
                    width = {100}
                    className='lan_img'
                />
            </div>
            <div className = 'lan'>
                <Image 
                    src= {Python}
                    width = {100}
                    className='lan_img'
                />
            </div>
            <div className = 'lan'>
                <Image 
                    src= {JavaScript}
                    width = {100}
                    className='lan_img'
                />
            </div>
        </div>
    </section>
  )
}

export default Skills