export const isAuthenticated =async () => {
	    try {
        const res = await fetch("/aftertlogin", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
        console.log("from authservice");
          console.log(data);
        if (!res.status === 200) {
            return {};
          }
        
        
        return data;
        
        
      } catch (err) {
        console.log(err);
        
      }
};