def list_hosts(devices):
    for device in devices:
        print( )

devices = [
    {'device_type': 'cisco_ios', 'host': '192.168.1.1'},
    {'device_type': 'cisco_ios', 'host': '192.168.1.2'},
    {'device_type': 'juniper',   'host': '10.0.0.1'},
]
list_hosts(devices)
