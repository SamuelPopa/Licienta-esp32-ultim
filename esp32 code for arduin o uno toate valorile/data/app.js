
drawPhaseDiagram(120.938, 240.434, 119.496);

document.addEventListener('DOMContentLoaded', function () {

     // Initialize the gauge
  /*  var voltageGauge = new JustGage({
        id: "voltageGauge",
        value: 0,
        min: 0,
        max: 300, // Set the maximum value to fit your expected data range
        title: "Voltage Line 1",
        label: "V",
        decimals: 3,
        pointer: true,
        gaugeWidthScale: 0.6,
        counter: true,
        relativeGaugeSize: true,
        donut: false // Set to true if you want a donut (ring) style gauge*
}); */

    
 const gaugeOptionsfr = {
        chart: { type: 'gauge', plotBackgroundColor: null, plotBackgroundImage: null, plotBorderWidth: 0, plotShadow: false },
        title: { text: 'Frecventa' },
        pane: {
            startAngle: -90, // Starting from the left (90 degrees from the top)
            endAngle: 90, // Ending on the right (90 degrees from the top), making a half-circle
            background: [{
                // Background of the gauge itself
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '09%'
            }]
        },
        // The value axis
        yAxis: {
            min: 0,
            max: 70, // Set this to the maximum frequency you expect
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 13,
            tickColor: '#666',

            labels: {
                step: 2,
                rotation: 'horizontal'
            },
            title: {
                text: 'Hz'
            },
            plotBands: [{ // Only green and yellow bands, remove the red one
                from: 0,
                to: 70,
                color: '#55BF3B' // Green
            },
            ]
        },

        series: [{
            name: 'Frecventa',
            data: [0], // Initial value
            tooltip: {
                valueSuffix: ' Hz'
            }
        }]
    };
 
// Frequency gauge
const chartFrequency = Highcharts.chart('container-frequency', Highcharts.merge(gaugeOptionsfr, {
    
    
    yAxis: {
        min: 0,
        max: 60, // Frequency range
        title: { text: 'FRECVENTA', y:95 } // add text here, it's useful when you make a general page background here the text will overlap the backgroung making it look nice
    },
    series: [{
        name: 'Frecventa',
        data: [0], // Initial value
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:17px">{y}</span><br/><span style="font-size:12px;opacity:0.4">Hz</span></div>'
        },
        tooltip: { valueSuffix: ' Hz' }
    }],
    credits: {
        enabled: false
    }
}));


    
    
    
    
   const gaugeOptions = {
    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};


       // Voltage gauge
    const voltageGauge = Highcharts.chart('container-voltage', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 300, // Adjust if your voltage can go above 300V
            title: {
                text: 'Voltaj'
            },
            labels: {
                format: '{value} V'
            }
        },
        series: [{
            name: 'Voltaj',
            data: [0], // Initial value
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:15px">{y}</span><br/>' +
                        '<span style="font-size:6px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' V'
            }
        }],
        credits: {
        enabled: false
    }
        
    }));


    const voltageGauge2 = Highcharts.chart('container2-voltage2', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 300, // Adjust if your voltage can go above 300V
            title: {
                text: 'Voltaj2'
            },
            labels: {
                format: '{value} V'
            }
        },
        series: [{
            name: 'Voltaj2',
            data: [0], // Initial value
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:15px">{y}</span><br/>' +
                        '<span style="font-size:6px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' V'
            }
        }],
        credits: {
        enabled: false
    }
    }));


    const voltageGauge3 = Highcharts.chart('container3-voltage3', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 300, // Adjust if your voltage can go above 300V
            title: {
                text: 'Voltaj3'
            },
            labels: {
                format: '{value} V'
            }
        },
        series: [{
            name: 'Voltaj3',
            data: [0], // Initial value
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:15px">{y}</span><br/>' +
                        '<span style="font-size:6px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' V'
            }
        }],
        credits: {
        enabled: false
    }
    }));
 

     // Current gauge
    const currentGauge = Highcharts.chart('container-current', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 300, // Adjust if your voltage can go above 300V
            title: {
                text: 'Curent'
            },
            labels: {
                format: '{value} A'
            }
        },
        series: [{
            name: 'Curent',
            data: [0], // Initial value
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:25px">{y}</span><br/>' +
                        '<span style="font-size:12px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' A'
            }
        }],
        credits: {
        enabled: false
    }
    }));

    const currentGauge2 = Highcharts.chart('container2-current2', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 300, // Adjust if your voltage can go above 300V
            title: {
                text: 'Curent2'
            },
            labels: {
                format: '{value} A'
            }
        },
        series: [{
            name: 'Curent2',
            data: [0], // Initial value
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:25px">{y}</span><br/>' +
                        '<span style="font-size:12px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' A'
            }
        }],
        credits: {
        enabled: false
    }
    }));

    const currentGauge3 = Highcharts.chart('container3-current3', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 300, // Adjust if your voltage can go above 300V
            title: {
                text: 'Curent3'
            },
            labels: {
                format: '{value} A'
            }
        },
        series: [{
            name: 'Curent3',
            data: [0], // Initial value
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:25px">{y}</span><br/>' +
                        '<span style="font-size:12px;opacity:0.4">V</span></div>'
            },
            tooltip: {
                valueSuffix: ' A'
            }
        }],
        credits: {
        enabled: false
    }
    }));

        var powerChart = Highcharts.chart('container-Pf', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Puterea1'
        },
        xAxis: {
            categories: ['P1WATT']
        },
        yAxis: {
            title: {
                text: 'Puterea (W)'
            },
            min: 0,
            max: 100 // Ensure this is adequate for the expected power values
        },
        series: [{
            name: 'Power',
            data: [0] // Initial value
            }],
        credits: {
        enabled: false
    }
    });

     var powerChart2 = Highcharts.chart('container2-Pf2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Puterea2'
        },
        xAxis: {
            categories: ['P2WATT']
        },
        yAxis: {
            title: {
                text: 'Puterea (W)'
            },
            min: 0,
            max: 100 // Ensure this is adequate for the expected power values
        },
        series: [{
            name: 'Power',
            data: [0] // Initial value
         }],
        credits: {
        enabled: false
    }
     });
    
       var powerChart3 = Highcharts.chart('container3-Pf3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Puterea3'
        },
        xAxis: {
            categories: ['P3WATT']
        },
        yAxis: {
            title: {
                text: 'Puterea (W)'
            },
            min: 0,
            max: 100 // Ensure this is adequate for the expected power values
        },
        series: [{
            name: 'Power',
            data: [0] // Initial value
           }],
        credits: {
        enabled: false
    }
    });

 /* var chart = Highcharts.chart('container', {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '#ffffff',
        },
        title: {
            text: '3-Phase Unghi Gaugeeee'
        },
        pane: {
            //startAngle: 0,
            //endAngle: 360,
        startAngle: 90,
        endAngle: 90+360,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
            borderWidth: 0,
            outerRadius: '105%'
        }]
        },
      yAxis: {
      reversed: true,
        min: 0,
        max: 360,
        tickInterval: 30,
        labels: {
            distance: 12,
            rotation: 'auto',
            format: '{value}°'
        }
        },
      series: [{
        id: 'phaseAB',
        name: 'Phase A-BBBB',
        data: [{
            y: 120,
            dial: {
                radius: '100%',
                baseWidth: 5,
                baseLength: '50%', // stop at middle point
                rearLength: '0%',
                backgroundColor: 'red', // Red colored needle for A-B
                borderColor: 'red'
            }
        }],
        color: 'red'
    }, {
        data: [{
            id: 'phaseAC',
        name: 'Phase A-CCCCCC',
            y: 240,
            dial: {
                radius: '100%',
                baseWidth: 5,
                baseLength: '50%', // stop at middle point
                rearLength: '0%',
                backgroundColor: 'blue', // Red colored needle for A-B
                borderColor: 'blue'
            }
        }],
        color: 'blue'
    }, {
        data: [{
          id: 'phaseBC',
          name: 'Phase B-CCCCC',
            y: 0,
            dial: {
                radius: '100%',
                baseWidth: 5,
                baseLength: '50%', // stop at middle point
                rearLength: '0%',
                backgroundColor: 'green', // Red colored needle for A-B
                borderColor: 'green'
            }
        }],
        color: 'green'
    }]
});*/

  

