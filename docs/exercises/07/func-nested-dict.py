def get_secret(device):
    return device[ ][ ]

cisco_router = {
    'device_type': 'cisco_ios',
    'host': '192.168.1.1',
    'credentials': {
        'password': 'userpass',
        'secret': 'enablepass',
    }
}
print(get_secret(cisco_router))
