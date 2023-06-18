import Demo from '../components/Demo';
import Hero from '../components/Hero';
import './App.css';

const App = () => {
    return (
        <main>
            <div className='main text-3xl font-bold'>{/*AI Summarizer powered by ChatGPT. Created by Shafiq Ramli.*/}
                <div className='gradient'>
                </div>
            </div>
            
            <div className='app'>
                <Hero />
                <Demo />
            </div>
        </main>
        
    )
}

export default App