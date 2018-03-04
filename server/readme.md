# server side

## Run This?
1. git clone git@github.com:fariswd/jakarta-minor-guide.git
2. cd jakarta-minor-guide/server
3. npm install
4. update .env-temp and fill yours, rename to .env
5. npm run dev
6. server will run on port 3000

## Version
{version}: v1

## HTTP ENDPOINT
### Team
Endpoint | HTTP | Description
---|---|---
{version}/team | POST | Post team (*send me array)
{version}/team | GET | Get all team
{version}/team/:id | GET | Get team details
{version}/team/:id | DELETE | Remove team

### Member
Endpoint | HTTP | Description
---|---|---
{version}/member | POST | Post member (*send me array)
{version}/member | GET | Get all member
{version}/member/:id | GET | Get member details
{version}/member/:id | DELETE | Remove member

## Post Structure
### Team:  
```
[
  {
    name: String,
    logoUrl: String,
    description: String,
    fromCountry: String,
    region: String,
    captain: String,
    leader: String,
    socialMedia: Array,
    sponsor: Array,
    totalEarning: Number,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  ...
]
```

### Member:
```
[
  {
    name: String,
    nick: String,
    birthDate: Date,
    imageUrl: String,
    description: String,
    signatureHero: Array,
    role: Array,
    socialMedia: Array,
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  ...
]
```  

fariswd2018 :rocket:
