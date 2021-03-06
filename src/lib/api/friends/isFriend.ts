import { UserPublicSearchResult } from '../users/UserPublic'
import { FriendshipTypeResponse } from '../users/[id]/FriendshipType'

export function isFriend(user: UserPublicSearchResult): boolean{
	return user.status === FriendshipTypeResponse.AcceptedByYou ||
		user.status === FriendshipTypeResponse.AcceptedByOther
}