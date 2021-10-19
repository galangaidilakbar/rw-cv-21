export const gpa = {
    type: "bar",
    data: {
        labels: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
        datasets: [{
            label: 'GPA per Semester',
            backgroundColor: 'rgb(255,215,0)',
            borderColor: 'rgb(255,215,0)',
            color: '#fff',
            borderWidth: 3,
            data: [3.68, 3.95, 4.00, 3.71],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

export default gpa;