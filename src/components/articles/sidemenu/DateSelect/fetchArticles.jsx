const fetchArticles = async (dateString) => {
  try {
    const respArticles = await fetch("http://192.168.0.113:5001/v1/yt/posts?postType=news&limit=100&shouldFetchNews=true&sort=publishedAt&date="+dateString);
    const arrArticlesOriginal = await respArticles.json();
    const arrArticlesFiltered = arrArticlesOriginal.map((x) => (
      {
        id: x._id,
        title: x.title,
        content: x.content
      }
    ));
    // console.log(arrArticlesFiltered);
    return arrArticlesFiltered;
  } catch (e) {
    console.error("Error fetching article data", e);
    throw e;
  }
};

export default fetchArticles;