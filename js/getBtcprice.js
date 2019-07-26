function getbtcp() {
    // 获取比特币价格
    var btcp = document.getElementById("#btcprice");
    btcp.css("color","red");
    $.getJSON("https://blockchain.info/zh-cn/ticker", function (data) {
        btcp.html(data.CNY.last);
        btcp.css("color","black")
        // console.log(data)
    });
}

var id = setInterval(getbtcp,1000);