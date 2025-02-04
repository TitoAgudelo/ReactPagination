import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useStoryData(storyId) {
  const [currentStory, setStoryData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`,);
        setStoryData(response.data);
      } catch (error) {
        setError(error.message);
        throw error;
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [storyId, setStoryData]);

  return { currentStory, error, loading };
}
