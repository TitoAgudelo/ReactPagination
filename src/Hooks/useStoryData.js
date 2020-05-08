import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useStoryData(storiesId) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentStories, setStoryData] = useState([]);

  const fetchingData = async (storyId) => {
    const response = await axios(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`,);
    return response.data;
  };

  const loadContent = () => {
    let result = [];

    storiesId.map(story => {
      const response = fetchingData(story);
      result.push(response);
    });

    setStoryData(result);
  };

  useEffect(() => {
    async function fetchData() {
      await loadContent();
    }

    fetchData();
  }, []);

  return { error, loading, currentStories };
}
