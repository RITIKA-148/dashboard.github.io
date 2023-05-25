const allDropdown = document.querySelectorAll('#sidebars .side-dropdown');
const sidebar = document.getElementById('sidebars');

allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})





const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebars .divider');

if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})


// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');

allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})






// APEXCHART
var options = {
  series: [{
  name: 'Product',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'Sales',
  data: [25, 32, 45, 65, 34,100, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


const data = [
	{ date: '2023-05-22', country: 'USA', value: 100 },
	{ date: '2023-05-23', country: 'UK', value: 150 },
	{ date: '2023-05-23', country: 'USA', value: 200 },
  ];
  
  const tableBody = document.getElementById('data-table-body');
  const countryInput = document.getElementById('country');
  const dateInput = document.getElementById('date');
  
  function filterData() {
	const selectedCountry = countryInput.value.toLowerCase();
	const selectedDate = dateInput.value;
  
	tableBody.innerHTML = '';
  
	const filteredData = data.filter((entry) => {
	  const countryMatch = entry.country.toLowerCase().includes(selectedCountry);
	  const dateMatch = selectedDate === '' || entry.date === selectedDate;
	  return countryMatch && dateMatch;
	});
  
	filteredData.forEach((entry) => {
	  const row = document.createElement('tr');
	  const dateCell = document.createElement('td');
	  dateCell.textContent = entry.date;
	  const countryCell = document.createElement('td');
	  countryCell.textContent = entry.country;
	  const valueCell = document.createElement('td');
	  valueCell.textContent = entry.value;
  
	  row.appendChild(dateCell);
	  row.appendChild(countryCell);
	  row.appendChild(valueCell);
	  tableBody.appendChild(row);
	});
  }
  
  countryInput.addEventListener('input', filterData);
  dateInput.addEventListener('input', filterData);
  
  filterData();
  