export class MoviesMock {
  static get movieDetailMock() {
    return {
      "adult": false,
      "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
      "belongs_to_collection": {
          "id": 230,
          "name": "O Poderoso Chefão: Coleção",
          "poster_path": "/m5SGcKvBWyXxufO0YQxhzaw2f5f.jpg",
          "backdrop_path": "/3WZTxpgscsmoUk81TuECXdFOD0R.jpg"
      },
      "budget": 6000000,
      "genres": [
          {
              "id": 18,
              "name": "Drama"
          },
          {
              "id": 80,
              "name": "Crime"
          }
      ],
      "homepage": "http://www.thegodfather.com/",
      "id": 238,
      "imdb_id": "tt0068646",
      "original_language": "en",
      "original_title": "The Godfather",
      "overview": "Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.",
      "popularity": 86.936,
      "poster_path": "/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg",
      "production_companies": [
          {
              "id": 4,
              "logo_path": "/fycMZt242LVjagMByZOLUGbCvv3.png",
              "name": "Paramount",
              "origin_country": "US"
          },
          {
              "id": 10211,
              "logo_path": null,
              "name": "Alfran Productions",
              "origin_country": "US"
          }
      ],
      "production_countries": [
          {
              "iso_3166_1": "US",
              "name": "United States of America"
          }
      ],
      "release_date": "1972-03-14",
      "revenue": 245066411,
      "runtime": 175,
      "spoken_languages": [
          {
              "english_name": "English",
              "iso_639_1": "en",
              "name": "English"
          },
          {
              "english_name": "Italian",
              "iso_639_1": "it",
              "name": "Italiano"
          },
          {
              "english_name": "Latin",
              "iso_639_1": "la",
              "name": "Latin"
          }
      ],
      "status": "Released",
      "tagline": "Uma oferta que você não vai poder recusar.",
      "title": "O Poderoso Chefão",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 15635
    }
  }

  static get movieResultsMock(){
    return {
      "page": 1,
      "results": [
        {
          "adult": false,
          "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
          "genre_ids": [
              18,
              80
          ],
          "id": 238,
          "original_language": "en",
          "original_title": "The Godfather",
          "overview": "Baseado no best-seller de Mário Puzo, o filme acompanha o percurso de Don Vito Corleone, o patriarca de uma das mais notáveis e importantes famílias da máfia italiana de Nova Iorque.",
          "popularity": 86.936,
          "poster_path": "/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg",
          "release_date": "1972-03-14",
          "title": "O Padrinho",
          "video": false,
          "vote_average": 8.7,
          "vote_count": 15631
        },
        {
          "adult": false,
          "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
          "genre_ids": [
              18,
              80
          ],
          "id": 238,
          "original_language": "en",
          "original_title": "The Godfather",
          "overview": "Baseado no best-seller de Mário Puzo, o filme acompanha o percurso de Don Vito Corleone, o patriarca de uma das mais notáveis e importantes famílias da máfia italiana de Nova Iorque.",
          "popularity": 86.936,
          "poster_path": "/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg",
          "release_date": "1972-03-14",
          "title": "O Padrinho",
          "video": false,
          "vote_average": 8.7,
          "vote_count": 15631
        },
      ]
    }
  }

  static get getVideosMock(){
    return {
      "id": 589761,
        "results": [
          {
            "iso_639_1": "pt",
            "iso_3166_1": "BR",
            "name": "Trailer Oficial Legendado",
            "key": "Sb79EvE-nyg",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": true,
            "published_at": "2021-11-09T15:21:47.000Z",
            "id": "619ab32452dc7f00873802dd"
          }
        ]
    }
  }

  static get getVideosTeaserMock(){
    return {
      "id": 589761,
        "results": [
          {
            "iso_639_1": "pt",
            "iso_3166_1": "BR",
            "name": "Trailer Oficial Legendado",
            "key": "Sb79EvE-nyg",
            "site": "YouTube",
            "size": 1080,
            "type": "Teaser",
            "official": true,
            "published_at": "2021-11-09T15:21:47.000Z",
            "id": "619ab32452dc7f00873802dd"
          }
        ]
    }
  }
}
