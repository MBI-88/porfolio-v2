import Image from 'next/image'
import style from './styles/Home.module.css'



export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className={style.containerBlock}>
        <section className={style.parallaxBg}>
          <div className=" text-center p-20">
            <h3 className='px-2 pt-5  md:px-32 md:pt-20  text-yellow-300'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Tempora veritatis minima est fugit facilis adipisci unde numquam commodi,
              voluptates sunt aperiam quis omnis pariatur perferendis amet animi, voluptatum ad delectus!
            </h3>
          </div>
        </section>
        
        
      </div>


    </main>
  )
}
