fetch('data/prices.json')
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);

        var metroreshalf = jsObject.pricechart[0].metro[0].res[0].halfday;
        var metroresfull = jsObject.pricechart[0].metro[0].res[1].fullday;
        var metrowalkhalf = jsObject.pricechart[0].metro[1].walk[0].halfday;
        var metrowalkfull = jsObject.pricechart[0].metro[1].walk[1].fullday;
        var dioreshalf = jsObject.pricechart[1].dio[0].res[0].halfday;
        var dioresfull = jsObject.pricechart[1].dio[0].res[1].fullday;
        var diowalkhalf = jsObject.pricechart[1].dio[1].walk[0].halfday;
        var diowalkfull = jsObject.pricechart[1].dio[1].walk[1].fullday;
        var pcxreshalf = jsObject.pricechart[2].pcx150[0].res[0].halfday;
        var pcxresfull = jsObject.pricechart[2].pcx150[0].res[1].fullday;
        var pcxwalkhalf = jsObject.pricechart[2].pcx150[1].walk[0].halfday;
        var pcxwalkfull = jsObject.pricechart[2].pcx150[1].walk[1].fullday;
        var atvreshalf = jsObject.pricechart[3].atv[0].res[0].halfday;
        var atvresfull = jsObject.pricechart[3].atv[0].res[1].fullday;
        var atvwalkhalf = jsObject.pricechart[3].atv[1].walk[0].halfday;
        var atvwalkfull = jsObject.pricechart[3].atv[1].walk[1].fullday;
        var jeep2reshalf = jsObject.pricechart[4].jeep2[0].res[0].halfday;
        var jeep2resfull = jsObject.pricechart[4].jeep2[0].res[1].fullday;
        var jeep2walkhalf = jsObject.pricechart[4].jeep2[1].walk[0].halfday;
        var jeep2walkfull = jsObject.pricechart[4].jeep2[1].walk[1].fullday;
        var jeep4reshalf = jsObject.pricechart[5].jeep4[0].res[0].halfday;
        var jeep4resfull = jsObject.pricechart[5].jeep4[0].res[1].fullday;
        var jeep4walkhalf = jsObject.pricechart[5].jeep4[1].walk[0].halfday;
        var jeep4walkfull = jsObject.pricechart[5].jeep4[1].walk[1].fullday;





        document.getElementById('metroreshalf').textContent = "$" + metroreshalf;
        document.getElementById('metroresfull').textContent = "$" + metroresfull;
        document.getElementById('metrowalkhalf').textContent = "$" + metrowalkhalf;
        document.getElementById('metrowalkfull').textContent = "$" + metrowalkfull;
        document.getElementById('dioreshalf').textContent = "$" + dioreshalf;
        document.getElementById('dioresfull').textContent = "$" + dioresfull;
        document.getElementById('diowalkhalf').textContent = "$" + diowalkhalf;
        document.getElementById('diowalkfull').textContent = "$" + diowalkfull;
        document.getElementById('pcxreshalf').textContent = "$" + pcxreshalf;
        document.getElementById('pcxresfull').textContent = "$" + pcxresfull;
        document.getElementById('pcxwalkhalf').textContent = "$" + pcxwalkhalf;
        document.getElementById('pcxwalkfull').textContent = "$" + pcxwalkfull;
        document.getElementById('atvreshalf').textContent = "$" + atvreshalf;
        document.getElementById('atvresfull').textContent = "$" + atvresfull;
        document.getElementById('atvwalkhalf').textContent = "$" + atvwalkhalf;
        document.getElementById('atvwalkfull').textContent = "$" + atvwalkfull;
        document.getElementById('jeep2reshalf').textContent = "$" + jeep2reshalf;
        document.getElementById('jeep2resfull').textContent = "$" + jeep2resfull;
        document.getElementById('jeep2walkhalf').textContent = "$" + jeep2walkhalf;
        document.getElementById('jeep2walkfull').textContent = "$" + jeep2walkfull;
        document.getElementById('jeep4reshalf').textContent = "$" + jeep4reshalf;
        document.getElementById('jeep4resfull').textContent = "$" + jeep4resfull;
        document.getElementById('jeep4walkhalf').textContent = "$" + jeep4walkhalf;
        document.getElementById('jeep4walkfull').textContent = "$" + jeep4walkfull;

    });