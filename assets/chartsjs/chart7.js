const ctx7 = document.getElementById('myChart7');

let count = 30;
let labels = [];
for (let i = 1; i <= count; i++) {
  labels.push(i.toString());
}

new Chart(ctx7, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Active Ambulance Count',
      data: ['14', '15', '15', '14', '15', '15', '15', '13', '14', '13', '13', '15', '15', '15', '15', '15', '14', '13', '15', '15', '15', '15', '15', '0', '0', '14', '14', '14', '14', '15', '1'],
      borderWidth: 2,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)'

      ],
      borderColor: [
        'rgb(255, 99, 132)'
      ],
      pointHoverRadius: 20,
      order: 1

    }]
  },
  options: {
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },

    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'December 2022'
        },
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
          font: {
            size: 7
          }
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Active Ambulance Count'
        }
      }
    }
  },
});
