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

export async function useFetchUsers() {
  const { data, error, pending } = await useFetch<{ results: User[] }>('https://randomuser.me/api/?results=10');
  return {
    users: data.value ? data.value.results : [],
    error,
    pending
  };
}
