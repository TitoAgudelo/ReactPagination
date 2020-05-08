import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useStories() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(async () => {
    async function fetchData() {
      try {
        const result = await axios('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',);
        const resultLength = result.data.length;
        const pagesResult = Math.ceil(resultLength / 5);
        setStories(result.data);
        setPages(pagesResult);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return { error, loading, stories, pages };
}
