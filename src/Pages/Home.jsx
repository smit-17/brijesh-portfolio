import profile from '../assets/Images/jd_banner.jpeg'
import CardBlock from '../components/CardBlock';
import PersonProfileSection from './PersonProfileSection';
import SocialMediaSection from './SocialMediaSection';

const Home = () => {
    const scrollToCards = () => {
        const element = document.getElementById('card-blocks');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="app">
            <div className="relative">
                <img src={profile} alt="Banner" className='w-full h-[88vh] object-cover' />
                <div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
                    onClick={scrollToCards}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <PersonProfileSection />
            <div id="card-blocks">
                <CardBlock
                    eyebrow="TIME GENIUS"
                    heading="Take Back Your Time. Get Back Your Life."
                    description="Time Genius is a self-paced, on-demand coaching program you can start at any time! Our fail-proof and flexible science-backed system shows you step-by-step how to take back your time, multiply your profits, and own your freedom—guaranteed."
                    buttonText="More Details"
                    buttonLink="#"
                    mediaUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                    mediaType="video"
                    mediaPosition="left"
                    backgroundColor="#f5f5f0"
                />
                <CardBlock
                    eyebrow="TIME GENIUS"
                    heading="Take Back Your Time. Get Back Your Life."
                    description="Time Genius is a self-paced, on-demand coaching program you can start at any time! Our fail-proof and flexible science-backed system shows you step-by-step how to take back your time, multiply your profits, and own your freedom—guaranteed."
                    buttonText="More Details"
                    buttonLink="#"
                    mediaUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                    mediaType="video"
                    mediaPosition="right"
                    backgroundColor="#f5f5f0"
                />
            </div>
            <SocialMediaSection />
        </div>
    );
};

export default Home;