import requests
from bs4 import BeautifulSoup
import json

data = 'https://www.walmart.com/ip/BestOffice-Mesh-Office-Chair-Desk-Computer-Ergonomic-Adjustable-Stool-Back-Support-Modern-Executive-Rolling-Swivel-Women-Men-Black/108684613?classType=VARIANT&athbdg=L1600&from=/search'

Headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
}

def scrapertesting():
    response = requests.get(data, headers=Headers)  # Send request
    soup = BeautifulSoup(response.text, "html.parser")  # Parse the HTML content with BeautifulSoup
    script_tag = soup.find("script", id="__NEXT_DATA__")  # Locate the script tag

    if not script_tag:
        print("Error: Could not find the JSON data in the page.")
        return

    script_tag_formatted = json.loads(script_tag.string)

    # Extract product data
    product_data = script_tag_formatted['props']['pageProps']['initialData']['data']['product']

    # Extract Product Name
    product_name = product_data.get("name", "No name found")

    # Extract Current Price
    current_price = product_data['priceInfo']['currentPrice'].get('price', 'No price available')

    # Extract Was Price (Original Price) with Fix
    was_price_data = product_data['priceInfo'].get('wasPrice', None)
    was_price = was_price_data.get('price', 'No original price') if isinstance(was_price_data, dict) else 'No original price'

    # Calculate Discount if available
    discount = "No discount available"
    if isinstance(was_price, (int, float)) and isinstance(current_price, (int, float)):
        discount = round(float(was_price) - float(current_price), 2)

    # Extract Other Prices
    all_prices = product_data.get('priceInfo', {})

    # Extract Product Image
    if 'imageInfo' in product_data and 'thumbnailUrl' in product_data['imageInfo']:
        image_url = product_data['imageInfo']['thumbnailUrl']
    elif 'imageMap' in product_data:
        image_url = next(iter(product_data['imageMap'].values()))['imageUrl']
    else:
        image_url = "Image not found"

    # Print the extracted details
    print(f'🔹 Product Name: {product_name}')
    print(f'💲 Current Price: ${current_price}')
    print(f'🔻 Was Price: ${was_price}')
    print(f'💰 Discount: ${discount}')
    print(f'📦 Other Prices: {all_prices}')
    print(f'🖼️ Product Image URL: {image_url}')

scrapertesting()
