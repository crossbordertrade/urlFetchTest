//main jss
var container = document.getElementsByClassName("wm-modal-btn-container");
//var click2shipJSHost = '//click2ship.qa.crossbordertrade.qa.walmart.com';
var click2shipJSHost = 'http://localhost';

if (typeof container !== 'undefined' && container.length > 0) {
    console.log("container :" + container);

    //importing form popup
    var imported = document.createElement('script');
    imported.src = click2shipJSHost + '/javascript/formPopUp.js?x='+Math.random();
    document.head.appendChild(imported);

    var createShipmentButton = document.createElement("Button");
    createShipmentButton.innerHTML = "Create Shipment";
    createShipmentButton.id = "create-shipment-button";
    createShipmentButton.className = "wm-btn-primary mgn-lft progress-btn c2sCreateShipmentButton";
    createShipmentButton.disabled = false;

    var buttonContainer = container[0];

    if(buttonContainer.getElementsByClassName("wm-btn-primary ").length == 1){
        buttonContainer.appendChild(createShipmentButton);
    }

    createShipmentButton.onclick = function () {
        $('#api-response').text("");
        getItemDetails();
    };

    var result = [];
    var filteredArr =[];

    function getItemDetails() {

        // this is triggered when check-box selected
        $($('.ui-grid-canvas')[1]).find("input[type=checkbox]").each(function (index, ele) {
            var sku = $($($(ele).parent().parent().parent()).children()[3]).children().text();
            var status = $($($(ele).parent().parent().parent()).children()[8]).children().find(":selected").text();
            var prodName = $($($(ele).parent().parent().parent()).children()[2]).children().text();
            var prodSrc = $($($(ele).parent().parent().parent()).children()[2]).children().find('img').attr('src');
            var UPC = $($($(ele).parent().parent().parent()).children()[1]).children().text();

            var value = {sku: sku, prodName: prodName, prodSrc: prodSrc, UPC: UPC, status: status};
            if ($(this).prop('checked') === true) {
                if (status === "Acknowledged")
                    result.push(value);
            } else {
                if (result.length) {
                    result.forEach(function (ele, index, arr) {
                        if (ele.sku === sku) {
                            arr.splice(index, 1);
                            return;
                        }
                    });
                }

            }
        });

        filteredArr = result.reduce(a, []);

        function a(acc, current) {
            const x = acc.find(item => item.sku === current.sku);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }

        console.log("final array click2Ship:" ,filteredArr);
        var htmlStr = "";
        filteredArr.forEach(function (value,index,array) {
            htmlStr += "<div class= 'image-box'>";
            htmlStr += "<img src=" + filteredArr[index].prodSrc + " class= ''" +
                " />";
            htmlStr += "<div>";
            htmlStr += "<div><p>" + filteredArr[index].prodName + "</p></div>";
            htmlStr += "<div><p>" + "UPC: " + filteredArr[index].UPC + "</p></div>";
            htmlStr += "</div>";
            htmlStr += "</div>";

        });
        $("#productImage").html(htmlStr);

        $("#selected_items_count").text("(" + filteredArr.length + " item(s)"+ ")");

        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("filteredArr", JSON.stringify(filteredArr));
        } else {
            alert("Sorry, your browser does not support Web Storage...");
        }


        if (filteredArr.length) {
            document.getElementsByClassName("wm-main-wrapper")[0].style.display = "none";
            dialog.dialog("open");
        } else {
            alert("Please select at least order line whose status is in Acknowledged ");
        }


    }
}
;
