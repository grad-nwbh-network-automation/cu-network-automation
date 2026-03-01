def get_host(device):
    return device[ ]

cisco_router = {
    'device_type': 'cisco_ios',
    'host': '192.168.1.1',
    'username': 'user',
    'port': 20022,
}
print(get_host(cisco_router))
