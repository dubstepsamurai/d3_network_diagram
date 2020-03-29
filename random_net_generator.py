import sys
from random import randint

subnet_array = []

for subnet in range(0, 4):
	subnet = ""
	for i in range(0, 3):
		subnet += str(randint(10, 240)) + "."
	subnet_array.append({"subnet": subnet, "ip_array": []})
	for node in range(3, randint(5, 10)):
		node = str(randint(10, 240))
		subnet_array[-1].get("ip_array").append(subnet + node)
		
print(subnet_array)

id = input('ID string for this network: ')
output_file = open('data/network_data' + id + '.js', 'w')

output_file.write('var network_data' + id + ' = {\n')
output_file.write('  \"subnet_nodes\": [\n')
for subnet in subnet_array:
	output_file.write('    {\"subnet\": \"' + subnet.get("subnet") + '\",\n')
	output_file.write('      \"ip_addresses\": [\n')
	for ip in subnet.get("ip_array"):
		output_file.write('      {\"ip_address\": \"' + ip + '\"},\n')
	output_file.write('    ]},\n')
output_file.write('  ],\n')

output_file.write('  \"links\": [\n')
output_file.write('    {\"ip_links\": [\n')
for subnet in subnet_array:
	output_file.write('      {"subnet": "' + subnet.get("subnet") + '", \n')
	output_file.write('       "links": [\n')
	for ip in subnet.get("ip_array"):
		output_file.write('        {\"source\": \"' + subnet.get("subnet") + '\", \"target\": \"' + ip + '\"},\n')
	output_file.write('      ]},\n')
output_file.write('    ]},\n')
output_file.write('    {\"subnet_links\": [\n')
output_file.write('      {\"source\": \"' + subnet_array[0].get("subnet") + '\", \"target\": \"' + subnet_array[1].get("subnet") + '\"},\n')
output_file.write('      {\"source\": \"' + subnet_array[1].get("subnet") + '\", \"target\": \"' + subnet_array[2].get("subnet") + '\"},\n')
output_file.write('      {\"source\": \"' + subnet_array[2].get("subnet") + '\", \"target\": \"' + subnet_array[0].get("subnet") + '\"},\n')
output_file.write('      {\"source\": \"' + subnet_array[0].get("subnet") + '\", \"target\": \"' + subnet_array[3].get("subnet") + '\"},\n')
output_file.write('    ]}\n')
output_file.write('  ]\n')
output_file.write('}')