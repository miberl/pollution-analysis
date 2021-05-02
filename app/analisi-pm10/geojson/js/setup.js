const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const labels = [
    'Bosco Chiesanuova',
    'Legnago',
    'San Bonifacio',
    'Borgo Milano',
    'Giarol Grande'
  ];
const data = {
  labels: labels,
  datasets: [
    {
      label: '2019',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [16, 72, 77,75, 55]
    },
    {
      label: '2020',
      backgroundColor: 'rgb(30, 99, 200)',
      borderColor: 'rgb(30, 99, 200)',
      data: [12, 76, 96, 83, 60]
    }
  ]
};

