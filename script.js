var btn_nav_open = document.getElementById('icon-menu');
var btn_nav_close = document.getElementById('icon-close-menu');

var modal = document.querySelector('.modal-mobil');
btn_nav_open.addEventListener('click', function () {
    modal.style.display = "flex"
})

btn_nav_close.addEventListener('click', function () {
    modal.style.display = "none"
})

var array = ['features', 'company']

array.forEach(element => {
    document.getElementById(`${element}-mobil`).addEventListener('click', function () {
        var component = document.querySelector(`.modal-mobil .dropdown__${element}--mobil`);
        if (component.style.display == "block") {
            component.style.display = "none"
        } else {
            component.style.display = "block"
        }
    
    })
});

array.forEach(element => {
    document.getElementById(`${element}-desktop`).addEventListener('click', function () {
        var component = document.querySelector(`.nav .dropdown__${element}`);
        if (component.style.display == "block") {
            component.style.display = "none"
        } else {
            component.style.display = "block"
        }
    
    })
});


// document.getElementById('features-mobil').addEventListener('click', function () {
//     var component_features_mobil = document.querySelector(".modal-mobil .dropdown__features--mobil");
//     if (component_features_mobil.style.display == "block") {
//         component_features_mobil.style.display = "none"
//     } else {
//         component_features_mobil.style.display = "block"
//     }

// })


// document.getElementById('company-mobil').addEventListener('click', function () {
//     var component_company_mobil = document.querySelector(".modal-mobil .dropdown__company--mobil");
//     if (component_company_mobil.style.display == "block") {
//         component_company_mobil.style.display = "none"
//     } else {
//         component_company_mobil.style.display = "block"
//     }
// })

// features-desktop