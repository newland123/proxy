function FindProxyForURL(url, host)
{
  if (isInNet(host, "134.149.0.0", "255.255.255.0")
      || isInNet(host, "10.7.101.0", "255.255.255.0")
      || isInNet(host, "10.7.103.0", "255.255.255.0")
      || isInNet(host, "10.13.0.0", "255.255.0.0")
      || isInNet(host, "10.24.0.0", "255.255.0.0")
      || isInNet(host, "10.23.0.0", "255.255.255.0")
      || isInNet(host, "192.120.101.0", "255.255.255.0")
      || isInNet(host, "10.160.89.0", "255.255.255.0")
      || isInNet(host, "10.160.76.0", "255.255.255.0")) {
    return "PROXY 10.1.6.4:50000";
  }
  
  return "DIRECT";
}
