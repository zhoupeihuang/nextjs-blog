export async function fetcher(url, options = {}) {
    try {
      let response;
      if (!options) {
        response = await fetch(url);
      } else {
        response = await fetch(url, options);
      }
      const data = await response.json();// 序列化
      return data;
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }