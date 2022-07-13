const cds = require('@sap/cds')
const { SMNEWS01 } = cds.entities ('SM.POC')
const axios = require('axios')
const DiscoveryCenterBaseURL = 'https://newsapi.org'


const external = axios.create({
    baseURL: DiscoveryCenterBaseURL
  });

class CatalogService2 extends cds.ApplicationService { init(){

  // Reduce stock of ordered books if available stock suffices
  this.on ('gatherNewsAPI', async req => {
        // Parse and save response data
        try {
            const response = await external.get('/v2/everything?q=smilegate&from=2021-10-01&sortBy=publishedAt&apiKey=e03c5536070c4f979b2d23fa9930de98');
            //console.log(`Fetched ${response.data.d.results.length} BTP Services from Discovery Center.`);
            var btpservices = response.data.articles
            var btpcount = response.data.totalResults

            console.log(btpcount)    
            var parsedBTPServices = btpservices.map( btpservice => {
              return { 
                          author: btpservice.author, 
                          title: btpservice.title,
                          description: btpservice.description,
                          url: btpservice.url,
                          publishedAt: btpservice.publishedAt,
                          urltoimage: btpservice.urlToImage,
                          pdate: btpservice.publishedAt.substring(0,10)
                      }
          })
          console.log(parsedBTPServices)

          // Commit the data to Database
          let SMNEWS01D = await SELECT.from `SMNEWS01`
          console.log(SMNEWS01D)


          let dbcommit = await INSERT.into (SMNEWS01).entries(parsedBTPServices)
          console.log(dbcommit)

        } catch (error) {
          console.error(error);
        }  
   }),
   this.on ('gatherNewsAPIKO', async req => {
        // Parse and save response data
        try {
            const uristring = '/v2/everything?q=' + encodeURI('스마일게이트') + ' &from=2021-10-01&sortBy=publishedAt&apiKey=e03c5536070c4f979b2d23fa9930de98';
            //const response = await external.get('/v2/everything?q=스마일게이트&from=2021-10-01&sortBy=publishedAt&apiKey=e03c5536070c4f979b2d23fa9930de98');
            const response = await external.get(uristring);
            //console.log(`Fetched ${response.data.d.results.length} BTP Services from Discovery Center.`);
            var btpservices = response.data.articles
            var btpcount = response.data.totalResults

            console.log(btpcount)    
            var parsedBTPServices = btpservices.map( btpservice => {
              return { 
                          author: btpservice.author, 
                          title: btpservice.title,
                          description: btpservice.description,
                          url: btpservice.url,
                          publishedAt: btpservice.publishedAt,
                          urltoimage: btpservice.urlToImage,
                          pdate: btpservice.publishedAt.substring(0,10)
                      }
          })
          console.log(parsedBTPServices)

          // Commit the data to Database
          let SMNEWS01D = await SELECT.from `SMNEWS01`
          console.log(SMNEWS01D)


          let dbcommit = await INSERT.into (SMNEWS01).entries(parsedBTPServices)
          console.log(dbcommit)

        } catch (error) {
          console.error(error);
        }  
  }),
  this.on ('gatherNewsAPI1D', async req => {
        // Parse and save response data
        try {
            const {sdate} = req.data
            const uristring = '/v2/everything?q=smilegate&from=' + sdate + '&to=' + sdate + '&sortBy=publishedAt&apiKey=e03c5536070c4f979b2d23fa9930de98';
            const response = await external.get(uristring);
            //const response = await external.get('/v2/everything?q=smilegate&from=2021-10-01&sortBy=publishedAt&apiKey=e03c5536070c4f979b2d23fa9930de98');
            //console.log(`Fetched ${response.data.d.results.length} BTP Services from Discovery Center.`);
            var btpservices = response.data.articles
            var btpcount = response.data.totalResults

            console.log(btpcount)    
            var parsedBTPServices = btpservices.map( btpservice => {
              return { 
                          author: btpservice.author, 
                          title: btpservice.title,
                          description: btpservice.description,
                          url: btpservice.url,
                          publishedAt: btpservice.publishedAt,
                          urltoimage: btpservice.urlToImage,
                          pdate: btpservice.publishedAt.substring(0,10)
                      }
          })
          console.log(parsedBTPServices)

          // Commit the data to Database
          let SMNEWS01D = await SELECT.from `SMNEWS01`
          console.log(SMNEWS01D)


          let dbcommit = await INSERT.into (SMNEWS01).entries(parsedBTPServices)
          console.log(dbcommit)

        } catch (error) {
          console.error(error);
        }  
   }),
    this.on ('gatherNewsAPI1DKO', async req => {
        // Parse and save response data
        try {
            const {sdate} = req.data
            const uristring = '/v2/everything?q='  + encodeURI('스마일게이트') + '&from=' + sdate + '&to=' + sdate + '&sortBy=publishedAt&apiKey=e03c5536070c4f979b2d23fa9930de98';
            const response = await external.get(uristring);
            //const response = await external.get('/v2/everything?q=smilegate&from=2021-10-01&sortBy=publishedAt&apiKey=e03c5536070c4f979b2d23fa9930de98');
            //console.log(`Fetched ${response.data.d.results.length} BTP Services from Discovery Center.`);
            var btpservices = response.data.articles
            var btpcount = response.data.totalResults

            console.log(btpcount)    
            var parsedBTPServices = btpservices.map( btpservice => {
              return { 
                          author: btpservice.author, 
                          title: btpservice.title,
                          description: btpservice.description,
                          url: btpservice.url,
                          publishedAt: btpservice.publishedAt,
                          urltoimage: btpservice.urlToImage,
                          pdate: btpservice.publishedAt.substring(0,10)
                      }
          })
          console.log(parsedBTPServices)

          // Commit the data to Database
          let SMNEWS01D = await SELECT.from `SMNEWS01`
          console.log(SMNEWS01D)


          let dbcommit = await INSERT.into (SMNEWS01).entries(parsedBTPServices)
          console.log(dbcommit)

        } catch (error) {
          console.error(error);
        }  
   })   
  // Add some discount for overstocked books
  return super.init()
  
}}

module.exports = { CatalogService2 }  