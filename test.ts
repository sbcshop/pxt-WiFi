{
    WiFi.connectToWiFi()
    basic.pause(3000)
    WiFi.connectToWiFiNetwork("SSID", "key")
    WiFi.executeAtCommand("ATE0", 1000)
    WiFi.changeHttpMethodWaitPeriod(500)
    WiFi.executeHttpMethod(
        HttpMethod.GET,
        "blynk-cloud.com",
        80,
        "/14dabda3551b4dd5ab46464af582f7d2/update/A0?value=205"
    )
    WiFi.writePinValue(
        "510",
        "A0",
        "14dabda3551b4dd5ab46464af582f7d2"
    )
    let pinValue = "Pin A0:"
        + WiFi.newline()
        + WiFi.readPinValue(
            "A0",
            "14dabda3551b4dd5ab46464af582f7d2"
        )
    WiFi.disconnectFromWiFiNetwork()
}
