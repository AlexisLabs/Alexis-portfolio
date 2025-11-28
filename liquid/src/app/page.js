import TopRightNavBar from './componets/nav';
import IntroductionArea from './componets/header';

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      <TopRightNavBar />
      <div className="grid items-center justify-items-center min-h-screen pt-16"> {/* pt-16 to account for fixed navbar */}
        <IntroductionArea />
      </div>
    </div>
  );
}
