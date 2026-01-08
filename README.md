# APIhub - Browse Different APIs

# pricing lists

    1. Free ($0) - letters-to-binary API, binary-to-letters API

    2. Basic ($0.99 per unlimited key)  - dns_reverse API, dns_resolver API, compress_query API
    Basic Key Payment Link (onetime payment for each basic key): https://buy.stripe.com/00w00i1QK59B3O89VO6kg06

    3. Pro ($1.99 per unlimited key) - poly_news_summary API, search_summary API, web_search API
    Pro Key Payment Link (onetime payment for each pro key): https://buy.stripe.com/7sY5kCdzs59B4Scfg86kg07

# Get Started - APIs

NPM Package Functions: 

initization:

    npm i apihub

    const obj = new apihub()

letters_to_binary API:

    console.log(obj.letterstobinary("string-to-convert"))


cURL REST APIs: 

letters_to_binary API: 

```curl -X GET https://letters-to-binary-cccwi5h7lq-uc.a.run.app/?plain_string=plain_string```

dns_resolver API: 

```curl -X GET https://dns-resolver-cccwi5h7lq-uc.a.run.app/?domain=google.com&type=txt \ -H "Authorization: Your-Basic-API-Key"``` 

dns_reverse API: 

```curl -X GET https://dns-reverser-cccwi5h7lq-uc.a.run.app/?domain=google.com&type=TXT \ -H "Authorization: Your-Basic-API-Key"```

compress_query API: 

```curl -X GET https://compress-query-cccwi5h7lq-uc.a.run.app/?q=compress_string \ -H "Authorization: Your-Basic-API-Key"```

web_search API: 

```curl -X GET https://web-search-cccwi5h7lq-uc.a.run.app/?q=search-query \ -H "Authorization: Your-Pro-API-Key"```

poly_news_summary API: 

```curl -X GET https://poly-news-summary-cccwi5h7lq-uc.a.run.app/?polymarket_url=event_url \ -H "Authorization: Your-Pro-API-Key"```

search_summary API: 

```curl -X GET https://search-summary-cccwi5h7lq-uc.a.run.app/?q=search-query \ -H "Authorization: Your-Pro-API-Key"```



# APIhub Pricing and APIs: 

free (no API key needed):

    letters-to-binary API (the API turns UTF-8 letters strings into base2 binary strings)
    
    binary-to-letters API (the API turns binary base2 string to UTF-8 letters strings)

basic (basic API key required for $0.99 per key):
    
    dns_reverse API (enter a IP to see if it has a DNS host), 
    
    dns_resolver API (enter a Domain Name to find a DNS records),'
    
    compress_query API (enter a String to compress using gzip)

pro (pro API key required for $1.99 per key):
        
    web_search API (this api searches google search API, brave search API, wikipedia search API), 
     
    poly_news_summary API (enter a polymarket event URL then it ranks every question with a score of 0 to 10, 0 = not likely and 10 is very likely), 
     
    search_summary API (uses the web_search API and summaries every search engine into one 100 word summary)
