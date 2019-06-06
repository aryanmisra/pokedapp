import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const ANIMALS = [
  {
    id: 'bulbasaur',
    name: 'bulbasaur',
    superpower: 'Grass, Poison'
  },
  {
    id: 'charmander',
    name: 'charmander',
    superpower: 'Fire'
  },
  {
    id: 'squirtle',
    name: 'squirtle',
    superpower: 'Water'
  }]

export const TERRITORIES = [
  {
    id: 'canada',
    name: 'canada',
    superpower: 'Eh!'
  },
  {
    id: 'france',
    name: 'France',
    superpower: 'I surrender!'
  },
  {
    id: 'guatemala',
    name: 'Guatemala',
    superpower: 'This is guatemala.'
  }
]

export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


export const OTHER_KINGDOMS = [
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'larry.id'
  },
  {
    app: 'http://localhost:3001',
    ruler: 'larz.id'
  },
  {
    app: 'https://decentralised-islands.netlify.com',
    ruler: 'yannael_leborgne.id'
  },
  {
      app: 'https://thirsty-jang-0c0a17.netlify.com',
      ruler: 'ma1222042.id.blockstack'
  }
]
