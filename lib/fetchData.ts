export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error.message, "failed to fetch");
    return [];
  }
};
