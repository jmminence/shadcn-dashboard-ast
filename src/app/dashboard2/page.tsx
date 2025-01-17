import React from 'react';
import { FaHome, FaUser, FaCog, FaFish, FaCloud, FaBroadcastTower, FaWifi, FaExclamation, FaServer } from 'react-icons/fa';
import { FaBots, FaShield } from 'react-icons/fa6';
import { FcLowBattery } from 'react-icons/fc';

interface PuertaProps {
  numero: string;
  estado: 'abierta' | 'cerrada';
}

function Puerta({ numero, estado }: PuertaProps) {
  const color = estado === 'abierta' ? '#e74c3c' : '#2ecc71'; // Rojo para abierta, verde para cerrada
  return (
    <div style={{ backgroundColor: color, borderRadius: '8px', padding: '20px', textAlign: 'center', color: '#fff' }}>
      <div style={{ fontSize: '24px' }}>🚪</div>
      <div>PUERTA {numero}</div>
    </div>
  );
}

function Dashboard2() {
  const puertas = [
    { numero: '001', estado: 'cerrada' },
    { numero: '002', estado: 'cerrada' },
    { numero: '003', estado: 'cerrada' },
    { numero: '004', estado: 'abierta' },
    { numero: '005', estado: 'cerrada' },
    { numero: '006', estado: 'abierta' },
    { numero: '007', estado: 'abierta' },
    { numero: '008', estado: 'abierta' },
    { numero: '009', estado: 'cerrada' },
    { numero: '010', estado: 'cerrada' },
    { numero: '011', estado: 'cerrada' },
    { numero: '012', estado: 'cerrada' },
  ];

  const datosTabla = [
    { id: 1, empresa: 'GMT', centro: 'PIREN', fecha: '04/09/2023 14:30', tipoAlerta: 'SENSOR PUERTA 001', obs: '🔍' },
    { id: 2, empresa: 'MOWI', centro: 'ISLA LOLA', fecha: '04/09/2023 14:30', tipoAlerta: 'SENSOR PUERTA 012', obs: '🔍' },
    { id: 3, empresa: 'SALMONES AUSTRAL', centro: 'CONTAO', fecha: '04/09/2023 14:50', tipoAlerta: 'SENSOR PUERTA 002', obs: '🔍' },
    { id: 4, empresa: 'SALMONES AUSTRAL', centro: 'ROLLIZO FENIX', fecha: '04/09/2023 21:59', tipoAlerta: 'SENSOR PUERTA 002', obs: '🔍' },
    { id: 5, empresa: 'SALMONES AUSTRAL', centro: 'POCOIHUEN', fecha: '05/09/2023 08:00', tipoAlerta: 'SENSOR PUERTA 007', obs: '🔍' },
    { id: 6, empresa: 'SALMONES AUSTRAL', centro: 'PIRQUEN', fecha: '05/09/2023 09:26', tipoAlerta: 'SENSOR PUERTA 004', obs: '🔍' },
    { id: 7, empresa: 'MOWI', centro: 'BETECOI', fecha: '05/09/2023 10:36', tipoAlerta: 'SENSOR PUERTA 004', obs: '🔍' },
    { id: 8, empresa: 'AQUA CHILE', centro: 'HULEMO', fecha: '05/09/2023 18:18', tipoAlerta: 'SENSOR PUERTA 006', obs: '🔍' },
    { id: 9, empresa: 'MOWI', centro: 'ITALCO 6-2', fecha: '06/09/2023 09:26', tipoAlerta: 'SENSOR PUERTA 007', obs: '🔍' },
    { id: 10, empresa: 'AST', centro: 'ESTACIONAMIENTO', fecha: '06/09/2023 14:56', tipoAlerta: 'SENSOR PUERTA 004', obs: '🔍' },
  ];

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
      <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Panel de Datos Generales y Gráficos */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
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

        {/* Puertas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
          {puertas.map((puerta, index) => (
            <Puerta key={index} numero={puerta.numero} estado={puerta.estado} />
          ))}
        </div>

        {/* Tabla */}
        <div style={{ overflowX: 'auto', width: '100%' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#333', color: '#fff', fontSize: '12px' }}>
            <thead>
              <tr>
                <th style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>ID</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>EMPRESA</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>CENTRO</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>FECHA</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>TIPO ALERTA</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>OBS</th>
              </tr>
            </thead>
            <tbody>
              {datosTabla.map((dato) => (
                <tr key={dato.id}>
                  <td style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>{dato.id}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>{dato.empresa}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>{dato.centro}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>{dato.fecha}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>{dato.tipoAlerta}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #444', textAlign: 'center' }}>{dato.obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard2;