document.addEventListener("DOMContentLoaded", function() {
    // Biểu đồ Scatter Plot
    var scatterCtx = document.getElementById('scatterChart').getContext('2d');
    var scatterChart = new Chart(scatterCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Plot',
                data: [{
                    x: 1,
                    y: 3
                }, {
                    x: 2,
                    y: 5
                }, {
                    x: 3,
                    y: 8
                }, {
                    x: 4,
                    y: 6
                }, {
                    x: 5,
                    y: 9
                }]
            }]
        },
    });

    // Biểu đồ Line Chart
    var lineCtx = document.getElementById('lineChartCanvas').getContext('2d');
    var lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E'],
            datasets: [{
                label: 'Line Chart',
                data: [5, 7, 3, 8, 6],
                borderColor: 'blue',
                fill: false
            }]
        },
    });

    // Biểu đồ Bar Chart
    var barCtx = document.getElementById('barChartCanvas').getContext('2d');
    var barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E'],
            datasets: [{
                label: 'Bar Chart',
                data: [10, 20, 30, 40, 50],
                backgroundColor: 'green'
            }]
        },
    });

    // Biểu đồ Pie Chart
    var pieCtx = document.getElementById('pieChartCanvas').getContext('2d');
    var pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E'],
            datasets: [{
                label: 'Pie Chart',
                data: [20, 10, 30, 15, 25],
                backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange']
            }]
        },
    });

    // Biểu đồ Donut Chart
    var donutCtx = document.getElementById('donutChartCanvas').getContext('2d');
    var donutChart = new Chart(donutCtx, {
        type: 'doughnut',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E'],
            datasets: [{
                label: 'Donut Chart',
                data: [25, 20, 15, 10, 30],
                backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange']
            }]
        },
    });

    // Biểu đồ Bubble Chart
    var bubbleCtx = document.getElementById('bubbleChartCanvas').getContext('2d');
    var bubbleChart = new Chart(bubbleCtx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Bubble Chart',
                data: [{
                    x: 1,
                    y: 3,
                    r: 20
                }, {
                    x: 2,
                    y: 5,
                    r: 30
                }, {
                    x: 3,
                    y: 8,
                    r: 40
                }, {
                    x: 4,
                    y: 6,
                    r: 25
                }, {
                    x: 5,
                    y: 9,
                    r: 35
                }],
                backgroundColor: 'blue'
            }]
        },
    });
});
