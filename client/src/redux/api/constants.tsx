export enum ApiTags {
  USER = 'User',
  RATING = 'Rating',
  REVIEW = 'Review',
  RESTAURANT = 'Restaurant',
}

export enum ApiRoutes {
  LOGOUT = '/logout',
  SIGNUP = '/auth/local/register',
  LOGIN = '/auth/local',
  RATING = '/ratings',
  REVIEWS = '/reviews',
  RESTAURANTS = '/restaurants?populate[reviews][populate]=*',
}
