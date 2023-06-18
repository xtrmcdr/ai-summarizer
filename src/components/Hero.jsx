import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center flex-col'>
        <img src={logo} alt='ai_summarizer_logo' className='w-28 object-contain' />
      </nav>
    </header>

  )
}

export default Hero