var ws = new WebSocket('ws://' + window.location.hostname + '/ws');

  ws.onmessage = function (event) {
      var data = JSON.parse(event.data);
        //var angleAB = data.uUab;
        //var angleAC = data.uUac;
        //var angleBC = data.uUbc;

    document.getElementById('ID').textContent = data.ID;
    document.getElementById('CTR').textContent = data.CTR;

    
    document.getElementById('I1rmsA').textContent = data.I1rmsA;
    document.getElementById('V1rmsV').textContent = data.V1rmsV;
    document.getElementById('PF1').textContent = data.PF1;
    document.getElementById('P1WATT').textContent = data.P1WATT;
    document.getElementById('P1VAR').textContent = data.P1VAR;
    // Update Phase 2 values
    document.getElementById('I2rmsA').textContent = data.I2rmsA;
    document.getElementById('V2rmsV').textContent = data.V2rmsV;
    document.getElementById('PF2').textContent = data.PF2;
    document.getElementById('P2WATT').textContent = data.P2WATT;
    document.getElementById('P2VAR').textContent = data.P2VAR;
    // Update Phase 3 values
    document.getElementById('I3rmsA').textContent = data.I3rmsA;
    document.getElementById('V3rmsV').textContent = data.V3rmsV;
    document.getElementById('PF3').textContent = data.PF3;
    document.getElementById('P3WATT').textContent = data.P3WATT;
    document.getElementById('P3VAR').textContent = data.P3VAR;
    // Update additional info
    document.getElementById('InullA').textContent = data.InullA;
    document.getElementById('Isum').textContent = data.Isum;
    document.getElementById('fHz').textContent = data.fHz;
    //update valori 
    // Update valori pentru Phase 1, Phase 2, Phase 3, and Additional Info
    document.getElementById('uUab').textContent = data.uUab;
    document.getElementById('uUac').textContent = data.uUac;
    document.getElementById('uUbc').textContent = data.uUbc;
    
  
    document.getElementById('uUIa').textContent = data.uUIa;
    document.getElementById('uUIb').textContent = data.uUIb;
    document.getElementById('uUIc').textContent = data.uUIc;
    
    
        //chart.get('phaseAB').setData([data.uUab]); // Update Phase A-B angle
        //chart.get('phaseAC').setData([data.uUac]); // Update Phase A-C angle
        //chart.get('phaseBC').setData([data.uUbc]); // Update Phase B-C angle
      

      //var voltageValue = parseFloat(data.V1rmsV); // Make sure this key matches your data
        //if(chart.series[0]) {
        //chart.series[0].points[0].update(voltageValue);
    //}

    // Update the gauge and the voltage value displayed below it
       // voltageGauge.refresh(data.V1rmsV);
        //document.getElementById('voltageValue').textContent = data.V1rmsV.toFixed(3); // 3 decimal places n
        
 
            
    // Check if the points exist and update them with the new data
        
    // Update the phase diagram
    drawPhaseDiagram(parseFloat(data.uUab), parseFloat(data.uUac), parseFloat(data.uUbc));
    
        
      //chart.redraw();
      
   if (voltageGauge && voltageGauge.series && voltageGauge.series[0].points[0]) {
        voltageGauge.series[0].points[0].update(parseFloat(data.V1rmsV));
      }
      if (voltageGauge2 && voltageGauge2.series && voltageGauge2.series[0].points[0]) {
        voltageGauge2.series[0].points[0].update(parseFloat(data.V2rmsV));
      }
      if (voltageGauge && voltageGauge.series && voltageGauge.series[0].points[0]) {
        voltageGauge.series[0].points[0].update(parseFloat(data.V1rmsV));
      }
      
      if (currentGauge && currentGauge.series && currentGauge.series[0].points[0]) {
        currentGauge.series[0].points[0].update(parseFloat(data.I1rmsA));
      }
      if (currentGauge2 && currentGauge2.series && currentGauge2.series[0].points[0]) {
        currentGauge2.series[0].points[0].update(parseFloat(data.I2rmsA));
      }
      if (currentGauge3 && currentGauge3.series && currentGauge3.series[0].points[0]) {
        currentGauge3.series[0].points[0].update(parseFloat(data.I3rmsA));
      }


      
      if (chartFrequency) {
            chartFrequency.series[0].points[0].update(data.fHz);
      }
      
       if(data.P1WATT !== undefined) {
            // Update the power chart with the new value
            powerChart.series[0].setData([parseFloat(data.P1WATT)]);
      }
      if(data.P2WATT !== undefined) {
            // Update the power chart with the new value
            powerChart2.series[0].setData([parseFloat(data.P2WATT)]);
      }
      if(data.P3WATT !== undefined) {
            // Update the power chart with the new value
            powerChart3.series[0].setData([parseFloat(data.P3WATT)]);
        }


  };
   
    


});


    
function togglePhaseDetails(detailId) {
    const detailsElement = document.getElementById(detailId);
    detailsElement.style.display = detailsElement.style.display === 'block' ? 'none' : 'block';
}




function drawPhaseDiagram(uUab, uUac, uUbc) {
    var canvas = document.getElementById('phaseDiagram');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var width = canvas.width;
        var height = canvas.height;
        var centerX = width / 2;
        var centerY = height / 2;
        var radius = Math.min(centerX, centerY) * 0.8; // Adjust to fit inside the canvas

        ctx.clearRect(0, 0, width, height); // Clear the canvas

        // Assuming uUab, uUac, and uUbc are in degrees and converting them to radians
        var angleA = 0; // Starting angle for phase A
        var angleB = angleA + uUab * (Math.PI / 180); // Angle for phase B
        var angleC = angleA + uUac * (Math.PI / 180); // Angle for phase C

        // Draw the lines
        drawLine(ctx, centerX, centerY, angleA, radius, 'Red');
        drawLine(ctx, centerX, centerY, angleB, radius, 'Yellow');
        drawLine(ctx, centerX, centerY, angleC, radius, 'Blue');
    }
}

function drawLine(ctx, x, y, angle, length, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length * Math.cos(angle), y + length * Math.sin(angle));
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
}







