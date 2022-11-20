// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'kb869wqln9'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-n5y83z1fkwqii1yp.us.auth0.com',            // Auth0 domain
  clientId: 'Mq2b5lnDj0ON96usxhsQ0q671pi7uos6',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
