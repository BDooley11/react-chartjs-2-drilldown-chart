import React, { useState } from 'react';
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const BarChart = (props) => {
    console.log(props.make)
    const [labels, setlabels] = useState(Object.keys(props.make));
    const [dataset, setdataset] = useState(Object.values(props.make));
    const [labelHeading, setlabelHeading] = useState('Make Sales');
    const data = {
        labels: labels,
        datasets: [
            {
                label: labelHeading,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                borderCapStyle: 'round',
                data: dataset
            }
        ]
    };

    return (
        <div>
            <Bar
                data={data}
                width={150}
                height={50}
                options={{
                    maintainAspectRatio: true,
                    onClick: (event, elements) => {
                        if (labelHeading === 'Make Sales'){
                            if (!(elements[0] === undefined)){
                                let barIndex = elements[0].index
                                let make = Object.keys(props.make)[barIndex]
                                setlabels(Object.keys(props.model[make]))
                                setdataset(Object.values(props.model[make]))
                                setlabelHeading('Model Sales')
                            }
                        }
                    },
                }}
            />
        </div>
    );
};

/* create button to go back a step which resets lables, heading and dataset on click */

export default BarChart;