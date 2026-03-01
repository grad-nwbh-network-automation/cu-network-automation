# a) 3 min

hostname = "switch01"
port = 22
is_active = True
uptime = 99.7

print(f"{hostname} is van type {type(hostname)}")
print(f"{hostname} is van type {type(port)}")
print(f"{is_active} is van type {type(is_active)}")
print(f"{uptime } is van type {type(uptime )}")

# b) 1 min

port_string = "8080"
port_number = int(port_string)

print(port_number % 1000)

# c) 1 min
vlan_id = 150
hostname = "core-sw"

print(f"Device {hostname} is toegewezen aan VLAN {vlan_id}")