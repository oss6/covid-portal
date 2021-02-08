window.addEventListener('load', function () {
    // ------------------------
    // Define generic functions
    // ------------------------
    function newDate(week) {
		return moment("20210208", "YYYYMMDD").add(week, 'weeks').toDate();
    }

    // ------------------------
    // Define charts
    // ------------------------
    var covidTestsChart = {
        type: 'bar',
        data: {
            labels: [
                newDate(0),
                newDate(2),
                newDate(4),
                newDate(8),
                newDate(10),
                newDate(12),
                newDate(14),
                newDate(16),
                newDate(18),
                newDate(20),
                newDate(22),
                newDate(24),
                newDate(26),
                newDate(28),
                newDate(30),
                newDate(32),
                newDate(34),
                newDate(36),
            ],
            datasets: [
                {
                    label: 'Negative',
                    data: [1267, 3261, 4456, 8768, 10483, 13548, 7483, 18349, 19340, 23923, 19423, 29239, 39384, 41291, 42190, 45129, 50232, 52439],
                    backgroundColor: 'rgba(17,103,176, 0.2)',
                    borderColor: 'rgba(17,103,176, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Positive',
                    data: [123, 214, 323, 433, 489, 531, 1203, 1603, 2145, 3421, 3627, 5434, 4312, 5834, 6542, 7654, 8454, 9456],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        },
                        stacked: true,
                    }
                ],
                xAxes: [
                    {
                        type: 'time',
                        time: {
                            unit: 'week'
                        },
                        stacked: true,
                        categoryPercentage: 1.0,
                        barPercentage: 1.0
                    }
                ]
            }
        }
    };

    var antibodyTestsChart = {
        type: 'line',
        data: {
            labels: [
                newDate(0),
                newDate(2),
                newDate(4),
                newDate(8),
                newDate(10),
                newDate(12),
                newDate(14),
                newDate(16),
                newDate(18),
                newDate(20),
                newDate(22),
                newDate(24),
                newDate(26),
                newDate(28),
                newDate(30),
                newDate(32),
                newDate(34),
                newDate(36),
            ],
            datasets: [
                {
                    label: 'Negative',
                    data: [4354, 7899, 15232, 20123, 30232, 35232, 40343, 49454, 55343, 60343, 65432, 66341, 67343, 68341, 69213, 69454, 70242, 70831],
                    backgroundColor: 'rgba(17,103,176, 0.2)',
                    borderColor: 'rgba(17,103,176, 1)',
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'R&D',
                    data: [1267, 3261, 4456, 8768, 10483, 13548, 7483, 18349, 19340, 23923, 19423, 29239, 39384, 41291, 42190, 45129, 50232, 52439],
                    backgroundColor: 'rgba(0,0,0, 0.2)',
                    borderColor: 'rgba(134,134,134, 1)',
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'Positive',
                    data: [123, 214, 323, 433, 489, 531, 1203, 1603, 2145, 3421, 3627, 5434, 4312, 5834, 6542, 7654, 8454, 9456],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    fill: false
                }
            ]
        },
        options: {
            scales: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ],
                xAxes: [
                    {
                        type: 'time',
                        time: {
                            unit: 'week'
                        },
                        categoryPercentage: 1.0,
                        barPercentage: 1.0
                    }
                ]
            }
        }
    };

    // ------------------------
    // Display charts
    // ------------------------
    new Chart(document.getElementById('npc').getContext('2d'), covidTestsChart);
    new Chart(document.getElementById('serology').getContext('2d'), antibodyTestsChart);
});
