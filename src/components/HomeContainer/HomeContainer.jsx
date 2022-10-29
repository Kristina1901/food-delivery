import Delivery from '../../img/delivery.png'
import Hero from '../../img/heroBg.png'
import {heropData} from '../../utils/data'
const HomeContainer = () => {
    return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full p-15" id='home'>
        <div className="py-2 flex-1 flex-col items-start md:items-start justify-center gap-6">
            <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full my-5'>
            <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
            <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
                <img src={Delivery} className="w-full odject-contain" alt='delivery'/>
            </div>
            </div>
            <p className='text-[2.5rem] font-bold tracking-wide text-headingColor md:text-[4.5rem] md:w-[80%]'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] md:text-[5rem]'>Your City</span></p>   
       <p className='text-base text-textColor text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam vero asperiores esse atque, 
        rerum cumque facere molestiae veritatis nostrum ullam rem vel quas sapiente eveniet? Quia, illum explicabo. 
        Corrupti?</p>
        <button type='button' className='bg-gradient-to-br from-orange-400 to orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto my-5'>
        Order Now</button>
        </div>
       <div className="py-2 flex-1 flex items-center relative">
      
            <img src={Hero} alt="hero-bg" className='ml-auto h-420 w-full lg:h-650 lg:w-auto'/>
            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap lg:px-32'>
                {heropData && heropData.map(n =>(
                    <div className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center' key={n.id}>
                    <img src={n.imageSrc} alt="I1" className='w-20 lg:w-40'/>
                    <p className='font-semibold text-textColor text-base lg:text-xl mt-2 lg:mt-4 '>{n.name}</p>
                    <p className='text-[12px] text-lighttextGray font-semibold lg:text-sm my-1 lg:my-3'>{n.decp}</p>
                    <p className='text-sm fonst-semibold text-headingColor'><span className='text-xs text-red-600'>$</span>{n.price}</p>
                </div> 
                ))}
              </div>
        
       </div>
    </section>
    )
}
export default HomeContainer