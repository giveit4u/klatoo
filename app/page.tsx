import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import IntroText from '../components/IntroText';
import Marketing from '../components/Marketing';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="w-full relative bg-kees-bg text-kees-dark font-sans selection:bg-kees-gold selection:text-white">
            <Navigation />
            <Hero />
            <IntroText />
            <Marketing />
            <Features />
            <Footer />
        </main>
    );
}
