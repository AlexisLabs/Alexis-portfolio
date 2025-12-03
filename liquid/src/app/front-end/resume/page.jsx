import Contact from '../../componets/tact';
import TopRightNavBar from '../../componets/nav.jsx';

export default function Page() {
    return (
        <>
            <TopRightNavBar />
            <main className="max-w-2xl mx-auto p-8">
                <div className="max-w-3xl mx-auto">
                    <div className="max-w-2xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
                        <Contact />
                    </div>
                </div>
            </main>
        </>
    );
}