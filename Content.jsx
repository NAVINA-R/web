import React from "react";
import "./Content.css";
import cr from "./cr.jpeg";
import addfeat from "./addfeat.png";
import roomocc from "./roomocc.png"
import mcx from "./mcx.png"
import rs from "./rs.png"
function Content() {
  return (
    <main className="content">
      <h1>FEATURES</h1>
      <section className="content-section">
      <img src={cr} alt="Left Image" className="side-image1" />
        <div className="classroom-box">
          <h2>CLASSROOMS</h2>
          <ul>
            🔹 Camera-Based Occupancy Detection<br/>
            🔹 Temperature-Based Fan Speed Regulation<br/>
            🔹 Ambient Light-Based Light Intensity Control<br/>
            🔹 PIR-Based Motion Detection<br/>
          </ul>
        </div>
      </section>
      
      <section className="content-section">
        <p className="content-text"> <h2 >HOSTELS</h2>🔹RFID based hostel door and supply control system <br/>
            🔹Real-Time Database: RFID scans update a central database to track room occupancy and energy usage.<br/>
            🔹Time-Based Auto Shutdown based on room occupancy and motion detection.<br/>
            🔹Admin Override: Hostel authorities can remotely override the system to manually switch power ON/OFF.<br/> </p>
        <div className="hostel-box">
        
          
            
          
        </div>
        <div><img src={roomocc} alt="Second Image" className="content-image right" />
        </div>
      </section>
      
        

      <section className="content-section">
        <img src={mcx} alt="Third Image" className="content-image left" />
        <p className="content-text">🔹 Automatic Shutdown: Turns off idle lab equipment, PCs, and machines based on schedules and occupancy.<br/>
🔹 IoT-Based Control: Enables remote monitoring, scheduling, and energy tracking for optimized usage.<br/>
🔹 Lab Benefits: Smart power control for computers, lab instruments, CNC machines, and ventilation.<br/>
🔹 Mess & Xerox Shops: Timed power supply for appliances cuts energy waste, saving 30-40% on electricity bills.<br/></p>
      </section>

      <section className="content-section">
        <p className="content-text">A hybrid system using solar panels as the main source, with piezoelectric floors and wind turbines as supplementary sources, can help a college campus achieve 50-80% renewable energy dependency. The return on investment (ROI) is around 5-7 years for solar and longer for piezoelectric/wind.</p>
        <img src={rs} alt="Fourth Image" className="content-image right" />
      </section>
    </main>
    
  );
}

export default Content;
