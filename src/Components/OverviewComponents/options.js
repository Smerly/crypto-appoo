export const options = {
    plugins: {
        legend: {
            display: false,
        },
        subtitle: {
            display: false
        },
        tooltips: {
            enabled: false
            }
    },
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
        point: {
            radius: 0,
        },
    },
    scales: {
        x: {
            ticks: {
                font: {
                    size: 0,
                },
            },
            grid: {
                display: false,
            },
        },
        y: {
            ticks: {
              font: {
                size: 0,
              }
            },
            grid: {
                display: false,
            },
        },
    }
}