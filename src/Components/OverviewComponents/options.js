export const options = {
    plugins: [{
        legend: {
            display: true,
        },
        subtitle: {
            display: true
        },
        tooltips: {
            enabled: true
        },
        chartAreaBorder: {
            borderColor: 'red',
            borderWidth: 2,
            borderDash: [5, 5],
            borderDashOffset: 2,
        },
    }],
    transitions: {
        show: {
            animations: {
                x: {
                    from: 0
                },
                y: {
                    from: 0
                }
            }
        },
        hide: {
            animations: {
                x: {
                    to: 0
                },
                y: {
                    to: 0
                }
            }
        }
    },
    interaction: {
        mode: 'index',
        intersect: false,
    },
    elements: {
        line: {
            fill: true,
            BackgroundColor: 'red'
        },
        point: {
            radius: 0,
        },
    },
    scales: {
        x: {
            ticks: {
                font: {
                    size: 10,
                },
                maxTicksLimit: 2000
            },
            grid: {
                display: false,
            },
        },
        y: {
            ticks: {
              font: {
                size: 0,
              },
              maxTicksLimit: 2000
            },
            grid: {
                display: false,
            },
        },
    }
}

export const plugins = [{
    legend: {
        display: true,
        labels: {
            position: 'top'
        }
    },
    subtitle: {
        display: true
    },
    tooltips: {
        enabled: true
    },
    chartAreaBorder: {
        borderColor: 'red',
        borderWidth: 2,
        borderDash: [5, 5],
        borderDashOffset: 2,
    },
}]