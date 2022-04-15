import { InlineIcon } from "@iconify/react";
import "./App.css";
import Navbar from "./components/Navbar";
import houseDoorFill from '@iconify-icons/bi/house-door-fill';
import houseDoor from '@iconify-icons/bi/house-door';
import envelopeOpen from '@iconify-icons/bi/envelope-open';
import envelopeOpenFill from '@iconify-icons/bi/envelope-open-fill';
import chatText from '@iconify-icons/bi/chat-text';
import chatTextFill from '@iconify-icons/bi/chat-text-fill';
import personIcon from '@iconify-icons/bi/person';
import personIconFill from '@iconify-icons/bi/person-fill';
import gearIcon from '@iconify-icons/bi/gear';
import gearIconFill from '@iconify-icons/bi/gear-fill';
import cloudUpload from '@iconify-icons/bi/cloud-upload';
import cloudUploadFill from '@iconify-icons/bi/cloud-upload-fill';
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import { createStore } from 'redux'

function navigationReducer(state = { currentItem: "home" }, action) {
  switch (action.type) {
    case 'nav/change':
      return { currentItem: action.location }
    default:
      return state
  }
}

let store = createStore(navigationReducer)

function SidebarItem({ iconFill, iconOutline, label }) {
  // this is totally unnessary but ill do it anyway, just testing out redux 
  // testing performance, hehe
  const [active, setActive] = useState(false);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setActive(label.toLowerCase().replace(" ", "_") === store.getState().currentItem)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const sidenav = `mb-12 md:mb-0 self-center md:mr-5 hover:text-black ${active ? "text-black" : "text-gray-600"}  transition-colors duration-200`
  return (
    <div onClick={() => store.dispatch({ type: "nav/change", location: label.toLowerCase().replace(" ", "_") })} className="w-full flex flex-row md:justify-start justify-center"><InlineIcon className={sidenav} icon={active ? iconFill : iconOutline} /> <span className="hidden self-center md:block">{label}</span></div>
  )
}


function Nav({ className = "", style = {} }) {
  return (
    <nav style={style} className={`${className} flex flex-col pt-14 text-2xl`}>
      <div className="w-full md:flex flex-row hidden"> <span className="hidden self-center md:block font-semibold durat">Main Menu</span></div>
      <SidebarItem iconFill={houseDoorFill} iconOutline={houseDoor} label={"Home"} />
      <SidebarItem iconFill={envelopeOpenFill} iconOutline={envelopeOpen} label={"Inbox"} />
      <SidebarItem iconFill={chatTextFill} iconOutline={chatText} label={"Messages"} />
      <SidebarItem iconFill={personIconFill} iconOutline={personIcon} label={"My account"} />
      <SidebarItem iconFill={cloudUploadFill} iconOutline={cloudUpload} label={"Recieved"} />
      <SidebarItem iconFill={gearIconFill} iconOutline={gearIcon} label={"Settings"} />
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
