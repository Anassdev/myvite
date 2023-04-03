import axios from "axios";

export const PostData = async () => {
    const res = await axios.post("https://httpbin.org/post", {
      hello: "world",
    });

    console.log('res.data.json', res.data.json);
  };


