export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <main className="max-w-5xl mx-auto px-4 py-12">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-indigo-500">
                        Mainao Baro
                    </h1>
                    <p className="text-lg text-gray-600">
                        I am a Frontend Developer
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-blue-300 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2 text-indigo-500">
                            Work Experience
                        </h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>CGI Information Systems (2023–Present)</li>
                            <li>EPAM Systems(2021-2023)</li>
                        </ul>
                    </div>

                    <div className="border border-blue-300 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2 text-indigo-500">
                            Projects
                        </h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Test</li>
                            <li>Test </li>
                        </ul>
                    </div>

                    <div className="border border-blue-300 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2 text-indigo-500">
                            Resume
                        </h2>
                        <p className="text-gray-700">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="underline text-blue-600"
                            >
                                View My Resume
                            </a>
                        </p>
                    </div>

                    <div className="border border-blue-300 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2 text-indigo-500">
                            Contact
                        </h2>
                        <p className="text-gray-700">mainao1230@gmail.com</p>
                    </div>
                </section>

                <footer className="mt-16 text-center text-gray-400">
                    <p>Thank you for visiting!</p>
                </footer>
            </main>
        </div>
    );
}
