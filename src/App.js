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


function App() {

  const sidenav = "mb-6 self-center"

  return (
    <main className="w-full h-full pl-0 pr-5 py-3">
      <Navbar />

      <section className="flex flex-row" style={{height:"90vh"}}>

        <nav className="w-1/12 flex flex-col pt-14">
          <InlineIcon className={sidenav} icon={houseDoorFill} />
          <InlineIcon className={sidenav} icon={envelopeOpen} />
          <InlineIcon className={sidenav} icon={chatText} />
          <InlineIcon className={sidenav} icon={personIcon} />
          <InlineIcon className={sidenav} icon={cloudUpload} />
          <InlineIcon className={sidenav} icon={gearIcon} />
        </nav>

        <div className="w-11/12 bg-white rounded-3xl mt-8 pl-8 pr-5 py-8">
          <Dashboard />
        </div>

      </section>
    </main>
  );
}




export default App;
