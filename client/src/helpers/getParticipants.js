async function getParticipants() {
    try {
      const url = `http://www.boredapi.com/api/activity?participants=1`;
      let res = await fetch(url);
      let activityData = await res.json();
      console.log(activityData);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong - failed to fetch.");
    }
  }
  useEffect(() => {
    getParticipants();
  }, []);