const ctxPie = document.getElementById('demographicChart').getContext('2d');
new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Working (Not Studying)', 'Postgraduate Student', 'College Student', 'Highschool Student', 'Elementary Student'],
        datasets: [{
            data: [17, 14, 40, 26, 3]
        }]
    }
});

const ctxBar = document.getElementById('locationChart').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Quezon', 'Manila', 'San Juan', 'Makati', 'Taguig'],
        datasets: [{
            label: 'Searches',
            data: [2181, 1940, 1184, 752, 602]
        }]
    }
});

const ctxLine = document.getElementById('trafficChart').getContext('2d');
new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Visitors',
            data: [1303, 461, 396, 591, 410, 749, 1132]
        }]
    }
});