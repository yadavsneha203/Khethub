document.addEventListener('DOMContentLoaded', function () {
    const stateFilter = document.getElementById('stateFilter');
    const cityFilter = document.getElementById('cityFilter');
    const productItems = document.querySelectorAll('.product-item');

    stateFilter.addEventListener('change', filterProducts);
    cityFilter.addEventListener('change', filterProducts);

    function filterProducts() {
        const selectedState = stateFilter.value.toLowerCase();
        const selectedCity = cityFilter.value.toLowerCase();

        productItems.forEach(item => {
            const productState = item.dataset.state.toLowerCase();
            const productCity = item.dataset.city.toLowerCase();

            if ((selectedState === 'all' || selectedState === productState) &&
                (selectedCity === 'all' || selectedCity === productCity)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    window.searchProducts = function () {
        const searchText = document.getElementById('searchBox').value.toLowerCase();
        productItems.forEach(item => {
            const productName = item.dataset.product.toLowerCase();
            if (productName.includes(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    productItems.forEach(item => {
        const canvas = item.querySelector('canvas');
        const prices = [
            parseInt(item.querySelector('p:nth-child(3)').textContent.match(/\d+/)[0]),
            parseInt(item.querySelector('p:nth-child(2)').textContent.match(/\d+/)[0]),
            parseInt(item.querySelector('p:nth-child(1)').textContent.match(/\d+/)[0])
        ];
        drawChart(canvas, [item.dataset.product, '2 Days Ago', 'Yesterday', 'Today'], prices);
    });

    function drawChart(canvas, labels, data) {
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels.slice(1),
                datasets: [{
                    label: labels[0],
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#333'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#333'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#333'
                        }
                    }
                }
            }
        });
    }
});