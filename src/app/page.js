import Image from 'next/image'
import Banner from '../app/images/CWCTemplateBanner_0.jpg'
import Social from '../app/images/img.png'

export default function Home() {
  return (
    <div>
      <header className='flex h-16' >
        <a className='text-white pl-10 text-2xl mt-auto mb-auto'>
          University of Massachusetts Amherst Clone
        </a>
      </header>
      <div className=' flex '>
        <p className='pl-20 text-3xl text-center mt-10 mb-10'>
           Center for Women and Community Clone
        </p>
      </div>
      <nav className='flex justify-center bg-gray-100 h-10'>
        <ul class="flex mx-auto w-4/5 justify-evenly">
          <li>
            <a class="hover:text-umass text-lg h-full hover:bg-white flex items-center flex-" href="#"> Home </a>
          </li>
          <li>
            <a class="hover:text-umass text-lg h-full hover:bg-white flex items-center" href="#"> Get Help </a>
          </li>
          <li>
            <a class="hover:text-umass text-lg h-full hover:bg-white flex items-center" href="#"> Join Staff</a>
          </li>
          <li>
          <a class="hover:text-umass text-lg h-full hover:bg-white flex items-center" href="#">WOCLN</a>
          </li>
          <li>
          <a class="hover:text-umass text-lg h-full hover:bg-white flex items-center" href="#">Workshops</a>
          </li>
          <li>
          <a class="hover:text-umass text-lg h-full hover:bg-white flex items-center" href="#">About</a>
          </li>
          <li>
          <a class="hover:text-umass text-lg h-full hover:bg-white flex items-center" href="#">Our Story</a>
          </li>
          <li class=" hover:bg-white">
          <a class="hover:text-umass text-lg h-full hover:bg-white flex items-center" href="#">YIS</a>
          </li>
        </ul>
      </nav>

      <div className='bg-gray-100 flex justify-center'>
        <div className='w-4/5 bg-white px-2'>
          <Image src={Banner}className='mx-auto' ></Image>
          <div>
            <div className='flex h-20 mb-10'>
              <div className='flex items-center justify-center flex-1'> 
                <button className='bg-pink-950 text-white w-2/3 h-2/3 rounded-full text-2xl'>
                   Click
                </button>
              </div>
              <div className=' flex items-center justify-center flex-1'>
              <button className='bg-pink-950 text-white w-100 w-2/3 h-2/3 rounded-full text-2xl'>
                   Here
                </button>
              </div>
            </div>
            <div className='grid grid-cols-2 '>
                <div className='flex content-start  flex-col'>
                <p className='text-center px-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>

                <a className='text-center text-umass font-bold mt-5 px-4 hover:underline'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <p className='flex justify-evenly'>
                  <a className=' text-umass font-light hover:underline'>
                    (123) 456-7890
                  </a>
                  <p> Lorem ipsum dolor sit amet, </p>
                </p>
                <div>
                  <Image src={Banner} className='w-fit p-4 h-52'></Image>
                </div>
                <a className='text-center text-umass font-bold mt-5 px-4 hover:underline mb-5'>
                Lorem ipsum dolor sit amet: (123) 456-7890
                  </a>
                  <p className='text-center text-umass font-extrabold text-xl mt-5 px-4 mb-5'>
                Lorem ipsum dolor & sit amet
                  </p>
                  <Image src={Social} className='w-3/5 mx-auto'>

                  </Image>
                </div>

                <div className='flex justify-center flex-col'>
                  
                    <iframe height="315" src="https://www.youtube.com/embed/xvFZjo5PgG0?si=n3gVNhk4jMx86oUU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <div>
                    <ul className='flex flex-col mt-8 ml-4'>
                      <li className='list-disc mb-2 text-umass font-normal text-xl hover:underline'>
                       Lorem ipsum dolor sit amet,
                      </li>
                      <li className='list-disc mb-2 text-umass font-normal text-xl hover:underline'>
                       Lorem ipsum dolor sit amet,
                      </li>
                      <li className='list-disc mb-2 text-umass font-normal text-xl hover:underline'>
                       Lorem ipsum dolor sit amet,
                      </li>
                      <li className='list-disc mb-2 list-sty text-umass font-normal text-xl hover:underline'>
                       Lorem ipsum dolor sit amet,
                      </li>
                    </ul>
                  </div>
          
                </div>

                
              </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
