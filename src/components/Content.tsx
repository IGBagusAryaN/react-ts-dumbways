import { useEffect, useState } from "react"

function Content () {
    const [welcome, setWelcome] = useState<string>('Hi there')
    const [title, setTitle] = useState<string>('Front-End')

    function changeTitle (){
        setTitle((prevText) => (prevText === "Front-End" ? "Full-Stack" : "Front-End"));
      }

    useEffect(()=>{
        const messages = ["Hi there","Welcome to my portfolio", "Enjoy your visit" ]
        let index = 0

        const interval = setInterval(() => {
            index = (index + 1) % messages.length;

            setWelcome(messages[index])
        }, 2000);

        return () => clearInterval(interval)
    }, [welcome])

    return (
        <div className="mt-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="mt-4">
                    <div className="text-start">
                        <div className="flex flex-col items-start space-y-[-20px]">
                        <button onClick={changeTitle} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>

                            <h1 className="font-bold text-[64px] uppercase">{title}</h1>
                            <span className="font-bold text-[44px]">DEVELOPER 👋</span>
                        </div>
                        <p className="text-[12px]">“{welcome}, My name is Arya, and I'm a frontend developer. I specialize in creating beautiful and responsive user interfaces”. </p>

                        <div className="flex gap-2 mt-3">
                            <img src="../../src/assets/svg/tailwind.svg" alt="" width="40"/>
                            <img src="../../src/assets/svg/react.svg" alt="" width="40"/>
                            <img src="../../src/assets/svg/flowbite.svg" alt="" width="40" />
                            <img src="../../src/assets/svg/postgre.svg" alt="" width="40" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img className="rounded-md" src="../../src/assets/png/profile.png" alt="" width="700"/>
                </div>
            </div>
        </div>
    )
}

export default Content