import React from 'react';
import { useEffect, useState } from "react";

import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

export const options = {
   responsive: true,
   plugins: {
       legend: {
           position: 'top',
       }
   },
};

export function LineChart() {

   const [chartData, chartDataSet] = useState(null);

   useEffect( () => {
       const fetchAir = async () => {
           let data = {
               labels: [],
               datasets: [
                   {
                    label: 'Temp',
                       data: [],
                       borderColor: 'rgb(255, 99, 132)',
                       backgroundColor: 'rgba(255, 99, 132, 0.5)',
                   },
                   {
                    label: 'Press',
                    data: [],
                    borderColor: 'rgb(95,220,61)',
                    backgroundColor: 'rgba(95,220,61, 0.5)',
                    },
                   {
                       label: 'Hum',
                       data: [],
                       borderColor: 'rgb(31,52,217)',
                       backgroundColor: 'rgba(31,52,217, 0.5)',
                   }
                   
               ],
           };

           const res = await fetch("http://localhost:3001/api/paramsAW")
           const dataRes = await res.json();

           data.datasets[0].data = dataRes.map(item => {
               return item.temp;
           })

           data.datasets[1].data = dataRes.map(item => {
               return item.humidity;
           })

           data.datasets[2].data = dataRes.map(item => {
               return item.pressure;
           })

           data.labels = dataRes.map (item => {
               return item.date;
           })
           chartDataSet(data);
       }
       fetchAir()
   }, []);

   if (!chartData) {
       return null;
   }

   return <Line options={options} data={chartData}/>;
}

