var uiScript = document.createElement("script");
uiScript.src = "//code.jquery.com/ui/1.12.1/jquery-ui.js";
document.getElementsByTagName("head")[0].appendChild(uiScript);

var clientShipmentId;
var clientOrderId;
var link = document.createElement("link");
link.href = click2shipJSHost + "/css/style.css?x="+Math.random();
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);


var div = document.createElement("div");
div.className = "popup";

var formHTML = `<form id="shipment-form" method="post" action="">
<div class="upper-bar">
 <p class="Box-info">Box Info </p>
 <p id="selected_items_count"></p>
 <button id="close-form-button" class="modal-cross icon-wm-close-noborder" />
</div>
<div id="productImage" class="image-container"></div>
<div id="fieldset-parent">
<fieldset  id="boxinfo-fieldset">  
  <div class="container container-fluid-outer c2sContainer">
    <div class="row">
        <div class="col-sm-3">     
          <label class="cbt-required box-fields-label" for="BoxDim">Box Dimensions Unit</label>  
        <br />    
         <select name="BoxDim" id="BoxDimUnit" class="box-fields-input" >
            <option selected name="BoxDim" value="CM" class="box-fields-input">CM</option>
            <option name="BoxDim" value="IN" class="box-fields-input">IN</option>
         </select>        
        </div>    
        <div class="col-sm-3">     
         <label class="cbt-required box-fields-label" for="BoxLength">Box Length </label>
        <br />    
         <input type="number" name="BoxLength" id="BoxLength" class="box-fields-input" min="0.01" step="0.01" required />      
        </div> 
        <div class="col-sm-3">     
         <label class="cbt-required box-fields-label" for="BoxWidth">Box Width </label>
        <br />    
         <input type="number" name="BoxWidth" id="BoxWidth" class="box-fields-input" min="0.01" step="0.01" required />   
        </div>  
        <div class="col-sm-3">     
         <label class="cbt-required box-fields-label" for="BoxHeight">Box Height </label>
        <br />    
         <input type="number" name="BoxHeight" id="BoxHeight" class="box-fields-input" min="0.01" step="0.01" required /> 
        </div>          
    </div>  
  </div>        
  <br>
   <div class="container container-fluid-outer c2sContainer">
    <div class="row">
        <div class="col-sm-3">     
         <label class="cbt-required box-fields-label" for="BoxWeightUnit">Box Weight Unit</label>
        <br />    
         <select name="BoxWeightUnit" id="BoxWeightUnit" class="box-fields-input">
          <option selected name="BoxWeightUnit" value="LB" class="box-fields-input">LB</option>
          <option name="BoxWeightUnit" value="OZ" class="box-fields-input">OZ</option>
          <option name="BoxWeightUnit" value="KG" class="box-fields-input">KG</option>
          <option name="BoxWeightUnit" value="GM" class="box-fields-input">GM</option>
         </select>      
        </div>    
        <div class="col-sm-3">     
         <label class="cbt-required box-fields-label" for="BoxWeight">Box Weight </label>
        <br />    
         <input type="number" name="BoxWeight" id="BoxWeight" class="box-fields-input" min="0.01" step="0.01" required />   
        </div>                
    </div>   
   </div>
    
 </fieldset>
<fieldset id="address-fieldset">
    <legend>Pickup Address  </legend>
    <div class="container container-fluid-outer c2sContainer">
     <div class="row">
       <div class="col-sm-6">     
        <label class="cbt-required address-fields-label" for="ContactName">Contact Name </label>
       <br />    
        <input type="text" name="ContactName" id="ContactName" class="address-fields-input" placeholder="Contact Name" required />  
       </div>    
       <div class="col-sm-6">     
        <label class="cbt-required address-fields-label" for="CompanyName">Company Name </label>
       <br />    
        <input type="text" name="CompanyName" id="CompanyName" class="address-fields-input" placeholder="Company Name" required />
       </div>                
     </div>
    </div>             
    <br>    
    <div class="container container-fluid-outer c2sContainer">
     <div class="row">
       <div class="col-sm-6">     
         <label class="cbt-required address-fields-label" for="Address1">Address line 1 </label>
       <br />    
        <input type="text" name="Address1" id="Address1" class="address-fields-input" placeholder="Address line 1" required />
       </div>    
       <div class="col-sm-6">     
        <label class="address-fields-label" for="Address2">Address line 2 </label>
       <br />    
        <input type="text" name="Address2" id="Address2" class="address-fields-input" placeholder="Address line 2" />
       </div>                
     </div>     
    </div>    
    <br>
    <div class="container container-fluid-outer c2sContainer">
     <div class="row">
       <div class="col-sm-6">     
         <label class="cbt-required address-fields-label" for="City">City </label>
       <br />    
        <input type="text" name="City" id="City" class="address-fields-input" placeholder="City" required />
       </div>    
       <div class="col-sm-6">     
        <label class="cbt-required address-fields-label" for="ZipCode">ZipCode </label>
       <br />    
        <input type="text" name="ZipCode" id="ZipCode" class="address-fields-input" placeholder="ZipCode" required />
       </div>                
     </div>
    </div>              
    <br>
    <div class="container container-fluid-outer c2sContainer">
     <div class="row">
       <div class="col-sm-6">     
        <label class="cbt-required  address-fields-label" for="State">State </label>
       <br />    
        <input type="text" name="State" id="State" class="address-fields-input" placeholder="State" required />
       </div>    
       <div class="col-sm-6">     
        <label class="cbt-required  address-fields-label" for="Country">Country </label>
       <br />    
        <input type="text" name="Country" id="Country" class="address-fields-input" placeholder="Country" required />
       </div>                
     </div>
    </div>           
    <br>
    <div class="container container-fluid-outer c2sContainer">
     <div class="row">
       <div class="col-sm-6">     
        <label class="cbt-required  address-fields-label" for="Phone">Phone </label>
       <br />    
        <input type="text" name="Phone" id="Phone" class="address-fields-input" placeholder="Phone" required />
       </div>    
       <div class="col-sm-6">     
        <label class="address-fields-label" for="TaxId">TaxId</label>
       <br />    
        <input type="text" name="TaxId" id="TaxId" class="address-fields-input" placeholder="TaxId"/>
       </div>                
     </div>
    </div>      
    <br>
</fieldset>
</div>

<div class="bottom-bar">
    <p id="api-response"></p>
    <button id="generate-labels-button" class="wm-btn-primary popup-cta">Generate Label</button>
    <button id="download-document-button" class="wm-btn-primary disabled popup-cta">Download Label</button>
</div>

</form>
`;


