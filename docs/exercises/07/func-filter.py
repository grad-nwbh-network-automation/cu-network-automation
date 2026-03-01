def find_cisco(devices):
    result = []
    for device in devices:
        if  :
            result.append(device)
    return result

devices = [
    {'device_type': 'cisco_ios', 'host': '192.168.1.1'},
    {'device_type': 'juniper',   'host': '10.0.0.1'},
    {'device_type': 'cisco_ios', 'host': '192.168.1.2'},
]
cisco = find_cisco(devices)
for d in cisco:
    print(d['host'])
