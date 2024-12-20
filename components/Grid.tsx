import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
return (
    <section id='about'>
        <div className="flex flex-col w-full lg:grid grid-cols-2 gap-5">
            <div className="rounded-3xl border border-white/[0.1] lg:w-[120%] p-7 mb-8" 
        style={{
            background: "rgb(4,7,29)",
            backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba    (12,14,35,1) 100%)",
        }}>
                <p className="">
                    I’m Kushagra, also known as Protonicgod, a passionate Discord Community Manager, Community Moderator with over 5 years of experience in building and moderating online spaces. I specialize in creating safe, engaging, and dynamic communities across Discord, Microsoft Teams, Reddit and other social platforms.
                </p><br />
                <p className="">
                    From working with <b>brands, content creators, and communities ranging from 50,000 to 1 million+ members,</b> I’ve mastered how to:
                </p><br />
                <ul className="list-disc pl-5">
                    <li className="">Design niche communities tailored to any audience.</li>
                    <li className="">Build frameworks for moderation, security, and engagement.</li>
                    <li className="">Train teams to handle high-traffic, 24/7 active spaces.</li>
                    <li className="">Foster positive connections between brands and their audiences.
                    </li>
                </ul>
            </div>
            <div className="rounded-3xl border border-white/[0.1] w-[50%] p-7 mb-8 lg:ms-56" 
        style={{
            background: "rgb(4,7,29)",
            backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba    (12,14,35,1) 100%)",
        }}>
                <video src='/vid.mp4' className='h-[50vh] w-[120%] rounded-lg' autoPlay loop controls controlsList="nodownload noremoteplayback" />
            </div>
        </div>
        <BentoGrid>
            {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className} 
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg} />
            ))}
        </BentoGrid>
    </section>
)
}

export default Grid