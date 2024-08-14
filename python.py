
import requests
from bs4 import BeautifulSoup

url = 'https://malatyakuyumcular.net/'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Örnek olarak tabloyu bulup verileri çekelim
table = soup.find('table', {'class': 'table-class'})  # Tablo sınıfını kontrol edin
rows = table.find_all('tr')

for row in rows:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    print(cols)