var network_data01 = {
  "subnet_nodes": [
    {"subnet": "196.174.168.",
      "ip_addresses": [
      {"ip_address": "196.174.168.14"},
      {"ip_address": "196.174.168.188"},
      {"ip_address": "196.174.168.58"},
    ]},
    {"subnet": "166.24.136.",
      "ip_addresses": [
      {"ip_address": "166.24.136.145"},
      {"ip_address": "166.24.136.45"},
      {"ip_address": "166.24.136.223"},
      {"ip_address": "166.24.136.101"},
      {"ip_address": "166.24.136.15"},
    ]},
    {"subnet": "78.109.74.",
      "ip_addresses": [
      {"ip_address": "78.109.74.95"},
      {"ip_address": "78.109.74.214"},
      {"ip_address": "78.109.74.215"},
      {"ip_address": "78.109.74.56"},
      {"ip_address": "78.109.74.87"},
      {"ip_address": "78.109.74.189"},
      {"ip_address": "78.109.74.104"},
    ]},
    {"subnet": "60.106.93.",
      "ip_addresses": [
      {"ip_address": "60.106.93.55"},
      {"ip_address": "60.106.93.161"},
      {"ip_address": "60.106.93.64"},
    ]},
  ],
  "links": [
    {"ip_links": [
      {"subnet": "196.174.168.", 
       "links": [
        {"source": "196.174.168.", "target": "196.174.168.14"},
        {"source": "196.174.168.", "target": "196.174.168.188"},
        {"source": "196.174.168.", "target": "196.174.168.58"},
      ]},
      {"subnet": "166.24.136.", 
       "links": [
        {"source": "166.24.136.", "target": "166.24.136.145"},
        {"source": "166.24.136.", "target": "166.24.136.45"},
        {"source": "166.24.136.", "target": "166.24.136.223"},
        {"source": "166.24.136.", "target": "166.24.136.101"},
        {"source": "166.24.136.", "target": "166.24.136.15"},
      ]},
      {"subnet": "78.109.74.", 
       "links": [
        {"source": "78.109.74.", "target": "78.109.74.95"},
        {"source": "78.109.74.", "target": "78.109.74.214"},
        {"source": "78.109.74.", "target": "78.109.74.215"},
        {"source": "78.109.74.", "target": "78.109.74.56"},
        {"source": "78.109.74.", "target": "78.109.74.87"},
        {"source": "78.109.74.", "target": "78.109.74.189"},
        {"source": "78.109.74.", "target": "78.109.74.104"},
      ]},
      {"subnet": "60.106.93.", 
       "links": [
        {"source": "60.106.93.", "target": "60.106.93.55"},
        {"source": "60.106.93.", "target": "60.106.93.161"},
        {"source": "60.106.93.", "target": "60.106.93.64"},
      ]},
    ]},
    {"subnet_links": [
      {"source": "196.174.168.", "target": "166.24.136."},
      {"source": "166.24.136.", "target": "78.109.74."},
      {"source": "78.109.74.", "target": "196.174.168."},
      {"source": "196.174.168.", "target": "60.106.93."},
    ]}
  ]
}