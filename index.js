import {} from 'node:dns'
import fs from 'fs'
import http from 'http'
import { gzip, gzipSync } from 'node:zlib'
import axios from 'axios'


export default class Apihub{
    async letterstobinary(plain_string){ //letterstobinary needs NO apikey, just put anything in the apikey option
        const link = "https://letters-to-binary-cccwi5h7lq-uc.a.run.app/?plain_string=plain_string"

        const webby = (await axios.get(link))["data"]
        return webby
    }
    async GetDNSresolver(domain, record_type, options = {"basic_key": "Your-Basic-API-Key"}){
        const link = "https://dns-resolver-cccwi5h7lq-uc.a.run.app/?domain=" + domain + "&type=" + record_type

        const webby = (await axios.get(link, {headers: {Authorization: options["basic_key"]}}))["data"]
        return webby
    }
    async GetDNSreverser(ip, options = {"basic_key": "Your-Basic-API-Key"}){
        const link = "https://dns-reverser-cccwi5h7lq-uc.a.run.app/?ip=" + ip
        const webby = (await axios.get(link, {headers: {Authorization: options["basic_key"]}}))
        return webby
    }
    async Compress_String(string_to_compress, options = {"basic_key": "Your-Basic-API-Key"}){
        const link = "https://compress-query-cccwi5h7lq-uc.a.run.app/?q=" + string_to_compress
        
        const webby = (await axios.get(link, {headers: {Authorization: options["basic_key"]}}))
        return webby
    }
    
    async web_search(search_query, options = {"pro_key": "Your-Pro-API-Key"}){
        const link = "https://web-search-cccwi5h7lq-uc.a.run.app/?q=" + search_query

        const webby = (await axios.get(link, {headers: {Authorization: options["pro_key"]}}))["data"]
        return webby
    }

    async poly_news_summary(polymarket_event_url, options= {"pro_key": "Your-Pro-API-Key"}){
        const link = "https://poly-news-summary-cccwi5h7lq-uc.a.run.app/?polymarket_url=" + polymarket_event_url
        
        const webby = (await axios.get(link, {headers: {Authorization: options["pro_key"]}}))["data"]
        return webby
    }
    async search_summary(search_query, options = {"pro_key": "Your-Pro-API-Key"}){
        const link = "https://search-summary-cccwi5h7lq-uc.a.run.app/?q=" + search_query
        const webby = (await axios.get(link, {Authorization: options["pro_key"]}))["data"]

        return webby
    }
}

const obj = new Apihub()

console.log(obj.binarytoletters("binary string to convert to base 10 UTF-8 letters"))
console.log(obj.letterstobinary("string to convert to binary"))
console.log(obj.GetDNSresolver("some domain like google.com", "TXT", {basic_key: ""}))
console.log(obj.GetDNSreverser("some ip like 192.168.1.1", {basic_key: ""}))
console.log(obj.web_search("some search query"))
console.log(obj.poly_news_summary("polymarket event"))
console.log(obj.search_summary("some search query"))

console.log(plain)