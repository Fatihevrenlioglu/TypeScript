import requests

# API Key (Senin API anahtarını buraya yerleştir)
api_key = '52ece52b6f3e469a8ed599c547af1591'

# Kontrol edilecek IP adresleri listesi
ips_for_geolocation = [
    '176.89.248.142', '141.196.24.63', '2a02:4e0:2d48:1584:e035:8a48:fcde:da90',
    '5.27.3.160', '37.120.236.230', '176.238.168.32', '2a02:4e0:2d48:1584:79d6:32b9:bbfd:8252',
    '2a02:4e0:2d48:1584:dcdd:7e6b:89e:5865', '5.25.159.225', '2a02:4e0:2db4:1691:b4c5:77b6:2c95:34e6',
    # Listeyi kısalttım, kalan IP'leri de ekleyebilirsin...
]

# Her bir IP adresini kontrol eden fonksiyon
def check_ip_geolocation(ip):
    url = f"https://api.ipgeolocation.io/ipgeo?apiKey={api_key}&ip={ip}"
    response = requests.get(url)
    return response.json()

# Tüm IP adreslerini kontrol et ve sonuçları yazdır
for ip in ips_for_geolocation:
    try:
        data = check_ip_geolocation(ip)
        print(f"IP Address: {data['ip']}")
        print(f"Country: {data['country_name']}")
        print(f"Region: {data['state_prov']}")
        print(f"City: {data['city']}")
        print("-" * 40)
    except Exception as e:
        print(f"Error retrieving data for {ip}: {e}")
