// Elite Boutique - App JavaScript

// Global application data
const appData = {
    customers: [
        {"id": 1, "name": "Rajesh Kumar", "phone": "+91 98765 43210", "email": "rajesh@email.com", "address": "123 MG Road, Bangalore", "measurements": {"chest": 40, "waist": 34, "inseam": 32}, "orders": 5, "value": 25000, "lastOrder": "2024-05-15", "vip": true},
        {"id": 2, "name": "Priya Sharma", "phone": "+91 87654 32109", "email": "priya@email.com", "address": "456 Park Street, Mumbai", "measurements": {"bust": 36, "waist": 28, "hips": 38}, "orders": 3, "value": 18000, "lastOrder": "2024-05-20", "vip": false},
        {"id": 3, "name": "Amit Singh", "phone": "+91 76543 21098", "email": "amit@email.com", "address": "789 CP, Delhi", "measurements": {"chest": 42, "waist": 36, "inseam": 34}, "orders": 8, "value": 45000, "lastOrder": "2024-05-25", "vip": true},
        {"id": 4, "name": "Sunita Patel", "phone": "+91 98765 12345", "email": "sunita@email.com", "address": "456 Brigade Road, Bangalore", "measurements": {"bust": 34, "waist": 26, "hips": 36}, "orders": 2, "value": 12000, "lastOrder": "2024-05-18", "vip": false},
        {"id": 5, "name": "Vikram Rao", "phone": "+91 87654 98765", "email": "vikram@email.com", "address": "789 Anna Salai, Chennai", "measurements": {"chest": 38, "waist": 32, "inseam": 30}, "orders": 6, "value": 28000, "lastOrder": "2024-05-22", "vip": true}
    ],
    fabrics: [
        {"id": 1, "name": "Pure Cotton White", "category": "Cotton", "stock": 50, "unit": "meters", "price": 450, "supplier": "Textile Mills Ltd", "image": "cotton-white.jpg"},
        {"id": 2, "name": "Silk Banarasi Blue", "category": "Silk", "stock": 25, "unit": "meters", "price": 1200, "supplier": "Varanasi Silks", "image": "silk-blue.jpg"},
        {"id": 3, "name": "Wool Cashmere Grey", "category": "Wool", "stock": 15, "unit": "meters", "price": 2500, "supplier": "Kashmir Wools", "image": "wool-grey.jpg"},
        {"id": 4, "name": "Linen Natural Beige", "category": "Linen", "stock": 8, "unit": "meters", "price": 800, "supplier": "Eco Textiles", "image": "linen-beige.jpg"},
        {"id": 5, "name": "Cotton Printed Floral", "category": "Cotton", "stock": 35, "unit": "meters", "price": 650, "supplier": "Print Masters", "image": "cotton-floral.jpg"},
        {"id": 6, "name": "Silk Dupioni Pink", "category": "Silk", "stock": 20, "unit": "meters", "price": 1800, "supplier": "Premium Silks", "image": "silk-pink.jpg"}
    ],
    orders: [
        {"id": 1001, "customer": "Rajesh Kumar", "items": "3-Piece Suit", "fabric": "Wool Cashmere Grey", "status": "Production", "orderDate": "2024-05-20", "deliveryDate": "2024-06-05", "amount": 15000, "assignedTo": "Ramesh (Tailor)"},
        {"id": 1002, "customer": "Priya Sharma", "items": "Party Dress", "fabric": "Silk Banarasi Blue", "status": "Measurement", "orderDate": "2024-05-22", "deliveryDate": "2024-06-10", "amount": 8000, "assignedTo": "Sunita (Designer)"},
        {"id": 1003, "customer": "Amit Singh", "items": "Casual Shirt", "fabric": "Pure Cotton White", "status": "Ready", "orderDate": "2024-05-18", "deliveryDate": "2024-05-30", "amount": 3500, "assignedTo": "Completed"},
        {"id": 1004, "customer": "Sunita Patel", "items": "Wedding Saree", "fabric": "Silk Dupioni Pink", "status": "Production", "orderDate": "2024-05-25", "deliveryDate": "2024-06-15", "amount": 12000, "assignedTo": "Sunita (Designer)"},
        {"id": 1005, "customer": "Vikram Rao", "items": "Casual Trousers", "fabric": "Cotton Printed Floral", "status": "Ready", "orderDate": "2024-05-23", "deliveryDate": "2024-06-01", "amount": 4500, "assignedTo": "Completed"}
    ],
    staff: [
        {"id": 1, "name": "Ramesh Kumar", "role": "Senior Tailor", "experience": "15 years", "phone": "+91 99988 77766", "salary": 25000},
        {"id": 2, "name": "Sunita Devi", "role": "Designer", "experience": "8 years", "phone": "+91 88877 66655", "salary": 20000},
        {"id": 3, "name": "Mohan Lal", "role": "Junior Tailor", "experience": "5 years", "phone": "+91 77766 55544", "salary": 18000}
    ],
    analytics: {
        "monthlyRevenue": 125000,
        "totalCustomers": 247,
        "activeOrders": 15,
        "lowStockItems": 8,
        "salesData": [
            {"month": "Jan", "revenue": 95000},
            {"month": "Feb", "revenue": 110000},
            {"month": "Mar", "revenue": 105000},
            {"month": "Apr", "revenue": 120000},
            {"month": "May", "revenue": 125000}
        ]
    },
    business: {
        "name": "Elite Boutique",
        "gstNumber": "07AABCE2207R1Z5",
        "address": "123 Fashion Street, Commercial Complex, Bangalore - 560001",
        "phone": "+91 80 2345 6789",
        "email": "info@eliteboutique.com"
    }
};

