const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export const query = async (url: string) => {
  try {
    const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`
      }
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    
    return res.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}