const api = {
  getResults: async () => {
    try {
      const response = await fetch("/results");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  createResult: async (result) => {
    try {
      const response = await fetch("/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default api;
