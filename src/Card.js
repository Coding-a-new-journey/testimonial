import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
function Card(props){
     let review=props.review;
return(
    <div className='flex flex-col md:relative '>
        <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img className="aspect-square rounded-full  z-[25] w-[140px] h-[140px]" src={review.image} alt="Image"/>
        <div className='rounded-full w-[140px] h-[140px] bg-violet-500 absolute top-[-6px] z-[-10] left-[10px]'></div>
        </div>
        
        <div className='text-center mt-7'>
        <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft></FaQuoteLeft>
        </div>
        
        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
           <FaQuoteRight></FaQuoteRight>
        </div>

        

        
    </div>
)
}
export default Card;