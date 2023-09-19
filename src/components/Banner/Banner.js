import banner from '../../assets/images/banner.png'
import './Banner.css'


const Banner = () => {
    return(
        <div className='banner-container'>
            <img src={banner} alt="Banner" className='banner-img' />
        </div>
    )
}

export default Banner;