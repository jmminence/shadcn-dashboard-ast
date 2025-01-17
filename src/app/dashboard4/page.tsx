"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FaHome, FaUser, FaCog, FaFish, FaCloud, FaBroadcastTower, FaWifi, FaExclamation, FaServer } from 'react-icons/fa';
import { FaBots, FaShield } from 'react-icons/fa6';
import { FcLowBattery } from 'react-icons/fc';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dataPontones = {
  labels: ['centro 1', 'centro 2', 'centro 3', 'centro 4', 'centro 5', 'centro 6', 'centro 7', 'centro 8', 'centro 9', 'centro 10', 'centro 11', 'centro 12', 'centro 13', 'centro 14', 'centro 15', 'centro 16', 'centro 17', 'centro 18', 'centro 19', 'centro 20', 'centro 21', 'centro 22', 'centro 23', 'centro 24', 'centro 25'],
  datasets: [
    {
      label: 'Actividad Última Hora Pontones',
      data: [75, 50, 80, 60, 90, 70, 85, 55, 65, 95, 45, 85, 60, 70, 80, 90, 50, 75, 65, 85, 55, 95, 70, 60, 80],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
  ],
};

const dataModulos = {
  labels: ['centro 1', 'centro 2', 'centro 3', 'centro 4', 'centro 5', 'centro 6', 'centro 7', 'centro 8', 'centro 9', 'centro 10', 'centro 11', 'centro 12', 'centro 13', 'centro 14', 'centro 15', 'centro 16', 'centro 17', 'centro 18', 'centro 19', 'centro 20', 'centro 21', 'centro 22', 'centro 23', 'centro 24', 'centro 25'],
  datasets: [
    {
      label: 'Actividad Última Hora Módulos',
      data: [65, 55, 75, 85, 60, 70, 80, 90, 50, 75, 65, 85, 55, 95, 70, 60, 80, 75, 50, 80, 60, 90, 70, 85, 55],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

function DashboardPage3() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#1a1a1a' }}>
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
        {/* Panel de Datos Generales */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
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

          {/* Gráficos de Torta */}
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
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Sensor de Puerta 001 "Open"</div>
              <div style={{ fontSize: '12px' }}>SALMONES-AUSTRAL</div>
            </div>
          </div>
        </div>

        {/* Cámaras de Seguridad */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} style={{ backgroundColor: '#4b0082', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>Cámara {index + 1}</h3>
              <div style={{ width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4b0082', borderRadius: '8px' }}>
                <span style={{ fontSize: '50px', color: '#fff' }}>📹</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabla de Datos */}
        <div style={{ overflowX: 'auto', marginTop: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#333', color: '#fff', fontSize: '12px' }}>
            <thead>
              <tr>
                <th style={{ padding: '5px', borderBottom: '1px solid #555' }}>ID</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #555' }}>EMPRESA</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #555' }}>CENTRO</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #555' }}>FECHA</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #555' }}>TIPO ALERTA</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #555' }}>ESTADO</th>
                <th style={{ padding: '5px', borderBottom: '1px solid #555' }}>OBS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, empresa: 'GMT', centro: 'PIREN', fecha: '04/09/2023 14:30', alerta: 'SENSOR PUERTA001', estado: '✔️', obs: '🔍' },
                { id: 2, empresa: 'MOWI', centro: 'ISLA LOLA', fecha: '04/09/2023 14:30', alerta: 'SENSOR DE AGUA', estado: '✔️', obs: '🔍' },
                { id: 3, empresa: 'MOWI', centro: 'ISLA LOLA', fecha: '04/09/2023 14:30', alerta: 'SENSOR DE AGUA', estado: '✔️', obs: '🔍' },
                { id: 4, empresa: 'MOWI', centro: 'ISLA LOLA', fecha: '04/09/2023 14:30', alerta: 'SENSOR DE AGUA', estado: '✔️', obs: '🔍' },
                { id: 5, empresa: 'MOWI', centro: 'ISLA LOLA', fecha: '04/09/2023 14:30', alerta: 'SENSOR DE AGUA', estado: '✔️', obs: '🔍' },
                { id: 6, empresa: 'MOWI', centro: 'ISLA LOLA', fecha: '04/09/2023 14:30', alerta: 'SENSOR DE AGUA', estado: '✔️', obs: '🔍' },
                ].map((row, index) => (
                <tr key={index}>
                  <td style={{ padding: '5px', borderBottom: '1px solid #555', textAlign: 'center' }}>{row.id}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #555', textAlign: 'center' }}>{row.empresa}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #555', textAlign: 'center' }}>{row.centro}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #555', textAlign: 'center' }}>{row.fecha}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #555', textAlign: 'center' }}>{row.alerta}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #555', textAlign: 'center' }}>{row.estado}</td>
                  <td style={{ padding: '5px', borderBottom: '1px solid #555', textAlign: 'center' }}>{row.obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Panel de Silos */}
      <div style={{ width: '400px', height: '100%', backgroundColor: '#0000', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginLeft: '20px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: '-ms-inline-grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '70px' }}>
          {[
            { label: 'Silo 1 - A', color: 'green' },
            { label: 'Silo 2 - A', color: 'green' },
            { label: 'Silo 3 - A', color: 'yellow' },
            { label: 'Silo 4 - A', color: 'green' },
            { label: 'Silo 1 - B', color: 'green' },
            { label: 'Silo 2 - B', color: 'green' },
            { label: 'Silo 3 - B', color: 'red' },
            { label: 'Silo 4 - B', color: 'green' },
          ].map((silo, index) => (
            <div key={index} style={{ textAlign: 'center', color: '#fff' }}>
              <h4>{silo.label}</h4>
              <div style={{ width: '80px', height: '120px', backgroundColor: '#333', borderRadius: '5px', position: 'relative', margin: '0 auto' }}>
                <div style={{ width: '100%', height: '50%', backgroundColor: silo.color, position: 'absolute', bottom: 0, borderRadius: '0 0 5px 5px' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage3;