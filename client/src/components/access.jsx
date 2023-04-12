
function Accessibility() {
  async function getAccess() {
    try {
      const url = `http://www.boredapi.com/api/activity/?accessibility=${access}`;
      let res = await fetch(url);
      let activityData = await res.json();
      console.log(activityData);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong - failed to fetch.");
    }
  }
}

export default Accessibility;
