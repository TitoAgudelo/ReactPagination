import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useStories() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(async () => {
    try {
      const result = await axios('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',);
      setStories(result.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { error, loading, stories };
}
