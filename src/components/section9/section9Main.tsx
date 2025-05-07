export const Section9Main = () => {
    return (
        <main className="flex flex-col justify-center items-center gap-[32px] py-[48px] px-4 lg:p-[80px]">
            <div className="text-center flex flex-col gap-2">
                <h1 className="text-[32px] font-bold leading-tight lg:text-[52px] lg:font-extrabold">Ready for your next project?</h1>
                <p className="text-[18px] lg:text-[32px]">Sit elit feugiat turpis sed integer integer accumsan turpis.</p>
            </div>

            <form className="flex flex-col gap-4">
                <label htmlFor="email" className="text-[18px]">Email</label>
                <input type="email" name="" id="email" className="bg-white min-w-[361px] h-[50px] rounded-lg text-black px-5 lg:w-[550px]" placeholder="Enter your email" />

                <label htmlFor="msg" className="text-[18px]">Menssage</label>
                <textarea
                    id="msg"
                    className="bg-white min-w-[361px] h-[80px] rounded-lg text-black px-5 py-3 resize-none lg:w-[550px]"
                    placeholder="What are you say ?"
                />

            </form>

            <button className="bg-[#0F172A] text-[20px] font-medium w-[200px] h-[56px] rounded-lg lg:w-[260px] lg:[64px] lg:text-[24px] lg:font-bold">Request Demo</button>
        </main>
    );
}