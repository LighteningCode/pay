import { InlineIcon } from "@iconify/react";
import "./App.css";
import Navbar from "./components/Navbar";
import houseDoorFill from '@iconify-icons/bi/house-door-fill';
import envelopeOpen from '@iconify-icons/bi/envelope-open';
import chatText from '@iconify-icons/bi/chat-text';
import personIcon from '@iconify-icons/bi/person';
import gearIcon from '@iconify-icons/bi/gear';
import cloudUpload from '@iconify-icons/bi/cloud-upload';
import Dashboard from "./components/Dashboard";
import { useState } from "react";


function Nav({ className = "", style = {} }) {
  const sidenav = "mb-12 md:mb-0 self-center md:mr-5"
  return (
    <nav style={style} className={`${className} flex flex-col pt-14 text-2xl`}>
      <div className="w-full flex flex-row"><InlineIcon className={sidenav} icon={houseDoorFill} /> <span className="hidden self-center md:block">Home</span></div>
      <div className="w-full flex flex-row"><InlineIcon className={sidenav} icon={envelopeOpen} /> <span className="hidden self-center md:block">Inbox</span></div>
      <div className="w-full flex flex-row"><InlineIcon className={sidenav} icon={chatText} /> <span className="hidden self-center md:block">Messages</span></div>
      <div className="w-full flex flex-row"><InlineIcon className={sidenav} icon={personIcon} /> <span className="hidden self-center md:block">My account</span></div>
      <div className="w-full flex flex-row"><InlineIcon className={sidenav} icon={cloudUpload} /> <span className="hidden self-center md:block">Recieved</span></div>
      <div className="w-full flex flex-row"><InlineIcon className={sidenav} icon={gearIcon} /> <span className="hidden self-center md:block">Settings</span></div>
    </nav>
  )
}

function App() {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    console.log("modal toggled")
    setModal(!modal)
  }

  return (
    <main className="w-full h-full relative pl-0 md:px-3 pr-5 py-3">
      <Navbar openModal={toggleModal} className="shadow-2xl" />

      {modal &&
        <div>
          <Nav style={{ zIndex: "800" }} className=" bg-white h-screen fixed top-0 px-4 pb-96 justify-around w-64 left-0" />
          <div style={{ zIndex: "700" }} onClick={toggleModal} className="w-screen h-screen closemodal fixed top-0 left-0">&nbsp;</div>
        </div>
      }


      <section className="flex flex-row" style={{ height: "100%" }}>

        <Nav className="md:hidden w-1/12" />

        <div className="w-11/12 md:w-full bg-white rounded-3xl mt-8 md:px-5 pl-8 pr-5 py-8">
          <Dashboard />
        </div>

      </section>
    </main>
  );
}




export default App;
