const sideMenu =document.querySelector("aside");
const menuBtn =document.querySelector("#menu-btn");
const closeBtn =document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = "none";
})

// change theme
themeToggler.addEventListener('click' , () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
}) 


// filling in orders in the table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.RevenueSource}</td>
    <td>${order.Numbers}</td>
    <td class="${order.Aprovals === 'Declined' ? 'danger' : order.Aprovals === 'Aproved' ? 'success' : order.Aprovals === 'pending' ? 'warning' : 'warning'}">${order.Aprovals}</td>
    <td>${order.Collections}</td>
    <td class="primary">Details</td>
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});