// useFakeApi.js
import { useState, useEffect } from 'react';
import faker from 'faker';

// Simulated asynchronous API endpoint with pagination
const fakeApi = async (page, limit) => {
  const totalCount = 100; // Total number of results
  const totalPages = Math.ceil(totalCount / limit);
  const parsedPage = parseInt(page, 10) || 1;
  const parsedLimit = parseInt(limit, 10) || 10;

  // Simulate an asynchronous delay (e.g., making an HTTP request)
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Calculate the starting index and ending index for the current page
  const startIndex = (parsedPage - 1) * parsedLimit;
  const endIndex = Math.min(startIndex + parsedLimit, totalCount);

  // Generate fake data for the current page
  const data = [];
  for (let i = startIndex; i < endIndex; i++) {
    const event = {
      name: faker.company.catchPhrase(),
      venue: faker.company.companyName(),
      date: faker.date.future(),
    };
    data.push(event);
  }

  return {
    data,
    pagination: {
      totalPages,
      currentPage: parsedPage,
      totalResults: totalCount,
      resultsPerPage: parsedLimit,
    },
  };
};

function useFakeApi(page, limit) {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    totalPages: 0,
    currentPage: page,
    totalResults: 0,
    resultsPerPage: limit,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fakeApi(page, limit)
      .then((response) => {
        setData(response.data);
        setPagination(response.pagination);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, limit]);

  return { data, pagination, loading, error };
}

export default useFakeApi;
