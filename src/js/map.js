ymaps.ready(init);

    function init(){
        const myMap = new ymaps.Map("map", {
            center: [58.489223, 155.062709],          
            zoom: 4            
        });
        myMap.behaviors.disable('scrollZoom');


        objectManager = new ymaps.ObjectManager({
            clusterize: true,
            gridSize: 32
        });

        myMap.geoObjects.add(objectManager);


        objectManager.add({
                "type": "FeatureCollection",
                "features":[
                    {
                        "type": "Feature",
                        "id": 'Хабаровск',
                        "geometry":{
                            "type": "Point",
                            "coordinates":[48.489223, 135.062709]
                        },                    
                    },
                    {
                        "type": "Feature",
                        "id": 'Петропавловск-Камчатский',
                        "geometry":{
                            "type": "Point",
                            "coordinates":[53.035004, 158.662000]
                        }
                    },
                    {
                        "type": "Feature",
                        "id": 'Якутск',
                        "geometry":{
                            "type": "Point",
                            "coordinates":[62.031828, 129.734945]
                        }
                    },
                    {
                        "type": "Feature",
                        "id": 'Комсомольск-на-Амуре',
                        "geometry":{
                            "type": "Point",
                            "coordinates":[50.552464, 137.022528]
                        }
                    }
                ]
            });

            function viewObject(objectId) {
                    for (let object of document.querySelectorAll('[data-objectId]')) {
                            object.classList.remove('active');
                        }
                    
                    document.querySelector('[data-objectId="'+objectId+'"]').classList.add('active');


                    myMap.setCenter(objectManager.objects.getById(objectId).geometry.coordinates, 15, {checkZoomRange: true});
                }

            objectManager.objects.events.add('click', function (e) {
                    var objectId=e.get('objectId');
                    viewObject(objectId);
                });

            let listArr = [];
            listArr.forEach.call(document.querySelectorAll('[data-objectId]'), function(el) {
                el.addEventListener('click', function() {
                    let objectId=el.getAttribute("data-objectId");
                    viewObject(objectId);
                });
            });

            const srchCt = document.querySelector('.search__city-name');
            const srchBtn = document.querySelector('.search__city-btn');
            const myArr = document.querySelectorAll('.cities-name');
            
            srchBtn.addEventListener('click', function() {
                for (let i=0; i<myArr.length; i++) {
                    if (myArr[i].innerHTML.includes(srchCt.value) & srchCt.value !== "") {
                        myMap.setZoom(15); 
                        myMap.setCenter(objectManager.objects.getById(myArr[i].innerHTML).geometry.coordinates, 15, {checkZoomRange: true });

                        for (let object of document.querySelectorAll('[data-objectId]')) {
                            object.classList.add('hidden');                            
                            document.querySelector('[data-objectId="'+srchCt.value+'"]').classList.remove('hidden');
                            }
                        }}
                    if (srchCt.value === "") {
                        myMap.setZoom(4);
                        myMap.setCenter([58.489223, 155.062709]);
                    for (let object of document.querySelectorAll('[data-objectId]')) {
                            object.classList.remove('hidden');}
                        }
                });
};
