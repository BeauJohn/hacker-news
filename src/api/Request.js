const requestHN = (endpoint, { signal } = {}) => {
   return fetch(`https://hacker-news.firebaseio.com/v0/${endpoint}.json`, {
      signal
   });
};

export const getPosts = async (endpoint, { signal }, limiter) => {
   try {
      const response = await requestHN(endpoint, { signal });
      const data = await response.json();
      return getItems(data, { signal }, limiter);
   } catch (error) {
      console.log(error);
   }
};

export const getItems = async (items, { signal }, limiter = 30) => {
   try {
      let postPromises = [];
      const limit = items.length < limiter ? items.length : limiter;

      for (let i = 0; i < limit; i++) {
         const id = items[i];
         postPromises.push(requestHN(`item/${id}`, { signal }));
      }

      const responses = await Promise.all(postPromises);
      const posts = await Promise.all(responses.map((post) => post.json()));
      return posts;
   } catch (error) {
      console.log(error);
   }
};

export const getUser = async (userName, { signal }, limiter) => {
   try {
      const response = await requestHN(`user/${userName}`, { signal });
      const user = await response.json();
      const items = await getItems(user.submitted, { signal }, limiter);
      return { ...user, submitted: items };
   } catch (error) {
      console.log(error);
   }
};
