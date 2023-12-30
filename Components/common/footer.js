

export default function Footer() {
  return (

    <>
    <div className="w-full h-64 rounded-t-3xl bg-slate-700 flex my-4 place-content-evenly">
        <div className="ml-4">
        <h1 className="text-teal-400 text-3xl mt-4">Contact:</h1>
        <img src="/images/callicon.png" className="h-6 w-6 mt-6"/>
        <p className="m-1">+91 9458896788</p>
        <p className="m-1">+91 9458896088 </p>
        <img src="/images/Mail_icon.png" className="h-6 w-6 mt-6"/>
        <p>nscc.com</p>
        </div>



        <div className="space-y-6">
        <h1 className="text-teal-400 text-3xl mt-4">Follow us on:</h1>

        <div className="flex space-x-11">
        <img src="/images/instagram.png" className="h-6 w-6"/>
        <img src="/images/linkden.png" className="h-6 w-6"/>
        <img src="/images/twitter.png" className="h-6 w-6"/>
        </div>



        

        <div className="flex border-2 rounded-3xl w-44 border-teal-400"> 
            <img src="/images/icon.png" className="h-14 w-14"/>
            <p className="text-teal-400"> Developed by: NSCC SRM</p>
        </div>
        

        

        </div>






        <div>
        <h1 className="text-teal-400 text-3xl mt-4">Navigate:</h1>
        <p>About Us</p>
        <p>Events</p>
        <p>Gallery</p>
        <p>Contact us</p>
            
        </div>
    </div>
    </>
  )
}
