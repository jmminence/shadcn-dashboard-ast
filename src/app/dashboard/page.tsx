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
      <div style={{ flex: 1, padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
        {/* Panel de Datos Generales y Gráficos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start', flex: 1 }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {/* Datos Generales */}
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

            {/* Gráficos */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <h3 style={{ margin: '0', color: '#fff' }}>Tiempo de alerta</h3>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'conic-gradient(#8e44ad 0% 72%, #f5f5dc 72% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <span style={{ color: '#000' }}>72%</span>
                  </div>
                  <div>PONTON</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'conic-gradient(#f39c12 0% 57%, #f5f5dc 57% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <span style={{ color: '#000' }}>57%</span>
                  </div>
                  <div>MODULO</div>
                </div>
              </div>
            </div>

            {/* Gráficos adicionales */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <h3 style={{ margin: '0', color: '#fff' }}>Sensor Presencia de Agua</h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { label: 'MODULO 100', value: '67%', color: '#1abc9c' },
                  { label: 'MODULO 200', value: '46%', color: '#9b59b6' },
                  { label: 'ATENCIÓN', value: '15%', color: '#f39c12' },
                  { label: 'CRITICO', value: '15%', color: '#e74c3c' },
                  { label: 'CRITICO', value: '15%', color: '#e74c3c' }
                ].map((item, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: `conic-gradient(${item.color} 0% ${item.value}, #d3d3d3 ${item.value} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      <span style={{ color: '#000' }}>{item.value}</span>
                    </div>
                    <div>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerta */}
            <div style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '15px', borderRadius: '8px', maxWidth: '250px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ fontSize: '24px' }}>🔔</div>
              <div>
                <div style={{ fontSize: '12px', color: '#bdc3c7' }}>hace 5 minutos</div>
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Sensor de Puerta 001 “Open”</div>
                <div style={{ fontSize: '12px' }}>SALMONES-AUSTRAL</div>
              </div>
            </div>
          </div>

          {/* Sensores */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginTop: '20px' }}>
              {['Puerta', 'Silos', 'Humo', 'Fuga de Agua', 'Combustible', 'Nivel Agua', 'Luz', 'Co2', 'Gps', 'Sonda CTD', 'Movimiento', 'Energía'].map((sensor, index) => (
                <div key={index} style={{ backgroundColor: '#444', color: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Sensor de {sensor}</div>
                  <div style={{ fontSize: '12px', color: '#ccc' }}>This week</div>
                  <div style={{ fontSize: '24px', margin: '10px 0' }}>1,368</div>
                  <div style={{ fontSize: '12px', color: '#76ff03' }}>0.43% ↑</div>
                  <div style={{ height: '4px', backgroundColor: '#555', borderRadius: '2px', overflow: 'hidden', marginTop: '10px' }}>
                    <div style={{ width: '50%', height: '100%', backgroundColor: '#76ff03' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel del Mapa */}
        <div style={{ width: '400px', height: '100%', backgroundColor: '#2c3e50', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src="/images/mapa_ejemplo.png" alt="Mapa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;