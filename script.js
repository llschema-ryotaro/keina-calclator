'use strict';

function calculate() {
    let adultsPerson = document.getElementsByName('adultspeson');
    let checkValueAdultsPerson = adultsPerson.item(0).value;

    let childsPeson = document.getElementsByName('childspeson');
    let checkValueChildsPeson = childsPeson.item(0).value;



    let cottageRadio = document.getElementsByName('cottage');
    let cottageLen = cottageRadio.length;

    let checkValueCottage = '';

    for (let i = 0; i < cottageLen; i++){
        if (cottageRadio.item(i).checked){
            checkValueCottage = cottageRadio.item(i).dataset.price;
        }
    }





    let bringCampAdultsPeson = document.getElementsByName('bringcampadultspeson');
    let checkValueBringCampAdultsPerson = bringCampAdultsPeson.item(0).value;

    let bringCampChildsPeson = document.getElementsByName('bringcampchildspeson');
    let checkValueBringCampChildsPeson = bringCampChildsPeson.item(0).value;

    let bringCampAmountPrice = Number(checkValueBringCampAdultsPerson) * 3850 + Number(checkValueBringCampChildsPeson) * 2200




    let emptyCampAdultsPeson = document.getElementsByName('emptycampadultspeson');
    let checkValueEmptyCampAdultsPerson = emptyCampAdultsPeson.item(0).value;

    let emptyCampChildsPeson = document.getElementsByName('emptycampchildspeson');
    let checkValueEmptyCampChildsPeson = emptyCampChildsPeson.item(0).value;

    let emptyCampAmountPrice = Number(checkValueEmptyCampAdultsPerson) * 7700 + Number(checkValueEmptyCampChildsPeson) * 5500






    let dateRadio = document.getElementsByName('date');
    let datelen = dateRadio.length;

    let checkValueDate = '';
    for (let i = 0; i < datelen; i++){
        if (dateRadio.item(i).checked){
            checkValueDate = dateRadio.item(i).dataset.price;
        }
    }









    let foodRadio = document.getElementsByName('food');
    let foodLen = foodRadio.length;

    let checkValueAdaltsFood = '';
    let checkValueChildsFood = '';

    for (let i = 0; i < foodLen; i++){
        if (foodRadio.item(i).checked){
            checkValueAdaltsFood = foodRadio.item(i).dataset.adaltsprice;
            checkValueChildsFood = foodRadio.item(i).dataset.childsprice;
        }
    }

    let foodAmountPrice = Number(checkValueAdaltsFood) * Number(checkValueAdultsPerson) + Number(checkValueChildsFood) * Number(checkValueChildsPeson)








    let totalAmountPrice = "";
    totalAmountPrice = Number(checkValueDate) + Number(foodAmountPrice) + Number(bringCampAmountPrice) + Number(checkValueCottage) + Number(emptyCampAmountPrice);

    document.getElementById('totalAmount').value = totalAmountPrice;
}

