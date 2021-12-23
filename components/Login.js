import Image from "next/image"
import { useMoralis } from 'react-moralis'
function Login() {
    const { authenticate } = useMoralis();
    return (
        <div className="bg-black relative">
            <h1>I am the Login Screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image
                    className="object-cover rounded-full "
                    src="https://user-images.githubusercontent.com/71604531/147207974-23a6a496-f486-4135-bf68-557375803cb6.jpg"
                    height={200}
                    width={200}
                />
                <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the METAVERSE</button>
            </div>
            <div className="w-full h-screen">
                <Image src="https://user-images.githubusercontent.com/71604531/147215823-2bc23472-7e81-47e2-a15b-341cc43bdcc6.jpg"

                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Login
