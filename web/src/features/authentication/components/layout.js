export default  function LayoutAuthentication(props) {
    const { title, subtitle, children, className } = props

    return (
        <main className="pt-10 w-full bg-amber-50 min-h-screen">
            <div className="mb-4 text-center">
                {/* <img src="" alt="kongkow logo" width={250} height={100} className="mx-auto border" /> */}
                <span className="font-jakarta font-semibold text-4xl">Kongkow Logo</span>
            </div>

            <div className="mx-auto py-6 bg-white w-full md:max-w-lg xl:max-w-md">
                <div>
                    <h1 className="text-3xl font-semibold text-center">
                        {title}
                    </h1>
                    <h2 className="text-center text-lg">
                        {subtitle}
                    </h2>
                </div>
                <div className={className}>
                    {children}
                </div>
            </div>
        </main>
    );
}