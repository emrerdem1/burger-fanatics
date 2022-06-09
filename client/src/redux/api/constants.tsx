export enum ApiTags {
  USER = 'user',
  REVIEW = 'Review',
  RESTAURANT = 'Restaurant',
}

export enum ApiRoutes {
  LOGOUT = '/logout',
  SIGNUP = '/auth/local/register',
  LOGIN = '/auth/local',
  REVIEWS = '/reviews',
  RESTAURANTS = '/restaurants?populate[reviews][populate]=*',
  ///articles?populate[testDZ][populate]=%2A
  //http://localhost:1337/api/restaurants?populate[reviews][populate]=*
  /*
  comment: "yen"
image: "yen"
rating: 2
restaurant: 2
reviewed_by: 2
  */
}
