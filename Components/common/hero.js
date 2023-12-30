
export default function Hero() {
  return (
    <>
    <div className="place-content-evenly space-y-72">
        <div >

            <div className="flex justify-center">
            <img src="/images/herosection.png" className="h-80 w-80 mt-20"/>
            </div>

            <div className="space-y-3" >
                <h1 className="text-6xl flex justify-center">Newton School Coding Club</h1>
                <h2 className="text-3xl text-teal-400 flex justify-center">SRMIST</h2>
                <h2 className="text-xl text-teal-400 flex justify-center"> Coder's Vertex</h2>
            </div>
        </div>



        <div className="flex justify-center">
            <button className="border-2 rounded-full p-2.5 w-44 border-teal-500 text-xl">About Us</button>

        </div>



        <div className="flex justify-center">
        <div className="h-72 w-6/12 bg-stone-600 rounded-3xl mb-72" ></div>
        </div>


    </div>
    </>
    
  )
}
