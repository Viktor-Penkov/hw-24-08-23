// const list_data =[
// { title:"title1",desc:"descripshion1"},
// { title:"title2",desc:"descripshion2"},
// { title:"title3",desc:"descripshion3"},
// { title:"title4",desc:"descripshion4"},
// { title:"title5",desc:"descripshion5"},
// { title:"title6",desc:"descripshion6"},
// { title:"title7",desc:"descripshion7"},
// ];
// export default list_data


import axios from 'axios';



const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://theaudiodb.p.rapidapi.com/mvid-mb.php",
      params: { i: "20244d07-534f-4eff-b4d4-930878889970" },
      headers: {
        "X-RapidAPI-Key": "082c350bedmsh30bd8702b6f2bdcp1b9a16jsnf7a143799076",
        "X-RapidAPI-Host": "theaudiodb.p.rapidapi.com",
      },
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default fetchData;