div.innerHTML = formHTML;
document.getElementsByTagName("body")[0].insertBefore(div, document.getElementsByTagName("body")[0].firstChild);
var filteredArr1;
function createShipment(e) {


    var f = $('#shipment-form')[0];
    if (!f.checkValidity()) {
        console.log('validation errors');
        return false;
    } else {

        console.log('create shipment called');
        var spinner = `
        <div id="shipment-form-spinner">
        </div>`;
        $('.popup').append(spinner);

        $("#shipment-form :input").prop("disabled", true);

        $('#shipment-form').css('opacity', 0.5);

        var boxItems =[];
        // get resultArray from local storage []
        filteredArr1.forEach(function(ele, index, arr) {
            var boxItem = {"sku":ele.sku};
            boxItems.push(boxItem);
        });

        var data = {
            "boxInfo": [{
                "boxDimUom": $("#BoxDimUnit").val(),
                "boxHeight": $("#BoxHeight").val(),
                "boxItems": boxItems,
                "boxWeight": $("#BoxWeight").val(),
                "boxWeightUom": $("#BoxWeightUnit").val(),
                "boxWidth": $("#BoxWidth").val(),
                "boxlength": $("#BoxLength").val()
            }],
            "consignorAddress": {
                "address1": $("#Address1").val(),
                "address2": $("#Address2").val(),
                "city": $("#City").val(),
                "companyName": $("#CompanyName").val(),
                "contactName": $("#ContactName").val(),
                "country": $("#Country").val(),
                "phone": $("#Phone").val(),
                "state": $("#State").val(),
                "taxId": $("#TaxId").val(),
                "zipCode": $("#ZipCode").val()
            },
            "documentFormat": "PDF",
            "insured": false,
            "insuredAmount": 0,
            "pickupAddress": {
                "address1": $("#Address1").val(),
                "address2": $("#Address2").val(),
                "city": $("#City").val(),
                "companyName": $("#CompanyName").val(),
                "contactName": $("#ContactName").val(),
                "country": $("#Country").val(),
                "phone": $("#Phone").val(),
                "state": $("#State").val(),
                "taxId": $("#TaxId").val(),
                "zipCode": $("#ZipCode").val()
            },
            "providerId": 1,
            "providerOrderNumber": "",
            "clientOrderId": document.getElementsByClassName('wm-pono')[0].outerText.substring(4),
            "qtyBoxes": 1,
            "shippingMethod": "STANDARD"
        };
        e.preventDefault();
        console.log("data:",data);
        $.ajax({
            type: 'POST',
            enctype: 'multipart/form-data',
            url: '//172.30.109.136:8443/resource/order/cbt/shipment',
            data: JSON.stringify(data),
            processData: false,
            contentType: false,
            cache: false,
            headers: {
                'Content-Type': 'application/json',
                'wm.bu_id': '1',
                'wm.mart_id': '1',
                'wm.seller_id': '10000014100',
                'Accept': 'application/json'
            },
            timeout: 600000,
            success: function (resp) {
                console.log('SUCCESS : ', resp.data);
                clientShipmentId = resp.data.clientShipmentId;
                clientOrderId = resp.data.clientOrderId;
                setTimeout(function () {
                    $('#api-response').text("Label is generated. Please click Download button to proceed.");
                    $("#shipment-form :input").prop("disabled", false);
                    $("#download-document-button").click(function (e) {
                        e.preventDefault();
                        $('.popup').append(spinner);
                        $("#shipment-form :input").prop("disabled", true);
                        $('#shipment-form').css('opacity', 0.5);
                        $.ajax({
                            url: '//172.30.109.136:8443/resource/order/cbt/shippingDocument?clientShipmentId=' + clientShipmentId + '&documentType=label&partnerId=10000014100&Accept=application/pdf',
                            success: function (resp1) {
                                console.log("resp1 :" + resp1);
                                var blob = new Blob([resp1]);
                                var link = document.createElement('a');
                                link.href = window.URL.createObjectURL(blob);
                                link.download = clientOrderId + "_Label.pdf";
                                link.click();
                                $('#shipment-form-spinner').remove();
                            },
                            error: function (e) {
                                console.log('ERROR : ', e);
                                $('#api-response').css('color','red');
                                $('#api-response').text("There was an error retrieving  the label. Please try again later.");
                            }
                        });
                    });

                    $("#download-document-button").removeClass('disabled');

                    $('#shipment-form-spinner').remove();
                    $('#shipment-form').css('opacity', 1);

                }, 20000);
            },
            error: function (e) {
                $('#api-response').css('color','red');
                $('#api-response').text("The server encountered an error processing the request. Please try again later.");
                console.log('ERROR : ', e);
                $("#shipment-form :input").prop("disabled", false);
                $('#shipment-form-spinner').remove();
                $('#shipment-form').css('opacity', 1);
            }
        });
    }
}

$('#generate-labels-button').click(function (e) {
    // Retrieve
    $('#api-response').text("");
    filteredArr1 = JSON.parse(localStorage.getItem("filteredArr"));
    console.log("retrived value from storage:",filteredArr1);
    createShipment(e);

});

var closePopup = async (e) => {
    result =[];
    e.preventDefault();
    $("#shipment-form")[0].reset();
    dialog.dialog('close');
}
document.getElementById('close-form-button').addEventListener('click', closePopup);

var dialog;
dialog = $(".popup").dialog({
    autoOpen: false,
    height: "auto",
    width: "auto",
    modal: true,
    position: {
        my: "center",
        at: "center",
        of: window
    },
    title: "Create Shipment",
    closeOnEscape: true,
    open: function(event, ui) {
        $('.wm-modal-fp').addClass('gray-out');
    },
    close: function(event, ui) {
        $('.wm-modal-fp').removeClass('gray-out');
    }
});

var crossButton = document.getElementsByClassName("modal-cross")[0];
crossButton.onclick = function () {
    dialog.dialog("close");
};
