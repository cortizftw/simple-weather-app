fetch('weather.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Count the frequency of each weather condition
        const weatherCounts = data.weather.daily.condition.reduce((counts, condition) => {
            counts[condition] = (counts[condition] || 0) + 1;
            return counts;
        }, {});

        // Extract the labels and data for the pie chart
        const labels = Object.keys(weatherCounts);
        const chartData = Object.values(weatherCounts); 

        // Create the pie chart
        const ctx = document.getElementById('PieChart').getContext('2d');
        const PieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: chartData, 
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',  // same as max temp color in line chart
                        'rgba(75, 192, 192, 0.5)',  // same as min temp color in line chart and total precipitation color in bar chart
                        'rgba(255, 159, 64, 0.5)',  // orange
                        'rgba(153, 102, 255, 0.5)', // purple
                        'rgba(255, 205, 86, 0.5)',  // yellow
                        'rgba(54, 162, 235, 0.5)',  // blue
                        'rgba(201, 203, 207, 0.5)'  // grey
                    ]
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    });


    fetch('snowfall.json')
    .then(response => response.json())
    .then(data => {
        const dates = data.snowfall.daily.time;
        const snowfallSums = data.snowfall.daily.snowfall_sum;

        let tableHtml = '<table><thead><tr><th>Date</th><th>Snowfall Sum</th></tr></thead><tbody>';

        for (let i = 0; i < dates.length; i++) {
            tableHtml += `<tr><td>${dates[i]}</td><td>${snowfallSums[i]}</td></tr>`;
        }

        tableHtml += '</tbody></table>';

        document.getElementById('tableHtml').innerHTML = tableHtml;
    })
    .catch(error => console.error('Error:', error));