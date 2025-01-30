from bs4 import BeautifulSoup
import requests
import json

def ScrapeData(URL):
    PageToScrape = URL
    soup = BeautifulSoup(PageToScrape,'html.parser')


