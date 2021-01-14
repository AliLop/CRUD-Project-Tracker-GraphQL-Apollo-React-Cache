 import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloLink } from 'apollo-link'

const http = new HttpLink({ uri: 'http://localhost:4000/' })

const delay = setContext(
  request => 
    new Promise((success, fail) => {
      setTimeout(() => {
        success()
      }, 500)
    })
)

const link = ApolloLink.from([
  delay,
  http
])

 const cache = new InMemoryCache()
 const client = new ApolloClient({
   link,
   cache
 })
 
 export default client;





    