import React from 'react';
import { FaHome, FaUser, FaCog, FaFish, FaCloud, FaSatellite, FaBatteryFull, FaBatteryEmpty, FaPills, FaBatteryQuarter, FaBroadcastTower, FaWifi, FaPrescription, FaExclamation, FaServer,} from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import { FaBots, FaShield } from 'react-icons/fa6';
import { FcChargeBattery, FcLowBattery } from 'react-icons/fc';

function DashboardPage() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Menú lateral */}
      <div style={{ width: '60px', backgroundColor: '#333', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 0' }}>       
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
          <FaHome size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
          <FaFish size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
          <FaCloud size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
            <FaShield size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
            <FaBroadcastTower size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
            <FcLowBattery size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
            <FaUser size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
            <FaWifi size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
            <FaExclamation size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
            <FaBots size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
            <FaServer size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', color: 'inherit', marginBottom: '20px' }}>
            <FaCog size={20} />
        </button>
      </div>
      {/* Área principal del dashboard */}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Panel de Datos Generales */}
        <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '5px', maxWidth: '300px' }}>
          <h2 style={{ margin: '0 0 10px 0' }}>DATOS GENERALES</h2>
          <h3 style={{ margin: '0 0 10px 0' }}>EMPRESA</h3>
          <div style={{ backgroundColor: '#e74c3c', color: '#fff', padding: '5px', borderRadius: '5px', textAlign: 'center', marginBottom: '10px' }}>
            Granja Marina Tornagaleones
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '5px' }}>📍</span>
            <span>X Los Lagos - Puerto Montt</span>
          </div>
        </div>
        {/* Aquí puedes implementar otros componentes para el dashboard */}
      </div>
    </div>
  );
}

export default DashboardPage;