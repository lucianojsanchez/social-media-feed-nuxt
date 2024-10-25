export interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    thumbnail: string;
  };
}

export interface Post {
  image: string;
  owner: string;
}

export function useFetchUsers() {
  const { data, error, pending } = useFetch<{ results: User[] }>(
    "https://randomuser.me/api/?results=40"
  );

  return {
    users: data.value ? data.value.results : [],
    error,
    pending,
  };
}

function getRandomImageUrl(): string {
  const randomId = Math.floor(Math.random() * 100);
  return `https://picsum.photos/id/${randomId}/1024/736`;
}

export function useGeneratePost(users: User[]): Post[] {
  if (users.length === 0) return [];
  return users.map((user) => ({
    user,
    image: getRandomImageUrl(),
    owner: `${user.name.first} ${user.name.last}'s post`,
  }));
}
