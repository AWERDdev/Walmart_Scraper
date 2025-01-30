from bs4 import BeautifulSoup

def ScrapeData(URL):
    PageToScrape = URL
    soup = BeautifulSoup(PageToScrape,'html.parser')