// Global chart instances
let salesChart = null;
let revenueChart = null;
let fabricChart = null;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDashboard();
    initCustomers();
    initInventory();
    initOrders();
    initDesignCanvas();
    initVirtualTryOn();
    initBilling();
    initAnalytics();
    initStaff();
    initSettings();
    
    // Set current date on date inputs
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        if (!input.value) input.value = today;
    });
});

// Navigation Module
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const moduleId = item.getAttribute('data-module');
            showModule(moduleId);
            
            // Update active state
            navItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

function showModule(moduleId) {
    // Hide all modules
    document.querySelectorAll('.module').forEach(module => {
        module.classList.remove('active');
    });
    
    // Show selected module
    document.getElementById(moduleId).classList.add('active');
    
    // Update navigation state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-module') === moduleId) {
            item.classList.add('active');
        }
    });

    // Re-render charts when analytics module is shown
    if (moduleId === 'analytics') {
        setTimeout(() => {
            initAnalytics();
        }, 100);
    }
}

// Dashboard Module
function initDashboard() {
    populateRecentOrders();
    // Add delay to ensure canvas is ready
    setTimeout(() => {
        renderSalesChart();
    }, 100);
}

function populateRecentOrders() {
    const tableBody = document.getElementById('recentOrdersTable');
    tableBody.innerHTML = '';
    
    appData.orders.forEach(order => {
        const row = document.createElement('tr');
        
        // Create status class based on order status
        let statusClass = '';
        switch(order.status) {
            case 'Ready':
                statusClass = 'success';
                break;
            case 'Measurement':
            case 'Production':
                statusClass = 'warning';
                break;
            default:
                statusClass = 'info';
        }
        
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.items}</td>
            <td><span class="status status--${statusClass.toLowerCase()}">${order.status}</span></td>
            <td>₹${order.amount.toLocaleString()}</td>
            <td>${formatDate(order.deliveryDate)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function renderSalesChart() {
    const canvas = document.getElementById('salesChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart if it exists
    if (salesChart) {
        salesChart.destroy();
    }
    
    salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: appData.analytics.salesData.map(item => item.month),
            datasets: [{
                label: 'Monthly Revenue (₹)',
                data: appData.analytics.salesData.map(item => item.revenue),
                backgroundColor: '#1FB8CD',
                borderColor: '#1FB8CD',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '₹' + context.raw.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Customer Management Module
function initCustomers() {
    populateCustomerTable();
    
    // Search functionality
    document.getElementById('customerSearch').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterCustomers(searchTerm);
    });
    
    // Form submission
    document.getElementById('customerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveCustomer();
    });
}

function populateCustomerTable() {
    const tableBody = document.getElementById('customerTable');
    tableBody.innerHTML = '';
    
    appData.customers.forEach(customer => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>${customer.orders}</td>
            <td>₹${customer.value.toLocaleString()}</td>
            <td>${formatDate(customer.lastOrder)}</td>
            <td>${customer.vip ? '<span class="status status--success">VIP</span>' : '<span class="status status--info">Regular</span>'}</td>
            <td>
                <button class="btn btn--sm btn--secondary" onclick="viewCustomer(${customer.id})">View</button>
                <button class="btn btn--sm btn--secondary" onclick="editCustomer(${customer.id})">Edit</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

function filterCustomers(searchTerm) {
    const rows = document.querySelectorAll('#customerTable tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

function showNewCustomerForm() {
    document.getElementById('customerModalTitle').textContent = 'Add New Customer';
    document.getElementById('customerForm').reset();
    document.getElementById('customerModal').style.display = 'flex';
}

function editCustomer(customerId) {
    const customer = appData.customers.find(c => c.id === customerId);
    if (!customer) return;
    
    document.getElementById('customerModalTitle').textContent = 'Edit Customer';
    
    const form = document.getElementById('customerForm');
    form.elements['name'].value = customer.name;
    form.elements['phone'].value = customer.phone;
    form.elements['email'].value = customer.email;
    form.elements['address'].value = customer.address;
    form.elements['vip'].value = customer.vip.toString();
    
    // Fill measurements if available
    if (customer.measurements) {
        for (const [key, value] of Object.entries(customer.measurements)) {
            if (form.elements[key]) {
                form.elements[key].value = value;
            }
        }
    }
    
    document.getElementById('customerModal').style.display = 'flex';
}

function viewCustomer(customerId) {
    // In a real app, this would open a detailed view of the customer
    editCustomer(customerId);
}

function saveCustomer() {
    const form = document.getElementById('customerForm');
    const formData = new FormData(form);
    
    // In a real app, this would save to the backend
    const newCustomer = {
        id: appData.customers.length + 1,
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        address: formData.get('address'),
        measurements: {
            chest: formData.get('chest') || null,
            waist: formData.get('waist') || null,
            hips: formData.get('hips') || null,
            sleeve: formData.get('sleeve') || null
        },
        vip: formData.get('vip') === 'true',
        orders: 0,
        value: 0,
        lastOrder: new Date().toISOString().split('T')[0]
    };
    
    appData.customers.push(newCustomer);
    closeModal('customerModal');
    populateCustomerTable();
    showMessage('Customer saved successfully', 'success');
    updateOrderCustomerSelects();
}

// Inventory Management Module
function initInventory() {
    populateFabricGrid();
    
    // Search functionality
    document.getElementById('fabricSearch').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterFabrics(searchTerm);
    });
    
    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', filterFabricsByCategory);
    
    // Stock filter
    document.getElementById('stockFilter').addEventListener('change', filterFabricsByStock);
    
    // Form submission
    document.getElementById('fabricForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveFabric();
    });
}

function populateFabricGrid() {
    const fabricGrid = document.getElementById('fabricGrid');
    fabricGrid.innerHTML = '';
    
    appData.fabrics.forEach(fabric => {
        // Determine stock level class
        let stockClass, stockText;
        if (fabric.stock > 30) {
            stockClass = 'stock-high';
            stockText = 'High';
        } else if (fabric.stock > 10) {
            stockClass = 'stock-medium';
            stockText = 'Medium';
        } else {
            stockClass = 'stock-low';
            stockText = 'Low';
        }
        
        const fabricItem = document.createElement('div');
        fabricItem.className = 'fabric-item';
        fabricItem.setAttribute('data-id', fabric.id);
        fabricItem.setAttribute('data-category', fabric.category);
        fabricItem.setAttribute('data-stock-level', stockText.toLowerCase());
        
        fabricItem.innerHTML = `
            <div class="fabric-image">${getFabricIcon(fabric.category)}</div>
            <div class="fabric-info">
                <div class="fabric-name">${fabric.name}</div>
                <div class="fabric-category">${fabric.category}</div>
                <div class="fabric-details">
                    <div class="fabric-price">₹${fabric.price}/meter</div>
                    <div class="stock-indicator ${stockClass}">${fabric.stock} ${fabric.unit}</div>
                </div>
                <div class="fabric-supplier">Supplier: ${fabric.supplier}</div>
            </div>
        `;
        
        fabricItem.addEventListener('click', () => editFabric(fabric.id));
        fabricGrid.appendChild(fabricItem);
    });
    
    // Also populate swatches for design canvas
    populateFabricSwatches();
}

function getFabricIcon(category) {
    const icons = {
        'Cotton': '🧶',
        'Silk': '🧵',
        'Wool': '🧣',
        'Linen': '🧵',
        'Synthetic': '🧶'
    };
    
    return icons[category] || '🧵';
}

function filterFabrics(searchTerm) {
    const items = document.querySelectorAll('.fabric-item');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function filterFabricsByCategory() {
    const category = document.getElementById('categoryFilter').value.toLowerCase();
    
    if (!category) {
        document.querySelectorAll('.fabric-item').forEach(item => {
            item.style.display = '';
        });
        return;
    }
    
    document.querySelectorAll('.fabric-item').forEach(item => {
        const itemCategory = item.getAttribute('data-category').toLowerCase();
        item.style.display = itemCategory === category ? '' : 'none';
    });
}

function filterFabricsByStock() {
    const stockLevel = document.getElementById('stockFilter').value;
    
    if (!stockLevel) {
        document.querySelectorAll('.fabric-item').forEach(item => {
            item.style.display = '';
        });
        return;
    }
    
    document.querySelectorAll('.fabric-item').forEach(item => {
        const itemStockLevel = item.getAttribute('data-stock-level');
        item.style.display = itemStockLevel === stockLevel ? '' : 'none';
    });
}

function scanBarcode() {
    // In a real app, this would activate the device camera
    showMessage('Scanner activated. Point your camera at a barcode.', 'info');
    
    // Simulate a scan after 3 seconds
    setTimeout(() => {
        showMessage('Fabric identified: Premium Silk Red', 'success');
    }, 3000);
}

function showNewFabricForm() {
    document.getElementById('fabricForm').reset();
    document.getElementById('fabricModal').style.display = 'flex';
}

function editFabric(fabricId) {
    const fabric = appData.fabrics.find(f => f.id === fabricId);
    if (!fabric) return;
    
    const form = document.getElementById('fabricForm');
    form.elements['name'].value = fabric.name;
    form.elements['category'].value = fabric.category;
    form.elements['stock'].value = fabric.stock;
    form.elements['unit'].value = fabric.unit;
    form.elements['price'].value = fabric.price;
    form.elements['supplier'].value = fabric.supplier;
    
    document.getElementById('fabricModal').style.display = 'flex';
}

function saveFabric() {
    const form = document.getElementById('fabricForm');
    const formData = new FormData(form);
    
    // In a real app, this would save to the backend
    const newFabric = {
        id: appData.fabrics.length + 1,
        name: formData.get('name'),
        category: formData.get('category'),
        stock: parseInt(formData.get('stock')),
        unit: formData.get('unit'),
        price: parseFloat(formData.get('price')),
        supplier: formData.get('supplier'),
        image: `${formData.get('category').toLowerCase()}-${Math.floor(Math.random() * 100)}.jpg`
    };
    
    appData.fabrics.push(newFabric);
    closeModal('fabricModal');
    populateFabricGrid();
    showMessage('Fabric added successfully', 'success');
    updateOrderFabricSelects();
}

// Order Management Module
function initOrders() {
    populateOrdersTable();
    updateOrderCustomerSelects();
    updateOrderFabricSelects();
    
    // Status filter
    document.getElementById('statusFilter').addEventListener('change', filterOrdersByStatus);
    
    // Form submission
    document.getElementById('orderForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveOrder();
    });
}

function populateOrdersTable() {
    const tableBody = document.getElementById('ordersTable');
    tableBody.innerHTML = '';
    
    appData.orders.forEach(order => {
        const row = document.createElement('tr');
        
        // Create status class based on order status
        let statusClass = '';
        switch(order.status) {
            case 'Ready':
                statusClass = 'success';
                break;
            case 'Measurement':
            case 'Production':
                statusClass = 'warning';
                break;
            default:
                statusClass = 'info';
        }
        
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.items}</td>
            <td>${order.fabric}</td>
            <td><span class="status status--${statusClass}">${order.status}</span></td>
            <td>${formatDate(order.orderDate)}</td>
            <td>${formatDate(order.deliveryDate)}</td>
            <td>₹${order.amount.toLocaleString()}</td>
            <td>${order.assignedTo}</td>
            <td>
                <button class="btn btn--sm btn--secondary" onclick="viewOrder(${order.id})">View</button>
                <button class="btn btn--sm btn--secondary" onclick="updateOrderStatus(${order.id})">Update</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

function filterOrdersByStatus() {
    const status = document.getElementById('statusFilter').value;
    const rows = document.querySelectorAll('#ordersTable tr');
    
    if (!status) {
        rows.forEach(row => row.style.display = '');
        return;
    }
    
    rows.forEach(row => {
        const statusCell = row.querySelector('td:nth-child(5)');
        if (statusCell && statusCell.textContent.includes(status)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function updateOrderCustomerSelects() {
    const customerSelect = document.getElementById('orderCustomerSelect');
    if (!customerSelect) return;
    
    customerSelect.innerHTML = '<option value="">Select Customer</option>';
    
    appData.customers.forEach(customer => {
        const option = document.createElement('option');
        option.value = customer.name;
        option.textContent = `${customer.name} - ${customer.phone}`;
        customerSelect.appendChild(option);
    });
}

function updateOrderFabricSelects() {
    const fabricSelect = document.getElementById('orderFabricSelect');
    if (!fabricSelect) return;
    
    fabricSelect.innerHTML = '<option value="">Select Fabric</option>';
    
    appData.fabrics.forEach(fabric => {
        const option = document.createElement('option');
        option.value = fabric.name;
        option.textContent = `${fabric.name} - ₹${fabric.price}/meter (${fabric.stock} left)`;
        fabricSelect.appendChild(option);
    });
}

function showNewOrderForm() {
    document.getElementById('orderForm').reset();
    document.getElementById('orderModal').style.display = 'flex';
}

function viewOrder(orderId) {
    // In a real app, this would show a detailed view
    showMessage(`Viewing order #${orderId}`, 'info');
}

function updateOrderStatus(orderId) {
    const order = appData.orders.find(o => o.id === orderId);
    if (!order) return;
    
    // Simple status progression
    const statusFlow = ['New', 'Measurement', 'Production', 'Ready', 'Delivered'];
    const currentIndex = statusFlow.indexOf(order.status);
    
    if (currentIndex < statusFlow.length - 1) {
        order.status = statusFlow[currentIndex + 1];
        populateOrdersTable();
        showMessage(`Order #${orderId} status updated to ${order.status}`, 'success');
    }
}

function saveOrder() {
    const form = document.getElementById('orderForm');
    const formData = new FormData(form);
    
    // Generate a new order ID
    const newOrderId = appData.orders.length > 0 
        ? Math.max(...appData.orders.map(o => o.id)) + 1 
        : 1001;
    
    // In a real app, this would save to the backend
    const newOrder = {
        id: newOrderId,
        customer: formData.get('customer'),
        items: formData.get('items'),
        fabric: formData.get('fabric'),
        status: 'New',
        orderDate: new Date().toISOString().split('T')[0],
        deliveryDate: formData.get('deliveryDate'),
        amount: parseFloat(formData.get('amount')),
        assignedTo: formData.get('assignedTo')
    };
    
    appData.orders.push(newOrder);
    closeModal('orderModal');
    populateOrdersTable();
    populateRecentOrders();
    updateBillingOrderSelect();
    showMessage('Order created successfully', 'success');
}

// Design Canvas Module
let designCanvas;
let currentTool = 'pencil';

function initDesignCanvas() {
    // Initialize fabric.js canvas
    const canvasElement = document.getElementById('designCanvas');
    if (!canvasElement) return;
    
    designCanvas = new fabric.Canvas('designCanvas');
    designCanvas.isDrawingMode = true;
    designCanvas.freeDrawingBrush.width = 3;
    designCanvas.freeDrawingBrush.color = '#000000';
    
    populateFabricSwatches();
}

function populateFabricSwatches() {
    const swatchesContainer = document.getElementById('fabricSwatches');
    if (!swatchesContainer) return;
    
    swatchesContainer.innerHTML = '';
    
    // Generate some fabric swatch colors based on fabric names
    const swatchColors = {
        'Pure Cotton White': '#f5f5f5',
        'Silk Banarasi Blue': '#3f51b5',
        'Wool Cashmere Grey': '#757575',
        'Linen Natural Beige': '#d7ccc8',
        'Cotton Printed Floral': '#ff9800',
        'Silk Dupioni Pink': '#e91e63'
    };
    
    appData.fabrics.forEach(fabric => {
        const swatch = document.createElement('div');
        swatch.className = 'fabric-swatch';
        swatch.style.backgroundColor = swatchColors[fabric.name] || getRandomColor();
        swatch.textContent = fabric.name.split(' ')[0];
        swatch.setAttribute('data-fabric', fabric.name);
        
        swatch.addEventListener('click', () => selectFabric(fabric.name, swatchColors[fabric.name] || getRandomColor()));
        
        swatchesContainer.appendChild(swatch);
    });
}

function getRandomColor() {
    const colors = ['#f5f5f5', '#90caf9', '#a5d6a7', '#ffcc80', '#ef9a9a', '#ce93d8', '#80deea'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function setDrawingTool(tool) {
    currentTool = tool;
    
    // Update active state on buttons
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const toolButton = document.querySelector(`.tool-btn[onclick="setDrawingTool('${tool}')"]`);
    if (toolButton) {
        toolButton.classList.add('active');
    }
    
    // Configure canvas based on selected tool
    if (!designCanvas) return;
    
    switch (tool) {
        case 'pencil':
            designCanvas.isDrawingMode = true;
            designCanvas.freeDrawingBrush.width = 2;
            break;
        case 'brush':
            designCanvas.isDrawingMode = true;
            designCanvas.freeDrawingBrush.width = 8;
            break;
        case 'line':
            designCanvas.isDrawingMode = false;
            // In a real app, we would set up line drawing mode
            break;
        case 'circle':
            designCanvas.isDrawingMode = false;
            // In a real app, we would set up circle drawing mode
            break;
        case 'rectangle':
            designCanvas.isDrawingMode = false;
            // In a real app, we would set up rectangle drawing mode
            break;
    }
}

function selectFabric(fabricName, color) {
    if (designCanvas) {
        designCanvas.freeDrawingBrush.color = color;
    }
    showMessage(`Selected fabric: ${fabricName}`, 'info');
}

function clearCanvas() {
    if (designCanvas) {
        designCanvas.clear();
    }
    showMessage('Canvas cleared', 'info');
}

function loadTemplate() {
    // In a real app, this would load a template
    if (!designCanvas) return;
    
    // For demo, add a simple shape
    const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: '#f5f5f5',
        width: 200,
        height: 300,
        stroke: '#000',
        strokeWidth: 2
    });
    
    designCanvas.add(rect);
    showMessage('Template loaded', 'success');
}

function saveDesign() {
    // In a real app, this would save the design
    showMessage('Design saved successfully', 'success');
}

function toggleMeasurementGuide() {
    // In a real app, this would toggle measurement guides
    showMessage('Measurement guide toggled', 'info');
}

// Virtual Try-On Module
function initVirtualTryOn() {
    // This is a simulated module as actual AI integration would require backend
}

function previewPhoto(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const photoPreview = document.getElementById('photoPreview');
            photoPreview.innerHTML = `<img src="${e.target.result}" class="photo-preview" alt="Customer Photo">`;
            showMessage('Photo uploaded successfully', 'success');
        };
        
        reader.readAsDataURL(input.files[0]);
    }
}

function selectGarment(garmentType) {
    // Mark the selected garment
    document.querySelectorAll('.garment-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    const selectedItem = document.querySelector(`.garment-item[onclick="selectGarment('${garmentType}')"]`);
    if (selectedItem) {
        selectedItem.classList.add('selected');
    }
    
    // Show the simulated result if photo is uploaded
    const photoPreview = document.getElementById('photoPreview');
    if (photoPreview.querySelector('img')) {
        simulateVirtualTryOn(garmentType);
    } else {
        showMessage('Please upload a photo first', 'error');
    }
}

function simulateVirtualTryOn(garmentType) {
    const resultContainer = document.getElementById('tryOnResult');
    
    // In a real app with Gemini API, this would use AI to generate a try-on image
    // For demo, we'll simulate the process
    resultContainer.innerHTML = `
        <div style="text-align: center;">
            <p>AI-Powered Virtual Try-On Result</p>
            <div style="display: flex; justify-content: space-around;">
                <div>
                    <p>Original Photo</p>
                    <div style="max-width: 200px; margin: 0 auto;">
                        ${document.getElementById('photoPreview').innerHTML}
                    </div>
                </div>
                <div>
                    <p>Virtual Try-On</p>
                    <div class="photo-preview" style="max-width: 200px; margin: 0 auto; background-color: #f5f5f5; display: flex; align-items: center; justify-content: center; height: 300px;">
                        <span>AI simulation of ${garmentType} in progress...</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Show AI recommendations
    const recommendationsContainer = document.getElementById('aiRecommendations');
    if (recommendationsContainer) {
        recommendationsContainer.style.display = 'block';
        const recommendations = document.querySelector('.recommendations');
        if (recommendations) {
            recommendations.innerHTML = `
                <div class="recommendation-item">Try this with ${getRandomFabric().name} for the best fit</div>
                <div class="recommendation-item">This style suits your body type and complexion</div>
                <div class="recommendation-item">Consider adding embroidery for a more elegant look</div>
            `;
        }
    }
    
    showMessage('Virtual try-on processing complete', 'success');
}

function getRandomFabric() {
    return appData.fabrics[Math.floor(Math.random() * appData.fabrics.length)];
}

function shareTriedOn() {
    showMessage('Result shared via WhatsApp', 'success');
}

function saveTriedOn() {
    showMessage('Result saved to customer profile', 'success');
}

// Billing Module
function initBilling() {
    updateBillingOrderSelect();
    
    // Form submission
    const billForm = document.getElementById('billForm');
    if (billForm) {
        billForm.addEventListener('submit', (e) => {
            e.preventDefault();
            generateAndSendBill();
        });
    }
    
    // Order selection change
    const billOrderSelect = document.getElementById('billOrderSelect');
    if (billOrderSelect) {
        billOrderSelect.addEventListener('change', calculateBill);
    }
}

function updateBillingOrderSelect() {
    const orderSelect = document.getElementById('billOrderSelect');
    if (!orderSelect) return;
    
    orderSelect.innerHTML = '<option value="">Select Order</option>';
    
    // Only show Ready orders for billing
    const readyOrders = appData.orders.filter(order => 
        order.status === 'Ready' || order.status === 'Production');
    
    readyOrders.forEach(order => {
        const option = document.createElement('option');
        option.value = order.id;
        option.textContent = `#${order.id} - ${order.customer} - ${order.items}`;
        option.setAttribute('data-amount', order.amount);
        orderSelect.appendChild(option);
    });
}

function calculateBill() {
    const orderSelect = document.getElementById('billOrderSelect');
    const selectedOption = orderSelect.options[orderSelect.selectedIndex];
    
    if (!selectedOption.value) {
        const billDetails = document.getElementById('billDetails');
        if (billDetails) billDetails.style.display = 'none';
        return;
    }
    
    const amount = parseFloat(selectedOption.getAttribute('data-amount') || 0);
    const subtotal = amount;
    const cgst = subtotal * 0.09;
    const sgst = subtotal * 0.09;
    const total = subtotal + cgst + sgst;
    
    const subtotalEl = document.getElementById('subtotal');
    const cgstEl = document.getElementById('cgst');
    const sgstEl = document.getElementById('sgst');
    const totalAmountEl = document.getElementById('totalAmount');
    const billDetailsEl = document.getElementById('billDetails');
    
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
    if (cgstEl) cgstEl.textContent = `₹${cgst.toLocaleString()}`;
    if (sgstEl) sgstEl.textContent = `₹${sgst.toLocaleString()}`;
    if (totalAmountEl) totalAmountEl.textContent = `₹${total.toLocaleString()}`;
    if (billDetailsEl) billDetailsEl.style.display = 'block';
}

function previewBill() {
    const orderSelect = document.getElementById('billOrderSelect');
    
    if (!orderSelect || !orderSelect.value) {
        showMessage('Please select an order first', 'error');
        return;
    }
    
    // In a real app, this would show a printable preview
    showMessage('Bill preview generated', 'success');
}

function generateAndSendBill() {
    const orderSelect = document.getElementById('billOrderSelect');
    
    if (!orderSelect || !orderSelect.value) {
        showMessage('Please select an order first', 'error');
        return;
    }
    
    const paymentMethodEl = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = paymentMethodEl ? paymentMethodEl.value : 'cash';
    
    // In a real app, this would generate and send the bill
    showMessage(`Bill generated and sent. Payment method: ${paymentMethod}`, 'success');
}

function createNewBill() {
    const billForm = document.getElementById('billForm');
    if (billForm) billForm.reset();
    
    const billDetails = document.getElementById('billDetails');
    if (billDetails) billDetails.style.display = 'none';
}

function viewBillHistory() {
    // In a real app, this would show bill history
    showMessage('Viewing bill history', 'info');
}

function openPaymentGateway(gateway) {
    // In a real app, this would redirect to payment gateway
    showMessage(`Opening ${gateway} payment gateway...`, 'info');
}

// Analytics Module
function initAnalytics() {
    // Add delay to ensure canvases are ready
    setTimeout(() => {
        renderRevenueChart();
        renderFabricChart();
    }, 100);
    
    // Timeframe changes
    const analyticsTimeframe = document.getElementById('analyticsTimeframe');
    if (analyticsTimeframe) {
        analyticsTimeframe.addEventListener('change', () => {
            setTimeout(() => {
                renderRevenueChart();
                renderFabricChart();
            }, 100);
        });
    }
}

function renderRevenueChart() {
    const canvas = document.getElementById('revenueChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart if it exists
    if (revenueChart) {
        revenueChart.destroy();
    }
    
    revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: appData.analytics.salesData.map(item => item.month),
            datasets: [{
                label: 'Revenue',
                data: appData.analytics.salesData.map(item => item.revenue),
                backgroundColor: 'rgba(31, 184, 205, 0.2)',
                borderColor: '#1FB8CD',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '₹' + context.raw.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

function renderFabricChart() {
    const canvas = document.getElementById('fabricChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart if it exists
    if (fabricChart) {
        fabricChart.destroy();
    }
    
    // Create data for popular fabrics
    const fabricData = appData.fabrics.map(fabric => ({
        name: fabric.name.split(' ')[0], // Shorter names for chart
        value: Math.floor(Math.random() * 50) + 10 // Random usage for demo
    }));
    
    fabricChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: fabricData.map(item => item.name),
            datasets: [{
                data: fabricData.map(item => item.value),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function exportReports() {
    // In a real app, this would generate and download reports
    showMessage('Exporting reports...', 'info');
    
    setTimeout(() => {
        showMessage('Reports exported successfully', 'success');
    }, 2000);
}

function downloadReport(reportType) {
    // In a real app, this would download the specific report
    showMessage(`Downloading ${reportType} report...`, 'info');
    
    setTimeout(() => {
        showMessage(`${reportType} report downloaded successfully`, 'success');
    }, 1000);
}

// Staff Management Module
function initStaff() {
    populateStaffTable();
}

function populateStaffTable() {
    const tableBody = document.getElementById('staffTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    appData.staff.forEach(staff => {
        const row = document.createElement('tr');
        
        // Generate random performance for demo
        const performance = Math.floor(Math.random() * 20) + 80;
        let performanceClass = 'success';
        if (performance < 85) performanceClass = 'warning';
        if (performance < 75) performanceClass = 'error';
        
        row.innerHTML = `
            <td>${staff.name}</td>
            <td>${staff.role}</td>
            <td>${staff.experience}</td>
            <td>${staff.phone}</td>
            <td>₹${staff.salary.toLocaleString()}</td>
            <td><span class="status status--${performanceClass}">${performance}%</span></td>
            <td>
                <button class="btn btn--sm btn--secondary" onclick="viewStaffDetails(${staff.id})">Details</button>
                <button class="btn btn--sm btn--secondary" onclick="assignTasks(${staff.id})">Assign</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

function viewStaffDetails(staffId) {
    // In a real app, this would show staff details
    showMessage(`Viewing details for staff #${staffId}`, 'info');
}

function assignTasks(staffId) {
    // In a real app, this would open the task assignment view
    showMessage(`Assigning tasks to staff #${staffId}`, 'info');
}

function addNewStaff() {
    // In a real app, this would open the staff form
    showMessage('Add new staff feature coming soon', 'info');
}

function markAttendance() {
    // In a real app, this would open the attendance form
    showMessage('All staff marked present for today', 'success');
}

// Settings Module
function initSettings() {
    // Add form submit handlers if needed
    const businessForm = document.getElementById('businessSettingsForm');
    if (businessForm) {
        businessForm.addEventListener('submit', (e) => {
            e.preventDefault();
            saveBusinessSettings();
        });
    }
}

function saveBusinessSettings() {
    // In a real app, this would save settings to backend
    showMessage('Business settings updated successfully', 'success');
}

// Utility Functions
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', options);
}

function showMessage(message, type = 'info') {
    const messageContainer = document.getElementById('messageContainer');
    if (!messageContainer) return;
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;
    
    messageContainer.appendChild(messageElement);
    
    // Show with animation
    setTimeout(() => {
        messageElement.classList.add('show');
    }, 10);
    
    // Auto hide after a few seconds
    setTimeout(() => {
        messageElement.classList.remove('show');
        setTimeout(() => {
            if (messageContainer.contains(messageElement)) {
                messageContainer.removeChild(messageElement);
            }
        }, 300);
    }, 5000);
}