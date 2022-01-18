
    ymaps.ready(init);
    function init(){
        const myMap = new ymaps.Map("map", {
            center: [58.489223, 155.062709],          
            zoom: 4
            
        });
        myMap.behaviors.disable('scrollZoom');
    

        
// масштабирование при нажатии на метку
const myPlacemark0 = new ymaps.Placemark([48.489223, 135.062709]);
  myPlacemark0.events.add("click", function(){
  myMap.setZoom( 15 );
  myMap.setCenter([48.489223, 135.062709]);
});

const myPlacemark = new ymaps.Placemark([53.035004, 158.662000]);
  myPlacemark.events.add("click", function(){
  myMap.setZoom(15);
  myMap.setCenter([53.035004, 158.662000]);
});
const myPlacemark2 = new ymaps.Placemark([62.031828, 129.734945]);
myPlacemark2.events.add("click", function(){
  myMap.setZoom(15);
  myMap.setCenter([62.031828, 129.734945]);
});
const myPlacemark3 = new ymaps.Placemark([50.552464, 137.022528]);
myPlacemark3.events.add("click", function(){
  myMap.setZoom(15);
  myMap.setCenter([50.552464, 137.022528]);
});


myMap.geoObjects.add(myPlacemark0); 
myMap.geoObjects.add(myPlacemark); 
myMap.geoObjects.add(myPlacemark2); 
myMap.geoObjects.add(myPlacemark3);






const srchCt = document.querySelector('.search__city-name');
const srchBtn = document.querySelector('.search__city-btn');
const srchCityKhab = document.querySelector('.one');
const srchCityPK = document.querySelector('.tow');
const srchCityYak = document.querySelector('.three');
const srchCityKoms = document.querySelector('.four');
const Arr = [srchCityKhab, srchCityPK, srchCityYak, srchCityKoms];

srchCityKhab.addEventListener('click', function(){
  myMap.setZoom(15);
  myMap.setCenter([48.489223, 135.062709]);
 
});

srchCityPK.addEventListener('click', function(){
  myMap.setZoom(15);
  myMap.setCenter([53.035004, 158.662000]);
});

srchCityYak.addEventListener('click', function(){
  myMap.setZoom(15);
  myMap.setCenter([62.031828, 129.734945]);
});

srchCityKoms.addEventListener('click', function(){
  myMap.setZoom(15);
  myMap.setCenter([50.552464, 137.022528]);
});



srchBtn.addEventListener('click', function showMap(){
    if (srchCt.value === "Хабаровск" ) {
        myMap.setZoom(15);
        myMap.setCenter([48.489223, 135.062709]);
        srchCityPK.classList.add('hidden');
        srchCityYak.classList.add('hidden');
        srchCityKoms.classList.add('hidden');
        srchCityKhab.classList.remove('hidden');
    }  
    if (srchCt.value === "Петропавловск" ) {
        myMap.setZoom(15);
        myMap.setCenter([53.035004, 158.662000]);
        srchCityKhab.classList.add('hidden');
        srchCityYak.classList.add('hidden');
        srchCityKoms.classList.add('hidden');
        srchCityPK.classList.remove('hidden');
    } if (srchCt.value === "Якутск") {
        myMap.setZoom(15);
        myMap.setCenter([62.031828, 129.734945]);
        srchCityYak.classList.remove('hidden');
        srchCityKhab.classList.add('hidden');
        srchCityPK.classList.add('hidden');
        srchCityKoms.classList.add('hidden');
    } if (srchCt.value === "Комсомольск") {
        myMap.setZoom(15);
        myMap.setCenter([62.031828, 129.734945]);
        srchCityKhab.classList.add('hidden');
        srchCityPK.classList.add('hidden');
        srchCityYak.classList.add('hidden');
        srchCityKoms.classList.remove('hidden');
    } if (srchCt.value === "") {
        srchCityKhab.classList.remove('hidden');
        srchCityPK.classList.remove('hidden');
        srchCityYak.classList.remove('hidden');
        srchCityKoms.classList.remove('hidden');
        myMap.setZoom(4);
        myMap.setCenter([58.489223, 155.062709]);
    } 

    
//     srchCt.addEventListener('keydown', function(e) {
//     if (e.keyCode === 13) {

//       showMap();
//     }
//   });
});
    // srchCt.addEventListener('keydown', function (evt){
    //     if (evt.KeyCode == 13) {
    //         console.log('jeifdje');
    //         showMap();        }
    // })
};




//  ymaps.ready(int);
// function int() {
//     var suggestView1 = new ymaps.SuggestView('suggest');
//     var arr= [document.querySelectorAll('.cities-name')];
// var find = function (arr, find) {
//         return arr.filter(function (value) {
//             return (value + "").toLowerCase().indexOf(find.toLowerCase()) != -1;
//         });
//     };

// var myProvider = {
//     suggest: function (request, options) {
//         var res = find(arr, request),
//             arrayResult = [],
//             results = Math.min(options.results, res.length);
//         for (var i = 0; i < results; i++) {
//             arrayResult.push({displayName: res[i], value: res[i]})
//         }
//         return ymaps.vow.resolve(arrayResult);
//     }
// }
// var suggestView = new ymaps.SuggestView('suggest', {provider: myProvider, results: 3});
// };